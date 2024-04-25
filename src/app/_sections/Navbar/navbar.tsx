
import HamburgerMenu from "@/app/_components/HamburgerMenu/hamburger-menu";
import Logo from "@/app/_components/Logo/logo";
import MenuItem from "@/app/_components/MenuItem/menu-item"
import SearchButton from "@/app/_components/SearchButton/search-button";
import { MenuItemProps, NavbarProps } from "@/app/_types/types";

{/* <img src="/logo-light.png" alt="Image" className="logo-light" /> <img src="/logo-dark.png" alt="Image" className="logo-dark" /> */ }


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
  { label: "Beauty", link: "/", isNew: "NEW" },
  { label: "Lifestyle", link: "/" },
];

export default function Navbar({ handleClick, handleClickSearch }: NavbarProps) {
  return <nav className="navbar">
    <div className="container">
      <HamburgerMenu handleClick={handleClick} />
      <Logo styles={{ width: "100%" }} width={200} height={35} isDarkMode={false}/>
      <MenuItem menuItems={menuItems} />
      <SearchButton handleClickSearch={handleClickSearch}/>
    </div>
  </nav>
}