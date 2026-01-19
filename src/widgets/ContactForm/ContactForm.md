# ContactForm

## 1. Overview
The **ContactForm** widget handles user inquiries. It includes validation, success states, and common fields (name, email, message).

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { ContactForm } from '@/widgets/ContactForm';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Header title. |
| `description` | `string` | `undefined` | Subtitle text. |
| `submitLabel` | `string` | `undefined` |   |
| `successMessage` | `string` | `undefined` | Text shown after success. |
| `fields` | `{` | `undefined` | Config for field labels/visibility. |
| `onSubmit` | `(data: Record<string, any>) => Promise<void> \| void` | `undefined` | Submission handler. |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |
| `variant` | `'card' \| 'minimal'` | `undefined` | `'minimal'` |

## 4. Accessibility
- **Labels**: All inputs have associated labels.
- **Focus**: Error states focus the first invalid field (browser default).

## 5. Best Practices
- **Feedback**: Provide immediate feedback on submit (loading/success).
- **Simplicity**: Only ask for essential information.

## 6. Integration Notes
- `onSubmit` should return a Promise to handle the loading state correctly.

## 7. Do’s and Don’ts
- **Do** use `variant="card"` for standalone pages.
- **Don't** hide the submit button.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
