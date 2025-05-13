"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";

export const Navbar = ({
  className,
}: {
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ["home", "about", "projects", "journey", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Journey", href: "/#journey", id: "journey" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2"
            : "bg-transparent py-4",
          className
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/#home" className="group flex items-center">
            <span className="ml-2 text-white font-medium hidden sm:block">Anuj Dubey</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className={cn(
                  "relative z-10 text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "text-white"
                    : "text-zinc-400 group-hover:text-white"
                )}>
                  {item.name}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            <a
              href="https://github.com/anuj-dubey"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-white p-2 rounded-md hover:bg-zinc-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/95 pt-20 px-4 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-6 w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-zinc-800 w-full text-center",
                  activeSection === item.id
                    ? "text-primary-500"
                    : "text-zinc-400"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://github.com/anuj-dubey"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};
