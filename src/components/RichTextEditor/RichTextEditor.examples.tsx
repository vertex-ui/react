"use client";

import React from 'react';
import { RichTextEditor } from './index';
import './custom-richtexteditor.css';

export const RichTextEditorExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 RichTextEditor Component Showcase</h1>

      {/* Basic Default RichTextEditor */}
      <section>
        <h2>Default Variant</h2>
        <RichTextEditor>
          RichTextEditor Content
        </RichTextEditor>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-richtexteditor.css or overriding internally)</p>
        <RichTextEditor className="custom-richtexteditor">
          Custom Styled Container for RichTextEditor
        </RichTextEditor>
      </section>
    </div>
  );
};

export default RichTextEditorExamples;
