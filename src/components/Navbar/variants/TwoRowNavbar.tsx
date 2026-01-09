import React from 'react';
import { Flex } from '../../Flex';
import { Container } from '../../Container';
import { NavbarBaseProps } from '../types';
import { useNavbarSections } from '../useNavbarSections';

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
    <Flex align="center" justify="between" gap={32} style={{ padding: '0.75rem 0', minHeight: '4.5rem', borderBottom: '1px solid var(--vtx-border-color, #e2e8f0)' }}>
      {logoSection}
      <div style={{ flex: 1, maxWidth: '600px', marginLeft: '2rem', marginRight: '2rem' }}>
        {searchSection}
      </div>
      <Flex align="center" gap={24}>
        {contentNodes && contentNodes.map((node, index) => (
          <React.Fragment key={index}>{node}</React.Fragment>
        ))}
        {userSection}
        {iconsSection}
        {actionsSection}
      </Flex>
    </Flex>
  );

  const bottomRow = (
    <Flex align="center" justify="center" style={{ padding: '1rem 0', minHeight: '4rem' }}>
      {navigationSection}
    </Flex>
  );

  return (
    <nav className={navbarClass} style={style}>
      {containerized ? (
        <Container>
          {topRow}
          {bottomRow}
        </Container>
      ) : (
        <div style={{ padding: '0 1.5rem' }}>
          {topRow}
          {bottomRow}
        </div>
      )}
    </nav>
  );
};
