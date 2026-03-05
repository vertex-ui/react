import React from 'react';
import { FormControl } from './index';
import './FormControl.examples.css';


export const FormControlStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>FormControl Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <FormControl label="Email Address">
          <input type="email" />
        </FormControl>
          </div>
          <div>
            <h4>Disabled</h4>
            <FormControl label="Email Address" disabled>
          <input type="email" />
        </FormControl>
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-formcontrol"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <FormControl label="Email Address" className="custom-formcontrol">
          <input type="email" />
        </FormControl>
        </div>
      </section>
    </div>
  );
};


export default FormControlStatesExamples;
