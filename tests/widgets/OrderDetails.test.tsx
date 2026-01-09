import React from 'react';
import { render, screen } from '../test-utils';
import { OrderDetails } from '../../src/widgets/OrderDetails/OrderDetails';

describe('OrderDetails', () => {
  const mockProps = {
    orderId: '12345',
    orderDate: '2023-01-01',
    status: 'delivered' as const,
    shippingAddress: {
      name: 'John Doe',
      addressLine1: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    items: [
      {
        id: '1',
        name: 'Test Product',
        quantity: 1,
        price: 100,
      },
    ],
    subtotal: 100,
    total: 100,
  };

  it('renders order details correctly', () => {
    render(<OrderDetails {...mockProps} />);
    expect(screen.getByText('Order Details')).toBeInTheDocument();
    expect(screen.getByText(/12345/)).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders status badge correctly', () => {
    render(<OrderDetails {...mockProps} status="pending" />);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});
