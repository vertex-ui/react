"use client";

import React from 'react';
import { FileUpload } from './index';
import './custom-fileupload.css';

export const FileUploadExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 FileUpload Component Showcase</h1>

      {/* Basic Default FileUpload */}
      <section>
        <h2>Default Variant</h2>
        <FileUpload>
          FileUpload Content
        </FileUpload>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-fileupload.css or overriding internally)</p>
        <FileUpload className="custom-fileupload">
          Custom Styled Container for FileUpload
        </FileUpload>
      </section>
    </div>
  );
};

export default FileUploadExamples;
