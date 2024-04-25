import { PostContainerProps } from '@/types/types';
import React, { ReactNode } from 'react';

const PostContainer: React.FC<PostContainerProps> = ({ children, outerContainerClasses, innerContainerClasses, postTitle, tittleClassName }) => {
  return (
    <div className={outerContainerClasses}>
      {postTitle && <h6 className={tittleClassName}>{postTitle}</h6>}
      <div className={innerContainerClasses}>
        {children}
      </div>
    </div>
  );
};

export default PostContainer;
