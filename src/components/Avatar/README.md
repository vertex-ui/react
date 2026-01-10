# Avatar Component

A component for displaying user profile images, initials, or fallback content. Supports various sizes, shapes, and status indicators.

## Features

- **Image Support**: Renders images with `src` and `alt` attributes.
- **Fallbacks**: Automatically shows initials or a custom fallback when the image fails to load or is not provided.
- **Sizes**: Small, Medium (default), and Large sizes.
- **Shapes**: Circle (default) or Square.
- **Status Indicators**: Support for overlaying status indicators (e.g., online/offline dots) with positioning options.
- **Error Handling**: Gracefully handles image load errors.
- **Theming**: Integrated with the theme system.

## Installation

```tsx
import { Avatar } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Avatar src="https://example.com/user.jpg" alt="User Name" />
```

## Fallbacks

When no image is provided or the image fails to load, the `fallback` text is displayed.

```tsx
<Avatar fallback="JD" />
<Avatar src="broken-link.jpg" fallback="AB" />
```

## Sizes

```tsx
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
```

## Shapes

```tsx
<Avatar shape="circle" fallback="C" />
<Avatar shape="square" fallback="S" />
```

## Status Indicators

Add a status indicator to the avatar.

```tsx
<Avatar
  src="..."
  statusIndicator={<span style={{ width: 12, height: 12, background: 'green', borderRadius: '50%' }} />}
  statusPosition="bottom-right"
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | `''` | Image alt text |
| `fallback` | `string` | `'?'` | Text to display if image is missing/broken |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the avatar |
| `shape` | `'circle' \| 'square'` | `'circle'` | Shape of the avatar |
| `statusIndicator` | `ReactNode` | - | Element to overlay (e.g., status dot) |
| `statusPosition` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | Position of the status indicator |
| `onImageError` | `(event) => void` | - | Callback on image load error |
| `onImageLoad` | `(event) => void` | - | Callback on image load success |
| `imgProps` | `ImgHTMLAttributes` | - | Additional props for the `<img>` element |
| `className` | `string` | - | Custom class name |

## Accessibility

- The component uses `role="img"`.
- `aria-label` is automatically set to `alt`, `fallback`, or "Avatar".
- Fallback text is hidden from screen readers (`aria-hidden="true"`) since the container has `aria-label`.

## Best Practices

1. **Always provide `alt` text**: Even if it's just the user's name.
2. **Use meaningful fallbacks**: Initials (e.g., "JD" for John Doe) are standard.
3. **Status Indicators**: Ensure status indicators have their own accessibility attributes or the parent context explains the status.
