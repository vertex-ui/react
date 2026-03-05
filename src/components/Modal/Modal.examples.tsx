import React from 'react';
import { Modal } from './index';
import './Modal.examples.css';


export const ModalStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>Modal Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <Modal isOpen={true} onClose={() => {}} title="Example Modal">
          <p>Modal Content</p>
        </Modal>
          </div>
          <div>
            <h4>Disabled</h4>
            <Modal isOpen={true} onClose={() => {}} title="Example Modal" disabled>
          <p>Modal Content</p>
        </Modal>
          </div>
          <div>
            <h4>Loading</h4>
            <Modal isOpen={true} onClose={() => {}} title="Example Modal" loading>
          <p>Modal Content</p>
        </Modal>
          </div>
          <div>
            <h4>Loading & Disabled</h4>
            <Modal isOpen={true} onClose={() => {}} title="Example Modal" loading disabled>
          <p>Modal Content</p>
        </Modal>
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-modal"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Modal isOpen={true} onClose={() => {}} title="Example Modal" className="custom-modal">
          <p>Modal Content</p>
        </Modal>
        </div>
      </section>
    </div>
  );
};


export default ModalStatesExamples;
