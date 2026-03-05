"use client";

import React from 'react';
import { Header } from './index';
import './custom-header.css';

export const HeaderExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Header Component Showcase</h1>

      {/* Basic Default Header */}
      <section>
        <h2>Default Variant</h2>
        <Header>
          Header Content
        </Header>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-header.css or overriding internally)</p>
        <Header className="custom-header">
          Custom Styled Container for Header
        </Header>
      </section>
    </div>
  );
};

export default HeaderExamples;
