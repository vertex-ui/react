import React from 'react';
import { Chip } from './index';
import './Chip.examples.css';


export const ChipStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Chip Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Chip label="Chip Text" />
          </div>
          <div>
            <h4>Disabled</h4>
            <Chip label="Chip Text" disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-chip"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Chip label="Chip Text" className="custom-chip" />
        </div>
      </section>
    </div>
  );
};


export default ChipStatesExamples;
