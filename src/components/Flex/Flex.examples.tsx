"use client";

import React from 'react';
import { Flex } from './index';
import './custom-flex.css';

export const FlexExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Flex Component Showcase</h1>

      {/* Basic Default Flex */}
      <section>
        <h2>Default Variant</h2>
        <Flex>
          Flex Content
        </Flex>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-flex.css or overriding internally)</p>
        <Flex className="custom-flex">
          Custom Styled Container for Flex
        </Flex>
      </section>
    </div>
  );
};

export default FlexExamples;
