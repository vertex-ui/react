# Divider

## 1. Overview
The **Divider** component is a visual separator used to group content in lists, layouts, and menus. It improves readability by creating clear boundaries between sections.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Divider } from '@/components/Divider';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'fullWidth' \| 'inset' \| 'middle'` | `'fullWidth'` | Length/style of the line. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Axis of the divider. |
| `light` | `boolean` | `false` | Lighter color for dark backgrounds. |
| `children` | `ReactNode` | `undefined` | Content to display in the middle (horizontal only). |
| `textAlign` | `'center' \| 'left' \| 'right'` | `'center'` | Alignment of content. |
| `flexItem` | `boolean` | `false` | Auto-height in flex containers. |

## 4. Accessibility
- **Role**: `role="separator"`.
- **Orientation**: Adds `aria-orientation` when vertical.
- **Ignored**: If purely decorative (empty), screen readers often ignore it, which is desired.

## 5. Best Practices
- **Lists**: Use `variant="inset"` in lists with avatars to align with text.
- **Content**: Use text dividers (e.g., "OR") in login forms between methods.

## 6. Integration Notes
- Works well inside `Flex` or `Stack` layouts.

## 7. Do’s and Don’ts
- **Do** use `vertical` dividers in toolbars.
- **Don't** overuse dividers; whitespace is often a better separator.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
