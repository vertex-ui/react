import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div>
      <Text variant="body1">Body 1 - This is the default body text style with comfortable line height and spacing.</Text>
      <Text variant="body2">Body 2 - This is a smaller body text variant, perfect for secondary content.</Text>
      <Text variant="subtitle1">Subtitle 1 - Used for section headings or important secondary text.</Text>
      <Text variant="subtitle2">Subtitle 2 - Smaller subtitle variant for less prominent headings.</Text>
    </div>
  ),
};

export const SmallText: Story = {
  render: () => (
    <div>
      <Text variant="caption">Caption text - Used for image captions, timestamps, or small annotations.</Text>
      <br /><br />
      <Text variant="overline">OVERLINE TEXT</Text>
      <br /><br />
      <Text variant="button">Button Text</Text>
      <br /><br />
      <Text variant="label">Label Text</Text>
    </div>
  ),
};

export const TextAlignments: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px dashed #ccc' }}>
      <Text align="left">Left aligned text content</Text>
      <Text align="center">Center aligned text content</Text>
      <Text align="right">Right aligned text content</Text>
      <Text align="justify">Justify aligned text content with enough text to demonstrate the justify alignment behavior across multiple lines.</Text>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <Text weight="thin">Thin weight text</Text>
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
      <Text weight="extrabold">Extra bold weight text</Text>
      <Text weight="black">Black weight text</Text>
    </div>
  ),
};

export const TextTransforms: Story = {
  render: () => (
    <div>
      <Text transform="none">Normal text with no transformation</Text>
      <Text transform="uppercase">Uppercase transformed text</Text>
      <Text transform="lowercase">LOWERCASE TRANSFORMED TEXT</Text>
      <Text transform="capitalize">capitalize each word text</Text>
    </div>
  ),
};

export const TextDecorations: Story = {
  render: () => (
    <div>
      <Text decoration="none">Text with no decoration</Text>
      <Text decoration="underline">Underlined text</Text>
      <Text decoration="line-through">Strikethrough text</Text>
      <Text decoration="overline">Overlined text</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div>
      <Text color="primary">Primary color text</Text>
      <Text color="secondary">Secondary color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="error">Error color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="info">Info color text</Text>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div>
      <Text as="p">Paragraph element</Text>
      <Text as="span">Inline span element</Text>
      <Text as="strong">Strong emphasis</Text>
      <Text as="em">Italic emphasis</Text>
      <Text as="small">Small element</Text>
      <Text as="label">Label element</Text>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div style={{ width: '200px', border: '1px dashed #ccc' }}>
      <Text truncate>This is a very long text that should be truncated when it exceeds the container width</Text>
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
      <Text className="mb-4 p-2">Text with margin-bottom-4 and padding-2</Text>
      <Text className="mt-8 px-6">Text with margin-top-8 and padding-x-6</Text>
      <Text className="my-3 mx-auto">Text with margin-y-3 and margin-x-auto</Text>
      <Text className="pb-5 pt-1">Text with padding-bottom-5 and padding-top-1</Text>
      <Text className="mb-[20px] p-[15px]">Text with arbitrary values</Text>
      <Text className="gap-4 rounded-2">Text with gap-4 and rounded-2</Text>
    </div>
  ),
};