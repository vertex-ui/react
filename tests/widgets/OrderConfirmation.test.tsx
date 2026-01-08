import React from 'react';
import { render, screen } from '../test-utils';
import { OrderConfirmation } from '../../src/widgets/OrderConfirmation/OrderConfirmation';

describe('OrderConfirmation', () => {
  const mockProps = {
    orderId: '12345',
    status: 'confirmed' as const,
    shippingAddress: {
      name: 'Jane Doe',
      addressLine1: '456 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
    },
    items: [
      {
        id: '1',
        name: 'Confirmed Product',
        quantity: 2,
        price: 50,
      },
    ],
    subtotal: 100,
    total: 100,
  };

  it('renders order confirmation correctly', () => {
    render(<OrderConfirmation {...mockProps} />);
    expect(screen.getByText('Order Confirmed!')).toBeInTheDocument();
    const orderIdElements = screen.getAllByText(/12345/);
    expect(orderIdElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Confirmed Product')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});
