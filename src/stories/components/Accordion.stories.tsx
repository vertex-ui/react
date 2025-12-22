import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['compact', 'default', 'comfortable'],
    },
    chevronPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'item1',
        header: 'What is Vertex UI?',
        children: <div>Vertex UI is a modern React component library designed for building beautiful and accessible user interfaces.</div>,
      },
      {
        id: 'item2', 
        header: 'How to get started?',
        children: <div>Simply install the package with npm or yarn and start using the components in your React application.</div>,
      },
      {
        id: 'item3',
        header: 'Is it customizable?',
        children: <div>Yes! Vertex UI comes with extensive theming capabilities and CSS custom properties for easy customization.</div>,
      },
    ],
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    items: [
      {
        id: 'item1',
        header: 'Section 1',
        children: <div>Content for section 1</div>,
      },
      {
        id: 'item2',
        header: 'Section 2', 
        children: <div>Content for section 2</div>,
      },
      {
        id: 'item3',
        header: 'Section 3',
        children: <div>Content for section 3</div>,
      },
    ],
  },
};

export const WithDefaultOpen: Story = {
  args: {
    defaultOpenItems: ['item1', 'item3'],
    items: [
      {
        id: 'item1',
        header: 'Open by default',
        children: <div>This section is open by default</div>,
      },
      {
        id: 'item2',
        header: 'Closed by default',
        children: <div>This section is closed by default</div>,
      },
      {
        id: 'item3',
        header: 'Also open by default',
        children: <div>This section is also open by default</div>,
      },
    ],
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    items: [
      {
        id: 'item1',
        header: 'Bordered Section 1',
        children: <div>Content with bordered variant</div>,
      },
      {
        id: 'item2',
        header: 'Bordered Section 2',
        children: <div>Another section with borders</div>,
      },
    ],
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    items: [
      {
        id: 'item1', 
        header: 'Large Accordion Section',
        children: <div>This is a large-sized accordion section with more prominent text and spacing.</div>,
      },
      {
        id: 'item2',
        header: 'Another Large Section',
        children: <div>Content in large accordion format</div>,
      },
    ],
  },
};

export const LeftChevron: Story = {
  args: {
    chevronPosition: 'left',
    items: [
      {
        id: 'item1',
        header: 'Left Chevron Section',
        children: <div>Accordion with chevron on the left side</div>,
      },
      {
        id: 'item2',
        header: 'Another Left Section',
        children: <div>More content with left-aligned chevron</div>,
      },
    ],
  },
};