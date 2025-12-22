import type { Meta, StoryObj } from '@storybook/react';
import OrderConfirmation from '../../widgets/OrderConfirmation/OrderConfirmation';

const meta = {
  title: 'Widgets/OrderConfirmation',
  component: OrderConfirmation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onDownloadInvoice: { action: 'download invoice' },
    onContinueShopping: { action: 'continue shopping' },
    onTrackOrder: { action: 'track order' },
    onViewDetails: { action: 'view details' },
    onContactSupport: { action: 'contact support' },
    onShareOrder: { action: 'share order' },
  },
} satisfies Meta<typeof OrderConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orderId: 'ORD-2025-001',
    orderNumber: 'ORD-2025-001',
    orderDate: 'Dec 19, 2025',
    status: 'confirmed',
    customerEmail: 'john.doe@example.com',
    customerPhone: '+1 (555) 123-4567',
    shippingAddress: {
      name: 'John Doe',
      addressLine1: '123 Main Street',
      addressLine2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      phone: '+1 (555) 123-4567',
    },
    items: [
      {
        id: '1',
        name: 'Wireless Bluetooth Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150',
        quantity: 1,
        price: 2999,
        variant: 'Black, Premium',
      },
      {
        id: '2',
        name: 'Smart Watch Pro',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150',
        quantity: 1,
        price: 12999,
        variant: 'Silver',
      },
    ],
    subtotal: 15998,
    shippingCost: 99,
    tax: 800,
    discount: 0,
    total: 16897,
    currency: '₹',
    paymentMethod: 'VISA ****1234',
    transactionId: 'TXN-7892-2025-12-19',
    estimatedDelivery: 'Dec 23-25, 2025',
    trackingNumber: 'FDX123456789',
  },
};

export const WithDiscount: Story = {
  args: {
    orderId: 'ORD-2025-002',
    orderNumber: 'ORD-2025-002',
    orderDate: 'Dec 19, 2025',
    status: 'processing',
    customerEmail: 'jane.smith@example.com',
    customerPhone: '+1 (555) 987-6543',
    shippingAddress: {
      name: 'Jane Smith',
      addressLine1: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
    },
    billingAddress: {
      name: 'Jane Smith',
      addressLine1: '789 Pine Street',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90002',
    },
    items: [
      {
        id: '1',
        name: 'Premium Laptop Backpack',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150',
        quantity: 2,
        price: 1499,
      },
      {
        id: '2',
        name: 'USB-C Hub 7-in-1',
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=150',
        quantity: 1,
        price: 899,
      },
    ],
    subtotal: 3897,
    shippingCost: 0,
    tax: 195,
    discount: 500,
    total: 3592,
    currency: '₹',
    paymentMethod: 'UPI',
    transactionId: 'UPI-456-2025-12-19',
    estimatedDelivery: 'Dec 21-22, 2025',
  },
};

export const MultipleItems: Story = {
  args: {
    orderId: 'ORD-2025-003',
    orderNumber: 'ORD-2025-003',
    orderDate: 'Dec 19, 2025',
    status: 'confirmed',
    customerEmail: 'mike.wilson@example.com',
    shippingAddress: {
      name: 'Mike Wilson',
      addressLine1: '321 Elm Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      phone: '+1 (555) 246-8135',
    },
    items: [
      {
        id: '1',
        name: 'Mechanical Keyboard RGB',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=150',
        quantity: 1,
        price: 4999,
        variant: 'Blue Switches',
      },
      {
        id: '2',
        name: 'Gaming Mouse Wireless',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150',
        quantity: 1,
        price: 2499,
      },
      {
        id: '3',
        name: 'Mouse Pad XL',
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150',
        quantity: 1,
        price: 499,
      },
      {
        id: '4',
        name: 'USB Cable Type-C 2m',
        quantity: 3,
        price: 199,
      },
    ],
    subtotal: 8594,
    shippingCost: 150,
    tax: 429,
    discount: 1000,
    total: 8173,
    currency: '₹',
    paymentMethod: 'Credit Card',
    transactionId: 'CC-789-2025-12-19',
    estimatedDelivery: 'Dec 22-24, 2025',
    trackingNumber: 'DHL987654321',
  },
};

export const MinimalInfo: Story = {
  args: {
    orderId: 'ORD-2025-004',
    orderDate: 'Dec 19, 2025',
    status: 'pending',
    shippingAddress: {
      name: 'Sarah Johnson',
      addressLine1: '789 Maple Drive',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
    },
    items: [
      {
        id: '1',
        name: 'Organic Cotton T-Shirt',
        quantity: 3,
        price: 799,
      },
    ],
    subtotal: 2397,
    shippingCost: 99,
    tax: 120,
    discount: 0,
    total: 2616,
    currency: '₹',
  },
};

export const Delivered: Story = {
  args: {
    orderId: 'ORD-2025-005',
    orderNumber: 'ORD-2025-005',
    orderDate: 'Dec 15, 2025',
    status: 'delivered',
    statusText: 'Delivered Successfully',
    customerEmail: 'david.brown@example.com',
    customerPhone: '+1 (555) 369-2580',
    shippingAddress: {
      name: 'David Brown',
      addressLine1: '555 Broadway',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
    },
    items: [
      {
        id: '1',
        name: 'Stainless Steel Water Bottle',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=150',
        quantity: 2,
        price: 599,
        variant: '1 Liter, Blue',
      },
    ],
    subtotal: 1198,
    shippingCost: 0,
    tax: 60,
    discount: 100,
    total: 1158,
    currency: '₹',
    paymentMethod: 'Cash on Delivery',
  },
};
