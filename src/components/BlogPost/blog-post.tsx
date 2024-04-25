import { BlogPostProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const BlogPost: React.FC<BlogPostProps> = ({ imageSrc, title, views, readTime }) => {
  return (
    <div className="blog-post miami">
      <figure className="post-image">
        {/* <img src={imageSrc} alt="Image" /> */}
        <Image src={imageSrc} alt='Image' width={90} height={90}/>
      </figure>
      <div className="post-content">
        <h3 className="post-title"><a href="post-single.html">{title}</a></h3>
        <div className="metas">
          <div className="views"><Image src='/icon-mini-trend.png' alt='Image' height={13} width={20}/><span>{views}</span></div>
          <div className="read-time"><i className="far fa-clock"></i> <span>{readTime}</span></div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogPost;
