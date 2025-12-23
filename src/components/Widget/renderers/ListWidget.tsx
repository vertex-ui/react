import React from 'react';
import { ListWidgetData, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Avatar } from '../../Avatar';
import { Badge } from '../../Badge';

interface ListWidgetProps {
  data: ListWidgetData;
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const ListWidget: React.FC<ListWidgetProps> = ({
  data,
  theme,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}) => {
  const renderAvatar = (item: any) => {
    if (!item.avatar) return null;
    
    return (
      <Avatar
        src={typeof item.avatar === 'string' ? item.avatar : item.avatar.src}
        alt={typeof item.avatar === 'string' ? item.title : item.avatar.alt}
        size={size === 'lg' ? 'md' : size === 'sm' ? 'sm' : 'sm'}
      />
    );
  };

  const renderActions = (item: any) => {
    if (!item.actions || item.actions.length === 0) return null;
    
    return (
      <Flex gap="xs">
        {item.actions.slice(0, 2).map((action: any, index: number) => (
          <Button
            key={index}
            variant={action.variant === 'error' ? 'danger' : action.variant as any || 'ghost'}
            size="sm"
            onClick={action.onClick}
            href={action.href}
          >
            {action.label}
          </Button>
        ))}
      </Flex>
    );
  };

  const renderContent = () => {
    const itemsToShow = data.maxItems ? data.items.slice(0, data.maxItems) : data.items;
    
    return (
      <Flex direction="column" gap="sm">
        {data.title && (
          <Text variant="h6" className="font-semibold mb-2">
            {data.title}
          </Text>
        )}
        
        {itemsToShow.map((item, index) => (
          <div key={item.id || index}>
            <Flex align="start" gap="md" className="py-2">
              {renderAvatar(item)}
              
              <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                <Flex justify="between" align="start">
                  <Flex direction="column" gap="xs">
                    <Text variant={size === 'lg' ? 'body1' : 'body2'} className="font-medium">
                      {item.title}
                    </Text>
                    {item.subtitle && (
                      <Text variant="caption" className="text-neutral-600">
                        {item.subtitle}
                      </Text>
                    )}
                    {item.description && (
                      <Text variant="caption" className="text-neutral-500">
                        {item.description}
                      </Text>
                    )}
                  </Flex>
                  
                  <Flex align="center" gap="sm">
                    {item.badge && (
                      <Badge 
                        variant={item.badge.variant === 'error' ? 'error' : item.badge.variant as any || 'neutral'} 
                        size="sm"
                      >
                        {item.badge.text}
                      </Badge>
                    )}
                    {renderActions(item)}
                  </Flex>
                </Flex>
                
                {item.metadata && Object.keys(item.metadata).length > 0 && (
                  <Flex gap="md">
                    {Object.entries(item.metadata).map(([key, value]) => (
                      <Text key={key} variant="caption" className="text-neutral-500">
                        <span className="font-medium">{key}:</span> {String(value)}
                      </Text>
                    ))}
                  </Flex>
                )}
              </Flex>
            </Flex>
            
            {data.showDividers && index < itemsToShow.length - 1 && (
              <div className="border-b border-neutral-200 my-2" />
            )}
          </div>
        ))}
        
        {data.maxItems && data.items.length > data.maxItems && (
          <Text variant="caption" className="text-neutral-500 text-center mt-2">
            +{data.items.length - data.maxItems} more items
          </Text>
        )}
      </Flex>
    );
  };

  const getCardClassName = () => {
    return [
      'vtx-list-widget',
      `vtx-list-widget--${theme}`,
      `vtx-list-widget--${size}`,
      `vtx-list-widget--${variant}`,
      className,
    ].filter(Boolean).join(' ');
  };

  return (
    <Card
      variant="elevated"
      className={getCardClassName()}
      style={style}
      padding="lg"
    >
      {renderContent()}
    </Card>
  );
};

export default ListWidget;