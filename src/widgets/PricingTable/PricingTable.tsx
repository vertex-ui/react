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
    <div className={`vtx-pricing-table ${className}`} style={style}>
      <div
        className={`vtx-pricing-grid vtx-pricing-grid--${columns}-cols`}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`vtx-pricing-wrapper ${tier.popular ? 'vtx-pricing-wrapper--popular' : ''}`}
          >
            <Card
              className={`vtx-pricing-card ${tier.popular ? 'vtx-pricing-card--popular' : ''}`}
              variant={tier.popular ? 'elevated' : 'outlined'}
              padding="24px"
            >
              {tier.popular && (
                <div className="vtx-pricing-popular-badge">
                  {tier.popularText || 'Most Popular'}
                </div>
              )}

              <div className="vtx-pricing-header">
                <h3 className="vtx-pricing-title">{tier.name}</h3>
                {tier.description && (
                  <p className="vtx-pricing-subtitle">{tier.description}</p>
                )}
              </div>

              <div className="vtx-pricing-price-wrapper">
                <span className="vtx-pricing-price">
                  {tier.currency}{tier.price}
                </span>
                {tier.period && (
                  <span className="vtx-pricing-period">/{tier.period}</span>
                )}
              </div>

              <ul className="vtx-pricing-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="vtx-pricing-feature-item">
                    <span className={`vtx-pricing-feature-icon ${feature.included ? 'vtx-pricing-feature-icon--check' : 'vtx-pricing-feature-icon--cross'}`}>
                      {feature.included ? <CheckIcon size={16} /> : <CloseSmallIcon size={16} />}
                    </span>
                    <span style={{ opacity: feature.included ? 1 : 0.5 }}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="vtx-pricing-footer">
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
