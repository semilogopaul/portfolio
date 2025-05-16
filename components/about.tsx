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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background opacity-50"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
            <div className="relative bg-secondary p-3 rounded-full">
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
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-blue-500/30 rounded-md z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-blue-500/30 rounded-md z-0"></div>

              {/* Image container with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-effect rounded-xl overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <Image
                  src="/semilogo.png"
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
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
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
              className="rounded-full bg-blue-600 hover:bg-blue-700 btn-glow"
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
