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

public class MainActivity extends Activity {
    private static final String TAG = "AEOTestAds";
    // Google's official test banner unit ID. Replace with the live unit only after test ads load.
    private static final String TEST_BANNER_ID = "ca-app-pub-3940256099942544/6300978111";

    private AdView topAdView;
    private AdView bottomAdView;
    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;
    private boolean adsInitialized = false;

    public class AdBridge {
        @JavascriptInterface
        public void showBanner(boolean show) {
            runOnUiThread(() -> {
                if (topAdView != null) topAdView.setVisibility(show ? View.VISIBLE : View.GONE);
                if (bottomAdView != null) bottomAdView.setVisibility(show ? View.VISIBLE : View.GONE);
            });
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
            @Override
            public void onAdLoaded() {
                Log.d(TAG, placement + " banner loaded");
            }

            @Override
            public void onAdFailedToLoad(LoadAdError error) {
                Log.e(TAG, placement + " banner failed: " + error);
            }
        };
    }

    private void monitorInternetForAds() {
        connectivityManager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        if (connectivityManager == null) return;

        networkCallback = new ConnectivityManager.NetworkCallback() {
            @Override
            public void onAvailable(Network network) {
                runOnUiThread(() -> loadBannerAds());
            }
        };

        NetworkRequest request = new NetworkRequest.Builder()
                .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
                .build();

        try {
            connectivityManager.registerNetworkCallback(request, networkCallback);
        } catch (Exception e) {
            Log.e(TAG, "Could not register network callback", e);
        }
    }

    @Override public void onCreate(Bundle b) {
        super.onCreate(b);

        RequestConfiguration config = new RequestConfiguration.Builder()
                .setTagForChildDirectedTreatment(
                        RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE)
                .setMaxAdContentRating(RequestConfiguration.MAX_AD_CONTENT_RATING_G)
                .build();
        MobileAds.setRequestConfiguration(config);

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER_HORIZONTAL);

        WebView w = new WebView(this);
        WebSettings s = w.getSettings();
        s.setJavaScriptEnabled(true);
        w.addJavascriptInterface(new AdBridge(), "AndroidAds");

        topAdView = new AdView(this);
        topAdView.setAdUnitId(TEST_BANNER_ID);
        topAdView.setAdSize(AdSize.BANNER);
        topAdView.setAdListener(createAdListener("Top"));

        bottomAdView = new AdView(this);
        bottomAdView.setAdUnitId(TEST_BANNER_ID);
        bottomAdView.setAdSize(AdSize.BANNER);
        bottomAdView.setAdListener(createAdListener("Bottom"));

        root.addView(topAdView, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT));
        root.addView(w, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));
        root.addView(bottomAdView, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT));

        setContentView(root);

        MobileAds.initialize(this, initializationStatus -> {
            adsInitialized = true;
            runOnUiThread(this::loadBannerAds);
        });
        monitorInternetForAds();

        // Questions, lessons, tests and reports are stored locally for offline access.
        w.loadUrl("file:///android_asset/index.html");
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
            try {
                connectivityManager.unregisterNetworkCallback(networkCallback);
            } catch (Exception ignored) {}
        }
        if (topAdView != null) topAdView.destroy();
        if (bottomAdView != null) bottomAdView.destroy();
        super.onDestroy();
    }
}