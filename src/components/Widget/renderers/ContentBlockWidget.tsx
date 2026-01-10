import React from 'react';
import { ContentBlockWidgetData, ContentBlockWidgetSettings, WidgetTheme } from '../types';
import { Card } from '../../Card';
import { Typography } from '../../../components/Typography';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Link } from '../../Link';
import { Avatar } from '../../Avatar';
import { Badge } from '../../Badge';
import {
  BulletIcon,
  StarFullIcon,
  DashIcon
} from '../../../icons/IconComponents';

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
  // Extract settings with defaults
  const layout = settings.layout ?? 'media-left';
  const variant = settings.variant ?? 'minimal';
  const size = settings.size ?? themeDefaultSize;
  const sizeKey = size as keyof typeof sizeMap;
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

  // Enterprise-standard spacing scale (8px base system)
  // More compact, modern spacing following Material Design / Tailwind principles
  const gapMap = {
    none: '0',
    xs: '0.25rem',   // 4px - minimal spacing
    sm: '0.5rem',    // 8px - compact spacing
    md: '0.75rem',   // 12px - default spacing
    lg: '1rem',      // 16px - comfortable spacing
    xl: '1.5rem',    // 24px - generous spacing
    '2xl': '2rem',   // 32px - section spacing
  };

  // Same scale for consistency
  const paddingMap = {
    none: '0',
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
  };

  // Modern typography scale with proper hierarchy and multipliers
  // Using modular scale (1.25 ratio) for better visual harmony
  const sizeMap = {
    xs: {
      eyebrow: '0.625rem',    // 10px
      heading: '1.125rem',    // 18px (1.8x)
      subheading: '0.875rem', // 14px (1.4x)
      body: '0.75rem',        // 12px (base)
      caption: '0.625rem',    // 10px (0.83x)
      scale: 0.75,
    },
    sm: {
      eyebrow: '0.688rem',    // 11px
      heading: '1.313rem',    // 21px (1.5x)
      subheading: '1rem',     // 16px (1.14x)
      body: '0.875rem',       // 14px (base)
      caption: '0.75rem',     // 12px (0.86x)
      scale: 0.875,
    },
    md: {
      eyebrow: '0.75rem',     // 12px
      heading: '1.5rem',      // 24px (1.5x)
      subheading: '1.125rem', // 18px (1.13x)
      body: '1rem',           // 16px (base - standard web)
      caption: '0.875rem',    // 14px (0.88x)
      scale: 1,
    },
    lg: {
      eyebrow: '0.813rem',    // 13px
      heading: '1.75rem',     // 28px (1.56x)
      subheading: '1.25rem',  // 20px (1.11x)
      body: '1.125rem',       // 18px (base)
      caption: '0.938rem',    // 15px (0.83x)
      scale: 1.125,
    },
    xl: {
      eyebrow: '0.875rem',    // 14px
      heading: '2rem',        // 32px (1.6x)
      subheading: '1.375rem', // 22px (1.1x)
      body: '1.25rem',        // 20px (base)
      caption: '1rem',        // 16px (0.8x)
      scale: 1.25,
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
      width: settings.imageWidth || '100%',
      height: settings.imageHeight || (aspectRatio === 'auto' ? 'auto' : undefined),
      maxWidth: settings.imageMaxWidth,
      maxHeight: settings.imageMaxHeight,
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
      display: contentAlign === 'center' ? 'flex' : undefined,
      justifyContent: contentAlign === 'center' ? 'center' : contentAlign === 'right' ? 'flex-end' : undefined,
      alignItems: contentAlign === 'center' ? 'center' : undefined,
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
          // Extended icon size map with xs and 2xl
          const iconSizeMap = { 
            xs: '1.5rem',   // 24px
            sm: '2rem',     // 32px
            md: '3rem',     // 48px
            lg: '4rem',     // 64px
            xl: '6rem',     // 96px
            '2xl': '8rem'   // 128px
          };
          
          // Use settings override if available, otherwise use data.media iconSize
          const effectiveIconSize = settings.iconSize || iconSize;
          const finalIconSize = settings.customIconSize || iconSizeMap[effectiveIconSize];
          
          return (
            <div
              className="vtx-content-block__icon"
              style={{
                fontSize: finalIconSize,
                width: finalIconSize,
                height: finalIconSize,
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
                    <Typography variant="caption" className="vtx-content-block__gallery-caption" style={{ marginTop: '0.5rem' }}>
                      {item.caption}
                    </Typography>
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
          <Typography
            variant={content.eyebrowVariant || 'overline'}
            className="vtx-content-block__eyebrow"
            style={{ color: colors.eyebrow, marginBottom: gapMap.xs, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: sizeMap[sizeKey].eyebrow }}
          >
            {content.eyebrow}
          </Typography>
        )}

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <Flex gap="xs" wrap="wrap" style={{ marginBottom: gapMap.sm }}>
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
          <Typography
            variant={content.headingVariant || 'h2'}
            className="vtx-content-block__heading"
            style={{ color: colors.heading, marginBottom: content.subheading || content.body ? gapMap.sm : '0', fontWeight: 'bold', fontSize: sizeMap[sizeKey].heading }}
          >
            {content.heading}
          </Typography>
        )}

        {/* Subheading */}
        {content.subheading && (
          <Typography
            variant={content.subheadingVariant || 'h4'}
            className="vtx-content-block__subheading"
            style={{ color: colors.subheading, marginBottom: content.body ? gapMap.md : '0', fontSize: sizeMap[sizeKey].subheading }}
          >
            {content.subheading}
          </Typography>
        )}

        {/* Body */}
        {content.body && (
          <Typography
            variant={content.bodyVariant || 'body1'}
            className="vtx-content-block__body"
            style={{ color: colors.body, marginBottom: content.list || data.product || data.stats ? gapMap[gap] || gapMap.md : '0', lineHeight: '1.6', fontSize: sizeMap[sizeKey].body }}
          >
            {content.body}
          </Typography>
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
                {content.listType === 'bullet' && (
                  <span style={{ marginRight: '0.5rem', flexShrink: 0 }}><BulletIcon size={8} /></span>
                )}
                <Typography variant="body1" style={{ flex: 1, fontSize: sizeMap[sizeKey].body }}>{item.text}</Typography>
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
                  <Typography variant="h3" style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: `calc(${sizeMap[sizeKey].heading} * 0.8)` }}>
                    {data.product.currency || '$'}{data.product.price}
                  </Typography>
                  {data.product.comparePrice && (
                    <Typography variant="body1" style={{ textDecoration: 'line-through', color: 'var(--color-text-muted)', fontSize: sizeMap[sizeKey].body }}>
                      {data.product.currency || '$'}{data.product.comparePrice}
                    </Typography>
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
                  <Typography variant="body1" style={{ fontSize: sizeMap[sizeKey].body }}><StarFullIcon size={12} color="orange" /> {data.product.rating}</Typography>
                  {data.product.reviewCount && (
                    <Typography variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[sizeKey].caption }}>
                      ({data.product.reviewCount} reviews)
                    </Typography>
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
                <Typography variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[sizeKey].caption }}>
                  SKU: {data.product.sku}
                </Typography>
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
                  {stat.icon && <div style={{ marginBottom: gapMap.sm, fontSize: `calc(1.5rem * ${sizeMap[sizeKey].scale})` }}>{stat.icon}</div>}
                  <Typography variant="h3" style={{ fontWeight: 'bold', marginBottom: gapMap.xs, fontSize: `calc(${sizeMap[sizeKey].heading} * 0.85)` }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[sizeKey].body }}>
                    {stat.label}
                  </Typography>
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
            <Typography variant="body1" style={{ fontStyle: 'italic', marginBottom: data.quote.author ? gapMap.sm : '0', fontSize: sizeMap[sizeKey].body }}>
              "{data.quote.text}"
            </Typography>
            {data.quote.author && (
              <Typography variant="body2" style={{ color: 'var(--color-text-muted)', fontWeight: 'bold', fontSize: sizeMap[sizeKey].caption }}>
                <DashIcon /> {data.quote.author}
              </Typography>
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
                  <Typography variant="body2" style={{ fontSize: sizeMap[sizeKey].caption }}>
                    <strong>{meta.label}:</strong> {meta.value}
                  </Typography>
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
                <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: gapMap.xs, fontSize: sizeMap[sizeKey].subheading }}>
                  {data.author.name}
                </Typography>
                {data.author.role && (
                  <Typography variant="body2" style={{ color: 'var(--color-text-muted)', fontSize: sizeMap[sizeKey].caption }}>
                    {data.author.role}{data.author.company && ` at ${data.author.company}`}
                  </Typography>
                )}
                {data.author.social && data.author.social.length > 0 && (
                  <Flex gap="sm" style={{ marginTop: gapMap.sm }}>
                    {data.author.social.map((social, index) => (
                      <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: sizeMap[sizeKey].body }}>
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
          <Typography
            variant="caption"
            className="vtx-content-block__caption"
            style={{ color: colors.caption || 'var(--color-text-muted)', marginTop: gapMap[gap] || gapMap.md, display: 'block', fontSize: sizeMap[sizeKey].caption }}
          >
            {content.caption}
          </Typography>
        )}

        {/* Footnote */}
        {content.footnote && (
          <Typography
            variant="caption"
            className="vtx-content-block__footnote"
            style={{ color: 'var(--color-text-muted)', marginTop: gapMap.sm, fontSize: sizeMap[sizeKey].caption, display: 'block' }}
          >
            {content.footnote}
          </Typography>
        )}

        {/* Actions */}
        {data.actions && data.actions.length > 0 && (
          <Flex  columnGap={"10px"} className='mt-2' justify={contentAlign === 'center' ? 'center' : contentAlign === 'right' ? 'end' : 'start'}>
            {data.actions.map((action, index) => (
              action.type === 'link' ? (
                <Link
                  key={index}
                  href={action.href}
                  variant={action.variant as any}
                >
                  {action.iconPosition === 'left' && action.icon && <span style={{ marginRight: '0.25rem' }}>{action.icon}</span>}
                  {action.label}
                  {action.iconPosition === 'right' && action.icon && <span style={{ marginLeft: '0.25rem' }}>{action.icon}</span>}
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
                  {action.iconPosition === 'left' && action.icon && <span style={{ marginRight: '0.25rem' }}>{action.icon}</span>}
                  {action.label}
                  {action.iconPosition === 'right' && action.icon && <span style={{ marginLeft: '0.25rem' }}>{action.icon}</span>}
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
      media: {
        display: contentAlign === 'center' ? 'flex' : undefined,
        justifyContent: contentAlign === 'center' ? 'center' : contentAlign === 'right' ? 'flex-end' : undefined,
      } as React.CSSProperties,
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
