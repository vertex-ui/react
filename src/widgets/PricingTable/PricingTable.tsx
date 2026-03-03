import React from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { CheckIcon, CloseSmallIcon } from '../../icons/IconComponents';
import './PricingTable.css';

export interface PricingTier {
  id: string;
  name: string;
  description?: string;
  price: number | string;
  period?: string;
  currency?: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  popular?: boolean;
  popularText?: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onButtonClick?: () => void;
  href?: string;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  columns?: 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
}

const PricingTable: React.FC<PricingTableProps> = ({
  tiers,
  columns = 3,
  className = '',
  style,
}) => {
  return (
    <div className={`lxs-pricing-table ${className}`} style={style}>
      <div
        className={`lxs-pricing-grid lxs-pricing-grid--${columns}-cols`}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`lxs-pricing-wrapper ${tier.popular ? 'lxs-pricing-wrapper--popular' : ''}`}
          >
            <Card
              className={`lxs-pricing-card ${tier.popular ? 'lxs-pricing-card--popular' : ''}`}
              variant={tier.popular ? 'elevated' : 'outlined'}
              padding="24px"
            >
              {tier.popular && (
                <div className="lxs-pricing-popular-badge">
                  {tier.popularText || 'Most Popular'}
                </div>
              )}

              <div className="lxs-pricing-header">
                <h3 className="lxs-pricing-title">{tier.name}</h3>
                {tier.description && (
                  <p className="lxs-pricing-subtitle">{tier.description}</p>
                )}
              </div>

              <div className="lxs-pricing-price-wrapper">
                <span className="lxs-pricing-price">
                  {tier.currency}{tier.price}
                </span>
                {tier.period && (
                  <span className="lxs-pricing-period">/{tier.period}</span>
                )}
              </div>

              <ul className="lxs-pricing-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="lxs-pricing-feature-item">
                    <span className={`lxs-pricing-feature-icon ${feature.included ? 'lxs-pricing-feature-icon--check' : 'lxs-pricing-feature-icon--cross'}`}>
                      {feature.included ? <CheckIcon size={16} /> : <CloseSmallIcon size={16} />}
                    </span>
                    <span style={{ opacity: feature.included ? 1 : 0.5 }}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="lxs-pricing-footer">
                <Button
                  fullWidth
                  variant={tier.buttonVariant || (tier.popular ? 'primary' : 'outline')}
                  onClick={tier.onButtonClick}
                  asLink={!!tier.href}
                  href={tier.href}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
