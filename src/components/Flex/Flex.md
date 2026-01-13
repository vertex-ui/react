# Flex

## 1. Overview
The **Flex** component is a layout utility based on CSS Flexbox. It simplifies creating flexible, responsive layouts without writing custom CSS classes.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Flex } from '@/components/Flex';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Items to layout. |
| `direction` | `'row' \| 'column' ...` | `'row'` | Flex direction. |
| `align` | `'start' \| 'center' ...` | `'stretch'` | Align items (cross axis). |
| `justify` | `'start' \| 'center' ...` | `'start'` | Justify content (main axis). |
| `gap` | `number \| string` | `undefined` | Gap between items. |
| `wrap` | `'nowrap' \| 'wrap'` | `'nowrap'` | Flex wrap. |
| `fullWidth` | `boolean` | `false` | Width 100%. |

## 4. Accessibility
- **Structure**: Renders a `div` (or specified `as` element). Ensure logical reading order matches visual order.

## 5. Best Practices
- **Layout**: Use for 1D layouts (rows or columns). Use `Grid` for 2D.
- **Gap**: Prefer `gap` over margins on children.

## 6. Integration Notes
- Extends `Box` component, so it accepts all Box props.

## 7. Do’s and Don’ts
- **Do** use nested Flex containers for complex alignments.
- **Don't** use Flexbox for page-level grid structures; use `Grid`.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
