import { PostNavigationProps, PostProps } from '@/app/_types/types';
import React from 'react';

const PrevPost: React.FC<PostProps> = ({ title }) => {
  return (
    <div className="post-prev">
      <span>PREVIOUS POST</span>
      <h5><a href="#">{title}</a></h5>
    </div>
  );
};

const NextPost: React.FC<PostProps> = ({ title }) => {
  return (
    <div className="post-next">
      <span>NEXT POST</span>
      <h5><a href="#">{title}</a></h5>
    </div>
  );
};

const PostNavigation: React.FC<PostNavigationProps> = ({ prevPostTitle, nextPostTitle }) => {
  return (
    <div className="post-navigation">
      <PrevPost title={prevPostTitle} />
      <NextPost title={nextPostTitle} />
    </div>
  );
};

export default PostNavigation;
