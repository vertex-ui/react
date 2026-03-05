"use client";

import React from 'react';
import { Chip } from './index';
import './custom-chip.css';

export const ChipExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Chip Component Showcase</h1>

      {/* Basic Default Chip */}
      <section>
        <h2>Default Variant</h2>
        <Chip>
          Chip Content
        </Chip>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-chip.css or overriding internally)</p>
        <Chip className="custom-chip">
          Custom Styled Container for Chip
        </Chip>
      </section>
    </div>
  );
};

export default ChipExamples;
