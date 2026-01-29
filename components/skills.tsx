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

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-primary" />,
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
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Express.js", "Django", "Nest.js", "DRF", "FastAPI"],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Docker", "CI/CD", "AWS"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
  },
  {
    title: "AI & ML",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: ["Generative AI", "Data Analysis", "AI Integration"],
  },
];

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
        "glass-effect rounded-sm p-6 card-hover border border-primary/10 hover:border-primary/30 transition-all duration-300",
        "opacity-0 translate-y-8",
        inView && "animate-fade-up opacity-100 translate-y-0"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 bg-primary/10 rounded-sm mr-3 border border-primary/20">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-primary font-retro tracking-wide">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill: string) => (
          <div key={skill} className="flex items-center group">
            <div className="w-2 h-2 bg-primary mr-2 group-hover:shadow-[0_0_8px_rgba(0,191,255,0.8)] transition-all duration-300"></div>
            <span className="text-foreground/90 font-medium text-sm">{skill}</span>
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
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-sm bg-primary/20 animate-neon-pulse"></div>
            <div className="relative bg-secondary p-3 rounded-sm border border-primary/30">
              <Lightbulb className="h-6 w-6 text-primary" />
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

      {/* Retro decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-16 h-16 border border-primary/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-[10%] w-12 h-12 border border-primary/20 rotate-12 animate-spin-slow"></div>
    </section>
  );
};

export default Skills;
