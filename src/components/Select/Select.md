# Select

## 1. Overview
The **Select** component allows users to pick a single value from a predefined list. It supports grouped options, custom rendering, and loading states.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Select } from '@/components/Select';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | required | Array of options. |
| `value` | `string` | `undefined` | Selected value. |
| `onChange` | `(event) => void` | `undefined` | Native change event. |
| `onSelectChange` | `(val, opt) => void` | `undefined` | Custom change event with full option object. |
| `label` | `string` | `undefined` | Label text. |
| `placeholder` | `string` | `undefined` | Placeholder text. |
| `grouped` | `boolean` | `false` | Enable optgroups. |
| `loading` | `boolean` | `false` | Show spinner. |
| `error` | `string` | `undefined` | Error message. |

## 4. Accessibility
- **Role**: Native `<select>` element.
- **Label**: Associated label via `for/id`.
- **Keyboard**: Standard select navigation (Up/Down, Enter).

## 5. Best Practices
- **UX**: Use Select for lists of > 5 items. For fewer, consider RadioGroup.
- **Placeholders**: Use as a prompt (e.g., "Select a country"), not a label.

## 6. Integration Notes
- Works with native form submission.
- Use `grouped` to organize long lists (e.g., Countries by Continent).

## 7. Do’s and Don’ts
- **Do** use `defaultValue` for uncontrolled usage.
- **Don't** use for multi-selection (use `MultiSelect`).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
