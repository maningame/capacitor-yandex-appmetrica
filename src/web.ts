import { WebPlugin } from '@capacitor/core';

import type {
  ReportEventOptions,
  ReportRevenueOptions,
  YandexAppMetricaPlugin,
} from './definitions';

export class YandexAppMetricaWeb extends WebPlugin implements YandexAppMetricaPlugin {
  reportEvent(options: ReportEventOptions) {
    console.log('reportEvent', options)
    throw this.unimplemented('Not implemented on web.');
  }

  reportRevenue(options: ReportRevenueOptions) {
    console.log('reportRevenue', options)
    throw this.unimplemented('Not implemented on web.');
  }

  sendEventsBuffer() {
    console.log('sendEventsBuffer')
    throw this.unimplemented('Not implemented on web.');
  }
}
