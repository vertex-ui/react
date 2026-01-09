import React from 'react';
import { Flex } from '../../Flex';
import { Container } from '../../Container';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';

export const TransparentNavbar: React.FC<NavbarBaseProps> = (props) => {
  const {
    sticky = false,
    shadow = false,
    backgroundColor = 'transparent',
    className = '',
    topBar,
    containerized = true,
    style: propStyle,
  } = props;

  const {
    logoSection,
    navigationSection,
    searchSection,
    iconsSection,
    userSection,
    actionsSection,
  } = useNavbarSections(props);

  const navbarClass = [
    'vtx-navbar',
    'vtx-navbar--desktop',
    'vtx-navbar--transparent',
    sticky && 'vtx-navbar--sticky',
    shadow && 'vtx-navbar--shadow',
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    backgroundColor,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    ...propStyle,
  };

  const content = (
    <Flex align="center" justify="between" gap={32} className="vtx-navbar__content">
      {logoSection}
      {navigationSection}
      <Flex align="center" gap={24} style={{ marginLeft: 'auto' }}>
        {searchSection}
        {iconsSection}
        {userSection}
        {actionsSection}
      </Flex>
    </Flex>
  );

  return (
    <>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <nav className={navbarClass} style={style}>
        {containerized ? (
          <Container>
            <div style={{ padding: '1rem 0', minHeight: '5rem' }}>
              {content}
            </div>
          </Container>
        ) : (
          <div style={{ padding: '1rem 1.5rem', minHeight: '5rem' }}>
            {content}
          </div>
        )}
      </nav>
    </>
  );
};
