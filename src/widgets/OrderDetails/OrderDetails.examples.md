# OrderDetails Examples

## Basic Usage

Display details of an order.

```tsx
import { OrderDetails } from 'src/widgets/OrderDetails';

const BasicExample = () => (
  <OrderDetails
    orderId="12345"
    orderDate="2023-10-25"
    status="delivered"
    items={[
      { id: "1", name: "Keyboard", price: 100, quantity: 1 }
    ]}
    subtotal={100}
    total={100}
    shippingAddress={{
      name: "John Doe",
      addressLine1: "123 Tech Park",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105"
    }}
  />
);
```

## Customization Examples

### Interactive Management

Enable order cancellation and returns.

```tsx
import { OrderDetails } from 'src/widgets/OrderDetails';

const ManagementExample = () => (
  <OrderDetails
    orderId="67890"
    orderDate="2023-10-26"
    status="pending"
    allowCancel={true}
    onCancelOrder={(id) => confirmCancel(id)}
    items={items}
    shippingAddress={address}
    subtotal={50}
    total={50}
  />
);
```

## Enterprise Scenarios

### Admin Order View

Use in an admin panel to view customer orders.

```tsx
import { OrderDetails } from 'src/widgets/OrderDetails';

const AdminOrderView = ({ orderData }) => (
  <OrderDetails
    {...orderData}
    showActions={false}
    customerEmail={orderData.user.email}
    paymentStatus={orderData.payment.status}
    transactionId={orderData.payment.txId}
  />
);
```

## Accessibility Example

The component uses semantic landmarks and accessible buttons.

```tsx
import { OrderDetails } from 'src/widgets/OrderDetails';

const A11yExample = () => (
  <article aria-labelledby="order-heading">
    <h1 id="order-heading" className="sr-only">Order #123 Details</h1>
    <OrderDetails
      orderId="123"
      orderDate="2023-10-27"
      status="shipped"
      shippingAddress={address}
      items={items}
      subtotal={20}
      total={20}
    />
  </article>
);
```
