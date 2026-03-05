import React from 'react';
import { Autocomplete } from './index';
import './Autocomplete.examples.css';


export const AutocompleteStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Autocomplete Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." />
          </div>
          <div>
            <h4>Disabled</h4>
            <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." disabled />
          </div>
          <div>
            <h4>Loading</h4>
            <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." loading />
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." loading disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-autocomplete"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." className="custom-autocomplete" />
        </div>
      </section>
    </div>
  );
};


export default AutocompleteStatesExamples;
