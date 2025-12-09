import React, { useState } from 'react';
import { Checkbox } from './src/components/Checkbox';
import { ThemeProvider } from './src/theme/ThemeProvider';

const TestCheckbox = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <ThemeProvider defaultSize="md">
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2>Checkbox Component Tests</h2>
        
        {/* Size variations */}
        <div>
          <h3>Sizes</h3>
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox" />
          <Checkbox size="lg" label="Large checkbox" />
        </div>

        {/* Variant variations */}
        <div>
          <h3>Variants</h3>
          <Checkbox variant="primary" checked label="Primary variant" />
          <Checkbox variant="secondary" checked label="Secondary variant" />
          <Checkbox variant="success" checked label="Success variant" />
          <Checkbox variant="error" checked label="Error variant" />
          <Checkbox variant="warning" checked label="Warning variant" />
          <Checkbox variant="info" checked label="Info variant" />
        </div>

        {/* Interactive examples */}
        <div>
          <h3>Interactive</h3>
          <Checkbox 
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
            label="Toggle me"
            helperText="This checkbox can be toggled"
          />
          
          <Checkbox 
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
            label="Another toggle"
            variant="secondary"
            size="lg"
          />
          
          <Checkbox 
            indeterminate={indeterminate}
            onChange={(e) => setIndeterminate(false)}
            label="Indeterminate state"
            helperText="Click to clear indeterminate state"
          />
        </div>

        {/* Error and disabled states */}
        <div>
          <h3>States</h3>
          <Checkbox 
            label="Error state"
            error
            helperText="This field is required"
          />
          
          <Checkbox 
            label="Disabled unchecked"
            disabled
          />
          
          <Checkbox 
            label="Disabled checked"
            disabled
            checked
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TestCheckbox;