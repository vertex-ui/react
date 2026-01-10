"use client";

import React, { useCallback, useState } from 'react';
import { Button } from '../../Button';
import { Typography } from '../../../components/Typography';
import { useTheme } from '../../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/IconComponents';
import type { CarouselWidgetData, CarouselWidgetSettings } from '../types';

interface CarouselWidgetProps {
  data: CarouselWidgetData;
  settings?: CarouselWidgetSettings;
  
  // Backward compatibility
  className?: string;
  theme?: any;
  variant?: any;
  size?: any;
  style?: React.CSSProperties;
  borderRadius?: boolean;
  /**
   * Custom Carousel/Swiper component to use (e.g., Swiper, react-slick)
   * @example
   * import { Swiper, SwiperSlide } from 'swiper/react'
   * <CarouselWidget carouselComponent={Swiper} slideComponent={SwiperSlide} />
   */
  carouselComponent?: React.ElementType;
  /**
   * Custom Slide component to use with the carousel
   */
  slideComponent?: React.ElementType;
  /**
   * Custom Image component to use (e.g., Next.js Image, native img)
   * @example
   * import Image from 'next/image'
   * <CarouselWidget imageComponent={Image} />
   */
  imageComponent?: React.ElementType;
  /**
   * Props to pass to the carousel component
   */
  carouselProps?: Record<string, any>;
  /**
   * Props to pass to the image component
   */
  imageProps?: Record<string, any>;
}

interface SlideData {
  id: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
  caption?: {
    heading?: string;
    subheading?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    position?: 'left' | 'center' | 'right';
  };
  seo?: {
    structuredData?: Record<string, any>;
  };
}

const CarouselWidget: React.FC<CarouselWidgetProps> = ({
  data,
  settings,
  className = '',
  style,
  borderRadius = false,
  carouselComponent,
  slideComponent,
  imageComponent = 'img',
  carouselProps = {},
  imageProps = {},
}) => {
  const { tokens } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  // Detect mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // tailwind md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const {
    slides = [],
  } = data;

  const overlayTheme = settings?.overlayTheme || 'dark';
  const height = settings?.height || '60vh';
  const minHeight = settings?.minHeight || '350px';
  const maxHeight = settings?.maxHeight || '600px';
  const showOverlay = settings?.showOverlay !== false;
  const hideNavigationOnMobile = settings?.hideNavigationOnMobile || false;
  const buttonSize = settings?.buttonSize || 'md';
  const buttonVariant = settings?.buttonVariant || 'primary';

  // Determine if navigation should be shown
  const showNavigation = !hideNavigationOnMobile || !isMobile;

  // Default Swiper configuration
  const defaultSwiperConfig = {
    navigation: { enabled: true },
    pagination: { enabled: true, clickable: true, type: 'bullets' },
    autoplay: { enabled: true, delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
    loop: true,
    effect: 'slide',
    speed: 600,
  };

  const mergedConfig = { ...defaultSwiperConfig, ...settings?.swiperConfig };

  // Generate SEO structured data
  const generateStructuredData = useCallback((slide: SlideData, index: number) => {
    if (!slide.seo?.structuredData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      url: slide.image.src,
      description: slide.image.alt || slide.caption?.description,
      name: slide.caption?.heading,
      caption: slide.caption?.description,
      position: index + 1,
      ...slide.seo.structuredData,
    };
  }, []);

  const handleSlideClick = useCallback((url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // swipe threshold
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!slides || slides.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          color: tokens?.colors?.neutral?.[500] || '#666',
        }}
      >
        No slides available
      </div>
    );
  }

  const carouselStyles: React.CSSProperties = {
    width: '100%',
    height: `clamp(${minHeight}, ${height}, ${maxHeight})`,
    position: 'relative',
    overflow: 'visible',
    ...(borderRadius && { borderRadius: tokens?.borderRadius?.lg || '8px' }),
    ...style,
  };

  const slideStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: tokens?.colors?.neutral?.[50] || '#f5f5f5',
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    userSelect: 'none',
  };

  const overlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease',
    background:
      overlayTheme === 'dark'
        ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%)'
        : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.6) 100%)',
  };

  const getCaptionStyles = (position: string = 'right'): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: '50%',
      color: '#fff',
      maxWidth: 'min(90%, 550px)',
      zIndex: 3,
      padding: 'clamp(16px, 3vw, 32px)',
      transform: 'translateY(-50%)',
    };

    const positionStyles: Record<string, React.CSSProperties> = {
      left: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left: 'clamp(20px, 8%, 80px)',
      },
      center: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      right: {
        textAlign: 'right',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 'clamp(20px, 8%, 80px)',
      },
    };

    const noOverlayStyles = !showOverlay
      ? {
          backdropFilter: 'blur(8px)',
          background: 'rgba(0, 0, 0, 0.45)',
          borderRadius: tokens?.borderRadius?.lg || '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }
      : {};

    return {
      ...baseStyles,
      ...positionStyles[position],
      ...noOverlayStyles,
    };
  };

  const renderSlideContent = (slide: SlideData, index: number) => {
    const structuredData = generateStructuredData(slide, index);
    const ImageComponent = imageComponent;

    return (
      <div key={slide.id || index} style={slideStyles}>
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}

        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          <ImageComponent
            src={slide.image.src}
            alt={slide.image.alt}
            style={imageStyles}
            loading={slide.image.priority || index === 0 ? 'eager' : 'lazy'}
            {...imageProps}
          />
        </div>

        {showOverlay && <div style={overlayStyles} />}

        {slide.caption && (
          <div style={getCaptionStyles(slide.caption.position)}>
            <div style={{ width: '100%' }}>
              {slide.caption.heading && (
                <div style={{ marginBottom: 'clamp(12px, 2vw, 16px)' }}>
                  <Typography
                    variant="h2"
                    as="h2"
                    textColor="#fff"
                    size="clamp(24px, 5vw, 48px)"
                    lineHeight={1.2}
                    noMargin
                    style={{
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {slide.caption.heading}
                  </Typography>
                </div>
              )}

              {slide.caption.subheading && (
                <div style={{ marginBottom: 'clamp(12px, 2vw, 16px)' }}>
                  <Typography
                    variant="h4"
                    as="h3"
                    textColor="#fff"
                    weight="medium"
                    size="clamp(18px, 3vw, 32px)"
                    lineHeight={1.3}
                    noMargin
                    style={{
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {slide.caption.subheading}
                  </Typography>
                </div>
              )}

              {slide.caption.description && (
                <div style={{ marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>
                  <Typography
                    variant="body1"
                    textColor="#fff"
                    size="clamp(14px, 2vw, 18px)"
                    lineHeight={1.6}
                    noMargin
                    style={{
                      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {slide.caption.description}
                  </Typography>
                </div>
              )}

              {slide.caption.buttonText && (
                <Button
                  variant={buttonVariant as any}
                  size={buttonSize as any}
                  onClick={() => handleSlideClick(slide.caption?.buttonUrl)}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  {slide.caption.buttonText}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // If custom carousel component is provided (Swiper, react-slick, etc.)
  if (carouselComponent && slideComponent) {
    const CarouselComponent = carouselComponent;
    const SlideComponent = slideComponent;

    return (
      <div className={className} style={carouselStyles}>
        <CarouselComponent {...carouselProps}>
          {slides.map((slide: SlideData, index: number) => (
            <SlideComponent key={slide.id || index}>
              {renderSlideContent(slide, index)}
            </SlideComponent>
          ))}
        </CarouselComponent>
      </div>
    );
  }

  // Default fallback carousel with navigation
  return (
    <div className={className} style={carouselStyles}>
      {/* Inner carousel wrapper with overflow hidden */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: borderRadius ? tokens?.borderRadius?.lg || '8px' : '0',
        }}
      >
        {/* Carousel container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.3s ease',
            display: 'flex',
            touchAction: 'pan-y',
          }}
        >
        {slides.map((slide: SlideData, index: number) => (
          <div
            key={slide.id || index}
            style={{
              minWidth: '100%',
              height: '100%',
            }}
          >
            {renderSlideContent(slide, index)}
          </div>
        ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {slides.length > 1 && mergedConfig.navigation?.enabled && showNavigation && (
        <>
          <Button
            variant="ghost"
            iconOnly
            darkText={true}
            onClick={prevSlide}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              zIndex: 10,
            }}
          >
            <ChevronLeftIcon size={34} />
          </Button>
          <Button
            variant="ghost"
            iconOnly
            darkText={true}
            onClick={nextSlide}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              zIndex: 10,
            }}
          >
            <ChevronRightIcon size={34} />
          </Button>
        </>
      )}

      {/* Pagination dots */}
      {slides.length > 1 && mergedConfig.pagination?.enabled && (
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(12px, 3vw, 20px)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'clamp(6px, 1.5vw, 10px)',
            zIndex: 20,
            padding: '8px 12px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',
            backdropFilter: 'blur(4px)',
            pointerEvents: 'auto',
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentSlide === index ? '28px' : '10px',
                height: '10px',
                borderRadius: currentSlide === index ? '5px' : '50%',
                border: 'none',
                backgroundColor: currentSlide === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
                pointerEvents: 'auto',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselWidget;
