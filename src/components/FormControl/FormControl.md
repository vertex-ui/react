# FormControl

## 1. Overview
The **FormControl** component acts as a context provider and wrapper for form inputs. It handles the layout of labels, inputs, helper text, and error messages, ensuring consistency across forms.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { FormControl } from '@/components/FormControl';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | The input element. |
| `label` | `string` | `undefined` | Label text. |
| `helperText` | `string` | `undefined` | Help text. |
| `error` | `string` | `undefined` | Error message. |
| `required` | `boolean` | `false` | Show asterisk. |
| `fullWidth` | `boolean` | `true` | Expand to container. |
| `labelPosition` | `'top' \| 'left'` | `'top'` | Label placement. |

## 4. Accessibility
- **Association**: Automatically links label to input via ID (if children support `id`).
- **Description**: Links helper text/error to input via `aria-describedby`.

## 5. Best Practices
- **Consistency**: Use FormControl for *every* input to maintain spacing and alignment.
- **Feedback**: Show errors immediately after validation.

## 6. Integration Notes
- Most input components (`Input`, `Select`) have built-in `FormControl` logic if props are passed directly, but explicit wrapping allows for more complex compositions.

## 7. Do’s and Don’ts
- **Do** use for custom inputs that lack built-in labeling.
- **Don't** nest FormControls.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
