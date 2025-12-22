import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import '../src/theme/base.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;