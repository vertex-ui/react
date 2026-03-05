import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../../src/components/Box';

describe('Box Border Props', () => {
  it('applies border color as a CSS variable', () => {
    const { container } = render(<Box borderColor="primary.500">Content</Box>);
    expect(container.firstChild).toHaveStyle({ borderColor: 'var(--lxs-color-primary-500)' });
  });

  it('handles numeric borders', () => {
    const { container } = render(<Box border={1} borderTop={2}>Content</Box>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      border: '1px solid var(--lxs-color-border-default, #e5e7eb)',
      borderTop: '2px solid var(--lxs-color-border-default, #e5e7eb)',
    });
  });
});
