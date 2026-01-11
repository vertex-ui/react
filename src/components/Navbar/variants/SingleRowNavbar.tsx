import React from 'react';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';
import { Container } from '../../Container';

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

  // We group logo and nav to keep them on the left
  const leftSide = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {logoSection}
      {navigationSection}
    </div>
  );

  const rightSide = (
    <div className="vtx-navbar__right">
      {searchSection}
      {iconsSection}
      {userSection}
      {actionsSection}
    </div>
  );

  return (
    <>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <nav className={navbarClass} style={style}>
        {containerized ? (
          <Container style={{ height: '100%' }}>
            <div className="vtx-navbar__content">
              {leftSide}
              {rightSide}
            </div>
          </Container>
        ) : (
          <div className="vtx-navbar__content" style={{ padding: '0 1.5rem' }}>
            {leftSide}
            {rightSide}
          </div>
        )}
      </nav>
    </>
  );
};
