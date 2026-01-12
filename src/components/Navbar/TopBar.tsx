import React from 'react';
import { Flex } from '../Flex';
import { Container } from '../Container';
import { Link } from '../Link';
import { TopBarConfig, NavigationItem } from './types';

interface TopBarProps {
  config: TopBarConfig;
  containerized?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  config,
  containerized = true,
}) => {
  const renderItems = (items: React.ReactNode | NavigationItem[]) => {
    if (!items) return null;
    if (React.isValidElement(items)) return items;
    if (Array.isArray(items)) {
      return (
        <Flex align="center" gap={24}>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                onClick={item.onClick}
                variant="small"
                color="inherit"
                noUnderline
                hoverColor={item.hoverColor}
                leftIcon={item.icon}
                component={item.component}
              >
                {item.label}
              </Link>
            );
          })}
        </Flex>
      );
    }
    return items;
  };

  const {
    backgroundColor,
    textColor,
  } = config;

  const isStandardBg = backgroundColor && ['primary', 'secondary', 'dark'].includes(backgroundColor);
  const isCustomBg = backgroundColor && !isStandardBg;

  const isStandardText = textColor && ['light', 'dark'].includes(textColor);
  const isCustomText = textColor && !isStandardText;

  // Determine standard class names
  const classes = [
    'vtx-navbar__topbar',
    isStandardBg && `vtx-navbar__topbar--${backgroundColor}`,
    isStandardText && `vtx-navbar__topbar--text-${textColor}`,
    // Auto-light text for primary/secondary/dark backgrounds if not specified
    !textColor && (backgroundColor === 'primary' || backgroundColor === 'secondary' || backgroundColor === 'dark') && 'vtx-navbar__topbar--text-light',
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {};
  if (isCustomBg) style.backgroundColor = backgroundColor;
  if (isCustomText) style.color = textColor;

  const content = (
    <Flex justify="between" align="center">
      {renderItems(config.left)}
      {renderItems(config.right)}
    </Flex>
  );

  return (
    <div className={classes} style={style}>
      {containerized ? <Container>{content}</Container> : <div style={{ padding: '0 1.5rem' }}>{content}</div>}
    </div>
  );
};
