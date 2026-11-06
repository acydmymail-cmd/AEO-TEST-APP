package com.aeotest.app;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebSettings;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.RequestConfiguration;

import java.util.Arrays;

public class MainActivity extends Activity {
    private AdView adView;

    public class AdBridge {
        @JavascriptInterface
        public void showBanner(boolean show) {
            runOnUiThread(() -> {
                if (adView != null) adView.setVisibility(show ? View.VISIBLE : View.GONE);
            });
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

        adView = new AdView(this);
        adView.setAdUnitId("ca-app-pub-3811857750727118/7710954032");
        adView.setAdSize(AdSize.BANNER);

        root.addView(w, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));
        root.addView(adView, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT));

        setContentView(root);
        adView.loadAd(new AdRequest.Builder().build());
        w.loadUrl("file:///android_asset/index.html");
    }

    @Override protected void onPause() {
        if (adView != null) adView.pause();
        super.onPause();
    }

    @Override protected void onResume() {
        super.onResume();
        if (adView != null) adView.resume();
    }

    @Override protected void onDestroy() {
        if (adView != null) adView.destroy();
        super.onDestroy();
    }
}
