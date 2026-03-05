"use client";

import React from 'react';
import { RadioGroup } from './index';
import './custom-radiogroup.css';

export const RadioGroupExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 RadioGroup Component Showcase</h1>

      {/* Basic Default RadioGroup */}
      <section>
        <h2>Default Variant</h2>
        <RadioGroup>
          RadioGroup Content
        </RadioGroup>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-radiogroup.css or overriding internally)</p>
        <RadioGroup className="custom-radiogroup">
          Custom Styled Container for RadioGroup
        </RadioGroup>
      </section>
    </div>
  );
};

export default RadioGroupExamples;
