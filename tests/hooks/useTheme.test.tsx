import React from 'react';
import { renderHook } from '@testing-library/react';
import { useTheme } from '../../src/hooks/useTheme';
import { ThemeProvider } from '../../src/theme/ThemeProvider';

describe('useTheme', () => {
  it('throws error when used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      renderHook(() => useTheme());
    }).toThrow('useThemeContext must be used within a ThemeProvider');

    consoleSpy.mockRestore();
  });

  it('returns theme context when used within ThemeProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toHaveProperty('mode');
    expect(result.current).toHaveProperty('setMode');
    expect(result.current).toHaveProperty('tokens');
    expect(result.current.mode).toBe('light');
  });

  it('returns custom theme when provided', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider initialMode="dark">{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.mode).toBe('dark');
  });
});
