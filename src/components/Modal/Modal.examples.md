# Modal Examples

## Basic Usage

A dialog overlay.

```tsx
import { Modal } from 'src/components/Modal';
import { useState } from 'react';

const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome"
      >
        <p>Hello World!</p>
      </Modal>
    </>
  );
};
```

## Customization Examples

### Footer Actions

Modal with action buttons.

```tsx
import { Modal } from 'src/components/Modal';

const ConfirmModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Confirm Delete"
    footerButtons={[
      { label: 'Cancel', onClick: onClose },
      { label: 'Delete', onClick: handleDelete, variant: 'danger' }
    ]}
  >
    Are you sure?
  </Modal>
);
```

## Enterprise Scenarios

### Complex Form

Scrollable modal with form content.

```tsx
import { Modal } from 'src/components/Modal';

const EditProfileModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Edit Profile"
    size="lg"
    scrollable
  >
    <form>
      {/* Many inputs */}
    </form>
  </Modal>
);
```

## Accessibility Example

Focus trap and escape key are handled automatically.

```tsx
import { Modal } from 'src/components/Modal';

const A11yExample = () => (
  <Modal
    isOpen={isOpen}
    onClose={close}
    aria-labelledby="modal-title"
  >
    <h2 id="modal-title">Accessible Modal</h2>
  </Modal>
);
```


## States Example

Demonstrating different states of the Modal.

```tsx
import { Modal } from 'src/components/Modal';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Modal isOpen={true} onClose={() => {}} title="Example Modal">
        <p>Modal Content</p>
      </Modal>
    </div>
    <div>
      <h3>Disabled State</h3>
      <Modal isOpen={true} onClose={() => {}} title="Example Modal" disabled>
        <p>Modal Content</p>
      </Modal>
    </div>
    <div>
      <h3>Loading State</h3>
      <Modal isOpen={true} onClose={() => {}} title="Example Modal" loading>
        <p>Modal Content</p>
      </Modal>
    </div>
    <div>
      <h3>Loading & Disabled State</h3>
      <Modal isOpen={true} onClose={() => {}} title="Example Modal" loading disabled>
        <p>Modal Content</p>
      </Modal>
    </div>
  </div>
);
```
