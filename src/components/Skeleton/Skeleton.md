# Skeleton

## 1. Overview
The **Skeleton** component displays a placeholder preview of content before data loads. It reduces perceived loading time and prevents layout shifts.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Skeleton } from '@/components/Skeleton';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'circular' \| 'rectangular' \| 'rounded'` | `'text'` | Shape. |
| `width` | `string \| number` | `undefined` | Width. |
| `height` | `string \| number` | `undefined` | Height. |
| `animation` | `'wave' \| 'pulse' \| 'none'` | `'wave'` | Animation type. |

## 4. Accessibility
- **ARIA**: `aria-busy="true"`, `aria-live="polite"`.
- **Motion**: Respects `prefers-reduced-motion` media query.

## 5. Best Practices
- **Matching**: Match the dimensions of the loading content exactly to prevent layout shift (CLS).
- **Text**: Use `variant="text"` to simulate lines of text (it adds margin).

## 6. Integration Notes
- Often wrapped in `SkeletonTheme` (if available) for global color config.

## 7. Do’s and Don’ts
- **Do** use instead of spinners for content blocks.
- **Don't** use for interactive elements like buttons (use loading state on button).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
