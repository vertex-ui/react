"use client";

import React from 'react';
import { DatePicker } from './index';
import './custom-datepicker.css';

export const DatePickerExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 DatePicker Component Showcase</h1>

      {/* Basic Default DatePicker */}
      <section>
        <h2>Default Variant</h2>
        <DatePicker>
          DatePicker Content
        </DatePicker>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-datepicker.css or overriding internally)</p>
        <DatePicker className="custom-datepicker">
          Custom Styled Container for DatePicker
        </DatePicker>
      </section>
    </div>
  );
};

export default DatePickerExamples;
