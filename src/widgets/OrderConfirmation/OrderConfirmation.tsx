import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './OrderConfirmation.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import InfoListCard from '../InfoListCard/InfoListCard';
import { InfoListItem } from '../InfoListCard/InfoListCard';
import { SkeletonTheme } from '../../components/Skeleton';
import { CheckCircleIcon, MapPinIcon, DownloadIcon, 
    ShoppingBagIcon,
    ShareIcon,
    EyeIcon,
    CreditCardIcon,
    MessageIcon,
    PackageIcon,
    PhoneIcon
  } from '../../icons/IconComponents';

export interface OrderConfirmationItem {
  id: string;
  name: string;
  image?: string;
  quantity: number;
  price: number;
  variant?: string;
}

export interface OrderConfirmationAddress {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
}

/**
 * OrderConfirmation - Complete order confirmation view
 * 
 * Displays comprehensive order confirmation with items, pricing, addresses, and action buttons
 * 
 * @example
 * ```tsx
 * <OrderConfirmation
 *   orderId="12345"
 *   status="confirmed"
 *   items={orderItems}
 *   shippingAddress={address}
 *   total={199.99}
 * />
 * ```
 */
export interface OrderConfirmationProps extends React.HTMLAttributes<HTMLDivElement> {
  orderId: string;
  orderNumber?: string;
  orderDate?: string;
  status?: 'pending' | 'processing' | 'confirmed' | 'delivered' | 'cancelled';
  statusText?: string;

  // Header Customization
  headerText?: string;
  headerSubtitle?: string;

  // Customer Info
  customerEmail?: string;
  customerPhone?: string;

  // Addresses
  shippingAddress: OrderConfirmationAddress;
  billingAddress?: OrderConfirmationAddress;

  // Order Items
  items: OrderConfirmationItem[];

  // Pricing
  subtotal: number;
  shippingCost?: number;
  tax?: number;
  discount?: number;
  total: number;
  currency?: string;

  // Payment
  paymentMethod?: string;
  transactionId?: string;

  // Delivery
  estimatedDelivery?: string;
  trackingNumber?: string;

  // Actions
  onDownloadInvoice?: (orderId: string) => void;
  onContinueShopping?: () => void;
  onTrackOrder?: (orderId: string) => void;
  onViewDetails?: (orderId: string) => void;
  onContactSupport?: (orderId: string) => void;
  onShareOrder?: (orderId: string) => void;

  // Action Button Labels
  downloadInvoiceText?: string;
  continueShoppingText?: string;
  trackOrderText?: string;
  viewDetailsText?: string;
  contactSupportText?: string;
  shareOrderText?: string;

  // Options
  showActions?: boolean;
  hideDownloadInvoice?: boolean;
  hideContinueShopping?: boolean;
  hideTrackOrder?: boolean;
  hideContactSupport?: boolean;

  /**
   * If true, shows skeleton loading state
   * @default false
   */
  loading?: boolean;

  className?: string;
  style?: React.CSSProperties;
}

const OrderConfirmation = React.forwardRef<HTMLDivElement, OrderConfirmationProps>(
  (
    {
        orderId,
      orderNumber,
      orderDate,
      status = 'confirmed',
      statusText,
      headerText = 'Order Confirmed!',
      headerSubtitle = "Thank you for your order. We'll send you a confirmation email shortly.",
      customerEmail,
      customerPhone,
      shippingAddress,
      billingAddress,
      items,
      subtotal,
      shippingCost = 0,
      tax = 0,
      discount = 0,
      total,
      currency = '₹',
      paymentMethod,
      transactionId,
      estimatedDelivery,
      trackingNumber,
      onDownloadInvoice,
      onContinueShopping,
      onTrackOrder,
      onViewDetails,
      onContactSupport,
      onShareOrder,
      downloadInvoiceText = 'Download Invoice',
      continueShoppingText = 'Continue Shopping',
      trackOrderText = 'Track Order',
      viewDetailsText = 'View Details',
      contactSupportText = 'Contact Support',
      shareOrderText = 'Share',
      showActions = true,
      hideDownloadInvoice = false,
      hideContinueShopping = false,
      hideTrackOrder = false,
      hideContactSupport = false,
      loading = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
  // Get status badge variant
  const getStatusVariant = () => {
    switch (status) {
      case 'confirmed':
      case 'delivered':
        return 'success';
      case 'cancelled':
        return 'error';
      case 'processing':
        return 'info';
      case 'pending':
        return 'warning';
      default:
        return 'neutral';
    }
  };

  // Get status text
  const getStatusText = () => {
    if (statusText) return statusText;
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // Format address
  const formatAddress = (address: OrderConfirmationAddress) => {
    return (
      <div className="orderconfirmation-address">
        <div className="orderconfirmation-address-name">{address.name}</div>
        <div>{address.addressLine1}</div>
        {address.addressLine2 && <div>{address.addressLine2}</div>}
        <div>
          {address.city}, {address.state} {address.zipCode}
        </div>
        {address.phone && <div>Phone: {address.phone}</div>}
      </div>
    );
  };

  // Order Details Items
  const orderDetailsItems: InfoListItem[] = [
    { label: 'Order Number', value: orderNumber || `#${orderId}`, valueClass: 'value-bold' },
    orderDate ? { label: 'Order Date', value: orderDate } : { label: '', value: '', hidden: true },
    { label: 'Status', value: <Badge variant={getStatusVariant()}>{getStatusText()}</Badge> },
    estimatedDelivery ? { label: 'Estimated Delivery', value: estimatedDelivery, valueClass: 'value-primary' } : { label: '', value: '', hidden: true },
    trackingNumber ? { label: 'Tracking Number', value: trackingNumber, valueClass: 'value-bold' } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden);

  // Customer Details Items
  const customerDetailsItems: InfoListItem[] = [
    customerEmail ? { label: 'Email', value: customerEmail } : { label: '', value: '', hidden: true },
    customerPhone ? { label: 'Phone', value: customerPhone } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden);

  // Payment Details Items
  const paymentDetailsItems: InfoListItem[] = [
    paymentMethod ? { label: 'Payment Method', value: paymentMethod } : { label: '', value: '', hidden: true },
    transactionId ? { label: 'Transaction ID', value: transactionId, valueClass: 'value-muted' } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden);

  // Render skeleton loading state
  if (loading) {
    return <SkeletonTheme theme="order-confirmation" />;
  }

  return (
    <div className={`orderconfirmation ${className}`} style={style} ref={ref} {...props}>
      <Flex direction="column" gap={20}>
        {/* Success Header - Enhanced Design */}
        <Card 
          variant="filled" 
          className="orderconfirmation-header"
        >
          <Flex direction="column" align="center" gap={12}>
            <span className="orderconfirmation-success-icon">
              <CheckCircleIcon size={32} />
            </span>
            <Text variant="h4" weight="bold" align="center" noMargin>
              {headerText}
            </Text>
            <Text variant="body1" align="center" noMargin className="orderconfirmation-subtitle">
              {headerSubtitle}
            </Text>
            <Badge 
              variant="success" 
              style={{ padding: '8px 20px', borderRadius: '20px', fontWeight: 600, marginTop: '8px' }}
            >
              Order {orderNumber || `#${orderId}`}
            </Badge>
          </Flex>
        </Card>

        {/* Order Details */}
        <InfoListCard
          heading="Order Details"
          items={orderDetailsItems}
          variant="outlined"
          showDividers
        />

        {/* Customer Details */}
        {customerDetailsItems.length > 0 && (
          <InfoListCard
            heading="Customer Information"
            items={customerDetailsItems}
            variant="outlined"
            showDividers
          />
        )}

        {/* Order Items */}
        <Card variant="outlined" className="orderconfirmation-items-card">
          <Text variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Order Items ({items.length})
          </Text>

          <Flex direction="column" gap={12}>
            {items.map((item, index) => (
              <div key={item.id}>
                <Flex direction="row" gap={12} className="orderconfirmation-item">
                  {/* Product Image */}
                  {item.image && (
                    <div className="orderconfirmation-item-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="orderconfirmation-item-image"
                      />
                    </div>
                  )}

                  {/* Product Details */}
                  <Flex direction="column" gap={4} style={{ flex: 1, minWidth: 0 }}>
                    <Text variant="body2" weight="medium" noMargin className="orderconfirmation-item-name">
                      {item.name}
                    </Text>
                    {item.variant && (
                      <Text variant="caption" noMargin className="orderconfirmation-item-variant">
                        {item.variant}
                      </Text>
                    )}
                    <Text variant="caption" noMargin>
                      Qty: {item.quantity}
                    </Text>
                  </Flex>

                  {/* Price */}
                  <Flex direction="column" align="end" gap={2}>
                    <Text variant="body2" weight="semibold" noMargin>
                      {currency}{(item.price * item.quantity).toLocaleString()}
                    </Text>
                    <Text variant="caption" noMargin className="orderconfirmation-item-unit-price">
                      {currency}{item.price.toLocaleString()} each
                    </Text>
                  </Flex>
                </Flex>

                {/* Divider between items */}
                {index < items.length - 1 && <Divider style={{ margin: '12px 0' }} />}
              </div>
            ))}
          </Flex>
        </Card>

        {/* Price Summary */}
        <Card variant="outlined" className="orderconfirmation-summary-card">
          <Text variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Payment Summary
          </Text>

          <Flex direction="column" gap={8}>
            <Flex justify="between" align="center">
              <Text variant="body2" noMargin>Subtotal</Text>
              <Text variant="body2" noMargin>{currency}{subtotal.toLocaleString()}</Text>
            </Flex>

            {shippingCost > 0 && (
              <Flex justify="between" align="center">
                <Text variant="body2" noMargin>Shipping</Text>
                <Text variant="body2" noMargin>{currency}{shippingCost.toLocaleString()}</Text>
              </Flex>
            )}

            {tax > 0 && (
              <Flex justify="between" align="center">
                <Text variant="body2" noMargin>Tax</Text>
                <Text variant="body2" noMargin>{currency}{tax.toLocaleString()}</Text>
              </Flex>
            )}

            {discount > 0 && (
              <Flex justify="between" align="center">
                <Text variant="body2" noMargin className="orderconfirmation-discount">Discount</Text>
                <Text variant="body2" noMargin className="orderconfirmation-discount">
                  -{currency}{discount.toLocaleString()}
                </Text>
              </Flex>
            )}

            <Divider style={{ margin: '8px 0' }} />

            <Flex justify="between" align="center">
              <Text variant="body1" weight="bold" noMargin>Total</Text>
              <Text variant="body1" weight="bold" noMargin className="orderconfirmation-total">
                {currency}{total.toLocaleString()}
              </Text>
            </Flex>
          </Flex>

          {/* Payment Method */}
          {paymentDetailsItems.length > 0 && (
            <>
              <Divider style={{ margin: '12px 0' }} />
              <Flex direction="column" gap={8}>
                {paymentDetailsItems.map((item, index) => (
                  <Flex key={index} justify="between" align="center">
                    <Text variant="body2" noMargin>{item.label}</Text>
                    <Text variant="body2" noMargin className={item.valueClass}>
                      {item.value}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}
        </Card>

        {/* Shipping Address with Icon */}
        <Flex direction="row" gap={16} wrap="wrap">
          <Card variant="outlined" className="orderconfirmation-address-card" style={{ flex: '1 1 280px' }}>
            <Flex direction="column" gap={12}>
              <Flex align="center" gap={8}>
                <MapPinIcon size={20} />
                <Text variant="h6" weight="semibold" noMargin>
                  Shipping Address
                </Text>
              </Flex>
              <Divider />
              {formatAddress(shippingAddress)}
            </Flex>
          </Card>

          {/* Billing Address */}
          {billingAddress && (
            <Card variant="outlined" className="orderconfirmation-address-card" style={{ flex: '1 1 280px' }}>
              <Flex direction="column" gap={12}>
                <Flex align="center" gap={8}>
                  <CreditCardIcon size={20} />
                  <Text variant="h6" weight="semibold" noMargin>
                    Billing Address
                  </Text>
                </Flex>
                <Divider />
                {formatAddress(billingAddress)}
              </Flex>
            </Card>
          )}
        </Flex>

        {/* Action Buttons - Improved Design */}
        {showActions && (
          <Card variant="outlined" className="orderconfirmation-actions-card">
            <Flex direction="column" gap={16}>
              <Text variant="h6" weight="semibold" noMargin>
                What's Next?
              </Text>
              <Divider />
              
              {/* Primary Actions */}
              <Flex direction="row" gap={12} wrap="wrap">
                {!hideDownloadInvoice && onDownloadInvoice && (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onDownloadInvoice(orderId)}
                    leftIcon={<DownloadIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '170px' }}
                  >
                    {downloadInvoiceText}
                  </Button>
                )}
                {!hideTrackOrder && onTrackOrder && trackingNumber && (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onTrackOrder(orderId)}
                    leftIcon={<PackageIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '170px' }}
                  >
                    {trackOrderText}
                  </Button>
                )}
              </Flex>

              {/* Secondary Actions */}
              <Flex direction="row" gap={12} wrap="wrap">
                {!hideContinueShopping && onContinueShopping && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={onContinueShopping}
                    leftIcon={<ShoppingBagIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '170px' }}
                  >
                    {continueShoppingText}
                  </Button>
                )}
                {onViewDetails && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onViewDetails(orderId)}
                    leftIcon={<EyeIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '170px' }}
                  >
                    {viewDetailsText}
                  </Button>
                )}
              </Flex>

              {/* Tertiary Actions */}
              <Flex direction="row" gap={12} wrap="wrap" justify="center">
                {!hideContactSupport && onContactSupport && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => onContactSupport(orderId)}
                    leftIcon={<MessageIcon size={18} />}
                  >
                    {contactSupportText}
                  </Button>
                )}
                {onShareOrder && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => onShareOrder(orderId)}
                    leftIcon={<ShareIcon size={18} />}
                  >
                    {shareOrderText}
                  </Button>
                )}
              </Flex>
            </Flex>
          </Card>
        )}

        {/* Help Text - Enhanced */}
        <Card 
          variant="filled" 
          className="orderconfirmation-help-card"
          style={{ 
            background: 'var(--vtx-color-primary-50)', 
            border: '1px solid var(--vtx-color-primary-100)' 
          }}
        >
          <Flex direction="column" gap={12} align="center">
            <Flex align="center" gap={8}>
              <MessageIcon size={20} />
              <Text variant="h6" weight="semibold" noMargin>
                Need Help?
              </Text>
            </Flex>
            <Text variant="body2" align="center" noMargin style={{ color: 'var(--vtx-color-text-secondary)' }}>
              Our support team is available 24/7 to assist you with your order
            </Text>
            <Flex direction="row" gap={16} wrap="wrap" justify="center" style={{ marginTop: '4px' }}>
              <Flex align="center" gap={6}>
                <MessageIcon size={16} />
                <Text variant="body2" weight="medium" noMargin>
                  support@example.com
                </Text>
              </Flex>
              <Flex align="center" gap={6}>
                <PhoneIcon size={16} />
                <Text variant="body2" weight="medium" noMargin>
                  1-800-123-4567
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </div>
  );
  }
);

OrderConfirmation.displayName = 'OrderConfirmation';

const OrderConfirmationWithParsedClasses = withParsedClasses(OrderConfirmation);

export default OrderConfirmationWithParsedClasses as React.FC<
  OrderConfirmationProps & React.RefAttributes<HTMLDivElement>
>;
export { OrderConfirmationWithParsedClasses as OrderConfirmation };
