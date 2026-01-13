# Modal

## 1. Overview
The **Modal** component displays content in a layer above the application. It captures user focus and is used for critical actions, confirmations, or complex sub-tasks that require context preservation.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Modal } from '@/components/Modal';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | required | Controls visibility. |
| `onClose` | `() => void` | required | Callback to close. |
| `title` | `string` | `undefined` | Header title. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'fullscreen'` | `'md'` | Width variant. |
| `footerButtons` | `ModalFooterButton[]` | `undefined` | Auto-generated footer buttons. |
| `closeOnBackdropClick` | `boolean` | `true` | Close when clicking outside. |
| `scrollable` | `boolean` | `false` | Scroll body content internally. |
| `centered` | `boolean` | `true` | Center vertically in viewport. |

## 4. Accessibility
- **Focus Trap**: Traps focus within the modal while open.
- **ARIA**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- **Keyboard**: Closes on Escape key. Returns focus to trigger element on close.

## 5. Best Practices
- **Usage**: Use for interruptions that require immediate attention (e.g., "Delete Item?").
- **Content**: Keep it focused on a single task.

## 6. Integration Notes
- Uses `createPortal` to render at the document body root.

## 7. Do’s and Don’ts
- **Do** provide a clear way to close (X button, Cancel button).
- **Don't** stack multiple modals if avoidable.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
