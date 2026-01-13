# Grid Examples

## Basic Usage

A basic 12-column grid.

```tsx
import { Grid } from 'src/components/Grid';

const BasicExample = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}>Column 1</Grid>
    <Grid item xs={6}>Column 2</Grid>
  </Grid>
);
```

## Customization Examples

### Responsive Layout

Different widths at different breakpoints.

```tsx
import { Grid } from 'src/components/Grid';

const ResponsiveExample = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={8}>Main Content</Grid>
    <Grid item xs={12} md={4}>Sidebar</Grid>
  </Grid>
);
```

## Enterprise Scenarios

### Dashboard Layout

Complex nested grids.

```tsx
import { Grid } from 'src/components/Grid';
import { Card } from 'src/components/Card';

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Card>Header Stats</Card>
    </Grid>
    <Grid item xs={12} md={6}>
      <Card>Chart 1</Card>
    </Grid>
    <Grid item xs={12} md={6}>
      <Card>Chart 2</Card>
    </Grid>
  </Grid>
);
```

## Accessibility Example

Grid is structural div, content should be accessible.

```tsx
import { Grid } from 'src/components/Grid';

const A11yExample = () => (
  <Grid container component="main">
    <Grid item xs={12} component="section">
      <h1>Content</h1>
    </Grid>
  </Grid>
);
```
