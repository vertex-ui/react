"use client";

import React from 'react';
import { Tooltip } from './index';
import './custom-tooltip.css';

export const TooltipExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Tooltip Component Showcase</h1>

      {/* Basic Default Tooltip */}
      <section>
        <h2>Default Variant</h2>
        <Tooltip>
          Tooltip Content
        </Tooltip>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-tooltip.css or overriding internally)</p>
        <Tooltip className="custom-tooltip">
          Custom Styled Container for Tooltip
        </Tooltip>
      </section>
    </div>
  );
};

export default TooltipExamples;
