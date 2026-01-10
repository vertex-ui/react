import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from '../../src/components/Flex/Flex';

describe('Flex', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Flex>Test content</Flex>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<Flex className="custom-class">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex).toHaveClass('vtx-flex');
      expect(flex).toHaveClass('custom-class');
    });

    it('renders children correctly', () => {
      render(
        <Flex>
          <div>Child 1</div>
          <div>Child 2</div>
        </Flex>
      );
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('applies data-testid attribute', () => {
      render(<Flex data-testid="flex-test">Content</Flex>);
      expect(screen.getByTestId('flex-test')).toBeInTheDocument();
    });
  });

  describe('Direction', () => {
    it('renders row direction by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex).toHaveClass('vtx-flex');
      expect(flex.style.flexDirection).toBe('row');
    });

    it('renders column direction', () => {
      const { container } = render(<Flex direction="column">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexDirection).toBe('column');
    });

    it('renders row-reverse direction', () => {
      const { container } = render(<Flex direction="row-reverse">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexDirection).toBe('row-reverse');
    });

    it('renders column-reverse direction', () => {
      const { container } = render(<Flex direction="column-reverse">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexDirection).toBe('column-reverse');
    });
  });

  describe('Wrap', () => {
    it('renders nowrap by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexWrap).toBe('nowrap');
    });

    it('renders wrap', () => {
      const { container } = render(<Flex wrap="wrap">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexWrap).toBe('wrap');
    });

    it('renders wrap-reverse', () => {
      const { container } = render(<Flex wrap="wrap-reverse">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexWrap).toBe('wrap-reverse');
    });
  });

  describe('Justify Content', () => {
    it('renders justify start by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.justifyContent).toBe('flex-start');
    });

    it('renders justify center', () => {
      const { container } = render(<Flex justify="center">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.justifyContent).toBe('center');
    });

    it('renders justify between', () => {
      const { container } = render(<Flex justify="between">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.justifyContent).toBe('space-between');
    });

    it('renders justify around', () => {
      const { container } = render(<Flex justify="around">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.justifyContent).toBe('space-around');
    });

    it('renders justify evenly', () => {
      const { container } = render(<Flex justify="evenly">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.justifyContent).toBe('space-evenly');
    });
  });

  describe('Align Items', () => {
    it('renders align stretch by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignItems).toBe('stretch');
    });

    it('renders align center', () => {
      const { container } = render(<Flex align="center">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignItems).toBe('center');
    });

    it('renders align start', () => {
      const { container } = render(<Flex align="start">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignItems).toBe('flex-start');
    });

    it('renders align end', () => {
      const { container } = render(<Flex align="end">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignItems).toBe('flex-end');
    });

    it('renders align baseline', () => {
      const { container } = render(<Flex align="baseline">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignItems).toBe('baseline');
    });
  });

  describe('Align Content', () => {
    it('renders align content center', () => {
      const { container } = render(<Flex alignContent="center">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignContent).toBe('center');
    });

    it('renders align content between', () => {
      const { container } = render(<Flex alignContent="between">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.alignContent).toBe('space-between');
    });
  });

  describe('Gap', () => {
    it('applies gap as number', () => {
      const { container } = render(<Flex gap={16}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.gap).toBe('16px');
    });

    it('applies gap as string', () => {
      const { container } = render(<Flex gap="2rem">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.gap).toBe('2rem');
    });

    it('applies rowGap', () => {
      const { container } = render(<Flex rowGap={8}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.rowGap).toBe('8px');
    });

    it('applies columnGap', () => {
      const { container } = render(<Flex columnGap={12}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.columnGap).toBe('12px');
    });

    it('applies both rowGap and columnGap', () => {
      const { container } = render(
        <Flex rowGap={8} columnGap={16}>
          Content
        </Flex>
      );
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.rowGap).toBe('8px');
      expect(flex.style.columnGap).toBe('16px');
    });
  });

  describe('Inline Flex', () => {
    it('renders as display flex by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      // Box adds vtx-box--display-flex class or display:flex inline style
      // Since default display is not set in props, Box might not add inline style?
      // Wait, Flex sets display={inline ? 'inline-flex' : 'flex'}.
      expect(flex.classList.contains('vtx-box--display-flex')).toBe(true);
    });

    it('renders as inline-flex when inline is true', () => {
      const { container } = render(<Flex inline>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.classList.contains('vtx-box--display-inline-flex')).toBe(true);
    });
  });

  describe('Flex Properties', () => {
    it('applies flex grow', () => {
      const { container } = render(<Flex grow={1}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexGrow).toBe('1');
    });

    it('applies flex shrink', () => {
      const { container } = render(<Flex shrink={0}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexShrink).toBe('0');
    });

    it('applies flex basis as number', () => {
      const { container } = render(<Flex basis={200}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexBasis).toBe('200px');
    });

    it('applies flex basis as string', () => {
      const { container } = render(<Flex basis="50%">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.flexBasis).toBe('50%');
    });
  });

  describe('Custom Element', () => {
    it('renders as div by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.tagName).toBe('DIV');
    });

    it('renders as custom element', () => {
      const { container } = render(<Flex as="section">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.tagName).toBe('SECTION');
    });

    it('renders as article', () => {
      const { container } = render(<Flex as="article">Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.tagName).toBe('ARTICLE');
    });
  });

  describe('Accessibility', () => {
    it('forwards ref to element', () => {
      const ref = { current: null } as React.RefObject<HTMLDivElement>;
      render(<Flex ref={ref}>Content</Flex>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.tagName).toBe('DIV');
    });

    it('supports aria attributes', () => {
      const { container } = render(
        <Flex aria-label="Flex container" role="group">
          Content
        </Flex>
      );
      const flex = container.firstChild as HTMLElement;
      expect(flex).toHaveAttribute('aria-label', 'Flex container');
      expect(flex).toHaveAttribute('role', 'group');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom style prop', () => {
      const { container } = render(<Flex style={{ backgroundColor: 'red' }}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.backgroundColor).toBe('red');
    });

    it('merges custom style with gap', () => {
      const { container } = render(
        <Flex gap={16} style={{ backgroundColor: 'blue' }}>
          Content
        </Flex>
      );
      const flex = container.firstChild as HTMLElement;
      expect(flex.style.backgroundColor).toBe('blue');
      expect(flex.style.gap).toBe('16px');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through other HTML attributes', () => {
      const { container } = render(
        <Flex id="my-flex" title="Flex Title">
          Content
        </Flex>
      );
      const flex = container.firstChild as HTMLElement;
      expect(flex).toHaveAttribute('id', 'my-flex');
      expect(flex).toHaveAttribute('title', 'Flex Title');
    });

    it('handles onClick event', () => {
      const handleClick = jest.fn();
      const { container } = render(<Flex onClick={handleClick}>Content</Flex>);
      const flex = container.firstChild as HTMLElement;
      flex.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
