import React from 'react';
import { MultiSelect } from './index';
import './MultiSelect.examples.css';


export const MultiSelectStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>MultiSelect Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" />
          </div>
          <div>
            <h4>Disabled</h4>
            <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" disabled />
          </div>
          <div>
            <h4>Loading</h4>
            <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" loading />
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" loading disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-multiselect"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" className="custom-multiselect" />
        </div>
      </section>
    </div>
  );
};


export default MultiSelectStatesExamples;
