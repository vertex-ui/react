"use client";

import React, { useCallback, useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/IconComponents';
import './GridCarouselWidget.css';

export interface GridCarouselWidgetProps {
  items: React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  /**
   * Number of items to show per view at different breakpoints
   */
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /**
   * Gap between grid items
   */
  gap?: number | string;
  /**
   * Show navigation arrows
   */
  showNavigation?: boolean;
  /**
   * Show pagination dots
   */
  showPagination?: boolean;
  /**
   * Scroll behavior: 'page' scrolls by full page, 'item' scrolls by one item
   */
  scrollBehavior?: 'page' | 'item';
}

const GridCarouselWidget: React.FC<GridCarouselWidgetProps> = ({
  items = [],
  className = '',
  style,
  borderRadius = true,
  autoplay = false,
  autoplayDelay = 3000,
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  gap = '20px',
  showNavigation = true,
  showPagination = true,
  scrollBehavior = 'page',
}) => {
  const { tokens } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView.desktop || 3);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
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

  const containerClass = `vtx-grid-carousel-widget ${borderRadius ? 'vtx-grid-carousel-widget--rounded' : ''} ${className}`;

  const trackStyles: React.CSSProperties = {
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    transform: `translateX(-${(currentIndex * (100 / currentItemsPerView))}%)`,
  };

  const itemStyles: React.CSSProperties = {
    flex: `0 0 calc((100% - (${typeof gap === 'number' ? `${gap}px` : gap} * ${currentItemsPerView - 1})) / ${currentItemsPerView})`,
  };

  if (items.length === 0) {
    return (
      <div className={containerClass} style={style}>
        <div className="vtx-grid-carousel-widget__empty">
          No items to display
        </div>
      </div>
    );
  }

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div className={containerClass} style={style}>
      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="vtx-grid-carousel-widget__nav-button vtx-grid-carousel-widget__nav-button--prev"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="vtx-grid-carousel-widget__nav-icon" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext && !autoplay}
            className="vtx-grid-carousel-widget__nav-button vtx-grid-carousel-widget__nav-button--next"
            aria-label="Next"
          >
            <ChevronRightIcon className="vtx-grid-carousel-widget__nav-icon" />
          </button>
        </>
      )}

      {/* Carousel Track */}
      <div className="vtx-grid-carousel-widget__track" style={trackStyles}>
        {items.map((item, index) => (
          <div key={index} className="vtx-grid-carousel-widget__item" style={itemStyles}>
            {item}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      {showPagination && totalPages > 1 && (
        <div className="vtx-grid-carousel-widget__pagination">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              onClick={() => handlePageClick(pageIndex)}
              className={`vtx-grid-carousel-widget__dot ${getCurrentPage() === pageIndex ? 'vtx-grid-carousel-widget__dot--active' : ''}`}
              role="button"
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>
      )}

      {/* Screen Reader Info */}
      <div className="vtx-grid-carousel-widget__sr-only" aria-live="polite" aria-atomic="true">
        Showing items {currentIndex + 1} to {Math.min(currentIndex + currentItemsPerView, items.length)} of {items.length}
      </div>
    </div>
  );
};

export default GridCarouselWidget;
