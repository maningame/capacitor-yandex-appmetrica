package com.maningame.capacitor.yandex.appmetrica;

import android.content.Context;
import android.util.Log;

import io.appmetrica.analytics.Revenue;
import io.appmetrica.analytics.AppMetrica;

import java.util.Currency;

public class YandexAppMetrica {

    private final Context context;
    private final YandexAppMetricaConfig config;

    YandexAppMetrica(Context context, YandexAppMetricaConfig config) {
        this.context = context;
        this.config = config;
    }

    public void reportEvent(String eventName, String eventParameters) {
        AppMetrica.reportEvent(eventName, eventParameters);
    }

    public void reportRevenue(String productId, Integer quantity, Float price, String currencyCode, String payload) {
        long base = (long) Math.pow(10, 6);
        long priceMicros = (long) (price * base);

        Revenue revenue = Revenue.newBuilder(priceMicros, Currency.getInstance(currencyCode))
            .withProductID(productId)
            .withQuantity(quantity)
            .withPayload(payload)
            .build();

        if (config.getApiKey().equals("")) {
            AppMetrica.reportRevenue(revenue);
        } else {
            AppMetrica.getReporter(context, config.getApiKey()).reportRevenue(revenue);
        }
    }

    public void sendEventsBuffer() {
        AppMetrica.sendEventsBuffer();
    }
}
