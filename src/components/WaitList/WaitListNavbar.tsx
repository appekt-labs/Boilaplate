import React from "react";
import Link from "next/link";
import { LogoMark } from "../Logos";
import { LogoMascot } from "../Logos";
import { Button } from "../ui/button";

function WaitListNavbar() {
  return (
    <nav className="flex justify-between items-center py-2 m">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <LogoMascot />
        <span className="hidden md:block">
        <LogoMark />
        </span>
      </div>
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Link href="#features">Features</Link>
        <Button className="rounded-3xl">Join Our Wait List</Button>
      </div>
    </nav>
  );
}

export default WaitListNavbar;
