import Navbar from "../components/Navbar/Navbar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Footer from "../components/Footer/Footer";
import ArticleWork from "../components/ArticleWork/ArticleWork";
import slack from "../components/ArticleWork/icons/slack.svg";
import micro from "../components/ArticleWork/icons/microsoft.svg";
import spotify from "../components/ArticleWork/icons/spotify.svg";
import SignupWidget from "../components/WidgetSignup/SignupWidget";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import profileIcon from "components/ProfileHeader/ProfileIcon/profile.JPG";
import SkillsWidget from "../components/SkillsWidgets/SkillsWidgets";
import htmlIcon from "../components/SkillsWidgets/icons/html.svg";
import cssIcon from "../components/SkillsWidgets/icons/css.svg";
import javascriptIcon from "../components/SkillsWidgets/icons/javaScript.svg";

const articles = [
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://tailwindcss.com/",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "https://react.dev/",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "https://tailwindcss.com/",
  },
];
const works = [
  { name: "Slack", icon: slack, startYear: 2016, endYear: "current" },
  { name: "Spotify", icon: spotify, startYear: 2014, endYear: 2015 },
  { name: "Microsoft", icon: micro, startYear: 2010, endYear: 2013 },
];
const skills = [
  { name: "HTML", proficiency: 30, icon: htmlIcon },
  { name: "CSS", proficiency: 30, icon: cssIcon },
  { name: "JavaScript", proficiency: 30, icon: javascriptIcon },
];

export default function Home() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />

      <div className="profile-header-container">
        <ProfileHeader
          name="Software engineer, father, and believer"
          bio="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
          linkedinUrl="https://www.linkedin.com/in/honami-gonda-741a38258"
          githubUrl="https://github.com/honamig"
          twitterUrl="https://x.com"
          imageUrl={profileIcon}
        />
      </div>
      <div className="footerContainer">
        <div className="mainCard">
          <div className="articles">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
          </div>
          <div className="rightSidebar">
            <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}
            />
            <ArticleWork
              title={"Work"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              items={works}
            />
            <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
            />
          </div>
        </div>
        <div className="footerBar">
          <Footer
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
