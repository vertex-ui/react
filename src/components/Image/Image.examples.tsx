"use client";

import React from 'react';
import { Image } from './index';
import './custom-image.css';

export const ImageExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Image Component Showcase</h1>

      {/* Basic Default Image */}
      <section>
        <h2>Default Variant</h2>
        <Image>
          Image Content
        </Image>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-image.css or overriding internally)</p>
        <Image className="custom-image">
          Custom Styled Container for Image
        </Image>
      </section>
    </div>
  );
};

export default ImageExamples;
