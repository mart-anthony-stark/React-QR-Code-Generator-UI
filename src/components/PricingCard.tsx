import { FC } from "react";

import "../styles/pricing-card.css";

type Props = {
  title: string;
  price: number;
  onClick?: () => void;
  features?: string[];
};

const PricingCard: FC<Props> = ({ title, price, onClick, features }) => {
  return (
    <div className="pricing-card">
      <div className="top">
        <h3 className="title">{title}</h3>
      </div>
      <div className="bottom">
        <h1 className="price">
          ₱{price}
          <span>/month</span>
          <span className="billing">Billed Annually</span>
        </h1>
        <button onClick={onClick}>Get Started</button>
        <div className="feature-list">
          {features && (
            <ul>
              {features.map((feat) => (
                <li key={feat}>
                  <img id="check" src="/src/images/check.svg" />
                  {feat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
