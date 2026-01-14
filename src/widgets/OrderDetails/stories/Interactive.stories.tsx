import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../../components/Widget';
import type { OrderDetailsWidgetData, OrderDetailsWidgetSettings } from '../../../components/Widget/types';

const meta = {
  title: 'Widgets/OrderDetails',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Order Details using the unified Widget pattern with type, data, and settings separation - following the same architecture as InfoCard widgets.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete order details with all features: tracking timeline, multiple items, 
 * customer info, addresses, payment details, and all action buttons.
 */
export const Complete: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD987654321',
        orderNumber: 'VTX-2025-456',
        orderDate: 'January 5, 2025',
        status: 'shipped',

        customerName: 'Sarah Johnson',
        customerEmail: 'sarah.johnson@example.com',
        customerPhone: '+1 (555) 789-0123',

        items: [
          {
            id: '1',
            name: 'Ultra HD 4K Monitor 32"',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&h=150&fit=crop',
            quantity: 1,
            price: 32999,
            variant: 'IPS Panel, 144Hz',
          },
          {
            id: '2',
            name: 'Ergonomic Office Chair',
            image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=150&h=150&fit=crop',
            quantity: 1,
            price: 18999,
            variant: 'Black Mesh',
          },
          {
            id: '3',
            name: 'Wireless Keyboard & Mouse Combo',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&h=150&fit=crop',
            quantity: 1,
            price: 4999,
          },
          {
            id: '4',
            name: 'Desk Lamp LED',
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop',
            quantity: 2,
            price: 2499,
          },
        ],

        subtotal: 61995,
        shippingCost: 299,
        tax: 3100,
        discount: 6200,
        total: 59194,
        currency: '₹',
        couponCode: 'WELCOME10',

        shippingAddress: {
          name: 'Sarah Johnson',
          addressLine1: '456 Corporate Plaza, Tower B, Suite 1205',
          addressLine2: 'Business District',
          city: 'Bangalore',
          state: 'Karnataka',
          zipCode: '560100',
          phone: '+91 98765 43210',
        },

        billingAddress: {
          name: 'Sarah Johnson',
          addressLine1: '456 Corporate Plaza, Tower B, Suite 1205',
          addressLine2: 'Business District',
          city: 'Bangalore',
          state: 'Karnataka',
          zipCode: '560100',
          phone: '+91 98765 43210',
        },

        paymentMethod: 'Credit Card (**** 5678)',
        paymentStatus: 'paid',
        transactionId: 'TXN20250105XYZ456',
        estimatedDelivery: 'January 9-10, 2025',
        trackingNumber: 'BLUEDART123456789',
        trackingUrl: 'https://example.com/track/BLUEDART123456789',
        carrier: 'BlueDart Express',

        actions: {
          onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
          onTrackOrder: (orderId) => console.log('Track order:', orderId),
          onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
          onReturnOrder: (orderId) => console.log('Return order:', orderId),
          onReorder: (orderId) => console.log('Reorder:', orderId),
          onContactSupport: (orderId) => console.log('Contact support:', orderId),
          onWriteReview: (orderId) => console.log('Write review:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: false,
        allowReturn: false,
        allowReorder: true,
        loading: false,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Order in processing state - recently placed, being prepared.
 */
export const Processing: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD123456789',
        orderNumber: 'VTX-2025-123',
        orderDate: 'January 7, 2025',
        status: 'processing',

        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        customerPhone: '+1 (555) 123-4567',

        items: [
          {
            id: '1',
            name: 'Wireless Bluetooth Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
            quantity: 1,
            price: 12999,
            variant: 'Active Noise Cancellation',
          },
          {
            id: '2',
            name: 'Smart Watch Pro',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop',
            quantity: 1,
            price: 24999,
            variant: 'GPS + Cellular, 44mm',
          },
        ],

        subtotal: 37998,
        shippingCost: 150,
        tax: 1900,
        discount: 3800,
        total: 36248,
        currency: '₹',

        shippingAddress: {
          name: 'John Doe',
          addressLine1: '123 Main Street, Apartment 4B',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          phone: '+91 98765 43210',
        },

        billingAddress: {
          name: 'John Doe',
          addressLine1: '123 Main Street, Apartment 4B',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          phone: '+91 98765 43210',
        },

        paymentMethod: 'UPI (GooglePay)',
        paymentStatus: 'paid',
        transactionId: 'TXN20250107ABC123',
        estimatedDelivery: 'January 10-12, 2025',

        actions: {
          onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
          onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
          onContactSupport: (orderId) => console.log('Contact support:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: true,
        allowReturn: false,
        allowReorder: false,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Delivered order - shows completed delivery with review option.
 */
export const Delivered: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD456789012',
        orderNumber: 'VTX-2024-999',
        orderDate: 'December 28, 2024',
        status: 'delivered',

        customerName: 'Emma Wilson',
        customerEmail: 'emma.wilson@example.com',
        customerPhone: '+1 (555) 456-7890',

        items: [
          {
            id: '1',
            name: 'Laptop Backpack Premium',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
            quantity: 1,
            price: 5999,
            variant: 'Black, 15.6" Laptop',
          },
          {
            id: '2',
            name: 'Portable Power Bank 20000mAh',
            image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=150&h=150&fit=crop',
            quantity: 1,
            price: 2999,
          },
        ],

        subtotal: 8998,
        shippingCost: 0,
        tax: 450,
        total: 9448,
        currency: '₹',

        shippingAddress: {
          name: 'Emma Wilson',
          addressLine1: '789 Elm Street',
          city: 'Chennai',
          state: 'Tamil Nadu',
          zipCode: '600001',
        },

        paymentMethod: 'Debit Card (**** 9012)',
        paymentStatus: 'paid',
        transactionId: 'TXN20241228DEF999',
        deliveredDate: 'January 2, 2025',
        trackingNumber: 'DELIVERED567890',

        actions: {
          onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
          onReturnOrder: (orderId) => console.log('Return order:', orderId),
          onReorder: (orderId) => console.log('Reorder:', orderId),
          onWriteReview: (orderId) => console.log('Write review:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: false,
        allowReturn: true,
        allowReorder: true,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Shipped order - in transit with tracking information.
 */
export const Shipped: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD789012345',
        orderNumber: 'VTX-2025-789',
        orderDate: 'January 6, 2025',
        status: 'shipped',

        customerName: 'David Brown',
        customerEmail: 'david.brown@example.com',

        items: [
          {
            id: '1',
            name: 'Running Shoes Pro',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop',
            quantity: 1,
            price: 7999,
            variant: 'Size 10, Navy Blue',
          },
        ],

        subtotal: 7999,
        shippingCost: 100,
        tax: 400,
        total: 8499,
        currency: '₹',

        shippingAddress: {
          name: 'David Brown',
          addressLine1: '234 Fitness Lane',
          city: 'Hyderabad',
          state: 'Telangana',
          zipCode: '500001',
        },

        paymentMethod: 'Credit Card',
        paymentStatus: 'paid',
        estimatedDelivery: 'January 9, 2025',
        trackingNumber: 'FDX7890123456',
        trackingUrl: 'https://example.com/track/FDX7890123456',
        carrier: 'FedEx',

        actions: {
          onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
          onTrackOrder: (orderId) => console.log('Track order:', orderId),
          onContactSupport: (orderId) => console.log('Contact support:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: false,
        allowReturn: false,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Cancelled order - shows cancelled status.
 */
export const Cancelled: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD345678901',
        orderNumber: 'VTX-2025-345',
        orderDate: 'January 4, 2025',
        status: 'cancelled',
        statusText: 'Cancelled by customer',

        customerName: 'Lisa Anderson',
        customerEmail: 'lisa.anderson@example.com',

        items: [
          {
            id: '1',
            name: 'T-Shirt Cotton',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop',
            quantity: 3,
            price: 999,
            variant: 'Size M, White',
          },
        ],

        subtotal: 2997,
        shippingCost: 50,
        tax: 150,
        total: 3197,
        currency: '₹',

        shippingAddress: {
          name: 'Lisa Anderson',
          addressLine1: '567 Fashion Street',
          city: 'Pune',
          state: 'Maharashtra',
          zipCode: '411001',
        },

        paymentMethod: 'UPI',
        paymentStatus: 'refunded',
        transactionId: 'TXN20250104GHI345',

        actions: {
          onReorder: (orderId) => console.log('Reorder:', orderId),
          onContactSupport: (orderId) => console.log('Contact support:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: false,
        allowReturn: false,
        allowReorder: true,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Pending order - awaiting payment confirmation.
 */
export const Pending: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD901234567',
        orderNumber: 'VTX-2025-901',
        orderDate: 'January 7, 2025',
        status: 'pending',
        statusText: 'Awaiting payment confirmation',

        customerName: 'Robert Taylor',
        customerEmail: 'robert.taylor@example.com',

        items: [
          {
            id: '1',
            name: 'Book Set - Complete Collection',
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=150&fit=crop',
            quantity: 1,
            price: 4999,
          },
        ],

        subtotal: 4999,
        shippingCost: 75,
        tax: 250,
        total: 5324,
        currency: '₹',

        shippingAddress: {
          name: 'Robert Taylor',
          addressLine1: '890 Library Road',
          city: 'Kolkata',
          state: 'West Bengal',
          zipCode: '700001',
        },

        paymentMethod: 'Net Banking',
        paymentStatus: 'pending',

        actions: {
          onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
          onContactSupport: (orderId) => console.log('Contact support:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowCancel: true,
        allowReturn: false,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Large order with many items.
 */
export const LargeOrder: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD567890123',
        orderNumber: 'VTX-2025-567',
        orderDate: 'January 3, 2025',
        status: 'delivered',

        customerName: 'Jennifer Lee',
        customerEmail: 'jennifer.lee@example.com',
        customerPhone: '+1 (555) 321-6540',

        items: [
          {
            id: '1',
            name: 'Kitchen Mixer Grinder',
            image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=150&h=150&fit=crop',
            quantity: 1,
            price: 6999,
          },
          {
            id: '2',
            name: 'Non-Stick Cookware Set',
            image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=150&h=150&fit=crop',
            quantity: 1,
            price: 8999,
          },
          {
            id: '3',
            name: 'Electric Kettle',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=150&h=150&fit=crop',
            quantity: 1,
            price: 1999,
          },
          {
            id: '4',
            name: 'Pressure Cooker',
            image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=150&h=150&fit=crop',
            quantity: 1,
            price: 3999,
          },
          {
            id: '5',
            name: 'Kitchen Storage Containers Set',
            image: 'https://images.unsplash.com/photo-1584990347449-39b4c79d89b6?w=150&h=150&fit=crop',
            quantity: 2,
            price: 1499,
          },
        ],

        subtotal: 24994,
        shippingCost: 0,
        tax: 1250,
        discount: 2499,
        total: 23745,
        currency: '₹',
        couponCode: 'HOME10',

        shippingAddress: {
          name: 'Jennifer Lee',
          addressLine1: '111 Kitchen Drive, Apartment 5C',
          city: 'Delhi',
          state: 'Delhi',
          zipCode: '110001',
          phone: '+91 88888 77777',
        },

        billingAddress: {
          name: 'Jennifer Lee',
          addressLine1: '111 Kitchen Drive, Apartment 5C',
          city: 'Delhi',
          state: 'Delhi',
          zipCode: '110001',
          phone: '+91 88888 77777',
        },

        paymentMethod: 'Cash on Delivery',
        paymentStatus: 'paid',
        deliveredDate: 'January 7, 2025',
        trackingNumber: 'DLVD9876543',

        actions: {
          onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
          onReorder: (orderId) => console.log('Reorder:', orderId),
          onWriteReview: (orderId) => console.log('Write review:', orderId),
        },
      } as OrderDetailsWidgetData,
      settings: {
        showActions: true,
        allowReturn: true,
        allowReorder: true,
      } as OrderDetailsWidgetSettings,
    },
  },
};

/**
 * Loading state - shown while order data is being fetched.
 */
export const Loading: Story = {
  args: {
    config: {
      type: 'order-details',
      data: {
        orderId: 'ORD000000000',
        orderDate: '',
        status: 'pending',
        items: [],
        subtotal: 0,
        total: 0,
        shippingAddress: {
          name: '',
          addressLine1: '',
          city: '',
          state: '',
          zipCode: '',
        },
      } as OrderDetailsWidgetData,
      settings: {
        loading: true,
      } as OrderDetailsWidgetSettings,
    },
  },
};
