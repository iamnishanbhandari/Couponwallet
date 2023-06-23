import React, { useState } from "react";
import CouponItem from "./CouponItem";

const CouponWallet = () => {
  const [coupons, setCoupons] = useState([
    { code: "COUPON1", discount: "10%", redeemed: false },
    { code: "COUPON2", discount: "20%", redeemed: false },
    { code: "COUPON3", discount: "30%", redeemed: false },
  ]);

  const handleRedeemCoupon = (couponCode) => {
    const updatedCoupons = coupons.map((coupon) => {
      if (coupon.code === couponCode) {
        return { ...coupon, redeemed: true };
      }
      return coupon;
    });

    setCoupons(updatedCoupons);
  };

  return (
    <div className="coupon-wallet">
      <h1>Coupon Wallet</h1>
      {coupons.map((coupon) => (
        <CouponItem
          key={coupon.code}
          coupon={coupon}
          onRedeem={handleRedeemCoupon}
        />
      ))}
    </div>
  );
};

export default CouponWallet;
