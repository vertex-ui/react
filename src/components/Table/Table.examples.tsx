"use client";

import React from 'react';
import { Table } from './index';
import './custom-table.css';

export const TableExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Table Component Showcase</h1>

      {/* Basic Default Table */}
      <section>
        <h2>Default Variant</h2>
        <Table>
          Table Content
        </Table>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-table.css or overriding internally)</p>
        <Table className="custom-table">
          Custom Styled Container for Table
        </Table>
      </section>
    </div>
  );
};

export default TableExamples;
