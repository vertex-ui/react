import React, { useState, useMemo, useCallback, TableHTMLAttributes, useRef, useEffect } from 'react';
import { Size, useThemeContext } from '../../theme';
import { Checkbox } from '../Checkbox';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import {
  ArrowUpIcon,
  ArrowDownIcon,
} from '../../icons/IconComponents';
import './DataGrid.css';

// Filter operator types
export interface GridFilterOperator {
  label: string;
  value: string;
  getApplyFilterFn: (filterItem: GridFilterItem) => (value: any) => boolean;
  InputComponent?: React.ComponentType<FilterInputComponentProps>;
}

export interface FilterInputComponentProps {
  item: GridFilterItem;
  applyValue: (value: string) => void;
}

// Filter item structure
export interface GridFilterItem {
  id?: number;
  field: string;
  operator: string;
  value?: string;
}

// Filter model structure
export interface GridFilterModel {
  items: GridFilterItem[];
  logicOperator?: 'and' | 'or';
}

// Column definition
export interface DataGridColumn<T = any> {
  field: string;
  headerName: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  flex?: number;
  sortable?: boolean;
  filterable?: boolean;
  type?: 'string' | 'number' | 'date' | 'boolean' | 'singleSelect';
  valueGetter?: (row: T) => any;
  valueFormatter?: (value: any) => string;
  renderCell?: (params: { row: T; value: any; field: string }) => React.ReactNode;
  filterOperators?: GridFilterOperator[];
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  /**
   * Pin/freeze column to left or right side
   * @default false
   */
  pinned?: 'left' | 'right' | false;
}

// Row selection model
export type GridRowSelectionModel = (string | number)[];

export interface DataGridProps<T = any> extends Omit<
  TableHTMLAttributes<HTMLDivElement>,
  'children'
> {
  columns: DataGridColumn<T>[];
  rows: T[];
  getRowId?: (row: T, index?: number) => string | number;
  
  // Filtering
  filterModel?: GridFilterModel;
  onFilterModelChange?: (model: GridFilterModel) => void;
  initialState?: {
    filter?: {
      filterModel?: GridFilterModel;
    };
  };
  disableColumnFilter?: boolean;
  ignoreDiacritics?: boolean;
  
  // Sorting
  sortModel?: { field: string; sort: 'asc' | 'desc' }[];
  onSortModelChange?: (model: { field: string; sort: 'asc' | 'desc' }[]) => void;
  
  // Selection
  checkboxSelection?: boolean;
  rowSelectionModel?: GridRowSelectionModel;
  onRowSelectionModelChange?: (model: GridRowSelectionModel) => void;
  
  // Pagination
  pagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  
  // UI
  loading?: boolean;
  /**
   * Use skeleton loader instead of loading text
   * @default false
   */
  skeletonLoader?: boolean;
  /**
   * Number of skeleton rows to show when loading
   * @default 5
   */
  skeletonRows?: number;
  /**
   * Custom loading content (only used if skeletonLoader is false)
   */
  loadingContent?: React.ReactNode;
  /**
   * Icon to display in empty state
   */
  emptyStateIcon?: React.ReactNode;
  /**
   * Title for empty state
   * @default 'No data available'
   */
  emptyStateTitle?: string;
  /**
   * Description text for empty state
   */
  emptyStateDescription?: string;
  autoHeight?: boolean;
  density?: 'compact' | 'standard' | 'comfortable';
  disableColumnMenu?: boolean;
  hideFooter?: boolean;
  /**
   * Size of the data grid
   * @default theme.defaultSize
   */
  size?: Size;
  
  // Styling
  className?: string;
  sx?: Record<string, any>;
}

// Default filter operators for different column types
const getStringOperators = (): GridFilterOperator[] => [
  {
    label: 'contains',
    value: 'contains',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      return (value) => {
        if (value == null) return false;
        return String(value).toLowerCase().includes(filterItem.value!.toLowerCase());
      };
    },
  },
  {
    label: 'equals',
    value: 'equals',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      return (value) => {
        if (value == null) return false;
        return String(value).toLowerCase() === filterItem.value!.toLowerCase();
      };
    },
  },
  {
    label: 'starts with',
    value: 'startsWith',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      return (value) => {
        if (value == null) return false;
        return String(value).toLowerCase().startsWith(filterItem.value!.toLowerCase());
      };
    },
  },
  {
    label: 'ends with',
    value: 'endsWith',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      return (value) => {
        if (value == null) return false;
        return String(value).toLowerCase().endsWith(filterItem.value!.toLowerCase());
      };
    },
  },
  {
    label: 'is empty',
    value: 'isEmpty',
    getApplyFilterFn: () => {
      return (value) => value == null || String(value).trim() === '';
    },
  },
  {
    label: 'is not empty',
    value: 'isNotEmpty',
    getApplyFilterFn: () => {
      return (value) => value != null && String(value).trim() !== '';
    },
  },
];

const getNumberOperators = (): GridFilterOperator[] => [
  {
    label: '=',
    value: '=',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) === filterValue;
    },
  },
  {
    label: '!=',
    value: '!=',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) !== filterValue;
    },
  },
  {
    label: '>',
    value: '>',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) > filterValue;
    },
  },
  {
    label: '>=',
    value: '>=',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) >= filterValue;
    },
  },
  {
    label: '<',
    value: '<',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) < filterValue;
    },
  },
  {
    label: '<=',
    value: '<=',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = Number(filterItem.value);
      return (value) => Number(value) <= filterValue;
    },
  },
  {
    label: 'is empty',
    value: 'isEmpty',
    getApplyFilterFn: () => {
      return (value) => value == null || value === '';
    },
  },
  {
    label: 'is not empty',
    value: 'isNotEmpty',
    getApplyFilterFn: () => {
      return (value) => value != null && value !== '';
    },
  },
];

const getBooleanOperators = (): GridFilterOperator[] => [
  {
    label: 'is',
    value: 'is',
    getApplyFilterFn: (filterItem) => {
      if (filterItem.value == null) return () => true;
      const filterValue = filterItem.value === 'true';
      return (value) => Boolean(value) === filterValue;
    },
  },
];

const getDateOperators = (): GridFilterOperator[] => [
  {
    label: 'is',
    value: 'is',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      const filterDate = new Date(filterItem.value).toDateString();
      return (value) => {
        if (!value) return false;
        return new Date(value).toDateString() === filterDate;
      };
    },
  },
  {
    label: 'after',
    value: 'after',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      const filterDate = new Date(filterItem.value);
      return (value) => {
        if (!value) return false;
        return new Date(value) > filterDate;
      };
    },
  },
  {
    label: 'before',
    value: 'before',
    getApplyFilterFn: (filterItem) => {
      if (!filterItem.value) return () => true;
      const filterDate = new Date(filterItem.value);
      return (value) => {
        if (!value) return false;
        return new Date(value) < filterDate;
      };
    },
  },
];

const getOperatorsForColumnType = (type: string = 'string'): GridFilterOperator[] => {
  switch (type) {
    case 'number':
      return getNumberOperators();
    case 'boolean':
      return getBooleanOperators();
    case 'date':
      return getDateOperators();
    case 'string':
    default:
      return getStringOperators();
  }
};

const getCellPinnedStyle = (column: DataGridColumn, index: number, columns: DataGridColumn[], checkboxSelection: boolean, isHeader = false) => {
  if (!column.pinned) return {};

  const style: React.CSSProperties = {
    position: 'sticky',
    zIndex: isHeader ? 101 : 100,
    background: isHeader ? '#fafafa' : 'inherit',
  };

  if (column.pinned === 'left') {
    let leftOffset = checkboxSelection ? 58 : 0;
    for (let i = 0; i < index; i++) {
      if (columns[i].pinned === 'left') {
        leftOffset += columns[i].width || 150;
      }
    }
    style.left = leftOffset;
  } else if (column.pinned === 'right') {
    let rightOffset = 0;
    const colIndex = columns.indexOf(column);
    for (let i = colIndex + 1; i < columns.length; i++) {
      if (columns[i].pinned === 'right') {
        rightOffset += columns[i].width || 150;
      }
    }
    style.right = rightOffset;
  }

  return style;
};

// Column Menu Component
const ColumnMenu: React.FC<{
  column: DataGridColumn;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onSort: (direction: 'asc' | 'desc' | null) => void;
  onFilter: () => void;
  currentSort?: 'asc' | 'desc' | null;
  hasFilter?: boolean;
}> = ({ column, anchorEl, onClose, onSort, onFilter, currentSort, hasFilter }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          anchorEl && !anchorEl.contains(event.target as Node)) {
        onClose();
      }
    };

    if (anchorEl) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl, onClose]);

  if (!anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();

  return (
    <div
      ref={menuRef}
      className="vertex-datagrid-column-menu"
      style={{
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        zIndex: 1300,
      }}
    >
      {column.sortable && (
        <>
          <button
            className="vertex-datagrid-column-menu-item"
            onClick={() => {
              onSort('asc');
              onClose();
            }}
          >
            <ArrowUpIcon size={16} />
            <span>Sort ascending</span>
            {currentSort === 'asc' && <span className="vertex-datagrid-menu-check">✓</span>}
          </button>
          <button
            className="vertex-datagrid-column-menu-item"
            onClick={() => {
              onSort('desc');
              onClose();
            }}
          >
            <ArrowDownIcon size={16} />
            <span>Sort descending</span>
            {currentSort === 'desc' && <span className="vertex-datagrid-menu-check">✓</span>}
          </button>
          {currentSort && (
            <button
              className="vertex-datagrid-column-menu-item"
              onClick={() => {
                onSort(null);
                onClose();
              }}
            >
              <span style={{ width: 16 }}></span>
              <span>Unsort</span>
            </button>
          )}
          {column.filterable && <div className="vertex-datagrid-column-menu-divider" />}
        </>
      )}
      {column.filterable && (
        <button
          className="vertex-datagrid-column-menu-item"
          onClick={() => {
            onFilter();
            onClose();
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
          </svg>
          <span>{hasFilter ? 'Edit filter' : 'Filter'}</span>
          {hasFilter && <span className="vertex-datagrid-menu-badge">●</span>}
        </button>
      )}
    </div>
  );
};

// Filter Panel Component
const FilterPanel: React.FC<{
  columns: DataGridColumn[];
  filterModel: GridFilterModel;
  onFilterModelChange: (model: GridFilterModel) => void;
  onClose: () => void;
  targetColumn?: string;
}> = ({ columns, filterModel, onFilterModelChange, onClose, targetColumn }) => {
  const filterableColumns = columns.filter((col) => col.filterable !== false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (targetColumn && filterModel.items.length === 0) {
      addFilter(targetColumn);
    }
  }, [targetColumn]);

  const addFilter = (field?: string) => {
    const selectedField = field || filterableColumns[0]?.field || '';
    const column = columns.find(col => col.field === selectedField);
    const operators = column?.filterOperators || getOperatorsForColumnType(column?.type);
    
    const newItem: GridFilterItem = {
      id: Date.now(),
      field: selectedField,
      operator: operators[0]?.value || 'contains',
      value: '',
    };
    onFilterModelChange({
      ...filterModel,
      items: [...filterModel.items, newItem],
    });
  };

  const updateFilter = (index: number, updates: Partial<GridFilterItem>) => {
    const newItems = [...filterModel.items];
    const oldItem = newItems[index];
    newItems[index] = { ...oldItem, ...updates };
    
    // If field changed, reset operator to first available for new type
    if (updates.field && updates.field !== oldItem.field) {
      const column = columns.find(col => col.field === updates.field);
      const operators = column?.filterOperators || getOperatorsForColumnType(column?.type);
      newItems[index].operator = operators[0]?.value || 'contains';
    }
    
    onFilterModelChange({
      ...filterModel,
      items: newItems,
    });
  };

  const removeFilter = (index: number) => {
    const newItems = filterModel.items.filter((_, i) => i !== index);
    onFilterModelChange({
      ...filterModel,
      items: newItems,
    });
  };

  const toggleLogicOperator = () => {
    onFilterModelChange({
      ...filterModel,
      logicOperator: filterModel.logicOperator === 'and' ? 'or' : 'and',
    });
  };

  return (
    <div className="vertex-datagrid-filter-panel-overlay">
      <div ref={panelRef} className="vertex-datagrid-filter-panel">
        <div className="vertex-datagrid-filter-panel-header">
          <Text weight="semibold" size="sm">Filters</Text>
          <button className="vertex-datagrid-filter-close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="vertex-datagrid-filter-panel-body">
          {filterModel.items.length === 0 ? (
            <div className="vertex-datagrid-filter-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              <Text size="sm" color="secondary">No filters applied</Text>
              <Button variant="outline" size="sm" onClick={() => addFilter()}>
                Add filter
              </Button>
            </div>
          ) : (
            <>
              {filterModel.items.map((item, index) => {
                const column = columns.find((col) => col.field === item.field);
                const operators = column?.filterOperators || getOperatorsForColumnType(column?.type);
                const needsInput = !['isEmpty', 'isNotEmpty'].includes(item.operator);

                return (
                  <div key={item.id || index} className="vertex-datagrid-filter-row">
                    {index > 0 && (
                      <button
                        className="vertex-datagrid-filter-logic-btn"
                        onClick={toggleLogicOperator}
                        title="Toggle AND/OR"
                      >
                        {filterModel.logicOperator?.toUpperCase() || 'OR'}
                      </button>
                    )}
                    
                    <div className="vertex-datagrid-filter-controls">
                      <select
                        value={item.field}
                        onChange={(e) => updateFilter(index, { field: e.target.value })}
                        className="vertex-datagrid-filter-select"
                      >
                        {filterableColumns.map((col) => (
                          <option key={col.field} value={col.field}>
                            {col.headerName}
                          </option>
                        ))}
                      </select>

                      <select
                        value={item.operator}
                        onChange={(e) => updateFilter(index, { operator: e.target.value })}
                        className="vertex-datagrid-filter-select"
                      >
                        {operators.map((op) => (
                          <option key={op.value} value={op.value}>
                            {op.label}
                          </option>
                        ))}
                      </select>

                      {needsInput && (
                        <Input
                          value={item.value || ''}
                          onChange={(e) => updateFilter(index, { value: e.target.value })}
                          placeholder="Value"
                          size="sm"
                        />
                      )}

                      <button
                        className="vertex-datagrid-filter-remove"
                        onClick={() => removeFilter(index)}
                        title="Remove filter"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
              
              <div className="vertex-datagrid-filter-actions">
                <Button variant="ghost" size="sm" onClick={() => addFilter()}>
                  + Add filter
                </Button>
              </div>
            </>
          )}
        </div>

        {filterModel.items.length > 0 && (
          <div className="vertex-datagrid-filter-panel-footer">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onFilterModelChange({ items: [], logicOperator: 'or' })}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Memoized DataGrid Row
const DataGridRow = React.memo(({
  row,
  rowId,
  columns,
  isSelected,
  checkboxSelection,
  onRowSelect,
  index,
  columnsList
}: {
  row: any,
  rowId: string | number,
  columns: DataGridColumn[],
  isSelected: boolean,
  checkboxSelection: boolean,
  onRowSelect: (id: string | number) => void,
  index: number,
  columnsList: DataGridColumn[]
}) => {
  return (
    <tr
      className={`vertex-datagrid-row ${isSelected ? 'vertex-datagrid-row--selected' : ''}`}
    >
      {checkboxSelection && (
        <td className="vertex-datagrid-td vertex-datagrid-checkbox-cell">
          <Checkbox
            checked={isSelected}
            onChange={() => onRowSelect(rowId)}
          />
        </td>
      )}
      {columns.map((column, colIndex) => {
        const value = column.valueGetter ? column.valueGetter(row) : row[column.field];
        const formattedValue = column.valueFormatter ? column.valueFormatter(value) : value;
        const cellContent = column.renderCell
          ? column.renderCell({ row, value, field: column.field })
          : formattedValue;
        const pinnedStyle = getCellPinnedStyle(column, colIndex, columnsList, checkboxSelection, false);

        return (
          <td
            key={column.field}
            className={`vertex-datagrid-td ${column.pinned ? `vertex-datagrid-td--pinned-${column.pinned}` : ''}`}
            style={{
              textAlign: column.align || 'left',
              ...pinnedStyle,
            }}
          >
            {cellContent}
          </td>
        );
      })}
    </tr>
  );
});

DataGridRow.displayName = 'DataGridRow';

// Main DataGrid component
const DataGridBase = ({
  columns,
  rows,
  getRowId = (row, index) => row.id ?? index,
  
  // Filtering
  filterModel: controlledFilterModel,
  onFilterModelChange,
  initialState,
  disableColumnFilter = false,
  ignoreDiacritics = false,
  
  // Sorting
  sortModel: controlledSortModel,
  onSortModelChange,
  
  // Selection
  checkboxSelection = false,
  rowSelectionModel: controlledSelectionModel,
  onRowSelectionModelChange,
  
  // Pagination
  pagination = true,
  pageSize: initialPageSize = 10,
  pageSizeOptions = [5, 10, 25, 50, 100],
  
  // UI
  loading = false,
  skeletonLoader = false,
  skeletonRows = 5,
  loadingContent,
  emptyStateIcon,
  emptyStateTitle = 'No data available',
  emptyStateDescription,
  autoHeight = false,
  density = 'standard',
  disableColumnMenu = false,
  hideFooter = false,
  size,
  
  className,
  ...props
}: DataGridProps) => {
  const { theme } = useThemeContext();
  const gridSize = size || theme.defaultSize;
  
  // Internal states
  const [internalFilterModel, setInternalFilterModel] = useState<GridFilterModel>(
    initialState?.filter?.filterModel || { items: [], logicOperator: 'or' }
  );
  const [internalSortModel, setInternalSortModel] = useState<{ field: string; sort: 'asc' | 'desc' }[]>([]);
  const [internalSelectionModel, setInternalSelectionModel] = useState<GridRowSelectionModel>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [columnMenuState, setColumnMenuState] = useState<{ column: DataGridColumn; anchorEl: HTMLElement } | null>(null);
  const [filterTargetColumn, setFilterTargetColumn] = useState<string | undefined>();

  // Use controlled or internal state
  const filterModel = controlledFilterModel ?? internalFilterModel;
  const sortModel = controlledSortModel ?? internalSortModel;
  const selectionModel = controlledSelectionModel ?? internalSelectionModel;

  const handleFilterModelChange = useCallback(
    (model: GridFilterModel) => {
      if (onFilterModelChange) {
        onFilterModelChange(model);
      } else {
        setInternalFilterModel(model);
      }
    },
    [onFilterModelChange]
  );

  const handleSortModelChange = useCallback(
    (model: { field: string; sort: 'asc' | 'desc' }[]) => {
      if (onSortModelChange) {
        onSortModelChange(model);
      } else {
        setInternalSortModel(model);
      }
    },
    [onSortModelChange]
  );

  const handleSelectionModelChange = useCallback(
    (model: GridRowSelectionModel) => {
      if (onRowSelectionModelChange) {
        onRowSelectionModelChange(model);
      } else {
        setInternalSelectionModel(model);
      }
    },
    [onRowSelectionModelChange]
  );

  // Apply filters
  const filteredRows = useMemo(() => {
    if (disableColumnFilter || filterModel.items.length === 0) {
      return rows;
    }

    return rows.filter((row) => {
      const results = filterModel.items.map((filterItem) => {
        const column = columns.find((col) => col.field === filterItem.field);
        if (!column) return true;

        const value = column.valueGetter ? column.valueGetter(row) : row[filterItem.field];
        const operators = column.filterOperators || getOperatorsForColumnType(column.type);
        const operator = operators.find((op) => op.value === filterItem.operator);

        if (!operator) return true;

        const filterFn = operator.getApplyFilterFn(filterItem);
        return filterFn(value);
      });

      // Apply logic operator
      if (filterModel.logicOperator === 'and') {
        return results.every((result) => result);
      } else {
        return results.some((result) => result);
      }
    });
  }, [rows, filterModel, columns, disableColumnFilter]);

  // Apply sorting
  const sortedRows = useMemo(() => {
    if (sortModel.length === 0) {
      return filteredRows;
    }

    const sorted = [...filteredRows];
    const sortItem = sortModel[0];
    const column = columns.find((col) => col.field === sortItem.field);

    if (!column) return sorted;

    sorted.sort((a, b) => {
      const aValue = column.valueGetter ? column.valueGetter(a) : a[sortItem.field];
      const bValue = column.valueGetter ? column.valueGetter(b) : b[sortItem.field];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      let comparison = 0;
      if (column.type === 'number') {
        comparison = Number(aValue) - Number(bValue);
      } else if (column.type === 'date') {
        comparison = new Date(aValue).getTime() - new Date(bValue).getTime();
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortItem.sort === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [filteredRows, sortModel, columns]);

  // Apply pagination
  const paginatedRows = useMemo(() => {
    if (!pagination) {
      return sortedRows;
    }
    const start = page * pageSize;
    const end = start + pageSize;
    return sortedRows.slice(start, end);
  }, [sortedRows, page, pageSize, pagination]);

  // Handle column sort
  const handleColumnSort = useCallback(
    (column: DataGridColumn, direction: 'asc' | 'desc' | null) => {
      if (!column.sortable) return;

      let newSortModel: { field: string; sort: 'asc' | 'desc' }[];
      if (direction === null) {
        newSortModel = [];
      } else {
        newSortModel = [{ field: column.field, sort: direction }];
      }

      handleSortModelChange(newSortModel);
    },
    [handleSortModelChange]
  );

  // Handle row selection
  const handleRowSelect = useCallback(
    (rowId: string | number) => {
      const newSelection = selectionModel.includes(rowId)
        ? selectionModel.filter((id) => id !== rowId)
        : [...selectionModel, rowId];
      handleSelectionModelChange(newSelection);
    },
    [selectionModel, handleSelectionModelChange]
  );

  const handleSelectAll = useCallback(() => {
    if (selectionModel.length === paginatedRows.length) {
      handleSelectionModelChange([]);
    } else {
      const allIds = paginatedRows.map((row, index) => getRowId(row, index));
      handleSelectionModelChange(allIds);
    }
  }, [selectionModel, paginatedRows, handleSelectionModelChange, getRowId]);

  const totalPages = Math.ceil(sortedRows.length / pageSize);
  const hasActiveFilters = filterModel.items.length > 0;

  const densityClass = `vertex-datagrid--${density}`;
  const sizeClass = `vertex-datagrid--${gridSize}`;

  return (
    <div
      className={`vertex-datagrid ${densityClass} ${sizeClass} ${autoHeight ? 'vertex-datagrid--auto-height' : ''} ${className || ''}`}
      {...props}
    >
      {/* Table Container */}
      <div className="vertex-datagrid-container">
        <table className="vertex-datagrid-table">
          <thead className="vertex-datagrid-thead">
            <tr>
              {checkboxSelection && (
                <th className="vertex-datagrid-th vertex-datagrid-checkbox-cell">
                  <Checkbox
                    checked={selectionModel.length === paginatedRows.length && paginatedRows.length > 0}
                    indeterminate={selectionModel.length > 0 && selectionModel.length < paginatedRows.length}
                    onChange={handleSelectAll}
                  />
                </th>
              )}
              {columns.map((column, colIndex) => {
                const sortItem = sortModel.find((sort) => sort.field === column.field);
                const isSorted = !!sortItem;
                const sortDirection = sortItem?.sort;
                const hasFilter = filterModel.items.some(item => item.field === column.field);
                const pinnedStyle = getCellPinnedStyle(column, colIndex, columns, checkboxSelection, true);

                return (
                  <th
                    key={column.field}
                    className={`vertex-datagrid-th ${column.sortable ? 'vertex-datagrid-th--sortable' : ''} ${column.pinned ? `vertex-datagrid-th--pinned-${column.pinned}` : ''}`}
                    style={{
                      width: column.width,
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                      textAlign: column.headerAlign || column.align || 'left',
                      flex: column.flex,
                      ...pinnedStyle,
                    }}
                  >
                    <div className="vertex-datagrid-th-content">
                      <div 
                        className="vertex-datagrid-th-label"
                        onClick={() => column.sortable && handleColumnSort(column, 
                          !isSorted ? 'asc' : sortDirection === 'asc' ? 'desc' : null
                        )}
                      >
                        <span className="vertex-datagrid-th-text">{column.headerName}</span>
                        {column.sortable && (
                          <div className={`vertex-datagrid-sort-icon ${isSorted ? 'vertex-datagrid-sort-icon--active' : ''}`}>
                            {isSorted ? (
                              sortDirection === 'asc' ? (
                                <ArrowUpIcon size={18} />
                              ) : (
                                <ArrowDownIcon size={18} />
                              )
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4">
                                <path d="M12 5v14M5 12l7 7 7-7"/>
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {!disableColumnMenu && (column.sortable || column.filterable) && (
                        <button
                          className={`vertex-datagrid-column-menu-btn ${hasFilter ? 'vertex-datagrid-column-menu-btn--filtered' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setColumnMenuState({ column, anchorEl: e.currentTarget });
                          }}
                          title="Column options"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="12" cy="19" r="2" />
                          </svg>
                          {hasFilter && <span className="vertex-datagrid-filter-badge" />}
                        </button>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="vertex-datagrid-tbody">
            {loading ? (
              skeletonLoader ? (
                // Skeleton loader rows
                Array.from({ length: skeletonRows }).map((_, index) => (
                  <tr key={`skeleton-${index}`} className="vertex-datagrid-row vertex-datagrid-row--skeleton">
                    {checkboxSelection && (
                      <td className="vertex-datagrid-td vertex-datagrid-checkbox-cell">
                        <div className="vertex-datagrid-skeleton vertex-datagrid-skeleton--checkbox" />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.field} className="vertex-datagrid-td">
                        <div className="vertex-datagrid-skeleton vertex-datagrid-skeleton--text" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                // Traditional loading state
                <tr>
                  <td colSpan={columns.length + (checkboxSelection ? 1 : 0)} className="vertex-datagrid-loading">
                    <div className="vertex-datagrid-loading-content">
                      {loadingContent || (
                        <>
                          <div className="vertex-datagrid-spinner" />
                          <Text size="sm" color="secondary">Loading...</Text>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              )
            ) : paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (checkboxSelection ? 1 : 0)} className="vertex-datagrid-empty">
                  {emptyStateIcon || emptyStateDescription ? (
                    <div className="vertex-datagrid-empty-state">
                      {emptyStateIcon && (
                        <div className="vertex-datagrid-empty-state-icon">{emptyStateIcon}</div>
                      )}
                      <div className="vertex-datagrid-empty-state-message">{emptyStateTitle}</div>
                      {emptyStateDescription && (
                        <div className="vertex-datagrid-empty-state-description">{emptyStateDescription}</div>
                      )}
                    </div>
                  ) : (
                    <div className="vertex-datagrid-empty-content">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                      <Text size="sm" color="secondary">{emptyStateTitle}</Text>
                    </div>
                  )}
                </td>
              </tr>
            ) : (
              paginatedRows.map((row, rowIndex) => {
                const rowId = getRowId(row, rowIndex);
                const isSelected = selectionModel.includes(rowId);

                return (
                  <DataGridRow
                    key={rowId}
                    row={row}
                    rowId={rowId}
                    columns={columns}
                    isSelected={isSelected}
                    checkboxSelection={checkboxSelection}
                    onRowSelect={handleRowSelect}
                    index={rowIndex}
                    columnsList={columns}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      {!hideFooter && pagination && (
        <div className="vertex-datagrid-footer">
          <div className="vertex-datagrid-footer-left">
            {hasActiveFilters && (
              <button
                className="vertex-datagrid-filter-chip"
                onClick={() => setFilterPanelOpen(true)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
                <span>{filterModel.items.length} {filterModel.items.length === 1 ? 'filter' : 'filters'}</span>
              </button>
            )}
          </div>
          
          <div className="vertex-datagrid-footer-center">
            <Text size="sm" color="secondary">
              {sortedRows.length === 0 ? '0 rows' : `${page * pageSize + 1}–${Math.min((page + 1) * pageSize, sortedRows.length)} of ${sortedRows.length}`}
            </Text>
          </div>

          <div className="vertex-datagrid-footer-right">
            <label className="vertex-datagrid-pagesize-label">
              <Text size="sm" color="secondary">Rows per page:</Text>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(0);
                }}
                className="vertex-datagrid-pagesize-select"
              >
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="vertex-datagrid-pagination">
              <button
                className="vertex-datagrid-pagination-btn"
                onClick={() => setPage(0)}
                disabled={page === 0}
                title="First page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
                </svg>
              </button>
              <button
                className="vertex-datagrid-pagination-btn"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                title="Previous page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <Text size="sm" color="secondary">
                Page {page + 1} of {totalPages || 1}
              </Text>
              <button
                className="vertex-datagrid-pagination-btn"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                title="Next page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
              <button
                className="vertex-datagrid-pagination-btn"
                onClick={() => setPage(totalPages - 1)}
                disabled={page >= totalPages - 1}
                title="Last page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Column Menu */}
      {columnMenuState && (
        <ColumnMenu
          column={columnMenuState.column}
          anchorEl={columnMenuState.anchorEl}
          onClose={() => setColumnMenuState(null)}
          onSort={(direction) => handleColumnSort(columnMenuState.column, direction)}
          onFilter={() => {
            setFilterTargetColumn(columnMenuState.column.field);
            setFilterPanelOpen(true);
          }}
          currentSort={sortModel.find(s => s.field === columnMenuState.column.field)?.sort}
          hasFilter={filterModel.items.some(item => item.field === columnMenuState.column.field)}
        />
      )}

      {/* Filter Panel */}
      {filterPanelOpen && (
        <FilterPanel
          columns={columns}
          filterModel={filterModel}
          onFilterModelChange={handleFilterModelChange}
          onClose={() => {
            setFilterPanelOpen(false);
            setFilterTargetColumn(undefined);
          }}
          targetColumn={filterTargetColumn}
        />
      )}
    </div>
  );
};

DataGridBase.displayName = 'DataGrid';

export default DataGridBase as React.FC<DataGridProps>;
export { DataGridBase as DataGrid };