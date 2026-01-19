import React from 'react';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';
import { Container } from '../../Container';

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
          <div className="vtx-navbar__content" style={props.padding ? { padding: props.padding } : { padding: '0 1.5rem' }}>
            {leftSide}
            {rightSide}
          </div>
        )}
      </nav>
    </>
  );
};
