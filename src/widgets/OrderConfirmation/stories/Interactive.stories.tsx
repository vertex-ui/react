import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../../components/Widget';
import type { OrderConfirmationWidgetData, OrderConfirmationWidgetSettings } from '../../../components/Widget/types';

const meta = {
  title: 'Widgets/OrderConfirmation',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Order Confirmation using the unified Widget pattern with type, data, and settings separation - following the same architecture as InfoCard widgets.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete order confirmation with all features: multiple items, customer info, 
 * shipping & billing addresses, payment details, and action buttons.
 */
export const Complete: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD123456789',
        orderNumber: 'VTX-2025-001',
        orderDate: 'January 7, 2025',
        status: 'confirmed',

        headerText: '🎉 Order Confirmed Successfully!',
        headerSubtitle: 'Thank you for your purchase! Your order is being prepared for shipment.',

        customerEmail: 'john.doe@example.com',
        customerPhone: '+1 (555) 123-4567',

        items: [
          {
            id: '1',
            name: 'Premium Wireless Noise-Cancelling Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
            quantity: 1,
            price: 12999,
            variant: 'Midnight Black',
          },
          {
            id: '2',
            name: 'Smart Watch Pro Series 8',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop',
            quantity: 1,
            price: 24999,
            variant: 'Space Gray, 45mm',
          },
          {
            id: '3',
            name: 'USB-C Fast Charging Cable (2m)',
            image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=150&h=150&fit=crop',
            quantity: 2,
            price: 899,
          },
          {
            id: '4',
            name: 'Wireless Charging Pad',
            image: 'https://images.unsplash.com/photo-1591290619762-9b404f7e7eb4?w=150&h=150&fit=crop',
            quantity: 1,
            price: 2499,
          },
        ],

        subtotal: 42295,
        shippingCost: 150,
        tax: 2115,
        discount: 4230,
        total: 40330,
        currency: '₹',

        shippingAddress: {
          name: 'John Doe',
          addressLine1: '123 Tech Street, Building A, Floor 4',
          addressLine2: 'Near Innovation Park',
          city: 'Bangalore',
          state: 'Karnataka',
          zipCode: '560001',
          phone: '+91 98765 43210',
        },

        billingAddress: {
          name: 'John Doe',
          addressLine1: '456 Business Avenue',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          phone: '+91 98765 43210',
        },

        paymentMethod: 'Credit Card (**** 4242)',
        transactionId: 'TXN20250107ABCD1234',
        estimatedDelivery: 'January 10-12, 2025',
        trackingNumber: 'FDX1234567890',

        actions: {
          onDownloadInvoice: (orderId: string) => console.log('Download invoice:', orderId),
          onContinueShopping: () => console.log('Continue shopping'),
          onTrackOrder: (orderId: string) => console.log('Track order:', orderId),
          onViewDetails: (orderId: string) => console.log('View details:', orderId),
          onContactSupport: (orderId: string) => console.log('Contact support:', orderId),
          onShareOrder: (orderId: string) => console.log('Share order:', orderId),
        },
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: true,
        loading: false,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Simple order with minimal information - just essential details.
 */
export const Simple: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD987654321',
        orderDate: 'January 7, 2025',
        status: 'confirmed',

        items: [
          {
            id: '1',
            name: 'Bluetooth Speaker',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
            quantity: 1,
            price: 3499,
          },
        ],

        subtotal: 3499,
        shippingCost: 50,
        tax: 177,
        total: 3726,
        currency: '₹',

        shippingAddress: {
          name: 'Jane Smith',
          addressLine1: '789 Main Street',
          city: 'Delhi',
          state: 'Delhi',
          zipCode: '110001',
        },

        estimatedDelivery: 'January 9, 2025',
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: false,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Order with discount applied - shows discount line in pricing breakdown.
 */
export const WithDiscount: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD456789123',
        orderNumber: 'VTX-2025-002',
        orderDate: 'January 7, 2025',
        status: 'processing',

        customerEmail: 'sarah.wilson@example.com',

        items: [
          {
            id: '1',
            name: 'Premium Laptop Backpack',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
            quantity: 1,
            price: 5999,
            variant: 'Navy Blue',
          },
          {
            id: '2',
            name: 'Laptop Stand - Aluminum',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop',
            quantity: 1,
            price: 2499,
          },
          {
            id: '3',
            name: 'Wireless Mouse',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=150&h=150&fit=crop',
            quantity: 2,
            price: 1299,
          },
        ],

        subtotal: 11096,
        shippingCost: 0,
        tax: 555,
        discount: 2219,
        total: 9432,
        currency: '₹',

        shippingAddress: {
          name: 'Sarah Wilson',
          addressLine1: '321 Oak Avenue',
          city: 'Pune',
          state: 'Maharashtra',
          zipCode: '411001',
        },

        paymentMethod: 'UPI (Google Pay)',
        estimatedDelivery: 'January 11, 2025',
        trackingNumber: 'DHL9876543210',

        actions: {
          onDownloadInvoice: (orderId: string) => console.log('Download invoice:', orderId),
          onContinueShopping: () => console.log('Continue shopping'),
          onTrackOrder: (orderId: string) => console.log('Track order:', orderId),
        },
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: true,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Order with multiple items and full customer details.
 */
export const LargeOrder: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD789456123',
        orderNumber: 'VTX-2025-003',
        orderDate: 'January 7, 2025',
        status: 'confirmed',

        headerText: '🎉 Order Successfully Placed!',
        headerSubtitle: 'Thank you for your purchase! Your order has been confirmed and will be shipped soon.',

        customerEmail: 'michael.chen@example.com',
        customerPhone: '+1 (555) 987-6543',

        items: [
          {
            id: '1',
            name: '4K Ultra HD Monitor 27"',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&h=150&fit=crop',
            quantity: 2,
            price: 24999,
            variant: 'IPS, 144Hz',
          },
          {
            id: '2',
            name: 'Mechanical Gaming Keyboard RGB',
            image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&h=150&fit=crop',
            quantity: 1,
            price: 8999,
            variant: 'Cherry MX Red',
          },
          {
            id: '3',
            name: 'Gaming Mouse Pro',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=150&h=150&fit=crop',
            quantity: 1,
            price: 4999,
            variant: '16000 DPI',
          },
          {
            id: '4',
            name: 'Extended Gaming Mouse Pad',
            image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150&h=150&fit=crop',
            quantity: 1,
            price: 1999,
          },
          {
            id: '5',
            name: 'Webcam 1080p Full HD',
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=150&h=150&fit=crop',
            quantity: 1,
            price: 6999,
          },
          {
            id: '6',
            name: 'USB Hub 7-Port',
            image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=150&h=150&fit=crop',
            quantity: 1,
            price: 1499,
          },
        ],

        subtotal: 73493,
        shippingCost: 250,
        tax: 3675,
        discount: 7349,
        total: 70069,
        currency: '₹',

        shippingAddress: {
          name: 'Michael Chen',
          addressLine1: '555 Gaming Plaza, Tower B, Apt 1204',
          addressLine2: 'Tech District',
          city: 'Hyderabad',
          state: 'Telangana',
          zipCode: '500001',
          phone: '+91 99999 88888',
        },

        billingAddress: {
          name: 'Michael Chen',
          addressLine1: '555 Gaming Plaza, Tower B, Apt 1204',
          addressLine2: 'Tech District',
          city: 'Hyderabad',
          state: 'Telangana',
          zipCode: '500001',
          phone: '+91 99999 88888',
        },

        paymentMethod: 'Debit Card (**** 8765)',
        transactionId: 'TXN20250107XYZ9876',
        estimatedDelivery: 'January 12-14, 2025',
        trackingNumber: 'BLUEDART567890123',

        actions: {
          onDownloadInvoice: (orderId: string) => console.log('Download invoice:', orderId),
          onContinueShopping: () => console.log('Continue shopping'),
          onTrackOrder: (orderId: string) => console.log('Track order:', orderId),
          onViewDetails: (orderId: string) => console.log('View details:', orderId),
          onContactSupport: (orderId: string) => console.log('Contact support:', orderId),
        },
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: true,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Order in processing state - order placed but not yet confirmed.
 */
export const Processing: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD111222333',
        orderDate: 'January 7, 2025',
        status: 'processing',

        headerText: 'Order Received!',
        headerSubtitle: 'We are processing your order. You will receive a confirmation email shortly.',

        customerEmail: 'alex.johnson@example.com',

        items: [
          {
            id: '1',
            name: 'Fitness Tracker Smart Band',
            image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150&h=150&fit=crop',
            quantity: 1,
            price: 3999,
          },
        ],

        subtotal: 3999,
        shippingCost: 99,
        tax: 200,
        total: 4298,
        currency: '₹',

        shippingAddress: {
          name: 'Alex Johnson',
          addressLine1: '678 Health Street',
          city: 'Chennai',
          state: 'Tamil Nadu',
          zipCode: '600001',
        },

        estimatedDelivery: 'January 10, 2025',

        actions: {
          onDownloadInvoice: (orderId: string) => console.log('Download invoice:', orderId),
          onContinueShopping: () => console.log('Continue shopping'),
        },
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: true,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Loading state - shown while order data is being fetched.
 */
export const Loading: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD000000000',
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
      } as OrderConfirmationWidgetData,
      settings: {
        loading: true,
      } as OrderConfirmationWidgetSettings,
    },
  },
};

/**
 * Delivered order - shows completed delivery status.
 */
export const Delivered: Story = {
  args: {
    config: {
      type: 'order-confirmation',
      data: {
        orderId: 'ORD555666777',
        orderNumber: 'VTX-2024-999',
        orderDate: 'December 28, 2024',
        status: 'delivered',

        headerText: 'Order Delivered!',
        headerSubtitle: 'Your order has been successfully delivered. Thank you for shopping with us!',

        customerEmail: 'emma.davis@example.com',
        customerPhone: '+1 (555) 246-8135',

        items: [
          {
            id: '1',
            name: 'Portable Bluetooth Speaker',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
            quantity: 1,
            price: 5499,
            variant: 'Waterproof, Black',
          },
          {
            id: '2',
            name: 'Phone Stand Adjustable',
            image: 'https://images.unsplash.com/photo-1600856209923-34372e319a5d?w=150&h=150&fit=crop',
            quantity: 1,
            price: 799,
          },
        ],

        subtotal: 6298,
        shippingCost: 75,
        tax: 315,
        total: 6688,
        currency: '₹',

        shippingAddress: {
          name: 'Emma Davis',
          addressLine1: '999 Success Road',
          city: 'Kolkata',
          state: 'West Bengal',
          zipCode: '700001',
        },

        paymentMethod: 'Net Banking',
        transactionId: 'TXN20241228ABC5678',
        estimatedDelivery: 'Delivered on January 2, 2025',
        trackingNumber: 'DELIVERED123456',

        actions: {
          onDownloadInvoice: (orderId: string) => console.log('Download invoice:', orderId),
          onContinueShopping: () => console.log('Continue shopping'),
          onViewDetails: (orderId: string) => console.log('View details:', orderId),
        },
      } as OrderConfirmationWidgetData,
      settings: {
        showActions: true,
        hideTrackOrder: true,
      } as OrderConfirmationWidgetSettings,
    },
  },
};
