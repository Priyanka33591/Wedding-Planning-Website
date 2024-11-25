import React from "react";
import { useNavigate } from "react-router-dom";
import './PricingTable.css';

const plans = [
  {
    title: 'Basic',
    price: '10.99',
    features: ['Photography', 'Consultation', 'Full Assistance'],
    notIncluded: ['Vendor Referrals', 'Find Place']
  },
  {
    title: 'Standard',
    price: '19.99',
    features: ['Photography', 'Consultation', 'Full Assistance', 'Vendor Referrals'],
    notIncluded: ['Find Place']
  },
  {
    title: 'Premium',
    price: '29.99',
    features: ['Photography', 'Consultation', 'Full Assistance', 'Vendor Referrals', 'Find Place'],
    notIncluded: []
  }
];

const PricingTable = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/contact");
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Membership Plan</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              {plan.price}
              <span>$</span>
              <br />
              <span>Per Month</span>
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="included">{feature}</li>
              ))}
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="not-included">{feature}</li>
              ))}
            </ul>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
