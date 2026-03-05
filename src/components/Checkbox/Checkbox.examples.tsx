import React from 'react';
import { Checkbox } from './index';
import './Checkbox.examples.css';


export const CheckboxStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Checkbox Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Checkbox label="Accept terms" />
          </div>
          <div>
            <h4>Disabled</h4>
            <Checkbox label="Accept terms" disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-checkbox"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Checkbox label="Accept terms" className="custom-checkbox" />
        </div>
      </section>
    </div>
  );
};


export default CheckboxStatesExamples;
