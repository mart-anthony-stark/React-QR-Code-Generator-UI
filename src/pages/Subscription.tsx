import { useNavigate } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import "../styles/subscription.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Modal from "../components/Modal";
import { useState } from "react";

const Subscription = () => {
  const navigate = useNavigate();
  const [isPaymentModalShown, setPaymentModalShown] = useState(false);
  const freeFeatures = ["Limited to 5 QR save and download"];
  const premiumFeatures = [
    "Unlimited saving of QR codes",
    "Unlimited Scanning",
    "Can add qr code logo",
    "Bulk Creation",
  ];

  // This fires when user choose free account type
  const handleStartFree = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user/subscription`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.success) navigate("/dashboard");
  };

  const handleStartPremium = async () => {
    setPaymentModalShown(true);
  };

  return (
    <div className="subscription">
      {/* Handle Paypal payment for premium subscription */}
      {isPaymentModalShown && (
        <div className="div">
          <div className="overlay"></div>
          <Modal>
            <div className="payment">
              <h2>Proceed To Payment</h2>
              <PayPalScriptProvider
                options={{ "client-id": "test", "buyer-country": "PH" }}
              >
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>

              <button
                onClick={() => setPaymentModalShown(false)}
                className="cta"
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      )}
      <div className="top-banner">
        <div className="desc">Membership Pricing</div>
        <h1 className="heading">Choose a plan that's right for you</h1>

        <div className="pricing-table">
          <PricingCard
            onClick={handleStartFree}
            price={0}
            title="STARTER"
            features={freeFeatures}
          ></PricingCard>
          <PricingCard
            onClick={handleStartPremium}
            price={50}
            title="PROFESSIONAL"
            features={premiumFeatures}
          ></PricingCard>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
