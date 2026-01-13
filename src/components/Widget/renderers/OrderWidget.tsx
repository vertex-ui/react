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
  const mapStatus = (status: string): 'pending' | 'processing' | 'delivered' | 'cancelled' | 'shipped' => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'completed') return 'delivered';
    if (['pending', 'processing', 'delivered', 'cancelled', 'shipped'].includes(statusLower)) {
      return statusLower as 'pending' | 'processing' | 'delivered' | 'cancelled' | 'shipped';
    }
    return 'pending';
  };

  // Format date for OrderCard
  const formatDate = (date?: string | Date) => {
    if (!date) return undefined;
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Convert number to string with proper formatting
  const formatAmount = (amount: number | string): number => {
    if (typeof amount === 'string') {
      const parsed = parseFloat(amount.replace(/[^0-9.-]+/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    return amount;
  };

  // Map OrderWidgetData items to OrderCard items
  const orderItems = (data.items || []).map((item, index) => ({
    id: `item-${index}`,
    name: item.name,
    quantity: item.quantity,
    image: item.image,
  }));

  // Handle track order action
  const handleTrackOrder = data.actions?.[0]?.onClick || data.actions?.[0]?.href
    ? () => {
      if (data.actions?.[0]?.onClick) {
        data.actions[0].onClick();
      }
    }
    : undefined;

  // Handle view details action
  const handleViewDetails = data.actions?.[1]?.onClick || data.actions?.[1]?.href
    ? () => {
      if (data.actions?.[1]?.onClick) {
        data.actions[1].onClick();
      }
    }
    : undefined;

  return (
    <OrderCard
      orderId={data.id}
      orderNumber={data.id}
      status={mapStatus(data.status)}
      statusText={data.status}
      items={orderItems.length > 0 ? orderItems : [{ id: '1', name: 'No items' }]}
      deliveryDate={formatDate(data.date)}
      totalAmount={formatAmount(data.total)}
      currency="$"
      onTrackOrder={handleTrackOrder}
      onViewDetails={handleViewDetails}
      trackButtonText={data.actions?.[0]?.label as string || 'Track Order'}
      loading={settings?.loading}
      className={settings?.className}
      style={settings?.style}
    />
  );
};

export default OrderWidget;