"use client";

import React from 'react';
import { Menu } from './index';
import './custom-menu.css';

export const MenuExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Menu Component Showcase</h1>

      {/* Basic Default Menu */}
      <section>
        <h2>Default Variant</h2>
        <Menu>
          Menu Content
        </Menu>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-menu.css or overriding internally)</p>
        <Menu className="custom-menu">
          Custom Styled Container for Menu
        </Menu>
      </section>
    </div>
  );
};

export default MenuExamples;
