import React from 'react';
import { ContentBlockWidgetData, WidgetTheme } from '../types';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Link } from '../../Link';
import { Avatar } from '../../Avatar';
import { Badge } from '../../Badge';

export type ContentBlockLayout = 
  // Horizontal Layouts
  | 'media-left'           // Media 40%, Content 60%
  | 'media-right'          // Content 60%, Media 40%
  | 'split-equal'          // 50/50 split
  
  // Vertical Layouts
  | 'media-top'            // Media above content
  | 'media-bottom'         // Content above media
  
  // Overlapping Layouts
  | 'media-background'     // Full background with overlay
  
  // Centered Layouts
  | 'centered'             // All centered
  | 'centered-media-top'   // Centered with media on top
  
  // Grid/Multi-column
  | 'grid-2col'            // 2 column grid
  | 'grid-3col'            // 3 column grid
  
  // Asymmetric Layouts
  | 'sidebar-left'         // Narrow sidebar (30%) left
  | 'sidebar-right';       // Narrow sidebar (30%) right

export interface ContentBlockWidgetSettings {
  // Layout
  layout?: ContentBlockLayout;
  
  // Size & Spacing
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mediaWidth?: '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | 'auto';
  contentWidth?: 'narrow' | 'medium' | 'wide' | 'full';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  // Alignment
  contentAlign?: 'left' | 'center' | 'right' | 'justify';
  verticalAlign?: 'start' | 'center' | 'end' | 'stretch';
  
  // Visual Style
  variant?: 
    | 'minimal'        // Clean, no borders/shadows
    | 'card'           // Contained in card
    | 'bordered'       // With border
    | 'elevated'       // With shadow elevation
    | 'outlined'       // Outlined style
    | 'flat';          // Flat design
  
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'inner';
  border?: boolean | 'all' | 'left' | 'right' | 'top' | 'bottom';
  
  // Background
  background?: {
    color?: string;
    gradient?: string;
    opacity?: number;
  };

  // Overlay (for media-background layout)
  overlay?: {
    enabled: boolean;
    color?: string;
    opacity?: number;
    blur?: number;
    gradient?: 'top' | 'bottom' | 'center' | 'none';
  };

  // Grid Configuration (for grid layouts)
  grid?: {
    columns?: number;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    minItemWidth?: string;
  };

  // Responsive Behavior
  responsive?: {
    stackOnMobile?: boolean;
    stackOnTablet?: boolean;
    reverseOnMobile?: boolean;
    hideMediaOnMobile?: boolean;
  };

  // Interactions
  hover?: {
    enabled?: boolean;
    effect?: 'lift' | 'glow' | 'scale' | 'none';
    mediaZoom?: boolean;
  };

  // Animation
  animate?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'none';
}

export interface ContentBlockWidgetProps {
  data: ContentBlockWidgetData;
  settings?: ContentBlockWidgetSettings;
  theme?: WidgetTheme;
  className?: string;
  style?: React.CSSProperties;
}

const ContentBlockWidget: React.FC<ContentBlockWidgetProps> = ({
  data,
  settings = {},
  theme = 'modern',
  className = '',
  style,
}) => {
  // Get size from theme context if available
  let themeDefaultSize = 'md';
  try {
    const { useThemeContext } = require('../../../theme/ThemeProvider');
    const { theme: themeContext } = useThemeContext();
    themeDefaultSize = themeContext.defaultSize;
  } catch {
    // Theme context not available, use default
  }

  // Extract settings with defaults
  const layout = settings.layout ?? 'media-left';
  const variant = settings.variant ?? 'minimal';
  const size = settings.size ?? themeDefaultSize;
  const gap = settings.gap ?? 'lg';
  const padding = settings.padding ?? 'lg';
  const contentAlign = settings.contentAlign ?? 'left';
  const verticalAlign = settings.verticalAlign ?? 'center';
  const mediaWidth = settings.mediaWidth ?? '40%';
  const rounded = settings.rounded ?? false;
  const shadow = settings.shadow ?? false;
  const hover = settings.hover ?? { enabled: false };
  const responsive = settings.responsive ?? { stackOnMobile: true };
  const overlay = settings.overlay ?? { enabled: false };

  // Gap mapping
  const gapMap = {
    none: '0',
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  };

  // Padding mapping
  const paddingMap = {
    none: '0',
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  };

  // Size mapping for typography and component scaling
  const sizeMap = {
    xs: {
      eyebrow: '0.7rem',
      heading: '1.25rem',
      subheading: '1rem',
      body: '0.875rem',
      caption: '0.75rem',
      scale: 0.8,
    },
    sm: {
      eyebrow: '0.75rem',
      heading: '1.5rem',
      subheading: '1.125rem',
      body: '0.95rem',
      caption: '0.8rem',
      scale: 0.9,
    },
    md: {
      eyebrow: '0.8rem',
      heading: '2rem',
      subheading: '1.5rem',
      body: '1rem',
      caption: '0.875rem',
      scale: 1,
    },
    lg: {
      eyebrow: '0.85rem',
      heading: '2.5rem',
      subheading: '1.75rem',
      body: '1.1rem',
      caption: '0.95rem',
      scale: 1.1,
    },
    xl: {
      eyebrow: '0.9rem',
      heading: '3rem',
      subheading: '2rem',
      body: '1.25rem',
      caption: '1rem',
      scale: 1.2,
    },
  };

  // Check icon component (for checkmark lists)
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Render Media Section
  const renderMedia = () => {
    if (!data.media) return null;

    const {
      type = 'image',
      src,
      alt = '',
      items,
      icon,
      iconSize = 'lg',
      aspectRatio,
      objectFit = 'cover',
      rounded: mediaRounded,
      shadow: mediaShadow,
      border: mediaBorder,
      zoom,
    } = data.media;

    const mediaStyles: React.CSSProperties = {
      width: '100%',
      height: aspectRatio === 'auto' ? 'auto' : undefined,
      aspectRatio: aspectRatio && aspectRatio !== 'auto' ? aspectRatio.replace(':', '/') : undefined,
      objectFit: objectFit as any,
      borderRadius: mediaRounded ? (typeof mediaRounded === 'boolean' ? '0.5rem' : `var(--border-radius-${mediaRounded})`) : undefined,
      boxShadow: mediaShadow ? (typeof mediaShadow === 'boolean' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : `var(--shadow-${mediaShadow})`) : undefined,
      border: mediaBorder ? (typeof mediaBorder === 'boolean' ? '1px solid var(--color-border)' : `${mediaBorder} solid var(--color-border)`) : undefined,
      transition: zoom ? 'transform 0.3s ease' : undefined,
    };

    const mediaContainerStyles: React.CSSProperties = {
      overflow: zoom ? 'hidden' : 'visible',
      borderRadius: mediaRounded ? (typeof mediaRounded === 'boolean' ? '0.5rem' : `var(--border-radius-${mediaRounded})`) : undefined,
    };

    const mediaHoverClass = zoom ? 'vtx-content-block__media--zoom' : '';

    switch (type) {
      case 'image':
        if (src) {
          return (
            <div className="vtx-content-block__media-container" style={mediaContainerStyles}>
              <img
                src={src}
                alt={alt}
                className={`vtx-content-block__media ${mediaHoverClass}`}
                style={mediaStyles}
              />
            </div>
          );
        }
        break;

      case 'avatar':
        if (src) {
          // Map iconSize to Avatar's supported sizes (sm, md, lg)
          const avatarSize = iconSize === 'xl' ? 'lg' : iconSize as 'sm' | 'md' | 'lg';
          return (
            <Avatar
              src={src}
              alt={alt}
              size={avatarSize}
              shape="circle"
              className="vtx-content-block__avatar"
            />
          );
        }
        break;

      case 'icon':
        if (icon) {
          const iconSizeMap = { sm: '2rem', md: '3rem', lg: '4rem', xl: '6rem' };
          return (
            <div
              className="vtx-content-block__icon"
              style={{
                fontSize: iconSizeMap[iconSize],
                width: iconSizeMap[iconSize],
                height: iconSizeMap[iconSize],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {icon}
            </div>
          );
        }
        break;

      case 'gallery':
        if (items && items.length > 0) {
          return (
            <div className="vtx-content-block__gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
              {items.map((item, index) => (
                <div key={index} style={mediaContainerStyles}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="vtx-content-block__gallery-item"
                    style={mediaStyles}
                  />
                  {item.caption && (
                    <Text variant="caption" className="vtx-content-block__gallery-caption" style={{ marginTop: '0.5rem' }}>
                      {item.caption}
                    </Text>
                  )}
                </div>
              ))}
            </div>
          );
        }
        break;

      case 'logo':
      case 'illustration':
        if (src) {
          return (
            <div className="vtx-content-block__media-container" style={{ ...mediaContainerStyles, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={src}
                alt={alt}
                className="vtx-content-block__media"
                style={{ ...mediaStyles, maxWidth: '100%', height: 'auto' }}
              />
            </div>
          );
        }
        break;
    }

    return null;
  };

  // Render Content Section
  const renderContent = () => {
    const content = data.content || {};
    const colors = data.colors || {};

    return (
      <div className="vtx-content-block__content" style={{ textAlign: contentAlign }}>
        {/* Eyebrow */}
        {content.eyebrow && (
          <Text
            variant={content.eyebrowVariant || 'overline'}
            className="vtx-content-block__eyebrow"
            style={{ color: colors.eyebrow, marginBottom: gapMap[gap] || gapMap.sm, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: sizeMap[size].eyebrow }}
          >
            {content.eyebrow}
          </Text>
        )}

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <Flex gap="xs" wrap="wrap" style={{ marginBottom: gapMap[gap] || gapMap.md }}>
            {data.tags.map((tag, index) => {
              // Map WidgetVariant to Badge variant (danger->error, filter secondary->primary)
              const badgeVariant = tag.variant === 'danger' ? 'error' : tag.variant === 'secondary' ? 'primary' : tag.variant || 'primary';
              return tag.href ? (
                <Link key={index} href={tag.href}>
                  <Badge variant={badgeVariant as 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info'}>
                    {tag.icon && <span style={{ marginRight: '0.25rem' }}>{tag.icon}</span>}
                    {tag.text}
                  </Badge>
                </Link>
              ) : (
                <Badge key={index} variant={badgeVariant as 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info'}>
                  {tag.icon && <span style={{ marginRight: '0.25rem' }}>{tag.icon}</span>}
                  {tag.text}
                </Badge>
              );
            })}
          </Flex>
        )}

        {/* Heading */}
        {content.heading && (
          <Text
            variant={content.headingVariant || 'h2'}
            className="vtx-content-block__heading"
            style={{ color: colors.heading, marginBottom: content.subheading || content.body ? gapMap[gap] || gapMap.md : '0', fontWeight: 'bold', fontSize: sizeMap[size].heading }}
          >
            {content.heading}
          </Text>
        )}

        {/* Subheading */}
        {content.subheading && (
          <Text
            variant={content.subheadingVariant || 'h4'}
            className="vtx-content-block__subheading"
            style={{ color: colors.subheading, marginBottom: content.body ? gapMap[gap] || gapMap.md : '0', fontSize: sizeMap[size].subheading }}
          >
            {content.subheading}
          </Text>
        )}

        {/* Body */}
        {content.body && (
          <Text
            variant={content.bodyVariant || 'body1'}
            className="vtx-content-block__body"
            style={{ color: colors.body, marginBottom: content.list || data.product || data.stats ? gapMap[gap] || gapMap.md : '0', lineHeight: '1.6', fontSize: sizeMap[size].body }}
          >
            {content.body}
          </Text>
        )}

        {/* List */}
        {content.list && content.list.length > 0 && (
          <ul className="vtx-content-block__list" style={{ margin: `${gapMap[gap] || gapMap.md} 0`, padding: 0, listStyle: 'none' }}>
            {content.list.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: gapMap.sm }}>
                {content.listType === 'check' && item.checked && (
                  <span style={{ color: 'var(--color-success)', marginRight: '0.5rem', flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                )}
                {content.listType === 'icon' && item.icon && (
                  <span style={{ marginRight: '0.5rem', flexShrink: 0 }}>{item.icon}</span>
                )}
                {content.listType === 'bullet' && (
                  <span style={{ marginRight: '0.5rem', flexShrink: 0 }}>•</span>
                )}
                {content.listType === 'number' && (
                  <span style={{ marginRight: '0.5rem', flexShrink: 0 }}>{index + 1}.</span>
                )}
                <Text variant="body1" style={{ flex: 1, fontSize: sizeMap[size].body }}>{item.text}</Text>
              </li>
            ))}
          </ul>
        )}

        {/* Product Info */}
        {data.product && (
          <div className="vtx-content-block__product" style={{ margin: `${gapMap[gap] || gapMap.md} 0` }}>
            <Flex gap="sm" align="center" wrap="wrap">
              {data.product.price && (
                <Flex gap="xs" align="center">
                  <Text variant="h3" style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: `calc(${sizeMap[size].heading} * 0.8)` }}>
                    {data.product.currency || '$'}{data.product.price}
                  </Text>
                  {data.product.comparePrice && (
                    <Text variant="body1" style={{ textDecoration: 'line-through', color: 'var(--color-text-muted)', fontSize: sizeMap[size].body }}>
                      {data.product.currency || '$'}{data.product.comparePrice}
                    </Text>
                  )}
                  {data.product.discount && (
                    <Badge variant="error">{data.product.discount}</Badge>
                  )}
                </Flex>
              )}
            </Flex>

            <Flex gap="sm" align="center" style={{ marginTop: gapMap.sm }} wrap="wrap">
              {data.product.rating && (
                <Flex gap="xs" align="center">
                  <Text variant="body1" style={{ fontSize: sizeMap[size].body }}>⭐ {data.product.rating}</Text>
                  {data.product.reviewCount && (
                    <Text variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[size].caption }}>
                      ({data.product.reviewCount} reviews)
                    </Text>
                  )}
                </Flex>
              )}
              {data.product.stock && (
                <Badge variant={
                  data.product.stock === 'in-stock' || (typeof data.product.stock === 'number' && data.product.stock > 0) ? 'success' :
                  data.product.stock === 'limited' ? 'warning' : 'error'
                }>
                  {typeof data.product.stock === 'number' ? `${data.product.stock} in stock` : data.product.stock}
                </Badge>
              )}
              {data.product.sku && (
                <Text variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[size].caption }}>
                  SKU: {data.product.sku}
                </Text>
              )}
            </Flex>
          </div>
        )}

        {/* Stats */}
        {data.stats && data.stats.length > 0 && (
          <div className="vtx-content-block__stats" style={{ margin: `${gapMap[gap] || gapMap.lg} 0` }}>
            <Flex gap="lg" wrap="wrap" justify={contentAlign === 'center' ? 'center' : contentAlign === 'right' ? 'end' : 'start'}>
              {data.stats.map((stat, index) => (
                <div key={index} className="vtx-content-block__stat-item">
                  {stat.icon && <div style={{ marginBottom: gapMap.sm, fontSize: `calc(1.5rem * ${sizeMap[size].scale})` }}>{stat.icon}</div>}
                  <Text variant="h3" style={{ fontWeight: 'bold', marginBottom: gapMap.xs, fontSize: `calc(${sizeMap[size].heading} * 0.85)` }}>
                    {stat.value}
                  </Text>
                  <Text variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[size].body }}>
                    {stat.label}
                  </Text>
                </div>
              ))}
            </Flex>
          </div>
        )}

        {/* Quote */}
        {data.quote && (
          <div className="vtx-content-block__quote" style={{ 
            margin: `${gapMap[gap] || gapMap.lg} 0`, 
            padding: `1rem ${gapMap.lg}`,
            borderLeft: '4px solid var(--color-primary)',
            backgroundColor: 'var(--color-background-subtle)',
            borderRadius: '0.25rem'
          }}>
            <Text variant="body1" style={{ fontStyle: 'italic', marginBottom: data.quote.author ? gapMap.sm : '0', fontSize: sizeMap[size].body }}>
              "{data.quote.text}"
            </Text>
            {data.quote.author && (
              <Text variant="body2" style={{ color: 'var(--color-text-muted)', fontWeight: 'bold', fontSize: sizeMap[size].caption }}>
                — {data.quote.author}
              </Text>
            )}
          </div>
        )}

        {/* Metadata */}
        {data.metadata && data.metadata.length > 0 && (
          <div className="vtx-content-block__metadata" style={{ margin: `${gapMap[gap] || gapMap.md} 0` }}>
            <Flex direction="column" gap="xs">
              {data.metadata.map((meta, index) => (
                <Flex key={index} gap="sm" align="center">
                  {meta.icon && <span style={{ color: 'var(--color-text-muted)' }}>{meta.icon}</span>}
                  <Text variant="body2" style={{ fontSize: sizeMap[size].caption }}>
                    <strong>{meta.label}:</strong> {meta.value}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </div>
        )}

        {/* Author */}
        {data.author && (
          <div className="vtx-content-block__author" style={{ margin: `${gapMap[gap] || gapMap.lg} 0` }}>
            <Flex gap="md" align="center">
              {data.author.avatar && (
                <Avatar src={data.author.avatar} alt={data.author.name} size={size === 'xs' ? 'sm' : size === 'sm' ? 'md' : 'lg'} />
              )}
              <div>
                <Text variant="body1" style={{ fontWeight: 'bold', marginBottom: gapMap.xs, fontSize: sizeMap[size].subheading }}>
                  {data.author.name}
                </Text>
                {data.author.role && (
                  <Text variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[size].caption }}>
                    {data.author.role}{data.author.company && ` at ${data.author.company}`}
                  </Text>
                )}
                {data.author.social && data.author.social.length > 0 && (
                  <Flex gap="sm" style={{ marginTop: gapMap.sm }}>
                    {data.author.social.map((social, index) => (
                      <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: sizeMap[size].body }}>
                        {social.icon || social.platform}
                      </Link>
                    ))}
                  </Flex>
                )}
              </div>
            </Flex>
          </div>
        )}

        {/* Caption */}
        {content.caption && (
          <Text
            variant="caption"
            className="vtx-content-block__caption"
            style={{ color: colors.caption || 'var(--color-text-muted)', marginTop: gapMap[gap] || gapMap.md, display: 'block', fontSize: sizeMap[size].caption }}
          >
            {content.caption}
          </Text>
        )}

        {/* Footnote */}
        {content.footnote && (
          <Text
            variant="caption"
            className="vtx-content-block__footnote"
            style={{ color: 'var(--color-text-muted)', marginTop: gapMap.sm, fontSize: sizeMap[size].caption, display: 'block' }}
          >
            {content.footnote}
          </Text>
        )}

        {/* Actions */}
        {data.actions && data.actions.length > 0 && (
          <Flex gap="md" style={{ marginTop: gapMap[gap] || gapMap.lg }} wrap="wrap" justify={contentAlign === 'center' ? 'center' : contentAlign === 'right' ? 'end' : 'start'}>
            {data.actions.map((action, index) => (
              action.type === 'link' ? (
                <Link
                  key={index}
                  href={action.href}
                  variant={action.variant as any}
                >
                  {action.iconPosition === 'left' && action.icon && <span style={{ marginRight: '0.5rem' }}>{action.icon}</span>}
                  {action.label}
                  {action.iconPosition === 'right' && action.icon && <span style={{ marginLeft: '0.5rem' }}>{action.icon}</span>}
                </Link>
              ) : (
                <Button
                  key={index}
                  variant={action.variant === 'outline' ? 'outline' : action.variant === 'ghost' ? 'ghost' : action.variant as any}
                  size={action.size || 'md'}
                  onClick={action.onClick}
                  href={action.href}
                  style={{ width: action.fullWidth ? '100%' : 'auto' }}
                >
                  {action.iconPosition === 'left' && action.icon && <span style={{ marginRight: '0.5rem' }}>{action.icon}</span>}
                  {action.label}
                  {action.iconPosition === 'right' && action.icon && <span style={{ marginLeft: '0.5rem' }}>{action.icon}</span>}
                </Button>
              )
            ))}
          </Flex>
        )}
      </div>
    );
  };

  // Determine layout direction and structure
  const getLayoutStyles = (): { container: React.CSSProperties; media: React.CSSProperties; content: React.CSSProperties } => {
    const baseStyles = {
      container: {
        display: 'flex',
        gap: gapMap[gap],
        alignItems: verticalAlign,
      } as React.CSSProperties,
      media: {} as React.CSSProperties,
      content: {} as React.CSSProperties,
    };

    switch (layout) {
      case 'media-left':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'row' as const },
          media: { flex: `0 0 ${mediaWidth}`, maxWidth: mediaWidth },
          content: { flex: '1' },
        };

      case 'media-right':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'row-reverse' as const },
          media: { flex: `0 0 ${mediaWidth}`, maxWidth: mediaWidth },
          content: { flex: '1' },
        };

      case 'split-equal':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'row' as const },
          media: { flex: '1' },
          content: { flex: '1' },
        };

      case 'media-top':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'column' as const },
          media: { width: '100%' },
          content: { width: '100%' },
        };

      case 'media-bottom':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'column-reverse' as const },
          media: { width: '100%' },
          content: { width: '100%' },
        };

      case 'centered':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'column' as const, alignItems: 'center' },
          media: { maxWidth: '600px' },
          content: { maxWidth: '800px', textAlign: 'center' as const },
        };

      case 'centered-media-top':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'column' as const, alignItems: 'center' },
          media: { marginBottom: '1rem' },
          content: { textAlign: 'center' as const },
        };

      case 'sidebar-left':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'row' as const },
          media: { flex: '0 0 30%', maxWidth: '30%' },
          content: { flex: '1' },
        };

      case 'sidebar-right':
        return {
          ...baseStyles,
          container: { ...baseStyles.container, flexDirection: 'row-reverse' as const },
          media: { flex: '0 0 30%', maxWidth: '30%' },
          content: { flex: '1' },
        };

      case 'grid-2col':
      case 'grid-3col':
        const cols = layout === 'grid-2col' ? 2 : 3;
        return {
          ...baseStyles,
          container: {
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: gapMap[gap],
          },
          media: {},
          content: {},
        };

      case 'media-background':
        return {
          ...baseStyles,
          container: {
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          media: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          },
          content: {
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            padding: paddingMap[padding],
            textAlign: 'center' as const,
          },
        };

      default:
        return baseStyles;
    }
  };

  const layoutStyles = getLayoutStyles();

  // Wrapper styles
  const wrapperStyles: React.CSSProperties = {
    ...style,
    background: settings.background?.gradient || settings.background?.color || data.colors?.background,
    opacity: settings.background?.opacity,
    borderRadius: rounded ? (typeof rounded === 'boolean' ? '0.5rem' : `var(--border-radius-${rounded})`) : undefined,
    boxShadow: shadow ? (typeof shadow === 'boolean' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : `var(--shadow-${shadow})`) : undefined,
    padding: variant !== 'minimal' ? paddingMap[padding] : undefined,
    border: settings.border ? (typeof settings.border === 'boolean' || settings.border === 'all' ? '1px solid var(--color-border)' : 
      settings.border === 'left' ? 'none' :
      settings.border === 'right' ? 'none' :
      settings.border === 'top' ? 'none' :
      settings.border === 'bottom' ? 'none' : undefined) : undefined,
    borderLeft: settings.border === 'left' ? '4px solid var(--color-primary)' : undefined,
    borderRight: settings.border === 'right' ? '4px solid var(--color-primary)' : undefined,
    borderTop: settings.border === 'top' ? '4px solid var(--color-primary)' : undefined,
    borderBottom: settings.border === 'bottom' ? '4px solid var(--color-primary)' : undefined,
    transition: hover?.enabled ? 'transform 0.3s ease, box-shadow 0.3s ease' : undefined,
  };

  const hoverClass = hover?.enabled ? `vtx-content-block--hover-${hover.effect || 'lift'}` : '';

  const wrapperClass = [
    'vtx-content-block',
    `vtx-content-block--${layout}`,
    `vtx-content-block--${theme}`,
    `vtx-content-block--${variant}`,
    hoverClass,
    className,
  ].filter(Boolean).join(' ');

  // Media background layout
  if (layout === 'media-background') {
    return (
      <div className={wrapperClass} style={wrapperStyles}>
        <div style={layoutStyles.container}>
          {/* Background Media */}
          <div style={layoutStyles.media}>
            {renderMedia()}
          </div>

          {/* Overlay */}
          {overlay.enabled && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: overlay.color || 'rgba(0, 0, 0, 0.5)',
                opacity: overlay.opacity ?? 0.5,
                backdropFilter: overlay.blur ? `blur(${overlay.blur}px)` : undefined,
                zIndex: 1,
              }}
            />
          )}

          {/* Content */}
          <div style={layoutStyles.content}>
            {renderContent()}
          </div>
        </div>
      </div>
    );
  }

  // Grid layouts
  if (layout === 'grid-2col' || layout === 'grid-3col') {
    return (
      <div className={wrapperClass} style={wrapperStyles}>
        <div style={layoutStyles.container}>
          {/* In grid mode, render media and content as separate grid items */}
          {data.media && <div style={layoutStyles.media}>{renderMedia()}</div>}
          <div style={layoutStyles.content}>{renderContent()}</div>
        </div>
      </div>
    );
  }

  // Card variant wrapping
  if (variant === 'card' || variant === 'elevated' || variant === 'outlined' || variant === 'bordered') {
    const cardVariant = variant === 'card' || variant === 'elevated' ? 'elevated' : variant === 'outlined' || variant === 'bordered' ? 'outlined' : undefined;
    return (
      <Card
        variant={cardVariant}
        padding={padding}
        className={wrapperClass}
        style={wrapperStyles}
      >
        <div style={layoutStyles.container}>
          {data.media && <div style={layoutStyles.media}>{renderMedia()}</div>}
          <div style={layoutStyles.content}>{renderContent()}</div>
        </div>
      </Card>
    );
  }

  // Standard layouts
  return (
    <div className={wrapperClass} style={wrapperStyles}>
      <div style={layoutStyles.container}>
        {data.media && <div style={layoutStyles.media}>{renderMedia()}</div>}
        <div style={layoutStyles.content}>{renderContent()}</div>
      </div>

      {/* Inline CSS for hover effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .vtx-content-block--hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .vtx-content-block--hover-scale:hover {
          transform: scale(1.02);
        }
        .vtx-content-block--hover-glow:hover {
          box-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.3);
        }
        .vtx-content-block__media--zoom:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          ${responsive.stackOnMobile ? `
            .vtx-content-block__container {
              flex-direction: column !important;
            }
            .vtx-content-block__media,
            .vtx-content-block__content {
              flex: 1 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
          ` : ''}
          ${responsive.hideMediaOnMobile ? `
            .vtx-content-block__media {
              display: none;
            }
          ` : ''}
        }
      `}} />
    </div>
  );
};

export default ContentBlockWidget;
