import React from 'react';
import { Tooltip } from './index';
import './Tooltip.examples.css';


export const TooltipStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Tooltip Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Tooltip content="This is a tooltip">
          <span>Hover me</span>
        </Tooltip>
          </div>
          <div>
            <h4>Disabled</h4>
            <Tooltip content="This is a tooltip" disabled>
          <span>Hover me</span>
        </Tooltip>
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-tooltip"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Tooltip content="This is a tooltip" className="custom-tooltip">
          <span>Hover me</span>
        </Tooltip>
        </div>
      </section>
    </div>
  );
};


export default TooltipStatesExamples;
