import React from 'react';
import { Button } from '../../Button';
import { Navbar } from '../Navbar';
import {
    ChartBarIcon,
    CheckCircleIcon,
    CreditCardIcon,
    DocumentIcon,
    HomeIcon,
    PackageIcon,
    SettingsIcon,
    ShoppingBagIcon,
    TruckIcon,
    UserIcon,
    ZapIcon
} from '../../../icons/IconComponents';

export default {
    title: 'Components/Navbar/Enterprise',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
};

// Helper Component for Feature Cards needs to be defined before usage
const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <div style={{
        padding: '24px',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
        <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: 'rgba(5, 150, 105, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#059669',
            marginBottom: '16px'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
            {title}
        </h3>
        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
            {description}
        </p>
    </div>
);

// Professional Mega Menu with Icons, Descriptions, and Features
const ProMegaMenuColumns = [
    {
        title: 'Shop by Category',
        description: 'Browse our complete product catalog',
        items: [
            {
                label: 'Fresh Vegetables',
                href: '#vegetables',
                icon: <ZapIcon size={20} />,
                description: 'Farm-fresh organic vegetables delivered daily',
                tagVariant: 'new' as const,
            },
            {
                label: 'Exotic Fruits',
                href: '#fruits',
                icon: <ShoppingBagIcon size={20} />,
                description: 'Premium quality fruits from around the world',
            },
            {
                label: 'Dairy Products',
                href: '#dairy',
                icon: <CheckCircleIcon size={20} />,
                description: '100% organic dairy products',
                badge: '50+',
            },
            {
                label: 'Bakery Items',
                href: '#bakery',
                icon: <PackageIcon size={20} />,
                description: 'Freshly baked goods every morning',
                tagVariant: 'hot' as const,
            },
        ],
    },
    {
        title: 'Quick Links',
        items: [
            {
                label: 'Best Sellers',
                href: '#best-sellers',
                description: 'Most popular items this week',
                featured: true,
            },
            {
                label: 'New Arrivals',
                href: '#new',
                description: 'Check out our latest products',
                tagVariant: 'new' as const,
            },
            {
                label: 'On Sale',
                href: '#sale',
                description: 'Save up to 50% on selected items',
                tagVariant: 'sale' as const,
            },
            {
                label: 'Bundle Deals',
                href: '#bundles',
                description: 'Save more when you bundle',
                badge: '20% OFF',
            },
        ],
    },
    {
        title: 'Customer Service',
        items: [
            {
                label: 'Track Order',
                href: '#track',
                icon: <TruckIcon size={20} />,
                description: 'Real-time order tracking',
            },
            {
                label: 'My Account',
                href: '#account',
                icon: <UserIcon size={20} />,
                description: 'Manage your profile and orders',
            },
            {
                label: 'Payment Methods',
                href: '#payment',
                icon: <CreditCardIcon size={20} />,
                description: 'Secure payment options',
            },
            {
                label: 'Help Center',
                href: '#help',
                icon: <DocumentIcon size={20} />,
                description: 'FAQs and support articles',
            },
        ],
        cta: {
            label: 'Contact Support',
            href: '#support',
        },
    },
    {
        title: 'Featured Collection',
        description: 'Handpicked seasonal favorites',
        featured: true,
        span: 1,
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop',
        items: [
            {
                label: 'Summer Harvest Box',
                href: '#summer-box',
                description: 'Curated selection of summer produce',
                featured: true,
            },
            {
                label: 'Organic Starter Kit',
                href: '#starter-kit',
                description: 'Everything you need to go organic',
            },
        ],
        cta: {
            label: 'View All Collections',
            href: '#collections',
        },
    },
];

// Simpler version for comparison
const SimpleMegaMenuColumns = [
    {
        title: 'Shop Page',
        items: [
            { label: 'Shop Default Grid', href: '#', active: true },
            { label: 'Shop Default Listing', href: '#' },
            { label: 'Shop Left Sidebar', href: '#' },
            { label: 'Shop Right Sidebar', href: '#' },
            { label: 'Shop Category', href: '#' },
        ],
    },
    {
        title: 'Product Types',
        items: [
            { label: 'Simple Product', href: '#' },
            { label: 'Variable Product', href: '#' },
            { label: 'External/Affiliate Product', href: '#' },
            { label: 'Product Count Down', href: '#' },
            { label: 'Product Out Of Stock', href: '#' },
        ],
    },
    {
        title: 'Product Layouts',
        items: [
            { label: 'Product Image Vertical', href: '#' },
            { label: 'Product Image Horizontal', href: '#' },
            { label: 'Product Left - Main Sidebar', href: '#' },
            { label: 'Product Right - Main Sidebar', href: '#' },
            { label: 'Tab Default', href: '#' },
        ],
    },
    {
        title: 'WooCommerce',
        items: [
            { label: 'My Wishlist', href: '#' },
            { label: 'Shopping Cart', href: '#' },
            { label: 'Checkout', href: '#' },
            { label: 'Track My Order', href: '#' },
            { label: 'My Account', href: '#' },
        ],
    },
];

export const EnterpriseProDesign = () => (
    <div style={{ minHeight: '200vh', background: '#f8fafc' }}>
        <Navbar
            variant="two-row"
            sticky
            topBar={{
                left: (
                    <div style={{ display: 'flex', gap: 16, fontSize: '13px' }}>
                        <span>🎉 Welcome to GreenMart! Free shipping on orders over $50</span>
                    </div>
                ),
                right: [
                    { label: 'Track Order', href: '#', icon: <TruckIcon size={14} /> },
                    { label: 'Help', href: '#' },
                    { label: 'Sign In', href: '#' },
                ]
            }}

            logo="https://via.placeholder.com/150x40/059669/ffffff?text=GreenMart"
            search={{
                placeholder: 'Search 20,000+ organic products...',
            }}
            actions={
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>Need help?</div>
                            <span style={{ fontWeight: 700, fontSize: '15px', color: '#059669' }}>+1 900 123 456</span>
                        </div>
                    </div>
                    <Button
                        variant="primary"
                        style={{
                            background: '#059669',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            fontWeight: 600
                        }}
                    >
                        <ShoppingBagIcon size={18} style={{ marginRight: 8 }} />
                        Cart $0.00
                    </Button>
                </div>
            }

            navigationItems={[
                { label: 'Home', href: '#', icon: <HomeIcon size={16} /> },
                { label: 'Shop', href: '#', megaMenu: ProMegaMenuColumns, active: true },
                { label: 'Deals', href: '#', badge: 'Hot', badgeVariant: 'error' },
                { label: 'About', href: '#' },
                { label: 'Contact', href: '#' },
            ]}
        />

        {/* Hero Section */}
        <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            padding: '100px 40px',
            textAlign: 'center',
        }}>
            <h1 style={{
                fontSize: '56px',
                color: '#064e3b',
                marginBottom: '20px',
                fontWeight: 800,
                letterSpacing: '-0.02em'
            }}>
                Fresh Organic Market
            </h1>
            <p style={{
                fontSize: '20px',
                color: '#059669',
                fontWeight: 500,
                marginBottom: '32px'
            }}>
                Farm-fresh vegetables & fruits delivered to your door
            </p>
            <Button
                variant="primary"
                style={{
                    background: '#059669',
                    padding: '16px 48px',
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '12px'
                }}
            >
                Shop Now
            </Button>
        </div>

        {/* Content Section */}
        <div style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center', color: '#0f172a' }}>
                Professional Mega Menu Features
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
            }}>
                <FeatureCard
                    icon={<ZapIcon size={24} />}
                    title="Icons & Descriptions"
                    description="Each menu item can have an icon and description for better context"
                />
                <FeatureCard
                    icon={<ChartBarIcon size={24} />}
                    title="Featured Items"
                    description="Highlight important items with featured styling and badges"
                />
                <FeatureCard
                    icon={<SettingsIcon size={24} />}
                    title="Flexible Layout"
                    description="Customize column spans and add featured sections with images"
                />
                <FeatureCard
                    icon={<CheckCircleIcon size={24} />}
                    title="Enterprise Ready"
                    description="Professional design that scales for large navigation structures"
                />
            </div>
        </div>
    </div>
);

export const EnterpriseStandard = () => (
    <div style={{ minHeight: '200vh', background: '#ffffff' }}>
        <Navbar
            variant="two-row"
            sticky
            topBar={{
                left: (
                    <div style={{ display: 'flex', gap: 16 }}>
                        <span>Welcome to GreenMart!</span>
                    </div>
                ),
                right: [
                    { label: 'Order Tracking', href: '#' },
                    { label: 'My Wishlist', href: '#' },
                    { label: 'Recent Viewed Products', href: '#' },
                ]
            }}

            // Middle Section
            logo="https://via.placeholder.com/150x40/059669/ffffff?text=GreenMart"
            search={{
                placeholder: 'Search for products...',
            }}
            actions={
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>Call Us</div>
                            <span style={{ fontWeight: 600, fontSize: '14px' }}>+1 900 123 456</span>
                        </div>
                    </div>
                    <Button variant="primary" style={{ background: '#059669', borderRadius: '4px' }}>
                        Cart $0.00
                    </Button>
                </div>
            }

            // Bottom Navigation
            navigationItems={[
                { label: 'Home', href: '#' },
                { label: 'Shop', href: '#', megaMenu: SimpleMegaMenuColumns, active: true },
                { label: 'Pages', href: '#' },
                { label: 'Vegetables', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Flash Sales', href: '#' },
            ]}
        />

        {/* Hero Section */}
        <div style={{
            background: '#f0fdf4',
            padding: '80px 0',
            textAlign: 'center',
            borderBottom: '1px solid #e5e7eb'
        }}>
            <h1 style={{ fontSize: '42px', color: '#064e3b', marginBottom: '16px', fontWeight: 700 }}>Fresh Organic Market</h1>
            <p style={{ fontSize: '18px', color: '#059669' }}>Save up to 50% off on your first order</p>
        </div>
    </div>
);
