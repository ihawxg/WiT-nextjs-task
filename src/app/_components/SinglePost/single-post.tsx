import React from 'react';
import Image from 'next/image';
import PostContainer from '../PostContainer/post-container';
import { SinglePostProps } from '@/app/_types/types';


const SinglePost: React.FC<SinglePostProps> = ({ post, outerContainerClasses, innerContainerClasses, tittleClassName, postTitle }) => {
  const { imageUrl, categories, title, date, author } = post;

  return (
    <PostContainer outerContainerClasses={outerContainerClasses} innerContainerClasses={innerContainerClasses} postTitle={postTitle} tittleClassName={tittleClassName}>
      <figure className="post-image">
        <a href="#" className="bookmark">
          <i className="fal fa-bookmark"></i>
        </a>{" "}
        <Image src={imageUrl} width={390} height={285} alt='Image' style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }} />{" "}
      </figure>
      <div className="post-content">
        <ul className="post-categories">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
        <h3 className="post-title">
          <a href="post-single.html">{title}</a>
        </h3>
        <div className="metas">
          {" "}
          <span className="date">{date}</span>
          <div className="dot"></div>
          <span className="author">
            By <a href="#">{author}</a>
          </span>{" "}
        </div>
      </div>
    </PostContainer>
  );
};

export default SinglePost;
