import { SidebarTabsProps } from '@/types/types';
import React from 'react';

const SidebarTabs: React.FC<SidebarTabsProps> = ({ tabs, activeTab, onTabClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
    event.preventDefault();
    onTabClick(index);
  };

  return (
    <ul className="tab-nav">
      {tabs.map((tab, index) => (
        <li key={index} className={activeTab === index ? 'active' : ''}>
          <a href={`#tab0${index + 1}`} onClick={(event) => handleClick(event, index)}>{tab}</a>
        </li>
      ))}
    </ul>
  );
};

export default SidebarTabs;
