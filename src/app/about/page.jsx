import ProjectHeader from "@/components/projectHeader/ProjectHeader";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutCard from "@/components/ProjectComponent/AboutCard";
import Image from "next/image";
import profileIcon from "/workspaces/cs220-portfolio-yellow/src/components/ProfileHeader/ProfileIcon/profile.JPG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function About() {
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
      <div className="projects-layout">
        <div className="aboutCards">
          <div className="about-title">
            <ProjectHeader title="I'm Jane. I live in New York City, where I develop the future." />
          </div>
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
        <div className="profile-section">
          <Image src={profileIcon} alt="profile picture" className="profile-icon" />
          <div className="social-icons">
            <a href="https://github.com/honamig" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>Follow me on GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/honami-gonda-741a38258"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span>Follow me on LinkedIn</span>
            </a>
            <a href="mailto:honamigonda38@gmail.com" className="social-link">
              <CiMail />
              <span>honamigonda38@gmail.com</span>
            </a>
          </div>
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
  );
}
