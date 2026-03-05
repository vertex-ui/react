"use client";

import React from 'react';
import { ToggleButton } from './index';
import './custom-togglebutton.css';

export const ToggleButtonExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 ToggleButton Component Showcase</h1>

      {/* Basic Default ToggleButton */}
      <section>
        <h2>Default Variant</h2>
        <ToggleButton>
          ToggleButton Content
        </ToggleButton>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-togglebutton.css or overriding internally)</p>
        <ToggleButton className="custom-togglebutton">
          Custom Styled Container for ToggleButton
        </ToggleButton>
      </section>
    </div>
  );
};

export default ToggleButtonExamples;
