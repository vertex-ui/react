import React, { forwardRef } from 'react';
import './Divider.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  /**
   * Align the content within the divider
   * Only works when children are provided
   * @default 'center'
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * The component orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The variant to use
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /**
   * If true, the divider will have a lighter color
   * @default false
   */
  light?: boolean;
  /**
   * If true, the divider will be optimized for use in flex containers
   * @default false
   */
  flexItem?: boolean;
  /**
   * The content of the divider
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node
   * Either a string to use a HTML element or a component
   * @default 'hr'
   */
  component?: React.ElementType;
  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Divider component - A thin line that groups content in lists and layouts
 *
 * The Divider component provides a thin, unobtrusive line for grouping elements
 * to reinforce visual hierarchy. It supports horizontal and vertical orientations,
 * multiple variants, and can wrap content like text or chips.
 *
 * ## CSS Customization
 *
 * You can customize the divider appearance using CSS custom properties:
 *
 * ```css
 * .custom-divider {
 *   --vtx-divider-color: #e91e63;
 *   --vtx-divider-color-light: #fce4ec;
 *   --vtx-divider-text-color: #c2185b;
 *   --vtx-divider-text-color-light: #f48fb1;
 *   --vtx-divider-text-size: 14px;
 *   --vtx-divider-text-weight: 600;
 * }
 * ```
 *
 * Or set them globally on :root:
 *
 * ```css
 * :root {
 *   --vtx-divider-color: #1976d2;
 *   --vtx-divider-text-color: #0d47a1;
 * }
 * ```
 *
 * @example
 * Basic horizontal divider
 * ```tsx
 * <Divider />
 * ```
 *
 * @example
 * Vertical divider in flex container
 * ```tsx
 * <Box display="flex" alignItems="center">
 *   <Chip label="Item 1" />
 *   <Divider orientation="vertical" flexItem />
 *   <Chip label="Item 2" />
 * </Box>
 * ```
 *
 * @example
 * With text content
 * ```tsx
 * <div>
 *   <p>Content above</p>
 *   <Divider>OR</Divider>
 *   <p>Content below</p>
 * </div>
 * ```
 *
 * @example
 * With chip and custom alignment
 * ```tsx
 * <Divider textAlign="left">
 *   <Chip label="Section" size="small" />
 * </Divider>
 * ```
 *
 * @example
 * Custom colored divider
 * ```tsx
 * <Divider className="custom-divider">Custom</Divider>
 * ```
 */
export const Divider = forwardRef<HTMLHRElement | HTMLDivElement, DividerProps>(
  (
    {
      textAlign = 'center',
      orientation = 'horizontal',
      variant = 'fullWidth',
      light = false,
      flexItem = false,
      children,
      component,
      className = '',
      role,
      ...props
    },
    ref
  ) => {
    // Determine the component to render
    const Component = component || (children ? 'div' : orientation === 'vertical' ? 'div' : 'hr');

    // Determine the role
    const dividerRole = role || (Component !== 'hr' ? 'separator' : undefined);

    // Build class names
    const classNames = [
      'vtx-divider',
      `vtx-divider--${orientation}`,
      `vtx-divider--${variant}`,
      light && 'vtx-divider--light',
      flexItem && 'vtx-divider--flex-item',
      children && 'vtx-divider--with-children',
      children && `vtx-divider--text-${textAlign}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Additional props for vertical orientation
    const additionalProps =
      orientation === 'vertical' && Component !== 'hr'
        ? { 'aria-orientation': 'vertical' as const }
        : {};

    return (
      <Component
        ref={ref as any}
        className={classNames}
        role={dividerRole}
        {...additionalProps}
        {...props}
      >
        {children && <span className="vtx-divider-wrapper">{children}</span>}
      </Component>
    );
  }
);

Divider.displayName = 'Divider';
