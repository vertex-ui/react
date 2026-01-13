# Order Widget Examples

## Basic Usage

Render an order summary.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'order',
      data: {
        id: '12345',
        status: 'Delivered',
        total: '$150.00',
        items: [
          { name: 'Item 1', quantity: 2, price: '$50' }
        ]
      }
    }}
  />
);
```

## Customization Examples

### Detailed Order View

With customer and shipping info.

```tsx
import { Widget } from 'src/components/Widget';

const DetailedOrder = () => (
  <Widget
    config={{
      type: 'order',
      data: {
        id: '9988',
        status: 'Processing',
        total: 250,
        currency: '$',
        customer: { name: 'John Doe', email: 'john@example.com' },
        shippingAddress: { street: '123 Main St', city: 'City', state: 'ST', zipCode: '12345' },
        items: [{ name: 'Product A', quantity: 1, price: 250 }]
      },
      settings: {
        showCustomer: true,
        showAddress: true,
        showItems: true
      }
    }}
  />
);
```

## Enterprise Scenarios

### Order History

List of order widgets.

```tsx
import { Widget } from 'src/components/Widget';

const OrderHistory = ({ orders }) => (
  <Widget
    config={{
      type: 'grid',
      data: {
        widgets: orders.map(order => ({
          type: 'order',
          data: order,
          settings: { compact: true }
        }))
      },
      settings: {
        grid: { columns: 1, spacing: 'sm' }
      }
    }}
  />
);
```

## Accessibility Example

Order details are structured logically.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'order',
      data: {
        id: '1001',
        total: 50,
        status: 'Pending'
      }
    }}
  />
);
```
