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
| `orderId` | `string` | required | ID. |
| `status` | `string` | `'confirmed'` | Status. |
| `items` | `Item[]` | required | Purchased products. |
| `shippingAddress` | `Address` | required | Destination. |
| `total` | `number` | required | Final cost. |
| `onContinueShopping` | `() => void` | `undefined` | Nav action. |

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
