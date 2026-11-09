package com.aeotest.app;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebSettings;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkRequest;
import android.util.Log;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.RequestConfiguration;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.SetOptions;

import org.json.JSONObject;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends Activity {
    private static final String TAG = "AEOTest";
    private static final String LIVE_BANNER_ID = "ca-app-pub-3811857750727118/7710954032";
    private AdView topAdView, bottomAdView;
    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;
    private boolean adsInitialized = false;
    private WebView webView;
    private FirebaseAuth auth;
    private FirebaseFirestore db;

    private void js(String script) {
        runOnUiThread(() -> {
            if (webView != null) webView.evaluateJavascript(script, null);
        });
    }

    public class AdBridge {
        @JavascriptInterface public void showBanner(boolean show) {
            runOnUiThread(() -> {
                if (topAdView != null) topAdView.setVisibility(show ? View.VISIBLE : View.GONE);
                if (bottomAdView != null) bottomAdView.setVisibility(show ? View.VISIBLE : View.GONE);
            });
        }
    }

    public class CloudBridge {
        @JavascriptInterface public void login(String email, String password) {
            if (auth == null) { js("onCloudLogin(false,'Firebase not initialized')"); return; }
            auth.signInWithEmailAndPassword(email.trim(), password)
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        js("onCloudLogin(true,'Teacher login successful')");
                        loadData();
                    } else {
                        String message = task.getException() == null ? "Login failed" : task.getException().getMessage();
                        js("onCloudLogin(false," + JSONObject.quote(message) + ")");
                    }
                });
        }

        @JavascriptInterface public void loadData() {
            if (auth == null || auth.getCurrentUser() == null || db == null) {
                js("onCloudDataError('Please login first')");
                return;
            }
            db.collection("app_data").document("teacher_data").get()
                .addOnSuccessListener(snapshot -> {
                    if (snapshot.exists()) {
                        try {
                            JSONObject data = new JSONObject((Map<?, ?>) snapshot.getData());
                            js("onCloudData(" + JSONObject.quote(data.toString()) + ")");
                        } catch (Exception e) {
                            js("onCloudDataError('Could not read cloud data')");
                        }
                    } else {
                        js("onCloudData('{}')");
                    }
                })
                .addOnFailureListener(e -> js("onCloudDataError(" + JSONObject.quote(e.getMessage()) + ")"));
        }

        @JavascriptInterface public void syncData(String json) {
            if (auth == null || auth.getCurrentUser() == null || db == null) {
                js("onCloudSync(false,'Login required for cloud sync')");
                return;
            }
            try {
                JSONObject object = new JSONObject(json);
                Map<String, Object> data = new HashMap<>();
                data.put("students", object.optJSONObject("students") == null ? new JSONObject() : object.optJSONObject("students"));
                data.put("assessmentHistory", object.optJSONArray("assessmentHistory") == null ? new org.json.JSONArray() : object.optJSONArray("assessmentHistory"));
                data.put("updatedAt", System.currentTimeMillis());
                db.collection("app_data").document("teacher_data").set(data, SetOptions.merge())
                    .addOnSuccessListener(v -> js("onCloudSync(true,'Cloud backup updated')"))
                    .addOnFailureListener(e -> js("onCloudSync(false," + JSONObject.quote(e.getMessage()) + ")"));
            } catch (Exception e) {
                js("onCloudSync(false,'Invalid backup data')");
            }
        }

        @JavascriptInterface public void logout() {
            if (auth != null) auth.signOut();
            js("onCloudLogout()");
        }
    }

    private void loadBannerAds() {
        if (!adsInitialized) return;
        AdRequest request = new AdRequest.Builder().build();
        if (topAdView != null) topAdView.loadAd(request);
        if (bottomAdView != null) bottomAdView.loadAd(new AdRequest.Builder().build());
    }

    private AdListener createAdListener(String placement) {
        return new AdListener() {
            @Override public void onAdLoaded() { Log.d(TAG, placement + " banner loaded"); }
            @Override public void onAdFailedToLoad(LoadAdError error) { Log.e(TAG, placement + " banner failed: " + error); }
        };
    }

    private void monitorInternetForAds() {
        connectivityManager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        if (connectivityManager == null) return;
        networkCallback = new ConnectivityManager.NetworkCallback() {
            @Override public void onAvailable(Network network) { runOnUiThread(() -> loadBannerAds()); }
        };
        NetworkRequest request = new NetworkRequest.Builder().addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET).build();
        try { connectivityManager.registerNetworkCallback(request, networkCallback); }
        catch (Exception e) { Log.e(TAG, "Could not register network callback", e); }
    }

    @Override public void onCreate(Bundle b) {
        super.onCreate(b);

        try {
            FirebaseApp.initializeApp(this);
            auth = FirebaseAuth.getInstance();
            db = FirebaseFirestore.getInstance();
        } catch (Exception e) {
            Log.e(TAG, "Firebase initialization failed", e);
        }

        RequestConfiguration config = new RequestConfiguration.Builder()
            .setTagForChildDirectedTreatment(RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE)
            .setMaxAdContentRating(RequestConfiguration.MAX_AD_CONTENT_RATING_G).build();
        MobileAds.setRequestConfiguration(config);

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER_HORIZONTAL);

        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        webView.addJavascriptInterface(new AdBridge(), "AndroidAds");
        webView.addJavascriptInterface(new CloudBridge(), "AndroidCloud");

        topAdView = new AdView(this);
        topAdView.setAdUnitId(LIVE_BANNER_ID);
        topAdView.setAdSize(AdSize.BANNER);
        topAdView.setAdListener(createAdListener("Top"));

        bottomAdView = new AdView(this);
        bottomAdView.setAdUnitId(LIVE_BANNER_ID);
        bottomAdView.setAdSize(AdSize.BANNER);
        bottomAdView.setAdListener(createAdListener("Bottom"));

        root.addView(topAdView, new LinearLayout.LayoutParams(-1, -2));
        root.addView(webView, new LinearLayout.LayoutParams(-1, 0, 1f));
        root.addView(bottomAdView, new LinearLayout.LayoutParams(-1, -2));
        setContentView(root);

        MobileAds.initialize(this, status -> {
            adsInitialized = true;
            runOnUiThread(this::loadBannerAds);
        });
        monitorInternetForAds();
        webView.loadUrl("file:///android_asset/index.html");
    }

    @Override protected void onPause() {
        if (topAdView != null) topAdView.pause();
        if (bottomAdView != null) bottomAdView.pause();
        super.onPause();
    }
    @Override protected void onResume() {
        super.onResume();
        if (topAdView != null) topAdView.resume();
        if (bottomAdView != null) bottomAdView.resume();
    }
    @Override protected void onDestroy() {
        if (connectivityManager != null && networkCallback != null) {
            try { connectivityManager.unregisterNetworkCallback(networkCallback); } catch (Exception ignored) {}
        }
        if (topAdView != null) topAdView.destroy();
        if (bottomAdView != null) bottomAdView.destroy();
        if (webView != null) webView.destroy();
        super.onDestroy();
    }
}
