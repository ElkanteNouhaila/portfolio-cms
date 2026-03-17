import  ProjectCard  from "../components/projectcard";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Chatbot",
    description: "A chatbot built with nlp, DL",
    image: "/public/test.jpeg",         
    github: "https://github.com/yourusername/portfolio-cms",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Chatbot",
    description: "A chatbot built with React and TypeScript",
    image: "/public/test.jpeg",         
    github: "https://github.com/yourusername/chatbot",
  },
  {
    title: "Landing Page",
    description: "A modern responsive landing page",
    image: "/public/test.jpeg",         
    demo: "https://landingpage.com",
  },
];

export const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};