# OrderConfirmation Widget

A comprehensive page-level widget for displaying post-purchase details. Includes success messaging, itemized lists, pricing summaries, and next steps.

## Features

- **Success Header**: Customizable confirmation message and icon.
- **Order Details**: Key metrics like order number, date, status, and tracking.
- **Address Display**: Formatted shipping and billing addresses.
- **Item List**: Detailed breakdown of purchased items with images and pricing.
- **Price Summary**: Subtotal, shipping, tax, discount, and total calculation.
- **Action Buttons**: Configurable buttons for common post-order actions (Download, Track, etc.).
- **Support Section**: Help contact information.

## Installation

```tsx
import { OrderConfirmation } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<OrderConfirmation
  orderId="12345"
  status="confirmed"
  shippingAddress={{
    name: 'John Doe',
    addressLine1: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  }}
  items={[
    { id: '1', name: 'Product A', price: 50, quantity: 1 }
  ]}
  subtotal={50}
  total={50}
/>
```

## Configuration

### Header & Messaging

Customize the success message.

```tsx
<OrderConfirmation
  headerText="Thank You!"
  headerSubtitle="Your order has been received."
  orderNumber="ORD-999"
  // ...
/>
```

### Action Buttons

Enable or disable specific actions.

```tsx
<OrderConfirmation
  // ...
  onDownloadInvoice={(id) => window.print()}
  onContinueShopping={() => navigate('/shop')}
  hideTrackOrder={true}
  downloadInvoiceText="Get Receipt"
/>
```

### Payment & Customer Details

Add extra context.

```tsx
<OrderConfirmation
  // ...
  customerEmail="john@example.com"
  paymentMethod="Visa ending in 4242"
  transactionId="TXN-777"
/>
```

## API Reference

### OrderConfirmationProps

| Prop | Type | Description |
|------|------|-------------|
| `orderId` | `string` | Unique identifier |
| `status` | `'confirmed' \| ...` | Order status |
| `items` | `OrderConfirmationItem[]` | Product list |
| `shippingAddress` | `OrderConfirmationAddress` | Shipping details |
| `billingAddress` | `OrderConfirmationAddress` | Billing details |
| `subtotal` | `number` | Item total |
| `total` | `number` | Final amount |
| `onDownloadInvoice` | `(id) => void` | Invoice handler |
| `onTrackOrder` | `(id) => void` | Tracking handler |
| `onContinueShopping` | `() => void` | Navigation handler |

### OrderConfirmationItem

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Product name |
| `image` | `string` | Image URL |
| `price` | `number` | Unit price |
| `quantity` | `number` | Quantity |
| `variant` | `string` | e.g. "Size: M" |

## Accessibility

- Headings hierarchy (`h4`, `h6`) structures the content.
- Semantic lists and dividers used for layout.
- Action buttons have descriptive labels.
