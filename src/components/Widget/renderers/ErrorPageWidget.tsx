import React from 'react';
import { Button } from '../../Button';
import { Typography } from '../../Typography';
import { Link } from '../../Link';
import { Flex } from '../../Flex';
import {
  NotFoundIcon,
  ServerErrorIcon,
  ForbiddenIcon,
  SearchNotFoundIcon,
  MaintenanceIcon,
  UnauthorizedIcon,
  HomeIcon,
  RefreshIcon,
  ChevronLeftIcon,
} from '../../../icons/IconComponents';
import type { ErrorPageWidgetData, ErrorPageWidgetSettings } from '../types';
import './ErrorPageWidget.css';

interface ErrorPageWidgetProps {
  data: ErrorPageWidgetData;
  settings?: ErrorPageWidgetSettings;
  className?: string;
  style?: React.CSSProperties;
}

const ErrorPageWidget: React.FC<ErrorPageWidgetProps> = ({
  data,
  settings,
  className = '',
  style,
}) => {
  const {
    errorCode = '404',
    title,
    message,
    suggestion,
    actions,
    primaryAction,
    secondaryAction,
    customIcon,
    additionalInfo,
  } = data;

  const theme = settings?.theme || 'modern';
  const variant = settings?.variant || 'primary';
  const showIllustration = settings?.showIllustration !== false;
  const centered = settings?.centered !== false;
  const fullHeight = settings?.fullHeight !== false;
  const backgroundColor = settings?.backgroundColor;

  // Default content based on error code
  const getDefaultContent = () => {
    const defaults: Record<string, { title: string; message: string; suggestion: string; icon: React.ReactNode }> = {
      '404': {
        title: 'Page Not Found',
        message: "Oops! The page you're looking for doesn't exist.",
        suggestion: 'The page might have been moved or deleted. Try checking the URL or return to the homepage.',
        icon: <NotFoundIcon size={120} />,
      },
      '500': {
        title: 'Internal Server Error',
        message: 'Something went wrong on our end.',
        suggestion: "We're working to fix the issue. Please try again later or contact support if the problem persists.",
        icon: <ServerErrorIcon size={120} />,
      },
      '403': {
        title: 'Access Forbidden',
        message: "You don't have permission to access this resource.",
        suggestion: 'Please contact your administrator if you believe you should have access.',
        icon: <ForbiddenIcon size={120} />,
      },
      '401': {
        title: 'Unauthorized',
        message: 'You need to be logged in to access this page.',
        suggestion: 'Please sign in to continue or contact support if you need help.',
        icon: <UnauthorizedIcon size={120} />,
      },
      '503': {
        title: 'Service Unavailable',
        message: "We're currently under maintenance.",
        suggestion: "We'll be back shortly. Thank you for your patience.",
        icon: <MaintenanceIcon size={120} />,
      },
      search: {
        title: 'No Results Found',
        message: "We couldn't find what you're looking for.",
        suggestion: 'Try adjusting your search terms or browse our categories.',
        icon: <SearchNotFoundIcon size={120} />,
      },
    };

    return defaults[errorCode] || defaults['404'];
  };

  const defaultContent = getDefaultContent();
  const displayTitle = title || defaultContent.title;
  const displayMessage = message || defaultContent.message;
  const displaySuggestion = suggestion || defaultContent.suggestion;
  const displayIcon = customIcon || defaultContent.icon;

  // Merge actions (support legacy primaryAction/secondaryAction)
  const allActions = actions || [
    ...(primaryAction ? [{ ...primaryAction, variant: variant as any }] : []),
    ...(secondaryAction ? [{ ...secondaryAction, variant: 'outline' as const }] : []),
  ];

  // Get icon component
  const getIcon = (iconName?: string) => {
    const iconSize = 18;
    switch (iconName) {
      case 'home':
        return <HomeIcon size={iconSize} />;
      case 'back':
        return <ChevronLeftIcon size={iconSize} />;
      case 'refresh':
        return <RefreshIcon size={iconSize} />;
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

  const getSuggestionColor = () => {
    if (theme === 'technical') return '#999999';
    return undefined;
  };

  const getInfoTextColor = () => {
    if (theme === 'technical') return '#cccccc';
    return undefined;
  };

  const getCodeColor = () => {
    if (theme === 'minimal') return undefined;
    if (theme === 'technical') return '#00ff00';
    if (theme === 'professional') {
      const colorMap: Record<string, string> = {
        primary: 'var(--vtx-color-primary-600, #2563eb)',
        danger: 'var(--vtx-color-danger-600, #dc2626)',
        warning: 'var(--vtx-color-warning-600, #d97706)',
        info: 'var(--vtx-color-info-600, #2563eb)',
      };
      return colorMap[variant] || colorMap.primary;
    }
    if (theme === 'playful') {
      const colorMap: Record<string, string> = {
        primary: 'var(--vtx-color-primary-500, #3b82f6)',
        danger: 'var(--vtx-color-danger-500, #ef4444)',
        warning: 'var(--vtx-color-warning-500, #f59e0b)',
        info: 'var(--vtx-color-info-500, #3b82f6)',
      };
      return colorMap[variant] || colorMap.primary;
    }
    if (theme === 'elegant') {
      const colorMap: Record<string, string> = {
        primary: 'var(--vtx-color-primary-400, #60a5fa)',
        danger: 'var(--vtx-color-danger-400, #f87171)',
        warning: 'var(--vtx-color-warning-400, #fbbf24)',
        info: 'var(--vtx-color-info-400, #60a5fa)',
      };
      return colorMap[variant] || colorMap.primary;
    }
    return undefined;
  };

  const containerClasses = [
    'vtx-error-page',
    `vtx-error-page--${theme}`,
    `vtx-error-page--${variant}`,
    !centered && 'vtx-error-page--left',
    fullHeight && 'vtx-error-page--full-height',
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
        <div className="vtx-error-page__illustration mb-8" role="img" aria-label={`Error ${errorCode}`}>
          {displayIcon}
        </div>
      )}

      {/* Error Code */}
      <Typography
        as="div"
        className="vtx-error-page__code mb-6"
        textColor={getCodeColor()}
        aria-label={`Error code ${errorCode}`}
      >
        {errorCode}
      </Typography>

      <Flex direction="column" className="vtx-error-page__content" gap={0}>
        {/* Title */}
        <Typography
          as="h1"
          variant="h2"
          textColor={getTextColor()}
          weight="bold"
          className="mb-5"
        >
          {displayTitle}
        </Typography>

        {/* Message */}
        <Typography
          as="p"
          variant="body1"
          textColor={getTextColor()}
          className="mb-4"
        >
          {displayMessage}
        </Typography>

        {/* Suggestion */}
        {displaySuggestion && (
          <Typography
            as="p"
            variant="body2"
            textColor={getSuggestionColor()}
            className="mb-4"
          >
            {displaySuggestion}
          </Typography>
        )}

        {/* Actions */}
        {allActions.length > 0 && (
          <Flex
            className="vtx-error-page__actions mt-2"
            gap={16}
            wrap="wrap"
            justify={centered ? 'center' : 'start'}
          >
            {allActions.map((action, index) => {
              const icon = getIcon(action.icon);
              const buttonVariant = getButtonVariant(action.variant) as any;
              
              const buttonContent = (
                <Button
                  variant={buttonVariant}
                  size="lg"
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
          <div className="vtx-error-page__info mt-10">
            <Typography
              as="p"
              variant="body2"
              textColor={getInfoTextColor()}
              noMargin
            >
              {additionalInfo}
            </Typography>
          </div>
        )}
      </Flex>
    </Flex>
  );
};

export default ErrorPageWidget;
