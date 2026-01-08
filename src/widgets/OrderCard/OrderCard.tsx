import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './OrderCard.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { SkeletonTheme } from '../../components/Skeleton';

export interface OrderItem {
  id?: string;
  name: string;
  image?: string;
  quantity?: number;
  price?: string | number;
}

export interface OrderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique order identifier
   */
  orderId: string;
  /**
   * Display order number (defaults to orderId)
   */
  orderNumber?: string;
  /**
   * Order status
   * @default 'pending'
   */
  status?: 'pending' | 'processing' | 'delivered' | 'cancelled' | 'shipped';
  /**
   * Custom status text (overrides default)
   */
  statusText?: string;
  /**
   * Array of order items
   */
  items: OrderItem[];
  /**
   * Delivery date string
   */
  deliveryDate?: string;
  /**
   * Delivery label text
   * @default 'Delivered on'
   */
  deliveryLabel?: string;
  /**
   * Total order amount
   */
  totalAmount: number;
  /**
   * Currency symbol
   * @default '₹'
   */
  currency?: string;
  /**
   * Track order button handler
   */
  onTrackOrder?: (orderId: string) => void;
  /**
   * View details handler
   */
  onViewDetails?: (orderId: string) => void;
  /**
   * Track button text
   * @default 'Track Order'
   */
  trackButtonText?: string;
  /**
   * If true, shows skeleton loading state
   * @default false
   */
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * OrderCard - Order summary card with tracking
 *
 * Displays order information including status, items, delivery date, and tracking button
 *
 * @example
 * ```tsx
 * <OrderCard
 *   orderId="12345"
 *   status="delivered"
 *   items={[
 *     { id: '1', name: 'Product Name', image: '/img.jpg', quantity: 2 }
 *   ]}
 *   deliveryDate="Dec 25, 2023"
 *   totalAmount={99.99}
 *   onTrackOrder={(id) => console.log('Track', id)}
 * />
 * ```
 */
const OrderCard = React.forwardRef<HTMLDivElement, OrderCardProps>(
  (
    {
      orderId,
      orderNumber,
      status = 'pending',
      statusText,
      items,
      deliveryDate,
      deliveryLabel = 'Delivered on',
      totalAmount,
      currency = '₹',
      onTrackOrder,
      onViewDetails,
      trackButtonText = 'Track Order',
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
          return 'error';
        case 'processing':
        case 'shipped':
          return 'info';
        case 'pending':
          return 'warning';
        default:
          return 'neutral';
      }
    };

    // Get default status text
    const getStatusText = () => {
      if (statusText) return statusText;
      return status.charAt(0).toUpperCase() + status.slice(1);
    };

    // Get first item and remaining count
    const firstItem = items[0];
    const remainingCount = items.length - 1;

    // Render skeleton loading state
    if (loading) {
      return <SkeletonTheme theme="order-card" />;
    }

    return (
      <Card
        variant="outlined"
        className={`ordercard ${className}`}
        style={style}
        onClick={onViewDetails ? () => onViewDetails(orderId) : undefined}
        ref={ref as any}
        {...props}
      >
        <Flex direction="column" gap={0}>
          {/* Header - Order Number & Status */}
          <Flex align="center" justify="between" wrap="wrap" gap={8} className="ordercard-header">
            <Text variant="body1" weight="semibold" noMargin>
              {orderNumber || `Order #${orderId}`}
            </Text>
            <Badge variant={getStatusVariant()}>{getStatusText()}</Badge>
          </Flex>

          {/* Main Content */}
          <Flex direction="row" gap={10} className="ordercard-content">
            {/* Product Image */}
            {firstItem.image && (
              <div className="ordercard-image-wrapper">
                <img
                  src={firstItem.image}
                  alt={firstItem.name}
                  className="ordercard-image"
                  loading="lazy"
                />
              </div>
            )}

            {/* Product Details */}
            <Flex direction="column" gap={2} style={{ flex: 1, minWidth: 0 }}>
              <Text
                variant="body2"
                weight="medium"
                noMargin
                className="ordercard-product-name"
              >
                {firstItem.name}
                {firstItem.quantity && firstItem.quantity > 1 && ` × ${firstItem.quantity}`}
              </Text>

              {remainingCount > 0 && (
                <Text variant="caption" noMargin className="ordercard-more-items">
                  + {remainingCount} more {remainingCount === 1 ? 'item' : 'items'}
                </Text>
              )}
            </Flex>
          </Flex>

          {/* Footer - Delivery Date & Price */}
          <Flex
            direction="row"
            align="center"
            justify="between"
            wrap="wrap"
            gap={8}
            className="ordercard-footer"
          >
            <Flex direction="column" gap={2} style={{ flex: '1 1 auto', minWidth: '140px' }}>
              {deliveryDate && (
                <Text variant="caption" noMargin className="ordercard-delivery">
                  {deliveryLabel}: {deliveryDate}
                </Text>
              )}
              <Text variant="body1" weight="bold" noMargin className="ordercard-price">
                {currency}{totalAmount.toLocaleString()}
              </Text>
            </Flex>

            {onTrackOrder && (
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e?.stopPropagation();
                  onTrackOrder(orderId);
                }}
                className="ordercard-track-btn"
              >
                {trackButtonText}
              </Button>
            )}
          </Flex>
        </Flex>
      </Card>
    );
  }
);

OrderCard.displayName = 'OrderCard';

const OrderCardWithParsedClasses = withParsedClasses(OrderCard);

export default OrderCardWithParsedClasses as React.FC<
  OrderCardProps & React.RefAttributes<HTMLDivElement>
>;
export { OrderCardWithParsedClasses as OrderCard };

