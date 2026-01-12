# MultiSelect

## 1. Overview
The **MultiSelect** component allows users to pick multiple items from a list. selected items are displayed as chips. It supports filtering, grouping, and "select all" functionality.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { MultiSelect } from '@/components/MultiSelect';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MultiSelectOption[]` | required | Items to choose from. |
| `value` | `(string\|number)[]` | `undefined` | Selected values. |
| `onChange` | `(values) => void` | `undefined` | Change callback. |
| `searchable` | `boolean` | `false` | Enable search input. |
| `selectionStyle` | `'checkbox' \| 'checkmark'` | `'checkbox'` | Visual style of options. |
| `maxChipsDisplay` | `number` | `undefined` | Limit visible chips (e.g., "+3 more"). |
| `grouped` | `boolean` | `false` | Group options by category. |
| `showSelectAll` | `boolean` | `false` | Show bulk actions. |

## 4. Accessibility
- **Roles**: `role="listbox"`, `role="option"`.
- **Keyboard**: Arrow keys to navigate, Enter/Space to toggle selection.
- **Feedback**: Announces selection changes.

## 5. Best Practices
- **Chips**: Use `maxChipsDisplay` for limited space to prevent layout shift.
- **Search**: Enable `searchable` if options exceed 10 items.

## 6. Integration Notes
- Controlled or uncontrolled.
- Includes hidden `select` element for native form submission.

## 7. Do’s and Don’ts
- **Do** use `grouped` for long, categorized lists.
- **Don't** use for simple binary choices; use `CheckboxGroup`.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
