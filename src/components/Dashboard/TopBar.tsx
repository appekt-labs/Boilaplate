import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import DatePicker from "./DatePicker";
import ProfileDropdown from "./ProfileDropdown";
function TopBar() {
  return (
    <div className="flex items-center justify-between">
      {/* right */}
      <div>
        <div>
          <FaSearch />
          <Input />
        </div>
        <DatePicker />
      </div>
      {/* left */}
      <div>
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
