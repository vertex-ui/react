import { FaEnvelope, FaBell, FaCheck, FaExclamationTriangle, FaUsers, FaDollarSign, FaChartLine, FaRocket, FaLock, FaPalette, FaBolt, FaMobileAlt, FaBullseye, FaShieldAlt, FaInfoCircle, FaClock, FaGlobe, FaBox, FaUndo } from 'react-icons/fa';
import { InfoText } from '../../widgets/InfoText/InfoText';
import { Grid } from '../../components/Grid';
import { Divider } from '../../components/Divider';

export default {
  title: 'Widgets/InfoText',
  component: InfoText.Base,
  subcomponents: {
    Base: InfoText.Base,
    Stat: InfoText.Stat,
    Feature: InfoText.Feature,
    Compact: InfoText.Compact,
    Vertical: InfoText.Vertical,
  },
};

// ==================== Base Variant ====================

export const Base = () => (
  <InfoText.Base
    icon={<FaEnvelope />}
    iconVariant="primary"
    heading="Email Notifications"
    subText="Receive updates about your account activity"
  />
);

export const BaseVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InfoText.Base
      icon={<FaEnvelope />}
      iconVariant="primary"
      heading="Email Notifications"
      subText="Receive updates about your account activity"
    />
    
    <InfoText.Base
      icon={<FaBell />}
      iconVariant="warning"
      heading="Reminder Enabled"
      subText="You will be notified 15 minutes before"
    />
    
    <InfoText.Base
      icon={<FaCheck />}
      iconVariant="success"
      heading="Verified Account"
      subText="Your identity has been confirmed"
    />
    
    <InfoText.Base
      icon={<FaExclamationTriangle />}
      iconVariant="danger"
      heading="Action Required"
      subText="Please update your payment method"
    />
  </div>
);

export const BaseWithoutSubtext = () => (
  <InfoText.Base
    icon={<FaCheck />}
    iconVariant="success"
    heading="Email Verified"
  />
);

export const BaseWithoutCircle = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InfoText.Base
      icon={<FaEnvelope />}
      iconVariant="primary"
      iconCircle={false}
      heading="Email Notifications"
      subText="Without circle background"
    />
    
    <InfoText.Base
      icon={<FaBell />}
      iconVariant="warning"
      iconCircle={false}
      heading="Reminder Enabled"
      subText="Plain icon style"
    />
    
    <InfoText.Base
      icon={<FaCheck />}
      iconVariant="success"
      iconCircle={false}
      heading="Verified Account"
      subText="No background circle"
    />
  </div>
);

// ==================== Stat Variant ====================

export const Stat = () => (
  <InfoText.Stat
    icon={<FaUsers />}
    iconVariant="primary"
    value="1,234"
    label="Active Users"
    subText="+12% from last month"
  />
);

export const StatVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InfoText.Stat
      icon={<FaUsers />}
      iconVariant="primary"
      value="1,234"
      label="Active Users"
      subText="+12% from last month"
    />
    
    <InfoText.Stat
      icon={<FaDollarSign />}
      iconVariant="success"
      value="$45,678"
      label="Total Revenue"
      subText="Year to date"
    />
    
    <InfoText.Stat
      icon={<FaChartLine />}
      iconVariant="info"
      value="89%"
      label="Completion Rate"
      subText="Above target"
    />
  </div>
);

export const StatWithoutIcon = () => (
  <InfoText.Stat
    value="24/7"
    label="Support Available"
    subText="Always here to help"
  />
);

export const StatWithoutCircle = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InfoText.Stat
      icon={<FaUsers />}
      iconVariant="primary"
      iconCircle={false}
      value="1,234"
      label="Active Users"
      subText="+12% from last month"
    />
    
    <InfoText.Stat
      icon={<FaDollarSign />}
      iconVariant="success"
      iconCircle={false}
      value="$45,678"
      label="Total Revenue"
      subText="Year to date"
    />
  </div>
);

// ==================== Feature Variant ====================

export const Feature = () => (
  <InfoText.Feature
    icon={<FaRocket />}
    iconVariant="primary"
    title="Fast Performance"
    description="Lightning-fast load times with optimized rendering and efficient code splitting for a seamless user experience."
    badge="New"
  />
);

export const FeatureVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <InfoText.Feature
      icon={<FaRocket />}
      iconVariant="primary"
      title="Fast Performance"
      description="Lightning-fast load times with optimized rendering and efficient code splitting for a seamless user experience."
      badge="New"
    />
    
    <InfoText.Feature
      icon={<FaLock />}
      iconVariant="success"
      title="Secure & Private"
      description="Enterprise-grade security with end-to-end encryption to keep your data safe and protected."
    />
    
    <InfoText.Feature
      icon={<FaPalette />}
      iconVariant="secondary"
      title="Customizable Design"
      description="Fully themeable components with CSS variables and multiple variants to match your brand."
      badge="Popular"
    />
    
    <InfoText.Feature
      icon={<FaBolt />}
      iconVariant="warning"
      title="Real-time Updates"
      description="Get instant notifications and live data synchronization across all your devices."
    />
  </div>
);

// ==================== Compact Variant ====================

export const Compact = () => (
  <InfoText.Compact
    icon={<FaCheck />}
    iconVariant="success"
    text="Payment successful"
  />
);

export const CompactVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <InfoText.Compact
      icon={<FaCheck />}
      iconVariant="success"
      text="Payment successful"
    />
    
    <InfoText.Compact
      icon={<FaExclamationTriangle />}
      iconVariant="warning"
      text="Limited time offer"
    />
    
    <InfoText.Compact
      icon={<FaInfoCircle />}
      iconVariant="info"
      text="Available in Pro plan"
    />
    
    <InfoText.Compact
      icon={<FaBell />}
      iconVariant="primary"
      text="3 new notifications"
    />
    
    <InfoText.Compact
      icon={<FaClock />}
      iconVariant="danger"
      text="Expires in 2 days"
    />
  </div>
);

// ==================== Vertical Variant ====================

export const Vertical = () => (
  <div style={{ width: '150px' }}>
    <InfoText.Vertical
      icon={<FaMobileAlt />}
      iconVariant="primary"
      heading="Mobile Ready"
      subText="Works on all devices"
    />
  </div>
);

export const VerticalVariants = () => (
  <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
    <div style={{ width: '150px' }}>
      <InfoText.Vertical
        icon={<FaMobileAlt />}
        iconVariant="primary"
        heading="Mobile Ready"
        subText="Works on all devices"
      />
    </div>
    
    <div style={{ width: '150px' }}>
      <InfoText.Vertical
        icon={<FaBolt />}
        iconVariant="warning"
        heading="Lightning Fast"
        subText="Optimized for speed"
      />
    </div>
    
    <div style={{ width: '150px' }}>
      <InfoText.Vertical
        icon={<FaBullseye />}
        iconVariant="success"
        heading="Easy to Use"
        subText="Simple and intuitive"
      />
    </div>
    
    <div style={{ width: '150px' }}>
      <InfoText.Vertical
        icon={<FaShieldAlt />}
        iconVariant="info"
        heading="Secure"
        subText="Bank-level encryption"
      />
    </div>
  </div>
);

// ==================== All Icon Variants ====================

export const AllIconVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InfoText.Base icon={<FaInfoCircle />} iconVariant="primary" heading="Primary" subText="Blue theme" />
    <InfoText.Base icon={<FaInfoCircle />} iconVariant="secondary" heading="Secondary" subText="Purple theme" />
    <InfoText.Base icon={<FaCheck />} iconVariant="success" heading="Success" subText="Green theme" />
    <InfoText.Base icon={<FaExclamationTriangle />} iconVariant="danger" heading="Danger" subText="Red theme" />
    <InfoText.Base icon={<FaExclamationTriangle />} iconVariant="warning" heading="Warning" subText="Yellow theme" />
    <InfoText.Base icon={<FaInfoCircle />} iconVariant="info" heading="Info" subText="Cyan theme" />
  </div>
);

// ==================== Mixed Usage Example ====================

export const MixedUsage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
    <div>
      <h3 style={{ marginBottom: '12px' }}>Dashboard Statistics</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <InfoText.Stat
          icon={<FaChartLine />}
          iconVariant="primary"
          value="24,531"
          label="Page Views"
          subText="Last 30 days"
        />
        <InfoText.Stat
          icon={<FaClock />}
          iconVariant="info"
          value="2m 34s"
          label="Avg. Session"
          subText="Improved by 15%"
        />
      </div>
    </div>
    
    <Divider />
    
    <div>
      <h3 style={{ marginBottom: '12px' }}>Account Status</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <InfoText.Base
          icon={<FaCheck />}
          iconVariant="success"
          heading="Email Verified"
          subText="Verified on Dec 15, 2025"
        />
        <InfoText.Base
          icon={<FaExclamationTriangle />}
          iconVariant="warning"
          heading="Payment Due"
          subText="Next billing date: Jan 1, 2026"
        />
      </div>
    </div>
    
    <Divider />
    
    <div>
      <h3 style={{ marginBottom: '12px' }}>Quick Info</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <InfoText.Compact icon={<FaGlobe />} iconVariant="primary" text="Available in 12 languages" />
        <InfoText.Compact icon={<FaBox />} iconVariant="success" text="Free shipping on orders over $50" />
        <InfoText.Compact icon={<FaUndo />} iconVariant="info" text="30-day money-back guarantee" />
      </div>
    </div>
  </div>
);

// ==================== Grid Layout Example ====================

export const GridLayout = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <InfoText.Stat
        icon={<FaUsers />}
        iconVariant="primary"
        value="1,234"
        label="Active Users"
        subText="+12% from last month"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <InfoText.Stat
        icon={<FaDollarSign />}
        iconVariant="success"
        value="$45,678"
        label="Total Revenue"
        subText="Year to date"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <InfoText.Stat
        icon={<FaChartLine />}
        iconVariant="info"
        value="89%"
        label="Completion Rate"
        subText="Above target"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <InfoText.Stat
        icon={<FaClock />}
        iconVariant="warning"
        value="2m 34s"
        label="Avg. Response Time"
        subText="Under 3 min target"
      />
    </Grid>
  </Grid>
);

// ==================== Feature Grid Example ====================

export const FeatureGrid = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={3}>
      <InfoText.Vertical
        icon={<FaMobileAlt />}
        iconVariant="primary"
        heading="Mobile Ready"
        subText="Responsive design"
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <InfoText.Vertical
        icon={<FaBolt />}
        iconVariant="warning"
        heading="Fast"
        subText="Optimized performance"
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <InfoText.Vertical
        icon={<FaShieldAlt />}
        iconVariant="success"
        heading="Secure"
        subText="Protected data"
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <InfoText.Vertical
        icon={<FaBullseye />}
        iconVariant="info"
        heading="Intuitive"
        subText="Easy to use"
      />
    </Grid>
  </Grid>
);
