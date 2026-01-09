import type { Meta, StoryObj } from '@storybook/react';
import { OrderDetails } from '../../widgets/OrderDetails';
import type { OrderDetailsProps } from '../../widgets/OrderDetails';

const meta = {
  title: 'Widgets/OrderDetails',
  component: OrderDetails,
  parameters: { 
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive order details component that displays complete order information including status tracking, items, pricing, addresses, payment details, and management actions for existing orders.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['pending', 'processing', 'confirmed', 'shipped', 'delivered', 'cancelled', 'returned'],
    },
    paymentStatus: {
      control: 'select',
      options: ['pending', 'paid', 'failed', 'refunded'],
    },
    loading: {
      control: 'boolean',
    },
    showActions: {
      control: 'boolean',
    },
    allowCancel: {
      control: 'boolean',
    },
    allowReturn: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof OrderDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete order details with all features: tracking timeline, multiple items, 
 * customer info, addresses, payment details, and all action buttons.
 */
export const Complete: Story = {
  args: {
    orderId: 'ORD987654321',
    orderNumber: 'VTX-2025-456',
    orderDate: 'January 5, 2025',
    status: 'shipped',
    
    // Customer Information
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.johnson@example.com',
    customerPhone: '+1 (555) 789-0123',
    
    // Order Items
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
    
    // Pricing
    subtotal: 61995,
    shippingCost: 299,
    tax: 3100,
    discount: 6200, // 10% discount
    total: 59194,
    currency: '₹',
    couponCode: 'WELCOME10',
    
    // Shipping Address
    shippingAddress: {
      name: 'Sarah Johnson',
      addressLine1: '456 Corporate Plaza, Tower B, Suite 1205',
      addressLine2: 'Business District',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560100',
      phone: '+91 98765 43210',
    },
    
    // Billing Address
    billingAddress: {
      name: 'Sarah Johnson',
      addressLine1: '456 Corporate Plaza, Tower B, Suite 1205',
      addressLine2: 'Business District',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560100',
      phone: '+91 98765 43210',
    },
    
    // Payment Information
    paymentMethod: 'Credit Card (**** 5678)',
    paymentStatus: 'paid',
    transactionId: 'TXN20250105XYZ456',
    
    // Delivery & Tracking
    estimatedDelivery: 'January 9-10, 2025',
    trackingNumber: 'BLUEDART123456789',
    trackingUrl: 'https://example.com/track/BLUEDART123456789',
    carrier: 'BlueDart Express',
    
    // Actions
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onTrackOrder: (orderId) => console.log('Track order:', orderId),
    onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
    onReturnOrder: (orderId) => console.log('Return order:', orderId),
    onReorder: (orderId) => console.log('Reorder:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    onWriteReview: (orderId) => console.log('Write review:', orderId),
    
    showActions: true,
    allowCancel: false, // Can't cancel shipped orders
    allowReturn: false, // Not delivered yet
    allowReorder: true,
  } as OrderDetailsProps,
};

/**
 * Order in processing state - recently placed, being prepared.
 */
export const Processing: Story = {
  args: {
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
    
    paymentMethod: 'UPI (PhonePe)',
    paymentStatus: 'paid',
    transactionId: 'TXN20250107ABC123',
    
    estimatedDelivery: 'January 10-11, 2025',
    
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: true, // Can cancel while processing
    allowReturn: false,
  } as OrderDetailsProps,
};

/**
 * Delivered order - completed successfully with review option.
 */
export const Delivered: Story = {
  args: {
    orderId: 'ORD555666777',
    orderNumber: 'VTX-2024-999',
    orderDate: 'December 20, 2024',
    status: 'delivered',
    
    customerName: 'Mike Wilson',
    customerEmail: 'mike.wilson@example.com',
    customerPhone: '+1 (555) 246-8135',
    
    items: [
      {
        id: '1',
        name: 'Mechanical Gaming Keyboard RGB',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&h=150&fit=crop',
        quantity: 1,
        price: 8999,
        variant: 'Cherry MX Brown Switches',
      },
      {
        id: '2',
        name: 'Gaming Mouse Pro',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=150&h=150&fit=crop',
        quantity: 1,
        price: 4999,
        variant: '16000 DPI, RGB',
      },
    ],
    
    subtotal: 13998,
    shippingCost: 100,
    tax: 700,
    discount: 1400,
    total: 13398,
    currency: '₹',
    
    shippingAddress: {
      name: 'Mike Wilson',
      addressLine1: '789 Tech Avenue',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411001',
      phone: '+91 91234 56789',
    },
    
    paymentMethod: 'Net Banking (HDFC)',
    paymentStatus: 'paid',
    transactionId: 'TXN20241220DEF789',
    
    deliveredDate: 'December 25, 2024',
    trackingNumber: 'FDX9876543210',
    carrier: 'FedEx',
    
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onReturnOrder: (orderId) => console.log('Return order:', orderId),
    onReorder: (orderId) => console.log('Reorder:', orderId),
    onWriteReview: (orderId) => console.log('Write review:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: false,
    allowReturn: true, // Can return delivered items
    allowReorder: true,
  } as OrderDetailsProps,
};

/**
 * Shipped order with tracking - in transit to customer.
 */
export const Shipped: Story = {
  args: {
    orderId: 'ORD333444555',
    orderNumber: 'VTX-2025-333',
    orderDate: 'January 4, 2025',
    status: 'shipped',
    
    customerName: 'Emily Chen',
    customerEmail: 'emily.chen@example.com',
    
    items: [
      {
        id: '1',
        name: 'Laptop Backpack Premium',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
        quantity: 1,
        price: 3999,
        variant: 'Navy Blue, 30L',
      },
      {
        id: '2',
        name: 'Water Bottle Insulated',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=150&h=150&fit=crop',
        quantity: 2,
        price: 899,
      },
      {
        id: '3',
        name: 'Travel Organizer Pouch',
        image: 'https://images.unsplash.com/photo-1564084741183-ecc52eeee2c1?w=150&h=150&fit=crop',
        quantity: 1,
        price: 599,
      },
    ],
    
    subtotal: 6396,
    shippingCost: 0, // Free shipping
    tax: 320,
    discount: 640,
    total: 6076,
    currency: '₹',
    couponCode: 'FREESHIP',
    
    shippingAddress: {
      name: 'Emily Chen',
      addressLine1: '321 Park Street, Building C',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001',
      phone: '+91 88888 77777',
    },
    
    paymentMethod: 'Debit Card (**** 1234)',
    paymentStatus: 'paid',
    
    estimatedDelivery: 'January 8, 2025',
    trackingNumber: 'DELHIVERY987654',
    carrier: 'Delhivery',
    
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onTrackOrder: (orderId) => console.log('Track order:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: false, // Can't cancel once shipped
    allowReturn: false,
  } as OrderDetailsProps,
};

/**
 * Cancelled order - order was cancelled by customer or system.
 */
export const Cancelled: Story = {
  args: {
    orderId: 'ORD888999000',
    orderNumber: 'VTX-2025-888',
    orderDate: 'January 3, 2025',
    status: 'cancelled',
    statusText: 'Cancelled by Customer',
    
    customerName: 'David Kumar',
    customerEmail: 'david.kumar@example.com',
    
    items: [
      {
        id: '1',
        name: 'Bluetooth Speaker Portable',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
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
      name: 'David Kumar',
      addressLine1: '555 Lake View',
      city: 'Hyderabad',
      state: 'Telangana',
      zipCode: '500001',
    },
    
    paymentMethod: 'Credit Card (**** 9876)',
    paymentStatus: 'refunded',
    transactionId: 'TXN20250103REF123',
    
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onReorder: (orderId) => console.log('Reorder:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: false,
    allowReturn: false,
    allowReorder: true, // Allow reordering cancelled items
  } as OrderDetailsProps,
};

/**
 * Pending order - payment pending or order under review.
 */
export const Pending: Story = {
  args: {
    orderId: 'ORD111222333',
    orderDate: 'January 7, 2025',
    status: 'pending',
    
    customerEmail: 'alex.smith@example.com',
    
    items: [
      {
        id: '1',
        name: 'Fitness Tracker Band',
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150&h=150&fit=crop',
        quantity: 1,
        price: 2999,
      },
    ],
    
    subtotal: 2999,
    shippingCost: 50,
    tax: 150,
    total: 3199,
    currency: '₹',
    
    shippingAddress: {
      name: 'Alex Smith',
      addressLine1: '111 New Colony',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600001',
    },
    
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'pending',
    
    estimatedDelivery: 'January 11, 2025',
    
    onCancelOrder: (orderId) => console.log('Cancel order:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: true, // Can cancel pending orders
    allowReturn: false,
  } as OrderDetailsProps,
};

/**
 * Large order with many items - tests layout and scrolling.
 */
export const LargeOrder: Story = {
  args: {
    orderId: 'ORD777888999',
    orderNumber: 'VTX-2025-777',
    orderDate: 'January 6, 2025',
    status: 'confirmed',
    
    customerName: 'Jessica Martinez',
    customerEmail: 'jessica.martinez@example.com',
    customerPhone: '+1 (555) 555-5555',
    
    items: [
      {
        id: '1',
        name: 'Laptop Dell XPS 15',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=150&h=150&fit=crop',
        quantity: 1,
        price: 124999,
        variant: 'i7, 16GB RAM, 512GB SSD',
      },
      {
        id: '2',
        name: 'Laptop Sleeve 15"',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=150&h=150&fit=crop',
        quantity: 1,
        price: 1499,
      },
      {
        id: '3',
        name: 'Wireless Mouse Logitech',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=150&h=150&fit=crop',
        quantity: 1,
        price: 2499,
      },
      {
        id: '4',
        name: 'USB-C Hub Multiport',
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=150&h=150&fit=crop',
        quantity: 1,
        price: 2999,
      },
      {
        id: '5',
        name: 'External SSD 1TB',
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=150&h=150&fit=crop',
        quantity: 1,
        price: 8999,
      },
      {
        id: '6',
        name: 'Laptop Cooling Pad',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=150&h=150&fit=crop',
        quantity: 1,
        price: 1999,
      },
      {
        id: '7',
        name: 'Wireless Keyboard',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&h=150&fit=crop',
        quantity: 1,
        price: 3499,
      },
    ],
    
    subtotal: 146493,
    shippingCost: 500,
    tax: 7325,
    discount: 14649, // 10% discount
    total: 139669,
    currency: '₹',
    couponCode: 'LAPTOP10',
    
    shippingAddress: {
      name: 'Jessica Martinez',
      addressLine1: '888 Innovation Park, Phase 2',
      addressLine2: 'Tech Hub Area',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560066',
      phone: '+91 99999 11111',
    },
    
    billingAddress: {
      name: 'TechCorp Solutions Pvt Ltd',
      addressLine1: '999 Corporate Street',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001',
      phone: '+91 80 2345 6789',
    },
    
    paymentMethod: 'Corporate Card (**** 4321)',
    paymentStatus: 'paid',
    transactionId: 'TXN20250106CORP999',
    
    estimatedDelivery: 'January 9-10, 2025',
    trackingNumber: 'BLUEDART999888777',
    carrier: 'BlueDart Express',
    
    onDownloadInvoice: (orderId) => console.log('Download invoice:', orderId),
    onTrackOrder: (orderId) => console.log('Track order:', orderId),
    onContactSupport: (orderId) => console.log('Contact support:', orderId),
    
    allowCancel: false,
    allowReturn: false,
  } as OrderDetailsProps,
};

/**
 * Loading state - shown while order data is being fetched.
 */
export const Loading: Story = {
  args: {
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
    loading: true,
  } as OrderDetailsProps,
};
