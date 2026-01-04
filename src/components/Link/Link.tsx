import React, { AnchorHTMLAttributes } from 'react';
import { useThemeContext } from '../../theme/ThemeProvider';
import './Link.css';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * URL to navigate to
   */
  href?: string;
  /**
   * Custom Link component to use (e.g., Next.js Link or React Router Link)
   * @example
   * import { Link as RouterLink } from 'react-router-dom'
   * <Link component={RouterLink} to="/page">Link</Link>
   * @example
   * import NextLink from 'next/link'
   * <Link component={NextLink} href="/page">Link</Link>
   */
  component?: React.ElementType;
  /**
   * Props to pass to the custom component
   */
  componentProps?: Record<string, any>;
  /**
   * Text variant (size/style)
   * @default 'body1'
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'small';
  /**
   * If true, removes underline decoration
   * @default false
   */
  noUnderline?: boolean;
  /**
   * If true, link is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Link color variant
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'neutral' | 'inherit';
  /**
   * Icon to display before link text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after link text
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, opens link in new tab
   * @default false
   */
  external?: boolean;
  /**
   * If true or string, triggers browser download
   * @default false
   */
  download?: boolean | string;
  
  children?: React.ReactNode;
}

/**
 * Link component - Hyperlink with routing library support
 *
 * A flexible link component that works with native anchors, React Router, Next.js,
 * or any custom routing library. Supports text variants and theming.
 *
 * @example
 * Basic usage (native link)
 * ```tsx
 * <Link href="/about">About Us</Link>
 * ```
 *
 * @example
 * With React Router
 * ```tsx
 * import { Link as RouterLink } from 'react-router-dom'
 * <Link component={RouterLink} to="/dashboard">Dashboard</Link>
 * ```
 *
 * @example
 * With Next.js
 * ```tsx
 * import NextLink from 'next/link'
 * <Link component={NextLink} href="/profile">Profile</Link>
 * ```
 *
 * @example
 * With variants and icons
 * ```tsx
 * <Link 
 *   href="/downloads" 
 *   variant="h6"
 *   leftIcon={<DownloadIcon />}
 * >
 *   Download
 * </Link>
 * ```
 *
 * @example
 * External link
 * ```tsx
 * <Link href="https://example.com" external>
 *   Visit Website
 * </Link>
 * ```
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      component,
      componentProps = {},
      variant = 'body1',
      noUnderline = false,
      disabled = false,
      color = 'primary',
      leftIcon,
      rightIcon,
      external = false,
      download,
      className = '',
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Try to get theme context (may not be available if ThemeProvider is not used)
    let themeContext;
    try {
      themeContext = useThemeContext();
    } catch (e) {
      // ThemeProvider not used, that's okay
      themeContext = null;
    }

    // Intelligent component selection logic:
    // Use <a> tag if:
    // 1. external is true (external links)
    // 2. target prop is provided (opening in specific target)
    // 3. download prop is provided (file downloads)
    // Otherwise, use the configured component from theme or the component prop
    const shouldUseAnchor = external || target !== undefined || download !== undefined;
    
    // Determine which component to use
    const effectiveComponent = shouldUseAnchor 
      ? null 
      : (component || themeContext?.theme.linkComponent);

    const classNames = [
      'vtx-link',
      `vtx-link--${variant}`,
      `vtx-link--${color}`,
      noUnderline && 'vtx-link--no-underline',
      disabled && 'vtx-link--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const content = (
      <>
        {leftIcon && <span className="vtx-link__icon-left">{leftIcon}</span>}
        <span className="vtx-link__content">{children}</span>
        {rightIcon && <span className="vtx-link__icon-right">{rightIcon}</span>}
      </>
    );

    // If custom component should be used (React Router, Next.js, etc.)
    if (effectiveComponent) {
      const Component = effectiveComponent;
      
      return (
        <Component
          ref={ref}
          className={classNames}
          aria-disabled={disabled}
          {...componentProps}
          {...props}
        >
          {content}
        </Component>
      );
    }

    // Default to native anchor element
    const linkTarget = external ? '_blank' : target;
    const linkRel = external ? 'noopener noreferrer' : rel;

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={linkTarget}
        rel={linkRel}
        className={classNames}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : props.onClick}
        download={download}
        {...props}
      >
        {content}
      </a>
    );
  }
);

Link.displayName = 'Link';

export default Link as React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export { Link };

