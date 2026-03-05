# Tooltip Examples

## Basic Usage

Hover text.

```tsx
import { Tooltip } from 'src/components/Tooltip';
import { Button } from 'src/components/Button';

const BasicExample = () => (
  <Tooltip content="Save changes">
    <Button>Save</Button>
  </Tooltip>
);
```

## Customization Examples

### Placements

Position tooltip relative to target.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const PlacementExample = () => (
  <Tooltip content="More info" placement="right" arrow>
    <span>Hover me</span>
  </Tooltip>
);
```

## Enterprise Scenarios

### Rich Content

Tooltip with complex layout.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const UserPreview = () => (
  <Tooltip
    content={
      <div>
        <strong>John Doe</strong>
        <p>Software Engineer</p>
      </div>
    }
  >
    <Avatar src="/user.jpg" />
  </Tooltip>
);
```

## Accessibility Example

Associates description via `aria-describedby`.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const A11yExample = () => (
  <Tooltip content="Field description">
    <input aria-label="Input with tooltip" />
  </Tooltip>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-tooltip.css`**
```css
.custom-tooltip {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Tooltip } from 'src/components/Tooltip';
import './custom-tooltip.css';

const StyledExample = () => (
  <Tooltip className="custom-tooltip">
    Custom Styled Content
  </Tooltip>
);
```
