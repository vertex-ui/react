# Select Component

A native select dropdown component with enhanced styling, validation, and option grouping capabilities.

## Features

- **Native Experience**: Uses `<select>` for native mobile/desktop behavior and accessibility.
- **Grouping**: Support for `<optgroup>` via the `grouped` prop.
- **Validation**: Error and success states.
- **Loading State**: Built-in loading indicator.
- **Custom Data Accessors**: Flexible API to map any data structure to label/value.

## Installation

```tsx
import { Select } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

<Select label="Choose an option" options={options} />
```

## Placeholders

Add a disabled, selected-by-default option as a placeholder.

```tsx
<Select
  placeholder="Select your country..."
  defaultValue=""
  options={countries}
/>
```

## Grouped Options

Automatically render `optgroup` elements.

```tsx
const foodOptions = [
  { label: 'Apple', value: 'apple', group: 'Fruits' },
  { label: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { label: 'Beef', value: 'beef', group: 'Meat' },
];

<Select
  label="Food Category"
  grouped
  options={foodOptions}
/>
```

## Custom Data Structure

Map your own data objects without transforming them first.

```tsx
const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' }
];

<Select
  label="Assign User"
  options={users}
  getOptionLabel="name"
  getOptionValue="id"
/>
```

## Validation

```tsx
<Select
  error="Selection required"
  label="Role"
  options={roles}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | **required** | Data source |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | - | Placeholder text |
| `grouped` | `boolean` | `false` | Enable grouping |
| `getOptionLabel` | `string \| func` | `'label'` | Label accessor |
| `getOptionValue` | `string \| func` | `'value'` | Value accessor |
| `getOptionGroup` | `string \| func` | `'group'` | Group accessor |
| `onSelectChange` | `(value, option) => void` | - | Change handler |
| `error` | `string` | - | Error message |
| `loading` | `boolean` | `false` | Show spinner |
| `disabled` | `boolean` | `false` | Disable input |

## Accessibility

- Renders a native `<select>`, inheriting all browser accessibility features.
- Associated `<label>` via `htmlFor`.
- Links error/helper text via `aria-describedby`.
