import type { Meta } from '@storybook/react';
import { FormControl } from '..';


const meta: Meta<typeof FormControl> = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
    },
  },
};

export default meta;


/**
 * Basic form control with input
 */

/**
 * Form control with textarea
 */

/**
 * Form control with select
 */

/**
 * Form control with rich text editor
 */

/**
 * Required field with error
 */

/**
 * Field with success message
 */

/**
 * Disabled form control
 */

/**
 * Different spacing options
 */

/**
 * Horizontal label layout
 */

/**
 * Size variants
 */

/**
 * Contact form with mixed inputs
 */

/**
 * Form with validation states
 */

/**
 * Complex form with all features
 */
