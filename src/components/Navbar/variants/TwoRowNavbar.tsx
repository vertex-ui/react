import React from 'react';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';
import { TopBar } from '../TopBar';
import { Container } from '../../Container';
import { useThemeContext } from '../../../theme';
import { NavItem } from '../NavItem';
import { Box } from '../../Box';
import { Divider } from '../../Divider';

const TwoRowNavbar: React.FC<NavbarBaseProps> = (props) => {
  const {
    sticky = false,
    shadow = true,
    backgroundColor,
    className = '',
    containerized = true,
    contentNodes,
    style: propStyle,
    fullWidthSubMenu = false,
    showNavSeparators = false,
    secondRowPrimaryBackground = false,
    uppercaseNavItems = false,
    navigationItems = [],
    hoverColor,
  } = props;

  const { theme } = useThemeContext();

  const { logoSection, searchSection, iconsSection, userSection, actionsSection } =
    useNavbarSections(props);

  const navbarStyle: React.CSSProperties = {
    height: 'auto',
    flexDirection: 'column',
    ...propStyle,
  };
  if (backgroundColor) navbarStyle.backgroundColor = backgroundColor;

  const secondRowStyle: React.CSSProperties = {
    height: fullWidthSubMenu ? '48px' : '56px',
    width: '100%',
  };

  if (secondRowPrimaryBackground) {
    secondRowStyle.backgroundColor = 'var(--vtx-color-primary-600)';
    secondRowStyle.color =
      theme.colorContrast.primary === 'light'
        ? 'var(--vtx-color-neutral-900)'
        : 'var(--vtx-color-neutral-50)';
  }

  // Top row content
  const topRow = (
    <div className="vtx-navbar__content pt-6 pb-3">
      <div className="vtx-navbar__left">
        {logoSection}
        {searchSection}
      </div>
      <div className="vtx-navbar__right">
        {contentNodes?.map((node, i) => (
          <div key={i}>{node}</div>
        ))}
        {iconsSection}
        {userSection}
        {actionsSection}
      </div>
    </div>
  );

  // Bottom row navigation
  const navClasses = [
    'vtx-navbar__nav',
    fullWidthSubMenu && 'vtx-navbar__nav--full-width',
    showNavSeparators && 'vtx-navbar__nav--with-separators',
  ]
    .filter(Boolean)
    .join(' ');

  const navigationContent = (
    <nav className={navClasses}>
      {navigationItems.map((item, index) => (
        <div key={index} className="vtx-navbar__nav-item-wrapper">
          <NavItem
            item={item}
            uppercase={uppercaseNavItems}
            linkComponent={props.linkComponent}
            defaultHoverColor={hoverColor}
          />
        </div>
      ))}
    </nav>
  );

  const bottomRow = (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      className="two-row-navbar__content"
      style={secondRowStyle}
    >
      {navigationContent}
    </Box>
  );

  return (
    <div
      className={`vtx-navbar-wrapper ${sticky ? 'vtx-navbar-wrapper--sticky' : ''} ${className}`}
    >
      {props.topBar && <TopBar config={props.topBar} containerized={containerized} />}

      <div
        className={`vtx-navbar vtx-navbar--two-row ${shadow ? 'vtx-navbar--shadow' : ''}`}
        style={navbarStyle}
      >
        {containerized ? (
          <>
            <Container>{topRow}</Container>
            <Divider />
            {fullWidthSubMenu ? bottomRow : <Container>{bottomRow}</Container>}
          </>
        ) : (
          <>
            {topRow}
            <Divider />
            {bottomRow}
          </>
        )}
      </div>
    </div>
  );
};

export { TwoRowNavbar };
