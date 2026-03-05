import React from 'react';
import { Link } from './index';
import './Link.examples.css';


export const LinkStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Link Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Link href="#">
          Click Here
        </Link>
          </div>
          <div>
            <h4>Disabled</h4>
            <Link href="#" disabled>
          Click Here
        </Link>
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-link"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="custom-link">
          Click Here
        </Link>
        </div>
      </section>
    </div>
  );
};


export default LinkStatesExamples;
