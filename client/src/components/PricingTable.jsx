import React from "react";
import { useNavigate } from "react-router-dom";
import './PricingTable.css';

const plans = [
  {
    title: 'Basic',
    price: '100000',
    features: [
      'Photography',
      'Consultation',
      'Full Assistance',
      'Up to 300 Guests',
      'Standard Decoration',
    ],
    notIncluded: ['Vendor Referrals', 'Event Coordination', 'Venue Selection'],
  },
  {
    title: 'Standard',
    price: '150000',
    features: [
      'Photography',
      'Consultation',
      'Full Assistance',
      'Vendor Referrals',
      'Up to 500 Guests',
      'Premium Decoration',
      'Event Coordination',
    ],
    notIncluded: ['Venue Selection'],
  },
  {
    title: 'Premium',
    price: '250000',
    features: [
      'Photography',
      'Consultation',
      'Full Assistance',
      'Vendor Referrals',
      'Find Place',
      'Unlimited Guests',
      'Luxury Decoration',
      'Event Coordination',
      'Live Entertainment',
    ],
    notIncluded: [],
  },
];

const PricingTable = () => {
  const navigate = useNavigate();

  // Redirect to the Contact page with the selected plan
  const handleBuyNow = (planTitle) => {
    navigate("/contact", { state: { plan: planTitle } });
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Our Plans</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              ₹{plan.price}
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="included">{feature}</li>
              ))}
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="not-included">{feature}</li>
              ))}
            </ul>
            <button
              className="buy-now"
              onClick={() => handleBuyNow(plan.title)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
