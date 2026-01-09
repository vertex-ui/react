import React from 'react';
import { Flex } from '../../Flex';
import { Container } from '../../Container';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';

export const SingleRowNavbar: React.FC<NavbarBaseProps> = (props) => {
  const {
    sticky = false,
    shadow = true,
    backgroundColor,
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
    'vtx-navbar--single-row',
    sticky && 'vtx-navbar--sticky',
    shadow && 'vtx-navbar--shadow',
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = { ...propStyle };
  if (backgroundColor) style.backgroundColor = backgroundColor;

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
