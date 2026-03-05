"use client";

import React from 'react';
import { Widget } from './index';
import './custom-widget.css';

export const WidgetExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Widget Component Showcase</h1>

      {/* Basic Default Widget */}
      <section>
        <h2>Default Variant</h2>
        <Widget>
          Widget Content
        </Widget>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-widget.css or overriding internally)</p>
        <Widget className="custom-widget">
          Custom Styled Container for Widget
        </Widget>
      </section>
    </div>
  );
};

export default WidgetExamples;
