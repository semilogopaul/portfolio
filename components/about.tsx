"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileDown, User } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-sm bg-primary/20 animate-neon-pulse"></div>
            <div className="relative bg-secondary p-3 rounded-sm border border-primary/30">
              <User className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12",
            )}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Retro decorative corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary/50"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary/50"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary/50"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary/50"></div>

              {/* Image container with neon glow effect */}
              <div className="absolute inset-0 glass-effect rounded-sm overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <Image
                  src="/semilogo.jpg"
                  alt="Adeogun Semilogo"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-glow">
              Software Engineer
            </h3>

            <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
              Graduated First Class (top 1%) in Software Engineering. Innovative
              Full-Stack Software Engineer with a passion for tackling
              challenges and building impactful solutions. Recently led a
              successful pitch that attracted investor interest; mentored by
              billionaire Tony Elumelu.
            </p>

            <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
              I thrive in open-minded, innovation-driven teams that believe "if
              you can think it, you can build it." I believe in ownership,
              continuous learning, and making things better, no matter how
              small. Let's build something great.
            </p>

            <Button
              asChild
              className="rounded-sm bg-primary hover:bg-primary/90 text-black font-semibold btn-glow transition-all duration-300 hover:scale-105"
            >
              <a
                href="/OLUWASEMILOGO_ADEOGUN_RESUME.pdf"
                download="OLUWASEMILOGO_ADEOGUN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
