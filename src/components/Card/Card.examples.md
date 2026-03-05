# Card Examples

## Basic Usage

A simple card with content.

```tsx
import { Card } from 'src/components/Card';

const BasicExample = () => (
  <Card>
    <h2>Title</h2>
    <p>Some content inside the card.</p>
  </Card>
);
```

## Customization Examples

### With Header and Footer

Card with structured sections.

```tsx
import { Card } from 'src/components/Card';
import { Button } from 'src/components/Button';

const StructuredCard = () => (
  <Card
    header={<h3>Product Details</h3>}
    footer={<Button>Buy Now</Button>}
    divider
  >
    <p>Product description goes here...</p>
  </Card>
);
```

## Enterprise Scenarios

### Interactive Dashboard Card

Clickable card with hover effect.

```tsx
import { Card } from 'src/components/Card';

const DashboardWidget = ({ onClick }) => (
  <Card
    hoverable
    clickable
    onClick={onClick}
    padding="24px"
  >
    <h3>Total Sales</h3>
    <div className="metric">$1,234</div>
  </Card>
);
```

## Accessibility Example

Use `tabIndex` if the card is interactive.

```tsx
import { Card } from 'src/components/Card';

const A11yExample = () => (
  <Card
    clickable
    onClick={() => alert('Clicked')}
    role="button"
    aria-label="View Details"
    tabIndex={0}
  >
    Clickable Card
  </Card>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-card.css`**
```css
.custom-card {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Card } from 'src/components/Card';
import './custom-card.css';

const StyledExample = () => (
  <Card className="custom-card">
    Custom Styled Content
  </Card>
);
```
