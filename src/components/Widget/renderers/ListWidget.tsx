import React from 'react';
import { ListWidgetData, ListWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Avatar } from '../../Avatar';
import { Badge } from '../../Badge';
import './ListWidget.css';

interface ListWidgetProps {
  data: ListWidgetData;
  settings?: ListWidgetSettings;
  
  // Deprecated: Use settings instead
  /** @deprecated Use settings.theme */
  theme?: WidgetTheme;
  /** @deprecated Use settings.variant */
  variant?: WidgetVariant;
  /** @deprecated Use settings.size */
  size?: 'sm' | 'md' | 'lg';
  /** @deprecated Use settings.className */
  className?: string;
  /** @deprecated Use settings.style */
  style?: React.CSSProperties;
}

const ListWidget: React.FC<ListWidgetProps> = ({
  data,
  settings,
  // Backward compatibility
  theme: legacyTheme,
  variant: legacyVariant,
  size: legacySize,
  className: legacyClassName,
  style: legacyStyle,
}) => {
  // Merge settings with legacy props for backward compatibility
  const theme = settings?.theme || legacyTheme || 'modern';
  const variant = settings?.variant || legacyVariant || 'primary';
  const size = settings?.size || legacySize || 'md';
  const className = settings?.className || legacyClassName || '';
  const style = settings?.style || legacyStyle;
  
  const showDividers = settings?.showDividers !== false; // Default true
  const maxItems = settings?.maxItems;
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
    const itemsToShow = maxItems ? data.items.slice(0, maxItems) : data.items;
    
    return (
      <Flex direction="column" gap="sm">
        {data.title && (
          <Text variant="h6" className="mb-2">
            {data.title}
          </Text>
        )}
        
        {itemsToShow.map((item, index) => (
          <div key={item.id || index}>
            <Flex align="start" gap="md" className="py-2">
              {renderAvatar(item)}
              
              <Flex direction="column" gap="xs" className="vtx-list-widget-content">
                <Flex justify="between" align="start">
                  <Flex direction="column" gap="xs">
                    <Text variant={size === 'lg' ? 'body1' : 'body2'}>
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
            
            {showDividers && index < itemsToShow.length - 1 && (
              <div className="border-b border-neutral-200 my-2" />
            )}
          </div>
        ))}
        
        {maxItems && data.items.length > maxItems && (
          <Text variant="caption" className="text-neutral-500 text-center mt-2">
            +{data.items.length - maxItems} more items
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