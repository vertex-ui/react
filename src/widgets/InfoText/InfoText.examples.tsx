import { InfoText } from './InfoText';

/**
 * InfoText.Base - Basic info text with icon, heading, and optional subtext
 */
export const InfoTextBaseExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <InfoText.Base
        icon="📧"
        iconVariant="primary"
        heading="Email Notifications"
        subText="Receive updates about your account activity"
      />
      
      <InfoText.Base
        icon="🔔"
        iconVariant="warning"
        heading="Reminder Enabled"
        subText="You will be notified 15 minutes before"
      />
      
      <InfoText.Base
        icon="✓"
        iconVariant="success"
        heading="Verified Account"
        subText="Your identity has been confirmed"
      />
      
      <InfoText.Base
        icon="⚠"
        iconVariant="danger"
        heading="Action Required"
        subText="Please update your payment method"
      />
    </div>
  );
};

/**
 * InfoText.Stat - Statistics display with icon, large value, and label
 */
export const InfoTextStatExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <InfoText.Stat
        icon="👥"
        iconVariant="primary"
        value="1,234"
        label="Active Users"
        subText="+12% from last month"
      />
      
      <InfoText.Stat
        icon="💰"
        iconVariant="success"
        value="$45,678"
        label="Total Revenue"
        subText="Year to date"
      />
      
      <InfoText.Stat
        icon="📈"
        iconVariant="info"
        value="89%"
        label="Completion Rate"
        subText="Above target"
      />
      
      {/* Stat without icon */}
      <InfoText.Stat
        value="24/7"
        label="Support Available"
        subText="Always here to help"
      />
    </div>
  );
};

/**
 * InfoText.Feature - Feature highlights with icon, title, description, and optional badge
 */
export const InfoTextFeatureExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <InfoText.Feature
        icon="🚀"
        iconVariant="primary"
        title="Fast Performance"
        description="Lightning-fast load times with optimized rendering and efficient code splitting for a seamless user experience."
        badge="New"
      />
      
      <InfoText.Feature
        icon="🔒"
        iconVariant="success"
        title="Secure & Private"
        description="Enterprise-grade security with end-to-end encryption to keep your data safe and protected."
      />
      
      <InfoText.Feature
        icon="🎨"
        iconVariant="secondary"
        title="Customizable Design"
        description="Fully themeable components with CSS variables and multiple variants to match your brand."
        badge="Popular"
      />
      
      <InfoText.Feature
        icon="⚡"
        iconVariant="warning"
        title="Real-time Updates"
        description="Get instant notifications and live data synchronization across all your devices."
      />
    </div>
  );
};

/**
 * InfoText.Compact - Compact info display for inline use
 */
export const InfoTextCompactExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
      <InfoText.Compact icon="✓" iconVariant="success" text="Payment successful" />
      
      <InfoText.Compact icon="⚠" iconVariant="warning" text="Limited time offer" />
      
      <InfoText.Compact icon="ℹ" iconVariant="info" text="Available in Pro plan" />
      
      <InfoText.Compact icon="🔔" iconVariant="primary" text="3 new notifications" />
      
      <InfoText.Compact icon="⏱" iconVariant="danger" text="Expires in 2 days" />
    </div>
  );
};

/**
 * InfoText.Vertical - Vertical layout with centered icon and text
 */
export const InfoTextVerticalExample = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', justifyContent: 'center' }}>
      <div style={{ width: '150px' }}>
        <InfoText.Vertical
          icon="📱"
          iconVariant="primary"
          heading="Mobile Ready"
          subText="Works on all devices"
        />
      </div>
      
      <div style={{ width: '150px' }}>
        <InfoText.Vertical
          icon="⚡"
          iconVariant="warning"
          heading="Lightning Fast"
          subText="Optimized for speed"
        />
      </div>
      
      <div style={{ width: '150px' }}>
        <InfoText.Vertical
          icon="🎯"
          iconVariant="success"
          heading="Easy to Use"
          subText="Simple and intuitive"
        />
      </div>
      
      <div style={{ width: '150px' }}>
        <InfoText.Vertical
          icon="🔐"
          iconVariant="info"
          heading="Secure"
          subText="Bank-level encryption"
        />
      </div>
    </div>
  );
};

/**
 * Mixed Usage Example - Combining different variants
 */
export const InfoTextMixedExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px', maxWidth: '600px' }}>
      <div>
        <h3>Dashboard Statistics</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          <InfoText.Stat
            icon="👁"
            iconVariant="primary"
            value="24,531"
            label="Page Views"
            subText="Last 30 days"
          />
          <InfoText.Stat
            icon="⏱"
            iconVariant="info"
            value="2m 34s"
            label="Avg. Session"
            subText="Improved by 15%"
          />
        </div>
      </div>
      
      <div>
        <h3>Account Status</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          <InfoText.Base
            icon="✓"
            iconVariant="success"
            heading="Email Verified"
            subText="Verified on Dec 15, 2025"
          />
          <InfoText.Base
            icon="⚠"
            iconVariant="warning"
            heading="Payment Due"
            subText="Next billing date: Jan 1, 2026"
          />
        </div>
      </div>
      
      <div>
        <h3>Quick Info</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
          <InfoText.Compact icon="🌐" iconVariant="primary" text="Available in 12 languages" />
          <InfoText.Compact icon="📦" iconVariant="success" text="Free shipping on orders over $50" />
          <InfoText.Compact icon="↩" iconVariant="info" text="30-day money-back guarantee" />
        </div>
      </div>
    </div>
  );
};

export default {
  Base: InfoTextBaseExample,
  Stat: InfoTextStatExample,
  Feature: InfoTextFeatureExample,
  Compact: InfoTextCompactExample,
  Vertical: InfoTextVerticalExample,
  Mixed: InfoTextMixedExample,
};
