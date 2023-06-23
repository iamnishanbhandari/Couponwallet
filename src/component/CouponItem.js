import React from "react";
import "./CouponItem.css";

const CouponItem = ({ coupon, onRedeem }) => {
  const { code, discount, redeemed } = coupon;

  const handleRedeem = () => {
    if (!redeemed) {
      onRedeem(code);
    }
  };

  return (
    <>
      <div className={`coupon-item ${redeemed ? "redeemed" : ""}`}>
        <div className="coupon-details">
          <span className="coupon-code">{code}</span>
          <span className="coupon-discount">{discount}</span>
        </div>
        <button
          className={`redeem-button ${redeemed ? "redeemed" : ""}`}
          onClick={handleRedeem}
          disabled={redeemed}
        >
          {redeemed ? "Redeemed" : "Redeem"}
        </button>
      </div>
    </>
  );
};

export default CouponItem;
