export interface YandexMetrikaPlugin {
  reportEvent(options: { eventName: string, eventParameters: string }): void;
}
