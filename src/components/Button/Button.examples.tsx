"use client";

import React from 'react';
import { Button } from './index';
import './custom-button.css';

export const ButtonExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Button Component Showcase</h1>

      {/* Basic Default Button */}
      <section>
        <h2>Default Variant</h2>
        <Button>
          Button Content
        </Button>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-button.css or overriding internally)</p>
        <Button className="custom-button">
          Custom Styled Container for Button
        </Button>
      </section>
    </div>
  );
};

export default ButtonExamples;
