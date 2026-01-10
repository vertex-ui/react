# OrderDetails Widget

A full-page widget for displaying detailed order information, including timeline tracking, item breakdown, and order management actions.

## Features

- **Order Timeline**: Visual progress tracking (Placed → Packed → Shipped → Delivered).
- **Summary Cards**: Quick view of status, order number, delivery date, and payment status.
- **Detailed Lists**: Itemized product list, price breakdown, and customer details.
- **Action Management**: Buttons for tracking, cancelling, returning, or reordering.
- **Address Display**: Formatted shipping and billing information.

## Installation

```tsx
import { OrderDetails } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<OrderDetails
  orderId="12345"
  orderDate="Dec 19, 2023"
  status="shipped"
  total={199.99}
  subtotal={180.00}
  shippingAddress={address}
  items={items}
/>
```

## Tracking Integration

Display shipping carrier and tracking link.

```tsx
<OrderDetails
  trackingNumber="TRK-987654321"
  carrier="FedEx"
  trackingUrl="https://fedex.com/track/..."
  estimatedDelivery="Oct 25, 2024"
  // ...
/>
```

## Order Management Actions

Enable specific actions based on order state.

```tsx
<OrderDetails
  allowCancel={true}
  allowReturn={false}
  onCancelOrder={(id) => handleCancel(id)}
  onTrackOrder={(id) => navigate(`/track/${id}`)}
  onContactSupport={() => openChat()}
  // ...
/>
```

## Payment & Coupon Details

Show financial specifics.

```tsx
<OrderDetails
  paymentMethod="Credit Card"
  paymentStatus="paid"
  transactionId="TX-555"
  couponCode="WELCOME20"
  discount={20.00}
  tax={15.00}
  shippingCost={5.00}
  // ...
/>
```

## API Reference

### OrderDetailsProps

| Prop | Type | Description |
|------|------|-------------|
| `orderId` | `string` | Unique identifier |
| `status` | `'pending' \| 'shipped' \| ...` | Current state |
| `items` | `OrderDetailsItem[]` | Product list |
| `shippingAddress` | `OrderDetailsAddress` | Address object |
| `paymentStatus` | `'paid' \| 'pending' \| ...` | Payment state |
| `trackingNumber` | `string` | Tracking code |
| `onCancelOrder` | `(id) => void` | Cancel handler |
| `onReturnOrder` | `(id) => void` | Return handler |

### OrderDetailsItem

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Product Name |
| `image` | `string` | Image URL |
| `price` | `number` | Unit Price |
| `quantity` | `number` | Quantity |

## Accessibility

- Semantic headings and document structure.
- Timeline uses visual indicators and text labels.
- Interactive elements (buttons, links) are keyboard accessible.
