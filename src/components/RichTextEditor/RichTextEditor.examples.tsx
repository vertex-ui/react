import React from 'react';
import { RichTextEditor } from './index';
import './RichTextEditor.examples.css';


export const RichTextEditorStatesExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h2>RichTextEditor Examples</h2>

      <section>
        <h3>Standard States</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4>Normal</h4>
            <RichTextEditor value="<p>Hello World</p>" onChange={() => {}} />
          </div>
          <div>
            <h4>Disabled</h4>
            <RichTextEditor value="<p>Hello World</p>" onChange={() => {}} disabled />
          </div>
        </div>
      </section>

      <section>
        <h3>Custom CSS Override</h3>
        <p>Using <code>className="custom-richtexteditor"</code> to override standard properties like background-color, color, border-radius, border-color.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <RichTextEditor value="<p>Hello World</p>" onChange={() => {}} className="custom-richtexteditor" />
        </div>
      </section>
    </div>
  );
};


export default RichTextEditorStatesExamples;
