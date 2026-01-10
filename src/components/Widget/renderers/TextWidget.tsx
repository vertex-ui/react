"use client";
import React from 'react';
import { TextWidgetData, TextWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { InfoText } from '../../../widgets/InfoText';
import { Card } from '../../Card';
import { Flex } from '../../Flex';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Link } from '../../Link';

interface TextWidgetProps {
  data: TextWidgetData;
  settings?: TextWidgetSettings;

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

const TextWidget: React.FC<TextWidgetProps> = ({
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

  const textVariant = settings?.variant || 'body';
  const alignment = settings?.alignment || 'left';
  const titleColor = settings?.titleColor;
  const contentColor = settings?.contentColor;
  const captionColor = settings?.captionColor;
  const backgroundColor = settings?.backgroundColor;

  const getTextVariant = (type: 'title' | 'content' | 'caption') => {
    if (size === 'lg') {
      switch (type) {
        case 'title': return textVariant === 'h1' ? 'h1' : textVariant === 'h2' ? 'h2' : textVariant === 'h3' ? 'h3' : 'h4';
        case 'content': return 'body1';
        case 'caption': return 'body2';
      }
    }

    if (size === 'sm') {
      switch (type) {
        case 'title': return textVariant === 'h1' ? 'h3' : textVariant === 'h2' ? 'h4' : textVariant === 'h3' ? 'h5' : 'h6';
        case 'content': return 'body2';
        case 'caption': return 'caption';
      }
    }

    // Default 'md' size
    switch (type) {
      case 'title': return textVariant === 'h1' ? 'h2' : textVariant === 'h2' ? 'h3' : textVariant === 'h3' ? 'h4' : 'h5';
      case 'content': return 'body1';
      case 'caption': return 'body2';
    }
  };

  // If icon is provided and theme is minimal/compact, use InfoText.Stat
  if (data.icon && (theme === 'minimal' || theme === 'compact')) {
    return (
      <InfoText.Stat
        icon={data.icon}
        value={data.title || data.content || ''}
        label={data.caption}
        className={className}
        style={style}
      />
    );
  }

  // Otherwise render custom text content with Card
  const renderContent = () => {
    return (
      <Flex direction="column" gap="md">
        {data.title && (
          <Text
            variant={getTextVariant('title')}
            className="font-bold"
            style={{ color: titleColor }}
          >
            {data.title}
          </Text>
        )}

        {data.content && (
          <Text
            variant={getTextVariant('content')}
            className="text-neutral-700 leading-relaxed"
            style={{ color: contentColor }}
          >
            {data.content}
          </Text>
        )}

        {data.caption && (
          <Text
            variant={getTextVariant('caption')}
            className="text-neutral-500"
            style={{ color: captionColor }}
          >
            {data.caption}
          </Text>
        )}

        {data.actions && data.actions.length > 0 && (
          <Flex gap="sm">
            {data.actions.map((action, index) => (
              action.type === 'link' ? (
                <Link
                  key={index}
                  href={action.href}
                  variant={action.variant as any || variant}
                >
                  {action.label}
                </Link>
              ) : (
                <Button
                  key={index}
                  variant={action.variant === 'error' ? 'danger' : action.variant as any || (index === 0 ? 'primary' : 'ghost')}
                  size={size === 'lg' ? 'md' : 'sm'}
                  onClick={action.onClick}
                  href={action.href}
                >
                  {action.label}
                </Button>
              )
            ))}
          </Flex>
        )}
      </Flex>
    );
  };

  const getCardClassName = () => {
    return [
      'vtx-text-widget',
      `vtx-text-widget--${theme}`,
      `vtx-text-widget--${size}`,
      `vtx-text-widget--${variant}`,
      alignment && `vtx-text-widget--${alignment}`,
      className,
    ].filter(Boolean).join(' ');
  };

  return (
    <Card
      variant="outlined"
      className={getCardClassName()}
      style={{
        ...style,
        backgroundColor: backgroundColor,
        textAlign: alignment || 'left',
      }}
      padding="lg"
    >
      {renderContent()}
    </Card>
  );
};

export default TextWidget;
