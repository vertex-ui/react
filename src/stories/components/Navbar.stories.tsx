import { Navbar, NavigationItem } from '../../components/Navbar/Navbar';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Flex } from '../../components/Flex';
import { ThemeProvider } from '../../theme/ThemeProvider';
import {
  FiUser,
  FiHeart,
  FiPhone,
} from 'react-icons/fi';
import { MdOutlineLocalShipping, MdLanguage } from 'react-icons/md';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

// --- MOCK DATA GENERATORS ---

// Define a loose type for our mock data structure
interface MockItem {
  item: string;
  link: string;
  active?: boolean;
  children?: MockItem[];
  megaMenu?: any;
  badge?: string;
  badgeVariant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
}

const mapMockToNav = (items: MockItem[]): NavigationItem[] => {
  return items.map(i => ({
    label: i.item,
    href: i.link,
    active: i.active,
    children: i.children ? mapMockToNav(i.children) : undefined,
    megaMenu: i.megaMenu,
    badge: i.badge,
    badgeVariant: i.badgeVariant
  }));
};

const ecommerceData: MockItem[] = [
  { item: "New Arrivals", link: "/new", active: true },
  {
    item: "Women",
    link: "/women",
    megaMenu: [
      {
        title: "Clothing",
        items: [
          { label: "Dresses", href: "/dresses" },
          { label: "Tops & Blouses", href: "/tops" },
          { label: "Jeans", href: "/jeans" },
          { label: "Coats & Jackets", href: "/coats" },
        ]
      },
      {
        title: "Shoes & Accessories",
        items: [
          { label: "Sneakers", href: "/sneakers", active: true },
          { label: "Boots", href: "/boots" },
          { label: "Handbags", href: "/bags" },
          { label: "Jewelry", href: "/jewelry" },
        ]
      },
      {
        title: "Collections",
        items: [
          { label: "Summer 2024", href: "/summer" },
          { label: "Workwear", href: "/work" },
          { label: "Party Edit", href: "/party" },
        ]
      }
    ]
  },
  { item: "Men", link: "/men" },
  { item: "Sports", link: "/sports" },
  { item: "Sale", link: "/sale", badge: "Final", badgeVariant: "error" },
];

const startupData: MockItem[] = [
  { item: "Products", link: "/products" },
  { item: "Solutions", link: "/solutions" },
  { item: "Resources", link: "/resources" },
  { item: "Pricing", link: "/pricing" },
];

const agencyData: MockItem[] = [
  { item: "Work", link: "/work" },
  { item: "Expertise", link: "/expertise" },
  { item: "About", link: "/about" },
  { item: "Contact", link: "/contact" },
];

// --- STORIES ---

/**
 * 1. E-COMMERCE STORE
 * Uses a Two-Row layout.
 * Top row: Logo, Search, Account/Cart icons.
 * Bottom row: Main Category Navigation.
 * Includes a TopBar for announcements.
 */
export const EcommerceStore = () => {
  const contactInfoNode = (
    <Flex align="center" gap={12}>
      <div style={{ fontSize: '1.5rem', color: 'var(--vtx-color-primary-500)' }}>
        <FiPhone />
      </div>
      <Flex direction="column" style={{ lineHeight: 1.2 }}>
        <Text variant="caption" color="secondary" weight="medium">Customer Support</Text>
        <Text variant="body2" weight="semibold">+1 (800) 555-0123</Text>
      </Flex>
    </Flex>
  );

  return (
    <Navbar
      variant="two-row"
      logo="https://via.placeholder.com/140x40?text=LUXE+STORE"
      brandText="Luxe Store"
      navigationItems={mapMockToNav(ecommerceData)}
      search={{ placeholder: "Search for products, brands and more..." }}
      contentNodes={[contactInfoNode]}
      actions={
        <Flex align="center" gap={8}>
          <Button variant="ghost" size="sm" iconOnly><FiHeart size={20} /></Button>
          <Button variant="ghost" size="sm" iconOnly><FiUser size={20} /></Button>
        </Flex>
      }
      topBar={{
        left: (
          <Flex align="center" gap={8}>
            <MdOutlineLocalShipping />
            <Text size="sm">Free shipping on all orders over $75</Text>
          </Flex>
        ),
        right: [
          { label: "Track Order", href: "/track" },
          { label: "Find a Store", href: "/stores" },
        ],
        backgroundColor: "#1a202c",
        textColor: "#ffffff"
      }}
      sticky
    />
  );
};

/**
 * 2. TECH STARTUP (SaaS)
 * Uses a Single-Row layout.
 * Clean, modern look with focus on "Get Started" CTA.
 */
export const TechStartup = () => {
  return (
    <Navbar
      variant="single-row"
      logo="https://via.placeholder.com/120x40?text=NEXUS"
      brandText="Nexus AI"
      navigationItems={mapMockToNav(startupData)}
      actions={
        <Flex align="center" gap={12}>
          <Button variant="ghost" size="sm">Log In</Button>
          <Button variant="primary" size="sm">Start Free Trial</Button>
        </Flex>
      }
      sticky
      shadow
    />
  );
};

/**
 * 3. CREATIVE AGENCY
 * Uses a Centered layout.
 * Minimalist, focus on typography and whitespace.
 */
export const CreativeAgency = () => (
  <Navbar
    variant="centered"
    logo="https://via.placeholder.com/100x40?text=BOLD"
    brandText="BOLD"
    navigationItems={mapMockToNav(agencyData)}
    actions={
      <Button variant="outline" size="sm" style={{ borderRadius: '999px' }}>
        Start a Project
      </Button>
    }
    shadow={false}
    style={{ borderBottom: '1px solid transparent' }}
  />
);

/**
 * 4. ENTERPRISE / CORPORATE
 * Informative, structured, trustworthy.
 * Uses a secondary top bar for investor/career links.
 */
export const EnterpriseCorp = () => (
  <Navbar
    variant="single-row"
    logo="https://via.placeholder.com/160x45?text=GLOBAL+CORP"
    brandText="Global Corp"
    navigationItems={[
      {
        label: "Industries",
        href: "/industries",
        megaMenu: [
          {
            title: "Sectors",
            items: [
              { label: "Financial Services", href: "/finance" },
              { label: "Healthcare & Life Sciences", href: "/health" },
              { label: "Manufacturing", href: "/manufacturing" },
              { label: "Public Sector", href: "/public" },
            ]
          }
        ]
      },
      { label: "Services", href: "/services" },
      { label: "Insights", href: "/insights" },
      { label: "About Us", href: "/about" },
    ]}
    search={{ placeholder: "Search Global Corp..." }}
    topBar={{
      right: [
        { label: "Investors", href: "/investors" },
        { label: "Newsroom", href: "/news" },
        { label: "Careers", href: "/careers" },
        { label: "Global (EN)", href: "/lang", icon: <MdLanguage /> },
      ],
      backgroundColor: "#f7fafc", // Light gray
      textColor: "#4a5568"
    }}
    actions={<Button variant="primary">Contact Sales</Button>}
  />
);

/**
 * 5. NEWS / MEDIA PUBLICATION
 * High density, multiple levels of navigation.
 * Uses Two-Row mostly to fit categories.
 */
export const DigitalNews = () => (
  <Navbar
    variant="two-row"
    logo="https://via.placeholder.com/180x50?text=THE+DAILY"
    brandText="The Daily View"
    navigationItems={[
      { label: "World", href: "/world", active: true },
      { label: "Business", href: "/business" },
      { label: "Tech", href: "/tech" },
      { label: "Science", href: "/science" },
      { label: "Health", href: "/health" },
      { label: "Sports", href: "/sports" },
      { label: "Entertainment", href: "/entertainment" },
      { label: "Travel", href: "/travel" },
    ]}
    contentNodes={[
      <Text key="date" variant="body2" weight="bold" style={{ marginRight: '1rem' }}>
        {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </Text>
    ]}
    actions={
      <Flex align="center" gap={8}>
        <Button variant="outline" size="sm">Subscribe</Button>
        <Button variant="ghost" size="sm">Log In</Button>
      </Flex>
    }
  />
);

/**
 * 6. DARK MODE (SAAS)
 * Demonstrates theme adaptability.
 */
export const DarkModeSaaS = () => (
  <ThemeProvider initialMode="dark">
    <div style={{ minHeight: '50vh', background: 'var(--vtx-bg-primary)' }}>
      <Navbar
        variant="single-row"
        logo="https://via.placeholder.com/120x40?text=CYBER+SEC&bg=000&color=fff"
        brandText="CyberSec"
        navigationItems={[
          { label: "Platform", href: "/platform" },
          { label: "Solutions", href: "/solutions" },
          { label: "Pricing", href: "/pricing" },
        ]}
        actions={
          <Flex align="center" gap={10}>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm" color="success">Get Demo</Button>
          </Flex>
        }
        sticky
      />
      <Flex direction="column" align="center" style={{ padding: '2rem' }}>
        <Text variant="h1" align="center">Secure your infrastructure</Text>
      </Flex>
    </div>
  </ThemeProvider>
);
