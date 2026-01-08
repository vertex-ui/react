import React from 'react';
import { OrderConfirmationWidgetData, OrderConfirmationWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { OrderConfirmation } from '../../../widgets/OrderConfirmation';

interface OrderConfirmationWidgetProps {
  data: OrderConfirmationWidgetData;
  settings?: OrderConfirmationWidgetSettings;
  
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

const OrderConfirmationWidget: React.FC<OrderConfirmationWidgetProps> = ({
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
    <OrderConfirmation
      orderId={data.orderId}
      orderNumber={data.orderNumber}
      orderDate={data.orderDate}
      status={data.status}
      statusText={data.statusText}
      headerText={data.headerText}
      headerSubtitle={data.headerSubtitle}
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
      currency={data.currency}
      paymentMethod={data.paymentMethod}
      transactionId={data.transactionId}
      estimatedDelivery={data.estimatedDelivery}
      trackingNumber={data.trackingNumber}
      showActions={settings?.showActions}
      hideDownloadInvoice={settings?.hideDownloadInvoice}
      hideContinueShopping={settings?.hideContinueShopping}
      hideTrackOrder={settings?.hideTrackOrder}
      hideContactSupport={settings?.hideContactSupport}
      onDownloadInvoice={data.actions?.onDownloadInvoice}
      onContinueShopping={data.actions?.onContinueShopping}
      onTrackOrder={data.actions?.onTrackOrder}
      onViewDetails={data.actions?.onViewDetails}
      onContactSupport={data.actions?.onContactSupport}
      onShareOrder={data.actions?.onShareOrder}
      loading={settings?.loading}
      className={className}
      style={style}
    />
  );
};

export default OrderConfirmationWidget;
