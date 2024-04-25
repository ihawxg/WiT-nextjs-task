"use client";

import DarkModeToggle from "@/components/DarkModeToggle/dark-mode-toggle";
import SocialMedia from "@/components/SocialMedia/social-media";
import useDarkMode from "@/hooks/useDarkMode";
import Logo from "@/components/Logo/logo";
import { SocialMediaPlatform } from "@/types/types";
import AccountButton from "@/components/AccountButton/account-button";

const socialMediaPlatforms: SocialMediaPlatform[] = [
  { icon: "fab fa-facebook-f", name: "Facebook", followers: "5.6K" },
  { icon: "fab fa-twitter", name: "Twitter", followers: "1.62K" },
  { icon: "fab fa-youtube", name: "Youtube", followers: "2.4M" },
  { icon: "fab fa-instagram", name: "Instagram", followers: "5.6K" },
];

export default function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className="header">
      <div className="container">
        <div className="left-side">
          <SocialMedia socialMediaPlatforms={socialMediaPlatforms} />
        </div>
        <Logo width={200} height={35} isDarkMode={isDarkMode}/>
        <div className="right-side">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <AccountButton/>
        </div>
      </div>
    </header>
  );
}
