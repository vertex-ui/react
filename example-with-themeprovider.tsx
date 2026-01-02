import React from 'react';
import { ThemeProvider, Button, Card } from 'vertex-ui-react';

/**
 * Simple example showing that parseClass works automatically
 * when using ThemeProvider - NO extra setup needed!
 */
function App() {
  return (
    <ThemeProvider>
      {/* 
        Global parseClass styles are automatically active!
        All utility classes work on any element - React or plain HTML
      */}
      
      <div className="p-8">
        {/* Plain HTML with utility classes */}
        <h1 className="mb-6 fs-[32px]">🎨 My Application</h1>
        <p className="mb-4">Utility classes work automatically!</p>
        
        {/* React components with utility classes */}
        <Card className="mb-6 p-4">
          <h2 className="mb-2 fs-[24px]">Card Title</h2>
          <p className="mb-4">Card content with spacing utilities</p>
          <Button className="mt-4">Click Me</Button>
        </Card>
        
        {/* More plain HTML */}
        <div className="mt-8 pt-4 px-6 rounded-[8px]">
          <p className="mb-[10px]">Custom arbitrary values work too!</p>
          <ul className="ml-4">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        
        {/* Dynamic content also works */}
        <DynamicExample />
      </div>
    </ThemeProvider>
  );
}

function DynamicExample() {
  const [spacing, setSpacing] = React.useState('4');
  
  return (
    <div className="mt-8">
      <button 
        onClick={() => setSpacing(spacing === '4' ? '8' : '4')}
        className={`p-${spacing} mb-4`}
      >
        Toggle Spacing (current: {spacing})
      </button>
      <div className={`p-${spacing} mb-${spacing}`}>
        Content adapts dynamically!
      </div>
    </div>
  );
}

export default App;
