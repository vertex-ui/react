# CheckboxGroup Component

A container component for managing multiple checkboxes as a single group. Handles selection state, layout, and validation for a set of options.

## Features

- **State Management**: Handles selection logic for multiple items (Controlled & Uncontrolled).
- **Layouts**: Vertical (default) or Horizontal orientation.
- **Options**: Simple configuration via `options` array.
- **Validation**: Group-level error states and helper text.
- **Uniformity**: Applies size and disabled state to all child checkboxes.

## Installation

```tsx
import { CheckboxGroup } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<CheckboxGroup
  label="Select Toppings"
  options={[
    { value: 'cheese', label: 'Extra Cheese' },
    { value: 'pepperoni', label: 'Pepperoni' },
    { value: 'mushrooms', label: 'Mushrooms' },
  ]}
/>
```

## Controlled Component

```tsx
const [selected, setSelected] = useState(['cheese']);

<CheckboxGroup
  value={selected}
  onChange={setSelected}
  label="Toppings"
  options={toppingsOptions}
/>
```

## Orientation

Display options horizontally.

```tsx
<CheckboxGroup
  orientation="horizontal"
  label="Days of Week"
  options={[
    { value: 'mon', label: 'Mon' },
    { value: 'tue', label: 'Tue' },
    { value: 'wed', label: 'Wed' },
  ]}
/>
```

## Error Handling

Display validation errors for the entire group.

```tsx
<CheckboxGroup
  error
  label="Terms"
  helperText="You must select at least one option."
  options={[{ value: 'agree', label: 'I agree' }]}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `CheckboxOption[]` | **required** | Array of `{ value, label, disabled? }` |
| `value` | `string[]` | - | Controlled selected values |
| `defaultValue` | `string[]` | `[]` | Initial values (uncontrolled) |
| `onChange` | `(values: string[]) => void` | - | Callback with all selected values |
| `label` | `ReactNode` | - | Group label |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of all checkboxes |
| `disabled` | `boolean` | `false` | Disable all checkboxes |
| `error` | `boolean` | `false` | Show error styling |
| `helperText` | `ReactNode` | - | Text below the group |
| `className` | `string` | - | Custom class name |

## Accessibility

- The group acts as a semantic grouping of controls.
- Individual checkboxes remain accessible via keyboard.
- Error messages and helper text should be associated with the group (typically handled via context or aria-describedby in the underlying implementation).
