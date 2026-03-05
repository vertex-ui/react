"use client";

import React from 'react';
import { Container } from './index';
import './custom-container.css';

export const ContainerExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Container Component Showcase</h1>

      {/* Basic Default Container */}
      <section>
        <h2>Default Variant</h2>
        <Container>
          Container Content
        </Container>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-container.css or overriding internally)</p>
        <Container className="custom-container">
          Custom Styled Container for Container
        </Container>
      </section>
    </div>
  );
};

export default ContainerExamples;
