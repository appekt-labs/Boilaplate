"use client";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TbCrown } from "react-icons/tb";
function UpgradeButton() {
  const [checkoutUrl, setCheckoutUrl] = useState("");
  async function handlePurchase(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      e.preventDefault();
      const response = await axios.post("/api/purchase-product", {
        productId: "441361",
      });
      const { checkoutUrl } = response.data;
      console.log("session-checkout", checkoutUrl);
      if (!checkoutUrl) return;
      window.open(checkoutUrl, "_blank");
      alert("pressed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button onClick={handlePurchase}>
      <span className="mr-2 text-xl">
        <TbCrown />
      </span>
      Upgrade
    </Button>
  );
}

export default UpgradeButton;
