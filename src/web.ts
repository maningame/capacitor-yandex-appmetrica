import { WebPlugin } from '@capacitor/core';

import type {
  ReportEventOptions,
  ReportRevenueOptions,
  YandexMetrikaPlugin,
} from './definitions';

export class YandexMetrikaWeb extends WebPlugin implements YandexMetrikaPlugin {
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
