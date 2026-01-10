# Toast Component

A brief, temporary notification component used to display feedback to the user. Includes support for auto-dismissal, progress bars, and custom actions.

## Features

- **Variants**: Success, Error, Warning, Info, Default, Primary.
- **Auto-Dismiss**: Automatically closes after a duration (default 5s).
- **Progress Bar**: Visual indicator of time remaining.
- **Pause on Hover**: Prevents dismissal while the user interacts.
- **Actions**: Slot for actionable buttons.
- **Icons**: Pre-configured icons for each variant.

## Installation

```tsx
import { Toast, useToast } from '@vtx-ui/react';
```

## Basic Usage

The `Toast` component is typically used via the `useToast` hook or `ToastContainer`, but can be rendered standalone.

```tsx
<Toast>Operation successful</Toast>
```

## Variants

Semantic colors for different message types.

```tsx
<Toast variant="success">Saved!</Toast>
<Toast variant="error">Deletion failed.</Toast>
<Toast variant="warning">Low disk space.</Toast>
```

## Titles and Descriptions

Structured content for richer notifications.

```tsx
<Toast
  title="Update Available"
  description="A new version of the application is ready to install."
  variant="info"
/>
```

## Actions

Add an action button.

```tsx
<Toast
  variant="warning"
  action={{ label: 'Undo', onClick: handleUndo }}
>
  Item deleted.
</Toast>
```

## Auto Close & Progress

Control the timing.

```tsx
<Toast
  autoClose={10000} // 10 seconds
  progressBar={true} // Show progress bar
  onDismiss={() => console.log('Closed')}
>
  Long running task started.
</Toast>

// Disable auto close
<Toast autoClose={false}>Sticky Notification</Toast>
```

## Icons

Override or hide the default icon.

```tsx
<Toast icon={<RocketIcon />}>
  Launched!
</Toast>

<Toast icon={false}>
  No Icon
</Toast>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Toast message |
| `variant` | `'default' \| 'success' \| ...` | `'default'` | Visual style |
| `title` | `string` | - | Header text |
| `description` | `string` | - | Subtitle text |
| `autoClose` | `number \| false` | `5000` | Duration in ms |
| `onDismiss` | `() => void` | **required** | Close handler |
| `closeButton` | `boolean` | `true` | Show X button |
| `progressBar` | `boolean` | `true` | Show timer bar |
| `pauseOnHover` | `boolean` | `true` | Pause timer on hover |
| `action` | `{ label, onClick }` | - | Action button |
| `icon` | `ReactNode \| false` | - | Custom icon |

## Accessibility

- `role="alert"` for immediate screen reader announcement.
- `aria-live="polite"` to avoid interrupting the user for non-critical updates.
- Focus management for actionable toasts should be handled by the toast container system.
