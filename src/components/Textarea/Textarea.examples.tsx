"use client";

import React from 'react';
import { Textarea } from './index';
import './custom-textarea.css';

export const TextareaExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Textarea Component Showcase</h1>

      {/* Basic Default Textarea */}
      <section>
        <h2>Default Variant</h2>
        <Textarea>
          Textarea Content
        </Textarea>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-textarea.css or overriding internally)</p>
        <Textarea className="custom-textarea">
          Custom Styled Container for Textarea
        </Textarea>
      </section>
    </div>
  );
};

export default TextareaExamples;
