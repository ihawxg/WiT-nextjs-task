'use client'

import CloseButton from "@/app/_components/CloseButton/close-button";
import { clsx } from "clsx";
import Link from "next/link";

export default function SearchBox({
  isSearchActive,
  handleClickSearch,
  popularSearches,
}: {
  isSearchActive: boolean;
  handleClickSearch: any;
  popularSearches: string[];
}) {
  return (
    <div className={clsx({ active: isSearchActive }, "search-box")}>
      <CloseButton handleClick={handleClickSearch}/>
      <div className="container">
        <form>
          <input type="search" placeholder="Type here to find" />
        </form>
        <h6>POPULAR SEARCHES</h6>
        <ul>
          {popularSearches.map((search, index) => (
            <li key={index}>
              <Link href='/post-single'>{search}</Link>
              {/* <a href="#">{search}</a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
