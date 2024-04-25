import React, { useState } from 'react';
import SidebarTabs from '../SidebarTabs/sidebar-tabs';
import BlogPost from '../BlogPost/blog-post';
import Newsletter from '../Newsletter/newsletter';
import { SidebarProps } from '@/types/types';

const Sidebar: React.FC<SidebarProps> = ({ latestPosts, trendingPosts, videoPosts }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <aside className="sidebar sticky-top">
      <div className="widget">
        <div className="tab-content">
          <SidebarTabs tabs={['LATEST', 'TRENDING', 'VIDEOS']} activeTab={activeTab} onTabClick={handleTabClick} />
          <div id="tab01" className={`tab-item ${activeTab === 0 ? 'active-item' : ''}`}>
            {latestPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
          <div id="tab02" className={`tab-item ${activeTab === 1 ? 'active-item' : ''}`}>
            {trendingPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
          <div id="tab03" className={`tab-item ${activeTab === 2 ? 'active-item' : ''}`}>
            {videoPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <div className="widget">
        <Newsletter isFooter={false} />
      </div>
    </aside>
  );
};

export default Sidebar;
