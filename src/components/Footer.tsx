import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LogoMark, LogoMascot } from "./Logos";
function Footer() {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-slate-700 bg-slate-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-slate-900 title-font md:justify-start">
              <span className="flex gap-2 items-center">
                <LogoMascot />
                <LogoMark />
              </span>
            </a>
            <p className="mt-2 text-sm text-slate-500">
              Design, Code and Ship!
            </p>
            <div className="mt-4">
              <span className="flex gap-2 items-center justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="ml-3 text-slate-500 cursor-pointer hover:text-slate-700">
                  <TbBrandFacebook />
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-slate-700">
                  <FaXTwitter />
                </a>
                <a className="ml-3 text-slate-500 cursor-pointer hover:text-slate-700">
                  <FaInstagram />
                </a>

                <a className="ml-3 text-slate-500 cursor-pointer hover:text-slate-700">
                  <FiLinkedin />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-900 uppercase title-font">
                About
              </h2>
              <ul className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-900 uppercase title-font">
                Support
              </h2>
              <ul className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Release Updates
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-900 uppercase title-font">
                Platform
              </h2>
              <ul className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-900 uppercase title-font">
                Contact
              </h2>
              <ul className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Send a Message
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    Request a Quote
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-slate-500 cursor-pointer hover:text-slate-900">
                    +123-456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-slate-700 capitalize xl:text-center">
              © {new Date().getFullYear()} All rights reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
