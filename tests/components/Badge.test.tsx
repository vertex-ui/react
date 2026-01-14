import React from 'react';
import { render, screen, fireEvent } from '../test-utils';

// Mock theme context to test color contrast logic
jest.mock('../../src/theme/ThemeProvider', () => {
  const original = jest.requireActual('../../src/theme/ThemeProvider');
  return {
    ...original,
    useThemeContext: () => ({
      theme: {
        defaultSize: 'md',
        colorContrast: {
          primary: 'light', // Primary needs dark text (light background)
          secondary: 'dark', // Secondary needs light text (dark background)
        }
      }
    })
  };
});

import { Badge } from '../../src/components/Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders with children text', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders with different variants', () => {
      const { container } = render(<Badge variant="success">Success</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--success');
    });

    it('renders with sizes', () => {
      const { container: sm } = render(<Badge size="sm">Small</Badge>);
      expect(sm.querySelector('.vtx-badge')).toHaveClass('vtx-badge--sm');

      const { container: lg } = render(<Badge size="lg">Large</Badge>);
      expect(lg.querySelector('.vtx-badge')).toHaveClass('vtx-badge--lg');
    });

    it('renders with dot indicator', () => {
      const { container } = render(<Badge dot>Status</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--with-dot');
      expect(container.querySelector('.vtx-badge-dot')).toBeInTheDocument();
    });

    it('renders outline style', () => {
      const { container } = render(<Badge outline>Outline</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--outline');
    });

    it('renders pill style', () => {
      const { container } = render(<Badge pill>Pill</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--pill');
    });

    it('renders rounded style', () => {
      const { container } = render(<Badge rounded>Rounded</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--rounded');
    });

    it('renders solid style by default', () => {
      const { container } = render(<Badge>Solid</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--solid');
    });

    it('does not apply solid class when lightMode is true', () => {
      const { container } = render(<Badge lightMode>Light</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).not.toHaveClass('vtx-badge--solid');
    });

    it('applies custom className', () => {
      const { container } = render(<Badge className="custom-badge">Test</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('custom-badge');
    });

    it('renders with icon when provided', () => {
      const Icon = () => <span data-testid="badge-icon">★</span>;
      render(<Badge icon={<Icon />}>With Icon</Badge>);
      expect(screen.getByTestId('badge-icon')).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    it('applies light text class based on theme contrast (dark background)', () => {
      // Mocked theme: secondary -> dark (needs light text)
      const { container } = render(<Badge variant="secondary">Secondary</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--light-text');
    });

    it('overrides theme contrast with darkText prop', () => {
      const { container } = render(<Badge variant="secondary" darkText={true}>Forced Dark</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--dark-text');
      expect(badge).not.toHaveClass('vtx-badge--light-text');
    });

    it('overrides theme contrast with lightText (darkText=false) prop', () => {
      const { container } = render(<Badge variant="primary" darkText={false}>Forced Light</Badge>);
      const badge = container.querySelector('.vtx-badge');
      expect(badge).toHaveClass('vtx-badge--light-text');
      expect(badge).not.toHaveClass('vtx-badge--dark-text');
    });
  });

  describe('Functionality', () => {
    it('truncates long content', () => {
      render(<Badge maxLength={5}>Very Long Text</Badge>);
      expect(screen.getByText('Very ...')).toBeInTheDocument();
    });

    it('does not truncate short content', () => {
      render(<Badge maxLength={10}>Short</Badge>);
      expect(screen.getByText('Short')).toBeInTheDocument();
    });

    it('calls onRemove when remove button clicked', () => {
      const onRemove = jest.fn();
      render(<Badge onRemove={onRemove}>Removable</Badge>);

      const removeButton = screen.getByLabelText('Remove badge');
      fireEvent.click(removeButton);

      expect(onRemove).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('hides dot indicator from screen readers', () => {
      const { container } = render(<Badge dot>Status</Badge>);
      const dot = container.querySelector('.vtx-badge-dot');
      expect(dot).toHaveAttribute('aria-hidden', 'true');
    });

    it('hides icon from screen readers', () => {
      const Icon = () => <span>Icon</span>;
      const { container } = render(<Badge icon={<Icon />}>Status</Badge>);
      const iconWrapper = container.querySelector('.vtx-badge-icon');
      expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
    });

    it('remove button has accessible label', () => {
      render(<Badge onRemove={() => {}}>Removable</Badge>);
      expect(screen.getByLabelText('Remove badge')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to span element', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Badge ref={ref}>Ref Test</Badge>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
      expect(ref.current).toHaveClass('vtx-badge');
    });
  });
});
