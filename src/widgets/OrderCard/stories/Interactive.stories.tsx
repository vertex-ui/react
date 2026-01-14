import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../../components/Widget';
import { Flex } from '../../../components/Flex';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/OrderCard',
  component: Widget,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Widget>;

const sampleImage = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop';

export const Delivered: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: '6055',
        status: 'delivered',
        items: [
          { name: 'Beef Club & T-Bone', image: sampleImage, quantity: 5 },
          { name: 'Chicken Breast', quantity: 2 },
        ],
        total: 2499,
        date: '30 Nov 2025',
      },
      settings: { theme: 'ecommerce' },
    },
  },
};

export const Loading: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: '0000',
        status: 'pending',
        items: [],
        total: 0,
      },
      settings: { loading: true },
    },
  },
};

export const OrdersList: Story = {
  render: () => (
    <Flex direction="column" gap={16} style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Widget
        config={{ type: 'order', data: { id: '6055', status: 'delivered', items: [{ name: 'Beef Club & T-Bone', image: sampleImage, quantity: 5 }], total: 2499, date: '30 Nov 2025' } }}
      />
      <Widget
        config={{ type: 'order', data: { id: '6056', status: 'processing', items: [{ name: 'Premium Salmon Fillet', image: sampleImage, quantity: 2 }], total: 1899, date: '25 Dec 2025' } }}
      />
      <Widget
        config={{ type: 'order', data: { id: '6057', status: 'pending', items: [{ name: 'Organic Fruits Basket', image: sampleImage, quantity: 1 }], total: 799, date: '22 Dec 2025' } }}
      />
    </Flex>
  ),
};
