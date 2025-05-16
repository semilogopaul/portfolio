"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles } from "lucide-react";
import Particles from "./particles";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const spans = title.querySelectorAll("span");

    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("opacity-100");
        span.classList.remove("opacity-0", "translate-y-8");
      }, 300 * index);
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Particles />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>

      <div className="container-section z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
              <div className="relative bg-secondary p-3 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="block opacity-0 translate-y-8 transition-all duration-500 ease-out">
              Hello👋,
            </span>
            <span className="block opacity-0 translate-y-8 transition-all duration-500 ease-out delay-300">
              My Name is
            </span>
            <span className="block gradient-text opacity-0 translate-y-8 transition-all duration-500 ease-out delay-600 text-glow">
              Semilogo
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Software Engineer & Full-Stack Developer
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 btn-glow group"
            >
              <a href="#projects" className="flex items-center">
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-blue-500/30 hover:bg-blue-500/10"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-24 h-24 border border-blue-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-[10%] w-16 h-16 border border-blue-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/3 left-[15%] w-4 h-4 bg-blue-500/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-[15%] w-6 h-6 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
