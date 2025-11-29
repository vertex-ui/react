import React from 'react';
import { ThemeProvider } from '../src/theme';

// Import base theme CSS variables
import '../src/theme/base.css';

// Import all component styles
import '../src/components/Avatar/Avatar.css';
import '../src/components/Badge/Badge.css';
import '../src/components/Button/Button.css';
import '../src/components/Input/Input.css';
import '../src/components/Modal/Modal.css';
import '../src/components/Select/Select.css';
import '../src/components/Table/Table.css';
import '../src/components/Tooltip/Tooltip.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialMode="light">
        <div style={{ padding: '2rem', fontFamily: 'var(--vtx-font-family-sans, sans-serif)' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
