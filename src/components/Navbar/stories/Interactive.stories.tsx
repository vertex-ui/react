
import { Button } from '../../Button';
import { Navbar } from '../Navbar';
import { userEvent, within, expect } from '@storybook/test';
import {
    HeartIcon,
    ShoppingCartIcon,
} from '../../../icons/IconComponents';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
};

// =============================================================================
// SHARED DATA
// =============================================================================

const basicNavItems = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
];

const megaMenuNavItems = [
    { label: 'Home', href: '#' },
    {
        label: 'Products',
        href: '#',
        megaMenu: [
            {
                title: 'Featured',
                items: [],
                featured: true,
                span: 1,
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80',
                cta: { label: 'Shop Sale', href: '#', variant: 'primary' as const }
            },
            {
                title: 'Electronics',
                items: [
                    { label: 'Laptops', href: '#', description: 'Powerful machines for work' },
                    { label: 'Smartphones', href: '#', description: 'Latest models' },
                    { label: 'Headphones', href: '#' },
                    { label: 'Cameras', href: '#' },
                ]
            },
            {
                title: 'Clothing',
                items: [
                    { label: 'Men', href: '#' },
                    { label: 'Women', href: '#' },
                    { label: 'Kids', href: '#' },
                    { label: 'Accessories', href: '#' },
                ]
            }
        ]
    },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
];

// =============================================================================
// 1. LAYOUT VARIANTS
// =============================================================================

export const LayoutSingleRow = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <Navbar
            variant="single-row"
            logo="https://via.placeholder.com/120x40/2563eb/ffffff?text=Brand"
            navigationItems={basicNavItems}
            actions={
                <div style={{ display: 'flex', gap: 12 }}>
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Button variant="primary" size="sm">Sign Up</Button>
                </div>
            }
        />
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Single Row Layout</h1>
            <p style={{ color: '#64748b' }}>Standard layout with logo, navigation, and actions in one row.</p>
        </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Home')).toBeVisible();
    await expect(canvas.getByText('Sign In')).toBeVisible();
  }
};

export const LayoutTwoRow = () => (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <Navbar
            variant="two-row"
            logo="https://via.placeholder.com/150x40/059669/ffffff?text=Enterprise"
            search={{ placeholder: 'Search products...' }}
            navigationItems={megaMenuNavItems}
            topBar={{
                left: [{ label: 'Call us: +1 555 123 4567', href: '#' }],
                right: [{ label: 'Track Order', href: '#' }, { label: 'Support', href: '#' }],
                backgroundColor: '#f1f5f9'
            }}
            actions={
                <Button variant="primary">
                    <ShoppingCartIcon size={18} style={{ marginRight: 8 }} />
                    Cart (3)
                </Button>
            }
        />
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Two Row Layout</h1>
            <p style={{ color: '#64748b' }}>Ideal for e-commerce. Includes TopBar, Search/Logo/Actions row, and Navigation row.</p>
        </div>
    </div>
);

export const LayoutCentered = () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <Navbar
            variant="centered"
            logo="https://via.placeholder.com/120x40/f59e0b/ffffff?text=Centered"
            navigationItems={basicNavItems}
            actions={
                <div style={{ display: 'flex', gap: 12 }}>
                    <Button variant="ghost" size="sm">Login</Button>
                    <Button variant="secondary" size="sm">Join</Button>
                </div>
            }
        />
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Centered Layout</h1>
            <p style={{ color: '#64748b' }}>Navigation centered, Logo left, Actions right.</p>
        </div>
    </div>
);

export const LayoutTransparent = () => (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
        <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
        }} />
        <Navbar
            variant="transparent"
            transparent
            logo="https://via.placeholder.com/120x40/ffffff/ffffff?text=Brand"
            navigationItems={[
                { label: 'Home', href: '#', hoverColor: '#60a5fa' },
                { label: 'Features', href: '#', hoverColor: '#60a5fa' },
                { label: 'Pricing', href: '#', hoverColor: '#60a5fa' },
            ]}
            topBar={{
                right: [{ label: 'Login', href: '#' }],
                backgroundColor: 'transparent',
                textColor: 'light'
            }}
            hoverColor="primary"
            actions={
                <Button variant="primary" style={{ background: 'white', color: '#0f172a' }}>Get Started</Button>
            }
        />
        <div style={{ padding: '120px 40px', textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '24px', fontWeight: 800 }}>Transparent Navbar</h1>
            <p style={{ fontSize: '20px', opacity: 0.9 }}>Perfect for overlaying on hero sections or dark backgrounds.</p>
        </div>
    </div>
);

// =============================================================================
// 2. TOPBAR CONFIGURATIONS
// =============================================================================

export const TopBarVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px', background: '#f1f5f9' }}>

        {/* Primary TopBar */}
        <div>
            <h3 style={{ marginBottom: '10px', color: '#475569' }}>Primary Color Background</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Primary"
                navigationItems={[]}
                topBar={{
                    left: 'Welcome to our store',
                    right: [{ label: 'Sign In', href: '#' }],
                    backgroundColor: 'primary', // Use theme primary
                }}
            />
        </div>

        {/* Secondary TopBar */}
        <div>
            <h3 style={{ marginBottom: '10px', color: '#475569' }}>Secondary Color Background</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Secondary"
                navigationItems={[]}
                topBar={{
                    left: 'Special Offer: 50% Off',
                    right: [{ label: 'Shop Now', href: '#' }],
                    backgroundColor: 'secondary', // Use theme secondary
                    textColor: 'light'
                }}
            />
        </div>

        {/* Dark TopBar with Custom Text */}
        <div>
            <h3 style={{ marginBottom: '10px', color: '#475569' }}>Dark Background + Custom Text Color</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Dark"
                navigationItems={[]}
                topBar={{
                    left: 'Premium Membership',
                    right: [{ label: 'Upgrade', href: '#' }],
                    backgroundColor: 'dark',
                    textColor: '#4ade80' // Custom green text
                }}
            />
        </div>

        {/* Fully Custom Colors */}
        <div>
            <h3 style={{ marginBottom: '10px', color: '#475569' }}>Custom Hex Background</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Custom"
                navigationItems={[]}
                topBar={{
                    left: 'Summer Vibes',
                    right: [{ label: 'Explore', href: '#' }],
                    backgroundColor: '#f43f5e', // Rose-500
                    textColor: '#ffffff'
                }}
            />
        </div>
    </div>
);

// =============================================================================
// 3. HOVER COLORS & STYLING
// =============================================================================

export const HoverColorOptions = () => (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <Navbar
            variant="single-row"
            logo="https://via.placeholder.com/120x40/7c3aed/ffffff?text=Colors"
            hoverColor="primary" // Default for all items
            navigationItems={[
                { label: 'Global Primary', href: '#' },
                { label: 'Override Pink', href: '#', hoverColor: '#ec4899' },
                { label: 'Override Green', href: '#', hoverColor: '#10b981' },
                { label: 'Override Inherit', href: '#', hoverColor: 'inherit' },
            ]}
            topBar={{
                left: [
                    { label: 'Top Bar Inherit', href: '#', hoverColor: 'inherit' },
                    { label: 'Top Bar Custom', href: '#', hoverColor: '#f59e0b' }
                ],
                backgroundColor: '#1e293b',
                textColor: '#ffffff',
            }}
        />
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Hover Colors System</h1>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', color: '#64748b', lineHeight: 2 }}>
                <li>✅ Set global <code>hoverColor="primary"</code> on Navbar</li>
                <li>✅ Override on individual items with hex codes <code>hoverColor="#ec4899"</code></li>
                <li>✅ Works on TopBar items too</li>
            </ul>
        </div>
    </div>
);

// =============================================================================
// 4. SEARCH & RESPONSIVE BEHAVIOR
// =============================================================================

export const FlexibleSearch = () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ marginBottom: '10px' }}>Full Width Search (Default)</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Full"
                search={{ placeholder: 'I expand to fill space...' }}
                searchFullWidth={true}
                navigationItems={[{ label: 'Link', href: '#' }]}
            />
        </div>

        <div style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Compact Search (`searchFullWidth=false`)</h3>
            <Navbar
                variant="single-row"
                logo="https://via.placeholder.com/120x32?text=Compact"
                search={{ placeholder: 'Fixed width...' }}
                searchFullWidth={false}
                navigationItems={[{ label: 'Link', href: '#' }]}
            />
        </div>
    </div>
);

export const ResponsiveBehavior = () => (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <Navbar
            variant="two-row"
            // Custom Breakpoint: Switches to mobile view at 1280px instead of 1024px
            mobileBreakpoint={1280}
            logo="https://via.placeholder.com/150x40/2563eb/ffffff?text=Responsive"
            search={{ placeholder: 'Resize browser to test...' }}
            navigationItems={megaMenuNavItems}
            actions={<Button variant="primary">Action</Button>}
            topBar={{
                left: 'Custom Breakpoint Example',
                backgroundColor: 'secondary',
                textColor: 'light'
            }}
        />
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Responsive Breakpoint</h1>
            <p style={{ color: '#64748b', fontSize: '18px' }}>
                This navbar switches to mobile mode at <strong>1280px</strong> width.
            </p>
            <p style={{ color: '#94a3b8' }}>
                Resize your browser window to see the transition.
            </p>
        </div>
    </div>
);

// =============================================================================
// 5. ENTERPRISE E-COMMERCE EXAMPLE
// =============================================================================

export const EnterpriseProDesign = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <Navbar
            variant="two-row"
            sticky
            // Configuration
            hoverColor="primary"
            searchFullWidth={true}
            uppercaseNavItems={true}
            fullWidthSubMenu={true}
            showNavSeparators={true}
            secondRowPrimaryBackground={true}

            // Content
            logo="https://via.placeholder.com/150x40/ffffff/2563eb?text=Enterprise"

            // Top Bar
            topBar={{
                left: [
                    { label: 'USD', href: '#', icon: <span style={{ marginRight: 4 }}>🇺🇸</span> },
                    { label: 'English', href: '#' },
                ],
                right: [
                    { label: 'Store Locator', href: '#' },
                    { label: 'Track Order', href: '#' },
                    { label: 'Help', href: '#' },
                ],
                backgroundColor: 'dark',
            }}

            // Search & Actions
            search={{
                placeholder: 'What are you looking for?',
                onSearch: (q) => console.log(q)
            }}
            actions={
                <div style={{ display: 'flex', gap: 12 }}>
                    <Button variant="ghost" iconOnly>
                        <HeartIcon size={20} />
                    </Button>
                    <Button variant="primary">
                        <ShoppingCartIcon size={20} style={{ marginRight: 8 }} />
                        Cart (2)
                    </Button>
                </div>
            }

            // User
            user={{
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/150?img=11',
                menuItems: [
                    { label: 'Profile', href: '#' },
                    { label: 'Orders', href: '#' },
                    { label: 'Logout', href: '#' }
                ]
            }}

            // Navigation
            navigationItems={[
                { label: 'New Arrivals', href: '#new', active: true },
                {
                    label: 'Electronics',
                    href: '#elec',
                    megaMenu: [
                        {
                            title: 'Categories',
                            items: [{ label: 'Phone', href: '#' }, { label: 'Laptop', href: '#' }],
                            span: 1
                        },
                        {
                            title: 'Featured',
                            items: [],
                            featured: true,
                            span: 2,
                            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
                            description: 'New M2 Macbooks are here.',
                            cta: { label: 'Buy Now', href: '#', hoverColor: '#2563eb' }
                        }
                    ]
                },
                { label: 'Fashion', href: '#fashion' },
                { label: 'Home & Living', href: '#home', badge: 'Sale', badgeVariant: 'error' },
                { label: 'Sports', href: '#sports' },
            ]}
        />

        {/* Mock Hero Content */}
        <div style={{ height: '400px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '24px', color: '#64748b' }}>Hero Banner Area</h2>
        </div>
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[1, 2, 3].map(i => (
                <div key={i} style={{ height: '200px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
            ))}
        </div>
    </div>
  )
};
