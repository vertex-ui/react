import React from 'react';
import { Navbar } from './index';
import './Navbar.examples.css';


export const NavbarStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Navbar Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Navbar logo="MyBrand" items={[{ label: 'Home', href: '/' }]} />
          </div>
          <div>
            <h4>Disabled</h4>
            <Navbar logo="MyBrand" items={[{ label: 'Home', href: '/' }]} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-navbar"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Navbar logo="MyBrand" items={[{ label: 'Home', href: '/' }]} className="custom-navbar" />
        </div>
      </section>
    </div>
  );
};


export default NavbarStatesExamples;
