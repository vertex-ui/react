import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './OrderDetails.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { Divider } from '../../components/Divider';
import Timeline from '../../components/Timeline/Timeline';
import InfoListCard from '../InfoListCard/InfoListCard';
import { InfoListItem } from '../InfoListCard/InfoListCard';
import { SkeletonTheme } from '../../components/Skeleton';
import { ProductCard } from '../ProductCard/ProductCard';
import { MapPinIcon, DownloadIcon, 
    CreditCardIcon,
    MessageIcon,
    PackageIcon,
    PhoneIcon,
    TruckIcon,
    CloseIcon,
    ReturnIcon,
    RefreshIcon,
    StarIcon,
    RupeeIcon
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
  currency?: React.ReactNode;
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
      currency = <RupeeIcon size={14} />,
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
  // Get status badge variant
  const getStatusVariant = () => {
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

  // Get payment status variant
  const getPaymentStatusVariant = () => {
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

  // Get status text
  const getStatusText = () => {
    if (statusText) return statusText;
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // Format address
  const formatAddress = (address: OrderDetailsAddress) => {
    return (
      <div className="orderdetails-address">
        <div className="orderdetails-address-name">{address.name}</div>
        <div>{address.addressLine1}</div>
        {address.addressLine2 && <div>{address.addressLine2}</div>}
        <div>
          {address.city}, {address.state} {address.zipCode}
        </div>
        {address.phone && <div>Phone: {address.phone}</div>}
      </div>
    );
  };

  // Check if order can be cancelled
  const canCancel = allowCancel && (status === 'pending' || status === 'processing');
  
  // Check if order can be returned
  const canReturn = allowReturn && status === 'delivered';
  
  // Check if tracking is available
  const hasTracking = trackingNumber && (status === 'shipped' || status === 'delivered');

  // Get timeline current step based on order status
  const getTimelineStep = () => {
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

  const timelineSteps = ['Order Placed', 'Packed', 'Shipped', 'Delivered'];

  // Customer Details Items
  const customerDetailsItems: InfoListItem[] = [
    customerName ? { label: 'Name', value: customerName } : { label: '', value: '', hidden: true },
    customerEmail ? { label: 'Email', value: customerEmail } : { label: '', value: '', hidden: true },
    customerPhone ? { label: 'Phone', value: customerPhone } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden);

  // Payment Details Items
  const paymentDetailsItems: InfoListItem[] = [
    paymentMethod ? { label: 'Payment Method', value: paymentMethod } : { label: '', value: '', hidden: true },
    paymentStatus ? { 
      label: 'Payment Status', 
      value: <Badge variant={getPaymentStatusVariant()}>{paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}</Badge>
    } : { label: '', value: '', hidden: true },
    transactionId ? { label: 'Transaction ID', value: transactionId, valueClass: 'value-muted' } : { label: '', value: '', hidden: true },
  ].filter(item => !item.hidden);

  // Render skeleton loading state
  if (loading) {
    return <SkeletonTheme theme="order-details" />;
  }

  return (
    <div className={`orderdetails ${className}`} style={style} ref={ref} {...props}>
      <Flex direction="column" gap={24}>
        {/* Simple Header matching the image */}
        <Flex direction="column" gap={8}>
          <Typography variant="h3" weight="bold" noMargin>
            Order Details
          </Typography>
          <Typography variant="body1" noMargin style={{ color: 'var(--vtx-color-text-secondary)' }}>
            Placed on {orderDate}
          </Typography>
        </Flex>

        {/* Order Status Timeline using Timeline component */}
        <Card variant="outlined" style={{ padding: '32px 24px' }}>
          <Timeline
            steps={timelineSteps}
            currentStep={getTimelineStep()}
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
          <Card variant="outlined" style={{ flex: '1 1 200px', minWidth: '200px' }}>
            <Flex direction="column" gap={8}>
              <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600 }}>
                Order Number
              </Typography>
              <Typography variant="h6" weight="bold" noMargin>
                {orderNumber || `#${orderId}`}
              </Typography>
            </Flex>
          </Card>

          {/* Status Card */}
          <Card variant="outlined" style={{ flex: '1 1 200px', minWidth: '200px' }}>
            <Flex direction="column" gap={8}>
              <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600 }}>
                Status
              </Typography>
              <Badge variant={getStatusVariant()} style={{ alignSelf: 'flex-start', padding: '4px 12px' }}>
                {getStatusText()}
              </Badge>
            </Flex>
          </Card>

          {/* Delivery Date Card */}
          {(deliveredDate || estimatedDelivery) && (
            <Card variant="outlined" style={{ flex: '1 1 200px', minWidth: '200px' }}>
              <Flex direction="column" gap={8}>
                <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600 }}>
                  {deliveredDate ? 'Delivered On' : 'Estimated Delivery'}
                </Typography>
                <Typography variant="h6" weight="bold" noMargin style={{ color: deliveredDate ? 'var(--vtx-color-success-600)' : 'inherit' }}>
                  {deliveredDate || estimatedDelivery}
                </Typography>
              </Flex>
            </Card>
          )}

          {/* Payment Status Card */}
          {paymentStatus && (
            <Card variant="outlined" style={{ flex: '1 1 200px', minWidth: '200px' }}>
              <Flex direction="column" gap={8}>
                <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600 }}>
                  Payment
                </Typography>
                <Badge variant={getPaymentStatusVariant()} style={{ alignSelf: 'flex-start', padding: '4px 12px' }}>
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
                onClick={() => onDownloadInvoice(orderId)}
                leftIcon={<DownloadIcon size={18} />}
                style={{ flex: '1 1 auto', minWidth: '180px' }}
              >
                {downloadInvoiceText}
              </Button>
            )}
            {hasTracking && onTrackOrder && (
              <Button
                variant="primary"
                size="md"
                onClick={() => onTrackOrder(orderId)}
                leftIcon={<PackageIcon size={18} />}
                style={{ flex: '1 1 auto', minWidth: '180px' }}
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
                <Typography variant="h6" weight="semibold" noMargin>
                  Shipping Information
                </Typography>
              </Flex>
              <Divider />
              <Flex direction="column" gap={12}>
                {trackingNumber && (
                  <Flex direction="column" gap={4}>
                    <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', fontSize: '0.75rem' }}>
                      Tracking Number
                    </Typography>
                    {trackingUrl ? (
                      <a 
                        href={trackingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          color: 'var(--vtx-color-primary-600)', 
                          fontWeight: 600,
                          textDecoration: 'none'
                        }}
                      >
                        {trackingNumber}
                      </a>
                    ) : (
                      <Typography variant="body2" weight="semibold" noMargin>
                        {trackingNumber}
                      </Typography>
                    )}
                  </Flex>
                )}
                {carrier && (
                  <Flex direction="column" gap={4}>
                    <Typography variant="caption" noMargin style={{ color: 'var(--vtx-color-text-secondary)', fontSize: '0.75rem' }}>
                      Carrier
                    </Typography>
                    <Typography variant="body2" weight="medium" noMargin>
                      {carrier}
                    </Typography>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Card>
        )}

        {/* Order Items */}
        <Card variant="outlined" className="orderdetails-items-card">
          <Typography variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Items ({items.length})
          </Typography>

          <Flex direction="column" gap={0}>
            {items.map((item, index) => (
              <ProductCard.List
                key={item.id}
                image={item.image || ''}
                name={item.name}
                price={item.price}
                initialQuantity={item.quantity}
                variant={item.variant}
                readonly={true}
                currency={typeof currency === 'string' ? currency : undefined}
                style={{ borderBottom: index < items.length - 1 ? '1px solid var(--vtx-color-neutral-200, #e0e0e0)' : 'none', padding: '12px 0' }}
              />
            ))}
          </Flex>
        </Card>

        {/* Price Summary */}
        <Card variant="outlined" className="orderdetails-summary-card">
          <Typography variant="h6" weight="semibold" style={{ marginBottom: '12px' }}>
            Order Summary
          </Typography>

          <Flex direction="column" gap={8}>
            <Flex justify="between" align="center">
              <Typography variant="body2" noMargin>Subtotal</Typography>
              <Typography variant="body2" noMargin>{currency}{subtotal.toLocaleString()}</Typography>
            </Flex>

            {shippingCost > 0 && (
              <Flex justify="between" align="center">
                <Typography variant="body2" noMargin>Shipping</Typography>
                <Typography variant="body2" noMargin>{currency}{shippingCost.toLocaleString()}</Typography>
              </Flex>
            )}

            {tax > 0 && (
              <Flex justify="between" align="center">
                <Typography variant="body2" noMargin>Tax</Typography>
                <Typography variant="body2" noMargin>{currency}{tax.toLocaleString()}</Typography>
              </Flex>
            )}

            {couponCode && (
              <Flex justify="between" align="center">
                <Typography variant="body2" noMargin className="orderdetails-coupon">Coupon Applied</Typography>
                <Typography variant="body2" noMargin className="orderdetails-coupon">
                  {couponCode}
                </Typography>
              </Flex>
            )}

            {discount > 0 && (
              <Flex justify="between" align="center">
                <Typography variant="body2" noMargin className="orderdetails-discount">Discount</Typography>
                <Typography variant="body2" noMargin className="orderdetails-discount">
                  -{currency}{discount.toLocaleString()}
                </Typography>
              </Flex>
            )}

            <Divider style={{ margin: '8px 0' }} />

            <Flex justify="between" align="center">
              <Typography variant="body1" weight="bold" noMargin>Total</Typography>
              <Typography variant="body1" weight="bold" noMargin className="orderdetails-total">
                {currency}{total.toLocaleString()}
              </Typography>
            </Flex>
          </Flex>

          {/* Payment Details */}
          {paymentDetailsItems.length > 0 && (
            <>
              <Divider style={{ margin: '12px 0' }} />
              <Flex direction="column" gap={8}>
                {paymentDetailsItems.map((item, index) => (
                  <Flex key={index} justify="between" align="center">
                    <Typography variant="body2" noMargin>{item.label}</Typography>
                    <Typography variant="body2" noMargin className={item.valueClass}>
                      {item.value}
                    </Typography>
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
          <Card variant="outlined" className="orderdetails-address-card" style={{ flex: '1 1 280px' }}>
            <Flex direction="column" gap={12}>
              <Flex align="center" gap={8}>
                <MapPinIcon size={20} />
                <Typography variant="h6" weight="semibold" noMargin>
                  Shipping Address
                </Typography>
              </Flex>
              <Divider />
              {formatAddress(shippingAddress)}
            </Flex>
          </Card>

          {/* Billing Address */}
          {billingAddress && (
            <Card variant="outlined" className="orderdetails-address-card" style={{ flex: '1 1 280px' }}>
              <Flex direction="column" gap={12}>
                <Flex align="center" gap={8}>
                  <CreditCardIcon size={20} />
                  <Typography variant="h6" weight="semibold" noMargin>
                    Billing Address
                  </Typography>
                </Flex>
                <Divider />
                {formatAddress(billingAddress)}
              </Flex>
            </Card>
          )}
        </Flex>

        {/* Order Actions */}
        {showActions && (
          <Card variant="outlined" className="orderdetails-actions-card">
            <Flex direction="column" gap={16}>
              <Typography variant="h6" weight="semibold" noMargin>
                Order Actions
              </Typography>
              
              <Divider />

              {/* Primary Actions */}
              <Flex direction="row" gap={12} wrap="wrap">
                {canCancel && onCancelOrder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onCancelOrder(orderId)}
                    leftIcon={<CloseIcon size={18} />}
                    style={{ 
                      flex: '1 1 auto', 
                      minWidth: '160px',
                      borderColor: 'var(--vtx-color-error-500)', 
                      color: 'var(--vtx-color-error-600)' 
                    }}
                  >
                    {cancelOrderText}
                  </Button>
                )}
                {canReturn && onReturnOrder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onReturnOrder(orderId)}
                    leftIcon={<ReturnIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '160px' }}
                  >
                    {returnOrderText}
                  </Button>
                )}
                {allowReorder && onReorder && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onReorder(orderId)}
                    leftIcon={<RefreshIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '160px' }}
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
                    onClick={() => onWriteReview(orderId)}
                    leftIcon={<StarIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '160px' }}
                  >
                    {writeReviewText}
                  </Button>
                )}
                {onContactSupport && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => onContactSupport(orderId)}
                    leftIcon={<MessageIcon size={18} />}
                    style={{ flex: '1 1 auto', minWidth: '160px' }}
                  >
                    {contactSupportText}
                  </Button>
                )}
              </Flex>
            </Flex>
          </Card>
        )}

        {/* Help Text with Better Design */}
        <Card variant="filled" className="orderdetails-help-card" style={{ background: 'var(--vtx-color-primary-50)', border: '1px solid var(--vtx-color-primary-100)' }}>
          <Flex direction="column" gap={12} align="center">
            <Flex align="center" gap={8}>
              <MessageIcon size={20} />
              <Typography variant="h6" weight="semibold" noMargin>
                Need Help?
              </Typography>
            </Flex>
            <Typography variant="body2" align="center" noMargin style={{ color: 'var(--vtx-color-text-secondary)' }}>
              Our support team is available 24/7 to assist you with your order
            </Typography>
            <Flex direction="row" gap={16} wrap="wrap" justify="center" style={{ marginTop: '4px' }}>
              <Flex align="center" gap={6}>
                <MessageIcon size={16} />
                <Typography variant="body2" weight="medium" noMargin>
                  support@example.com
                </Typography>
              </Flex>
              <Flex align="center" gap={6}>
                <PhoneIcon size={16} />
                <Typography variant="body2" weight="medium" noMargin>
                  1-800-123-4567
                </Typography>
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
