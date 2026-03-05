"use client";

import React from 'react';
import { MultiSelect } from './index';
import './custom-multiselect.css';

export const MultiSelectExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 MultiSelect Component Showcase</h1>

      {/* Basic Default MultiSelect */}
      <section>
        <h2>Default Variant</h2>
        <MultiSelect>
          MultiSelect Content
        </MultiSelect>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-multiselect.css or overriding internally)</p>
        <MultiSelect className="custom-multiselect">
          Custom Styled Container for MultiSelect
        </MultiSelect>
      </section>
    </div>
  );
};

export default MultiSelectExamples;
