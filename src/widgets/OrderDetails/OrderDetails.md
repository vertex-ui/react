# OrderDetails

## 1. Overview
The **OrderDetails** widget is a detailed view of an order. It includes a timeline, comprehensive breakdowns, addresses, and management actions (Cancel, Return).

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { OrderDetails } from '@/widgets/OrderDetails';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orderId` | `string` | `undefined` | ID. |
| `orderNumber` | `string` | `undefined` |   |
| `orderDate` | `string` | `undefined` |   |
| `status` | `'pending' \| 'processing' \| 'confirmed' \| 'shipped' \| 'delivered' \| 'cancelled' \| 'returned'` | `undefined` |   |
| `statusText` | `string` | `undefined` |   |
| `customerName` | `string` | `undefined` |   |
| `customerEmail` | `string` | `undefined` |   |
| `customerPhone` | `string` | `undefined` |   |
| `shippingAddress` | `OrderDetailsAddress` | `undefined` |   |
| `billingAddress` | `OrderDetailsAddress` | `undefined` |   |
| `items` | `OrderDetailsItem[]` | `undefined` |   |
| `subtotal` | `number` | `undefined` |   |
| `shippingCost` | `number` | `undefined` |   |
| `tax` | `number` | `undefined` |   |
| `discount` | `number` | `undefined` |   |
| `total` | `number` | `undefined` |   |
| `currency` | `React.ReactNode` | `undefined` |   |
| `couponCode` | `string; // Coupon applied` | `undefined` |   |
| `paymentMethod` | `string` | `undefined` |   |
| `paymentStatus` | `'pending' \| 'paid' \| 'failed' \| 'refunded'` | `undefined` |   |
| `transactionId` | `string` | `undefined` |   |
| `estimatedDelivery` | `string` | `undefined` |   |
| `deliveredDate` | `string` | `undefined` |   |
| `trackingNumber` | `string` | `undefined` | Tracking info. |
| `trackingUrl` | `string` | `undefined` |   |
| `carrier` | `string` | `undefined` |   |
| `onDownloadInvoice` | `(orderId: string) => void` | `undefined` |   |
| `onTrackOrder` | `(orderId: string) => void` | `undefined` |   |
| `onCancelOrder` | `(orderId: string) => void` | `undefined` |   |
| `onReturnOrder` | `(orderId: string) => void` | `undefined` |   |
| `onReorder` | `(orderId: string) => void` | `undefined` |   |
| `onContactSupport` | `(orderId: string) => void` | `undefined` |   |
| `onWriteReview` | `(orderId: string) => void` | `undefined` |   |
| `downloadInvoiceText` | `string` | `undefined` |   |
| `trackOrderText` | `string` | `undefined` |   |
| `cancelOrderText` | `string` | `undefined` |   |
| `returnOrderText` | `string` | `undefined` |   |
| `reorderText` | `string` | `undefined` |   |
| `contactSupportText` | `string` | `undefined` |   |
| `writeReviewText` | `string` | `undefined` |   |
| `showActions` | `boolean` | `undefined` |   |
| `allowCancel` | `boolean` | `undefined` | Show cancel option. |
| `allowReturn` | `boolean` | `undefined` |   |
| `allowReorder` | `boolean` | `undefined` |   |
| `loading` | `boolean` | `false` | If true, shows skeleton loading state |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |

## 4. Accessibility
- **Timeline**: Visual progress indicator.
- **Tables**: Clear pricing breakdown.

## 5. Best Practices
- **Transparency**: Show all costs (tax, shipping) clearly.
- **Updates**: Real-time status timeline improves trust.

## 6. Integration Notes
- Used on the "Order Detail" page.

## 7. Do’s and Don’ts
- **Do** allow easy reordering.
- **Don't** hide contact support options.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
