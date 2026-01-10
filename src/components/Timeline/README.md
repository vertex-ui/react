# Timeline Component

A component to display a sequence of events or steps in a process.

## Features

- **Orientations**: Horizontal (default) and Vertical.
- **States**: Completed, Active, and Pending steps.
- **Variants**: Default, Circle, Numbered, Simple.
- **Interactivity**: Optional click handlers for steps.
- **Customization**: Support for custom icons, colors, and sizes.

## Installation

```tsx
import { Timeline } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Timeline
  currentStep={1}
  steps={['Step 1', 'Step 2', 'Step 3']}
/>
```

## With Descriptions

Use objects to provide more detail.

```tsx
const steps = [
  { label: 'Order Placed', description: 'Jan 1, 2024' },
  { label: 'Processing', description: 'In progress' },
  { label: 'Shipped', description: 'Pending' }
];

<Timeline currentStep={1} steps={steps} />
```

## Vertical Orientation

Display steps vertically.

```tsx
<Timeline
  orientation="vertical"
  currentStep={2}
  steps={steps}
/>
```

## Variants

Change the visual style of the indicators.

```tsx
<Timeline variant="numbered" currentStep={1} steps={steps} />
<Timeline variant="circle" currentStep={1} steps={steps} />
```

## Custom Icons

Override the default indicators with custom icons.

```tsx
import { CheckIcon, ClockIcon } from 'lucide-react';

const steps = [
  { label: 'Done', icon: <CheckIcon /> },
  { label: 'Waiting', icon: <ClockIcon /> }
];

<Timeline currentStep={0} steps={steps} />
```

## Interactive Steps

Add `onClick` handlers to steps.

```tsx
const steps = [
  { label: 'Step 1', onClick: () => goTo(0) },
  { label: 'Step 2', onClick: () => goTo(1) }
];

<Timeline currentStep={activeStep} steps={steps} />
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `TimelineStep[] \| string[]` | **required** | Steps data |
| `currentStep` | `number` | **required** | Active index (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `variant` | `'default' \| 'circle' \| 'numbered'` | `'default'` | Visual style |
| `showCheckmarks` | `boolean` | `true` | Show check on complete |
| `color` | `'primary' \| 'success' \| ...` | `'success'` | Active/Complete color |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |

### TimelineStep

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Main text |
| `description` | `string` | Helper text |
| `icon` | `ReactNode` | Custom icon |
| `onClick` | `() => void` | Click handler |

## Accessibility

- The component structure provides a logical reading order.
- Status (active/completed) is conveyed visually.
- Interactive steps should be keyboard accessible (typically managed by parent focus if `onClick` is provided).
