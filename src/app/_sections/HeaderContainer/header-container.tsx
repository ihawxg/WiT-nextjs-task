'use client'

import { useAsideState } from "@/app/_hooks/useAsideState";
import ScrollUp from "@/app/_components/ScrollUp/scrollup";
import StickyNavBar from "../StickyNavbar/sticky-navbar";
import Header from "../Header/header";
import Aside from "../Aside/aside";
import SearchBox from "../SearchBox/search-box";
import Navbar from "../Navbar/navbar";

export default function HeaderContainer() {

    const { isAsideActive, isSearchActive, handleClick, handleClickSearch } = useAsideState();

    return <>
        <StickyNavBar/>
        <ScrollUp/>
        <Aside isAsideActive={isAsideActive} handleClick={handleClick} />
        <SearchBox
            popularSearches={["cooking", "make up", "vacation"]}
            isSearchActive={isSearchActive}
            handleClickSearch={handleClickSearch}
        />
        <Header/>
        <Navbar
            handleClick={handleClick}
            handleClickSearch={handleClickSearch}
        />
    </>
}