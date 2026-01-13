import type { Meta } from '@storybook/react';
import { Widget } from '..';


const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A unified, flexible widget system for building CMS-configurable dashboards and interfaces. Replace fragmented components with a single Widget that adapts to any data and theme.',
      },
    },
  },
  argTypes: {
    config: {
      description: 'Widget configuration object',
      control: { type: 'object' },
    },
  },
};

export default meta;


// Metric Widget Examples



