"use client";
import React from 'react';
import { OrderWidgetData, OrderWidgetSettings } from '../types';
import { OrderCard } from '../../../widgets/OrderCard';

interface OrderWidgetProps {
  data: OrderWidgetData;
  settings?: OrderWidgetSettings;
}

export const OrderWidget: React.FC<OrderWidgetProps> = ({
  data,
  settings,
}) => {
  // Map status to OrderCard status type
  const mapStatus = (status: string): string => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'completed') return 'delivered';
    return statusLower;
  };



  // Map OrderWidgetData items to OrderCard items
  const orderItems = (data.items || []).map((item, index) => ({
    id: `item-${index}`,
    name: item.name,
    quantity: item.quantity,
    image: item.image,
  }));



  // Map actions, converting 'outlined' to 'outline' for Button component
  const mappedActions = data.actions?.map(action => ({
    label: action.label,
    onClick: action.onClick,
    href: action.href,
    variant: action.variant === 'outlined' ? 'outline' : action.variant,
  }));

  return (
    <OrderCard
      orderId={data.id}
      orderNumber={data.id}
      status={mapStatus(data.status)}
      statusText={data.status}
      items={orderItems.length > 0 ? orderItems : [{ id: '1', name: 'No items' }]}
      deliveryDate={data.date as string}
      totalAmount={data.total}
      currency={data.currency || settings?.currency || '$'}
      actions={mappedActions}
      loading={settings?.loading}
      className={settings?.className}
      style={settings?.style}
    />
  );
};

export default OrderWidget;