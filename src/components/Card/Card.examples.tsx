"use client";

import React from 'react';
import { Card } from './index';
import './custom-card.css';

export const CardExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Card Component Showcase</h1>

      {/* Basic Default Card */}
      <section>
        <h2>Default Variant</h2>
        <Card>
          Card Content
        </Card>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-card.css or overriding internally)</p>
        <Card className="custom-card">
          Custom Styled Container for Card
        </Card>
      </section>
    </div>
  );
};

export default CardExamples;
