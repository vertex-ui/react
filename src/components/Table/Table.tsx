import React, { useState, useMemo, TableHTMLAttributes, useCallback } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import { useThemeContext, Size } from '../../theme';
import { Checkbox } from '../Checkbox';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Input } from '../Input';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '../../icons/IconComponents';
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
  /**
   * Enable filtering for this column
   * @default false
   */
  filterable?: boolean;
  /**
   * Custom filter function
   */
  filterFn?: (row: T, filterValue: string) => boolean;
  /**
   * Filter placeholder text
   */
  filterPlaceholder?: string;
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
   * @default theme.defaultSize
   */
  size?: Size;
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
  /**
   * If true, enables row selection with checkboxes
   * @default false
   */
  selectable?: boolean;
  /**
   * Array of selected row keys
   */
  selectedRows?: (string | number)[];
  /**
   * Callback fired when selection changes
   */
  onSelectionChange?: (selectedKeys: (string | number)[]) => void;
  /**
   * If true, enables pagination
   * @default false
   */
  pagination?: boolean;
  /**
   * Current page (zero-indexed)
   * @default 0
   */
  page?: number;
  /**
   * Number of rows per page
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * Options for rows per page selection
   * @default [5, 10, 25, 50]
   */
  rowsPerPageOptions?: number[];
  /**
   * Callback fired when page changes
   */
  onPageChange?: (page: number) => void;
  /**
   * Callback fired when rows per page changes
   */
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  /**
   * Dense mode - reduces padding for compact view
   * @default false
   */
  dense?: boolean;
  /**
   * Enable expandable rows
   */
  expandableRows?: boolean;
  /**
   * Function to render expanded row content
   */
  renderExpandedRow?: (row: T, rowIndex: number) => React.ReactNode;
  /**
   * Array of expanded row keys
   */
  expandedRows?: (string | number)[];
  /**
   * Callback fired when row expansion changes
   */
  onExpandRow?: (rowKey: string | number) => void;
  /**
   * Sticky header when scrolling
   * @default false
   */
  stickyHeader?: boolean;
  /**
   * Show toolbar with title and actions
   */
  toolbar?: React.ReactNode | { title?: string; actions?: React.ReactNode };
  /**
   * Enable column filtering
   * @default false
   */
  filterable?: boolean;
  /**
   * Current filter values
   */
  filters?: Record<string, string>;
  /**
   * Callback fired when filters change
   */
  onFiltersChange?: (filters: Record<string, string>) => void;
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
function Table<T = unknown>({
  columns,
  data,
  getRowKey,
  striped = false,
  hoverable = true,
  bordered = false,
  size,
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
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  pagination = false,
  page = 0,
  rowsPerPage = 10,
  rowsPerPageOptions = [5, 10, 25, 50],
  onPageChange,
  onRowsPerPageChange,
  dense = false,
  expandableRows = false,
  renderExpandedRow,
  expandedRows = [],
  onExpandRow,
  stickyHeader = false,
  toolbar,
  filterable = false,
  filters = {},
  onFiltersChange,
  ...props
}: TableProps<T>) {
  const { theme } = useThemeContext();
  const tableSize = size || theme.defaultSize;

  const [internalSortConfig, setInternalSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(sortConfig || null);

  const [internalSelectedRows, setInternalSelectedRows] = useState<(string | number)[]>(
    selectedRows
  );
  const [internalExpandedRows, setInternalExpandedRows] = useState<(string | number)[]>(
    expandedRows
  );
  const [internalPage, setInternalPage] = useState(page);
  const [internalRowsPerPage, setInternalRowsPerPage] = useState(rowsPerPage);
  const [internalFilters, setInternalFilters] = useState<Record<string, string>>(filters);

  const currentSortConfig = sortConfig || internalSortConfig;
  const currentSelectedRows = selectedRows.length > 0 ? selectedRows : internalSelectedRows;
  const currentExpandedRows = expandedRows.length > 0 ? expandedRows : internalExpandedRows;
  const currentPage = onPageChange ? page : internalPage;
  const currentRowsPerPage = onRowsPerPageChange ? rowsPerPage : internalRowsPerPage;
  const currentFilters = Object.keys(filters).length > 0 ? filters : internalFilters;

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

  // Filtered data
  const filteredData = useMemo(() => {
    if (!filterable || Object.keys(currentFilters).length === 0) return sortedData;

    return sortedData.filter((row) => {
      return Object.entries(currentFilters).every(([columnKey, filterValue]) => {
        if (!filterValue) return true;

        const column = columns.find((col) => col.key === columnKey);
        if (column?.filterFn) {
          return column.filterFn(row, filterValue);
        }

        const cellValue = (row as Record<string, unknown>)[columnKey];
        const cellString = String(cellValue || '').toLowerCase();
        return cellString.includes(filterValue.toLowerCase());
      });
    });
  }, [sortedData, filterable, currentFilters, columns]);

  // Paginated data
  const paginatedData = useMemo(() => {
    if (!pagination) return filteredData;
    const startIndex = currentPage * currentRowsPerPage;
    return filteredData.slice(startIndex, startIndex + currentRowsPerPage);
  }, [filteredData, pagination, currentPage, currentRowsPerPage]);

  const displayData = pagination ? paginatedData : filteredData;

  // Selection handlers
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (!selectable) return;
      const newSelection = checked ? displayData.map((row, idx) => getRowKey(row, idx)) : [];
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      } else {
        setInternalSelectedRows(newSelection);
      }
    },
    [selectable, displayData, getRowKey, onSelectionChange]
  );

  const handleRowSelection = useCallback(
    (rowKey: string | number, checked: boolean) => {
      if (!selectable) return;
      const newSelection = checked
        ? [...currentSelectedRows, rowKey]
        : currentSelectedRows.filter((key) => key !== rowKey);
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      } else {
        setInternalSelectedRows(newSelection);
      }
    },
    [selectable, currentSelectedRows, onSelectionChange]
  );

  const isAllSelected =
    selectable && displayData.length > 0 && displayData.every((row, idx) =>
      currentSelectedRows.includes(getRowKey(row, idx))
    );

  const isSomeSelected =
    selectable && currentSelectedRows.length > 0 && !isAllSelected;

  // Expansion handlers
  const handleExpandRow = useCallback(
    (rowKey: string | number) => {
      if (!expandableRows) return;
      const isExpanded = currentExpandedRows.includes(rowKey);
      const newExpanded = isExpanded
        ? currentExpandedRows.filter((key) => key !== rowKey)
        : [...currentExpandedRows, rowKey];

      if (onExpandRow) {
        onExpandRow(rowKey);
      } else {
        setInternalExpandedRows(newExpanded);
      }
    },
    [expandableRows, currentExpandedRows, onExpandRow]
  );

  // Pagination handlers
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (onPageChange) {
        onPageChange(newPage);
      } else {
        setInternalPage(newPage);
      }
    },
    [onPageChange]
  );

  const handleRowsPerPageChange = useCallback(
    (newRowsPerPage: number) => {
      if (onRowsPerPageChange) {
        onRowsPerPageChange(newRowsPerPage);
      } else {
        setInternalRowsPerPage(newRowsPerPage);
        setInternalPage(0); // Reset to first page
      }
    },
    [onRowsPerPageChange]
  );

  // Filter handlers
  const handleFilterChange = useCallback(
    (columnKey: string, value: string) => {
      const newFilters = { ...currentFilters, [columnKey]: value };
      if (!value) {
        delete newFilters[columnKey];
      }
      if (onFiltersChange) {
        onFiltersChange(newFilters);
      } else {
        setInternalFilters(newFilters);
      }
      // Reset to first page when filtering
      if (pagination) {
        if (onPageChange) {
          onPageChange(0);
        } else {
          setInternalPage(0);
        }
      }
    },
    [currentFilters, onFiltersChange, pagination, onPageChange]
  );
  const containerClassNames = [
    'vtx-table-container',
    scrollable && 'vtx-table-container--scrollable',
    maxHeight && 'vtx-table-container--fixed-header',
    stickyHeader && 'vtx-table-container--sticky-header',
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const tableClassNames = [
    'vtx-table',
    `vtx-table--${tableSize}`,
    dense && 'vtx-table--dense',
    striped && 'vtx-table--striped',
    hoverable && 'vtx-table--hoverable',
    bordered && 'vtx-table--bordered',
    (onRowClick || selectable) && 'vtx-table--clickable',
    stickyHeader && 'vtx-table--sticky-header',
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

    if (!isSorted) {
      return (
        <span className="vtx-table-sort-icon vtx-table-sort-icon--inactive">
          <ArrowUpIcon size={14} />
        </span>
      );
    }

    return (
      <span className="vtx-table-sort-icon vtx-table-sort-icon--active">
        {direction === 'asc' ? <ArrowUpIcon size={14} /> : <ArrowDownIcon size={14} />}
      </span>
    );
  };

  return (
    <div className="vtx-table-wrapper">
      {toolbar && (
        <div className="vtx-table-toolbar">
          {typeof toolbar === 'object' &&
          toolbar !== null &&
          !React.isValidElement(toolbar) &&
          'title' in toolbar ? (
            <Flex justify="between" align="center" style={{ width: '100%' }}>
              {toolbar.title && (
                <Text variant="h6" noMargin>
                  {toolbar.title}
                </Text>
              )}
              {toolbar.actions && <div className="vtx-table-toolbar-actions">{toolbar.actions}</div>}
            </Flex>
          ) : (
            <>{toolbar}</>
          )}
        </div>
      )}
      {selectable && currentSelectedRows.length > 0 && (
        <div className="vtx-table-selection-toolbar">
          <Flex align="center" gap={16}>
            <Text variant="body2" noMargin>
              {currentSelectedRows.length} selected
            </Text>
          </Flex>
        </div>
      )}
      <div className={containerClassNames} style={{ maxHeight }}>
        <table className={tableClassNames} {...props}>
          {caption && <caption className="vtx-table-caption">{caption}</caption>}
          <thead className="vtx-table-header">
            <tr>
              {selectable && (
                <th className="vtx-table-header-cell vtx-table-cell--checkbox">
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={isSomeSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {expandableRows && <th className="vtx-table-header-cell vtx-table-cell--expand" />}
              {columns.map((column) => {
                const isSortable = sortable && column.sortable !== false;
                const isFilterable = filterable && column.filterable !== false;
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
                    aria-sort={
                      currentSortConfig?.key === column.key
                        ? currentSortConfig.direction === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : undefined
                    }
                  >
                    <div className="vtx-table-header-content">
                      <div
                        className="vtx-table-header-label"
                        onClick={() => isSortable && handleSort(column.key)}
                        onKeyDown={(e) => {
                          if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault();
                            handleSort(column.key);
                          }
                        }}
                        role={isSortable ? 'button' : undefined}
                        tabIndex={isSortable ? 0 : undefined}
                        style={{ cursor: isSortable ? 'pointer' : 'default' }}
                      >
                        <span>{column.header}</span>
                        {isSortable && renderSortIcon(column.key)}
                      </div>
                      {isFilterable && (
                        <div className="vtx-table-filter">
                          <Input
                            size="sm"
                            placeholder={column.filterPlaceholder || `Filter ${column.header}...`}
                            value={currentFilters[column.key] || ''}
                            onChange={(e) => handleFilterChange(column.key, e.target.value)}
                            className="vtx-table-filter-input"
                          />
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="vtx-table-body">
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0) + (expandableRows ? 1 : 0)}
                  className="vtx-table-loading"
                >
                  {loadingContent || <span className="vtx-table-loading-spinner">Loading...</span>}
                </td>
              </tr>
            ) : displayData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0) + (expandableRows ? 1 : 0)}
                  className="vtx-table-empty"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              displayData.map((row, rowIndex) => {
                const rowKey = getRowKey(row, rowIndex);
                const isSelected = currentSelectedRows.includes(rowKey);
                const isExpanded = currentExpandedRows.includes(rowKey);
                const rowClassNames = [
                  'vtx-table-row',
                  isSelected && 'vtx-table-row--selected',
                  isExpanded && 'vtx-table-row--expanded',
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <React.Fragment key={rowKey}>
                    <tr
                      className={rowClassNames}
                      onClick={(e) => {
                        if (!selectable || (e.target as HTMLElement).closest('input, button')) {
                          handleRowClick(row, rowIndex, e);
                        }
                      }}
                      role={onRowClick ? 'button' : undefined}
                      tabIndex={onRowClick ? 0 : undefined}
                      aria-selected={isSelected}
                      onKeyDown={(e) => {
                        if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          handleRowClick(
                            row,
                            rowIndex,
                            e as unknown as React.MouseEvent<HTMLTableRowElement>
                          );
                        }
                      }}
                    >
                      {selectable && (
                        <td className="vtx-table-cell vtx-table-cell--checkbox">
                          <Checkbox
                            checked={isSelected}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleRowSelection(rowKey, e.target.checked);
                            }}
                            aria-label={`Select row ${rowIndex + 1}`}
                          />
                        </td>
                      )}
                      {expandableRows && (
                        <td className="vtx-table-cell vtx-table-cell--expand">
                          <button
                            className="vtx-table-expand-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExpandRow(rowKey);
                            }}
                            aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                          </button>
                        </td>
                      )}
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
                    {expandableRows && isExpanded && renderExpandedRow && (
                      <tr className="vtx-table-row-expanded">
                        <td
                          colSpan={columns.length + (selectable ? 1 : 0) + 1}
                          className="vtx-table-cell-expanded"
                        >
                          {renderExpandedRow(row, rowIndex)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="vtx-table-pagination">
          <Flex align="center" justify="between" style={{ width: '100%' }}>
            <Flex align="center" gap={8}>
              <Text variant="body2" color="neutral.600" noMargin>
                Rows per page:
              </Text>
              <select
                className="vtx-table-pagination-select"
                value={currentRowsPerPage}
                onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
                aria-label="Rows per page"
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Flex>
            <Flex align="center" gap={16}>
              <Text variant="body2" color="neutral.600" noMargin>
                {currentPage * currentRowsPerPage + 1}–
                {Math.min((currentPage + 1) * currentRowsPerPage, filteredData.length)} of{' '}
                {filteredData.length}
              </Text>
              <Flex align="center" gap={4}>
                <button
                  className="vtx-table-pagination-button"
                  onClick={() => handlePageChange(0)}
                  disabled={currentPage === 0}
                  aria-label="First page"
                  title="First page"
                >
                  <ChevronsLeftIcon size={18} />
                </button>
                <button
                  className="vtx-table-pagination-button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 0}
                  aria-label="Previous page"
                  title="Previous page"
                >
                  <ChevronLeftIcon size={18} />
                </button>
                <button
                  className="vtx-table-pagination-button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={(currentPage + 1) * currentRowsPerPage >= filteredData.length}
                  aria-label="Next page"
                  title="Next page"
                >
                  <ChevronRightIcon size={18} />
                </button>
                <button
                  className="vtx-table-pagination-button"
                  onClick={() =>
                    handlePageChange(Math.ceil(filteredData.length / currentRowsPerPage) - 1)
                  }
                  disabled={(currentPage + 1) * currentRowsPerPage >= filteredData.length}
                  aria-label="Last page"
                  title="Last page"
                >
                  <ChevronsRightIcon size={18} />
                </button>
              </Flex>
            </Flex>
          </Flex>
        </div>
      )}
    </div>
  );
}

Table.displayName = 'Table';

const TableWithParsedClasses = withParsedClasses(Table);
export default TableWithParsedClasses as React.FC<TableProps & React.RefAttributes<HTMLTableElement>>;
export { TableWithParsedClasses as Table };