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
| `value` | `string` | `undefined` | Controlled value. |
| `label` | `string` | `undefined` | Label text. |
| `helperText` | `string` | `undefined` | Help text. |
| `error` | `string` | `undefined` | Error message. |
| `leftIcon` | `ReactNode` | `undefined` | Start icon. |
| `rightIcon` | `ReactNode` | `undefined` | End icon. |
| `clearable` | `boolean` | `false` | Show clear button. |
| `fullWidth` | `boolean` | `false` | 100% width. |

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
