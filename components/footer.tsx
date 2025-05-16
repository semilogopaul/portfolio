"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Github, Clock, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    platform: "Instagram",
    link: "https://instagram.com/the_oluwasemilogo",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/oluwasemilogo/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    platform: "GitHub",
    link: "https://github.com/semilogopaul",
    icon: <Github className="h-5 w-5" />,
  },
];

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent opacity-50"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div
          className={cn(
            "text-center transition-all duration-700 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <Link href="#home" className="inline-block mb-4 group">
            <h2 className="text-2xl font-bold font-poppins">
              <span className="text-blue-500 group-hover:text-glow transition-all duration-300">
                A
              </span>
              DEOGUN{" "}
              <span className="text-blue-500 group-hover:text-glow transition-all duration-300">
                O
              </span>
              LUWASEMILOGO
            </h2>
          </Link>

          <p className="text-foreground/70 mb-6">Software Engineer</p>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:bg-blue-900/50 hover:text-blue-400 transition-colors duration-300"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-foreground/50 text-sm">
            Copyright © {new Date().getFullYear()} Oluwasemilogo. All rights
            reserved
          </p>
        </div>
      </div>

      <a
        href="#home"
        className="absolute right-6 bottom-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 btn-glow"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
};

export default Footer;
