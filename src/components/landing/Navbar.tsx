import React from "react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoMascot from "../Logos/LogoMascot";
import LogoMark from "../Logos/LogoMark";

function Navbar() {
  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center py-3 px-2">
          {/* logo */}
          <Link href="/">
            <div className="flex gap-2 items-center">
              <LogoMascot />
              <span className="hidden md:block">
                <LogoMark />
              </span>
            </div>
          </Link>
          {/* navigation */}
          <ul className="flex gap-4 text-base items-center text-opacity-90 transition-colors ">
            <li className=" ">
              <Link className="" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#blog">Blog</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          {/* CTA */}
          <Button>Get Started</Button>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
