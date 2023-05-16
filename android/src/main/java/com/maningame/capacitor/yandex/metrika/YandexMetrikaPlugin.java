package com.maningame.capacitor.yandex.metrika;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "YandexMetrika")
public class YandexMetrikaPlugin extends Plugin {

    private YandexMetrika yandexMetrika;

    public void load() {
        YandexMetrikaConfig config = getYandexMetrikaConfig();
        Context ctx = this.getActivity().getApplicationContext();

        yandexMetrika = new YandexMetrika(ctx, config);
    }

    @PluginMethod
    public void reportEvent(PluginCall call) {
        String eventName = call.getString("eventName");
        String eventParameters = call.getString("eventParameters");

        yandexMetrika.reportEvent(eventName, eventParameters);
    }

    @PluginMethod
    public void reportRevenue(PluginCall call) {
        String productId = call.getString("productId");
        Integer quantity = call.getInt("quantity");
        Float price = call.getFloat("price");
        String currencyCode = call.getString("currencyCode");
        String payload = call.getString("payload");

        yandexMetrika.reportRevenue(productId, quantity, price, currencyCode, payload);
    }

    @PluginMethod
    public void sendEventsBuffer() {
        yandexMetrika.sendEventsBuffer();
    }

    private YandexMetrikaConfig getYandexMetrikaConfig() {
        YandexMetrikaConfig config = new YandexMetrikaConfig();

        String apiKey = getConfig().getString("apiKey", "");
        config.setApiKey(apiKey);

        return config;
    }
}
