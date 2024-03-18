declare module '@capacitor/cli' {
    interface PluginsConfig {
        YandexAppMetrica?: {
            apiKey?: string;
        };
    }
}
export interface ReportEventOptions {
    eventName: string;
    eventParameters: string;
}
export interface ReportRevenueOptions {
    productId: string;
    quantity: number;
    price: number;
    currencyCode: string;
    payload: string;
}
export interface YandexAppMetricaPlugin {
    reportEvent(options: ReportEventOptions): void;
    reportRevenue(options: ReportRevenueOptions): void;
    sendEventsBuffer(): void;
}
