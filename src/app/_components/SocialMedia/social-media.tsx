import { SocialMediaPlatform } from '@/app/_types/types';
import React from 'react';

function SocialMedia({ socialMediaPlatforms }: { socialMediaPlatforms: SocialMediaPlatform[] }) {
  return (
    <div className="social-media">
      <div className="label"> FOLLOW US
        <div className="social-info">
          <ol>
            {socialMediaPlatforms.map(platform => (
              <li key={platform.name}>
                <i className={platform.icon}></i> {platform.name} <span>{platform.followers}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ul>
        {socialMediaPlatforms.map(platform => (
          <li key={platform.name}><a href="#"><i className={platform.icon}></i></a></li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;