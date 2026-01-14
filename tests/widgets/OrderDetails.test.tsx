import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
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

  describe('Rendering', () => {
    it('renders order basic info', () => {
      render(<OrderDetails {...defaultProps} />);
      expect(screen.getByText('Order Details')).toBeInTheDocument();
      expect(screen.getByText('Placed on 2024-01-01')).toBeInTheDocument();
      expect(screen.getByText('#ORD-123')).toBeInTheDocument();
      expect(screen.getAllByText('Delivered').length).toBeGreaterThan(0);
    });

    it('renders timeline with correct status', () => {
      render(<OrderDetails {...defaultProps} />);
      expect(screen.getByText('Order Placed')).toBeInTheDocument();
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

    it('renders customer info if provided', () => {
      render(
        <OrderDetails
          {...defaultProps}
          customerName="Jane Doe"
          customerEmail="jane@example.com"
          customerPhone="555-0123"
        />
      );
      expect(screen.getByText('Customer Information')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
      expect(screen.getByText('555-0123')).toBeInTheDocument();
    });

    it('renders payment details if provided', () => {
      render(
        <OrderDetails
          {...defaultProps}
          paymentMethod="Credit Card"
          paymentStatus="paid"
          transactionId="TXN-123"
        />
      );
      expect(screen.getByText('Payment Method')).toBeInTheDocument();
      expect(screen.getByText('Credit Card')).toBeInTheDocument();
      expect(screen.getByText('Payment Status')).toBeInTheDocument();
      // "Paid" might appear in badge and potentially elsewhere, be specific or allow multiple
      expect(screen.getAllByText('Paid').length).toBeGreaterThan(0);
      expect(screen.getByText('Transaction ID')).toBeInTheDocument();
      expect(screen.getByText('TXN-123')).toBeInTheDocument();
    });

    it('renders order summary', () => {
      render(
        <OrderDetails
          {...defaultProps}
          shippingCost={10}
          tax={5}
          total={115}
          discount={0}
        />
      );
      expect(screen.getByText('Order Summary')).toBeInTheDocument();
      expect(screen.getByText('Subtotal')).toBeInTheDocument();

      // Use getAllByText as numbers like 100 might appear multiple times
      expect(screen.getAllByText(/100/).length).toBeGreaterThan(0);
      expect(screen.getByText('Shipping')).toBeInTheDocument();
      expect(screen.getAllByText(/10/).length).toBeGreaterThan(0);
      expect(screen.getByText('Total')).toBeInTheDocument();
      expect(screen.getAllByText(/115/).length).toBeGreaterThan(0);
    });

    it('renders discount and coupon', () => {
      render(
        <OrderDetails
          {...defaultProps}
          discount={20}
          couponCode="SAVE20"
          total={80}
        />
      );
      expect(screen.getByText('Discount')).toBeInTheDocument();
      // Discount is typically negative
      expect(screen.getByText(/-.*20/)).toBeInTheDocument();
      expect(screen.getByText('Coupon Applied')).toBeInTheDocument();
      expect(screen.getByText('SAVE20')).toBeInTheDocument();
    });

    it('renders tracking info', () => {
      render(
        <OrderDetails
          {...defaultProps}
          status="shipped"
          trackingNumber="TRACK-123"
          trackingUrl="http://track.com"
          carrier="FedEx"
        />
      );
      expect(screen.getByText('Shipping Information')).toBeInTheDocument();
      expect(screen.getByText('Tracking Number')).toBeInTheDocument();
      expect(screen.getByText('TRACK-123')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'TRACK-123' })).toHaveAttribute('href', 'http://track.com');
      expect(screen.getByText('Carrier')).toBeInTheDocument();
      expect(screen.getByText('FedEx')).toBeInTheDocument();
    });

    it('renders skeleton loading state', () => {
      const { container } = render(<OrderDetails {...defaultProps} loading />);
      expect(container.querySelector('.vtx-skeleton-theme')).toBeInTheDocument();
    });
  });

  describe('Actions', () => {
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

    it('shows return button for delivered orders', () => {
      const handleReturn = jest.fn();
      render(
        <OrderDetails
          {...defaultProps}
          status="delivered"
          onReturnOrder={handleReturn}
        />
      );

      const returnBtn = screen.getByText('Return Items');
      fireEvent.click(returnBtn);
      expect(handleReturn).toHaveBeenCalledWith('ORD-123');
    });

    it('shows reorder button', () => {
      const handleReorder = jest.fn();
      render(
        <OrderDetails
          {...defaultProps}
          onReorder={handleReorder}
        />
      );

      const reorderBtn = screen.getByText('Reorder');
      fireEvent.click(reorderBtn);
      expect(handleReorder).toHaveBeenCalledWith('ORD-123');
    });

    it('shows contact support button', () => {
      const handleContact = jest.fn();
      render(
        <OrderDetails
          {...defaultProps}
          onContactSupport={handleContact}
        />
      );

      const contactBtn = screen.getByText('Contact Support');
      fireEvent.click(contactBtn);
      expect(handleContact).toHaveBeenCalledWith('ORD-123');
    });

    it('shows track order button if tracking number exists', () => {
      const handleTrack = jest.fn();
      render(
        <OrderDetails
          {...defaultProps}
          status="shipped"
          trackingNumber="123"
          onTrackOrder={handleTrack}
        />
      );

      const trackBtn = screen.getByText('Track Package');
      fireEvent.click(trackBtn);
      expect(handleTrack).toHaveBeenCalledWith('ORD-123');
    });
  });
});
