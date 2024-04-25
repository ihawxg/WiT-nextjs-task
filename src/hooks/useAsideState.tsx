import { useState } from "react";

export const useAsideState = () => {
  const [isAsideActive, setIsAsideActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleClick = (isActive:boolean) => {
    setIsAsideActive(isActive);
  };

  const handleClickSearch = (isActive:boolean) => {
    setIsSearchActive(isActive);
  };

  return { isAsideActive, isSearchActive, handleClick, handleClickSearch };
};
