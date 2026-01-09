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
            if (item.component) {
              const Component = item.component;
              return <Component key={index} {...(item.componentProps || {})} />;
            }
            return (
              <Link
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="vtx-navbar__topbar-link"
                variant="small"
                color="inherit"
                noUnderline
                leftIcon={item.icon}
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

  const style: React.CSSProperties = {};
  if (config.backgroundColor) style.backgroundColor = config.backgroundColor;
  if (config.textColor) style.color = config.textColor;

  const content = (
    <Flex justify="between" align="center">
      {renderItems(config.left)}
      {renderItems(config.right)}
    </Flex>
  );

  return (
    <div className="vtx-navbar__topbar" style={style}>
      {containerized ? <Container>{content}</Container> : <div style={{ padding: '0 1.5rem' }}>{content}</div>}
    </div>
  );
};
