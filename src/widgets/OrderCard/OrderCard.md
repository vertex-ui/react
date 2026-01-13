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
| `orderId` | `string` | required | ID. |
| `status` | `'pending' \| 'delivered' ...` | `'pending'` | State. |
| `items` | `OrderItem[]` | required | Products. |
| `totalAmount` | `number` | required | Cost. |
| `onTrackOrder` | `(id) => void` | `undefined` | Action handler. |

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
