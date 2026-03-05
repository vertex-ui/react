"use client";

import React from 'react';
import { Alert } from './index';
import './custom-alert.css';

export const AlertExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Alert Component Showcase</h1>

      {/* Basic Default Alert */}
      <section>
        <h2>Default Variant</h2>
        <Alert>
          Alert Content
        </Alert>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-alert.css or overriding internally)</p>
        <Alert className="custom-alert">
          Custom Styled Container for Alert
        </Alert>
      </section>
    </div>
  );
};

export default AlertExamples;
