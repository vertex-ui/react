import React from 'react';
import { Navbar, NavigationItem } from '../src/components/Navbar';

// Simple test of the new active styling functionality
const TestNavbar: React.FC = () => {
  const navItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/',
      active: true,
      activeColor: 'primary'
    },
    {
      label: 'Products',
      href: '/products',
      active: false,
      activeColor: 'secondary'
    },
    {
      label: 'Custom Color',
      href: '/custom',
      active: false,
      activeColor: '#ff6b6b'
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h3>Navbar with Active Styling Options</h3>
      
      {/* Test different active indicator styles */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Underline Style (Default)</h4>
        <Navbar
          brandText="Test Brand"
          navigationItems={navItems}
          activeColor="primary"
          activeIndicatorStyle="underline"
          activeIndicatorBehavior="always"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Background Style</h4>
        <Navbar
          brandText="Test Brand"
          navigationItems={navItems}
          activeColor="success"
          activeIndicatorStyle="background"
          activeIndicatorBehavior="always"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Hover Only Indicators</h4>
        <Navbar
          brandText="Test Brand"
          navigationItems={navItems}
          activeColor="warning"
          activeIndicatorStyle="underline"
          activeIndicatorBehavior="hover"
        />
      </div>
    </div>
  );
};

export default TestNavbar;