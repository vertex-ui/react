import React, { useState } from 'react';
import { Accordion } from './index';

/**
 * Beautiful, comprehensive examples showcasing the redesigned Accordion component
 * with full VTX design system integration
 */

// Example data for demonstrations
const basicItems = [
  {
    id: 'getting-started',
    header: '🚀 Getting Started',
    children: (
      <div>
        <p>
          Welcome to the VTX UI Accordion component! This accordion provides a clean, 
          accessible way to organize content in collapsible sections.
        </p>
        <h4>Key Features:</h4>
        <ul>
          <li>Full VTX design system integration</li>
          <li>Multiple visual variants</li>
          <li>Responsive size options</li>
          <li>Enhanced accessibility</li>
          <li>Beautiful animations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'customization',
    header: '🎨 Customization Options',
    children: (
      <div>
        <p>
          The accordion offers extensive customization options to match your design needs:
        </p>
        <pre>
{`<Accordion
  variant="bordered"
  size="lg"
  spacing="spacious"
  showChevron={true}
  chevronPosition="right"
  iconType="chevron"
/>`}
        </pre>
      </div>
    ),
  },
  {
    id: 'advanced-features',
    header: '⚡ Advanced Features',
    children: (
      <div>
        <p>Explore advanced features like:</p>
        <ul>
          <li><strong>Multiple Selection:</strong> Allow multiple panels to be open simultaneously</li>
          <li><strong>Custom Icons:</strong> Use your own icons for expand/collapse states</li>
          <li><strong>Status Indicators:</strong> Visual feedback for different states</li>
          <li><strong>Loading States:</strong> Built-in loading indicators</li>
          <li><strong>Dark Mode:</strong> Automatic dark mode support</li>
        </ul>
      </div>
    ),
  },
];

const statusItems = [
  {
    id: 'success-item',
    header: '✅ Success State',
    status: 'success' as const,
    children: (
      <div>
        <p>This accordion item shows a success state with a green accent indicator.</p>
        <p>Perfect for showing completed tasks, successful operations, or positive feedback.</p>
      </div>
    ),
  },
  {
    id: 'warning-item',
    header: '⚠️ Warning State',
    status: 'warning' as const,
    children: (
      <div>
        <p>This item displays a warning state with an orange accent.</p>
        <p>Use this for items that require attention or have potential issues.</p>
      </div>
    ),
  },
  {
    id: 'error-item',
    header: '❌ Error State',
    status: 'error' as const,
    children: (
      <div>
        <p>Error states are highlighted with a red accent indicator.</p>
        <p>This helps users quickly identify problematic sections that need immediate attention.</p>
      </div>
    ),
  },
  {
    id: 'featured-item',
    header: '⭐ Featured Content',
    status: 'featured' as const,
    children: (
      <div>
        <p>Featured items have a beautiful gradient background and special styling.</p>
        <p>Perfect for highlighting important content, premium features, or special announcements.</p>
      </div>
    ),
  },
];

// Custom Icons Example
const CustomIcons = {
  expanded: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  collapsed: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  ),
};

export const AccordionExamples: React.FC = () => {
  const [controlledOpen, setControlledOpen] = useState<string[]>(['getting-started']);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>🎨 VTX Accordion Component Showcase</h1>
      
      {/* Basic Default Accordion */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Default Variant</h2>
        <p>Clean, card-like appearance with subtle shadows and smooth animations.</p>
        <Accordion
          items={basicItems}
          defaultOpenItems={['getting-started']}
          variant="default"
          size="md"
        />
      </section>

      {/* Bordered Variant */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Bordered Variant</h2>
        <p>Individual cards with spacing and enhanced hover effects.</p>
        <Accordion
          items={basicItems}
          variant="bordered"
          size="md"
          allowMultiple
        />
      </section>

      {/* Separated Variant */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Separated Variant</h2>
        <p>Floating cards with enhanced shadows and beautiful hover animations.</p>
        <Accordion
          items={basicItems}
          variant="separated"
          size="lg"
          spacing="spacious"
        />
      </section>

      {/* Flush Variant */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Flush Variant</h2>
        <p>Minimal design without borders for a clean, simple appearance.</p>
        <Accordion
          items={basicItems}
          variant="flush"
          size="sm"
          spacing="compact"
        />
      </section>

      {/* Status States */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Status Indicators</h2>
        <p>Visual feedback with colored accent indicators for different states.</p>
        <Accordion
          items={statusItems}
          variant="bordered"
          allowMultiple
          defaultOpenItems={['success-item']}
        />
      </section>

      {/* Plus/Minus Icons */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Plus/Minus Icons</h2>
        <p>Alternative icon style with plus/minus indicators.</p>
        <Accordion
          items={basicItems}
          variant="default"
          iconType="plus-minus"
          chevronPosition="left"
        />
      </section>

      {/* Custom Icons */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Custom Icons</h2>
        <p>Use your own custom icons for expand/collapse states.</p>
        <Accordion
          items={basicItems}
          variant="separated"
          iconType="custom"
          expandedIcon={CustomIcons.expanded}
          collapsedIcon={CustomIcons.collapsed}
        />
      </section>

      {/* Controlled Accordion */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Controlled Accordion</h2>
        <p>Full control over which items are open with external state management.</p>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setControlledOpen(['getting-started', 'customization'])}
            style={{
              marginRight: '1rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            Open First Two
          </button>
          <button
            onClick={() => setControlledOpen([])}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            Close All
          </button>
        </div>
        <Accordion
          items={basicItems}
          variant="default"
          openItems={controlledOpen}
          onToggle={setControlledOpen}
          allowMultiple
        />
      </section>

      {/* Loading State */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Loading State</h2>
        <p>Built-in loading indicators for async content.</p>
        <Accordion
          items={basicItems}
          variant="bordered"
          loading={true}
        />
      </section>

      {/* Size Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Size Variants</h2>
        
        <h3>Small Size</h3>
        <Accordion
          items={[basicItems[0]]}
          variant="default"
          size="sm"
          defaultOpenItems={['getting-started']}
        />
        
        <div style={{ margin: '2rem 0' }}>
          <h3>Medium Size (Default)</h3>
          <Accordion
            items={[basicItems[0]]}
            variant="default"
            size="md"
            defaultOpenItems={['getting-started']}
          />
        </div>
        
        <h3>Large Size</h3>
        <Accordion
          items={[basicItems[0]]}
          variant="default"
          size="lg"
          defaultOpenItems={['getting-started']}
        />
      </section>

      {/* Dark Mode Preview */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Dark Mode Support</h2>
        <p>
          The accordion automatically adapts to dark mode preferences. 
          Try switching your system theme to see the dark mode styles!
        </p>
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '2rem', 
          borderRadius: '1rem',
          colorScheme: 'dark'
        }}>
          <Accordion
            items={basicItems}
            variant="separated"
            size="md"
            defaultOpenItems={['getting-started']}
          />
        </div>
      </section>
    </div>
  );
};

export default AccordionExamples;