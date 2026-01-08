import React from 'react';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { Link } from '../../Link';
import { Flex } from '../../Flex';
import {
  EmptyBoxIcon,
  EmptySearchIcon,
  EmptyDataIcon,
  EmptyNotificationIcon,
  EmptyCartIcon,
  EmptyFileIcon,
  PlusIcon,
  RefreshIcon,
  SearchIcon,
} from '../../../icons/IconComponents';
import type { EmptyStateWidgetData, EmptyStateWidgetSettings } from '../types';
import './EmptyStateWidget.css';

export interface EmptyStateWidgetProps {
  data: EmptyStateWidgetData;
  settings?: EmptyStateWidgetSettings;
  className?: string;
  style?: React.CSSProperties;
}

const EmptyStateWidget: React.FC<EmptyStateWidgetProps> = ({
  data,
  settings,
  className = '',
  style,
}) => {
  const {
    type = 'general',
    title,
    message,
    actions,
    customIcon,
    additionalInfo,
  } = data;

  const theme = settings?.theme || 'modern';
  const variant = settings?.variant || 'primary';
  const showIllustration = settings?.showIllustration !== false;
  const centered = settings?.centered !== false;
  const compact = settings?.compact || false;
  const backgroundColor = settings?.backgroundColor;

  // Default content based on type
  const getDefaultContent = () => {
    const defaults: Record<string, { title: string; message: string; icon: React.ReactNode }> = {
      general: {
        title: 'Nothing Here Yet',
        message: "It looks like there's no content to display at the moment.",
        icon: <EmptyBoxIcon size={120} />,
      },
      search: {
        title: 'No Results Found',
        message: "We couldn't find anything matching your search. Try different keywords.",
        icon: <EmptySearchIcon size={120} />,
      },
      data: {
        title: 'No Data Available',
        message: 'There is no data to show right now. Check back later or add new entries.',
        icon: <EmptyDataIcon size={120} />,
      },
      notification: {
        title: 'No Notifications',
        message: "You're all caught up! There are no new notifications.",
        icon: <EmptyNotificationIcon size={120} />,
      },
      cart: {
        title: 'Your Cart is Empty',
        message: 'Add items to your cart to get started with your purchase.',
        icon: <EmptyCartIcon size={120} />,
      },
      file: {
        title: 'No Files Yet',
        message: 'Upload or create files to get started.',
        icon: <EmptyFileIcon size={120} />,
      },
    };

    return defaults[type] || defaults.general;
  };

  const defaultContent = getDefaultContent();
  const displayTitle = title || defaultContent.title;
  const displayMessage = message || defaultContent.message;
  const displayIcon = customIcon || defaultContent.icon;

  // Get icon component for actions
  const getIcon = (iconName?: string) => {
    const iconSize = 18;
    switch (iconName) {
      case 'add':
      case 'plus':
        return <PlusIcon size={iconSize} />;
      case 'refresh':
        return <RefreshIcon size={iconSize} />;
      case 'search':
        return <SearchIcon size={iconSize} />;
      default:
        return null;
    }
  };

  // Get button variant based on theme
  const getButtonVariant = (actionVariant?: string) => {
    if (theme === 'technical') return actionVariant === 'primary' ? 'success' : 'ghost';
    if (theme === 'elegant') return actionVariant === 'primary' ? 'primary' : 'ghost';
    return actionVariant || 'primary';
  };

  // Get text color for theme
  const getTextColor = () => {
    if (theme === 'technical') return '#ffffff';
    return undefined;
  };

  const getMessageColor = () => {
    if (theme === 'technical') return '#999999';
    return undefined;
  };

  const getInfoTextColor = () => {
    if (theme === 'technical') return '#cccccc';
    return undefined;
  };

  const containerClasses = [
    'vtx-empty-state',
    `vtx-empty-state--${theme}`,
    `vtx-empty-state--${variant}`,
    !centered && 'vtx-empty-state--left',
    compact && 'vtx-empty-state--compact',
    className,
  ].filter(Boolean).join(' ');

  const containerStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { background: backgroundColor }),
  };

  return (
    <Flex
      direction="column"
      align={centered ? 'center' : 'start'}
      justify="center"
      className={containerClasses}
      style={containerStyle}
    >
      {/* Illustration/Icon */}
      {showIllustration && (
        <div className="vtx-empty-state__illustration mb-8" role="img" aria-label={`Empty state: ${type}`}>
          {displayIcon}
        </div>
      )}

      <Flex direction="column" className="vtx-empty-state__content" gap={0}>
        {/* Title */}
        <Text
          as="h2"
          variant={compact ? 'h4' : 'h3'}
          textColor={getTextColor()}
          weight="semibold"
          className="mb-4"
        >
          {displayTitle}
        </Text>

        {/* Message */}
        <Text
          as="p"
          variant={compact ? 'body2' : 'body1'}
          textColor={getMessageColor()}
          className="mb-6"
        >
          {displayMessage}
        </Text>

        {/* Actions */}
        {actions && actions.length > 0 && (
          <Flex
            className="vtx-empty-state__actions mt-2"
            gap={12}
            wrap="wrap"
            justify={centered ? 'center' : 'start'}
          >
            {actions.map((action, index) => {
              const icon = getIcon(action.icon);
              const buttonVariant = getButtonVariant(action.variant) as any;
              const buttonSize = compact ? 'md' : 'lg';
              
              const buttonContent = (
                <Button
                  variant={buttonVariant}
                  size={buttonSize}
                  fullWidth={false}
                  leftIcon={icon}
                  onClick={action.onClick}
                  aria-label={action.label}
                >
                  {action.label}
                </Button>
              );

              // Wrap in Link for SEO if href is provided
              if (action.href) {
                return (
                  <Link
                    key={index}
                    href={action.href}
                    external={'external' in action ? action.external : false}
                    noUnderline
                  >
                    {buttonContent}
                  </Link>
                );
              }

              return <React.Fragment key={index}>{buttonContent}</React.Fragment>;
            })}
          </Flex>
        )}

        {/* Additional Info */}
        {additionalInfo && (
          <div className="vtx-empty-state__info mt-8">
            <Text
              as="p"
              variant="body2"
              textColor={getInfoTextColor()}
              noMargin
            >
              {additionalInfo}
            </Text>
          </div>
        )}
      </Flex>
    </Flex>
  );
};

export default EmptyStateWidget;
