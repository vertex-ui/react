# InfoCard

## 1. Overview
The **InfoCard** widget displays a piece of information with an icon context. It comes in Base (horizontal) and Metric (centered) variants.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { InfoCard } from '@/widgets/InfoCard';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | `undefined` | Icon element to display |
| `iconVariant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Visual variant for the icon styling |
| `text` | `React.ReactNode` | `undefined` | Main text content |
| `subText` | `React.ReactNode` | `undefined` | Optional secondary text below main text |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |
| `value` | `React.ReactNode` | `undefined` | Primary value/metric to display |
| `label` | `React.ReactNode` | `undefined` | Optional label for the metric |
| `Base` | `InfoCardBaseWithParsedClasses as React.FC<InfoCardBaseProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` | InfoCard.Metric - Centered metric display card Displays a large metric value with optional label in a centered card layout |
| `Metric` | `InfoCardMetricWithParsedClasses as React.FC<InfoCardMetricProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |

## 4. Accessibility
- **Icons**: Decorative icons should be aria-hidden (handled by Icon component usually).

## 5. Best Practices
- **Usage**: Good for feature highlights or quick stats.
- **Contrast**: Ensure text color contrasts with background if using filled variants.

## 6. Integration Notes
- Simple wrapper around `Card`.

## 7. Do’s and Don’ts
- **Do** use `Metric` variant for numbers.
- **Don't** put long paragraphs in `subText`.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
