import { SocialIconsProps } from '@/app/_types/types';
import React from 'react';

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks, classNames }) => {
    return (
        <ul className={classNames}>
            {socialLinks.map((social, index) => (
                <li key={index}><a href={social.link}><i className={social.iconClass}></i></a></li>
            ))}
        </ul>
    );
};

export default SocialIcons;
