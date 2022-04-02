import PricingCard from "../components/PricingCard";
import "../styles/subscription.css";

const Subscription = () => {
  const freeFeatures = ["Limited to 5 QR save and download"];

  return (
    <div className="subscription">
      <div className="top-banner">
        <div className="desc">Membership Pricing</div>
        <h1 className="heading">Choose a plan that's right for you</h1>

        <div className="pricing-table">
          <PricingCard
            price={0}
            title="FREE"
            features={freeFeatures}
          ></PricingCard>
          <PricingCard price={1000} title="PREMIUM"></PricingCard>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
