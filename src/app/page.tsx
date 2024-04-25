"use client";

import Content from "@/sections/Content/content";
import Posts from "@/sections/Posts/posts";
import Slider from "@/sections/Slider/slider";

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
