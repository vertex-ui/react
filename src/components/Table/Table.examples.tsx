import React from 'react';
import { Table } from './index';
import './Table.examples.css';


export const TableStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Table Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Table columns={[{ key: 'id', header: 'ID' }]} data={[{ id: 1 }]} />
          </div>
          <div>
            <h4>Loading</h4>
            <Table columns={[{ key: 'id', header: 'ID' }]} data={[{ id: 1 }]} loading />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-table"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Table columns={[{ key: 'id', header: 'ID' }]} data={[{ id: 1 }]} className="custom-table" />
        </div>
      </section>
    </div>
  );
};


export default TableStatesExamples;
