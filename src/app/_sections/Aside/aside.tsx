import React from 'react';
import CloseButton from '@/app/_components/CloseButton/close-button';
import Logo from '@/app/_components/Logo/logo';
import Newsletter from '@/app/_components/Newsletter/newsletter';
import MenuItem from '@/app/_components/MenuItem/menu-item';
import SinglePost from '@/app/_components/SinglePost/single-post';
import { MenuItemProps, PostData } from '@/app/_types/types';
import AccountButton from '@/app/_components/AccountButton/account-button';

const relatedPostsData: PostData = {
    imageUrl: "/whats-new01.jpg",
    categories: ["TRAVEL", "LIFESTYLE"],
    title: "T-Shirts: The Rise of Anti-Surveillance Fashion",
    date: "March 5th 2020",
    author: "Willimes Domson"
}

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

export default function Aside({ isAsideActive, handleClick }: { isAsideActive: boolean, handleClick: any }) {
    return <>
        <aside className={`side-widget ${isAsideActive ? 'active' : ''}`}>
            <CloseButton handleClick={handleClick} />
            <Logo isDarkMode isFigure={true} width={200} height={35}/>
            <div className="inner">
                <div className="widget">
                    <AccountButton/>
                    <MenuItem menuItems={menuItems} />
                </div>
                <Newsletter isAside={true}/>
                <SinglePost postTitle='Featured Post' tittleClassName='widget-title' outerContainerClasses="widget" innerContainerClasses="blog-post light kansas" post={relatedPostsData}/>
            </div>
        </aside>
    </>
}
