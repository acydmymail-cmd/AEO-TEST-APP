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

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.RequestConfiguration;

public class MainActivity extends Activity {
    private AdView topAdView;
    private AdView bottomAdView;
    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;

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
        if (topAdView != null) topAdView.loadAd(new AdRequest.Builder().build());
        if (bottomAdView != null) bottomAdView.loadAd(new AdRequest.Builder().build());
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
        } catch (Exception ignored) {
            // Initial ad request still runs if callback registration is unavailable.
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
        MobileAds.initialize(this, initializationStatus -> {});

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER_HORIZONTAL);

        WebView w = new WebView(this);
        WebSettings s = w.getSettings();
        s.setJavaScriptEnabled(true);
        w.addJavascriptInterface(new AdBridge(), "AndroidAds");

        topAdView = new AdView(this);
        topAdView.setAdUnitId("ca-app-pub-3811857750727118/7710954032");
        topAdView.setAdSize(AdSize.BANNER);

        bottomAdView = new AdView(this);
        bottomAdView.setAdUnitId("ca-app-pub-3811857750727118/7710954032");
        bottomAdView.setAdSize(AdSize.BANNER);

        root.addView(topAdView, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT));
        root.addView(w, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));
        root.addView(bottomAdView, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT));

        setContentView(root);
        loadBannerAds();
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