import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { TbCrown, TbCrownOff, TbMail } from "react-icons/tb";
import DatePicker from "./DatePicker";
import ProfileDropdown from "./ProfileDropdown";
import { Button } from "../ui/button";
import UpgradeButton from "./UpgradeButton";
function TopBar() {
  return (
    <div className="flex max-h-20 items-center justify-between w-full">
      {/* right */}
      <div className="flex gap-3 items-center">
        <DatePicker />
      </div>
      {/* left */}
      <div className="flex gap-3 items-center text-gray-600/80">
        <UpgradeButton />
        <div className="text-gray-600/80 text-xl opacity-80 relative">
          <TbMail />
          <span className="absolute border border-white bottom-[60%] left-[70%] h-2 bg-red-700 aspect-square rounded-full shadow-sm"></span>
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default TopBar;
