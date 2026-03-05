# Badge Examples

## Basic Usage

Display a simple badge.

```tsx
import { Badge } from 'src/components/Badge';

const BasicExample = () => (
  <Badge>New</Badge>
);
```

## Customization Examples

### Status Variants

Use different colors for statuses.

```tsx
import { Badge } from 'src/components/Badge';

const StatusBadges = () => (
  <>
    <Badge variant="success">Active</Badge>
    <Badge variant="warning">Pending</Badge>
    <Badge variant="error">Deleted</Badge>
  </>
);
```

## Enterprise Scenarios

### Removable Tags

Use badges as tags in a filter system.

```tsx
import { Badge } from 'src/components/Badge';

const FilterTags = ({ filters, removeFilter }) => (
  <div className="filter-list">
    {filters.map(filter => (
      <Badge
        key={filter.id}
        onRemove={() => removeFilter(filter.id)}
      >
        {filter.label}
      </Badge>
    ))}
  </div>
);
```

## Accessibility Example

Ensure removable badges are keyboard accessible.

```tsx
import { Badge } from 'src/components/Badge';

const A11yExample = () => (
  <Badge variant="info" aria-label="Status: Info">Info</Badge>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-badge.css`**
```css
.custom-badge {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Badge } from 'src/components/Badge';
import './custom-badge.css';

const StyledExample = () => (
  <Badge className="custom-badge">
    Custom Styled Content
  </Badge>
);
```
