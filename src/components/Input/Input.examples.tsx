"use client";

import React from 'react';
import { Input } from './index';
import './custom-input.css';

export const InputExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Input Component Showcase</h1>

      {/* Basic Default Input */}
      <section>
        <h2>Default Variant</h2>
        <Input>
          Input Content
        </Input>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-input.css or overriding internally)</p>
        <Input className="custom-input">
          Custom Styled Container for Input
        </Input>
      </section>
    </div>
  );
};

export default InputExamples;
