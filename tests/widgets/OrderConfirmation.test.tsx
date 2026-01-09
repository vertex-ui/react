import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { OrderConfirmation } from '../../src/widgets/OrderConfirmation/OrderConfirmation';

describe('OrderConfirmation', () => {
  const mockShippingAddress = {
    name: 'John Doe',
    addressLine1: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '123-456-7890'
  };

  const mockItems = [
    { id: '1', name: 'Product 1', quantity: 2, price: 50, image: 'img1.jpg' }
  ];

  const defaultProps = {
    orderId: 'ORD-123',
    shippingAddress: mockShippingAddress,
    items: mockItems,
    subtotal: 100,
    total: 100,
  };

  it('renders confirmation header and order info', () => {
    render(<OrderConfirmation {...defaultProps} />);
    expect(screen.getByText('Order Confirmed!')).toBeInTheDocument();
    expect(screen.getByText('Order #ORD-123')).toBeInTheDocument();
    expect(screen.getByText('Thank you for your order. We\'ll send you a confirmation email shortly.')).toBeInTheDocument();
  });

  it('renders custom header text', () => {
    render(
      <OrderConfirmation
        {...defaultProps}
        headerText="Success!"
        headerSubtitle="Done."
      />
    );
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByText('Done.')).toBeInTheDocument();
  });

  it('renders shipping address', () => {
    render(<OrderConfirmation {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('New York, NY 10001')).toBeInTheDocument();
  });

  it('renders order items', () => {
    render(<OrderConfirmation {...defaultProps} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Qty: 2')).toBeInTheDocument();
    // Use getAllByText because amount might appear in multiple places (item total and summary subtotal/total)
    // or specific query if possible. Here we verify it exists.
    expect(screen.getAllByText('₹100')[0]).toBeInTheDocument();
  });

  it('renders payment summary', () => {
    render(
      <OrderConfirmation
        {...defaultProps}
        shippingCost={10}
        tax={5}
        discount={2}
        total={113}
      />
    );
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    // Subtotal is 100, might appear multiple times if item total matches subtotal
    expect(screen.getAllByText('₹100')[0]).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('₹10')).toBeInTheDocument();
    expect(screen.getByText('Tax')).toBeInTheDocument();
    expect(screen.getByText('₹5')).toBeInTheDocument();
    expect(screen.getByText('Discount')).toBeInTheDocument();
    expect(screen.getByText('-₹2')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('₹113')).toBeInTheDocument();
  });

  it('renders customer info if provided', () => {
    render(
      <OrderConfirmation
        {...defaultProps}
        customerEmail="john@example.com"
        customerPhone="555-0199"
      />
    );
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('555-0199')).toBeInTheDocument();
  });

  it('handles action buttons', () => {
    const handleDownload = jest.fn();
    const handleContinue = jest.fn();
    const handleTrack = jest.fn();

    render(
      <OrderConfirmation
        {...defaultProps}
        onDownloadInvoice={handleDownload}
        onContinueShopping={handleContinue}
        onTrackOrder={handleTrack}
        trackingNumber="TRACK-123" // required for track button
      />
    );

    fireEvent.click(screen.getByText('Download Invoice'));
    expect(handleDownload).toHaveBeenCalledWith('ORD-123');

    fireEvent.click(screen.getByText('Continue Shopping'));
    expect(handleContinue).toHaveBeenCalled();

    fireEvent.click(screen.getByText('Track Order'));
    expect(handleTrack).toHaveBeenCalledWith('ORD-123');
  });

  it('renders billing address if provided', () => {
    const mockBilling = { ...mockShippingAddress, name: 'Billing Name' };
    render(<OrderConfirmation {...defaultProps} billingAddress={mockBilling} />);
    expect(screen.getByText('Billing Name')).toBeInTheDocument();
  });
});
