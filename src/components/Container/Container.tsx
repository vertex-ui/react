import React from 'react';
import './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Max width variant
   * - 'xs': 540px
   * - 'sm': 720px
   * - 'md': 960px
   * - 'lg': 1140px
   * - 'xl': 1320px
   * - 'fluid': 100% width
   * @default 'lg'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid' | false;
  /**
   * If true, removes horizontal padding
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If true, container will have no max-width
   * @default false
   */
  fluid?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Container content
   */
  children?: React.ReactNode;
}

/**
 * Container component - A responsive container that centers content
 *
 * Similar to Bootstrap's container, this component provides a responsive
 * fixed-width container with automatic margins and padding.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Container>
 *   <h1>Hello World</h1>
 *   <p>Content goes here...</p>
 * </Container>
 * ```
 *
 * @example
 * Fluid container (full width)
 * ```tsx
 * <Container fluid>
 *   <p>This spans the full width</p>
 * </Container>
 * ```
 *
 * @example
 * Custom max width
 * ```tsx
 * <Container maxWidth="sm">
 *   <p>Smaller container for forms</p>
 * </Container>
 * ```
 *
 * @example
 * Without gutters
 * ```tsx
 * <Container disableGutters>
 *   <p>No horizontal padding</p>
 * </Container>
 * ```
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'lg',
      disableGutters = false,
      fluid = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const containerClassNames = [
      'vtx-container',
      fluid || maxWidth === 'fluid' ? 'vtx-container--fluid' : `vtx-container--${maxWidth}`,
      disableGutters && 'vtx-container--no-gutters',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClassNames} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container as React.FC<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export { Container };