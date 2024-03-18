import { registerPlugin } from '@capacitor/core';

import type { YandexAppMetricaPlugin } from './definitions';

const YandexAppMetrica = registerPlugin<YandexAppMetricaPlugin>('YandexAppMetrica', {
  web: () => import('./web').then(m => new m.YandexAppMetricaWeb()),
});

export * from './definitions';
export { YandexAppMetrica };
