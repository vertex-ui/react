import React from 'react';
import { Menu } from './index';
import './Menu.examples.css';


export const MenuStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Menu Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Menu trigger={<button>Open Menu</button>} items={[{ id: '1', label: 'Item 1' }]} />
          </div>
          <div>
            <h4>Disabled</h4>
            <Menu trigger={<button>Open Menu</button>} items={[{ id: '1', label: 'Item 1' }]} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-menu"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Menu trigger={<button>Open Menu</button>} items={[{ id: '1', label: 'Item 1' }]} className="custom-menu" />
        </div>
      </section>
    </div>
  );
};


export default MenuStatesExamples;
