# Tooltip Component

A popover that displays brief information about an element when the user hovers over, focuses on, or taps the element.

## Features

- **Placement**: Automatically positioned relative to the trigger (top, bottom, left, right, etc.).
- **Events**: Triggered by hover and focus by default.
- **Controlled**: Can be controlled via `open` prop.
- **Variants**: Style variants like dark (default), light, error, etc.
- **Arrow**: Optional arrow indicator.
- **Delay**: Configurable show/hide delays.

## Installation

```tsx
import { Tooltip } from '@vtx-ui/react';
```

## Basic Usage

Wrap the trigger element with the `Tooltip`.

```tsx
<Tooltip content="Edit Profile">
  <Button>Edit</Button>
</Tooltip>
```

## Placement

Position the tooltip relative to the target.

```tsx
<Tooltip content="Top" placement="top"><button>Top</button></Tooltip>
<Tooltip content="Right" placement="right"><button>Right</button></Tooltip>
<Tooltip content="Bottom" placement="bottom"><button>Bottom</button></Tooltip>
<Tooltip content="Left" placement="left"><button>Left</button></Tooltip>
```

## Variants

Change visual style.

```tsx
<Tooltip content="Danger zone!" variant="error">
  <Button variant="danger">Delete</Button>
</Tooltip>

<Tooltip content="Helpful info" variant="info">
  <InfoIcon />
</Tooltip>
```

## Arrow

Show a pointer arrow.

```tsx
<Tooltip content="With Arrow" arrow>
  <button>Hover me</button>
</Tooltip>
```

## Delays

Adjust timing.

```tsx
<Tooltip content="Slow tooltip" delay={500} hideDelay={200}>
  <button>Wait for it...</button>
</Tooltip>
```

## Controlled

Manually manage visibility.

```tsx
<Tooltip content="Always visible" open>
  <button>Trigger</button>
</Tooltip>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | **required** | Tooltip text/content |
| `children` | `ReactElement` | **required** | Trigger element |
| `placement` | `'top' \| 'bottom' \| ...` | `'top'` | Position |
| `variant` | `'dark' \| 'light' \| ...` | `'dark'` | Style variant |
| `arrow` | `boolean` | `false` | Show arrow |
| `delay` | `number` | `200` | Show delay (ms) |
| `hideDelay` | `number` | `0` | Hide delay (ms) |
| `open` | `boolean` | - | Controlled state |
| `disabled` | `boolean` | `false` | Disable tooltip |
| `dismissible` | `boolean` | `false` | Show close button |
| `maxWidth` | `string` | `'300px'` | Max width |

## Accessibility

- The trigger element receives `aria-describedby` pointing to the tooltip ID when visible.
- The tooltip has `role="tooltip"`.
- Focus events are handled to support keyboard users.
