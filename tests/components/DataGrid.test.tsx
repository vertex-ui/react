import React from 'react';
import { render, screen } from '../test-utils';
import { DataGrid } from '../../src/components/DataGrid/DataGrid';

describe('DataGrid', () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
  ];

  const rows = [
    { id: 1, firstName: 'Snow', lastName: 'Jon' },
    { id: 2, firstName: 'Lannister', lastName: 'Cersei' },
  ];

  it('renders columns and rows', () => {
    render(<DataGrid columns={columns} rows={rows} />);

    // Header
    expect(screen.getByText('First name')).toBeInTheDocument();
    expect(screen.getByText('Last name')).toBeInTheDocument();

    // Rows
    expect(screen.getByText('Snow')).toBeInTheDocument();
    expect(screen.getByText('Lannister')).toBeInTheDocument();
  });

  it('handles loading state', () => {
    // If loading prop exists
    render(<DataGrid columns={columns} rows={[]} loading />);
    // The failure shows a spinner div with class "vertex-datagrid-spinner".
    // It does not have role="progressbar" apparently.
    // It's inside a div with "Loading..." text.
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders no rows overlay', () => {
    render(<DataGrid columns={columns} rows={[]} />);
    // The failure "Unable to find ... No rows" but output shows:
    // <p ...> No data available </p>
    // So the text is "No data available", not "No rows".
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });
});
