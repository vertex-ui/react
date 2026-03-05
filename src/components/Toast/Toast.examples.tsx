"use client";

import React from 'react';
import { Toast } from './index';
import './custom-toast.css';

export const ToastExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Toast Component Showcase</h1>

      {/* Basic Default Toast */}
      <section>
        <h2>Default Variant</h2>
        <Toast>
          Toast Content
        </Toast>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-toast.css or overriding internally)</p>
        <Toast className="custom-toast">
          Custom Styled Container for Toast
        </Toast>
      </section>
    </div>
  );
};

export default ToastExamples;
