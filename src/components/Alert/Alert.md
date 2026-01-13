# Alert

## 1. Overview
The **Alert** component displays prominent messages to communicate status, feedback, or warnings to the user. In enterprise applications, consistent alerting is crucial for system feedback, form validation errors, and success confirmations. It supports various severity levels and can include actions or be dismissible.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Alert } from '@/components/Alert';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | The content of the alert. |
| `title` | `string` | `undefined` | Optional bold title above the description. |
| `variant` | `'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'info'` | Semantic color variant indicating severity. |
| `alertStyle` | `'filled' \| 'outlined' \| 'subtle' \| 'left-accent'` | `'subtle'` | Visual style of the container. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the alert padding and text. |
| `icon` | `ReactNode \| false` | `undefined` | Custom icon or `false` to hide the default icon. |
| `dismissible` | `boolean` | `false` | If true, shows a close button. |
| `onClose` | `() => void` | `undefined` | Callback fired when the alert is closed. |
| `action` | `ReactNode` | `undefined` | Action element (e.g., button) displayed on the right. |
| `fullWidth` | `boolean` | `false` | Whether the alert stretches to fill its container. |

## 4. Accessibility
- **Role**: Defaults to `role="alert"` for immediate screen reader announcement (assertive).
- **Icons**: Decorative icons are hidden from screen readers.
- **Dismissible**: The close button has an accessible label "Close alert".

## 5. Best Practices
- **Usage**: Use `success` for positive outcomes, `error` for failures, and `warning` for potential issues.
- **Content**: Keep messages concise. Use `title` for the summary and `children` for details.
- **Placement**: Place global alerts at the top of the page; place contextual alerts near the relevant element (e.g., form field).

## 6. Integration Notes
- Can be used within `Toast` notifications for temporary feedback.
- integrates well with form validation libraries to display summary errors.

## 7. Do’s and Don’ts
- **Do** use `dismissible` for non-critical information that users may want to clear.
- **Do** provide an `action` for recoverable errors (e.g., "Retry").
- **Don't** use `role="alert"` for static, non-urgent information; override with `role="status"` if needed.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
- **Customization**: CSS variables allow for easy theme overrides.
