import ProjectHeader from "@/components/projectHeader/ProjectHeader";
import ProjectsCard from "@/components/ProjectComponent/ProjectsCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};
const cards = [1, 2, 3, 4, 5, 6];
export default function Projects() {
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
      <ProjectHeader
        title="Things I’ve made trying to put my dent in the universe."
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
      />
      <div className="projects-layout">
        <div className="cardAll">
          {cards.map((card) => (
            <div key={card}>
              <ProjectsCard />
            </div>
          ))}
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
