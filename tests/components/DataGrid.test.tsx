import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { DataGrid, GridFilterModel } from '../../src/components/DataGrid/DataGrid';

describe('DataGrid', () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90, sortable: true, filterable: true, type: 'number' as const },
    { field: 'firstName', headerName: 'First name', width: 150, sortable: true, filterable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, sortable: true, filterable: true },
    { field: 'age', headerName: 'Age', type: 'number' as const, sortable: true },
    { field: 'isAdmin', headerName: 'Admin', type: 'boolean' as const, sortable: true }
  ];

  const rows = [
    { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, isAdmin: true },
    { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, isAdmin: false },
    { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 42, isAdmin: false },
    { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11, isAdmin: false },
    { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null, isAdmin: true }
  ];

  describe('Rendering', () => {
    it('renders columns and rows correctly', () => {
      render(<DataGrid columns={columns} rows={rows} />);

      expect(screen.getByText('First name')).toBeInTheDocument();
      expect(screen.getByText('Jon')).toBeInTheDocument();
      expect(screen.getByText('Cersei')).toBeInTheDocument();
    });

    it('renders empty state', () => {
      render(<DataGrid columns={columns} rows={[]} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('renders custom empty state', () => {
      render(
        <DataGrid
          columns={columns}
          rows={[]}
          emptyStateTitle="Nothing to see"
          emptyStateDescription="Try adjusting filters"
          emptyStateIcon={<span data-testid="empty-icon">Icon</span>}
        />
      );
      expect(screen.getByText('Nothing to see')).toBeInTheDocument();
      expect(screen.getByText('Try adjusting filters')).toBeInTheDocument();
      expect(screen.getByTestId('empty-icon')).toBeInTheDocument();
    });

    it('renders loading state', () => {
      render(<DataGrid columns={columns} rows={[]} loading />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders skeleton loader', () => {
      const { container } = render(<DataGrid columns={columns} rows={[]} loading skeletonLoader skeletonRows={3} />);
      const skeletons = container.querySelectorAll('.vertex-datagrid-row--skeleton');
      expect(skeletons).toHaveLength(3);
    });
  });

  describe('Sorting', () => {
    it('sorts rows ascending and descending', async () => {
      const user = userEvent.setup();
      render(<DataGrid columns={columns} rows={rows} />);

      const header = screen.getByText('First name');

      // Default order: Jon, Cersei, Jaime, Arya, Daenerys

      // Sort Ascending
      await user.click(header);
      const rowsAsc = screen.getAllByRole('row');
      // rows[0] is header, rows[1] is first data row
      expect(rowsAsc[1]).toHaveTextContent('Arya');

      // Sort Descending
      await user.click(header);
      const rowsDesc = screen.getAllByRole('row');
      expect(rowsDesc[1]).toHaveTextContent('Jon'); // Sorts by first name desc: Jon, Jaime, Daenerys, Cersei, Arya ?? Wait.
      // J: Jon, J: Jaime, D: Daenerys, C: Cersei, A: Arya.
      // Desc: J, J, D, C, A.
      // Jon vs Jaime: 'o' vs 'a'. 'Jaime' < 'Jon'. So Desc: Jon first.

      // Unsort
      await user.click(header); // If 3-state sort is implemented, third click resets?
      // Implementation logic: !isSorted ? 'asc' : sortDirection === 'asc' ? 'desc' : null
      // So yes: asc -> desc -> null
    });

    it('handles numeric sorting', async () => {
      const user = userEvent.setup();
      render(<DataGrid columns={columns} rows={rows} />);

      const header = screen.getByText('Age');
      await user.click(header); // Asc

      const rowsAsc = screen.getAllByRole('row');
      // Nulls usually first or last depending on implementation.
      // Implementation: if (aValue == null) return 1; -> Nulls last.
      // Smallest: 11 (Arya).
      expect(rowsAsc[1]).toHaveTextContent('Arya');
    });
  });

  describe('Pagination', () => {
    it('paginates data', async () => {
      const user = userEvent.setup();
      render(
        <DataGrid
          columns={columns}
          rows={rows}
          pagination
          pageSize={2}
          pageSizeOptions={[2, 5]}
        />
      );

      // Page 1: 1-2 of 5
      expect(screen.getByText('1–2 of 5')).toBeInTheDocument();
      expect(screen.getByText('Jon')).toBeInTheDocument();
      expect(screen.queryByText('Jaime')).not.toBeInTheDocument();

      // Next page
      const nextBtn = screen.getByTitle('Next page');
      await user.click(nextBtn);

      expect(screen.getByText('3–4 of 5')).toBeInTheDocument();
      expect(screen.getByText('Jaime')).toBeInTheDocument();
    });

    it('changes page size', async () => {
      const user = userEvent.setup();
      render(
        <DataGrid
          columns={columns}
          rows={rows}
          pagination
          pageSize={2}
          pageSizeOptions={[2, 5]}
        />
      );

      const select = screen.getByRole('combobox'); // Page size select
      await user.selectOptions(select, '5');

      expect(screen.getByText('1–5 of 5')).toBeInTheDocument();
      expect(screen.getByText('Arya')).toBeInTheDocument();
    });
  });

  describe('Selection', () => {
    it('selects rows', async () => {
      const onRowSelectionModelChange = jest.fn();
      const user = userEvent.setup();
      render(
        <DataGrid
          columns={columns}
          rows={rows}
          checkboxSelection
          onRowSelectionModelChange={onRowSelectionModelChange}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      // Index 0 is select all, Index 1 is first row
      await user.click(checkboxes[1]);

      expect(onRowSelectionModelChange).toHaveBeenCalledWith([1]);
    });

    it('selects all rows', async () => {
      const onRowSelectionModelChange = jest.fn();
      const user = userEvent.setup();
      render(
        <DataGrid
          columns={columns}
          rows={rows}
          checkboxSelection
          onRowSelectionModelChange={onRowSelectionModelChange}
        />
      );

      const selectAll = screen.getAllByRole('checkbox')[0];
      await user.click(selectAll);

      expect(onRowSelectionModelChange).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    });
  });

  describe('Filtering', () => {
    it('opens filter panel via column menu', async () => {
      const user = userEvent.setup();
      render(<DataGrid columns={columns} rows={rows} />);

      // Hover header to see menu button (or button is always there but maybe transparent?)
      // In implementation: .vertex-datagrid-th-content:hover .vertex-datagrid-column-menu-btn
      // JSDOM doesn't do hover styles, but element is in DOM if not conditionally rendered by JS hover state.
      // Implementation: always rendered inside th-content.

      const menuBtns = screen.getAllByTitle('Column options');
      await user.click(menuBtns[1]); // First name column

      const filterBtn = screen.getByText('Filter');
      await user.click(filterBtn);

      expect(screen.getByText('Filters')).toBeInTheDocument();
    });

    it('applies filters', async () => {
      const onFilterModelChange = jest.fn();
      render(
        <DataGrid
          columns={columns}
          rows={rows}
          initialState={{
            filter: {
              filterModel: {
                items: [{ field: 'firstName', operator: 'contains', value: 'Jon' }]
              }
            }
          }}
          onFilterModelChange={onFilterModelChange}
        />
      );

      expect(screen.getByText('Jon')).toBeInTheDocument();
      expect(screen.queryByText('Cersei')).not.toBeInTheDocument();
    });
  });

  describe('Custom Rendering', () => {
    it('uses valueFormatter', () => {
      const columnsWithFormat = [
        {
          field: 'firstName',
          headerName: 'Name',
          valueFormatter: (val: string) => val.toUpperCase()
        }
      ];
      render(<DataGrid columns={columnsWithFormat} rows={rows} />);

      expect(screen.getByText('JON')).toBeInTheDocument();
    });

    it('uses renderCell', () => {
      const columnsWithRender = [
        {
          field: 'firstName',
          headerName: 'Name',
          renderCell: ({ value }: any) => <span data-testid="custom-cell">Hello {value}</span>
        }
      ];
      render(<DataGrid columns={columnsWithRender} rows={rows} />);

      expect(screen.getAllByTestId('custom-cell')[0]).toHaveTextContent('Hello Jon');
    });
  });
});
