import { WebPlugin } from '@capacitor/core';
export class YandexMetrikaWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map