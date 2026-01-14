import type { Meta, StoryObj } from '@storybook/react';
import type { WidgetConfig } from '../types';
import { Widget } from '..';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/ContentBlockWidget',
  component: Widget,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // Flattened args for playground controls
    // These specific keys don't exist on Widget props directly but we map them in the render function
  },
};

export default meta;
type Story = StoryObj<typeof Widget>;

const CheckIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Interactive Playground Story
export const InteractivePlayground: Story = {
  name: 'Playground',
  argTypes: {
    contentAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Alignment of the content'
    },
    gap: {
      control: 'text',
      description: 'Vertical gap (e.g., md, lg, 2rem, 24px)'
    },
    captionStyle: {
      control: 'radio',
      options: ['text', 'badge'],
      description: 'Style of the caption'
    },
    captionGap: {
      control: 'text',
      description: 'Specific gap for caption (e.g. sm, 1rem)'
    },
    caption: { control: 'text', description: 'Caption text' },
    heading: { control: 'text', description: 'Heading text' },
    subheading: { control: 'text', description: 'Subheading text' },
    description: { control: 'text', description: 'Body text' },
  },
  args: {
    // Default values for controls
    contentAlign: 'left',
    gap: 'md',
    captionStyle: 'text',
    caption: 'Interactive Demo',
    heading: 'Experience Real-time Changes',
    subheading: 'Tweak controls panel',
    description: 'Use the controls in the sidebar or bottom panel to adjust alignment, spacing, and content dynamically.',
  } as any, // Cast to any because these are not direct props of Widget
  render: (args: any) => {
    // Construct configuration from interactive args
    const config: WidgetConfig = {
      type: 'contentBlock',
      theme: 'feature-highlight',
      data: {
        content: {
          caption: args.caption,
          captionStyle: args.captionStyle,
          heading: args.heading,
          subheading: args.subheading,
          body: args.description,
          list: [
            { label: 'Live Updates', icon: <CheckIcon />, iconVariant: 'success' },
            { label: 'Instant Feedback', icon: <CheckIcon />, iconVariant: 'primary' },
            { label: 'Full Control', icon: <StarIcon />, iconVariant: 'warning' },
          ],
        },
        actions: [
          { label: 'Primary Action', variant: 'primary' },
          { label: 'Secondary', variant: 'outline' },
        ],
      },
      settings: {
        contentAlign: args.contentAlign,
        gap: args.gap,
        spacing: {
          caption: args.captionGap
        }
      },
    };

    return <Widget config={config} />;
  }
};

export const ConfigurableTypography: Story = {
  name: 'Advanced: Configurable Typography',
  args: {
    config: {
      type: 'contentBlock',
      theme: 'feature-highlight',
      data: {
        content: {
          caption: 'Design Flexibility',
          heading: 'Custom Typography',
          subheading: 'Override any text style',
          body: 'This block demonstrates how you can use the settings prop to fully customize the typography of each element, including HTML tags, colors, and weights.',
        },
        actions: [
          { label: 'Documentation', variant: 'primary' },
        ],
      },
      settings: {
        contentAlign: 'center',
        typography: {
          caption: {
            variant: 'body2',
            color: 'secondary',
            weight: 'semibold',
            transform: 'uppercase',
            letterSpacing: 2
          },
          heading: {
            as: 'h1', // Render as H1
            variant: 'h3', // Look like H3
            color: 'primary',
            italic: true
          },
          subheading: {
            variant: 'subtitle1',
            textColor: '#6366f1', // Custom Hex Color
            weight: 'bold'
          },
          body: {
            size: 18, // Custom size
            lineHeight: 1.6
          }
        }
      },
    } as WidgetConfig,
  },
};

export const InteractiveVisualBlock: Story = {
  name: 'Interactive: Visual Block',
  argTypes: {
    contentAlign: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Alignment of content'
    },
    showImage: { control: 'boolean', description: 'Toggle between Image and Icon' },
    imageSrc: { control: 'text', description: 'URL for the image' },
    iconSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the icon'
    },
    iconVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the icon'
    },
    imageHeight: { control: 'text', description: 'Height of the image (e.g. 200px, auto)' },
    heading: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    showImage: false,
    contentAlign: 'center',
    imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    iconSize: '2xl',
    iconVariant: 'primary',
    imageHeight: '200px',
    heading: 'Visual Feature',
    description: 'This layout emphasizes a visual element (icon or image) at the top, perfectly suited for feature highlights or cards.',
  } as any,
  render: (args: any) => {
    const config: WidgetConfig = {
      type: 'contentBlock',
      theme: 'visual-block',
      data: {
        // Conditional data based on toggle
        image: args.showImage ? args.imageSrc : undefined,
        icon: !args.showImage ? <StarIcon /> : undefined,
        iconVariant: args.iconVariant,
        content: {
          heading: args.heading,
          body: args.description,
        },
        actions: [
          { label: 'Learn More', variant: 'primary' },
        ],
      },
      settings: {
        contentAlign: args.contentAlign,
        iconSize: args.iconSize,
        imageHeight: args.imageHeight,
        // Custom media spacing if needed
        spacing: {
          media: '1.5rem', // Default nice spacing
        }
      },
    };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #eee', padding: '2rem' }}>
        <Widget config={config} />
      </div>
    );
  }
};
