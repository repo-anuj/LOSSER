"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TracingBeam } from "../ui/tracing-beam";
import my from "../../../public/20240423_085438.jpg";
import { AnimatedTabs } from "../ui/animated-tabs";
import { AnimatedGrid } from "../ui/animated-grid";
import { ProfileCard } from "../ui/profile-card";
import { motion } from "motion/react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconCode, IconDeviceLaptop, IconRocket, IconUsers } from "@tabler/icons-react";

export const AboutSection = () => {
  const achievements = [
    { title: "Years Experience", value: "2+", icon: <IconDeviceLaptop />, color: "text-blue-500" },
    { title: "Projects Completed", value: "5+", icon: <IconRocket />, color: "text-purple-500" },
    { title: "Certifications", value: "5+", icon: <IconUsers />, color: "text-green-500" },
    { title: "Technologies", value: "20+", icon: <IconCode />, color: "text-amber-500" }
  ];

  const tabs = [
    {
      title: "About Me",
      value: "about",
      content: (
        <div className="space-y-6">
          <TextGenerateEffect
            words="I'm a detail-oriented Software Engineering student with over 2 years of experience in full-stack web development, specializing in RESTful APIs, responsive UI, and scalable solutions. Currently pursuing my Bachelor of Computer Applications (BCA) at Shri Shankaracharya Professional University."
            className="text-zinc-400 mb-4"
          />

          <TextGenerateEffect
            words="My expertise includes Next.js, TypeScript, Prisma, MongoDB, and Redux, delivering user-centric applications in Agile environments. I'm recognized as a Postman Student Expert and Let's Upgrade Student Ambassador, currently advancing my skills in game design to enhance interactive interfaces."
            className="text-zinc-400 mb-6"
          />

          {/* <div className="space-y-4 mt-8">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="text-primary-500 mt-1"><IconCode size={20} /></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Full-Stack Development</h4>
                <p className="text-sm text-zinc-400">Building end-to-end solutions with modern technologies like React, Next.js, Node.js, and more.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="text-primary-500 mt-1"><IconBrain size={20} /></div>
              <div>
                <h4 className="font-semibold text-white mb-1">Creative Problem Solving</h4>
                <p className="text-sm text-zinc-400">Approaching challenges with innovative solutions and attention to detail.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="text-primary-500 mt-1"><IconPalette size={20} /></div>
              <div>
                <h4 className="font-semibold text-white mb-1">UI/UX Design</h4>
                <p className="text-sm text-zinc-400">Creating intuitive and visually appealing interfaces that enhance user experience.</p>
              </div>
            </div>
          </div> */}
        </div>
      )
    },
    {
      title: "Skills & Expertise",
      value: "skills",
      content: (
        <div className="space-y-6">
          <TextGenerateEffect
            words="I specialize in modern web development technologies and frameworks. My technical expertise spans both frontend and backend development, allowing me to create comprehensive solutions."
            className="text-zinc-400 mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
              <h4 className="font-semibold text-primary-400 mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
              <h4 className="font-semibold text-primary-400 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className="space-y-6">
          <TextGenerateEffect
            words="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
            className="text-zinc-400 mb-6"
          />

          <div className="grid grid-cols-2 gap-6 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50">
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Name:</h4>
              <p className="text-zinc-300">Anuj Dubey</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Email:</h4>
              <p className="text-zinc-300">00a20.j50@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Location:</h4>
              <p className="text-zinc-300">Raipur, Chhattisgarh, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Education:</h4>
              <p className="text-zinc-300">BCA (2022-2025)</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com/repo-anuj" className="text-zinc-400 hover:text-primary-500 transition-colors">
              <IconBrandGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anuj-0-dubey-26963527b/" className="text-zinc-400 hover:text-primary-500 transition-colors">
              <IconBrandLinkedin size={24} />
            </a>
            <a href="https://anujkidding-portfolio.vercel.app/" className="text-zinc-400 hover:text-primary-500 transition-colors">
              <IconBrandTwitter size={24} />
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <TracingBeam className="px-6">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500"
            >
              About Me
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <ProfileCard image={my} alt="Anuj Dubey">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Anuj Dubey
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    Full-Stack Developer & Postman Student Expert
                  </p>
                </ProfileCard>

                <AnimatedGrid items={achievements} className="grid-cols-2 gap-3" />
              </div>

              <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/30 p-6 shadow-xl">
                <AnimatedTabs
                  tabs={tabs}
                  containerClassName="mb-6"
                  activeTabClassName="font-medium"
                  contentClassName="min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
};
