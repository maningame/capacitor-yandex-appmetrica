package com.maningame.capacitor.yandex.appmetrica;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "YandexAppMetrica")
public class YandexAppMetricaPlugin extends Plugin {

    private YandexAppMetrica yandexAppMetrica;

    public void load() {
        YandexAppMetricaConfig config = getYandexAppMetricaConfig();
        Context ctx = this.getActivity().getApplicationContext();

        yandexAppMetrica = new YandexAppMetrica(ctx, config);
    }

    @PluginMethod
    public void reportEvent(PluginCall call) {
        String eventName = call.getString("eventName");
        String eventParameters = call.getString("eventParameters");

        yandexAppMetrica.reportEvent(eventName, eventParameters);
    }

    @PluginMethod
    public void reportRevenue(PluginCall call) {
        String productId = call.getString("productId");
        Integer quantity = call.getInt("quantity");
        Float price = call.getFloat("price");
        String currencyCode = call.getString("currencyCode");
        String payload = call.getString("payload");

        yandexAppMetrica.reportRevenue(productId, quantity, price, currencyCode, payload);
    }

    @PluginMethod
    public void sendEventsBuffer() {
        yandexAppMetrica.sendEventsBuffer();
    }

    private YandexAppMetricaConfig getYandexAppMetricaConfig() {
        YandexAppMetricaConfig config = new YandexAppMetricaConfig();

        String apiKey = getConfig().getString("apiKey", "");
        config.setApiKey(apiKey);

        return config;
    }
}
