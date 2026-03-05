import React from 'react';
import { Input } from './index';
import './Input.examples.css';


export const InputStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Input Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Input placeholder="Enter value..." />
          </div>
          <div>
            <h4>Disabled</h4>
            <Input placeholder="Enter value..." disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-input"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Input placeholder="Enter value..." className="custom-input" />
        </div>
      </section>
    </div>
  );
};


export default InputStatesExamples;
