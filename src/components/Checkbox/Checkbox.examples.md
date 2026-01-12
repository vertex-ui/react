# Checkbox Examples

## Basic Usage

A simple checkbox.

```tsx
import { Checkbox } from 'src/components/Checkbox';

const BasicExample = () => (
  <Checkbox label="Accept Terms" />
);
```

## Customization Examples

### Sizes and Colors

Different visual styles.

```tsx
import { Checkbox } from 'src/components/Checkbox';

const Variants = () => (
  <>
    <Checkbox label="Small" size="sm" variant="success" />
    <Checkbox label="Large" size="lg" variant="error" />
  </>
);
```

## Enterprise Scenarios

### Indeterminate State

Used for "Select All" functionality in data grids.

```tsx
import { Checkbox } from 'src/components/Checkbox';

const SelectAll = ({ total, selected }) => {
  const isAllSelected = total === selected;
  const isIndeterminate = selected > 0 && !isAllSelected;

  return (
    <Checkbox
      checked={isAllSelected}
      indeterminate={isIndeterminate}
      label="Select All Rows"
    />
  );
};
```

## Accessibility Example

Ensure labels are connected via `id` or implicit association (which this component handles).

```tsx
import { Checkbox } from 'src/components/Checkbox';

const A11yExample = () => (
  <Checkbox
    label="Enable Notifications"
    aria-describedby="notify-helper"
  />
);
```
