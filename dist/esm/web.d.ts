import { WebPlugin } from '@capacitor/core';
import type { ReportEventOptions, ReportRevenueOptions, YandexMetrikaPlugin } from './definitions';
export declare class YandexMetrikaWeb extends WebPlugin implements YandexMetrikaPlugin {
    reportEvent(options: ReportEventOptions): void;
    reportRevenue(options: ReportRevenueOptions): void;
    sendEventsBuffer(): void;
}
