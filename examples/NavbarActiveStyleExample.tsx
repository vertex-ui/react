import React from 'react';
import { Navbar, NavigationItem } from '../src/components/Navbar';
import { Badge } from '../src/components/Badge';

// Example usage of the new active styling props

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    active: true,
    activeColor: 'primary' // Uses theme primary color
  },
  {
    label: 'Products',
    href: '/products',
    active: false,
    activeColor: 'secondary' // Uses theme secondary color
  },
  {
    label: 'Services',
    href: '/services', 
    active: false,
    activeColor: 'success' // Uses theme success color
  },
  {
    label: 'About',
    href: '/about',
    active: false,
    activeColor: '#ff6b6b' // Custom color
  },
  {
    label: 'Contact',
    href: '/contact',
    active: false,
    // Will use navbar default activeColor
  }
];

export const NavbarExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Default Underline Style (Primary Color)</h2>
      <Navbar
        brandText="My Brand"
        navigationItems={navigationItems}
        activeColor="primary"
        activeIndicatorStyle="underline"
        activeIndicatorBehavior="always"
      />
      
      <br /><br />
      
      <h2>Background Style (Secondary Color)</h2>
      <Navbar
        brandText="My Brand"
        navigationItems={navigationItems}
        activeColor="secondary"
        activeIndicatorStyle="background"
        activeIndicatorBehavior="always"
      />
      
      <br /><br />
      
      <h2>Underline on Hover Only</h2>
      <Navbar
        brandText="My Brand"
        navigationItems={navigationItems}
        activeColor="info"
        activeIndicatorStyle="underline"
        activeIndicatorBehavior="hover"
      />
      
      <br /><br />
      
      <h2>No Active Indicator (Clean)</h2>
      <Navbar
        brandText="My Brand"
        navigationItems={navigationItems}
        activeColor="success"
        activeIndicatorStyle="none"
        activeIndicatorBehavior="never"
      />
      
      <br /><br />
      
      <h2>Custom Color with Mixed Individual Settings</h2>
      <Navbar
        brandText="My Brand"
        navigationItems={[
          {
            label: 'Red Active',
            href: '/',
            active: true,
            activeColor: '#e74c3c'
          },
          {
            label: 'Blue Active',
            href: '/blue',
            active: false,
            activeColor: '#3498db'
          },
          {
            label: 'Green Active',
            href: '/green', 
            active: false,
            activeColor: '#2ecc71'
          },
          {
            label: 'Default Color',
            href: '/default',
            active: false
            // Uses navbar activeColor
          }
        ]}
        activeColor="warning" // Default for items without specific activeColor
        activeIndicatorStyle="underline"
        activeIndicatorBehavior="always"
      />
    </div>
  );
};

export default NavbarExample;