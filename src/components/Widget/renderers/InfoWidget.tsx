import React from 'react';
import { InfoWidgetData, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Badge } from '../../Badge';
import { Button } from '../../Button';
import { Flex } from '../../Flex';

interface InfoWidgetProps {
  data: InfoWidgetData;
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const InfoWidget: React.FC<InfoWidgetProps> = ({
  data,
  theme,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}) => {
  const mapVariantToBadge = (v?: WidgetVariant) => {
    if (v === 'error') return 'error';
    if (v === 'secondary') return 'neutral';
    return v as 'primary' | 'success' | 'warning' | 'info' | 'neutral' | 'error' | undefined;
  };

  const mapVariantToButton = (v?: string) => {
    if (v === 'outlined') return 'outline';
    return v as 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'outline' | undefined;
  };

  const renderContent = () => {
    switch (theme) {
      case 'minimal':
        return (
          <Flex direction="column" align="center" gap="sm">
            {data.icon && (
              <div className={`info-icon info-icon--${data.status || variant} info-icon--${size}`}>
                {data.icon}
              </div>
            )}
            <Text variant={size === 'lg' ? 'h4' : size === 'sm' ? 'body2' : 'h5'} className="font-medium text-center">
              {data.text}
            </Text>
            {data.subText && (
              <Text variant="caption" className="text-neutral-500 text-center">
                {data.subText}
              </Text>
            )}
          </Flex>
        );
        
      case 'modern':
        return (
          <Flex direction="column" gap="md">
            <Flex align="start" gap="md">
              {data.icon && (
                <div className={`info-icon info-icon--${data.status || variant} info-icon--${size}`}>
                  {data.icon}
                </div>
              )}
              <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                {data.title && (
                  <Text variant="subtitle1" className="font-semibold">
                    {data.title}
                  </Text>
                )}
                <Text variant={size === 'lg' ? 'h5' : size === 'sm' ? 'body2' : 'body1'} className="font-medium">
                  {data.text}
                </Text>
                {data.subText && (
                  <Text variant="caption" className="text-neutral-500">
                    {data.subText}
                  </Text>
                )}
              </Flex>
              {data.badge && (
                <Badge variant={mapVariantToBadge(data.badge.variant || data.status) || 'neutral'}>
                  {data.badge.text}
                </Badge>
              )}
            </Flex>
            {data.action && (
              <Button
                variant={mapVariantToButton(data.action.variant) || 'ghost'}
                size="sm"
                onClick={data.action.onClick}
                href={data.action.href}
              >
                {data.action.label}
              </Button>
            )}
          </Flex>
        );
        
      case 'compact':
        return (
          <Flex align="center" gap="md">
            {data.icon && (
              <div className={`info-icon info-icon--${data.status || variant} info-icon--sm`}>
                {data.icon}
              </div>
            )}
            <Flex direction="column" gap="xs" style={{ flex: 1 }}>
              <Text variant={size === 'lg' ? 'body1' : size === 'sm' ? 'caption' : 'body2'} className="font-medium">
                {data.text}
              </Text>
              {data.subText && (
                <Text variant="caption" className="text-neutral-500">
                  {data.subText}
                </Text>
              )}
            </Flex>
            {data.badge && (
              <Badge variant={mapVariantToBadge(data.badge.variant || data.status) || 'neutral'} size="sm">
                {data.badge.text}
              </Badge>
            )}
          </Flex>
        );
        
      default:
        return (
          <Flex direction="column" gap="sm">
            {data.icon && (
              <div className={`info-icon info-icon--${data.status || variant} info-icon--${size}`}>
                {data.icon}
              </div>
            )}
            <Text variant={size === 'lg' ? 'h4' : size === 'sm' ? 'body2' : 'h5'} className="font-medium">
              {data.text}
            </Text>
            {data.subText && (
              <Text variant="caption" className="text-neutral-500">
                {data.subText}
              </Text>
            )}
          </Flex>
        );
    }
  };

  const getCardClassName = () => {
    return [
      'vtx-info-widget',
      `vtx-info-widget--${theme}`,
      `vtx-info-widget--${size}`,
      `vtx-info-widget--${data.status || variant}`,
      className,
    ].filter(Boolean).join(' ');
  };

  return (
    <Card
      variant="elevated"
      className={getCardClassName()}
      style={style}
      padding={theme === 'minimal' ? 'lg' : theme === 'compact' ? 'md' : 'lg'}
    >
      {renderContent()}
    </Card>
  );
};

export default InfoWidget;