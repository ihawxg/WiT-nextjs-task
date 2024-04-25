import React from 'react';
import Image from 'next/image';
import { LogoProps } from '@/types/types';


const Logo: React.FC<LogoProps> = ({ isFigure, isDarkMode,width,height,styles }) => {
  if (isFigure) {
    return (
      <figure className="footer-logo">
        {/* <img src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"} alt="Image" /> */}
        <Image src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"} alt="Image" width={width} height={height} style={styles}/>
      </figure>
    );
  } else {
    return (
      <div className="logo">
        <a href="index.html">
          {/* <img src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"} alt="Image" /> */}
          <Image src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"} alt="Image" width={width} height={height} style={styles} />
        </a>
      </div>
    );
  }
}

export default Logo;
