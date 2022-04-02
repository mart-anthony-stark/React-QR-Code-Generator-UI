import { useNavigate } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import "../styles/subscription.css";

const Subscription = () => {
  const navigate = useNavigate();
  const freeFeatures = ["Limited to 5 QR save and download"];
  const premiumFeatures = [
    "Unlimited saving of QR codes",
    "Unlimited Scanning",
  ];
  const handleStartFree = () => {
    navigate("/dashboard");
  };

  return (
    <div className="subscription">
      <div className="top-banner">
        <div className="desc">Membership Pricing</div>
        <h1 className="heading">Choose a plan that's right for you</h1>

        <div className="pricing-table">
          <PricingCard
            onClick={handleStartFree}
            price={0}
            title="FREE"
            features={freeFeatures}
          ></PricingCard>
          <PricingCard
            price={1000}
            title="PREMIUM"
            features={premiumFeatures}
          ></PricingCard>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
