# OrderConfirmation

## 1. Overview
The **OrderConfirmation** widget is a full-page view displayed after a successful checkout. It summarizes the purchase and provides next steps.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { OrderConfirmation } from '@/widgets/OrderConfirmation';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orderId` | `string` | `undefined` | ID. |
| `orderNumber` | `string` | `undefined` |   |
| `orderDate` | `string` | `undefined` |   |
| `status` | `'pending' \| 'processing' \| 'confirmed' \| 'delivered' \| 'cancelled'` | `undefined` | Status. |
| `statusText` | `string` | `undefined` |   |
| `headerText` | `string` | `undefined` |   |
| `headerSubtitle` | `string` | `undefined` |   |
| `customerEmail` | `string` | `undefined` |   |
| `customerPhone` | `string` | `undefined` |   |
| `shippingAddress` | `OrderConfirmationAddress` | `undefined` | Destination. |
| `billingAddress` | `OrderConfirmationAddress` | `undefined` |   |
| `items` | `OrderConfirmationItem[]` | `undefined` | Purchased products. |
| `subtotal` | `number` | `undefined` |   |
| `shippingCost` | `number` | `undefined` |   |
| `tax` | `number` | `undefined` |   |
| `discount` | `number` | `undefined` |   |
| `total` | `number` | `undefined` | Final cost. |
| `currency` | `string` | `undefined` |   |
| `paymentMethod` | `string` | `undefined` |   |
| `transactionId` | `string` | `undefined` |   |
| `estimatedDelivery` | `string` | `undefined` |   |
| `trackingNumber` | `string` | `undefined` |   |
| `onDownloadInvoice` | `(orderId: string) => void` | `undefined` |   |
| `onContinueShopping` | `() => void` | `undefined` | Nav action. |
| `onTrackOrder` | `(orderId: string) => void` | `undefined` |   |
| `onViewDetails` | `(orderId: string) => void` | `undefined` |   |
| `onContactSupport` | `(orderId: string) => void` | `undefined` |   |
| `onShareOrder` | `(orderId: string) => void` | `undefined` |   |
| `downloadInvoiceText` | `string` | `undefined` |   |
| `continueShoppingText` | `string` | `undefined` |   |
| `trackOrderText` | `string` | `undefined` |   |
| `viewDetailsText` | `string` | `undefined` |   |
| `contactSupportText` | `string` | `undefined` |   |
| `shareOrderText` | `string` | `undefined` |   |
| `showActions` | `boolean` | `undefined` |   |
| `hideDownloadInvoice` | `boolean` | `undefined` |   |
| `hideContinueShopping` | `boolean` | `undefined` |   |
| `hideTrackOrder` | `boolean` | `undefined` |   |
| `hideContactSupport` | `boolean` | `undefined` |   |
| `loading` | `boolean` | `false` | If true, shows skeleton loading state |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |

## 4. Accessibility
- **Confirmation**: Clear "Success" heading.
- **Structure**: logical flow from status -> summary -> actions.

## 5. Best Practices
- **Reassurance**: Clearly state that an email has been sent.
- **Next Steps**: Offer "Track Order" or "Continue Shopping".

## 6. Integration Notes
- Large component comprising `InfoListCard`, `ProductCard`, and `Card`.

## 7. Do’s and Don’ts
- **Do** print-optimize this view (or provide PDF download).
- **Don't** clutter with upsells immediately; let the user celebrate the purchase.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
