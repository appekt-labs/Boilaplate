import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TiArrowSortedDown } from "react-icons/ti";

function ProfileDropdown() {
  return (
    <div className="flex items-center gap-2">
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
