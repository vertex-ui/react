"use client";

import React from 'react';
import { Link } from './index';
import './custom-link.css';

export const LinkExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Link Component Showcase</h1>

      {/* Basic Default Link */}
      <section>
        <h2>Default Variant</h2>
        <Link>
          Link Content
        </Link>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-link.css or overriding internally)</p>
        <Link className="custom-link">
          Custom Styled Container for Link
        </Link>
      </section>
    </div>
  );
};

export default LinkExamples;
