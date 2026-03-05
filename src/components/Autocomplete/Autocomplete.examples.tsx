"use client";

import React from 'react';
import { Autocomplete } from './index';
import './custom-autocomplete.css';

export const AutocompleteExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Autocomplete Component Showcase</h1>

      {/* Basic Default Autocomplete */}
      <section>
        <h2>Default Variant</h2>
        <Autocomplete>
          Autocomplete Content
        </Autocomplete>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-autocomplete.css or overriding internally)</p>
        <Autocomplete className="custom-autocomplete">
          Custom Styled Container for Autocomplete
        </Autocomplete>
      </section>
    </div>
  );
};

export default AutocompleteExamples;
