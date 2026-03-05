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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-select.css`**
```css
.custom-select {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Select } from 'src/components/Select';
import './custom-select.css';

const StyledExample = () => (
  <Select className="custom-select">
    Custom Styled Content
  </Select>
);
```
