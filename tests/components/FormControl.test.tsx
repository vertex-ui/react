import React from 'react';
import { render, screen } from '../test-utils';
import { FormControl } from '../../src/components/FormControl/FormControl';

describe('FormControl', () => {
  it('renders label and children', () => {
    render(
      <FormControl label="Email">
        <input data-testid="input" />
      </FormControl>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    render(
      <FormControl label="Email" helperText="Enter your email">
        <input />
      </FormControl>
    );
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(
      <FormControl label="Email" error="Invalid email">
        <input />
      </FormControl>
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('renders required indicator', () => {
    render(
      <FormControl label="Email" required>
        <input />
      </FormControl>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
