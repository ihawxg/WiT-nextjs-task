import Authors from "@/components/Authors/authors";
import Copyright from "@/components/Copyright/copyright";
import Logo from "@/components/Logo/logo";
import Newsletter from "@/components/Newsletter/newsletter";
import SocialIcons from "@/components/SocialIcons/social-icons";
import Links from "@/components/links/links";

const socialLinks = [
  { iconClass: 'fab fa-facebook-f', link: '#' },
  { iconClass: 'fab fa-twitter', link: '#' },
  { iconClass: 'fab fa-youtube', link: '#' },
  { iconClass: 'fab fa-instagram', link: '#' },
  { iconClass: 'fab fa-linkedin-in', link: '#' }
]

const authorsData = [
  {
    avatar: "/avatar02.jpg",
    name: "JESCCIA BLOOM",
    socialLink: "#",
    article: "Are you using the best credit card when ordering"
  },
  {
    avatar: "/avatar03.jpg",
    name: "ERICA BAUER",
    socialLink: "#",
    article: "40 of the most thoughtful gifts for every woman in your life"
  },
  {
    avatar: "/avatar04.jpg",
    name: "AMANDA SOUZA",
    socialLink: "#",
    article: "Forget chocolate: 2020 is the year of boozy calendars"
  }
];

const footerMenuData = [
  { label: "Home", link: "#" },
  { label: "About Us", link: "#" },
  { label: "Shop", link: "#" },
  { label: "Contact", link: "#" }
];

export default function Footer() {
  return <footer className="footer">
    <div className="container">

      <div className="row">
        <div className="col-12">
          <Authors authorsData={authorsData} />
        </div>
        <div className="col-12">
          <Newsletter isFooter={true} />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-4">
          <Links data={footerMenuData} classNames='footer-menu' />
        </div>

        <div className="col-lg-4">
          <Logo width={174} height={30} isDarkMode={true} isFigure={true} />
        </div>

        <div className="col-lg-4">
          <SocialIcons socialLinks={socialLinks} classNames="footer-social" />
        </div>

        <Copyright />

      </div>
    </div>
  </footer>
}