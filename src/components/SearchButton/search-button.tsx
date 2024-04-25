import { SearchButtonProps } from "@/types/types";
import React from "react";

export default function SearchButton({ handleClickSearch }: SearchButtonProps) {
  return (
    <div className="search-button" onClick={() => handleClickSearch(true)}>
      <i className="fal fa-search"></i>
    </div>
  );
}
