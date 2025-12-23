import React from 'react';
import { OrderWidgetData, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Badge } from '../../Badge';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { CalendarIcon, UserIcon } from '../../../icons/IconComponents';

interface OrderWidgetProps {
  data: OrderWidgetData;
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const OrderWidget: React.FC<OrderWidgetProps> = ({
  data,
  theme,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}) => {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'delivered':
        return 'success';
      case 'pending':
      case 'processing':
        return 'warning';
      case 'cancelled':
      case 'failed':
        return 'error';
      case 'shipped':
      case 'confirmed':
        return 'info';
      default:
        return 'neutral';
    }
  };

  const formatCurrency = (amount: number | string) => {
    if (typeof amount === 'string') return amount;
    return `$${amount.toFixed(2)}`;
  };

  const formatDate = (date: string | Date) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const renderOrderItems = () => {
    if (!data.items || data.items.length === 0) return null;
    
    const displayItems = data.items.slice(0, 3);
    const remainingCount = data.items.length - displayItems.length;
    
    return (
      <Flex direction="column" gap="xs">
        {displayItems.map((item, index) => (
          <Flex key={index} justify="between" align="center">
            <Text variant="caption" className="text-neutral-600">
              {item.name} {item.quantity && `× ${item.quantity}`}
            </Text>
            {item.price && (
              <Text variant="caption" className="text-neutral-800 font-medium">
                {formatCurrency(item.price)}
              </Text>
            )}
          </Flex>
        ))}
        {remainingCount > 0 && (
          <Text variant="caption" className="text-neutral-500">
            +{remainingCount} more item{remainingCount > 1 ? 's' : ''}
          </Text>
        )}
      </Flex>
    );
  };

  const renderContent = () => {
    switch (theme) {
      case 'minimal':
        return (
          <Flex direction="column" gap="sm">
            <Flex justify="between" align="center">
              <Text variant={size === 'lg' ? 'h6' : size === 'sm' ? 'body2' : 'body1'} className="font-semibold">
                #{data.id}
              </Text>
              <Badge variant={getStatusVariant(data.status) as any} size="sm">
                {data.status}
              </Badge>
            </Flex>
            <Text variant={size === 'lg' ? 'h5' : size === 'sm' ? 'body1' : 'h6'} className="font-bold">
              {formatCurrency(data.total)}
            </Text>
            {data.date && (
              <Text variant="caption" className="text-neutral-500">
                {formatDate(data.date)}
              </Text>
            )}
          </Flex>
        );
        
      case 'modern':
        return (
          <Flex direction="column" gap="md">
            <Flex justify="between" align="start">
              <Flex direction="column" gap="xs">
                <Text variant={size === 'lg' ? 'h5' : size === 'sm' ? 'body1' : 'h6'} className="font-bold">
                  Order #{data.id}
                </Text>
                {data.customer && (
                  <Flex align="center" gap="xs">
                    <UserIcon size={14} className="text-neutral-400" />
                    <Text variant="caption" className="text-neutral-600">
                      {data.customer.name || data.customer.email}
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Badge variant={getStatusVariant(data.status) as any}>
                {data.status}
              </Badge>
            </Flex>
            
            <Flex justify="between" align="center">
              <Text variant={size === 'lg' ? 'h4' : size === 'sm' ? 'h6' : 'h5'} className="font-bold">
                {formatCurrency(data.total)}
              </Text>
              {data.date && (
                <Flex align="center" gap="xs">
                  <CalendarIcon size={14} className="text-neutral-400" />
                  <Text variant="caption" className="text-neutral-500">
                    {formatDate(data.date)}
                  </Text>
                </Flex>
              )}
            </Flex>
            
            {renderOrderItems()}
            
            {data.actions && data.actions.length > 0 && (
              <Flex gap="sm">
                {data.actions.slice(0, 2).map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant as any || (index === 0 ? 'primary' : 'ghost')}
                    size="sm"
                    onClick={action.onClick}
                    href={action.href}
                    style={{ flex: 1 }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Flex>
            )}
          </Flex>
        );
        
      case 'compact':
        return (
          <Flex align="center" justify="between" gap="md">
            <Flex direction="column" gap="xs">
              <Text variant={size === 'lg' ? 'body1' : size === 'sm' ? 'caption' : 'body2'} className="font-medium">
                #{data.id}
              </Text>
              <Text variant={size === 'lg' ? 'h6' : size === 'sm' ? 'body2' : 'body1'} className="font-bold">
                {formatCurrency(data.total)}
              </Text>
            </Flex>
            <Flex direction="column" align="end" gap="xs">
              <Badge variant={getStatusVariant(data.status) as any} size="sm">
                {data.status}
              </Badge>
              {data.date && (
                <Text variant="caption" className="text-neutral-500">
                  {formatDate(data.date)}
                </Text>
              )}
            </Flex>
          </Flex>
        );
        
      default:
        return (
          <Flex direction="column" gap="sm">
            <Text variant="h6" className="font-semibold">
              Order #{data.id}
            </Text>
            <Text variant="h5" className="font-bold">
              {formatCurrency(data.total)}
            </Text>
            <Badge variant={getStatusVariant(data.status) as any}>
              {data.status}
            </Badge>
          </Flex>
        );
    }
  };

  const getCardClassName = () => {
    return [
      'vtx-order-widget',
      `vtx-order-widget--${theme}`,
      `vtx-order-widget--${size}`,
      `vtx-order-widget--${variant}`,
      className,
    ].filter(Boolean).join(' ');
  };

  return (
    <Card
      variant="elevated"
      className={getCardClassName()}
      style={style}
      padding={theme === 'minimal' ? 'md' : theme === 'compact' ? 'sm' : 'lg'}
    >
      {renderContent()}
    </Card>
  );
};

export default OrderWidget;