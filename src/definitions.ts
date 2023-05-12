/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    YandexMetrika?: {
      apiKey?: string;
    }
  }
}

export interface ReportEventOptions {
  eventName: string
  eventParameters: string
}

export interface ReportRevenueOptions {
  productId: string
  quantity: number
  price: number
  currencyCode: string
  payload: string
}

export interface YandexMetrikaPlugin {
  reportEvent(options: ReportEventOptions): void;

  reportRevenue(options: ReportRevenueOptions): void;
}
