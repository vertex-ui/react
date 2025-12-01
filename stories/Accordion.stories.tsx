import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItemWrapper as AccordionItem } from '../src/components/Accordion';
import { AccordionProps, AccordionItemProps } from '../src/components/Accordion/types';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Accordion component for displaying collapsible content panels. Supports both controlled and uncontrolled modes,
multiple variants, sizes, and accessibility features.

## Features
- Multiple variants (default, bordered, separated, flush)
- Three sizes (sm, md, lg)
- Single or multiple item expansion
- Controlled and uncontrolled modes
- Keyboard navigation support
- Customizable chevron icons
- Proper ARIA attributes
- Disabled state support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'separated', 'flush'],
      description: 'Visual variant of the accordion',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the accordion',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Whether multiple items can be open simultaneously',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether all items can be closed',
    },
    showChevron: {
      control: 'boolean',
      description: 'Whether to show chevron icons',
    },
    chevronPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the chevron icon',
    },
    iconType: {
      control: 'select',
      options: ['chevron', 'plus-minus', 'custom'],
      description: 'Type of icon to display',
    },
    showDivider: {
      control: 'boolean',
      description: 'Whether to show divider lines between items',
    },
    defaultOpenItems: {
      control: 'object',
      description: 'Items that are open by default (uncontrolled)',
    },
    openItems: {
      control: 'object',
      description: 'Open items (controlled)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample data
const sampleItems: AccordionItemProps[] = [
  {
    id: 'getting-started',
    header: 'Getting Started',
    children: (
      <div>
        <p>
          Welcome to our documentation! Here you'll find everything you need to get started with our
          platform.
        </p>
        <ul>
          <li>Quick setup guide</li>
          <li>Basic concepts</li>
          <li>First project walkthrough</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'api-reference',
    header: 'API Reference',
    children: (
      <div>
        <p>Complete API documentation with endpoints, parameters, and examples.</p>
        <code>GET /api/v1/users</code>
        <br />
        <code>POST /api/v1/users</code>
        <br />
        <code>PUT /api/v1/users/:id</code>
      </div>
    ),
  },
  {
    id: 'examples',
    header: 'Code Examples',
    children: (
      <div>
        <p>Real-world examples and use cases:</p>
        <pre>
          {`function example() {
  console.log('Hello, world!');
  return 'success';
}`}
        </pre>
      </div>
    ),
  },
  {
    id: 'troubleshooting',
    header: 'Troubleshooting',
    children: (
      <div>
        <p>Common issues and their solutions:</p>
        <h4>Problem: Authentication Error</h4>
        <p>Solution: Check your API key and ensure it's properly configured.</p>
        <h4>Problem: Rate Limit Exceeded</h4>
        <p>Solution: Implement exponential backoff in your requests.</p>
      </div>
    ),
    disabled: false,
  },
  {
    id: 'deprecated',
    header: 'Deprecated Features',
    children: (
      <div>
        <p>
          This section contains information about deprecated features that are no longer supported.
        </p>
      </div>
    ),
    disabled: true,
  },
];

// Default story
export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const PlusMinusIcons: Story = {
  args: {
    items: sampleItems,
    iconType: 'plus-minus',
  },
};

export const CustomIcons: Story = {
  args: {
    items: sampleItems,
    iconType: 'custom',
    expandedIcon: <span style={{ color: '#ef4444', fontWeight: 'bold' }}>−</span>,
    collapsedIcon: <span style={{ color: '#10b981', fontWeight: 'bold' }}>+</span>,
  },
};

export const WithoutDividers: Story = {
  args: {
    items: sampleItems,
    showDivider: false,
  },
};

export const WithDividers: Story = {
  args: {
    items: sampleItems,
    showDivider: true,
  },
};

// Variants
export const Bordered: Story = {
  args: {
    items: sampleItems,
    variant: 'bordered',
  },
};

export const Separated: Story = {
  args: {
    items: sampleItems,
    variant: 'separated',
  },
};

export const Flush: Story = {
  args: {
    items: sampleItems,
    variant: 'flush',
  },
};

// Sizes
export const Small: Story = {
  args: {
    items: sampleItems,
    size: 'sm',
    defaultOpenItems: ['getting-started'],
  },
};

export const Medium: Story = {
  args: {
    items: sampleItems,
    size: 'md',
    defaultOpenItems: ['getting-started'],
  },
};

export const Large: Story = {
  args: {
    items: sampleItems,
    size: 'lg',
    defaultOpenItems: ['getting-started'],
  },
};

// Multiple items open
export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    defaultOpenItems: ['getting-started', 'api-reference'],
  },
};

// Single item mode with non-collapsible
export const NonCollapsible: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
    collapsible: false,
    defaultOpenItems: ['getting-started'],
  },
};

// Chevron customization
export const ChevronLeft: Story = {
  args: {
    items: sampleItems,
    chevronPosition: 'left',
    defaultOpenItems: ['getting-started'],
  },
};

export const NoChevron: Story = {
  args: {
    items: sampleItems,
    showChevron: false,
    defaultOpenItems: ['getting-started'],
  },
};

// Using children instead of items prop
export const WithChildren: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="faq-1" header="What is this component library?">
        This is a comprehensive React component library built with TypeScript, designed for modern
        web applications with accessibility and performance in mind.
      </AccordionItem>
      <AccordionItem id="faq-2" header="How do I get started?">
        <div>
          <p>Getting started is easy:</p>
          <ol>
            <li>
              Install the package: <code>npm install @vtx-ui/react</code>
            </li>
            <li>Import the components you need</li>
            <li>Start building!</li>
          </ol>
        </div>
      </AccordionItem>
      <AccordionItem id="faq-3" header="Is it accessible?">
        Yes! All components are built with accessibility in mind and include proper ARIA attributes,
        keyboard navigation, and screen reader support.
      </AccordionItem>
    </Accordion>
  ),
  args: {
    variant: 'bordered',
    defaultOpenItems: ['faq-1'],
  },
};

// Controlled mode example
export const Controlled: Story = {
  render: function ControlledAccordion(args) {
    const [openItems, setOpenItems] = React.useState<string[]>(['getting-started']);

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setOpenItems(['getting-started', 'api-reference'])}
            style={{ marginRight: '0.5rem' }}
          >
            Open First Two
          </button>
          <button onClick={() => setOpenItems([])} style={{ marginRight: '0.5rem' }}>
            Close All
          </button>
          <button onClick={() => setOpenItems(['troubleshooting'])}>Open Troubleshooting</button>
        </div>
        <Accordion {...args} openItems={openItems} onToggle={setOpenItems} />
      </div>
    );
  },
  args: {
    items: sampleItems,
    allowMultiple: true,
  },
};

// Real-world FAQ example
export const FAQ: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: 'shipping',
        header: 'What are your shipping options?',
        children: (
          <div>
            <p>We offer several shipping options:</p>
            <ul>
              <li>
                <strong>Standard Shipping:</strong> 5-7 business days ($5.99)
              </li>
              <li>
                <strong>Express Shipping:</strong> 2-3 business days ($12.99)
              </li>
              <li>
                <strong>Overnight Shipping:</strong> Next business day ($24.99)
              </li>
            </ul>
            <p>Free standard shipping on orders over $50!</p>
          </div>
        ),
      },
      {
        id: 'returns',
        header: 'What is your return policy?',
        children: (
          <div>
            <p>We accept returns within 30 days of purchase. Items must be:</p>
            <ul>
              <li>In original packaging</li>
              <li>Unused and in new condition</li>
              <li>Accompanied by original receipt</li>
            </ul>
            <p>Return shipping is free for defective items.</p>
          </div>
        ),
      },
      {
        id: 'warranty',
        header: 'Do you offer warranties?',
        children: (
          <div>
            <p>Yes! All our products come with warranties:</p>
            <ul>
              <li>
                <strong>Electronics:</strong> 2-year manufacturer warranty
              </li>
              <li>
                <strong>Clothing:</strong> 90-day quality guarantee
              </li>
              <li>
                <strong>Accessories:</strong> 1-year warranty
              </li>
            </ul>
          </div>
        ),
      },
    ],
    defaultOpenItems: ['shipping'],
  },
};

// Accessibility showcase
export const AccessibilityShowcase: Story = {
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the accessibility features of the Accordion component:
- Keyboard navigation with Tab, Enter, and Space keys
- ARIA attributes for screen readers
- Focus management
- Disabled state handling
        `,
      },
    },
  },
  args: {
    items: [
      {
        id: 'keyboard',
        header: '⌨️ Keyboard Navigation',
        children: (
          <p>
            Use Tab to navigate between accordion headers, then press Enter or Space to toggle. This
            accordion item demonstrates full keyboard accessibility.
          </p>
        ),
      },
      {
        id: 'screenreader',
        header: '🔊 Screen Reader Support',
        children: (
          <p>
            This accordion includes proper ARIA attributes like aria-expanded, aria-controls, and
            role attributes to ensure compatibility with screen readers.
          </p>
        ),
      },
      {
        id: 'disabled',
        header: '🚫 Disabled Item',
        children: <p>This content cannot be accessed as the item is disabled.</p>,
        disabled: true,
      },
    ],
    variant: 'bordered',
    defaultOpenItems: ['keyboard'],
  },
};
