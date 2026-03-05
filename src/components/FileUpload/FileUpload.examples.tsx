import React from 'react';
import { FileUpload } from './index';
import './FileUpload.examples.css';


export const FileUploadStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>FileUpload Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <FileUpload onUpload={(files) => console.log(files)} />
          </div>
          <div>
            <h4>Disabled</h4>
            <FileUpload onUpload={(files) => console.log(files)} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-fileupload"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <FileUpload onUpload={(files) => console.log(files)} className="custom-fileupload" />
        </div>
      </section>
    </div>
  );
};


export default FileUploadStatesExamples;
