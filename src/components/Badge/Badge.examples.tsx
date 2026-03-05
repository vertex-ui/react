"use client";

import React from 'react';
import { Badge } from './index';
import './custom-badge.css';

export const BadgeExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Badge Component Showcase</h1>

      {/* Basic Default Badge */}
      <section>
        <h2>Default Variant</h2>
        <Badge>
          Badge Content
        </Badge>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-badge.css or overriding internally)</p>
        <Badge className="custom-badge">
          Custom Styled Container for Badge
        </Badge>
      </section>
    </div>
  );
};

export default BadgeExamples;
