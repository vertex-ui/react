"use client";

import React from 'react';
import { Select } from './index';
import './custom-select.css';

export const SelectExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Select Component Showcase</h1>

      {/* Basic Default Select */}
      <section>
        <h2>Default Variant</h2>
        <Select>
          Select Content
        </Select>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-select.css or overriding internally)</p>
        <Select className="custom-select">
          Custom Styled Container for Select
        </Select>
      </section>
    </div>
  );
};

export default SelectExamples;
