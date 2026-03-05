"use client";

import React from 'react';
import { Modal } from './index';
import './custom-modal.css';

export const ModalExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Modal Component Showcase</h1>

      {/* Basic Default Modal */}
      <section>
        <h2>Default Variant</h2>
        <Modal>
          Modal Content
        </Modal>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-modal.css or overriding internally)</p>
        <Modal className="custom-modal">
          Custom Styled Container for Modal
        </Modal>
      </section>
    </div>
  );
};

export default ModalExamples;
