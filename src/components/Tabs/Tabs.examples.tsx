"use client";

import React from 'react';
import { Tabs } from './index';
import './custom-tabs.css';

export const TabsExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Tabs Component Showcase</h1>

      {/* Basic Default Tabs */}
      <section>
        <h2>Default Variant</h2>
        <Tabs>
          Tabs Content
        </Tabs>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-tabs.css or overriding internally)</p>
        <Tabs className="custom-tabs">
          Custom Styled Container for Tabs
        </Tabs>
      </section>
    </div>
  );
};

export default TabsExamples;
