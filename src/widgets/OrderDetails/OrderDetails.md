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
| `orderId` | `string` | required | ID. |
| `timelineSteps` | `string[]` | `undefined` | Custom timeline. |
| `allowCancel` | `boolean` | `true` | Show cancel option. |
| `trackingNumber` | `string` | `undefined` | Tracking info. |

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
