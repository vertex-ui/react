import type { Meta, StoryObj } from '@storybook/react';
import OrderCard from '../../widgets/OrderCard/OrderCard';
import { Flex } from '../../components/Flex';

const meta: Meta<typeof OrderCard> = {
  title: 'Widgets/OrderCard',
  component: OrderCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'OrderCard widget for displaying order information in a responsive card layout. Handles long text gracefully and adapts to all screen sizes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderCard>;

// Sample product image
const sampleImage = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop';
const sampleImage2 = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop';
const sampleImage3 = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop';

export const Delivered: Story = {
  args: {
    orderId: '6055',
    status: 'delivered',
    items: [
      {
        id: '1',
        name: 'Beef Club & T-Bone',
        image: sampleImage,
        quantity: 5,
      },
      {
        id: '2',
        name: 'Chicken Breast',
        quantity: 2,
      },
      {
        id: '3',
        name: 'Fresh Vegetables Pack',
        quantity: 1,
      },
    ],
    deliveryDate: '30 Nov 2025',
    totalAmount: 2499,
    onTrackOrder: (id) => alert(`Track order: ${id}`),
    onViewDetails: (id) => alert(`View order details: ${id}`),
  },
};

export const Processing: Story = {
  args: {
    orderId: '6056',
    status: 'processing',
    items: [
      {
        id: '1',
        name: 'Premium Salmon Fillet',
        image: sampleImage2,
        quantity: 2,
      },
    ],
    deliveryDate: '25 Dec 2025',
    deliveryLabel: 'Expected delivery',
    totalAmount: 1899,
    currency: '$',
    onTrackOrder: (id) => alert(`Track order: ${id}`),
  },
};

export const Cancelled: Story = {
  args: {
    orderId: '6057',
    status: 'cancelled',
    statusText: 'Cancelled',
    items: [
      {
        id: '1',
        name: 'Organic Fruits Basket',
        image: sampleImage3,
        quantity: 1,
      },
      {
        id: '2',
        name: 'Fresh Juice Pack',
        quantity: 3,
      },
    ],
    deliveryDate: '15 Nov 2025',
    deliveryLabel: 'Cancelled on',
    totalAmount: 799,
    onViewDetails: (id) => alert(`View order details: ${id}`),
  },
};

export const LongProductName: Story = {
  args: {
    orderId: '6058',
    status: 'shipped',
    items: [
      {
        id: '1',
        name: 'Premium Grass-Fed Organic Australian Beef Club Steak & T-Bone Combo Pack with Extra Seasoning',
        image: sampleImage,
        quantity: 10,
      },
      {
        id: '2',
        name: 'Another very long product name that should wrap properly',
        quantity: 5,
      },
      {
        id: '3',
        name: 'Third item',
        quantity: 2,
      },
    ],
    deliveryDate: '28 Dec 2025',
    deliveryLabel: 'Estimated delivery',
    totalAmount: 15999,
    onTrackOrder: (id) => alert(`Track order: ${id}`),
  },
};

export const Pending: Story = {
  args: {
    orderId: '6059',
    status: 'pending',
    items: [
      {
        id: '1',
        name: 'Fresh Vegetables Box',
        image: sampleImage3,
        quantity: 1,
      },
    ],
    deliveryDate: '22 Dec 2025',
    deliveryLabel: 'Processing for',
    totalAmount: 599,
    onTrackOrder: (id) => alert(`Track order: ${id}`),
  },
};

export const NoImage: Story = {
  args: {
    orderId: '6060',
    status: 'delivered',
    items: [
      {
        id: '1',
        name: 'Digital Gift Card',
        quantity: 1,
      },
      {
        id: '2',
        name: 'Service Subscription',
        quantity: 1,
      },
    ],
    deliveryDate: '20 Nov 2025',
    totalAmount: 999,
    onTrackOrder: (id) => alert(`Track order: ${id}`),
  },
};

export const MultipleItems: Story = {
  args: {
    orderId: '6061',
    orderNumber: 'ORD-2025-6061',
    status: 'delivered',
    items: [
      {
        id: '1',
        name: 'Beef Club & T-Bone',
        image: sampleImage,
        quantity: 3,
      },
      {
        id: '2',
        name: 'Chicken Breast',
        quantity: 5,
      },
      {
        id: '3',
        name: 'Fresh Vegetables Pack',
        quantity: 2,
      },
      {
        id: '4',
        name: 'Salmon Fillet',
        quantity: 2,
      },
      {
        id: '5',
        name: 'Organic Fruits',
        quantity: 1,
      },
    ],
    deliveryDate: '18 Dec 2025',
    totalAmount: 8999,
    currency: '$',
    onTrackOrder: (id) => alert(`Track order: ${id}`),
    onViewDetails: (id) => alert(`View order details: ${id}`),
  },
};

export const OrdersList: Story = {
  render: () => (
    <Flex direction="column" gap={16} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <OrderCard
        orderId="6055"
        status="delivered"
        items={[
          { id: '1', name: 'Beef Club & T-Bone', image: sampleImage, quantity: 5 },
          { id: '2', name: 'Chicken Breast', quantity: 2 },
          { id: '3', name: 'Fresh Vegetables Pack', quantity: 1 },
        ]}
        deliveryDate="30 Nov 2025"
        totalAmount={2499}
        onTrackOrder={(id) => alert(`Track: ${id}`)}
      />
      <OrderCard
        orderId="6056"
        status="processing"
        items={[
          { id: '1', name: 'Premium Salmon Fillet', image: sampleImage2, quantity: 2 },
        ]}
        deliveryDate="25 Dec 2025"
        deliveryLabel="Expected delivery"
        totalAmount={1899}
        onTrackOrder={(id) => alert(`Track: ${id}`)}
      />
      <OrderCard
        orderId="6057"
        status="pending"
        items={[
          { id: '1', name: 'Organic Fruits Basket', image: sampleImage3, quantity: 1 },
          { id: '2', name: 'Fresh Juice Pack', quantity: 3 },
        ]}
        deliveryDate="22 Dec 2025"
        totalAmount={799}
        onTrackOrder={(id) => alert(`Track: ${id}`)}
      />
      <OrderCard
        orderId="6058"
        status="cancelled"
        items={[
          { id: '1', name: 'Digital Gift Card', quantity: 1 },
        ]}
        deliveryDate="15 Nov 2025"
        deliveryLabel="Cancelled on"
        totalAmount={599}
      />
    </Flex>
  ),
};
