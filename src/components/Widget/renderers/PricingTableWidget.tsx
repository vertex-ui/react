import React from 'react';
import { PricingTableWidgetData, PricingTableWidgetSettings } from '../types';
import { PricingTable } from '../../../widgets/PricingTable';

interface PricingTableWidgetProps {
  data: PricingTableWidgetData;
  settings?: PricingTableWidgetSettings;
}

const PricingTableWidget: React.FC<PricingTableWidgetProps> = ({ data, settings = {} }) => {
  return (
    <PricingTable
      tiers={data.tiers}
      columns={settings.columns || 3}
      className={settings.className}
      style={settings.style}
    />
  );
};

export default PricingTableWidget;
