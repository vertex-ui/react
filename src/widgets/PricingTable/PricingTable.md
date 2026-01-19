# PricingTable

## 1. Overview
The **PricingTable** widget displays subscription plans side-by-side. It highlights features, prices, and a recommended plan.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { PricingTable } from '@/widgets/PricingTable';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tiers` | `PricingTier[]` | `undefined` | Plan data. |
| `columns` | `2 \| 3 \| 4` | `undefined` | 4` |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |

## 4. Accessibility
- **Comparison**: Consistent structure allows easy comparison.
- **Buttons**: Clear labels ("Choose Basic", "Choose Pro").

## 5. Best Practices
- **Highlight**: Always highlight one plan as "Popular" to guide decision making.
- **Clarity**: Use checkmarks and cross icons for feature inclusion.

## 6. Integration Notes
- Responsive grid layout (stacks on mobile).

## 7. Do’s and Don’ts
- **Do** show billing period (Monthly/Yearly).
- **Don't** hide critical limitations in small print.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
