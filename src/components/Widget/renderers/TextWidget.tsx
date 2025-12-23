import React from 'react';
import { TextWidgetData, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Link } from '../../Link';

interface TextWidgetProps {
  data: TextWidgetData;
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const TextWidget: React.FC<TextWidgetProps> = ({
  data,
  theme,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}) => {
  const getTextVariant = (type: 'title' | 'content' | 'caption') => {
    if (size === 'lg') {
      switch (type) {
        case 'title': return data.variant === 'h1' ? 'h1' : data.variant === 'h2' ? 'h2' : data.variant === 'h3' ? 'h3' : 'h4';
        case 'content': return 'body1';
        case 'caption': return 'body2';
      }
    }
    
    if (size === 'sm') {
      switch (type) {
        case 'title': return data.variant === 'h1' ? 'h3' : data.variant === 'h2' ? 'h4' : data.variant === 'h3' ? 'h5' : 'h6';
        case 'content': return 'body2';
        case 'caption': return 'caption';
      }
    }
    
    // Default 'md' size
    switch (type) {
      case 'title': return data.variant === 'h1' ? 'h2' : data.variant === 'h2' ? 'h3' : data.variant === 'h3' ? 'h4' : 'h5';
      case 'content': return 'body1';
      case 'caption': return 'body2';
    }
  };

  const renderContent = () => {
    return (
      <Flex direction="column" gap="md">
        {data.title && (
          <Text 
            variant={getTextVariant('title')} 
            className="font-bold"
            style={{ color: data.titleColor }}
          >
            {data.title}
          </Text>
        )}
        
        {data.content && (
          <Text 
            variant={getTextVariant('content')} 
            className="text-neutral-700 leading-relaxed"
            style={{ color: data.contentColor }}
          >
            {data.content}
          </Text>
        )}
        
        {data.caption && (
          <Text 
            variant={getTextVariant('caption')} 
            className="text-neutral-500"
            style={{ color: data.captionColor }}
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
      data.alignment && `vtx-text-widget--${data.alignment}`,
      className,
    ].filter(Boolean).join(' ');
  };

  return (
    <Card
      variant="outlined"
      className={getCardClassName()}
      style={{
        ...style,
        backgroundColor: data.backgroundColor,
        textAlign: data.alignment || 'left',
      }}
      padding="lg"
    >
      {renderContent()}
    </Card>
  );
};

export default TextWidget;