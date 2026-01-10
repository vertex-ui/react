# MultiSelect Component

A dropdown component that allows selecting multiple options from a list. It displays selected items as chips and supports searching, filtering, and grouping.

## Features

- **Styles**: Checkbox or Checkmark selection styles.
- **Searchable**: Built-in search input to filter options.
- **Chips**: Displays selected items as removable chips.
- **Grouping**: Group options under headings.
- **Bulk Actions**: "Select All" and "Clear All" functionality.
- **Chips Limit**: `maxChipsDisplay` prop to handle large selections gracefully (`+N more`).
- **Form Integration**: Renders a hidden `<select>` for native form submission support.
- **Validation**: Error and success states.

## Installation

```tsx
import { MultiSelect } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' }
];

<MultiSelect
  label="Frontend Frameworks"
  options={options}
  onChange={(values, selectedOptions) => console.log(values)}
/>
```

## Searchable

Enable search for long lists.

```tsx
<MultiSelect
  searchable
  placeholder="Search users..."
  options={users}
/>
```

## Selection Styles

Choose between 'checkbox' (default) or 'checkmark' (end-aligned check icon).

```tsx
<MultiSelect
  selectionStyle="checkmark"
  options={options}
/>
```

## Grouped Options

Organize options into categories. Ensure your options have a `group` property.

```tsx
const groupedOptions = [
  { label: 'Apple', value: 'apple', group: 'Fruits' },
  { label: 'Carrot', value: 'carrot', group: 'Vegetables' }
];

<MultiSelect
  grouped
  options={groupedOptions}
/>
```

## Select All / Clear All

Enable bulk actions.

```tsx
<MultiSelect
  showSelectAll
  options={options}
/>
```

## Limiting Chips

Prevent the input from growing too large by limiting visible chips.

```tsx
<MultiSelect
  maxChipsDisplay={3}
  options={options}
/>
// Displays: [Chip 1] [Chip 2] [Chip 3] [+5 more]
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MultiSelectOption[]` | **required** | Data source |
| `value` | `(string \| number)[]` | - | Controlled value |
| `defaultValue` | `(string \| number)[]` | `[]` | Initial value |
| `onChange` | `(values, options) => void` | - | Change handler |
| `label` | `string` | - | Input label |
| `searchable` | `boolean` | `false` | Enable search |
| `selectionStyle` | `'checkbox' \| 'checkmark'` | `'checkbox'` | Visual style |
| `grouped` | `boolean` | `false` | Enable grouping |
| `showSelectAll` | `boolean` | `false` | Show bulk actions |
| `maxChipsDisplay` | `number` | - | Limit visible chips |
| `loading` | `boolean` | `false` | Show spinner |
| `disabled` | `boolean` | `false` | Disable interaction |
| `error` | `string` | - | Error message |

## Accessibility

- **Keyboard Navigation**: Arrow keys or Tab to navigate, Enter/Space to select.
- **ARIA**:
  - `role="listbox"` on the dropdown.
  - `role="option"` and `aria-selected` on items.
  - `aria-expanded` on the trigger.
- **Focus Management**: Focus remains trapped or managed within the dropdown when open.
