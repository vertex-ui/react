import React, { useState } from 'react';
import { Select } from '../src';

/**
 * Examples demonstrating how to use Select component with custom data structures
 * from APIs, databases, or any external sources without transforming the data
 */

// ============================================
// Example 1: User Management System
// ============================================

interface User {
  userId: string;
  fullName: string;
  department: string;
  isActive: boolean;
}

const usersFromAPI: User[] = [
  { userId: 'U001', fullName: 'John Doe', department: 'Engineering', isActive: true },
  { userId: 'U002', fullName: 'Jane Smith', department: 'Engineering', isActive: true },
  { userId: 'U003', fullName: 'Bob Wilson', department: 'Marketing', isActive: false },
  { userId: 'U004', fullName: 'Alice Brown', department: 'Marketing', isActive: true },
  { userId: 'U005', fullName: 'Charlie Davis', department: 'Sales', isActive: true },
  { userId: 'U006', fullName: 'Diana Prince', department: 'Sales', isActive: false },
];

export const UserManagementExample = () => {
  const [selectedUser, setSelectedUser] = useState<string>('');

  return (
    <div style={{ maxWidth: '400px' }}>
      <Select
        label="Assign User"
        options={usersFromAPI as any}
        getOptionLabel="fullName"
        getOptionValue="userId"
        getOptionGroup="department"
        getOptionDisabled="isActive" // Note: isActive=false means disabled
        grouped
        placeholder="Select a user"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        helperText="Users grouped by department, inactive users are disabled"
      />
    </div>
  );
};

// ============================================
// Example 2: E-commerce Product Selection
// ============================================

interface Product {
  sku: string;
  productName: string;
  category: string;
  price: number;
  stock: number;
}

const productsFromAPI: Product[] = [
  { sku: 'LAPTOP-001', productName: 'MacBook Pro 16"', category: 'Laptops', price: 2499, stock: 5 },
  { sku: 'LAPTOP-002', productName: 'Dell XPS 15', category: 'Laptops', price: 1899, stock: 0 },
  {
    sku: 'MOUSE-001',
    productName: 'Logitech MX Master 3',
    category: 'Accessories',
    price: 99,
    stock: 25,
  },
  {
    sku: 'MOUSE-002',
    productName: 'Apple Magic Mouse',
    category: 'Accessories',
    price: 79,
    stock: 15,
  },
  {
    sku: 'KEYBOARD-001',
    productName: 'Mechanical Keyboard RGB',
    category: 'Accessories',
    price: 149,
    stock: 0,
  },
  {
    sku: 'MONITOR-001',
    productName: 'LG 27" 4K Monitor',
    category: 'Monitors',
    price: 449,
    stock: 8,
  },
];

export const ProductSelectionExample = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  // Transform data to mark out-of-stock items as disabled
  const productsWithDisabled = productsFromAPI.map((product) => ({
    ...product,
    isOutOfStock: product.stock === 0,
  }));

  return (
    <div style={{ maxWidth: '400px' }}>
      <Select
        label="Select Product"
        options={productsWithDisabled as any}
        getOptionLabel="productName"
        getOptionValue="sku"
        getOptionGroup="category"
        getOptionDisabled="isOutOfStock"
        grouped
        placeholder="Choose a product"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        helperText="Products grouped by category, out of stock items disabled"
      />

      {selectedProduct && (
        <div
          style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}
        >
          <strong>Selected SKU:</strong> {selectedProduct}
        </div>
      )}
    </div>
  );
};

// ============================================
// Example 3: Database Records (Servers)
// ============================================

interface Server {
  serverId: string;
  serverName: string;
  environment: string;
  region: string;
  status: 'online' | 'offline' | 'maintenance';
}

const serversFromDatabase: Server[] = [
  {
    serverId: 'srv-prod-001',
    serverName: 'Production Web Server 1',
    environment: 'Production',
    region: 'us-east-1',
    status: 'online',
  },
  {
    serverId: 'srv-prod-002',
    serverName: 'Production Web Server 2',
    environment: 'Production',
    region: 'us-east-1',
    status: 'online',
  },
  {
    serverId: 'srv-prod-003',
    serverName: 'Production DB Primary',
    environment: 'Production',
    region: 'us-east-1',
    status: 'maintenance',
  },
  {
    serverId: 'srv-stage-001',
    serverName: 'Staging Web Server',
    environment: 'Staging',
    region: 'us-west-2',
    status: 'online',
  },
  {
    serverId: 'srv-stage-002',
    serverName: 'Staging DB Server',
    environment: 'Staging',
    region: 'us-west-2',
    status: 'offline',
  },
  {
    serverId: 'srv-dev-001',
    serverName: 'Development Server 1',
    environment: 'Development',
    region: 'eu-central-1',
    status: 'online',
  },
  {
    serverId: 'srv-dev-002',
    serverName: 'Development Server 2',
    environment: 'Development',
    region: 'eu-central-1',
    status: 'online',
  },
];

export const ServerSelectionExample = () => {
  const [selectedServer, setSelectedServer] = useState<string>('');

  // Mark offline and maintenance servers as disabled
  const serversWithDisabled = serversFromDatabase.map((server) => ({
    ...server,
    isUnavailable: server.status !== 'online',
  }));

  return (
    <div style={{ maxWidth: '500px' }}>
      <Select
        label="Deploy to Server"
        options={serversWithDisabled as any}
        getOptionLabel="serverName"
        getOptionValue="serverId"
        getOptionGroup="environment"
        getOptionDisabled="isUnavailable"
        grouped
        placeholder="Select deployment target"
        value={selectedServer}
        onChange={(e) => setSelectedServer(e.target.value)}
        helperText="Only online servers are available for deployment"
        fullWidth
      />

      {selectedServer && (
        <div
          style={{ marginTop: '1rem', padding: '1rem', background: '#e8f5e9', borderRadius: '8px' }}
        >
          <strong>Deployment Target:</strong> {selectedServer}
          <br />
          <small>
            {serversFromDatabase.find((s) => s.serverId === selectedServer)?.environment} -{' '}
            {serversFromDatabase.find((s) => s.serverId === selectedServer)?.region}
          </small>
        </div>
      )}
    </div>
  );
};

// ============================================
// Example 4: Customer Records (CRM System)
// ============================================

interface Customer {
  customerId: number;
  companyName: string;
  tier: 'Enterprise' | 'Professional' | 'Starter';
  accountStatus: 'active' | 'suspended' | 'trial';
  contactEmail: string;
}

const customersFromCRM: Customer[] = [
  {
    customerId: 1001,
    companyName: 'Acme Corporation',
    tier: 'Enterprise',
    accountStatus: 'active',
    contactEmail: 'contact@acme.com',
  },
  {
    customerId: 1002,
    companyName: 'TechStart Inc',
    tier: 'Starter',
    accountStatus: 'trial',
    contactEmail: 'info@techstart.com',
  },
  {
    customerId: 1003,
    companyName: 'Global Solutions Ltd',
    tier: 'Enterprise',
    accountStatus: 'active',
    contactEmail: 'hello@globalsolutions.com',
  },
  {
    customerId: 1004,
    companyName: 'Digital Ventures',
    tier: 'Professional',
    accountStatus: 'active',
    contactEmail: 'team@digitalventures.com',
  },
  {
    customerId: 1005,
    companyName: 'Innovate Labs',
    tier: 'Professional',
    accountStatus: 'suspended',
    contactEmail: 'support@innovatelabs.com',
  },
  {
    customerId: 1006,
    companyName: 'Cloud Nine Systems',
    tier: 'Starter',
    accountStatus: 'trial',
    contactEmail: 'info@cloudnine.com',
  },
];

export const CustomerSelectionExample = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<number | ''>('');

  // Mark suspended accounts as disabled
  const customersWithDisabled = customersFromCRM.map((customer) => ({
    ...customer,
    isSuspended: customer.accountStatus === 'suspended',
  }));

  const handleChange = (value: string) => {
    setSelectedCustomer(value ? parseInt(value, 10) : '');
  };

  return (
    <div style={{ maxWidth: '500px' }}>
      <Select
        label="Select Customer Account"
        options={customersWithDisabled as any}
        getOptionLabel="companyName"
        getOptionValue="customerId"
        getOptionGroup="tier"
        getOptionDisabled="isSuspended"
        grouped
        placeholder="Choose a customer"
        value={selectedCustomer?.toString()}
        onChange={(e) => handleChange(e.target.value)}
        helperText="Customers grouped by subscription tier"
        fullWidth
      />

      {selectedCustomer && (
        <div
          style={{ marginTop: '1rem', padding: '1rem', background: '#fff3e0', borderRadius: '8px' }}
        >
          <strong>Customer ID:</strong> {selectedCustomer}
          <br />
          <strong>Tier:</strong>{' '}
          {customersFromCRM.find((c) => c.customerId === selectedCustomer)?.tier}
          <br />
          <strong>Status:</strong>{' '}
          {customersFromCRM.find((c) => c.customerId === selectedCustomer)?.accountStatus}
        </div>
      )}
    </div>
  );
};

// ============================================
// Example 5: Location Hierarchy
// ============================================

interface Location {
  locationCode: string;
  locationName: string;
  country: string;
  isOperational: boolean;
  timezone: string;
}

const locationsFromAPI: Location[] = [
  {
    locationCode: 'US-NYC',
    locationName: 'New York Office',
    country: 'United States',
    isOperational: true,
    timezone: 'EST',
  },
  {
    locationCode: 'US-SF',
    locationName: 'San Francisco Office',
    country: 'United States',
    isOperational: true,
    timezone: 'PST',
  },
  {
    locationCode: 'US-CHI',
    locationName: 'Chicago Office',
    country: 'United States',
    isOperational: false,
    timezone: 'CST',
  },
  {
    locationCode: 'UK-LON',
    locationName: 'London Office',
    country: 'United Kingdom',
    isOperational: true,
    timezone: 'GMT',
  },
  {
    locationCode: 'UK-MAN',
    locationName: 'Manchester Office',
    country: 'United Kingdom',
    isOperational: true,
    timezone: 'GMT',
  },
  {
    locationCode: 'DE-BER',
    locationName: 'Berlin Office',
    country: 'Germany',
    isOperational: true,
    timezone: 'CET',
  },
  {
    locationCode: 'DE-MUN',
    locationName: 'Munich Office',
    country: 'Germany',
    isOperational: false,
    timezone: 'CET',
  },
];

export const LocationSelectionExample = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  // Mark non-operational locations as disabled
  const locationsWithDisabled = locationsFromAPI.map((location) => ({
    ...location,
    isOffline: !location.isOperational,
  }));

  return (
    <div style={{ maxWidth: '500px' }}>
      <Select
        label="Office Location"
        options={locationsWithDisabled as any}
        getOptionLabel="locationName"
        getOptionValue="locationCode"
        getOptionGroup="country"
        getOptionDisabled="isOffline"
        grouped
        placeholder="Select office location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        helperText="Locations grouped by country, non-operational offices disabled"
        fullWidth
      />

      {selectedLocation && (
        <div
          style={{ marginTop: '1rem', padding: '1rem', background: '#e3f2fd', borderRadius: '8px' }}
        >
          <strong>Location:</strong>{' '}
          {locationsFromAPI.find((l) => l.locationCode === selectedLocation)?.locationName}
          <br />
          <strong>Timezone:</strong>{' '}
          {locationsFromAPI.find((l) => l.locationCode === selectedLocation)?.timezone}
        </div>
      )}
    </div>
  );
};

// ============================================
// All Examples Combined Component
// ============================================

export const AllSelectCustomKeysExamples = () => {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <section>
        <h2>User Management System</h2>
        <p>Selecting users from API with custom keys</p>
        <UserManagementExample />
      </section>

      <section>
        <h2>E-commerce Product Selection</h2>
        <p>Product catalog with out-of-stock handling</p>
        <ProductSelectionExample />
      </section>

      <section>
        <h2>Server Selection</h2>
        <p>Database records with status-based disabling</p>
        <ServerSelectionExample />
      </section>

      <section>
        <h2>Customer Management</h2>
        <p>CRM data with subscription tiers</p>
        <CustomerSelectionExample />
      </section>

      <section>
        <h2>Office Locations</h2>
        <p>Location hierarchy with operational status</p>
        <LocationSelectionExample />
      </section>
    </div>
  );
};

/**
 * Key Benefits:
 *
 * 1. No Data Transformation Required
 *    - Use API/Database data directly without mapping
 *    - Saves time and reduces boilerplate code
 *    - Prevents errors from manual transformation
 *
 * 2. Flexible Option Getters
 *    - getOptionLabel: Display text for options
 *    - getOptionValue: Actual value (can be string, number, UUID)
 *    - getOptionGroup: Grouping property
 *    - getOptionDisabled: Control which options are disabled
 *
 * 3. Type Safety
 *    - Works with TypeScript interfaces
 *    - Maintains type information from source data
 *    - IDE autocomplete for all properties
 *
 * 4. Real-World Ready
 *    - Handles complex data structures
 *    - Works with any JSON response
 *    - Perfect for API integrations
 */
