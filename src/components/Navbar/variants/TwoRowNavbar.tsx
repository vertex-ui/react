import React from 'react';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { Container } from '../../Container';

export const TwoRowNavbar: React.FC<NavbarBaseProps> = (props) => {
  const {
    sticky = false,
    shadow = true,
    backgroundColor,
    className = '',
    containerized = true,
    contentNodes,
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
    'vtx-navbar--two-row',
    sticky && 'vtx-navbar--sticky',
    shadow && 'vtx-navbar--shadow',
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = { ...propStyle };
  if (backgroundColor) style.backgroundColor = backgroundColor;

  const topRow = (
    <div className="vtx-navbar__row-top">
      {containerized ? (
        <Container style={{ height: '100%' }}>
          <div className="vtx-navbar__content">
            {logoSection}
            <div style={{ flex: 1, maxWidth: '640px', margin: '0 2rem' }}>
              {searchSection}
            </div>
            <div className="vtx-navbar__right">
              {contentNodes && contentNodes.map((node, index) => (
                <React.Fragment key={index}>{node}</React.Fragment>
              ))}
              {iconsSection}
              {userSection}
              {actionsSection}
            </div>
          </div>
        </Container>
      ) : (
        <div className="vtx-navbar__content" style={{ padding: '0 1.5rem' }}>
          {logoSection}
          <div style={{ flex: 1, maxWidth: '640px', margin: '0 2rem' }}>
            {searchSection}
          </div>
          <div className="vtx-navbar__right">
            {contentNodes && contentNodes.map((node, index) => (
              <React.Fragment key={index}>{node}</React.Fragment>
            ))}
            {iconsSection}
            {userSection}
            {actionsSection}
          </div>
        </div>
      )}
    </div>
  );

  const bottomRow = (
    <div className="vtx-navbar__row-bottom">
      {containerized ? (
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {navigationSection}
          </div>
        </Container>
      ) : (
        <div style={{ padding: '0 1.5rem', display: 'flex', justifyContent: 'center' }}>
          {navigationSection}
        </div>
      )}
    </div>
  );

  return (
    <nav className={navbarClass} style={style}>
      {topRow}
      {bottomRow}
    </nav>
  );
};
