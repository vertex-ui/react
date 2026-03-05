import React from 'react';
import { ToggleButton } from './index';
import './ToggleButton.examples.css';


export const ToggleButtonStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>ToggleButton Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <ToggleButton label="Toggle Option" checked={true} onChange={() => {}} />
          </div>
          <div>
            <h4>Disabled</h4>
            <ToggleButton label="Toggle Option" checked={true} onChange={() => {}} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-togglebutton"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ToggleButton label="Toggle Option" checked={true} onChange={() => {}} className="custom-togglebutton" />
        </div>
      </section>
    </div>
  );
};


export default ToggleButtonStatesExamples;
