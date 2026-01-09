# OrderCard Widget

A summary card for displaying order status, items, and tracking actions. Designed for e-commerce order lists.

## Features

- **Order Info**: ID, Status, and Total Amount.
- **Product Preview**: Shows the first item's image and name, with a count of additional items.
- **Status Badge**: Automatically colors the status badge based on state (pending, delivered, etc.).
- **Tracking**: Integrated "Track Order" button.
- **Interactivity**: Optional click handler for viewing full details.

## Installation

```tsx
import { OrderCard } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<OrderCard
  orderId="ORD-1234"
  status="delivered"
  totalAmount={129.99}
  deliveryDate="Oct 12, 2024"
  items={[
    { id: '1', name: 'Wireless Headphones', image: 'headphones.jpg', quantity: 1 },
    { id: '2', name: 'USB-C Cable', quantity: 2 }
  ]}
  onTrackOrder={(id) => console.log('Track', id)}
/>
```

## Status Variants

The card automatically applies badge colors based on the `status` prop:

- `delivered`: Success (Green)
- `cancelled`: Error (Red)
- `processing` / `shipped`: Info (Blue)
- `pending`: Warning (Orange)

## Customization

```tsx
<OrderCard
  orderId="999"
  status="shipped"
  statusText="En Route"
  trackButtonText="Live Tracking"
  currency="$"
  {...otherProps}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orderId` | `string` | **required** | Unique identifier |
| `items` | `OrderItem[]` | **required** | List of products |
| `totalAmount` | `number` | **required** | Order total |
| `status` | `'pending' \| 'delivered' \| ...` | `'pending'` | Order state |
| `statusText` | `string` | - | Custom status label |
| `deliveryDate` | `string` | - | Expected/Actual date |
| `deliveryLabel` | `string` | `'Delivered on'` | Date label prefix |
| `currency` | `string` | `'₹'` | Currency symbol |
| `onTrackOrder` | `(id) => void` | - | Track button handler |
| `onViewDetails` | `(id) => void` | - | Card click handler |
| `trackButtonText` | `string` | `'Track Order'` | Button label |

### OrderItem

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Product name |
| `image` | `string` | Image URL |
| `quantity` | `number` | Item count |
| `price` | `number` | Item price |

## Accessibility

- The card serves as a semantic unit for an order.
- Interactive elements (Track button) are accessible via keyboard.
- Images include `alt` text from item names.
