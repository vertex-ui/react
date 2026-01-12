# Select Examples

## Basic Usage

A dropdown menu.

```tsx
import { Select } from 'src/components/Select';

const BasicExample = () => (
  <Select
    label="Choose One"
    options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]}
  />
);
```

## Customization Examples

### Grouped Options

Categorize choices.

```tsx
import { Select } from 'src/components/Select';

const GroupedExample = () => (
  <Select
    label="Food"
    grouped
    options={[
      { value: 'apple', label: 'Apple', group: 'Fruits' },
      { value: 'carrot', label: 'Carrot', group: 'Vegetables' }
    ]}
  />
);
```

## Enterprise Scenarios

### Async Loading State

Indicate data fetching.

```tsx
import { Select } from 'src/components/Select';

const LoadingExample = () => (
  <Select
    label="Loading Data"
    loading
    options={[]}
    placeholder="Fetching options..."
  />
);
```

## Accessibility Example

Standard accessible `<select>` element.

```tsx
import { Select } from 'src/components/Select';

const A11yExample = () => (
  <Select
    label="Country"
    required
    aria-required="true"
    options={options}
  />
);
```
