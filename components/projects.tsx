"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Rate-a-School",
    description: "AI-Driven School Feedback Platform",
    details:
      "Developed a web application that allows users to rate schools and share their experiences, utilizing AI-driven feedback to help schools identify areas for improvement and enhance customer satisfaction. The platform promotes transparency and enables informed decision-making for parents and guardians.",
    link: "https://github.com/semilogopaul/rateaschool",
    stack: [
      "REACT",
      "TYPESCRIPT",
      "TAILWIND",
      "DJANGO",
      "DJANGO-REST FRAMEWORK",
    ],
    image: "/Rate-a-school.png",
  },
  {
    title: "Vendor Search App",
    description: "Vendor Search App",
    details:
      "A voluntarily built web app for Zeta-Web Nigeria Limited built during my internship period, it extracts vendor data from excel files and presents them on the front-end in a beautiful way for easier data accessibility and efficiency. Earned me a recommendation from the head of technology.",
    link: "https://vendor-search.vercel.app/",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/vendor-search.PNG",
  },
  {
    title: "NeuraLearn",
    description: "AI-Powered Learning Assistant",
    details:
      "Developed a web app that transforms uploaded text, PDFs, and images into interactive learning materials, including auto-generated questions and flashcards. The platform offers customizable difficulty levels, study modes, and real-time performance tracking with accuracy, time analytics and other metrics.",
    link: "https://neura-learn-frontend-fmin.vercel.app/",
    stack: ["EXPRESS.JS", "REACT.JS", "DJANGO", "PYTHON", "JAVASCRIPT"],
    image: "/neuralearn.png",
  },
  {
    title: "Littlemon API",
    description: "API for LittleLemon Restaurant",
    details:
      "Developed an API for the LittleLemon Restaurant for reservation management and other functions, implementing token-based authentication, throttling, and pagination to ensure secure and efficient API usage. The API supports multiple response formats, including JSON and XML.",
    link: "https://github.com/semilogopaul/littlelemon",
    stack: [
      "PYTHON",
      "DJANGO",
      "DJANGO-REST FRAMEWORK",
      "SQL",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "DJOSER",
    ],
    image: "/littlelemon.PNG",
  },
  {
    title: "DIY Analytics",
    description: "No Code Data Analysis",
    details:
      "DIY Analytics is a no-code tool for analyzing and visualizing data using 'natural language' and drag-drop-click features. All you have to do is upload a dataset!! How interesting is that!",
    link: "https://github.com/semilogopaul/ds-ml-ai-trac",
    stack: ["PYTHON"],
    image: "/DIY-ANALYTICS.png",
  },
  {
    title: "Iphone 15",
    description: "Interactive iPhone 15 Landing Page",
    details:
      "Created a luxurious, interactive iPhone 15 landing page utilizing GSAP for smooth animations and Three.js for 3D elements.",
    link: "https://adeogun-iphone.netlify.app/",
    stack: ["REACT", "JAVASCRIPT", "THREE.JS", "GSAP", "TAILWIND"],
    image: "/iPhone.png",
  },
  {
    title: "Trader Dashboard",
    description: "Live Graph for Traders",
    details:
      "Fixed broken client datafeed script and utilized JPMorgan's Perspective software to generate a live graph for traders.",
    link: "https://github.com/semilogopaul/forage-jpmc-swe-task-3",
    stack: ["PYTHON", "TYPESCRIPT", "REACT", "HTML", "CSS", "JAVASCRIPT"],
    image: "/jpmc-graph.PNG",
  },
  {
    title: "Nike Landing Page",
    description: "Beautiful Nike Shoes Landing Page",
    details:
      "A beautiful Nike shoes landing page built while learning React and Tailwind.",
    link: "https://semilogo-nike.netlify.app/",
    stack: ["TYPESCRIPT", "TAILWIND", "REACT", "HTML", "CSS", "JAVASCRIPT"],
    image: "/nike-page.PNG",
  },
];

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: any;
  index: number;
  inView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullStack, setShowFullStack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShowFullStack = () => {
    setShowFullStack(true);
    setTimeout(() => {
      setShowFullStack(false);
    }, 7000); // Hide after 7 seconds
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>{" "}
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full bg-blue-900/50 backdrop-blur-sm border-blue-400/50 hover:bg-blue-800/70"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {project.link.includes("github") ? (
                <Github className="h-4 w-4 mr-1" />
              ) : (
                <ExternalLink className="h-4 w-4 mr-1" />
              )}
              View Project
            </a>
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(showFullStack ? project.stack : project.stack.slice(0, 3)).map(
            (tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-blue-900/50 text-blue-200 hover:bg-blue-800"
              >
                {tech}
              </Badge>
            )
          )}
          {!showFullStack && project.stack.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs border-blue-500/30 text-blue-300 cursor-pointer"
              onClick={handleShowFullStack}
            >
              +{project.stack.length - 3} more
            </Badge>
          )}
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-foreground/70 mb-4">
                {project.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background opacity-50"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
            <div className="relative bg-secondary p-3 rounded-full">
              <Layers className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>

        <h2 className="section-title">
          Recent <span>Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-[5%] w-16 h-16 border border-blue-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-[8%] w-12 h-12 border border-blue-500/20 rounded-full animate-spin-slow"></div>
    </section>
  );
};

export default Projects;
