"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(
    ["#home", "#about", "#skills", "#projects", "#contact"],
    {
      rootMargin: "-30% 0px -70% 0px",
    }
  );
  const isSmallScreen = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="#home" className="group">
              <h2 className="text-2xl font-bold font-space">
                <span className="text-white group-hover:text-glow transition-all duration-300">
                  {isSmallScreen ? (
                    <>
                      <span className="text-primary">O</span>
                      <span className="text-white">LUWASEMILOGO</span>
                    </>
                  ) : (
                    <span className="text-primary">A</span>
                  )}
                </span>
                {isSmallScreen ? "" : "DEOGUN"}{" "}
                <span className="text-primary group-hover:text-glow transition-all duration-300">
                  {isSmallScreen ? "" : "O"}
                </span>
                {isSmallScreen ? "" : "LUWASEMILOGO"}
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium font-retro text-lg tracking-wide",
                  activeSection === link.href.substring(1) && "text-primary text-glow"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "w-full shadow-[0_0_10px_rgba(0,191,255,0.7)]"
                      : "group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-primary hover:bg-primary/10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/98 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out overflow-hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ position: "fixed", height: "100vh" }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Close button */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-primary hover:bg-primary/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200 font-retro tracking-wider",
                activeSection === link.href.substring(1) && "text-primary text-glow"
              )}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
