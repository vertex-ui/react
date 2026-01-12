# Checkbox

## 1. Overview
The **Checkbox** component allows users to select one or more items from a set. It supports checked, unchecked, and indeterminate states. It is a standard form control essential for settings, lists, and multi-select scenarios.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Checkbox } from '@/components/Checkbox';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state. |
| `onChange` | `(event) => void` | `undefined` | Callback when state changes. |
| `label` | `ReactNode` | `undefined` | Text label next to the box. |
| `indeterminate` | `boolean` | `false` | Visual state for "partially selected". |
| `disabled` | `boolean` | `false` | Disables interaction. |
| `error` | `boolean` | `false` | Applies error styling. |
| `helperText` | `ReactNode` | `undefined` | Description text below the checkbox. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox control. |
| `variant` | `'primary' \| 'secondary' \| ...` | `'primary'` | Color theme. |

## 4. Accessibility
- **Labeling**: The `label` prop automatically associates a `<label>` with the input via `for/id`.
- **Indeterminate**: Uses the `indeterminate` property on the input ref for screen reader support.
- **Keyboard**: Focusable and togglable via Space key.

## 5. Best Practices
- **Labels**: Always provide a visible label or `aria-label`.
- **Indeterminate**: Use for "Select All" functionality when only some children are selected.
- **Groups**: Use `CheckboxGroup` for managing multiple related checkboxes.

## 6. Integration Notes
- Controlled or uncontrolled usage supported.
- Integrates with form libraries (React Hook Form, Formik) by spreading props (`ref`, `onChange`, `name`).

## 7. Do’s and Don’ts
- **Do** use for binary choices or multiple selection.
- **Don't** use for mutually exclusive choices; use `Radio` instead.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
