"use client";
import React from 'react';
import { MetricWidgetData, MetricWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Typography } from '../../../components/Typography';
import { Badge } from '../../Badge';
import { Flex } from '../../Flex';
import { TrendingUpIcon, MinusIcon } from '../../../icons/IconComponents';

interface MetricWidgetProps {
  data: MetricWidgetData;
  settings?: MetricWidgetSettings;

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

const MetricWidget: React.FC<MetricWidgetProps> = ({
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

  const showTrend = settings?.showTrend !== false; // Default true
  const mapVariantToBadge = (v?: WidgetVariant) => {
    if (v === 'error') return 'error';
    if (v === 'secondary') return 'neutral';
    return v as 'primary' | 'success' | 'warning' | 'info' | 'neutral' | 'error' | undefined;
  };

  const renderTrend = () => {
    if (!data.trend || !showTrend) return null;

    const { direction, value, label } = data.trend;
    const isPositive = direction === 'up';
    const isNegative = direction === 'down';

    const trendVariant = isPositive ? 'success' : isNegative ? 'error' : 'neutral';
    const TrendIcon = isPositive ? TrendingUpIcon : isNegative ? TrendingUpIcon : MinusIcon;

    return (
      <Flex align="center" gap="xs">
        <TrendIcon size={12} />
        <Typography variant="caption" className={`text-${trendVariant}`}>
          {Math.abs(value)}%{label && ` ${label}`}
        </Typography>
      </Flex>
    );
  };

  const renderContent = () => {
    switch (theme) {
      case 'minimal':
        return (
          <Flex direction="column" align="center" gap="xs">
            <Typography variant={size === 'lg' ? 'h2' : size === 'sm' ? 'h5' : 'h3'} className="font-bold">
              {data.value}
            </Typography>
            {data.label && (
              <Typography variant="caption" className="text-neutral-500">
                {data.label}
              </Typography>
            )}
            {renderTrend()}
          </Flex>
        );

      case 'modern':
        return (
          <Flex direction="column" gap="sm">
            <Flex justify="between" align="start">
              <div>
                {data.label && (
                  <Typography variant="caption" className="text-neutral-500 mb-1">
                    {data.label}
                  </Typography>
                )}
                <Typography variant={size === 'lg' ? 'h2' : size === 'sm' ? 'h5' : 'h3'} className="font-bold">
                  {data.value}
                </Typography>
              </div>
              {data.icon && (
                <div className={`metric-icon metric-icon--${variant} metric-icon--${size}`}>
                  {data.icon}
                </div>
              )}
            </Flex>
            {(data.trend || data.badge) && (
              <Flex justify="between" align="center">
                {renderTrend()}
                {data.badge && (
                  <Badge variant={mapVariantToBadge(data.badge.variant) || 'neutral'}>
                    {data.badge.text}
                  </Badge>
                )}
              </Flex>
            )}
          </Flex>
        );

      case 'compact':
        return (
          <Flex align="center" gap="md">
            {data.icon && (
              <div className={`metric-icon metric-icon--${variant} metric-icon--${size}`}>
                {data.icon}
              </div>
            )}
            <Flex direction="column" gap="xs">
              <Typography variant={size === 'lg' ? 'h3' : size === 'sm' ? 'h6' : 'h4'} className="font-bold">
                {data.value}
              </Typography>
              {data.label && (
                <Typography variant="caption" className="text-neutral-500">
                  {data.label}
                </Typography>
              )}
              {renderTrend()}
            </Flex>
          </Flex>
        );

      default:
        return (
          <Flex direction="column" gap="sm">
            <Typography variant={size === 'lg' ? 'h2' : size === 'sm' ? 'h5' : 'h3'} className="font-bold">
              {data.value}
            </Typography>
            {data.label && (
              <Typography variant="caption" className="text-neutral-500">
                {data.label}
              </Typography>
            )}
            {renderTrend()}
          </Flex>
        );
    }
  };

  const getCardClassName = () => {
    return [
      'vtx-metric-widget',
      `vtx-metric-widget--${theme}`,
      `vtx-metric-widget--${size}`,
      `vtx-metric-widget--${variant}`,
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

export default MetricWidget;