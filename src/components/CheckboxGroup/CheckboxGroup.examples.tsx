"use client";

import React from 'react';
import { CheckboxGroup } from './index';
import './custom-checkboxgroup.css';

export const CheckboxGroupExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 CheckboxGroup Component Showcase</h1>

      {/* Basic Default CheckboxGroup */}
      <section>
        <h2>Default Variant</h2>
        <CheckboxGroup>
          CheckboxGroup Content
        </CheckboxGroup>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-checkboxgroup.css or overriding internally)</p>
        <CheckboxGroup className="custom-checkboxgroup">
          Custom Styled Container for CheckboxGroup
        </CheckboxGroup>
      </section>
    </div>
  );
};

export default CheckboxGroupExamples;
