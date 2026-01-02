import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../../components/Widget/Widget';

const meta = {
  title: 'Widgets/OrderConfirmation',
  component: Widget,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: 'ORD-2025-001',
        date: 'Dec 19, 2025',
        status: 'confirmed',
        customer: { email: 'john.doe@example.com', phone: '+1 (555) 123-4567' },
        items: [
          { name: 'Wireless Bluetooth Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150', quantity: 1, price: 2999 },
          { name: 'Smart Watch Pro', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150', quantity: 1, price: 12999 },
        ],
        subtotal: 15998,
        shipping: 99,
        tax: 800,
        discount: 0,
        total: 16897,
        currency: '₹',
        trackingNumber: 'FDX123456789',
      },
      settings: { theme: 'ecommerce', showBreakdown: true },
    },
  },
};

export const WithDiscount: Story = {
  args: {
    config: {
      type: 'order',
      data: {
        id: 'ORD-2025-002',
        date: 'Dec 19, 2025',
        status: 'processing',
        customer: { email: 'jane.smith@example.com' },
        items: [
          { name: 'Premium Laptop Backpack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150', quantity: 2, price: 1499 },
          { name: 'USB-C Hub 7-in-1', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=150', quantity: 1, price: 899 },
        ],
        subtotal: 3897,
        shipping: 0,
        tax: 195,
        discount: 500,
        total: 3592,
        currency: '₹',
      },
      settings: { theme: 'ecommerce' },
    },
  },
};
