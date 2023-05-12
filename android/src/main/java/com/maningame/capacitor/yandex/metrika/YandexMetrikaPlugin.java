package com.maningame.capacitor.yandex.metrika;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "YandexMetrika")
public class YandexMetrikaPlugin extends Plugin {

    private YandexMetrika implementation = new YandexMetrika();

    @PluginMethod
    public void reportEvent(PluginCall call) {
        String eventName = call.getString("eventName");
        String eventParameters = call.getString("eventParameters");

        implementation.reportEvent(eventName, eventParameters);
    }
}
