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

  describe('Rendering', () => {
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
      expect(screen.getByText(/New York, NY 10001/)).toBeInTheDocument();
    });

    it('renders order items', () => {
      render(<OrderConfirmation {...defaultProps} />);
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Qty: 2')).toBeInTheDocument();
      // Check for price presence, might be formatted with currency
      expect(screen.getAllByText(/100/).length).toBeGreaterThan(0);
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
      expect(screen.getByText('Shipping')).toBeInTheDocument();
      expect(screen.getAllByText(/10/).length).toBeGreaterThan(0);
      expect(screen.getByText('Tax')).toBeInTheDocument();
      expect(screen.getAllByText(/5/).length).toBeGreaterThan(0);
      expect(screen.getByText('Discount')).toBeInTheDocument();
      expect(screen.getAllByText(/2/).length).toBeGreaterThan(0);
      expect(screen.getByText('Total')).toBeInTheDocument();
      expect(screen.getAllByText(/113/).length).toBeGreaterThan(0);
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

    it('renders billing address if provided', () => {
      const mockBilling = { ...mockShippingAddress, name: 'Billing Name' };
      render(<OrderConfirmation {...defaultProps} billingAddress={mockBilling} />);
      expect(screen.getByText('Billing Name')).toBeInTheDocument();
    });

    it('renders tracking info', () => {
      render(
        <OrderConfirmation
          {...defaultProps}
          trackingNumber="TRACK-123"
          estimatedDelivery="Tomorrow"
        />
      );
      expect(screen.getByText('Tracking Number')).toBeInTheDocument();
      expect(screen.getByText('TRACK-123')).toBeInTheDocument();
      expect(screen.getByText('Estimated Delivery')).toBeInTheDocument();
      expect(screen.getByText('Tomorrow')).toBeInTheDocument();
    });

    it('renders skeleton loading state', () => {
      const { container } = render(<OrderConfirmation {...defaultProps} loading />);
      expect(container.querySelector('.vtx-skeleton-theme')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('handles action buttons', () => {
      const handleDownload = jest.fn();
      const handleContinue = jest.fn();
      const handleTrack = jest.fn();
      const handleViewDetails = jest.fn();
      const handleContact = jest.fn();
      const handleShare = jest.fn();

      render(
        <OrderConfirmation
          {...defaultProps}
          onDownloadInvoice={handleDownload}
          onContinueShopping={handleContinue}
          onTrackOrder={handleTrack}
          onViewDetails={handleViewDetails}
          onContactSupport={handleContact}
          onShareOrder={handleShare}
          trackingNumber="TRACK-123"
        />
      );

      fireEvent.click(screen.getByText('Download Invoice'));
      expect(handleDownload).toHaveBeenCalledWith('ORD-123');

      fireEvent.click(screen.getByText('Continue Shopping'));
      expect(handleContinue).toHaveBeenCalled();

      fireEvent.click(screen.getByText('Track Order'));
      expect(handleTrack).toHaveBeenCalledWith('ORD-123');

      fireEvent.click(screen.getByText('View Details'));
      expect(handleViewDetails).toHaveBeenCalledWith('ORD-123');

      fireEvent.click(screen.getByText('Contact Support'));
      expect(handleContact).toHaveBeenCalledWith('ORD-123');

      fireEvent.click(screen.getByText('Share'));
      expect(handleShare).toHaveBeenCalledWith('ORD-123');
    });

    it('hides specific buttons when props set', () => {
      render(
        <OrderConfirmation
          {...defaultProps}
          onContinueShopping={jest.fn()}
          hideContinueShopping
        />
      );
      expect(screen.queryByText('Continue Shopping')).not.toBeInTheDocument();
    });
  });
});
