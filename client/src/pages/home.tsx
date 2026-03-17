import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import { ProjectCard } from "../components/projectcard";
import Skills from "../components/skills";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Chatbot",
    description: "A chatbot built with NLP, DL",
    image: "/test.jpeg",
    github: "https://github.com/ElkanteNouhaila/ChatbotMarjaneMall",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Chatbot",
    description: "A chatbot built with React and TypeScript",
    image: "/test.jpeg",
    github: "https://github.com/yourusername/chatbot",
  },
  {
    title: "Landing Page",
    description: "A modern responsive landing page",
    image: "/test.jpeg",
    demo: "https://landingpage.com",
  },
];

export const Home = () => {
  return (
    <>
      <Hero />   
      <Skills/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <About/>
      <Contact/>
    </>
  );
};