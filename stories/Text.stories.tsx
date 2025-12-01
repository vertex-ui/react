import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../src/components/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Text component is a versatile typography component that provides consistent text styling across your application with full theme integration.

## Features
- **Multiple variants**: h1-h6, body1-2, subtitle1-2, caption, overline, button, label
- **Theme integration**: All typography styles are token-based and customizable
- **Flexible styling**: Support for color, weight, alignment, transform, and more
- **Truncation**: Single-line truncation and multi-line clamping
- **Gradient text**: Beautiful gradient text effects
- **Accessibility**: Semantic HTML elements and ARIA support
- **Responsive**: Mobile-friendly typography scaling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'button',
        'label',
      ],
      description: 'Typography variant that applies preset styles',
      table: {
        defaultValue: { summary: 'body1' },
      },
    },
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'label',
        'strong',
        'em',
        'small',
      ],
      description: 'HTML element to render as',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    color: {
      control: 'text',
      description: 'Text color - accepts CSS color values or theme tokens (e.g., "primary.500")',
    },
    weight: {
      control: 'select',
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
      ],
      description: 'Font weight',
    },
    transform: {
      control: 'select',
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      description: 'Text transform',
    },
    decoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through', 'overline'],
      description: 'Text decoration',
    },
    truncate: {
      control: 'boolean',
      description: 'Enable single-line truncation with ellipsis',
    },
    lineClamp: {
      control: 'number',
      description: 'Number of lines to show before truncating',
    },
    breakWord: {
      control: 'boolean',
      description: 'Enable word break for long words',
    },
    italic: {
      control: 'boolean',
      description: 'Enable italic style',
    },
    underline: {
      control: 'boolean',
      description: 'Enable underline',
    },
    strikethrough: {
      control: 'boolean',
      description: 'Enable strikethrough',
    },
    noSelect: {
      control: 'boolean',
      description: 'Disable user selection',
    },
    size: {
      control: 'text',
      description: 'Custom font size (overrides variant)',
    },
    lineHeight: {
      control: 'text',
      description: 'Custom line height (overrides variant)',
    },
    letterSpacing: {
      control: 'text',
      description: 'Custom letter spacing (overrides variant)',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== Basic Variants =====
export const Default: Story = {
  args: {
    children: 'This is the default body text',
  },
};

export const AllHeadingVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="h1">Heading 1 - The quick brown fox</Text>
      <Text variant="h2">Heading 2 - The quick brown fox</Text>
      <Text variant="h3">Heading 3 - The quick brown fox</Text>
      <Text variant="h4">Heading 4 - The quick brown fox</Text>
      <Text variant="h5">Heading 5 - The quick brown fox</Text>
      <Text variant="h6">Heading 6 - The quick brown fox</Text>
    </div>
  ),
};

export const AllTextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="subtitle1">Subtitle 1 - Enhanced subtitle text for emphasis</Text>
      <Text variant="subtitle2">Subtitle 2 - Secondary subtitle text</Text>
      <Text variant="body1">Body 1 - This is the primary body text used for most content</Text>
      <Text variant="body2">Body 2 - This is smaller body text for secondary content</Text>
      <Text variant="caption">Caption - Small supporting text or metadata</Text>
      <Text variant="overline">Overline - Category or Section Header</Text>
      <Text variant="button">Button - Action Text</Text>
      <Text variant="label">Label - Form Label Text</Text>
    </div>
  ),
};

// ===== Alignment =====
export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <Text align="left">Left aligned text (default)</Text>
      </div>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <Text align="center">Center aligned text</Text>
      </div>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <Text align="right">Right aligned text</Text>
      </div>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <Text align="justify">
          Justify aligned text that spans multiple lines to demonstrate how the text stretches
          across the full width of the container.
        </Text>
      </div>
    </div>
  ),
};

// ===== Colors =====
export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text color="primary.500">Primary Color (Theme Token)</Text>
      <Text color="primary.700">Primary Dark (Theme Token)</Text>
      <Text color="success.500">Success Color (Theme Token)</Text>
      <Text color="error.500">Error Color (Theme Token)</Text>
      <Text color="warning.500">Warning Color (Theme Token)</Text>
      <Text color="#667eea">Custom Hex Color</Text>
      <Text color="rgb(102, 126, 234)">Custom RGB Color</Text>
      <Text color="neutral.600">Neutral Gray Text</Text>
    </div>
  ),
};

// ===== Font Weights =====
export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text weight="thin">Thin (100)</Text>
      <Text weight="extralight">Extra Light (200)</Text>
      <Text weight="light">Light (300)</Text>
      <Text weight="normal">Normal (400)</Text>
      <Text weight="medium">Medium (500)</Text>
      <Text weight="semibold">Semibold (600)</Text>
      <Text weight="bold">Bold (700)</Text>
      <Text weight="extrabold">Extra Bold (800)</Text>
      <Text weight="black">Black (900)</Text>
      <Text weight={350}>Custom Weight (350)</Text>
    </div>
  ),
};

// ===== Text Transform =====
export const TextTransform: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text transform="none">No Transform - The Quick Brown Fox</Text>
      <Text transform="uppercase">Uppercase - The Quick Brown Fox</Text>
      <Text transform="lowercase">Lowercase - The Quick Brown Fox</Text>
      <Text transform="capitalize">Capitalize - the quick brown fox</Text>
    </div>
  ),
};

// ===== Text Decoration =====
export const TextDecoration: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text decoration="none">No decoration</Text>
      <Text decoration="underline">Underlined text</Text>
      <Text decoration="line-through">Strikethrough text</Text>
      <Text decoration="overline">Overline text</Text>
      <Text underline>Underline utility</Text>
      <Text strikethrough>Strikethrough utility</Text>
    </div>
  ),
};

// ===== Truncation =====
export const Truncation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div>
        <Text variant="caption" color="neutral.600">
          Single Line Truncation:
        </Text>
        <Text truncate>
          This is a very long text that will be truncated with an ellipsis when it exceeds the
          container width. You won't see the end of this sentence.
        </Text>
      </div>
      <div>
        <Text variant="caption" color="neutral.600">
          Multi-line Truncation (2 lines):
        </Text>
        <Text lineClamp={2}>
          This is a longer piece of text that demonstrates multi-line truncation. It will show only
          two lines before being cut off with an ellipsis. This feature is useful for card layouts
          and previews.
        </Text>
      </div>
      <div>
        <Text variant="caption" color="neutral.600">
          Multi-line Truncation (3 lines):
        </Text>
        <Text lineClamp={3}>
          This is a longer piece of text that demonstrates multi-line truncation. It will show three
          lines before being cut off with an ellipsis. This feature is particularly useful for card
          layouts, article previews, and any situation where you need to constrain content to a
          specific number of lines.
        </Text>
      </div>
    </div>
  ),
};

// ===== Break Word =====
export const BreakWord: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <div>
        <Text variant="caption" color="neutral.600">
          Without Break Word:
        </Text>
        <Text>Supercalifragilisticexpialidocious</Text>
      </div>
      <div>
        <Text variant="caption" color="neutral.600">
          With Break Word:
        </Text>
        <Text breakWord>Supercalifragilisticexpialidocious</Text>
      </div>
    </div>
  ),
};

// ===== Gradient Text =====
export const GradientText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Text variant="h1" gradient={['#667eea', '#764ba2']}>
        Beautiful Gradient Heading
      </Text>
      <Text variant="h2" gradient={['#f093fb', '#f5576c']}>
        Pink Gradient Title
      </Text>
      <Text variant="h3" gradient={['#4facfe', '#00f2fe']}>
        Blue Gradient Text
      </Text>
      <Text variant="body1" gradient={['#43e97b', '#38f9d7']}>
        Even body text can have gradients
      </Text>
      <Text variant="h2" gradient={['#fa709a', '#fee140', '#30cfd0']}>
        Multi-color Gradient
      </Text>
    </div>
  ),
};

// ===== Italic =====
export const ItalicText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text>Normal text</Text>
      <Text italic>Italic text for emphasis</Text>
      <Text variant="h3" italic>
        Italic heading
      </Text>
    </div>
  ),
};

// ===== Custom Sizing =====
export const CustomSizing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text size="12px">Custom 12px size</Text>
      <Text size="16px">Custom 16px size</Text>
      <Text size="24px">Custom 24px size</Text>
      <Text size={32}>Custom 32px size (number)</Text>
      <Text size="2rem">Custom 2rem size</Text>
    </div>
  ),
};

export const CustomLineHeight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <Text variant="caption" color="neutral.600">
          Tight Line Height (1.2):
        </Text>
        <Text lineHeight="1.2">
          This paragraph has tight line height. Notice how the lines are closer together. This can
          be useful for headlines or compact layouts.
        </Text>
      </div>
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <Text variant="caption" color="neutral.600">
          Normal Line Height (1.5):
        </Text>
        <Text lineHeight="1.5">
          This paragraph has normal line height. This is the default and provides good readability
          for most body text content.
        </Text>
      </div>
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <Text variant="caption" color="neutral.600">
          Loose Line Height (2):
        </Text>
        <Text lineHeight="2">
          This paragraph has loose line height. Notice how spacious it feels. This can improve
          readability for certain audiences or designs.
        </Text>
      </div>
    </div>
  ),
};

export const CustomLetterSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text letterSpacing="-0.05em">Tighter letter spacing</Text>
      <Text letterSpacing="0">Normal letter spacing</Text>
      <Text letterSpacing="0.05em">Wider letter spacing</Text>
      <Text letterSpacing="0.1em">Widest letter spacing</Text>
    </div>
  ),
};

// ===== Semantic HTML =====
export const SemanticHTML: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="h1" as="h2">
        Looks like H1, but is H2 (SEO)
      </Text>
      <Text variant="body1" as="label">
        Body text styled as label
      </Text>
      <Text variant="h3" as="div">
        Heading 3 as div element
      </Text>
      <Text variant="caption" as="small">
        Caption as small element
      </Text>
    </div>
  ),
};

// ===== Complex Combinations =====
export const ComplexStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Text variant="h2" align="center" color="primary.600" weight="bold" transform="uppercase">
        Combined Styles
      </Text>
      <Text variant="body1" color="neutral.700" italic underline>
        Italic and underlined body text
      </Text>
      <Text variant="subtitle1" gradient={['#667eea', '#764ba2']} weight="bold" align="center">
        Gradient with Bold Weight
      </Text>
    </div>
  ),
};

// ===== Real-world Examples =====
export const ArticleLayout: Story = {
  render: () => (
    <article style={{ maxWidth: '700px' }}>
      <Text variant="overline" color="primary.600">
        Technology
      </Text>
      <Text variant="h1" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
        The Future of Web Development
      </Text>
      <Text variant="subtitle1" color="neutral.600" style={{ marginBottom: '1.5rem' }}>
        Exploring the latest trends and technologies shaping the modern web
      </Text>
      <Text variant="body1" style={{ marginBottom: '1rem' }}>
        Web development has evolved significantly over the past decade, with new frameworks, tools,
        and best practices emerging at a rapid pace. This article explores the key trends that are
        shaping the future of how we build web applications.
      </Text>
      <Text variant="body1" style={{ marginBottom: '1rem' }}>
        From improved performance optimization techniques to enhanced developer experiences, the
        landscape continues to transform in exciting ways.
      </Text>
      <Text variant="caption" color="neutral.500">
        Published on November 30, 2025
      </Text>
    </article>
  ),
};

export const CardWithTruncation: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '350px',
        padding: '1.5rem',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Text variant="overline" color="primary.600">
        Product Feature
      </Text>
      <Text variant="h4" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
        Advanced Analytics Dashboard
      </Text>
      <Text variant="body2" color="neutral.700" lineClamp={3} style={{ marginBottom: '1rem' }}>
        Get deep insights into your application's performance with our comprehensive analytics
        dashboard. Track user behavior, monitor key metrics, and make data-driven decisions to
        improve your product. This powerful tool provides real-time updates and customizable
        reports.
      </Text>
      <Text variant="caption" color="neutral.500">
        Learn more →
      </Text>
    </div>
  ),
};

export const PricingCard: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '300px',
        padding: '2rem',
        border: '2px solid #3b82f6',
        borderRadius: '12px',
        textAlign: 'center',
      }}
    >
      <Text variant="overline" color="primary.600">
        Most Popular
      </Text>
      <Text variant="h3" style={{ marginTop: '0.5rem', marginBottom: '0' }}>
        Professional
      </Text>
      <Text
        variant="h1"
        gradient={['#667eea', '#764ba2']}
        style={{ marginTop: '1rem', marginBottom: '0.25rem' }}
      >
        $49
      </Text>
      <Text variant="body2" color="neutral.600" style={{ marginBottom: '1.5rem' }}>
        per month
      </Text>
      <Text variant="body2" color="neutral.700" style={{ marginBottom: '0.5rem' }}>
        ✓ Unlimited projects
      </Text>
      <Text variant="body2" color="neutral.700" style={{ marginBottom: '0.5rem' }}>
        ✓ Advanced analytics
      </Text>
      <Text variant="body2" color="neutral.700" style={{ marginBottom: '0.5rem' }}>
        ✓ Priority support
      </Text>
      <Text variant="body2" color="neutral.700">
        ✓ Custom integrations
      </Text>
    </div>
  ),
};

// ===== Interactive Playground =====
export const Playground: Story = {
  args: {
    variant: 'body1',
    children: 'Customize me using the controls below!',
  },
};

// ===== No Select =====
export const NoSelect: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text>Try to select this text - it's selectable</Text>
      <Text noSelect>Try to select this text - it's not selectable</Text>
    </div>
  ),
};

// ===== Accessibility Example =====
export const AccessibilityExample: Story = {
  render: () => (
    <div>
      <Text variant="h1" as="h1">
        Main Page Title
      </Text>
      <Text variant="h2" as="h2" style={{ marginTop: '1rem' }}>
        Section Heading
      </Text>
      <Text variant="body1" as="p" style={{ marginTop: '0.5rem' }}>
        This example demonstrates proper semantic HTML usage with the Text component. The visual
        styles can be different from the semantic meaning using the 'as' prop.
      </Text>
      <Text variant="h3" as="h3" style={{ marginTop: '1rem' }}>
        Subsection
      </Text>
      <Text variant="body1" as="p" style={{ marginTop: '0.5rem' }}>
        Screen readers will understand the proper heading hierarchy.
      </Text>
    </div>
  ),
};
