# InfoListCard

## 1. Overview
The **InfoListCard** widget displays a list of label-value pairs inside a card. It is perfect for summary sections like "Customer Details" or "Order Summary".

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { InfoListCard } from '@/widgets/InfoListCard';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `undefined` | Card heading/title |
| `items` | `InfoListItem[]` | `undefined` | Array of label-value pairs |
| `showDividers` | `boolean` | `false` | Show divider between items |
| `compact` | `boolean` | `false` | Compact spacing |
| `variant` | `'outlined' \| 'elevated' \| 'flat'` | `'outlined'` | Card variant |
| `className` | `string` | `undefined` | Additional class name |
| `style` | `React.CSSProperties` | `undefined` | Inline styles |

## 4. Accessibility
- **Structure**: Uses `div`s. Ensure labels are descriptive.

## 5. Best Practices
- **Alignment**: Value is usually right-aligned or follows the label.
- **Hiding**: Use the `hidden` prop to cleanly remove empty fields without conditional rendering logic in parent.

## 6. Integration Notes
- Used heavily in `OrderDetails`.

## 7. Do’s and Don’ts
- **Do** use for key-value data.
- **Don't** use for interactive lists (use Menu/List).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
