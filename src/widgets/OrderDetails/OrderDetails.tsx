import React, { useMemo, useCallback } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './OrderDetails.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { Divider } from '../../components/Divider';
import Timeline from '../../components/Timeline/Timeline';
import InfoListCard from '../InfoListCard/InfoListCard';
import { InfoListItem } from '../InfoListCard/InfoListCard';
import { SkeletonTheme } from '../../components/Skeleton';
import { MapPinIcon, DownloadIcon, 
    CreditCardIcon,
    MessageIcon,
    PackageIcon,
    PhoneIcon,
    TruckIcon,
    CloseIcon,
    ReturnIcon,
    RefreshIcon,
    StarIcon
  } from '../../icons/IconComponents';

export interface OrderDetailsItem {
  id: string;
  name: string;
  image?: string;
  quantity: number;
  price: number;
  variant?: string;
}

export interface OrderDetailsAddress {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
}

/**
 * OrderDetails - Comprehensive order details view
 * 
 * Displays complete order information with items, pricing, tracking, and management actions
 * 
 * @example
 * ```tsx
 * <OrderDetails
 *   orderId="12345"
 *   orderDate="Dec 19, 2023"
 *   status="delivered"
 *   items={orderItems}
 *   shippingAddress={address}
 *   total={199.99}
 * />
 * ```
 */
export interface OrderDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  orderId: string;
  orderNumber?: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  statusText?: string;

  // Customer Info
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;

  // Addresses
  shippingAddress: OrderDetailsAddress;
  billingAddress?: OrderDetailsAddress;

  // Order Items
  items: OrderDetailsItem[];

  // Pricing
  subtotal: number;
  shippingCost?: number;
  tax?: number;
  discount?: number;
  total: number;
  currency?: string;
  couponCode?: string; // Coupon applied

  // Payment
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'paid' | 'failed' | 'refunded';
  transactionId?: string;

  // Delivery
  estimatedDelivery?: string;
  deliveredDate?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  carrier?: string;

  // Order Actions
  onDownloadInvoice?: (orderId: string) => void;
  onTrackOrder?: (orderId: string) => void;
  onCancelOrder?: (orderId: string) => void;
  onReturnOrder?: (orderId: string) => void;
  onReorder?: (orderId: string) => void;
  onContactSupport?: (orderId: string) => void;
  onWriteReview?: (orderId: string) => void;

  // Action Button Labels
  downloadInvoiceText?: string;
  trackOrderText?: string;
  cancelOrderText?: string;
  returnOrderText?: string;
  reorderText?: string;
  contactSupportText?: string;
  writeReviewText?: string;

  // Options
  showActions?: boolean;
  allowCancel?: boolean;
  allowReturn?: boolean;
  allowReorder?: boolean;

  /**
   * If true, shows skeleton loading state
   * @default false
   */
  loading?: boolean;

  className?: string;
  style?: React.CSSProperties;
}

// Helpers
const getStatusVariant = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'success';
    case 'cancelled':
    case 'returned':
      return 'error';
    case 'shipped':
    case 'processing':
      return 'info';
    case 'pending':
      return 'warning';
    default:
      return 'neutral';
  }
};

const getPaymentStatusVariant = (paymentStatus: string) => {
  switch (paymentStatus) {
    case 'paid':
      return 'success';
    case 'failed':
      return 'error';
    case 'pending':
      return 'warning';
    case 'refunded':
      return 'info';
    default:
      return 'neutral';
  }
};

const getTimelineStep = (status: string) => {
  switch (status) {
    case 'pending':
      return 0;
    case 'processing':
    case 'confirmed':
      return 1;
    case 'shipped':
      return 2;
    case 'delivered':
      return 3;
    case 'cancelled':
    case 'returned':
      return 0;
    default:
      return 0;
  }
};

const TIMELINE_STEPS = ['Order Placed', 'Packed', 'Shipped', 'Delivered'];

// Memoized Address Component
const AddressDisplay = React.memo(({ address }: { address: OrderDetailsAddress }) => (
  <div className="orderdetails-address">
    <div className="orderdetails-address-name">{address.name}</div>
    <div>{address.addressLine1}</div>
    {address.addressLine2 && <div>{address.addressLine2}</div>}
    <div>
      {address.city}, {address.state} {address.zipCode}
    </div>
    {address.phone && <div>Phone: {address.phone}</div>}
  </div>
));
AddressDisplay.displayName = 'AddressDisplay';

const OrderDetails = React.forwardRef<HTMLDivElement, OrderDetailsProps>(
  (
    {
      orderId,
      orderNumber,
      orderDate,
      status,
      statusText,
      customerName,
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
      couponCode,
      paymentMethod,
      paymentStatus,
      transactionId,
      estimatedDelivery,
      deliveredDate,
      trackingNumber,
      trackingUrl,
      carrier,
      onDownloadInvoice,
      onTrackOrder,
      onCancelOrder,
      onReturnOrder,
      onReorder,
      onContactSupport,
      onWriteReview,
      downloadInvoiceText = 'Download Invoice',
      trackOrderText = 'Track Package',
      cancelOrderText = 'Cancel Order',
      returnOrderText = 'Return Items',
      reorderText = 'Reorder',
      contactSupportText = 'Contact Support',
      writeReviewText = 'Write Review',
      showActions = true,
      allowCancel = true,
      allowReturn = true,
      allowReorder = true,
      loading = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {

  // Get status text
  const statusTextDisplay = useMemo(() => {
    if (statusText) return statusText;
    return status.charAt(0).toUpperCase() + status.slice(1);
  }, [status, statusText]);

  // Check if order can be cancelled
  const canCancel = allowCancel && (status === 'pending' || status === 'processing');
  
  // Check if order can be returned
  const canReturn = allowReturn && status === 'delivered';
  
  // Check if tracking is available
  const hasTracking = trackingNumber && (status === 'shipped' || status === 'delivered');

  const timelineStep = useMemo(() => getTimelineStep(status), [status]);

  // Customer Details Items
  const customerDetailsItems: InfoListItem[] = useMemo(() => [
    customerName ? { label: 'Name', value: customerName } : { label: '', value: '', hidden: true },
    customerEmail ? { label: 'Email', value: customerEmail } : { label: '', value: '', hidden: true },
    customerPhone ? { label: 'Phone', value: customerPhone } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden), [customerName, customerEmail, customerPhone]);

  // Payment Details Items
  const paymentDetailsItems: InfoListItem[] = useMemo(() => [
    paymentMethod ? { label: 'Payment Method', value: paymentMethod } : { label: '', value: '', hidden: true },
    paymentStatus ? { 
      label: 'Payment Status', 
      value: <Badge variant={getPaymentStatusVariant(paymentStatus)}>{paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}</Badge>
    } : { label: '', value: '', hidden: true },
    transactionId ? { label: 'Transaction ID', value: transactionId, valueClass: 'value-muted' } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden), [paymentMethod, paymentStatus, transactionId]);

  // Handlers
  const handleDownloadInvoice = useCallback(() => onDownloadInvoice?.(orderId), [onDownloadInvoice, orderId]);
  const handleTrackOrder = useCallback(() => onTrackOrder?.(orderId), [onTrackOrder, orderId]);
  const handleCancelOrder = useCallback(() => onCancelOrder?.(orderId), [onCancelOrder, orderId]);
  const handleReturnOrder = useCallback(() => onReturnOrder?.(orderId), [onReturnOrder, orderId]);
  const handleReorder = useCallback(() => onReorder?.(orderId), [onReorder, orderId]);
  const handleContactSupport = useCallback(() => onContactSupport?.(orderId), [onContactSupport, orderId]);
  const handleWriteReview = useCallback(() => onWriteReview?.(orderId), [onWriteReview, orderId]);

  // Render skeleton loading state
  if (loading) {
    return <SkeletonTheme theme="order-details" />;
  }

  return (
    <div className={`orderdetails ${className}`} style={style} ref={ref} {...props}>
      <Flex direction="column" gap={24}>
        {/* Simple Header matching the image */}
        <Flex direction="column" gap={8}>
          <Text variant="h3" weight="bold" noMargin>
            Order Details
          </Text>
          <Text variant="body1" noMargin className="orderdetails-date">
            Placed on {orderDate}
          </Text>
        </Flex>

        {/* Order Status Timeline using Timeline component */}
        <Card variant="outlined" className="orderdetails-timeline-card">
          <Timeline
            steps={TIMELINE_STEPS}
            currentStep={timelineStep}
            orientation="horizontal"
            variant="circle"
            showCheckmarks={true}
            color="success"
            size="md"
          />
        </Card>

        {/* Order Info Cards */}
        <Flex direction="row" gap={16} wrap="wrap">
          {/* Order Number Card */}
          <Card variant="outlined" className="orderdetails-info-card">
            <Flex direction="column" gap={8}>
              <Text variant="caption" noMargin className="orderdetails-info-label">
                Order Number
              </Text>
              <Text variant="h6" weight="bold" noMargin>
                {orderNumber || `#${orderId}`}
              </Text>
            </Flex>
          </Card>

          {/* Status Card */}
          <Card variant="outlined" className="orderdetails-info-card">
            <Flex direction="column" gap={8}>
              <Text variant="caption" noMargin className="orderdetails-info-label">
                Status
              </Text>
              <Badge variant={getStatusVariant(status)} className="orderdetails-info-badge">
                {statusTextDisplay}
              </Badge>
            </Flex>
          </Card>

          {/* Delivery Date Card */}
          {(deliveredDate || estimatedDelivery) && (
            <Card variant="outlined" className="orderdetails-info-card">
              <Flex direction="column" gap={8}>
                <Text variant="caption" noMargin className="orderdetails-info-label">
                  {deliveredDate ? 'Delivered On' : 'Estimated Delivery'}
                </Text>
                <Text
                  variant="h6"
                  weight="bold"
                  noMargin
                  className={deliveredDate ? 'orderdetails-delivery-date' : undefined}
                >
                  {deliveredDate || estimatedDelivery}
                </Text>
              </Flex>
            </Card>
          )}

          {/* Payment Status Card */}
          {paymentStatus && (
            <Card variant="outlined" className="orderdetails-info-card">
              <Flex direction="column" gap={8}>
                <Text variant="caption" noMargin className="orderdetails-info-label">
                  Payment
                </Text>
                <Badge variant={getPaymentStatusVariant(paymentStatus)} className="orderdetails-info-badge">
                  {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
                </Badge>
              </Flex>
            </Card>
          )}
        </Flex>

        {/* Quick Actions */}
        {showActions && (onDownloadInvoice || (hasTracking && onTrackOrder)) && (
          <Flex direction="row" gap={12} wrap="wrap">
            {onDownloadInvoice && (
              <Button
                variant="outline"
                size="md"
                onClick={handleDownloadInvoice}
                leftIcon={<DownloadIcon size={18} />}
                className="orderdetails-action-btn-primary"
              >
                {downloadInvoiceText}
              </Button>
            )}
            {hasTracking && onTrackOrder && (
              <Button
                variant="primary"
                size="md"
                onClick={handleTrackOrder}
                leftIcon={<PackageIcon size={18} />}
                className="orderdetails-action-btn-primary"
              >
                {trackOrderText}
              </Button>
            )}
          </Flex>
        )}

        {/* Shipping Tracking Info */}
        {(trackingNumber || carrier) && (
          <Card variant="outlined">
            <Flex direction="column" gap={12}>
              <Flex align="center" gap={8}>
                <TruckIcon size={20} />
                <Text variant="h6" weight="semibold" noMargin>
                  Shipping Information
                </Text>
              </Flex>
              <Divider />
              <Flex direction="column" gap={12}>
                {trackingNumber && (
                  <Flex direction="column" gap={4}>
                    <Text variant="caption" noMargin className="orderdetails-info-label">
                      Tracking Number
                    </Text>
                    {trackingUrl ? (
                      <a 
                        href={trackingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="orderdetails-tracking-link"
                      >
                        {trackingNumber}
                      </a>
                    ) : (
                      <Text variant="body2" weight="semibold" noMargin>
                        {trackingNumber}
                      </Text>
                    )}
                  </Flex>
                )}
                {carrier && (
                  <Flex direction="column" gap={4}>
                    <Text variant="caption" noMargin className="orderdetails-info-label">
                      Carrier
                    </Text>
                    <Text variant="body2" weight="medium" noMargin>
                      {carrier}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Card>
        )}

        {/* Order Items */}
        <Card variant="outlined" className="orderdetails-items-card">
          <Text variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Items ({items.length})
          </Text>

          <Flex direction="column" gap={12}>
            {items.map((item, index) => (
              <div key={item.id}>
                <Flex direction="row" gap={12} className="orderdetails-item">
                  {/* Product Image */}
                  {item.image && (
                    <div className="orderdetails-item-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="orderdetails-item-image"
                      />
                    </div>
                  )}

                  {/* Product Details */}
                  <Flex direction="column" gap={4} style={{ flex: 1, minWidth: 0 }}>
                    <Text variant="body2" weight="medium" noMargin className="orderdetails-item-name">
                      {item.name}
                    </Text>
                    {item.variant && (
                      <Text variant="caption" noMargin className="orderdetails-item-variant">
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
                    <Text variant="caption" noMargin className="orderdetails-item-unit-price">
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
        <Card variant="outlined" className="orderdetails-summary-card">
          <Text variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Order Summary
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

            {couponCode && (
              <Flex justify="between" align="center">
                <Text variant="body2" noMargin className="orderdetails-coupon">Coupon Applied</Text>
                <Text variant="body2" noMargin className="orderdetails-coupon">
                  {couponCode}
                </Text>
              </Flex>
            )}

            {discount > 0 && (
              <Flex justify="between" align="center">
                <Text variant="body2" noMargin className="orderdetails-discount">Discount</Text>
                <Text variant="body2" noMargin className="orderdetails-discount">
                  -{currency}{discount.toLocaleString()}
                </Text>
              </Flex>
            )}

            <Divider style={{ margin: '8px 0' }} />

            <Flex justify="between" align="center">
              <Text variant="body1" weight="bold" noMargin>Total</Text>
              <Text variant="body1" weight="bold" noMargin className="orderdetails-total">
                {currency}{total.toLocaleString()}
              </Text>
            </Flex>
          </Flex>

          {/* Payment Details */}
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

        {/* Customer Details */}
        {customerDetailsItems.length > 0 && (
          <InfoListCard
            heading="Customer Information"
            items={customerDetailsItems}
            variant="outlined"
            showDividers
          />
        )}

        {/* Addresses with Icons */}
        <Flex direction="row" gap={16} wrap="wrap">
          {/* Shipping Address */}
          <Card variant="outlined" className="orderdetails-address-card">
            <Flex direction="column" gap={12}>
              <Flex align="center" gap={8}>
                <MapPinIcon size={20} />
                <Text variant="h6" weight="semibold" noMargin>
                  Shipping Address
                </Text>
              </Flex>
              <Divider />
              <AddressDisplay address={shippingAddress} />
            </Flex>
          </Card>

          {/* Billing Address */}
          {billingAddress && (
            <Card variant="outlined" className="orderdetails-address-card">
              <Flex direction="column" gap={12}>
                <Flex align="center" gap={8}>
                  <CreditCardIcon size={20} />
                  <Text variant="h6" weight="semibold" noMargin>
                    Billing Address
                  </Text>
                </Flex>
                <Divider />
                <AddressDisplay address={billingAddress} />
              </Flex>
            </Card>
          )}
        </Flex>

        {/* Order Actions */}
        {showActions && (
          <Card variant="outlined" className="orderdetails-actions-card">
            <Flex direction="column" gap={16}>
              <Text variant="h6" weight="semibold" noMargin>
                Order Actions
              </Text>
              
              <Divider />

              {/* Primary Actions */}
              <Flex direction="row" gap={12} wrap="wrap">
                {canCancel && onCancelOrder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleCancelOrder}
                    leftIcon={<CloseIcon size={18} />}
                    className="orderdetails-action-btn-secondary orderdetails-cancel-btn"
                  >
                    {cancelOrderText}
                  </Button>
                )}
                {canReturn && onReturnOrder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleReturnOrder}
                    leftIcon={<ReturnIcon size={18} />}
                    className="orderdetails-action-btn-secondary"
                  >
                    {returnOrderText}
                  </Button>
                )}
                {allowReorder && onReorder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleReorder}
                    leftIcon={<RefreshIcon size={18} />}
                    className="orderdetails-action-btn-secondary"
                  >
                    {reorderText}
                  </Button>
                )}
              </Flex>

              {/* Secondary Actions */}
              <Flex direction="row" gap={12} wrap="wrap">
                {status === 'delivered' && onWriteReview && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={handleWriteReview}
                    leftIcon={<StarIcon size={18} />}
                    className="orderdetails-action-btn-secondary"
                  >
                    {writeReviewText}
                  </Button>
                )}
                {onContactSupport && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={handleContactSupport}
                    leftIcon={<MessageIcon size={18} />}
                    className="orderdetails-action-btn-secondary"
                  >
                    {contactSupportText}
                  </Button>
                )}
              </Flex>
            </Flex>
          </Card>
        )}

        {/* Help Text with Better Design */}
        <Card variant="filled" className="orderdetails-help-card">
          <Flex direction="column" gap={12} align="center">
            <Flex align="center" gap={8}>
              <MessageIcon size={20} />
              <Text variant="h6" weight="semibold" noMargin>
                Need Help?
              </Text>
            </Flex>
            <Text variant="body2" align="center" noMargin className="orderdetails-help-text">
              Our support team is available 24/7 to assist you with your order
            </Text>
            <Flex direction="row" gap={16} wrap="wrap" justify="center" style={{ marginTop: '4px' }}>
              <Flex align="center" gap={6}>
                <MessageIcon size={16} />
                <Text variant="body2" weight="medium" noMargin className="orderdetails-help-email">
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

OrderDetails.displayName = 'OrderDetails';

const OrderDetailsWithParsedClasses = withParsedClasses(OrderDetails);

export default OrderDetailsWithParsedClasses as React.FC<
  OrderDetailsProps & React.RefAttributes<HTMLDivElement>
>;
export { OrderDetailsWithParsedClasses as OrderDetails };
