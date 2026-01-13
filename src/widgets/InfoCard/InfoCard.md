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
| `icon` | `ReactNode` | required | Icon element. |
| `text` | `ReactNode` | required | Main text. |
| `subText` | `ReactNode` | `undefined` | Secondary text. |
| `iconVariant` | `'primary' \| 'success' ...` | `'primary'` | Icon color. |

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
