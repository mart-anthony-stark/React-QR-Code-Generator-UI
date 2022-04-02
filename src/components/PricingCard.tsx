import { FC } from "react";

import "../styles/pricing-card.css";

type Props = {
  title: string;
};

const PricingCard: FC<Props> = ({ title }) => {
  return (
    <div className="pricing-card">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default PricingCard;
