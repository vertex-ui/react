import React from 'react';
import { render, screen } from '../test-utils';
import { Link } from '../../src/components/Link/Link';

describe('Link', () => {
  it('renders link correctly', () => {
    render(<Link href="/test">Test Link</Link>);
    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders external link correctly', () => {
    render(<Link href="https://example.com" external>External Link</Link>);
    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders disabled link correctly', () => {
    render(<Link href="/test" disabled>Disabled Link</Link>);
    const link = screen.getByText('Disabled Link').closest('a');
    expect(link).toHaveClass('vtx-link--disabled');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).not.toHaveAttribute('href');
  });

  it('applies noUnderline class', () => {
    render(<Link href="/test" noUnderline>No Underline</Link>);
    const link = screen.getByRole('link', { name: /no underline/i });
    expect(link).toHaveClass('vtx-link--no-underline');
  });

  it('applies variant and color classes', () => {
    render(
      <Link href="/test" variant="h1" color="secondary">
        Styled Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /styled link/i });
    expect(link).toHaveClass('vtx-link--h1');
    expect(link).toHaveClass('vtx-link--secondary');
  });

  it('renders left and right icons', () => {
    const LeftIcon = () => <span data-testid="left-icon">L</span>;
    const RightIcon = () => <span data-testid="right-icon">R</span>;

    render(
      <Link href="/test" leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
        Icon Link
      </Link>
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('Icon Link')).toBeInTheDocument();
  });

  it('integrates with custom component', () => {
    const CustomComponent = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
      <a ref={ref} {...props} data-custom="true">
        {props.children}
      </a>
    ));

    render(
      <Link component={CustomComponent} href="/custom">
        Custom Link
      </Link>
    );

    const link = screen.getByText('Custom Link').closest('a');
    expect(link).toHaveAttribute('data-custom', 'true');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Link href="/test" ref={ref}>Ref Link</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
