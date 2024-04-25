export interface SocialMediaPlatform {
    icon: string;
    name: string;
    followers: string;
}

// export interface SocialMediaProps {
//     socialMediaPlatforms: SocialMediaPlatform[];
// }

export interface SocialShare {
    platform: string;
    count: number;
    iconClass: string;
}

export interface PostData {
    imageUrl: string;
    categories: string[];
    title: string;
    date: string;
    author: string;
}

export interface NavbarProps {
    handleClick: (isActive: boolean) => void;
    handleClickSearch: (isActive: boolean) => void;
}

export interface SubMenuItem {
    label: string;
    link: string;
    isNew?: string
}

export interface MenuItemProps {
    label: string;
    link: string;
    isNew?: string;
    subMenuItems?: { label: string; link: string }[];
}

export interface SubMenuProps {
    items: SubMenuItem[];
}

export interface DarkModeToggleProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export interface SocialLink {
    iconClass: string;
    link: string;
}

export interface AuthorInfo {
    name: string;
    role: string;
    socialLinks: SocialLink[];
    imageSrc: string;
    description: string;
}

export interface Authors {
    avatar: string;
    name: string;
    socialLink: string;
    article: string;
}

export interface BlogPostProps {
    imageSrc: string;
    title: string;
    views: string;
    readTime: string;
}

export interface Slide {
    id: number;
    imageUrl: string;
    href: string;
}
export interface CloseButtonProps {
    handleClick: (isActive: boolean) => void;
}

export interface LinkItem {
    label: string;
    link: string;
}
export interface LogoProps {
    isFigure?: boolean; // Optional prop to determine if it's a footer logo
    isDarkMode?: boolean; // Optional prop to determine if dark mode is active
    width?: number
    height?: number
    styles?: {}
}

export interface Author {
    img: string;
    imgAlt: string;
    authorName: string;
    postCreationDate: string;
    postComments: string;
}

export interface Content {
    h6Title: string;
    listItems: string[];
    blockQuote: string;
    images: {
        img1: ImageInfo;
        img2: ImageInfo;
        img3: ImageInfo;
    };
    video: {
        src: string;
        type: string;
    };
    paragraphs: {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
    };
}

export interface ImageInfo {
    src: string;
    alt: string;
    imgSource?: string;
}

export interface PostContainerProps {
    children: ReactNode;
    outerContainerClasses?: string;
    innerContainerClasses?: string;
    postTitle?: string; // Make postTitle optional
    tittleClassName?: string; // Correct the spelling of titleClassName
}

export interface PostNavigationProps {
    prevPostTitle: string;
    nextPostTitle: string;
}

export interface PostProps {
    title: string;
}


export interface SearchButtonProps {
    handleClickSearch: (isActive: boolean) => void;
}


export interface SidebarProps {
    latestPosts: { imageSrc: string; title: string; views: string; readTime: string }[];
    trendingPosts: { imageSrc: string; title: string; views: string; readTime: string }[];
    videoPosts: { imageSrc: string; title: string; views: string; readTime: string }[];
}

export interface SidebarTabsProps {
    tabs: string[];
    activeTab: number;
    onTabClick: (index: number) => void;
}

export interface SinglePostProps {
    post: PostData;
    outerContainerClasses?: string;
    innerContainerClasses?: string;
    tittleClassName?: string;
    postTitle?: string;
}

export interface SocialIconsProps {
    socialLinks: SocialLink[];
    classNames?: string
}
