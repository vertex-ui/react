import React from 'react';
import { Button } from './index';
import './Button.examples.css';


export const ButtonStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Button Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Button onClick={() => alert('Clicked')}>
          Click Me
        </Button>
          </div>
          <div>
            <h4>Disabled</h4>
            <Button onClick={() => alert('Clicked')} disabled>
          Click Me
        </Button>
          </div>
          <div>
            <h4>Loading</h4>
            <Button onClick={() => alert('Clicked')} loading>
          Click Me
        </Button>
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <Button onClick={() => alert('Clicked')} loading disabled>
          Click Me
        </Button>
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-button"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button onClick={() => alert('Clicked')} className="custom-button">
          Click Me
        </Button>
        </div>
      </section>
    </div>
  );
};


export default ButtonStatesExamples;
