import { registerPlugin } from '@capacitor/core';
const YandexAppMetrica = registerPlugin('YandexAppMetrica', {
    web: () => import('./web').then(m => new m.YandexAppMetricaWeb()),
});
export * from './definitions';
export { YandexAppMetrica };
//# sourceMappingURL=index.js.map