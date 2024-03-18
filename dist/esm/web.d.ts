import { WebPlugin } from '@capacitor/core';
import type { ReportEventOptions, ReportRevenueOptions, YandexAppMetricaPlugin } from './definitions';
export declare class YandexAppMetricaWeb extends WebPlugin implements YandexAppMetricaPlugin {
    reportEvent(options: ReportEventOptions): void;
    reportRevenue(options: ReportRevenueOptions): void;
    sendEventsBuffer(): void;
}
