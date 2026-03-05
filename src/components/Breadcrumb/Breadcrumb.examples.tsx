"use client";

import React from 'react';
import { Breadcrumb } from './index';
import './custom-breadcrumb.css';

export const BreadcrumbExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Breadcrumb Component Showcase</h1>

      {/* Basic Default Breadcrumb */}
      <section>
        <h2>Default Variant</h2>
        <Breadcrumb>
          Breadcrumb Content
        </Breadcrumb>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-breadcrumb.css or overriding internally)</p>
        <Breadcrumb className="custom-breadcrumb">
          Custom Styled Container for Breadcrumb
        </Breadcrumb>
      </section>
    </div>
  );
};

export default BreadcrumbExamples;
