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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-checkboxgroup.css`**
```css
.custom-checkboxgroup {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { CheckboxGroup } from 'src/components/CheckboxGroup';
import './custom-checkboxgroup.css';

const StyledExample = () => (
  <CheckboxGroup className="custom-checkboxgroup">
    Custom Styled Content
  </CheckboxGroup>
);
```
