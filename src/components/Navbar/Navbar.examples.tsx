"use client";

import React from 'react';
import { Navbar } from './index';
import './custom-navbar.css';

export const NavbarExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Navbar Component Showcase</h1>

      {/* Basic Default Navbar */}
      <section>
        <h2>Default Variant</h2>
        <Navbar>
          Navbar Content
        </Navbar>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-navbar.css or overriding internally)</p>
        <Navbar className="custom-navbar">
          Custom Styled Container for Navbar
        </Navbar>
      </section>
    </div>
  );
};

export default NavbarExamples;
