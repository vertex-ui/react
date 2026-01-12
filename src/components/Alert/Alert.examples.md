# Alert Examples

## Basic Usage

Display a simple information message.

```tsx
import { Alert } from 'src/components/Alert';

const BasicExample = () => (
  <Alert variant="info">
    System update scheduled for tonight.
  </Alert>
);
```

## Customization Examples

### Dismissible Error

An error alert that can be closed by the user.

```tsx
import { Alert } from 'src/components/Alert';

const ErrorExample = () => (
  <Alert
    variant="error"
    title="Connection Failed"
    dismissible
    onClose={() => console.log('Closed')}
  >
    Please check your internet connection.
  </Alert>
);
```

## Enterprise Scenarios

### Server Status Notification

Integrate with backend status checks.

```tsx
import { Alert } from 'src/components/Alert';

const ServerStatus = ({ status }) => {
  if (status === 'down') {
    return (
      <Alert variant="error" title="Critical Failure">
        Server is not responding. Contact IT support.
      </Alert>
    );
  }
  return <Alert variant="success">All systems operational.</Alert>;
};
```

## Accessibility Example

Use the `role` prop for screen readers.

```tsx
import { Alert } from 'src/components/Alert';

const A11yExample = () => (
  <Alert role="alert" variant="warning">
    Your session will expire in 5 minutes.
  </Alert>
);
```
