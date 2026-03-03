import React from 'react';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';
import { Container } from '../../Container';

export const CenteredNavbar: React.FC<NavbarBaseProps> = (props) => {
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
    'lxs-navbar',
    'lxs-navbar--desktop',
    'lxs-navbar--centered',
    sticky && 'lxs-navbar--sticky',
    shadow && 'lxs-navbar--shadow',
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = { ...propStyle };
  if (backgroundColor) style.backgroundColor = backgroundColor;

  return (
    <>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <nav className={navbarClass} style={style}>
        {containerized ? (
          <Container style={{ height: '100%' }}>
            <div className="lxs-navbar__content">
              {logoSection}
              {navigationSection}
              <div className="lxs-navbar__right">
                {searchSection}
                {iconsSection}
                {userSection}
                {actionsSection}
              </div>
            </div>
          </Container>
        ) : (
          <div className="lxs-navbar__content" style={props.padding ? { padding: props.padding } : { padding: '0 1.5rem' }}>
            {logoSection}
            {navigationSection}
            <div className="lxs-navbar__right">
              {searchSection}
              {iconsSection}
              {userSection}
              {actionsSection}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
