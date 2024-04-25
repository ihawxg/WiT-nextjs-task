import React from 'react';
import SinglePost from '@/components/SinglePost/single-post';
import { PostData } from '@/types/types';

const relatedPostsData: PostData[] = [
  {
    imageUrl: "/whats-new01.jpg",
    categories: ["TRAVEL", "LIFESTYLE"],
    title: "T-Shirts: The Rise of Anti-Surveillance Fashion",
    date: "March 5th 2020",
    author: "Willimes Domson"
  },
  {
    imageUrl: "/whats-new02.jpg",
    categories: ["TRAVEL", "LIFESTYLE"],
    title: "Cities Urged to Study Footpaths for Better",
    date: "March 5th 2020",
    author: "Willimes Domson"
  },
  {
    imageUrl: "/whats-new03.jpg",
    categories: ["TRAVEL", "LIFESTYLE"],
    title: "Wealthy Families Flock to Safe Assets as Recession",
    date: "March 5th 2020",
    author: "Willimes Domson"
  }
];

const Posts: React.FC<{ postTitle: string }> = ({ postTitle }) => {
  return (
    <section className="content-section no-top-spacing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">{postTitle}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
            {relatedPostsData.map((post, index) => (
              <SinglePost
                key={index}
                post={post}
                outerContainerClasses="col-lg-4 col-md-6"
                innerContainerClasses="blog-post kansas"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
