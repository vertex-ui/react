# CheckboxGroup

## 1. Overview
The **CheckboxGroup** component manages the state and layout of multiple related `Checkbox` components. It streamlines validation, labelling, and value management for sets of options.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { CheckboxGroup } from '@/components/CheckboxGroup';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `CheckboxOption[]` | required | Array of `{ label, value, disabled }` objects. |
| `value` | `string[]` | `undefined` | Controlled array of selected values. |
| `onChange` | `(values: string[]) => void` | `undefined` | Callback with new array of selected values. |
| `label` | `ReactNode` | `undefined` | Group label/legend. |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout direction. |
| `error` | `boolean` | `false` | Error state for the group. |
| `helperText` | `ReactNode` | `undefined` | Validation message or help text. |

## 4. Accessibility
- **Grouping**: Uses logical grouping for options.
- **Validation**: Error text is associated with the group.

## 5. Best Practices
- **Usage**: Use when users can pick zero, one, or many options from a list.
- **Layout**: Use `horizontal` for short lists (2-3 items) to save vertical space.

## 6. Integration Notes
- Simplifies form state management by returning an array of strings.

## 7. Do’s and Don’ts
- **Do** provide a clear `label` for the group context.
- **Don't** use for huge lists (>10 items); consider `MultiSelect` instead.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
