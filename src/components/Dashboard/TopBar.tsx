import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import DatePicker from "./DatePicker";
import ProfileDropdown from "./ProfileDropdown";
function TopBar() {
  return (
    <div className="flex max-h-20 items-center justify-between w-full">
      {/* right */}
      <div className="flex gap-3 items-center">
        <div className="flex gap-1 items-center">
          <FaSearch />
          <Input />
        </div>
        <DatePicker />
      </div>
      {/* left */}
      <div className="flex gap-3 items-center">
        <div>
          <TbMail />
          <span></span>
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default TopBar;
