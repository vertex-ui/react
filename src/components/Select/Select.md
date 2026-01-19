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
| `label` | `string` | `undefined` | Label text displayed above the select |
| `helperText` | `string` | `undefined` | Helper text displayed below the select Provides additional context or instructions |
| `error` | `string` | `undefined` | Error message - when provided, select is shown in error state |
| `success` | `string` | `undefined` | Success message - when provided, select is shown in success state |
| `size` | `Size` | `theme.defaultSize` | Size of the select |
| `fullWidth` | `boolean` | `false` | If true, select will take full width of its container |
| `options` | `SelectOption[]` | `undefined` | Options to display in the select dropdown |
| `placeholder` | `string` | `undefined` | Placeholder text shown when no option is selected |
| `wrapperClassName` | `string` | `undefined` | Custom class name for the wrapper element |
| `grouped` | `boolean` | `false` | If true, groups options by their group property |
| `getOptionLabel` | `string \| ((option: any) => string)` | `'label'` | Property name or function to extract the display label from each option |
| `getOptionValue` | `string \| ((option: any) => string \| number)` | `'value'` | Property name or function to extract the value from each option |
| `getOptionDisabled` | `string \| ((option: any) => boolean)` | `'disabled'` | Property name or function to determine if an option is disabled |
| `getOptionGroup` | `string \| ((option: any) => string)` | `'group'` | Property name or function to extract the group from each option |
| `onSelectChange` | `(value: string, option: SelectOption \| undefined) => void` | `undefined` | Callback fired when selection changes Provides both event and selected option |
| `loading` | `boolean` | `false` | If true, shows a loading spinner in place of the dropdown icon |
| `defaultValue` | `string` | `undefined` | The default value for uncontrolled usage Sets the initially selected option by its value |
| `id` | `providedId,` | `undefined` | Select component - Dropdown selection control with label, validation states, and grouping support A comprehensive select component with support for grouped options, validation states, and enhanced accessibility features. |

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
