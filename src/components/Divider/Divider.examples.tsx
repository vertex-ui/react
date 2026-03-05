"use client";

import React from 'react';
import { Divider } from './index';
import './custom-divider.css';

export const DividerExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Divider Component Showcase</h1>

      {/* Basic Default Divider */}
      <section>
        <h2>Default Variant</h2>
        <Divider>
          Divider Content
        </Divider>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-divider.css or overriding internally)</p>
        <Divider className="custom-divider">
          Custom Styled Container for Divider
        </Divider>
      </section>
    </div>
  );
};

export default DividerExamples;
