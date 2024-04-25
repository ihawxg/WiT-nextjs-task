"use client";

import Logo from "@/app/_components/Logo/logo";
import MenuItem from "@/app/_components/MenuItem/menu-item";
import { MenuItemProps } from "@/app/_types/types";
import React, { useState, useEffect } from "react";

const menuItems: MenuItemProps[] = [
  { label: "Home", link: "/" },
  {
    label: "Pages",
    link: "/",
    subMenuItems: [
      { label: "About Us", link: "/" },
      { label: "Our Authors", link: "/" },
      { label: "Advertise", link: "/" },
      { label: "Contact", link: "/" },
    ],
  },
  { label: "Fashion", link: "/" },
  { label: "Travel", link: "/" },
  { label: "Beauty", link: "/" },
  { label: "Lifestyle", link: "/" },
];

function StickyNavBar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowNavbar = window.scrollY <= 400;
      setShowNavbar(shouldShowNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky-navbar ${showNavbar ? "nav-up" : "nav-down"}`}>
      <Logo width={144} height={25}/>
      <MenuItem menuItems={menuItems} />

      <div className="search-button">
        <i className="fal fa-search"></i>
      </div>
    </nav>
  );
}

export default StickyNavBar;
