"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { HoverEffect } from "../ui/card-hover-effect";
import { PinContainer } from "../ui/3d-pin";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "motion/react";

export const ProjectsSection = () => {
  // Main projects for the card hover effect
  const mainProjects = [
    {
      title: "ERP-AI System",
      description: "A scalable ERP system with role-based access and dynamic dashboards for business management.",
      link: "https://github.com/repo-anuj/ERP-AI",
      tags: ["Next.js", "TypeScript", "Prisma", "MongoDB"]
    },
    {
      title: "RentRideRepeat",
      description: "Responsive vehicle rental website with booking system and user management.",
      link: "https://rentriderepeat-website.vercel.app/",
      github: "https://github.com/repo-anuj/rentriderepeat-website",
      tags: ["React", "TailwindCSS", "Framer Motion", "Booking System"]
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic tool for real-time portfolio generation with user authentication and templating.",
      link: "https://portfolio-generator-nine.vercel.app/",
      github: "https://github.com/repo-anuj/portfolio-generator",
      tags: ["React", "TailwindCSS", "Firebase", "Authentication"]
    },
    {
      title: "Festiva Portfolio",
      description: "High-performance portfolio website with optimized animations and responsive design.",
      link: "https://festiva-canva.vercel.app/",
      github: "https://github.com/repo-anuj/festiva-canva",
      tags: ["Vite", "ReactJS", "Framer Motion", "Performance Optimization"]
    },
    {
      title: "Codeplayers Website",
      description: "Official website with optimized cross-platform performance and seamless responsiveness.",
      link: "https://code-players.vercel.app/",
      github: "https://github.com/repo-anuj/code-players",
      tags: ["ReactJS", "Bootstrap", "Framer Motion", "UI/UX"]
    },
    {
      title: "Current Portfolio",
      description: "Modern portfolio showcasing projects and skills with advanced UI components and animations.",
      link: "#",
      github: "https://github.com/repo-anuj/portfolio",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "Aceternity UI"]
    },
  ];

  // Spotlight featured projects
  const spotlightProjects = [
    {
      title: "ERP-AI System",
      description: "Built a scalable ERP system featuring role-based access and dynamic dashboards for comprehensive business management.",
      technologies: "Next.js, TypeScript, Prisma, MongoDB, Redux, Tailwind CSS",
      image: "https://via.placeholder.com/600x400",
      demoLink: "https://github.com/repo-anuj/ERP-AI",
      codeLink: "https://github.com/repo-anuj/ERP-AI",
    },
    {
      title: "RentRideRepeat",
      description: "Developed a responsive vehicle rental platform with booking system, user management, and payment integration.",
      technologies: "React, Tailwind CSS, Next.js, Authentication, Booking System",
      image: "https://via.placeholder.com/600x400",
      demoLink: "https://rentriderepeat-website.vercel.app/",
      codeLink: "https://github.com/repo-anuj/rentriderepeat-website",
    },
  ];

  // 3D projects for the pin container
  const featuredProjects = [
    {
      id: 1,
      content: (
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">RentRideRepeat</h2>
          <p className="text-sm text-white/80">Responsive vehicle rental platform with booking system and user management.</p>
          <div className="flex gap-2 mt-2">
            {["React", "Next.js", "TailwindCSS",].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70">{tag}</span>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <a href="https://rentriderepeat-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 transition-colors">View Demo</a>
            <a href="https://github.com/repo-anuj/rentriderepeat-website" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 transition-colors">View Code</a>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">ERP-AI System</h2>
          <p className="text-sm text-white/80">Scalable ERP with role-based access and dynamic dashboards.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Next.js", "TypeScript", "Prisma", "MongoDB"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70">{tag}</span>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <a href="https://github.com/repo-anuj/ERP-AI" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 transition-colors">View Project</a>
            <a href="https://github.com/repo-anuj/ERP-AI" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 transition-colors">View Code</a>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">Portfolio Generator</h2>
          <p className="text-sm text-white/80">Dynamic tool for real-time portfolio generation with authentication.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["React", "TailwindCSS", "Firebase", "Authentication"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70">{tag}</span>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <a href="https://portfolio-generator-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 transition-colors">View Demo</a>
            <a href="https://github.com/repo-anuj/portfolio-generator" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-full bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 transition-colors">View Code</a>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
              My Projects
            </h2>
            <TextGenerateEffect
              words="Here are some of the projects I've worked on. Each project represents a unique challenge and solution."
              className="text-zinc-400 text-lg max-w-3xl mx-auto"
            />
          </motion.div>
        </div>

        {/* Main Projects with Hover Effect */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">Recent Work</h3>
          <HoverEffect items={mainProjects} className="max-w-6xl mx-auto" />
        </div>

        {/* Spotlight Featured Projects */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">Spotlight Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {spotlightProjects.map((project, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-8 hover:bg-zinc-800/50 transition-colors">
                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="bg-zinc-800/50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-zinc-300">
                      <span className="text-primary-500 font-semibold">Technologies:</span> {project.technologies}
                    </p>
                  </div>
                  <div className="mt-auto flex gap-3">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                      View Demo
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-800 rounded-lg text-white font-medium hover:bg-zinc-700 transition-colors">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Pin Featured Projects */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-16 text-center text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div key={index} className="h-[400px] flex items-center justify-center">
                <PinContainer title={`View ${project.content.props.children[0].props.children}`}>
                  <div className="flex flex-col gap-2 w-[300px] h-[300px] bg-zinc-900 p-4 rounded-lg">
                    <div className="w-full h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg mb-2 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
                      <span className="text-white text-lg font-medium relative z-10">{project.content.props.children[0].props.children}</span>
                    </div>
                    {project.content}
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">Explore More</h3>
          <LayoutGrid cards={featuredProjects} />
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/repo-anuj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
