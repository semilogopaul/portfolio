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
    title: "NeuraLearn",
    description: "AI-Powered Learning Assistant",
    details:
      "Developed a web app that transforms uploaded text, PDFs, and images into interactive learning materials, including auto-generated questions and flashcards. The platform offers customizable difficulty levels, study modes, and real-time performance tracking with accuracy, time analytics and other metrics.",
    link: "https://neuralearnai.com",
    stack: ["EXPRESS.JS", "REACT.JS", "DJANGO", "PYTHON", "JAVASCRIPT"],
    image: "/neuralearn.png",
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
    title: "Poolup",
    description: "Smart Carpooling Application",
    details:
      "Poolup is a progressive web application designed to simplify and secure carpooling. It allows users to book and share rides, manage vehicle registrations, and make in-app payments, all within a streamlined, mobile-friendly experience. Safety is a core feature, with an emergency button that instantly alerts trusted contacts, system administrators, and local authorities. Poolup also includes an admin portal called PVAP for managing users, vehicles, and ride data, making it a complete solution for modern, community-driven transportation.",
    link: "https://poolupuni.com/",
    stack: ["NODE.JS", "EXPRESS.JS", "REACT.JS", "MONGODB", "TAILWIND"],
    image: "/poolup.png",
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
    }, 7000);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-sm overflow-hidden group border border-primary/10 hover:border-primary/30 transition-all duration-300"
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
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-sm bg-background/80 backdrop-blur-sm border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300"
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
        <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-glow transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(showFullStack ? project.stack : project.stack.slice(0, 3)).map(
            (tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 font-retro tracking-wide rounded-sm"
              >
                {tech}
              </Badge>
            )
          )}
          {!showFullStack && project.stack.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs border-primary/30 text-primary/80 cursor-pointer hover:border-primary hover:text-primary rounded-sm"
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
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-sm bg-primary/20 animate-neon-pulse"></div>
            <div className="relative bg-secondary p-3 rounded-sm border border-primary/30">
              <Layers className="h-6 w-6 text-primary" />
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

      {/* Retro decorative elements */}
      <div className="absolute top-1/3 left-[5%] w-16 h-16 border border-primary/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-[8%] w-12 h-12 border border-primary/20 rotate-12 animate-spin-slow"></div>
    </section>
  );
};

export default Projects;
