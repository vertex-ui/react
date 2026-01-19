# OrderCard

## 1. Overview
The **OrderCard** widget summarizes a single order in a list view. It shows items, status, price, and primary actions (Track).

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { OrderCard } from '@/widgets/OrderCard';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orderId` | `string` | `undefined` | Unique order identifier |
| `orderNumber` | `string` | `undefined` | Display order number (defaults to orderId) |
| `status` | `'pending' \| 'processing' \| 'delivered' \| 'cancelled' \| 'shipped'` | `'pending'` | Order status |
| `statusText` | `string` | `undefined` | Custom status text (overrides default) |
| `items` | `OrderItem[]` | `undefined` | Array of order items |
| `deliveryDate` | `string` | `undefined` | Delivery date string |
| `deliveryLabel` | `string` | `'Delivered on'` | Delivery label text |
| `totalAmount` | `number` | `undefined` | Total order amount |
| `currency` | `React.ReactNode` | `<RupeeIcon />` | Currency symbol or icon |
| `onTrackOrder` | `(orderId: string) => void` | `undefined` | Track order button handler |
| `onViewDetails` | `(orderId: string) => void` | `undefined` | View details handler |
| `trackButtonText` | `string` | `'Track Order'` | Track button text |
| `loading` | `boolean` | `false` | If true, shows skeleton loading state |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |

## 4. Accessibility
- **Status**: Uses colored badges for visual status.
- **Images**: Alt text from product name.

## 5. Best Practices
- **Images**: Only show the first image and a count ("+2 more items") to save space.
- **Actions**: Provide a clear call to action (Track/View).

## 6. Integration Notes
- Designed for "My Orders" lists.

## 7. Do’s and Don’ts
- **Do** show the delivery date if known.
- **Don't** show every single item in the summary card; truncate.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
