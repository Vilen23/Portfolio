"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#121212] bg-opacity-98">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link href={"/"} className=" text-2xl md:text-5xl font-semibold">
          Shivam
        </Link>
        <div className="mobile-menu block md:hidden">
          {isOpen ? (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon
                onClick={() => setIsOpen(!isOpen)}
                className="text-white w-5 h-5 flex"
              />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon
                onClick={() => setIsOpen(!isOpen)}
                className="text-white w-5 h-5"
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
