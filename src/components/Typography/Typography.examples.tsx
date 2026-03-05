"use client";

import React from 'react';
import { Typography } from './index';
import './custom-typography.css';

export const TypographyExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Typography Component Showcase</h1>

      {/* Basic Default Typography */}
      <section>
        <h2>Default Variant</h2>
        <Typography>
          Typography Content
        </Typography>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-typography.css or overriding internally)</p>
        <Typography className="custom-typography">
          Custom Styled Container for Typography
        </Typography>
      </section>
    </div>
  );
};

export default TypographyExamples;
