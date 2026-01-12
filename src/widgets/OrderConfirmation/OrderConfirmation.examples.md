# OrderConfirmation Examples

## Basic Usage

Display a confirmation message after a purchase.

```tsx
import { OrderConfirmation } from 'src/widgets/OrderConfirmation';

const BasicExample = () => (
  <OrderConfirmation
    orderId="998877"
    shippingAddress={{
      name: "Jane Doe",
      addressLine1: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    }}
    items={[
      { id: "1", name: "Laptop", price: 1200, quantity: 1 }
    ]}
    subtotal={1200}
    total={1200}
  />
);
```

## Customization Examples

### Full Details with Actions

Show billing address, taxes, and secondary actions.

```tsx
import { OrderConfirmation } from 'src/widgets/OrderConfirmation';

const FullExample = () => (
  <OrderConfirmation
    orderId="554433"
    status="confirmed"
    customerEmail="jane@example.com"
    shippingAddress={shippingAddr}
    billingAddress={billingAddr}
    items={items}
    subtotal={100}
    tax={10}
    shippingCost={5}
    total={115}
    onTrackOrder={(id) => console.log(id)}
    onDownloadInvoice={(id) => console.log(id)}
  />
);
```

## Enterprise Scenarios

### Post-Purchase Flow

Integrate into a checkout success page.

```tsx
import { OrderConfirmation } from 'src/widgets/OrderConfirmation';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = ({ order }) => {
  const navigate = useNavigate();

  return (
    <OrderConfirmation
      {...order}
      onContinueShopping={() => navigate('/shop')}
      onContactSupport={() => navigate('/support')}
      headerText="Purchase Successful!"
      headerSubtitle="We have received your order."
    />
  );
};
```

## Accessibility Example

The component uses semantic headings and lists.

```tsx
import { OrderConfirmation } from 'src/widgets/OrderConfirmation';

const A11yExample = () => (
  <main aria-live="polite">
    <OrderConfirmation
      orderId="112233"
      shippingAddress={address}
      items={items}
      subtotal={50}
      total={50}
    />
  </main>
);
```
