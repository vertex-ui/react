import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';

// Custom render function that wraps components in ThemeProvider
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };