"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  GitBranch,
  Lightbulb,
} from "lucide-react";

// Replace the entire skillCategories array with this version without levels
const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-blue-400" />,
    skills: ["Node.js", "Django", "Nest.js", "DRF", "FastAPI"],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-6 w-6 text-blue-400" />,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Docker", "CI/CD", "AWS"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
  },
  {
    title: "AI & ML",
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    skills: ["Generative AI", "Data Analysis", "AI Integration"],
  },
];
// Replace the SkillCard component with this simplified version
const SkillCard = ({
  category,
  index,
  inView,
}: {
  category: any;
  index: number;
  inView: boolean;
}) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-xl p-6 card-hover",
        "opacity-0 translate-y-8",
        inView && "animate-fade-up opacity-100 translate-y-0"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 bg-blue-900/50 rounded-lg mr-3 shadow-inner">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-300">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill: string) => (
          <div key={skill} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-foreground/90 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background opacity-50"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
            <div className="relative bg-secondary p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-16 h-16 border border-blue-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-[10%] w-12 h-12 border border-blue-500/20 rounded-full animate-spin-slow"></div>
    </section>
  );
};

export default Skills;
