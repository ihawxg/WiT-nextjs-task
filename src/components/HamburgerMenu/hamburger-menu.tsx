import React from "react";

type HamburgerMenuProps = {
  handleClick: (isActive: boolean) => void;
};

export default function HamburgerMenu({ handleClick }: HamburgerMenuProps) {
  return (
    <div className="hamburger-menu" onClick={() => handleClick(true)}>
      <i className="fal fa-bars"></i>
    </div>
  );
}
