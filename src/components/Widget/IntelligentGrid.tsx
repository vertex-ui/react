"use client";

import React from 'react';
import { GridConfig } from './types';

interface IntelligentGridProps {
  data: any[];
  grid?: GridConfig;
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}

export type { IntelligentGridProps };

/**
 * Calculates optimal grid columns based on data length
 */
const calculateAutoGrid = (dataLength: number) => {
  if (dataLength <= 1) return { mobile: 1, tablet: 1, desktop: 1 };
  if (dataLength === 2) return { mobile: 1, tablet: 2, desktop: 2 };
  if (dataLength === 3) return { mobile: 1, tablet: 2, desktop: 3 };
  if (dataLength === 4) return { mobile: 1, tablet: 2, desktop: 4 };
  if (dataLength <= 6) return { mobile: 2, tablet: 3, desktop: 3 };
  if (dataLength <= 8) return { mobile: 2, tablet: 3, desktop: 4 };
  if (dataLength <= 12) return { mobile: 2, tablet: 4, desktop: 6 };
  return { mobile: 2, tablet: 4, desktop: 6 }; // Max 6 columns
};

/**
 * Converts responsive columns to CSS Grid classes
 */
const getGridClasses = (mobile: number, tablet: number, desktop: number, spacing?: string) => {
  const spacingClass = spacing ? `gap-${spacing}` : 'gap-md';
  
  return [
    'vtx-widget-grid',
    spacingClass,
    `mobile-cols-${mobile}`,
    `tablet-cols-${tablet}`,
    `desktop-cols-${desktop}`,
  ].join(' ');
};

/**
 * Intelligent grid system that auto-adjusts based on data array length
 * or uses explicit configuration
 */
const IntelligentGrid: React.FC<IntelligentGridProps> = ({
  data,
  grid,
  renderItem,
  className = '',
}) => {
  // Use explicit grid config or calculate automatically
  const gridConfig = React.useMemo(() => {
    if (grid && !grid.auto) {
      return {
        mobile: grid.mobile || 1,
        tablet: grid.tablet || 2,
        desktop: grid.desktop || 3,
        spacing: grid.spacing || 'md',
        align: grid.align || 'stretch',
      };
    }
    
    const auto = calculateAutoGrid(data.length);
    return {
      mobile: grid?.mobile || auto.mobile,
      tablet: grid?.tablet || auto.tablet,
      desktop: grid?.desktop || auto.desktop,
      spacing: grid?.spacing || 'md',
      align: grid?.align || 'stretch',
    };
  }, [data.length, grid]);

  const gridClasses = getGridClasses(
    gridConfig.mobile,
    gridConfig.tablet,
    gridConfig.desktop,
    gridConfig.spacing
  );

  return (
    <div 
      className={`${gridClasses} ${className}`.trim()}
      style={{
        alignItems: gridConfig.align === 'stretch' ? 'stretch' : gridConfig.align,
      }}
    >
      {data.map((item, index) => (
        <div key={item?.id || index} className="vtx-widget-grid-item">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};

IntelligentGrid.displayName = 'IntelligentGrid';

export default IntelligentGrid as React.FC<IntelligentGridProps & React.RefAttributes<HTMLDivElement>>;
export { IntelligentGrid };