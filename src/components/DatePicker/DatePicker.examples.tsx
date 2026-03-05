import React from 'react';
import { DatePicker } from './index';
import './DatePicker.examples.css';


export const DatePickerStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>DatePicker Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <DatePicker onChange={(date) => console.log(date)} />
          </div>
          <div>
            <h4>Disabled</h4>
            <DatePicker onChange={(date) => console.log(date)} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-datepicker"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <DatePicker onChange={(date) => console.log(date)} className="custom-datepicker" />
        </div>
      </section>
    </div>
  );
};


export default DatePickerStatesExamples;
