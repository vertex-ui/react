# Typography

## 1. Overview
The **Typography** component standardizes text styles across the application. It manages font sizes, weights, line heights, and semantic HTML tags.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Typography } from '@/components/Typography';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'body1' \| 'caption' ...` | `'body1'` | Style preset. |
| `as` | `ElementType` | inferred | HTML tag. |
| `color` | `'primary' \| 'secondary' ...` | `'inherit'` | Text color. |
| `weight` | `string \| number` | `undefined` | Font weight. |
| `align` | `'left' \| 'center' ...` | `undefined` | Text alignment. |
| `truncate` | `boolean` | `false` | Single line ellipsis. |
| `lineClamp` | `number` | `undefined` | Multi-line truncation. |

## 4. Accessibility
- **Semantics**: Defaults to appropriate tags (`h1` for `h1` variant), but customizable via `as` prop to maintain hierarchy without changing style.

## 5. Best Practices
- **Hierarchy**: Use `variant` to establish visual hierarchy.
- **Override**: Use `as` to decouple style from semantics (e.g., `<Typography variant="h3" as="h1">`).

## 6. Integration Notes
- The core of all text rendering in the system.

## 7. Do’s and Don’ts
- **Do** use for all text.
- **Don't** use inline styles for font-size.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
