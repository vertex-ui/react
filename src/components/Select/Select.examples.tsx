import React from 'react';
import { Select } from './index';
import './Select.examples.css';


export const SelectStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Select Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Select options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select an option" />
          </div>
          <div>
            <h4>Disabled</h4>
            <Select options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select an option" disabled />
          </div>
          <div>
            <h4>Loading</h4>
            <Select options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select an option" loading />
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <Select options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select an option" loading disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-select"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Select options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select an option" className="custom-select" />
        </div>
      </section>
    </div>
  );
};


export default SelectStatesExamples;
