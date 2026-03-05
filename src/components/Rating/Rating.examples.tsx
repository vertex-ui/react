"use client";

import React from 'react';
import { Rating } from './index';
import './custom-rating.css';

export const RatingExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Rating Component Showcase</h1>

      {/* Basic Default Rating */}
      <section>
        <h2>Default Variant</h2>
        <Rating>
          Rating Content
        </Rating>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-rating.css or overriding internally)</p>
        <Rating className="custom-rating">
          Custom Styled Container for Rating
        </Rating>
      </section>
    </div>
  );
};

export default RatingExamples;
