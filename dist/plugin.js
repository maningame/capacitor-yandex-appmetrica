var capacitorYandexAppMetrica = (function (exports, core) {
    'use strict';

    const YandexAppMetrica = core.registerPlugin('YandexAppMetrica', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.YandexAppMetricaWeb()),
    });

    class YandexAppMetricaWeb extends core.WebPlugin {
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
        YandexAppMetricaWeb: YandexAppMetricaWeb
    });

    exports.YandexAppMetrica = YandexAppMetrica;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
