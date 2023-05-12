import { WebPlugin } from '@capacitor/core';

import type { YandexMetrikaPlugin } from './definitions';

export class YandexMetrikaWeb extends WebPlugin implements YandexMetrikaPlugin {
  reportEvent(options: { eventName: string; eventParameters: string }) {
    console.log('reportEvent', options)
    throw this.unimplemented('Not implemented on web.');
  }
}
