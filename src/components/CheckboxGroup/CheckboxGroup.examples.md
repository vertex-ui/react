# CheckboxGroup Examples

## Basic Usage

A group of checkboxes.

```tsx
import { CheckboxGroup } from 'src/components/CheckboxGroup';

const BasicExample = () => (
  <CheckboxGroup
    label="Choose Toppings"
    options={[
      { value: 'cheese', label: 'Cheese' },
      { value: 'pepperoni', label: 'Pepperoni' }
    ]}
  />
);
```

## Customization Examples

### Horizontal Layout

Display options in a row.

```tsx
import { CheckboxGroup } from 'src/components/CheckboxGroup';

const HorizontalExample = () => (
  <CheckboxGroup
    orientation="horizontal"
    options={[
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' }
    ]}
  />
);
```

## Enterprise Scenarios

### Filter Panel

Use in a sidebar for filtering lists.

```tsx
import { CheckboxGroup } from 'src/components/CheckboxGroup';

const FilterSidebar = ({ onChange }) => (
  <CheckboxGroup
    label="Status"
    value={['active']}
    onChange={onChange}
    options={[
      { value: 'active', label: 'Active' },
      { value: 'pending', label: 'Pending' },
      { value: 'archived', label: 'Archived', disabled: true }
    ]}
  />
);
```

## Accessibility Example

The component uses fieldset/legend structure internally (implied).

```tsx
import { CheckboxGroup } from 'src/components/CheckboxGroup';

const A11yExample = () => (
  <CheckboxGroup
    label="Accessible Group"
    options={[{ value: '1', label: 'Option 1' }]}
  />
);
```
