'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const YandexMetrika = core.registerPlugin('YandexMetrika', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.YandexMetrikaWeb()),
});

class YandexMetrikaWeb extends core.WebPlugin {
    reportEvent(options) {
        console.log('reportEvent', options);
        throw this.unimplemented('Not implemented on web.');
    }
    reportRevenue(options) {
        console.log('reportRevenue', options);
        throw this.unimplemented('Not implemented on web.');
    }
    sendEventsBuffer() {
        console.log('sendEventsBuffer');
        throw this.unimplemented('Not implemented on web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    YandexMetrikaWeb: YandexMetrikaWeb
});

exports.YandexMetrika = YandexMetrika;
//# sourceMappingURL=plugin.cjs.js.map
