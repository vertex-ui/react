"use client";
import React from 'react';
import { OrderDetailsWidgetData, OrderDetailsWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { OrderDetails } from '../../../widgets/OrderDetails';

interface OrderDetailsWidgetProps {
  data: OrderDetailsWidgetData;
  settings?: OrderDetailsWidgetSettings;

  // Deprecated: Use settings instead
  /** @deprecated Use settings.theme */
  theme?: WidgetTheme;
  /** @deprecated Use settings.variant */
  variant?: WidgetVariant;
  /** @deprecated Use settings.className */
  className?: string;
  /** @deprecated Use settings.style */
  style?: React.CSSProperties;
}

const OrderDetailsWidget: React.FC<OrderDetailsWidgetProps> = ({
  data,
  settings,
  // Backward compatibility
  className: legacyClassName,
  style: legacyStyle,
}) => {
  // Merge settings with legacy props for backward compatibility
  const className = settings?.className || legacyClassName || '';
  const style = settings?.style || legacyStyle;

  return (
    <OrderDetails
      orderId={data.orderId}
      orderNumber={data.orderNumber}
      orderDate={data.orderDate}
      status={data.status}
      statusText={data.statusText}
      customerName={data.customerName}
      customerEmail={data.customerEmail}
      customerPhone={data.customerPhone}
      shippingAddress={data.shippingAddress}
      billingAddress={data.billingAddress}
      items={data.items}
      subtotal={data.subtotal}
      shippingCost={data.shippingCost}
      tax={data.tax}
      discount={data.discount}
      total={data.total}
      currency={data.currency || settings?.currency}
      couponCode={data.couponCode}
      paymentMethod={data.paymentMethod}
      paymentStatus={data.paymentStatus}
      transactionId={data.transactionId}
      estimatedDelivery={data.estimatedDelivery}
      deliveredDate={data.deliveredDate}
      trackingNumber={data.trackingNumber}
      trackingUrl={data.trackingUrl}
      carrier={data.carrier}
      showActions={settings?.showActions}
      allowCancel={settings?.allowCancel}
      allowReturn={settings?.allowReturn}
      allowReorder={settings?.allowReorder}
      actions={data.actions?.map(action => ({
        ...action,
        variant: action.variant === 'outlined' ? 'outline' : action.variant,
      }))}
      loading={settings?.loading}
      className={className}
      style={style}
    />
  );
};

export default OrderDetailsWidget;
