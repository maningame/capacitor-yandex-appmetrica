import { registerPlugin } from '@capacitor/core';
const YandexMetrika = registerPlugin('YandexMetrika', {
    web: () => import('./web').then(m => new m.YandexMetrikaWeb()),
});
export * from './definitions';
export { YandexMetrika };
//# sourceMappingURL=index.js.map