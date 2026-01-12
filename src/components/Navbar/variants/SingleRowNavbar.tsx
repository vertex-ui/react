import React from 'react';
import { NavbarDesktopProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';
import { Container } from '../../Container';

export const SingleRowNavbar: React.FC<NavbarDesktopProps> = (props) => {
  const {
    sticky = false,
    shadow = true,
    backgroundColor,
    className = '',
    topBar,
    containerized = true,
    style: propStyle,
    singleRowVariant = 'standard',
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
    shadow && 'vtx-navbar--shadow',
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = { ...propStyle };
  if (backgroundColor) style.backgroundColor = backgroundColor;

  // Flexible Content Rendering
  const renderContent = () => {
    // 1. Balanced: Logo | Nav | Actions
    if (singleRowVariant === 'balanced') {
      return (
        <>
          <div className="vtx-navbar__left">
            {logoSection}
          </div>
          <div className="vtx-navbar__center">
            {navigationSection}
          </div>
          <div className="vtx-navbar__right">
            {searchSection}
            {iconsSection}
            {userSection}
            {actionsSection}
          </div>
        </>
      );
    }

    // 2. Search Centered: Logo+Nav | Search | Actions
    if (singleRowVariant === 'search-centered') {
      return (
        <>
          <div className="vtx-navbar__left">
            {logoSection}
            <div className="vtx-navbar__nav" style={{ marginLeft: '24px' }}>
              {navigationSection}
            </div>
          </div>
          <div className="vtx-navbar__center" style={{ width: '100%', justifyContent: 'center' }}>
            {searchSection}
          </div>
          <div className="vtx-navbar__right">
            {iconsSection}
            {userSection}
            {actionsSection}
          </div>
        </>
      );
    }

    // 3. Standard (Default): Logo + Nav | ... | Actions
    return (
      <>
        <div className="vtx-navbar__left">
          {logoSection}
          <div className="vtx-navbar__nav" style={{ marginLeft: '24px' }}>
            {navigationSection}
          </div>
        </div>
        <div className="vtx-navbar__center">
          {/* Empty center for spacing */}
        </div>
        <div className="vtx-navbar__right">
          {searchSection}
          {iconsSection}
          {userSection}
          {actionsSection}
        </div>
      </>
    );
  };

  return (
    <div className={`vtx-navbar-wrapper ${sticky ? 'vtx-navbar-wrapper--sticky' : ''}`}>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <nav className={navbarClass} style={style}>
        {containerized ? (
          <Container style={{ height: '100%' }}>
            <div className="vtx-navbar__content">
              {renderContent()}
            </div>
          </Container>
        ) : (
          <div className="vtx-navbar__content">
            {renderContent()}
          </div>
        )}
      </nav>
    </div>
  );
};
