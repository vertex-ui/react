import React from 'react';
import { ProductWidgetData, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Badge } from '../../Badge';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { StarIcon, HeartIcon } from '../../../icons/IconComponents';

interface ProductWidgetProps {
  data: ProductWidgetData;
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const ProductWidget: React.FC<ProductWidgetProps> = ({
  data,
  theme,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}) => {
  const renderPrice = () => {
    const hasOriginalPrice = data.originalPrice && data.originalPrice !== data.price;
    
    return (
      <Flex align="center" gap="sm">
        <Text 
          variant={size === 'lg' ? 'h5' : size === 'sm' ? 'body2' : 'h6'} 
          className="font-bold text-primary-600"
        >
          {typeof data.price === 'string' ? data.price : `$${data.price}`}
        </Text>
        {hasOriginalPrice && (
          <Text variant="caption" className="line-through text-neutral-400">
            {typeof data.originalPrice === 'string' ? data.originalPrice : `$${data.originalPrice}`}
          </Text>
        )}
      </Flex>
    );
  };

  const renderRating = () => {
    if (!data.rating) return null;
    
    return (
      <Flex align="center" gap="xs">
        <Flex align="center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              size={12}
              className={i < Math.floor(data.rating!) ? 'text-warning-500' : 'text-neutral-300'}
            />
          ))}
        </Flex>
        <Text variant="caption" className="text-neutral-500">
          {data.rating}
          {data.reviews && ` (${data.reviews})`}
        </Text>
      </Flex>
    );
  };

  const renderContent = () => {
    switch (theme) {
      case 'minimal':
        return (
          <Flex direction="column" gap="sm">
            {data.image && (
              <div className="product-image product-image--minimal">
                <img src={data.image} alt={data.name} />
              </div>
            )}
            <Flex direction="column" gap="xs">
              <Text variant={size === 'lg' ? 'h6' : size === 'sm' ? 'caption' : 'body2'} className="font-medium">
                {data.name}
              </Text>
              {renderPrice()}
              {renderRating()}
            </Flex>
          </Flex>
        );
        
      case 'modern':
        return (
          <Flex direction="column" gap="md">
            <div className="relative">
              {data.image && (
                <div className="product-image product-image--modern">
                  <img src={data.image} alt={data.name} />
                </div>
              )}
              <div className="absolute top-2 right-2 flex gap-1">
                {!data.inStock && (
                  <Badge variant="error" size="sm">Out of Stock</Badge>
                )}
                {data.badge && (
                  <Badge variant={data.badge.variant === 'error' ? 'error' : data.badge.variant as any || variant as any} size="sm">
                    {data.badge.text}
                  </Badge>
                )}
              </div>
            </div>
            
            <Flex direction="column" gap="sm">
              <Flex justify="between" align="start">
                <Flex direction="column" gap="xs">
                  {data.category && (
                    <Text variant="caption" className="text-neutral-500 uppercase">
                      {data.category}
                    </Text>
                  )}
                  <Text variant={size === 'lg' ? 'h5' : size === 'sm' ? 'body2' : 'h6'} className="font-semibold">
                    {data.name}
                  </Text>
                  {renderRating()}
                </Flex>
                <Button variant="ghost" size="sm">
                  <HeartIcon size={16} />
                </Button>
              </Flex>
              
              {renderPrice()}
              
              {data.action && (
                <Button
                  variant={data.action.variant as any || 'primary'}
                  size="sm"
                  onClick={data.action.onClick}
                  href={data.action.href}
                  disabled={!data.inStock}
                  fullWidth
                >
                  {data.action.label}
                </Button>
              )}
            </Flex>
          </Flex>
        );
        
      case 'compact':
        return (
          <Flex align="center" gap="md">
            {data.image && (
              <div className="product-image product-image--compact">
                <img src={data.image} alt={data.name} />
              </div>
            )}
            <Flex direction="column" gap="xs" style={{ flex: 1 }}>
              <Text variant={size === 'lg' ? 'body1' : size === 'sm' ? 'caption' : 'body2'} className="font-medium">
                {data.name}
              </Text>
              {renderPrice()}
              {renderRating()}
            </Flex>
            {!data.inStock && (
              <Badge variant="error" size="sm">Out of Stock</Badge>
            )}
          </Flex>
        );
        
      default:
        return (
          <Flex direction="column" gap="sm">
            {data.image && (
              <div className="product-image">
                <img src={data.image} alt={data.name} />
              </div>
            )}
            <Text variant="body1" className="font-medium">
              {data.name}
            </Text>
            {renderPrice()}
            {renderRating()}
          </Flex>
        );
    }
  };

  const getCardClassName = () => {
    return [
      'vtx-product-widget',
      `vtx-product-widget--${theme}`,
      `vtx-product-widget--${size}`,
      `vtx-product-widget--${variant}`,
      !data.inStock && 'vtx-product-widget--out-of-stock',
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

export default ProductWidget;