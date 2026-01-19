# Input

## 1. Overview
The **Input** component allows users to enter text. It supports various types (text, password, email), icons, clear buttons, and validation states.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Input } from '@/components/Input';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text displayed above the input |
| `helperText` | `string` | `undefined` | Helper text displayed below the input Provides additional context or instructions |
| `error` | `string` | `undefined` | Error message - when provided, input is shown in error state Takes precedence over helperText when both are present |
| `success` | `string` | `undefined` | Success message - when provided, input is shown in success state |
| `size` | `Size` | `theme.defaultSize` | Size of the input |
| `fullWidth` | `boolean` | `false` | If true, input will take full width of its container |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon or element to display at the start of the input |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon or element to display at the end of the input |
| `clearable` | `boolean` | `false` | If true, shows a clear button when input has value |
| `onClear` | `() => void` | `undefined` | Callback fired when clear button is clicked |
| `showCount` | `boolean` | `false` | If true, adds a character counter below the input Requires maxLength prop to be set |
| `wrapperClassName` | `string` | `undefined` | Custom class name for the wrapper element |
| `labelClassName` | `string` | `undefined` | Custom class name for the label element |
| `inputClassName` | `string` | `undefined` | Custom class name for the input element itself |
| `prefix` | `string` | `undefined` | Prefix text to display before input value |
| `suffix` | `string` | `undefined` | Suffix text to display after input value |
| `id` | `providedId,` | `undefined` | Input component - Text input field with label, helper text, validation states, and rich features A comprehensive input component with support for icons, prefixes, suffixes, character counting, clear functionality, and various validation states. |

## 4. Accessibility
- **Labeling**: Internal `label` element linked via ID.
- **States**: Uses `aria-invalid`, `aria-describedby`.

## 5. Best Practices
- **Validation**: Validate on blur or form submit.
- **Clarity**: Use icons to hint at expected format (e.g., mail icon for email).

## 6. Integration Notes
- Standard interface for all text entry.

## 7. Do’s and Don’ts
- **Do** use `placeholder` as a hint, not a label.
- **Don't** rely on color alone for errors; use text.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
