import React from 'react';
import { DataGrid } from './index';
import './DataGrid.examples.css';


export const DataGridStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>DataGrid Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <DataGrid columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]} data={[{ id: 1, name: 'John Doe' }]} />
          </div>
          <div>
            <h4>Loading</h4>
            <DataGrid columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]} data={[{ id: 1, name: 'John Doe' }]} loading />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-datagrid"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <DataGrid columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]} data={[{ id: 1, name: 'John Doe' }]} className="custom-datagrid" />
        </div>
      </section>
    </div>
  );
};


export default DataGridStatesExamples;
