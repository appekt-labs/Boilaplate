"use client";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TbCrown } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "../ui/badge";
import { VscLoading } from "react-icons/vsc";
import { ImSpinner3 } from "react-icons/im";
import { FaCrown } from "react-icons/fa6";
interface IUser {
  name?: string;
  image?: string;
  email: string;
  isVerified: boolean;
  isSubscribed: boolean;
}
interface IData {
  message: string;
  user: IUser;
}

function UpgradeButton() {
  const [creatingLink, setCreatingLink] = useState(false);
  //check for the status of the user, are they premium users, if show them the status
  const { data, error, isLoading, isError } = useQuery<IData>({
    queryKey: ["user-profile"],
    queryFn: async () => (await axios.get("/api/auth/user-profile")).data,
  });
  async function handlePurchase(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      setCreatingLink(true);
      e.preventDefault();
      const response = await axios.post("/api/purchase-product", {
        productId: 537386,
      });
      const { checkoutUrl } = response.data;
      console.log("session-checkout", checkoutUrl);
      if (!checkoutUrl) return;
      window.open(checkoutUrl, "_blank");
      alert("pressed");
    } catch (error) {
      console.log(error);
    } finally {
      setCreatingLink(false);
    }
  }

  if (isLoading) {
    return (
      <div>
        <span className="flex items-center justify-center animate-spin">
          <VscLoading />
        </span>
      </div>
    );
  }

  console.log("data", data);
  return (
    <div>
      {data && data.user.isSubscribed === true ? (
        <Badge className="text-base flex items-center gap-2 bg-orange-200 hover:bg-orange-400 text-orange-700 hover:text-orange-900">
          <span className="text-xl">
            <FaCrown />
          </span>{" "}
          Premium
        </Badge>
      ) : (
        <Button disabled={creatingLink} onClick={handlePurchase}>
          {creatingLink ? (
            <span className="mr-2 animate-spin flex items-center justify-start p-1 text-xl">
              <ImSpinner3 />
            </span>
          ) : (
            <span className="mr-2 text-xl">
              <TbCrown />
            </span>
          )}
          Upgrade
        </Button>
      )}
    </div>
  );
}

export default UpgradeButton;
