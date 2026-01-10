"use client"
import React from 'react';
import { HeaderWidgetData, HeaderWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Avatar } from '../../Avatar';
import { Link } from '../../Link';
import { Badge } from '../../Badge';
import { Breadcrumb } from '../../Breadcrumb';

interface HeaderWidgetProps {
  data: HeaderWidgetData;
  settings?: HeaderWidgetSettings;

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

const HeaderWidget: React.FC<HeaderWidgetProps> = ({
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

  const showBreadcrumbs = settings?.showBreadcrumbs !== false; // Default true
  const showAvatar = settings?.showAvatar !== false; // Default true
  const bgColor = settings?.backgroundColor;
  const getTitleVariant = () => {
    if (size === 'lg') return 'h1';
    if (size === 'sm') return 'h3';
    return 'h2';
  };

  const getSubtitleVariant = () => {
    if (size === 'lg') return 'h5';
    if (size === 'sm') return 'body2';
    return 'h6';
  };

  const renderBreadcrumbs = () => {
    if (!data.breadcrumbs || data.breadcrumbs.length === 0 || !showBreadcrumbs) return null;

    return (
      <Breadcrumb
        items={data.breadcrumbs.map(crumb => ({
          label: String(crumb.label),
          href: crumb.href,
          onClick: crumb.onClick,
        }))}
        size={size === 'lg' ? 'md' : 'sm'}
      />
    );
  };

  const renderAvatar = () => {
    if (!data.avatar || !showAvatar) return null;

    return (
      <Avatar
        src={typeof data.avatar === 'string' ? data.avatar : data.avatar.src}
        alt={typeof data.avatar === 'string' ? String(data.title) : data.avatar.alt}
        size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
      />
    );
  };

  const renderActions = () => {
    if (!data.actions || data.actions.length === 0) return null;

    return (
      <Flex gap="sm">
        {data.actions.map((action, index) => (
          action.type === 'link' ? (
            <Link
              key={index}
              href={action.href}
              variant={action.variant as any || variant as any}
              className="font-medium"
            >
              {action.label}
            </Link>
          ) : (
            <Button
              key={index}
              variant={action.variant === 'error' ? 'danger' : action.variant as any || (index === 0 ? 'primary' : 'outline')}
              size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
              onClick={action.onClick}
              href={action.href}
            >
              {action.label}
            </Button>
          )
        ))}
      </Flex>
    );
  };

  const renderBadges = () => {
    if (!data.badges || data.badges.length === 0) return null;

    return (
      <Flex gap="xs">
        {data.badges.map((badge, index) => (
          <Badge
            key={index}
            variant={badge.variant === 'error' ? 'error' : badge.variant as any || variant as any}
            size={size === 'lg' ? 'md' : 'sm'}
          >
            {badge.text}
          </Badge>
        ))}
      </Flex>
    );
  };

  const renderContent = () => {
    switch (theme) {
      case 'minimal':
        return (
          <Flex direction="column" gap="sm">
            {renderBreadcrumbs()}

            <Flex align="center" justify="between" gap="md">
              <Flex align="center" gap="sm">
                {renderAvatar()}
                <Flex direction="column">
                  <Text variant={getTitleVariant()} className="font-bold">
                    {data.title}
                  </Text>
                  {data.subtitle && (
                    <Text variant={getSubtitleVariant()} className="text-neutral-600">
                      {data.subtitle}
                    </Text>
                  )}
                </Flex>
              </Flex>

              {renderActions()}
            </Flex>

            {renderBadges()}
          </Flex>
        );

      case 'modern':
        return (
          <Flex direction="column" gap="lg">
            {renderBreadcrumbs()}

            <Flex align="start" justify="between" gap="lg">
              <Flex direction="column" gap="md">
                <Flex align="center" gap="md">
                  {renderAvatar()}
                  <Flex direction="column" gap="xs">
                    <Text variant={getTitleVariant()} className="font-bold">
                      {data.title}
                    </Text>
                    {data.subtitle && (
                      <Text variant={getSubtitleVariant()} className="text-neutral-700">
                        {data.subtitle}
                      </Text>
                    )}
                    {data.description && (
                      <Text variant="body2" className="text-neutral-600">
                        {data.description}
                      </Text>
                    )}
                  </Flex>
                </Flex>

                {renderBadges()}

                {data.metadata && (
                  <Flex gap="lg">
                    {Object.entries(data.metadata).map(([key, value]) => (
                      <Flex key={key} direction="column" gap="xs">
                        <Text variant="caption" className="text-neutral-500 uppercase font-medium">
                          {key}
                        </Text>
                        <Text variant="body2" className="font-medium">
                          {String(value)}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                )}
              </Flex>

              {renderActions()}
            </Flex>
          </Flex>
        );

      case 'compact':
        return (
          <Flex direction="column" gap="xs">
            {renderBreadcrumbs()}

            <Flex align="center" justify="between" gap="md">
              <Flex align="center" gap="sm">
                {renderAvatar()}
                <Flex direction="column">
                  <Text variant={getTitleVariant()} className="font-semibold">
                    {data.title}
                  </Text>
                  {data.subtitle && (
                    <Text variant="caption" className="text-neutral-500">
                      {data.subtitle}
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex align="center" gap="xs">
                {renderBadges()}
                {data.actions && data.actions.length > 0 && (
                  <Button
                    variant={data.actions[0].variant === 'error' ? 'danger' : data.actions[0].variant as any || 'primary'}
                    size="sm"
                    onClick={data.actions[0].onClick}
                    href={data.actions[0].href}
                  >
                    {data.actions[0].label}
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        );

      default:
        return (
          <Flex direction="column" gap="md">
            <Text variant={getTitleVariant()} className="font-bold">
              {data.title}
            </Text>
            {data.subtitle && (
              <Text variant={getSubtitleVariant()} className="text-neutral-600">
                {data.subtitle}
              </Text>
            )}
            {renderBadges()}
            {renderActions()}
          </Flex>
        );
    }
  };

  const getCardClassName = () => {
    return [
      'vtx-header-widget',
      `vtx-header-widget--${theme}`,
      `vtx-header-widget--${size}`,
      `vtx-header-widget--${variant}`,
      className,
    ].filter(Boolean).join(' ');
  };

  const getPadding = () => {
    if (theme === 'minimal') return 'md';
    if (theme === 'compact') return 'sm';
    return 'lg';
  };

  return (
    <Card
      variant="outlined"
      className={getCardClassName()}
      style={{
        ...style,
        backgroundColor: bgColor,
      }}
      padding={getPadding()}
    >
      {renderContent()}
    </Card>
  );
};

export default HeaderWidget;