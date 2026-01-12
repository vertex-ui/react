# Toast

## 1. Overview
The **Toast** component displays brief, temporary notifications. It is used for feedback (success, error) that doesn't require user interaction to dismiss.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Toast } from '@/components/Toast';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'error' \| 'info'` | `'default'` | Type/Color. |
| `title` | `string` | `undefined` | Title text. |
| `description` | `string` | `undefined` | Body text. |
| `autoClose` | `number \| false` | `5000` | MS before close. |
| `progressBar` | `boolean` | `true` | Show timer bar. |
| `action` | `{ label, onClick }` | `undefined` | Action button. |

## 4. Accessibility
- **Role**: `role="alert"` or `role="status"` depending on variant.
- **Focus**: Does not steal focus.

## 5. Best Practices
- **Duration**: Allow enough time to read (5s is standard).
- **Position**: Usually bottom-right or top-right.

## 6. Integration Notes
- Usually managed via a Context/Hook (`useToast`) rather than rendering directly.

## 7. Do’s and Don’ts
- **Do** provide an action for undoable operations.
- **Don't** use for critical errors that require acknowledgement (use Alert/Modal).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
