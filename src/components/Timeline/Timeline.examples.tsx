"use client";

import React from 'react';
import { Timeline } from './index';
import './custom-timeline.css';

export const TimelineExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Timeline Component Showcase</h1>

      {/* Basic Default Timeline */}
      <section>
        <h2>Default Variant</h2>
        <Timeline>
          Timeline Content
        </Timeline>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-timeline.css or overriding internally)</p>
        <Timeline className="custom-timeline">
          Custom Styled Container for Timeline
        </Timeline>
      </section>
    </div>
  );
};

export default TimelineExamples;
