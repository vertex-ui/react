"use client";

import React from 'react';
import { FormControl } from './index';
import './custom-formcontrol.css';

export const FormControlExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 FormControl Component Showcase</h1>

      {/* Basic Default FormControl */}
      <section>
        <h2>Default Variant</h2>
        <FormControl>
          FormControl Content
        </FormControl>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-formcontrol.css or overriding internally)</p>
        <FormControl className="custom-formcontrol">
          Custom Styled Container for FormControl
        </FormControl>
      </section>
    </div>
  );
};

export default FormControlExamples;
