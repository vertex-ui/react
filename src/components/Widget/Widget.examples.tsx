import React from 'react';
import { Widget } from './index';
import './Widget.examples.css';


export const WidgetStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Widget Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Widget config={{ type: 'text', data: { content: 'Widget Content' } }} />
          </div>
          <div>
            <h4>Disabled</h4>
            <Widget config={{ type: 'text', data: { content: 'Widget Content' } }} disabled />
          </div>
          <div>
            <h4>Loading</h4>
            <Widget config={{ type: 'text', data: { content: 'Widget Content' } }} loading />
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <Widget config={{ type: 'text', data: { content: 'Widget Content' } }} loading disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-widget"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Widget config={{ type: 'text', data: { content: 'Widget Content' } }} className="custom-widget" />
        </div>
      </section>
    </div>
  );
};


export default WidgetStatesExamples;
