import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'overline', 'button', 'label'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
    transform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    decoration: {
      control: { type: 'select' },
      options: ['none', 'underline', 'line-through', 'overline'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label', 'strong', 'em', 'small'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text content',
  },
};

export const Headings: Story = {
  render: () => (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div>
      <Typography variant="body1">Body 1 - This is the default body text style with comfortable line height and spacing.</Typography>
      <Typography variant="body2">Body 2 - This is a smaller body text variant, perfect for secondary content.</Typography>
      <Typography variant="subtitle1">Subtitle 1 - Used for section headings or important secondary text.</Typography>
      <Typography variant="subtitle2">Subtitle 2 - Smaller subtitle variant for less prominent headings.</Typography>
    </div>
  ),
};

export const SmallText: Story = {
  render: () => (
    <div>
      <Typography variant="caption">Caption text - Used for image captions, timestamps, or small annotations.</Typography>
      <br /><br />
      <Typography variant="overline">OVERLINE TEXT</Typography>
      <br /><br />
      <Typography variant="button">Button Text</Typography>
      <br /><br />
      <Typography variant="label">Label Text</Typography>
    </div>
  ),
};

export const TextAlignments: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px dashed #ccc' }}>
      <Typography align="left">Left aligned text content</Typography>
      <Typography align="center">Center aligned text content</Typography>
      <Typography align="right">Right aligned text content</Typography>
      <Typography align="justify">Justify aligned text content with enough text to demonstrate the justify alignment behavior across multiple lines.</Typography>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <Typography weight="thin">Thin weight text</Typography>
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
      <Typography weight="extrabold">Extra bold weight text</Typography>
      <Typography weight="black">Black weight text</Typography>
    </div>
  ),
};

export const TextTransforms: Story = {
  render: () => (
    <div>
      <Typography transform="none">Normal text with no transformation</Typography>
      <Typography transform="uppercase">Uppercase transformed text</Typography>
      <Typography transform="lowercase">LOWERCASE TRANSFORMED TEXT</Typography>
      <Typography transform="capitalize">capitalize each word text</Typography>
    </div>
  ),
};

export const TextDecorations: Story = {
  render: () => (
    <div>
      <Typography decoration="none">Text with no decoration</Typography>
      <Typography decoration="underline">Underlined text</Typography>
      <Typography decoration="line-through">Strikethrough text</Typography>
      <Typography decoration="overline">Overlined text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="success">Success color text</Typography>
      <Typography color="error">Error color text</Typography>
      <Typography color="warning">Warning color text</Typography>
      <Typography color="info">Info color text</Typography>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div>
      <Typography as="p">Paragraph element</Typography>
      <Typography as="span">Inline span element</Typography>
      <Typography as="strong">Strong emphasis</Typography>
      <Typography as="em">Italic emphasis</Typography>
      <Typography as="small">Small element</Typography>
      <Typography as="label">Label element</Typography>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div style={{ width: '200px', border: '1px dashed #ccc' }}>
      <Typography truncate>This is a very long text that should be truncated when it exceeds the container width</Typography>
    </div>
  ),
};

export const Gradient: Story = {
  args: {
    gradient: ['#667eea', '#764ba2'],
    variant: 'h2',
    children: 'Gradient Text Effect',
  },
};

export const WithUtilityClasses: Story = {
  render: () => (
    <div>
      <Typography className="mb-4 p-2">Text with margin-bottom-4 and padding-2</Typography>
      <Typography className="mt-8 px-6">Text with margin-top-8 and padding-x-6</Typography>
      <Typography className="my-3 mx-auto">Text with margin-y-3 and margin-x-auto</Typography>
      <Typography className="pb-5 pt-1">Text with padding-bottom-5 and padding-top-1</Typography>
      <Typography className="mb-[20px] p-[15px]">Text with arbitrary values</Typography>
      <Typography className="gap-4 rounded-2">Text with gap-4 and rounded-2</Typography>
    </div>
  ),
};
