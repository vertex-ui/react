# Chip

## 1. Overview
The **Chip** component represents a complex entity in a small block, such as a contact, tag, or attribute. It allows users to enter information, make selections, filter content, or trigger actions. Chips are compact and versatile.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Chip } from '@/components/Chip';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | The text content. |
| `onDelete` | `(e) => void` | `undefined` | If provided, shows a delete (X) icon. |
| `onClick` | `(e) => void` | `undefined` | Callback for click interactions. |
| `avatar` | `string` | `undefined` | URL for an avatar image on the left. |
| `icon` | `ReactNode` | `undefined` | Custom icon on the left. |
| `variant` | `'filled' \| 'outlined' \| 'light'` | `'filled'` | Visual style. |
| `color` | `'default' \| 'primary' \| ...` | `'default'` | Semantic color theme. |
| `size` | `'sm' \| 'md'` | `'md'` | Size of the chip. |
| `disabled` | `boolean` | `false` | Disables interaction. |

## 4. Accessibility
- **Keyboard**: Focusable if interactive (`onClick` or `onDelete`).
- **Roles**:
  - `button` if clickable.
  - Delete button has `aria-label="Remove [label]"`.
- **Navigation**: Supports Tab navigation and Enter/Space activation.

## 5. Best Practices
- **Filters**: Use for active filters in a search interface (with `onDelete` to clear).
- **Selection**: Use for multi-select inputs where selected items appear as chips.
- **Conciseness**: Keep labels very short.

## 6. Integration Notes
- Used internally by `MultiSelect` to display selected values.
- Used in `DataGrid` for tag columns.

## 7. Do’s and Don’ts
- **Do** use `outlined` variant for less emphasis.
- **Don't** overload a single chip with too much information.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
