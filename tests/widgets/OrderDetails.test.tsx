import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { OrderDetails } from '../../src/widgets/OrderDetails/OrderDetails';

describe('OrderDetails', () => {
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
    orderDate: '2024-01-01',
    status: 'delivered' as const,
    shippingAddress: mockShippingAddress,
    items: mockItems,
    subtotal: 100,
    total: 100,
  };

  it('renders order basic info', () => {
    render(<OrderDetails {...defaultProps} />);
    expect(screen.getByText('Order Details')).toBeInTheDocument();
    expect(screen.getByText('Placed on 2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('#ORD-123')).toBeInTheDocument();
    // 'Delivered' appears multiple times (badge, timeline), checking if at least one exists
    expect(screen.getAllByText('Delivered').length).toBeGreaterThan(0);
  });

  it('renders timeline with correct status', () => {
    render(<OrderDetails {...defaultProps} />);
    expect(screen.getByText('Order Placed')).toBeInTheDocument();
    // Use getAllByText for 'Delivered' as it appears in status badge and timeline
    expect(screen.getAllByText('Delivered').length).toBeGreaterThan(0);
  });

  it('renders addresses', () => {
    render(
      <OrderDetails
        {...defaultProps}
        billingAddress={{ ...mockShippingAddress, name: 'Billing Name' }}
      />
    );
    expect(screen.getByText('Shipping Address')).toBeInTheDocument();
    expect(screen.getByText('Billing Address')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Billing Name')).toBeInTheDocument();
  });

  it('renders order summary', () => {
    render(
      <OrderDetails
        {...defaultProps}
        shippingCost={10}
        tax={5}
        total={115}
      />
    );
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    // Amounts might be separated from currency symbol. Check for amount string.
    expect(screen.getAllByText('100')[0]).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getAllByText('10')[0]).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getAllByText('115')[0]).toBeInTheDocument();
  });

  it('renders action buttons based on status', () => {
    const handleDownload = jest.fn();
    const handleWriteReview = jest.fn();

    render(
      <OrderDetails
        {...defaultProps}
        status="delivered"
        onDownloadInvoice={handleDownload}
        onWriteReview={handleWriteReview}
      />
    );

    fireEvent.click(screen.getByText('Download Invoice'));
    expect(handleDownload).toHaveBeenCalledWith('ORD-123');

    fireEvent.click(screen.getByText('Write Review'));
    expect(handleWriteReview).toHaveBeenCalledWith('ORD-123');
  });

  it('shows cancel button for pending orders', () => {
    const handleCancel = jest.fn();
    render(
      <OrderDetails
        {...defaultProps}
        status="pending"
        onCancelOrder={handleCancel}
      />
    );

    const cancelBtn = screen.getByText('Cancel Order');
    fireEvent.click(cancelBtn);
    expect(handleCancel).toHaveBeenCalledWith('ORD-123');
  });

  it('renders tracking info', () => {
    render(
      <OrderDetails
        {...defaultProps}
        status="shipped"
        trackingNumber="TRACK-123"
        carrier="FedEx"
      />
    );
    expect(screen.getByText('Tracking Number')).toBeInTheDocument();
    expect(screen.getByText('TRACK-123')).toBeInTheDocument();
    expect(screen.getByText('Carrier')).toBeInTheDocument();
    expect(screen.getByText('FedEx')).toBeInTheDocument();
  });
});
