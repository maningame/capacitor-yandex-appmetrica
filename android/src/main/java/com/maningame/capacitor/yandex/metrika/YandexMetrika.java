package com.maningame.capacitor.yandex.metrika;

import android.content.Context;
import android.util.Log;

import com.yandex.metrica.Revenue;
import com.yandex.metrica.YandexMetrica;

import java.util.Currency;

public class YandexMetrika {

    private final Context context;
    private final YandexMetrikaConfig config;

    YandexMetrika(Context context, YandexMetrikaConfig config) {
        this.context = context;
        this.config = config;
    }

    public void reportEvent(String eventName, String eventParameters) {
        YandexMetrica.reportEvent(eventName, eventParameters);
    }

    public void reportRevenue(String productId, Integer quantity, Float price, String currencyCode, String payload) {
        long base = (long) Math.pow(10, 6);
        long priceMicros = (long) (price * base);

        Revenue revenue = Revenue.newBuilderWithMicros(priceMicros, Currency.getInstance(currencyCode))
                .withProductID(productId)
                .withQuantity(quantity)
                .withPayload(payload)
                .build();

        if (config.getApiKey().equals("")) {
            YandexMetrica.reportRevenue(revenue);
        } else {
            YandexMetrica.getReporter(context, config.getApiKey()).reportRevenue(revenue);
        }
    }
}
