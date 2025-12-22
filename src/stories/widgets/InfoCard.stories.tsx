import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import {InfoCard} from '../../widgets/InfoCard/InfoCard';

export default {
  title: 'Widgets/InfoCard',
  component: InfoCard.Base,
  subcomponents: { Metric: InfoCard.Metric },
};

export const Base = () => (
  <InfoCard.Base
    icon={<FaInfoCircle />}
    iconVariant="primary"
    text="Information"
    subText="This is an info card."
  />
);

export const BaseVariants = () => (
  <>
    <InfoCard.Base
      icon={<FaInfoCircle />}
      iconVariant="primary"
      text="Primary Info"
      subText="Primary variant."
    />
    <InfoCard.Base
      icon={<FaCheckCircle />}
      iconVariant="success"
      text="Success Info"
      subText="Success variant."
      style={{ marginTop: 16 }}
    />
    <InfoCard.Base
      icon={<FaExclamationTriangle />}
      iconVariant="warning"
      text="Warning Info"
      subText="Warning variant."
      style={{ marginTop: 16 }}
    />
  </>
);

export const Metric = () => (
  <InfoCard.Metric value={42} label="Active Users" />
);

export const MetricCustom = () => (
  <InfoCard.Metric value={"99.9%"} label="Uptime" />
);
