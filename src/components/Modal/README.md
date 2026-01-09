# Modal Component

A dialog window that sits on top of an application's main view. Focus is trapped within the modal, and the background is dimmed.

## Features

- **Portal Rendering**: Renders outside the DOM hierarchy to avoid z-index issues.
- **Accessibility**: Includes focus trap, `aria-modal`, and keyboard navigation (Escape to close).
- **Sizes**: Small, Medium, Large, Fullscreen, and Auto.
- **Scroll Lock**: Automatically prevents body scrolling when open.
- **Backdrop**: Click-to-close functionality (optional).
- **Animations**: Built-in fade, slide, and zoom animations.
- **Footer API**: Easy configuration for action buttons.

## Installation

```tsx
import { Modal } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>This is the modal content.</p>
</Modal>
```

## Footer Buttons

Simplify footer creation by passing an array of button configurations.

```tsx
<Modal
  title="Confirm Delete"
  footerButtons={[
    { label: 'Cancel', onClick: handleClose, variant: 'outline' },
    { label: 'Delete', onClick: handleDelete, variant: 'danger' }
  ]}
>
  Are you sure?
</Modal>
```

## Custom Footer

For more complex footers, pass `ReactNode`.

```tsx
<Modal
  footer={
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>Left content</span>
      <Button>Close</Button>
    </div>
  }
>
  Content
</Modal>
```

## Sizes

Control the width of the modal.

```tsx
<Modal size="sm">Small</Modal>
<Modal size="lg">Large</Modal>
<Modal size="fullscreen">Fullscreen</Modal>
```

## Scrollable Content

If content exceeds the viewport height, use `scrollable` to make the modal body scroll independently.

```tsx
<Modal scrollable title="Terms of Service">
  <LongContent />
</Modal>
```

## Animations

Choose an entrance animation.

```tsx
<Modal animation="slide-up">Slide Up</Modal>
<Modal animation="zoom">Zoom</Modal>
<Modal animation="fade">Fade</Modal>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Visibility state |
| `onClose` | `() => void` | **required** | Close handler |
| `title` | `string` | - | Header title |
| `description` | `string` | - | Subtitle text |
| `size` | `'sm' \| 'md' \| 'lg' \| 'fullscreen' \| 'auto'` | `'md'` | Modal width |
| `closeOnBackdropClick` | `boolean` | `true` | Close on overlay click |
| `closeOnEscape` | `boolean` | `true` | Close on Esc key |
| `showCloseButton` | `boolean` | `true` | Show X button |
| `centered` | `boolean` | `true` | Vertically center |
| `scrollable` | `boolean` | `false` | Scrollable body |
| `preventScroll` | `boolean` | `true` | Lock body scroll |
| `animation` | `'fade' \| 'slide-up' \| ...` | `'fade'` | Entrance animation |

## Accessibility

- **Focus Management**: Focus is moved to the modal when it opens and restored to the trigger when it closes.
- **Keyboard Trap**: Tab key cycles through focusable elements inside the modal.
- **ARIA**: `role="dialog"`, `aria-modal="true"`, and automatic labeling via title/description.
