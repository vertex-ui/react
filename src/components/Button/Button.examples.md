# Button Examples

## Basic Usage

Standard interactive button.

```tsx
import { Button } from 'src/components/Button';

const BasicExample = () => (
  <Button onClick={() => alert('Clicked')}>
    Click Me
  </Button>
);
```

## Customization Examples

### Variants and Sizes

Different styles for different contexts.

```tsx
import { Button } from 'src/components/Button';

const Variants = () => (
  <>
    <Button variant="primary" size="lg">Primary Large</Button>
    <Button variant="outline" size="sm">Outline Small</Button>
    <Button variant="danger">Delete</Button>
  </>
);
```

## Enterprise Scenarios

### Loading State

Handle asynchronous actions.

```tsx
import { Button } from 'src/components/Button';

const AsyncButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      Save Data
    </Button>
  );
};
```

## Accessibility Example

Ensure buttons have accessible names, especially icon-only buttons.

```tsx
import { Button } from 'src/components/Button';
import { CloseIcon } from 'src/icons';

const A11yExample = () => (
  <Button iconOnly aria-label="Close Modal">
    <CloseIcon />
  </Button>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-button.css`**
```css
.custom-button {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Button } from 'src/components/Button';
import './custom-button.css';

const StyledExample = () => (
  <Button className="custom-button">
    Custom Styled Content
  </Button>
);
```
