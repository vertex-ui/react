# OrderCard Examples

## Basic Usage

Display an order summary.

```tsx
import { OrderCard } from 'src/widgets/OrderCard';

const BasicExample = () => (
  <OrderCard
    orderId="1001"
    status="delivered"
    totalAmount={150.00}
    items={[
      { name: "Wireless Headphones", price: 150.00, quantity: 1 }
    ]}
  />
);
```

## Customization Examples

### With Product Image and Tracking

Add visual context and actions.

```tsx
import { OrderCard } from 'src/widgets/OrderCard';

const TrackableExample = () => (
  <OrderCard
    orderId="1002"
    status="shipped"
    deliveryDate="Oct 20, 2023"
    totalAmount={299.99}
    items={[
      {
        name: "Smart Watch",
        image: "https://example.com/watch.jpg",
        quantity: 1
      }
    ]}
    onTrackOrder={(id) => alert(`Tracking ${id}`)}
  />
);
```

## Enterprise Scenarios

### Order History List

Render a list of past orders.

```tsx
import { OrderCard } from 'src/widgets/OrderCard';

const OrderHistory = ({ orders }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {orders.map(order => (
      <OrderCard
        key={order.id}
        orderId={order.id}
        orderNumber={order.orderNumber}
        status={order.status}
        items={order.items}
        totalAmount={order.total}
        onViewDetails={(id) => window.location.href = `/orders/${id}`}
      />
    ))}
  </div>
);
```

## Accessibility Example

The card is interactive if `onClick` handlers are provided. Ensure keyboard users can access actions.

```tsx
import { OrderCard } from 'src/widgets/OrderCard';

const A11yExample = () => (
  <OrderCard
    orderId="1003"
    status="processing"
    totalAmount={50.00}
    items={[{ name: "Book", quantity: 2 }]}
    trackButtonText="Track Shipment"
    aria-label="Order #1003 details"
  />
);
```
