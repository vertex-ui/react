"use client";

import React, { useCallback, useState, useEffect } from 'react';
import { GridCarouselWidgetData, GridCarouselWidgetSettings } from '../types';
import { useTheme } from '../../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/IconComponents';
import ProductWidget from './ProductWidget';

export interface GridCarouselWidgetProps {
  data: GridCarouselWidgetData;
  settings?: GridCarouselWidgetSettings;
}

/**
 * GridCarouselWidget - Theme-based grid carousel
 * 
 * Supports two themes:
 * - 'product': Displays array of product widgets
 * - 'base': Displays array of custom React nodes
 * 
 * Features:
 * - Responsive grid with customizable items per view
 * - Auto-play with configurable delay
 * - Navigation arrows and pagination dots
 * - Smooth transitions and interactions
 * - Theme-based rendering with proper data/settings separation
 */
const GridCarouselWidget: React.FC<GridCarouselWidgetProps> = ({
  data,
  settings = {},
}) => {
  const { tokens } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(
    settings.itemsPerView?.desktop || 3
  );
  const [isMobile, setIsMobile] = useState(false);

  // Extract settings with defaults
  const {
    itemsPerView = {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap = '20px',
    autoplay = false,
    autoplayDelay = 3000,
    showNavigation = true,
    showPagination = true,
    scrollBehavior = 'page',
    borderRadius = true,
    hideNavigationOnMobile = false,
    backgroundColor,
    productSettings = {},
    className = '',
    style,
  } = settings;

  // Get items based on theme
  const items = React.useMemo(() => {
    if (data.theme === 'product' && data.products) {
      return data.products;
    }
    if (data.theme === 'base' && data.items) {
      return data.items;
    }
    return [];
  }, [data]);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 768) {
        setCurrentItemsPerView(itemsPerView.mobile || 1);
      } else if (width < 1024) {
        setCurrentItemsPerView(itemsPerView.tablet || 2);
      } else {
        setCurrentItemsPerView(itemsPerView.desktop || 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / currentItemsPerView);
  const maxIndex = items.length - currentItemsPerView;

  // Auto-play
  useEffect(() => {
    if (!autoplay || items.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, currentIndex, currentItemsPerView]);

  const handlePrevious = useCallback(() => {
    if (scrollBehavior === 'page') {
      setCurrentIndex((prev) => Math.max(0, prev - currentItemsPerView));
    } else {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  }, [currentItemsPerView, scrollBehavior]);

  const handleNext = useCallback(() => {
    if (scrollBehavior === 'page') {
      setCurrentIndex((prev) => {
        const next = prev + currentItemsPerView;
        return next > maxIndex ? 0 : next;
      });
    } else {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }
  }, [currentItemsPerView, maxIndex, scrollBehavior]);

  const handlePageClick = useCallback(
    (pageIndex: number) => {
      setCurrentIndex(pageIndex * currentItemsPerView);
    },
    [currentItemsPerView]
  );

  const getCurrentPage = () => {
    return Math.floor(currentIndex / currentItemsPerView);
  };

  // Render item based on theme
  const renderItem = useCallback(
    (item: any, index: number) => {
      if (data.theme === 'product') {
        // Calculate visibility for eager loading priority
        const isVisible = index < currentItemsPerView;

        return (
          <ProductWidget
            key={item.id || index}
            data={item}
            settings={{
              ...productSettings,
              priority: isVisible
            }}
          />
        );
      }

      // Base theme - render React node as-is
      return (
        <div key={index} style={{ height: '100%' }}>
          {item}
        </div>
      );
    },
    [data.theme, productSettings]
  );

  // Styles
  const containerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    padding: `clamp(20px, 4vw, 40px)`,
    backgroundColor: backgroundColor || tokens.colors.neutral[50],
    borderRadius: borderRadius ? tokens.borderRadius.lg : '0',
    boxShadow: tokens.shadows.sm,
    ...style,
  };

  const trackStyles: React.CSSProperties = {
    display: 'flex',
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: `translateX(-${(currentIndex * (100 / currentItemsPerView))}%)`,
  };

  const itemStyles: React.CSSProperties = {
    flex: `0 0 calc((100% - (${typeof gap === 'number' ? `${gap}px` : gap} * ${currentItemsPerView - 1})) / ${currentItemsPerView})`,
    minWidth: 0,
  };

  const navButtonStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: '#ffffff',
    border: `1px solid ${tokens.colors.neutral[300]}`,
    borderRadius: tokens.borderRadius.full,
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: tokens.shadows.md,
    transition: 'all 0.2s ease',
  };

  const paginationContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    marginTop: '24px',
  };

  const paginationDotStyles = (isActive: boolean): React.CSSProperties => ({
    width: isActive ? '24px' : '8px',
    height: '8px',
    borderRadius: tokens.borderRadius.full,
    backgroundColor: isActive ? tokens.colors.primary[500] : tokens.colors.neutral[300],
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.5,
  });

  // Empty state
  if (items.length === 0) {
    return (
      <div style={containerStyles}>
        <div style={{ textAlign: 'center', padding: '40px', color: tokens.colors.neutral[500] }}>
          No items to display
        </div>
      </div>
    );
  }

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;
  const shouldShowNavigation = showNavigation && (!hideNavigationOnMobile || !isMobile);

  return (
    <div className={className} style={containerStyles}>
      {/* Navigation Buttons */}
      {shouldShowNavigation && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            style={{
              ...navButtonStyles,
              left: '10px',
              opacity: canGoPrevious ? 1 : 0.3,
              cursor: canGoPrevious ? 'pointer' : 'not-allowed',
            }}
            onMouseEnter={(e) => {
              if (canGoPrevious) {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.backgroundColor = tokens.colors.neutral[100] || '#f5f5f5';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            aria-label="Previous"
          >
            <ChevronLeftIcon style={{ width: '24px', height: '24px', color: tokens.colors.neutral[900] }} />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext && !autoplay}
            style={{
              ...navButtonStyles,
              right: '10px',
              opacity: canGoNext || autoplay ? 1 : 0.3,
              cursor: canGoNext || autoplay ? 'pointer' : 'not-allowed',
            }}
            onMouseEnter={(e) => {
              if (canGoNext || autoplay) {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.backgroundColor = tokens.colors.neutral[100] || '#f5f5f5';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            aria-label="Next"
          >
            <ChevronRightIcon style={{ width: '24px', height: '24px', color: tokens.colors.neutral[900] }} />
          </button>
        </>
      )}

      {/* Carousel Track */}
      <div style={trackStyles}>
        {items.map((item, index) => (
          <div key={index} style={itemStyles}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      {showPagination && totalPages > 1 && (
        <div style={paginationContainerStyles}>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              onClick={() => handlePageClick(pageIndex)}
              style={paginationDotStyles(getCurrentPage() === pageIndex)}
              onMouseEnter={(e) => {
                if (getCurrentPage() !== pageIndex) {
                  e.currentTarget.style.opacity = '0.8';
                }
              }}
              onMouseLeave={(e) => {
                if (getCurrentPage() !== pageIndex) {
                  e.currentTarget.style.opacity = '0.5';
                }
              }}
              role="button"
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>
      )}

      {/* Screen Reader Info */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-live="polite" aria-atomic="true">
        Showing items {currentIndex + 1} to {Math.min(currentIndex + currentItemsPerView, items.length)} of {items.length}
      </div>
    </div>
  );
};

GridCarouselWidget.displayName = 'GridCarouselWidget';

export default GridCarouselWidget;
