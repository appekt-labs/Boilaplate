import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TiArrowSortedDown } from "react-icons/ti";

function ProfileDropdown() {
  return (
    <div>
      <span>My Store</span>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>HE</AvatarFallback>
      </Avatar>
      <TiArrowSortedDown />
    </div>
  );
}

export default ProfileDropdown;
