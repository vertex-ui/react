"use client";

import React, { useState, useEffect } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import {
  NavbarResponsiveProps
} from './types';
import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';
import './Navbar.css';

// Re-export types
export * from './types';

// Custom hook for responsive behavior
const useIsMobile = (breakpoint: number): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query string
    const query = `(max-width: ${breakpoint}px)`;

    // Create matcher
    const matcher = window.matchMedia(query);

    // Initial check
    setIsMobile(matcher.matches);

    // Change handler
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Modern event listener
    if (matcher.addEventListener) {
      matcher.addEventListener('change', handleChange);
      return () => matcher.removeEventListener('change', handleChange);
    }
    // Fallback for older browsers (though unlikely needed for React 18+ targets)
    else {
      matcher.addListener(handleChange);
      return () => matcher.removeListener(handleChange);
    }
  }, [breakpoint]);

  return isMobile;
};

const NavbarResponsive: React.FC<NavbarResponsiveProps> = ({
  desktopLayout = 'single-row',
  mobileBreakpoint = 1024,
  linkComponent,
  ...props
}) => {
  const isMobile = useIsMobile(mobileBreakpoint);

  // Propagate all props to the active component
  // Note: mobileBreakpoint and desktopLayout are consumed here or passed appropriately

  if (isMobile) {
    return (
      <NavbarMobile
        linkComponent={linkComponent}
        {...props}
      />
    );
  }

  return (
    <NavbarDesktop
      layout={desktopLayout}
      linkComponent={linkComponent}
      {...props}
    />
  );
};

// Exports
export const Navbar = withParsedClasses(NavbarResponsive) as React.FC<NavbarResponsiveProps>;

// Attach sub-components for advanced composition if needed, though mostly usage should be via <Navbar />
export const NavbarComponents = {
  Desktop: NavbarDesktop,
  Mobile: NavbarMobile
};

export default Navbar;
