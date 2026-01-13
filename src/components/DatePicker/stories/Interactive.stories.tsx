import type { Meta } from '@storybook/react';
import { DatePicker } from '..';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    format: {
      control: { type: 'select' },
      options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'],
    },
  },
};

export default meta;


/**
 * Basic date picker with label and placeholder
 */

/**
 * Date picker with default value
 */

/**
 * Date picker with validation states
 */

/**
 * Date picker with constraints
 */

/**
 * Date picker with disabled dates
 */


/**
 * Date picker with different formats
 */

/**
 * Date picker sizes
 */

/**
 * Full width date picker
 */

/**
 * Date picker without today button
 */

/**
 * Date picker with clearable functionality
 */

/**
 * Date range picker basic usage
 */

/**
 * Date range picker with presets
 */

/**
 * Date range picker with custom presets
 */

/**
 * Date range picker without presets
 */

/**
 * Date range picker with different separator
 */

/**
 * Complete booking form example
 */
