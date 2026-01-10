# ToggleButton Component

The ToggleButton component allows users to toggle a binary state on or off, similar to a physical light switch.

## Features

- **Sizes**: Supports `sm`, `md`, and `lg` sizes.
- **Variants**: Includes `primary`, `secondary`, `success`, `error`, `warning`, and `info` styles.
- **States**: Supports checked, disabled, and error states.
- **Label Placement**: Flexible label positioning (`start`, `end`, `top`, `bottom`).
- **Icons**: Optional icons inside the toggle knob, with support for different icons in checked/unchecked states.

## Installation

```tsx
import { ToggleButton } from '@/components/ToggleButton';
```

## Basic Usage

```tsx
<ToggleButton label="Enable Notifications" />
```

## Props

| Prop | Type | Default | Description |
| component | --- | --- | --- |
| `checked` | `boolean` | - | If true, the toggle button is checked. |
| `defaultChecked` | `boolean` | - | The default checked state (uncontrolled). |
| `disabled` | `boolean` | `false` | If true, the toggle button is disabled. |
| `label` | `ReactNode` | - | The label for the toggle button. |
| `labelPlacement` | `'start' \| 'end' \| 'top' \| 'bottom'` | `'end'` | Placement of the label relative to the switch. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the toggle button. |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'primary'` | The visual variant. |
| `error` | `boolean` | `false` | If true, displays error styling. |
| `helperText` | `ReactNode` | - | Helper text displayed below the toggle button. |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - | Callback fired when the state changes. |
| `icon` | `ReactNode` | - | Icon to display inside the toggle knob. |
| `checkedIcon` | `ReactNode` | - | Icon to display inside the toggle knob when checked. |

## Examples

### Variants

```tsx
<ToggleButton label="Primary" variant="primary" defaultChecked />
<ToggleButton label="Secondary" variant="secondary" defaultChecked />
<ToggleButton label="Success" variant="success" defaultChecked />
<ToggleButton label="Error" variant="error" defaultChecked />
```

### Sizes

```tsx
<ToggleButton label="Small" size="sm" />
<ToggleButton label="Medium" size="md" />
<ToggleButton label="Large" size="lg" />
```

### Label Placement

```tsx
<ToggleButton label="Start" labelPlacement="start" />
<ToggleButton label="End" labelPlacement="end" />
<ToggleButton label="Top" labelPlacement="top" />
<ToggleButton label="Bottom" labelPlacement="bottom" />
```

### With Icons

```tsx
<ToggleButton
  label="WiFi"
  icon={<WifiOffIcon />}
  checkedIcon={<WifiOnIcon />}
/>
```
