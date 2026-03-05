"use client";

import React from 'react';
import { Skeleton } from './index';
import './custom-skeleton.css';

export const SkeletonExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Skeleton Component Showcase</h1>

      {/* Basic Default Skeleton */}
      <section>
        <h2>Default Variant</h2>
        <Skeleton>
          Skeleton Content
        </Skeleton>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-skeleton.css or overriding internally)</p>
        <Skeleton className="custom-skeleton">
          Custom Styled Container for Skeleton
        </Skeleton>
      </section>
    </div>
  );
};

export default SkeletonExamples;
