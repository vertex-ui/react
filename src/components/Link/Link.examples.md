# Link Examples

## Basic Usage

A text link.

```tsx
import { Link } from 'src/components/Link';

const BasicExample = () => (
  <Link href="/about">Learn More</Link>
);
```

## Customization Examples

### With Icon and Variant

Styled link with icon.

```tsx
import { Link } from 'src/components/Link';
import { DownloadIcon } from 'src/icons';

const DownloadLink = () => (
  <Link
    href="/file.pdf"
    download
    variant="body2"
    leftIcon={<DownloadIcon />}
    noUnderline
  >
    Download Report
  </Link>
);
```

## Enterprise Scenarios

### Framework Integration

Use with React Router or Next.js.

```tsx
import { Link } from 'src/components/Link';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = () => (
  <Link component={RouterLink} to="/dashboard">
    Go to Dashboard
  </Link>
);
```

## Accessibility Example

External links should indicate they open in a new tab (usually via text or icon, component handles target/rel).

```tsx
import { Link } from 'src/components/Link';

const A11yExample = () => (
  <Link href="https://example.com" external aria-label="Visit Example Site">
    External Site
  </Link>
);
```
