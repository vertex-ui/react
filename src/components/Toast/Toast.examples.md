# Toast Examples

## Basic Usage

Show a temporary message.

```tsx
import { Toast } from 'src/components/Toast';

const BasicExample = () => (
  <Toast onDismiss={() => {}}>
    Operation successful
  </Toast>
);
```

## Customization Examples

### Variants with Auto-Close

Success/Error states.

```tsx
import { Toast } from 'src/components/Toast';

const Notification = () => (
  <Toast
    variant="success"
    title="Saved!"
    autoClose={3000}
    onDismiss={closeToast}
  >
    Your profile has been updated.
  </Toast>
);
```

## Enterprise Scenarios

### Actionable Toast

Allow undo or retry.

```tsx
import { Toast } from 'src/components/Toast';

const ActionToast = () => (
  <Toast
    variant="warning"
    action={{ label: 'Undo', onClick: undoAction }}
    onDismiss={closeToast}
  >
    File deleted.
  </Toast>
);
```

## Accessibility Example

Uses `role="alert"` and `aria-live`.

```tsx
import { Toast } from 'src/components/Toast';

const A11yExample = () => (
  <Toast role="status" onDismiss={close}>
    Background task completed.
  </Toast>
);
```
