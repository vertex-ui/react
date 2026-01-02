import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../../components/Widget/Widget';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/OrderDetails',
  component: Widget,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Widget>;

export const Processing: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: 'ORD-2025-001',
        date: 'Dec 15, 2025',
        status: 'processing',
        customer: { name: 'John Doe', email: 'john.doe@example.com', phone: '+1 (555) 123-4567' },
        items: [
          { name: 'Wireless Bluetooth Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150', quantity: 1, price: 2999 },
          { name: 'Smart Watch Pro', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150', quantity: 1, price: 12999 },
        ],
        subtotal: 15998,
        shipping: 99,
        tax: 800,
        discount: 500,
        total: 16397,
        currency: '₹',
      },
      settings: { showCustomer: true, showItems: true, showBreakdown: true },
    },
  },
};

export const Delivered: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: 'ORD-2025-003',
        date: 'Nov 28, 2025',
        status: 'delivered',
        customer: { name: 'Mike Wilson', email: 'mike.wilson@example.com', phone: '+1 (555) 246-8135' },
        items: [
          { name: 'Mechanical Keyboard RGB', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=150', quantity: 1, price: 4999 },
        ],
        subtotal: 7997,
        shipping: 150,
        tax: 407,
        discount: 1000,
        total: 7554,
        currency: '₹',
      },
      settings: { showItems: true, showBreakdown: true },
    },
  },
};
