import React from 'react';
import { Radio } from './index';
import './Radio.examples.css';


export const RadioStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Radio Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Radio label="Select me" value="1" />
          </div>
          <div>
            <h4>Disabled</h4>
            <Radio label="Select me" value="1" disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-radio"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Radio label="Select me" value="1" className="custom-radio" />
        </div>
      </section>
    </div>
  );
};


export default RadioStatesExamples;
