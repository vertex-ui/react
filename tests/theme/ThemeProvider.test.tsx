import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ThemeProvider } from '../../src/theme/ThemeProvider';

expect.extend(toHaveNoViolations);

describe('ThemeProvider', () => {
  afterEach(() => {
    cleanup();
    // Clean up injected style elements
    const styleElement = document.getElementById('vtx-ui-variables');
    if (styleElement) {
      styleElement.remove();
    }
  });
  it('renders children', () => {
    render(
      <ThemeProvider>
        <div>Test content</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('injects CSS variables when custom tokens are provided', () => {
    render(
      <ThemeProvider customTokens={{ colors: { primary: { 500: '#ff0000' } } }}>
        <div>Content</div>
      </ThemeProvider>
    );
    const styleElement = document.getElementById('vtx-ui-variables');
    expect(styleElement).toBeInTheDocument();
    expect(styleElement?.textContent).toContain('--vtx-color');
  });

  it('does not inject CSS variables when no custom tokens provided', () => {
    render(
      <ThemeProvider>
        <div>Content</div>
      </ThemeProvider>
    );
    const styleElement = document.getElementById('vtx-ui-variables');
    expect(styleElement).not.toBeInTheDocument();
  });

  it('sets data-theme attribute on document', () => {
    render(
      <ThemeProvider initialMode="light">
        <div>Content</div>
      </ThemeProvider>
    );
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <div>Theme content</div>
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
