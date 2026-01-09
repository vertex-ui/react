# RadioGroup Component

A container component for managing a set of radio buttons. It handles the mutual exclusivity of selections and provides a unified label and error state.

## Features

- **State Management**: Handles selection logic (Controlled & Uncontrolled).
- **Layouts**: Vertical (default) or Horizontal orientation.
- **Options**: Simple configuration via `options` array.
- **Validation**: Group-level error states and helper text.
- **Uniformity**: Applies size, variant, and disabled state to all child radios.

## Installation

```tsx
import { RadioGroup } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<RadioGroup
  name="size"
  label="T-Shirt Size"
  options={[
    { value: 's', label: 'Small' },
    { value: 'm', label: 'Medium' },
    { value: 'l', label: 'Large' },
  ]}
/>
```

## Controlled Component

```tsx
const [value, setValue] = useState('m');

<RadioGroup
  value={value}
  onChange={setValue}
  name="size"
  options={options}
/>
```

## Orientation

Display options horizontally.

```tsx
<RadioGroup
  orientation="horizontal"
  name="rating"
  options={[
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ]}
/>
```

## Validation

Display validation errors for the group.

```tsx
<RadioGroup
  error
  helperText="You must select a delivery method."
  name="delivery"
  options={deliveryOptions}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Name attribute for radios |
| `options` | `RadioOption[]` | **required** | Options configuration |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Initial value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `label` | `ReactNode` | - | Group label |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction |
| `disabled` | `boolean` | `false` | Disable all radios |
| `error` | `boolean` | `false` | Error styling |
| `helperText` | `ReactNode` | - | Bottom text |
| `size` | `Size` | - | Radio size |
| `variant` | `'primary' \| ...` | `'primary'` | Radio color variant |

## Accessibility

- The container has `role="radiogroup"`.
- If `label` is a string, it is used as `aria-label` for the group.
- Individual radio buttons are accessible via keyboard (arrow keys).
