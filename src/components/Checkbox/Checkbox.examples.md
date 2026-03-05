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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-checkbox.css`**
```css
.custom-checkbox {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Checkbox } from 'src/components/Checkbox';
import './custom-checkbox.css';

const StyledExample = () => (
  <Checkbox className="custom-checkbox">
    Custom Styled Content
  </Checkbox>
);
```
