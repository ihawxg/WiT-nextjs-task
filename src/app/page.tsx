"use client";

import Content from "./_sections/Content/content";
import Posts from "./_sections/Posts/posts";
import Slider from "./_sections/Slider/slider";

export default function Home() {
  return (
    <div /*className={styles.main} */>
      <main>
        <Slider />
        <Content />
        <Posts postTitle='Related Posts'/>
      </main>
    </div>
  );
}
