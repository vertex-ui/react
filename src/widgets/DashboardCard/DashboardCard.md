# DashboardCard

## 1. Overview
The **DashboardCard** widget displays metrics, progress, or comparisons. It is the building block of analytic dashboards.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { DashboardCard } from '@/widgets/DashboardCard';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'comparison'` | `undefined` |   |
| `data` | `ComparisonCardData` | `undefined` |   |
| `settings` | `ComparisonCardSettings` | `undefined` |   |
| `current` | `number` | `undefined` |   |
| `target` | `number` | `undefined` |   |
| `label` | `string` | `undefined` |   |
| `icon` | `React.ReactNode` | `undefined` |   |
| `unit` | `string` | `undefined` |   |
| `subtitle` | `string` | `undefined` |   |
| `theme` | `DashboardCardTheme` | `undefined` |   |
| `variant` | `'outlined' \| 'filled'` | `undefined` |   |
| `showPercentage` | `boolean` | `undefined` |   |
| `showValues` | `boolean` | `undefined` |   |
| `progressType` | `'bar' \| 'circle'` | `undefined` |   |
| `status` | `'on-track' \| 'at-risk' \| 'exceeded' \| 'behind'` | `undefined` |   |
| `items` | `Array<{` | `undefined` |   |
| `layout` | `'horizontal' \| 'vertical'` | `undefined` |   |
| `showTrends` | `boolean` | `undefined` |   |
| `showDivider` | `boolean` | `undefined` |   |

## 4. Accessibility
- **Semantics**: Uses headings for values and labels.
- **Trends**: Icons (Up/Down) have aria-labels.

## 5. Best Practices
- **Consistency**: Use the same `valueSize` across a row of cards.
- **Trends**: Always show positive/negative context (green/red).

## 6. Integration Notes
- Used by `Widget` component internally.

## 7. Do’s and Don’ts
- **Do** use `loading` state while fetching data.
- **Don't** overload a single card with too many metrics.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
