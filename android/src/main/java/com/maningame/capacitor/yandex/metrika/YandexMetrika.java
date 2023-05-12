package com.maningame.capacitor.yandex.metrika;

import android.util.Log;

import com.yandex.metrica.YandexMetrica;

public class YandexMetrika {
    public void reportEvent(String eventName, String eventParameters) {
        YandexMetrica.reportEvent(eventName, eventParameters);
    }
}
