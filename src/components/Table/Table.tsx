import React, { useState, useMemo, TableHTMLAttributes } from 'react';
import './Table.css';

export interface TableColumn<T = unknown> {
  /**
   * Unique key for the column - used as React key and for data access
   */
  key: string;
  /**
   * Column header text or custom header content
   */
  header: React.ReactNode;
  /**
   * Function to render cell content
   * If not provided, displays row[key] directly
   */
  render?: (row: T, rowIndex: number) => React.ReactNode;
  /**
   * Width of the column (CSS value: px, %, rem, etc.)
   */
  width?: string;
  /**
   * Minimum width of the column
   */
  minWidth?: string;
  /**
   * Maximum width of the column
   */
  maxWidth?: string;
  /**
   * Text alignment for the column
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * If true, column can be sorted
   * @default false
   */
  sortable?: boolean;
  /**
   * Custom sort function for this column
   */
  sortFn?: (a: T, b: T) => number;
  /**
   * If true, column will be sticky (fixed) on horizontal scroll
   * @default false
   */
  sticky?: 'left' | 'right' | false;
  /**
   * Custom class name for column cells
   */
  className?: string;
  /**
   * Custom class name for header cell
   */
  headerClassName?: string;
}

export interface TableProps<T = unknown> extends Omit<
  TableHTMLAttributes<HTMLTableElement>,
  'children'
> {
  /**
   * Column definitions
   */
  columns: TableColumn<T>[];
  /**
   * Data rows to display
   */
  data: T[];
  /**
   * Function to get unique key for each row
   * Used for React key prop and row identification
   */
  getRowKey: (row: T, index: number) => string | number;
  /**
   * If true, table will have striped rows for better readability
   * @default false
   */
  striped?: boolean;
  /**
   * If true, rows will have hover effect
   * @default true
   */
  hoverable?: boolean;
  /**
   * If true, adds borders between cells
   * @default false
   */
  bordered?: boolean;
  /**
   * Size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional caption for the table (improves accessibility)
   */
  caption?: string;
  /**
   * Custom empty state content or message
   * @default 'No data available'
   */
  emptyMessage?: React.ReactNode;
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Custom loading content
   */
  loadingContent?: React.ReactNode;
  /**
   * If true, table will be horizontally scrollable
   * @default true
   */
  scrollable?: boolean;
  /**
   * Maximum height for vertical scrolling
   * Set to enable vertical scrolling with fixed header
   */
  maxHeight?: string;
  /**
   * Callback fired when a row is clicked
   */
  onRowClick?: (row: T, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void;
  /**
   * Function to determine if a row is selected
   */
  isRowSelected?: (row: T, index: number) => boolean;
  /**
   * Callback fired when row selection changes (requires isRowSelected)
   */
  onRowSelect?: (row: T, index: number) => void;
  /**
   * If true, enables column sorting
   * @default false
   */
  sortable?: boolean;
  /**
   * Current sort configuration
   */
  sortConfig?: {
    key: string;
    direction: 'asc' | 'desc';
  };
  /**
   * Callback fired when sort changes
   */
  onSortChange?: (key: string, direction: 'asc' | 'desc') => void;
  /**
   * Custom class name for table container
   */
  containerClassName?: string;
}

/**
 * Table component - Displays data in rows and columns with advanced features
 *
 * A comprehensive table component with support for sorting, selection, loading states,
 * sticky columns, and customizable rendering.
 *
 * @example
 * Basic usage
 * ```tsx
 * const columns = [
 *   { key: 'name', header: 'Name' },
 *   { key: 'email', header: 'Email' },
 *   { key: 'role', header: 'Role', align: 'center' },
 * ];
 *
 * const data = [
 *   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
 * ];
 *
 * <Table
 *   columns={columns}
 *   data={data}
 *   getRowKey={(row) => row.id}
 *   striped
 * />
 * ```
 *
 * @example
 * With sorting and row click
 * ```tsx
 * <Table
 *   columns={columns}
 *   data={data}
 *   getRowKey={(row) => row.id}
 *   sortable
 *   onRowClick={(row) => console.log('Clicked:', row)}
 * />
 * ```
 *
 * @example
 * With loading state and custom rendering
 * ```tsx
 * <Table
 *   columns={[
 *     { key: 'name', header: 'Name', sticky: 'left' },
 *     { key: 'status', header: 'Status', render: (row) => <Badge>{row.status}</Badge> }
 *   ]}
 *   data={data}
 *   getRowKey={(row) => row.id}
 *   loading={isLoading}
 *   maxHeight="400px"
 * />
 * ```
 */
export function Table<T = unknown>({
  columns,
  data,
  getRowKey,
  striped = false,
  hoverable = true,
  bordered = false,
  size = 'medium',
  caption,
  emptyMessage = 'No data available',
  loading = false,
  loadingContent,
  scrollable = true,
  maxHeight,
  onRowClick,
  isRowSelected,
  onRowSelect,
  sortable = false,
  sortConfig,
  onSortChange,
  className = '',
  containerClassName = '',
  ...props
}: TableProps<T>) {
  const [internalSortConfig, setInternalSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(sortConfig || null);

  const currentSortConfig = sortConfig || internalSortConfig;

  const handleSort = (columnKey: string) => {
    if (!sortable) return;

    const newDirection: 'asc' | 'desc' =
      currentSortConfig?.key === columnKey && currentSortConfig.direction === 'asc'
        ? 'desc'
        : 'asc';

    const newSortConfig = { key: columnKey, direction: newDirection };

    if (onSortChange) {
      onSortChange(columnKey, newDirection);
    } else {
      setInternalSortConfig(newSortConfig);
    }
  };

  const sortedData = useMemo(() => {
    if (!currentSortConfig || !sortable) return data;

    const column = columns.find((col) => col.key === currentSortConfig.key);
    const sortFn = column?.sortFn;

    return [...data].sort((a, b) => {
      if (sortFn) {
        return currentSortConfig.direction === 'asc' ? sortFn(a, b) : sortFn(b, a);
      }

      const aValue = (a as Record<string, unknown>)[currentSortConfig.key];
      const bValue = (b as Record<string, unknown>)[currentSortConfig.key];

      // Type-safe comparison
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return currentSortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return currentSortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Fallback for other types
      const aStr = String(aValue);
      const bStr = String(bValue);
      return currentSortConfig.direction === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, currentSortConfig, columns, sortable]);
  const containerClassNames = [
    'vtx-table-container',
    scrollable && 'vtx-table-container--scrollable',
    maxHeight && 'vtx-table-container--fixed-header',
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const tableClassNames = [
    'vtx-table',
    `vtx-table--${size}`,
    striped && 'vtx-table--striped',
    hoverable && 'vtx-table--hoverable',
    bordered && 'vtx-table--bordered',
    onRowClick && 'vtx-table--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleRowClick = (row: T, index: number, event: React.MouseEvent<HTMLTableRowElement>) => {
    if (onRowSelect) {
      onRowSelect(row, index);
    }
    onRowClick?.(row, index, event);
  };

  const renderSortIcon = (columnKey: string) => {
    if (!sortable) return null;

    const isSorted = currentSortConfig?.key === columnKey;
    const direction = currentSortConfig?.direction;

    return (
      <span className="vtx-table-sort-icon" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 3L9 6H3L6 3Z"
            fill={isSorted && direction === 'asc' ? 'currentColor' : '#ccc'}
          />
          <path
            d="M6 9L3 6H9L6 9Z"
            fill={isSorted && direction === 'desc' ? 'currentColor' : '#ccc'}
          />
        </svg>
      </span>
    );
  };

  return (
    <div className={containerClassNames} style={{ maxHeight }}>
      <table className={tableClassNames} {...props}>
        {caption && <caption className="vtx-table-caption">{caption}</caption>}
        <thead className="vtx-table-header">
          <tr>
            {columns.map((column) => {
              const isSortable = sortable && column.sortable !== false;
              const headerClassNames = [
                'vtx-table-header-cell',
                isSortable && 'vtx-table-header-cell--sortable',
                column.sticky && `vtx-table-header-cell--sticky-${column.sticky}`,
                column.headerClassName,
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <th
                  key={column.key}
                  className={headerClassNames}
                  style={{
                    width: column.width,
                    minWidth: column.minWidth,
                    maxWidth: column.maxWidth,
                    textAlign: column.align || 'left',
                  }}
                  onClick={() => isSortable && handleSort(column.key)}
                  role={isSortable ? 'button' : undefined}
                  tabIndex={isSortable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleSort(column.key);
                    }
                  }}
                  aria-sort={
                    currentSortConfig?.key === column.key
                      ? currentSortConfig.direction === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <span className="vtx-table-header-content">
                    {column.header}
                    {isSortable && renderSortIcon(column.key)}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="vtx-table-body">
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="vtx-table-loading">
                {loadingContent || <span className="vtx-table-loading-spinner">Loading...</span>}
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="vtx-table-empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => {
              const isSelected = isRowSelected?.(row, rowIndex);
              const rowClassNames = ['vtx-table-row', isSelected && 'vtx-table-row--selected']
                .filter(Boolean)
                .join(' ');

              return (
                <tr
                  key={getRowKey(row, rowIndex)}
                  className={rowClassNames}
                  onClick={(e) => handleRowClick(row, rowIndex, e)}
                  role={onRowClick || onRowSelect ? 'button' : undefined}
                  tabIndex={onRowClick || onRowSelect ? 0 : undefined}
                  aria-selected={isSelected}
                  onKeyDown={(e) => {
                    if ((onRowClick || onRowSelect) && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleRowClick(
                        row,
                        rowIndex,
                        e as unknown as React.MouseEvent<HTMLTableRowElement>
                      );
                    }
                  }}
                >
                  {columns.map((column) => {
                    const cellClassNames = [
                      'vtx-table-cell',
                      column.sticky && `vtx-table-cell--sticky-${column.sticky}`,
                      column.className,
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <td
                        key={column.key}
                        className={cellClassNames}
                        style={{
                          textAlign: column.align || 'left',
                          width: column.width,
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                        }}
                      >
                        {column.render
                          ? column.render(row, rowIndex)
                          : ((row as Record<string, unknown>)[column.key] as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = 'Table';

export default Table as React.FC<
  TableProps & React.RefAttributes<HTMLTableElement>
>;