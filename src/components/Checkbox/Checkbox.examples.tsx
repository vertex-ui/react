"use client";

import React from 'react';
import { Checkbox } from './index';
import './custom-checkbox.css';

export const CheckboxExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Checkbox Component Showcase</h1>

      {/* Basic Default Checkbox */}
      <section>
        <h2>Default Variant</h2>
        <Checkbox>
          Checkbox Content
        </Checkbox>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-checkbox.css or overriding internally)</p>
        <Checkbox className="custom-checkbox">
          Custom Styled Container for Checkbox
        </Checkbox>
      </section>
    </div>
  );
};

export default CheckboxExamples;
