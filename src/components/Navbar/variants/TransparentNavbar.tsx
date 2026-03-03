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
    'lxs-navbar',
    'lxs-navbar--desktop',
    'lxs-navbar--transparent',
    sticky && 'lxs-navbar--sticky',
    shadow && 'lxs-navbar--shadow',
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
    <div className="lxs-navbar__right">
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
            <div className="lxs-navbar__content">
              {leftSide}
              {rightSide}
            </div>
          </Container>
        ) : (
          <div className="lxs-navbar__content" style={props.padding ? { padding: props.padding } : { padding: '0 1.5rem' }}>
            {leftSide}
            {rightSide}
          </div>
        )}
      </nav>
    </>
  );
};
