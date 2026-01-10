import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from '../../src/components/Box';

describe('Box Component', () => {
  describe('Rendering', () => {
    it('renders as div by default', () => {
      const { container } = render(<Box>Content</Box>);
      expect(container.firstChild?.nodeName).toBe('DIV');
    });

    it('renders children correctly', () => {
      render(<Box>Test Content</Box>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders as different HTML elements using "as" prop', () => {
      const { container: section } = render(<Box as="section">Section</Box>);
      expect(section.firstChild?.nodeName).toBe('SECTION');

      const { container: article } = render(<Box as="article">Article</Box>);
      expect(article.firstChild?.nodeName).toBe('ARTICLE');

      const { container: nav } = render(<Box as="nav">Nav</Box>);
      expect(nav.firstChild?.nodeName).toBe('NAV');
    });
  });

  describe('Class Names', () => {
    it('applies base class', () => {
      const { container } = render(<Box>Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box');
    });

    it('applies custom className', () => {
      const { container } = render(<Box className="custom-class">Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box', 'custom-class');
    });

    it('applies display class', () => {
      const { container } = render(<Box display="flex">Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box--display-flex');
    });

    it('applies position class', () => {
      const { container } = render(<Box position="relative">Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box--position-relative');
    });

    it('applies overflow class', () => {
      const { container } = render(<Box overflow="hidden">Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box--overflow-hidden');
    });

    it('applies shadow preset class', () => {
      const { container } = render(<Box shadow="md">Content</Box>);
      expect(container.firstChild).toHaveClass('vtx-box--shadow-md');
    });
  });

  describe('Spacing Props', () => {
    it('applies margin props', () => {
      const { container } = render(<Box m={4}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ margin: '4px' });
    });

    it('applies padding props', () => {
      const { container } = render(<Box p={8}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ padding: '8px' });
    });

    it('applies specific margin sides', () => {
      const { container } = render(
        <Box mt={1} mr={2} mb={3} ml={4}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        marginTop: '1px',
        marginRight: '2px',
        marginBottom: '3px',
        marginLeft: '4px',
      });
    });

    it('applies mx and my props', () => {
      const { container } = render(
        <Box mx={2} my={4}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        marginLeft: '2px',
        marginRight: '2px',
        marginTop: '4px',
        marginBottom: '4px',
      });
    });

    it('applies string values for spacing', () => {
      const { container } = render(<Box m="1rem" p="2em">Content</Box>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        margin: '1rem',
        padding: '2em',
      });
    });

    it('prefers shorthand over specific sides', () => {
      const { container } = render(
        <Box m={10} mt={20}>
          Content
        </Box>
      );
      expect(container.firstChild).toHaveStyle({ margin: '10px' });
    });
  });

  describe('Dimension Props', () => {
    it('applies width and height', () => {
      const { container } = render(
        <Box w={100} h={200}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        width: '100px',
        height: '200px',
      });
    });

    it('applies min and max dimensions', () => {
      const { container } = render(
        <Box minW={50} maxW={500} minH={100} maxH={1000}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        minWidth: '50px',
        maxWidth: '500px',
        minHeight: '100px',
        maxHeight: '1000px',
      });
    });

    it('applies string values for dimensions', () => {
      const { container } = render(
        <Box width="50%" height="100vh">
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        width: '50%',
        height: '100vh',
      });
    });

    it('prefers short aliases over long names', () => {
      const { container } = render(
        <Box w={100} width={200}>
          Content
        </Box>
      );
      expect(container.firstChild).toHaveStyle({ width: '100px' });
    });
  });

  describe('Color Props', () => {
    it('applies background color', () => {
      const { container } = render(<Box bg="#fff">Content</Box>);
      expect(container.firstChild).toHaveStyle({ backgroundColor: '#fff' });
    });

    it('applies text color', () => {
      const { container } = render(<Box color="#000">Content</Box>);
      expect(container.firstChild).toHaveStyle({ color: '#000' });
    });

    it('prefers bg over backgroundColor', () => {
      const { container } = render(
        <Box bg="#fff" backgroundColor="#000">
          Content
        </Box>
      );
      expect(container.firstChild).toHaveStyle({ backgroundColor: '#fff' });
    });
  });

  describe('Border Props', () => {
    it('applies border', () => {
      const { container } = render(<Box border="1px solid red">Content</Box>);
      expect(container.firstChild).toHaveStyle({ border: '1px solid red' });
    });

    it('applies border radius', () => {
      const { container } = render(<Box borderRadius={8}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ borderRadius: '8px' });
    });

    it('applies border color', () => {
      const { container } = render(<Box borderColor="#ccc">Content</Box>);
      expect(container.firstChild).toHaveStyle({ borderColor: '#ccc' });
    });

    it('applies specific border sides', () => {
      const { container } = render(
        <Box borderTop="1px" borderBottom="2px">
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        borderTop: '1px',
        borderBottom: '2px',
      });
    });

    it('prefers borderRadius over rounded', () => {
      const { container } = render(
        <Box borderRadius={8} rounded={16}>
          Content
        </Box>
      );
      expect(container.firstChild).toHaveStyle({ borderRadius: '8px' });
    });
  });

  describe('Flexbox Props', () => {
    it('applies flex direction', () => {
      const { container } = render(<Box flexDirection="column">Content</Box>);
      expect(container.firstChild).toHaveStyle({ flexDirection: 'column' });
    });

    it('applies justify content', () => {
      const { container } = render(<Box justifyContent="center">Content</Box>);
      expect(container.firstChild).toHaveStyle({ justifyContent: 'center' });
    });

    it('applies align items', () => {
      const { container } = render(<Box alignItems="center">Content</Box>);
      expect(container.firstChild).toHaveStyle({ alignItems: 'center' });
    });

    it('applies gap', () => {
      const { container } = render(<Box gap={4}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ gap: '4px' });
    });

    it('applies flex grow/shrink/basis', () => {
      const { container } = render(
        <Box flexGrow={1} flexShrink={0} flexBasis={100}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '100px',
      });
    });
  });

  describe('Grid Props', () => {
    it('applies grid template columns', () => {
      const { container } = render(
        <Box gridTemplateColumns="repeat(3, 1fr)">Content</Box>
      );
      expect(container.firstChild).toHaveStyle({
        gridTemplateColumns: 'repeat(3, 1fr)',
      });
    });

    it('applies grid template rows', () => {
      const { container } = render(
        <Box gridTemplateRows="100px auto">Content</Box>
      );
      expect(container.firstChild).toHaveStyle({
        gridTemplateRows: '100px auto',
      });
    });

    it('applies grid column/row', () => {
      const { container } = render(
        <Box gridColumn="1 / 3" gridRow="2">
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        gridColumn: '1 / 3',
        gridRow: '2',
      });
    });
  });

  describe('Position Props', () => {
    it('applies position coordinates', () => {
      const { container } = render(
        <Box top={10} right={20} bottom={30} left={40}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        top: '10px',
        right: '20px',
        bottom: '30px',
        left: '40px',
      });
    });

    it('applies z-index', () => {
      const { container } = render(<Box zIndex={100}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ zIndex: 100 });
    });
  });

  describe('Visual Props', () => {
    it('applies opacity', () => {
      const { container } = render(<Box opacity={0.5}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ opacity: 0.5 });
    });

    it('applies custom box shadow', () => {
      const customShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      const { container } = render(<Box shadow={customShadow}>Content</Box>);
      expect(container.firstChild).toHaveStyle({ boxShadow: customShadow });
    });

    it('applies cursor', () => {
      const { container } = render(<Box cursor="pointer">Content</Box>);
      expect(container.firstChild).toHaveStyle({ cursor: 'pointer' });
    });
  });

  describe('Other Props', () => {
    it('applies text align', () => {
      const { container } = render(<Box textAlign="center">Content</Box>);
      expect(container.firstChild).toHaveStyle({ textAlign: 'center' });
    });

    it('applies transition', () => {
      const { container } = render(<Box transition="all 0.3s">Content</Box>);
      expect(container.firstChild).toHaveStyle({ transition: 'all 0.3s' });
    });

    it('applies user select', () => {
      const { container } = render(<Box userSelect="none">Content</Box>);
      expect(container.firstChild).toHaveStyle({ userSelect: 'none' });
    });

    it('applies pointer events', () => {
      const { container } = render(<Box pointerEvents="none">Content</Box>);
      expect(container.firstChild).toHaveStyle({ pointerEvents: 'none' });
    });
  });

  describe('Custom Style Override', () => {
    it('merges custom style prop', () => {
      const { container } = render(
        <Box style={{ fontSize: '16px' }} p={4}>
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        fontSize: '16px',
        padding: '4px',
      });
    });
  });

  describe('HTML Attributes', () => {
    it('passes through standard HTML attributes', () => {
      const { container } = render(
        <Box id="test-id" data-testid="box" aria-label="Test Box">
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveAttribute('id', 'test-id');
      expect(element).toHaveAttribute('data-testid', 'box');
      expect(element).toHaveAttribute('aria-label', 'Test Box');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Box ref={ref}>Content</Box>);
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.textContent).toBe('Content');
    });
  });

  describe('Complex Combinations', () => {
    it('handles multiple props together', () => {
      const { container } = render(
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          m={2}
          bg="#fff"
          borderRadius={8}
          shadow="md"
        >
          Content
        </Box>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('vtx-box', 'vtx-box--display-flex', 'vtx-box--shadow-md');
      expect(element).toHaveStyle({
        flexDirection: 'column',
        padding: '4px',
        margin: '2px',
        backgroundColor: '#fff',
        borderRadius: '8px',
      });
    });
  });
});
