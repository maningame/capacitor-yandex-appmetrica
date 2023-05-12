# capacitor-yandex-metrika

Capacitor Yandex Metrika Plugin

## Install

```bash
npm install capacitor-yandex-metrika
npx cap sync
```

## API

<docgen-index>

* [`reportEvent(...)`](#reportevent)
* [`reportRevenue(...)`](#reportrevenue)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### reportEvent(...)

```typescript
reportEvent(options: ReportEventOptions) => void
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#reporteventoptions">ReportEventOptions</a></code> |

--------------------


### reportRevenue(...)

```typescript
reportRevenue(options: ReportRevenueOptions) => void
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#reportrevenueoptions">ReportRevenueOptions</a></code> |

--------------------


### Interfaces


#### ReportEventOptions

| Prop                  | Type                |
| --------------------- | ------------------- |
| **`eventName`**       | <code>string</code> |
| **`eventParameters`** | <code>string</code> |


#### ReportRevenueOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`productId`**    | <code>string</code> |
| **`quantity`**     | <code>number</code> |
| **`price`**        | <code>number</code> |
| **`currencyCode`** | <code>string</code> |
| **`payload`**      | <code>string</code> |

</docgen-api>
