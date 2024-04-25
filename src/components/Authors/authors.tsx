import { Authors as AuthorsData} from '@/types/types';
import Image from 'next/image';
import React from 'react';

const Authors: React.FC<{ authorsData: AuthorsData[] }> = ({ authorsData }) => (
  <ul className='authors'>
    {authorsData.map((authorData, index) => (
      <li key={index}>
        <figure>
          {/* <img src={authorData.avatar} alt="Author Avatar" /> */}
          <Image src={authorData.avatar} alt='Author Avatar' width={110} height={110}></Image>
          <a href={authorData.socialLink}><i className="fab fa-instagram"></i></a>
          <figcaption>
            <small>{authorData.name}</small>
            <b>{authorData.article}</b>
          </figcaption>
        </figure>
      </li>
    ))}

  </ul>
);

export default Authors;
