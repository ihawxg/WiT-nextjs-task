import React from 'react';
import SocialIcons from '../SocialIcons/social-icons';
import Image from 'next/image';
import { AuthorInfo } from '@/types/types';
import { RenderFormattedText } from '@/utils/render-formatted-text';

const AuthorInfoBox = () => {

    const authorInfo: AuthorInfo = {
        name: 'Erica Walker',
        role: 'Blogger | Mobile Application Developer',
        socialLinks: [
            { iconClass: 'fab fa-facebook-f', link: '#' },
            { iconClass: 'fab fa-twitter', link: '#' },
            { iconClass: 'fab fa-youtube', link: '#' },
            { iconClass: 'fab fa-instagram', link: '#' },
            { iconClass: 'fab fa-linkedin-in', link: '#' }
        ],
        imageSrc: '/avatar03.jpg',
        description: `The result is that one of the most protected people on the planet has caught a disease that has cured more than <u>1 million people</u> worldwide, more than 200,000 of them in the United States.`
    };

    return (
        <div className="author-info-box">
            <figure>
                <Image src={authorInfo.imageSrc} width='100' height='100' alt='Author'></Image>
                {/* <img src={authorInfo.imageSrc} alt="Author" /> */}
            </figure>
            <div className="content">
                <h5>{authorInfo.name}</h5>
                <small>{authorInfo.role}</small>
                <SocialIcons socialLinks={authorInfo.socialLinks} />
                <p>
                    {RenderFormattedText(authorInfo.description)}
                </p>
            </div>
        </div>
    );
};

export default AuthorInfoBox;

