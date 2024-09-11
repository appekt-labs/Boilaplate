import React from "react";
import { TbLogout, TbSettings, TbSmartHome } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { TbBrandShopee } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { LogoMark, LogoMascot } from "../Logos";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Sidebar() {
  const navLinks: { name: string; link: string; icon: JSX.Element }[] = [
    {
      name: "Home",
      link: "/dashboard",
      icon: <TbSmartHome />,
    },
    {
      name: "Sales",
      link: "/dashboard/sales",
      icon: <TbShoppingCart />,
    },
    {
      name: "Products",
      link: "/dashboard/products",
      icon: <TbBrandShopee />,
    },
    {
      name: "Reports",
      link: "/dashboard/reports",
      icon: <TbReportSearch />,
    },
    {
      name: "Customers",
      link: "/dashboard/customers",
      icon: <TbUsers />,
    },
  ];
  return (
    <div className="p-2 lg:w-[200px] flex flex-col justify-between px-2 md:px-3 lg:px-4">
      {/* upper section */}
      <div className="divide-y-2">
        {/* Logo Section */}
        <div className="flex gap-2 items-center my-3">
          <LogoMascot />
          <span className="hidden md:block">
            <LogoMark />
          </span>
        </div>
        {/* other navigation */}
        <div className="py-3 font-semibold">
          {navLinks.map((navLink, idx) => (
            <div key={`${navLink.name + idx}`}>
              <Link href={navLink.link} className="py-2 flex items-center">
                <span className="text-2xl mr-2"> {navLink.icon} </span>{" "}
                <span className="text-sm">{navLink.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* lower section */}
      <div className="mb-4 grid gap-2 md:gap-3 lg:gap-4">
        <div>
          <Link href={"/dashboard/settings"} className="py-2 flex items-center">
            <span className="text-2xl mr-2">
              {" "}
              <TbSettings />{" "}
            </span>{" "}
            <span className="text-sm">Settings</span>
          </Link>
        </div>
        <div>
          <Button className="py-2 flex items-center">
            <span className="text-2xl mr-2">
              {" "}
              <TbLogout />{" "}
            </span>{" "}
            <span className="text-sm">Log Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
