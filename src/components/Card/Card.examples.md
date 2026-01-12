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
