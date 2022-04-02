import PricingCard from "../components/PricingCard";
import "../styles/subscription.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="top-banner">
        <div className="desc">Membership Pricing</div>
        <h1 className="heading">Choose a plan that's right for you</h1>
        <PricingCard title="FREE"></PricingCard>
      </div>
    </div>
  );
};

export default Subscription;
