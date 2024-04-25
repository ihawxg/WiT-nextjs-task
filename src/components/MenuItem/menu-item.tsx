import { useState } from "react";
import Link from "next/link";
import { MenuItemProps, SubMenuProps } from "@/types/types";

const MenuItem: React.FC<{ menuItems: MenuItemProps[] }> = ({ menuItems }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className="site-menu">
      <ul>
        {menuItems?.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem?.link} onMouseEnter={toggleSubMenu}>
              {menuItem?.label}
            </a>
            {menuItem?.isNew && <span className="label">NEW</span>}
            {menuItem?.subMenuItems && <i></i>}
            {menuItem?.subMenuItems && <SubMenu items={menuItem.subMenuItems} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {/* <a href={item.link}>{item.label}</a> */}
          <Link href={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
