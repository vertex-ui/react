# OrderConfirmation Widget Examples

## Basic Usage

Render order confirmation.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'order-confirmation',
      data: {
        orderId: '5555',
        status: 'confirmed',
        total: 120,
        subtotal: 100,
        items: [],
        shippingAddress: { name: 'User', addressLine1: 'Street', city: 'City', state: 'ST', zipCode: '00000' }
      }
    }}
  />
);
```

## Customization Examples

### Post-Purchase Actions

Offer next steps.

```tsx
import { Widget } from 'src/components/Widget';

const ConfirmationPage = () => (
  <Widget
    config={{
      type: 'order-confirmation',
      data: {
        orderId: '9999',
        status: 'confirmed',
        headerText: 'Thank You!',
        total: 300,
        subtotal: 280,
        shippingAddress: address,
        items: items,
        actions: {
          onContinueShopping: () => navigate('/shop'),
          onDownloadInvoice: (id) => download(id)
        }
      },
      settings: {
        showActions: true
      }
    }}
  />
);
```

## Enterprise Scenarios

### Rich Confirmation

Detailed summary with tracking.

```tsx
import { Widget } from 'src/components/Widget';

const RichConfirmation = ({ order }) => (
  <Widget
    config={{
      type: 'order-confirmation',
      data: {
        ...order,
        trackingNumber: 'TRK123456',
        estimatedDelivery: 'Dec 25, 2023'
      },
      settings: {
        hideContactSupport: false
      }
    }}
  />
);
```

## Accessibility Example

Uses semantic success messaging.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'order-confirmation',
      data: orderData
    }}
  />
);
```
