import AuthorInfoBox from "@/components/AuthorInfoBox/author-info-box";
import PostNavigation from "@/components/PostNavigation/post-navigation";
import SideShare from "@/components/SideShare/side-share";
import Sidebar from "@/components/Sidebar/sidebar";
import MainContentSection from "../MainContentSection/main-content-section";

const latestPosts = [
  {
    title: "The maker of Moc's and Snickers is buying bars in a healthy",
    imageSrc: "/mini-thumb15.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Joao Campos-Silva is on a mission to save a river giant",
    imageSrc: "/mini-thumb14.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Dan Levy lands a spot in People's Sexiest Man Alive issue",
    imageSrc: "/mini-thumb13.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Winter essentials to upgrade your at-home hygge experience",
    imageSrc: "/mini-thumb12.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  }
]

const trendingPosts = [
  {
    title: "Everything you need to clean up holiday spills and messes",
    imageSrc: "/mini-thumb11.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "7 ways to snack better during the pandemic",
    imageSrc: "/mini-thumb10.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "43 gifts every woman in your life would love to receive",
    imageSrc: "/mini-thumb09.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Japan's sake exports more than tripled over the last decade",
    imageSrc: "/mini-thumb08.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  }
]

const videoPosts = [
  {
    title: "How a secretive hippie hideaway in Thailand transformed",
    imageSrc: "/mini-thumb07.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Waffle House teams up with Georgia's Oconee Brewing Company",
    imageSrc: "/mini-thumb06.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "Nutritionists recommend their favorite healthy snacks on Store",
    imageSrc: "/mini-thumb05.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  },
  {
    title: "18 of the sweetest treats to send your loved ones for the holidays",
    imageSrc: "/mini-thumb04.jpg",
    views: "2.6K Views",
    readTime: "2 mins"
  }
]


const postNavigation = {
  prevPostTitle: "Travel’s Green Revolution Remains a Work in Progress",
  nextPostTitle: "Japan to ease entry restrictions for all countries"
}

export default function Content() {
  return <section className="content-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-post california">
            <SideShare />
            <MainContentSection title="Are you using the best credit card when ordering food for delivery?"/>
          </div>
          <AuthorInfoBox />
          <PostNavigation {...postNavigation} />
        </div>
        <div className="col-lg-4">
          <Sidebar
            latestPosts={latestPosts}
            trendingPosts={trendingPosts}
            videoPosts={videoPosts}
          />
        </div>
      </div>
    </div>
  </section>
}