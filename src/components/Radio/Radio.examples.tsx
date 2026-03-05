"use client";

import React from 'react';
import { Radio } from './index';
import './custom-radio.css';

export const RadioExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Radio Component Showcase</h1>

      {/* Basic Default Radio */}
      <section>
        <h2>Default Variant</h2>
        <Radio>
          Radio Content
        </Radio>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-radio.css or overriding internally)</p>
        <Radio className="custom-radio">
          Custom Styled Container for Radio
        </Radio>
      </section>
    </div>
  );
};

export default RadioExamples;
