import { registerPlugin } from '@capacitor/core';

import type { YandexMetrikaPlugin } from './definitions';

const YandexMetrika = registerPlugin<YandexMetrikaPlugin>('YandexMetrika', {
  web: () => import('./web').then(m => new m.YandexMetrikaWeb()),
});

export * from './definitions';
export { YandexMetrika };
