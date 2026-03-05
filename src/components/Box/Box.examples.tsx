"use client";

import React from 'react';
import { Box } from './index';
import './custom-box.css';

export const BoxExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Box Component Showcase</h1>

      {/* Basic Default Box */}
      <section>
        <h2>Default Variant</h2>
        <Box>
          Box Content
        </Box>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-box.css or overriding internally)</p>
        <Box className="custom-box">
          Custom Styled Container for Box
        </Box>
      </section>
    </div>
  );
};

export default BoxExamples;
