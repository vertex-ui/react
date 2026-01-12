# OrderDetails Widget Examples

## Basic Usage

Render full order details.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'order-details',
      data: {
        orderId: '1001',
        orderDate: '2023-01-01',
        status: 'delivered',
        total: 100,
        subtotal: 90,
        tax: 10,
        items: [],
        shippingAddress: { name: 'User', addressLine1: 'Street', city: 'City', state: 'ST', zipCode: '00000' }
      }
    }}
  />
);
```

## Customization Examples

### With Actions

Enable order management.

```tsx
import { Widget } from 'src/components/Widget';

const ManageOrder = () => (
  <Widget
    config={{
      type: 'order-details',
      data: {
        orderId: '2002',
        orderDate: '2023-05-20',
        status: 'pending',
        total: 500,
        subtotal: 450,
        tax: 50,
        items: [{ id: '1', name: 'Laptop', price: 450, quantity: 1 }],
        shippingAddress: addressData,
        actions: {
          onCancelOrder: (id) => console.log('Cancel', id),
          onTrackOrder: (id) => console.log('Track', id)
        }
      },
      settings: {
        showActions: true,
        allowCancel: true
      }
    }}
  />
);
```

## Enterprise Scenarios

### Order View Page

Complete order view layout.

```tsx
import { Widget } from 'src/components/Widget';

const OrderPage = ({ order }) => (
  <Widget
    config={{
      type: 'order-details',
      data: order,
      settings: {
        loading: false
      }
    }}
  />
);
```

## Accessibility Example

Accessible headings and structure.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'order-details',
      data: mockOrderData
    }}
  />
);
```
