import { FC } from "react";

import "../styles/pricing-card.css";

type Props = {
  title: string;
  price: number;
  onClick?: () => void;
};

const PricingCard: FC<Props> = ({ title, price, onClick }) => {
  return (
    <div className="pricing-card">
      <div className="top">
        <h3 className="title">{title}</h3>
      </div>
      <div className="bottom">
        <h1 className="price">
          ₱{price}
          <span>/year</span>
        </h1>
        <button onClick={onClick}>Get Started</button>
      </div>
    </div>
  );
};

export default PricingCard;
