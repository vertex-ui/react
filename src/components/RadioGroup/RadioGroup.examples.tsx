import React from 'react';
import { RadioGroup } from './index';
import './RadioGroup.examples.css';


export const RadioGroupStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>RadioGroup Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <RadioGroup options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} />
          </div>
          <div>
            <h4>Disabled</h4>
            <RadioGroup options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-radiogroup"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <RadioGroup options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} className="custom-radiogroup" />
        </div>
      </section>
    </div>
  );
};


export default RadioGroupStatesExamples;
