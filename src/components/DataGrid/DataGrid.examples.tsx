"use client";

import React from 'react';
import { DataGrid } from './index';
import './custom-datagrid.css';

export const DataGridExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 DataGrid Component Showcase</h1>

      {/* Basic Default DataGrid */}
      <section>
        <h2>Default Variant</h2>
        <DataGrid>
          DataGrid Content
        </DataGrid>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-datagrid.css or overriding internally)</p>
        <DataGrid className="custom-datagrid">
          Custom Styled Container for DataGrid
        </DataGrid>
      </section>
    </div>
  );
};

export default DataGridExamples;
