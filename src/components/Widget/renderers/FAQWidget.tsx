import React from 'react';
import { FAQWidgetData, FAQWidgetSettings } from '../types';
import { FAQ } from '../../../widgets/FAQ';

interface FAQWidgetProps {
  data: FAQWidgetData;
  settings?: FAQWidgetSettings;
}

const FAQWidget: React.FC<FAQWidgetProps> = ({ data, settings = {} }) => {
  return (
    <FAQ
      title={data.title as string}
      subtitle={data.subtitle as string}
      items={data.items}
      allowMultiple={settings.allowMultiple}
      variant={settings.variant === 'primary' ? 'default' : settings.variant as any} // Map variant if needed
      className={settings.className}
      style={settings.style}
    />
  );
};

export default FAQWidget;
