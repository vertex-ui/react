"use client";

import React from 'react';
import { Grid } from './index';
import './custom-grid.css';

export const GridExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Grid Component Showcase</h1>

      {/* Basic Default Grid */}
      <section>
        <h2>Default Variant</h2>
        <Grid>
          Grid Content
        </Grid>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-grid.css or overriding internally)</p>
        <Grid className="custom-grid">
          Custom Styled Container for Grid
        </Grid>
      </section>
    </div>
  );
};

export default GridExamples;
