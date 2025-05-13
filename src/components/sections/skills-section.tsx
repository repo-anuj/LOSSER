"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SkillBars, SkillBubbles, SkillWave, ToolsGrid, DevOpsFlow } from "../ui/skill-visualizations";
import { IconCode, IconDatabase, IconBrandFigma, IconTools, IconDeviceDesktopAnalytics, IconCloudComputing } from "@tabler/icons-react";

export const SkillsSection = () => {

  // Career journey timeline data
  const timelineData = [
    {
      title: "Web Developer",
      content: (
        <div className="space-y-4">
          <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs font-semibold inline-block">
            Festiva Portfolio
          </div>
          <p className="text-zinc-400">
            Developed a high-performance portfolio website using Vite, ReactJS, and Framer Motion, increasing client engagement by 30%. Implemented performance optimization strategies, reducing load times by 25%.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">2025</span>
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Web Developer",
      content: (
        <div className="space-y-4">
          <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-semibold inline-block">
            Codeplayer
          </div>
          <p className="text-zinc-400">
            Engineered the official website using ReactJS, Bootstrap, and Framer Motion, boosting user engagement by 40%. Optimized cross-platform performance, achieving 20% faster load times and seamless responsiveness.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">2024 - 2025</span>
          </div>
        </div>
      ),
    },
    {
      title: "Catalog Management Intern",
      content: (
        <div className="space-y-4">
          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-semibold inline-block">
            Mentorsity
          </div>
          <p className="text-zinc-400">
            Managed digital catalogs, ensuring 100% data accuracy and enhancing client satisfaction. Collaborated with cross-functional teams to streamline processes, reducing operational time by 10%.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">Apr 2023 - Jun 2023</span>
          </div>
        </div>
      ),
    },
    {
      title: "Web Developer Intern",
      content: (
        <div className="space-y-4">
          <div className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md text-xs font-semibold inline-block">
            Bharat Intern
          </div>
          <p className="text-zinc-400">
            Developed responsive ReactJS features, improving UI/UX and increasing session duration by 15%. Implemented client-requested functionalities, optimizing performance and user feedback loops.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">Jun 2022 - Oct 2022</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="journey" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
            My Journey
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Explore my professional experience and education in software development.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Removed duplicate heading as it's now in the Timeline component */}
          <div className="bg-zinc-800/50 rounded-xl p-6 shadow-xl">
            <Timeline data={timelineData} />
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Technologies & Skills
            </h3>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-10">
              Here are the technologies and tools I&apos;ve worked with throughout my career.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Skills */}
        <div className="max-w-6xl mx-auto mb-20">
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
            {/* Frontend Development */}
            <BentoGridItem
              title="Frontend Development"
              description={
                <span className="text-sm">
                  Building responsive and interactive user interfaces with modern web technologies.
                </span>
              }
              header={<SkillBars />}
              className="md:col-span-2"
              icon={<IconCode className="h-4 w-4 text-primary-500" />}
            />

            {/* Backend Technologies */}
            <BentoGridItem
              title="Backend Technologies"
              description={
                <span className="text-sm">
                  Creating robust server-side applications and APIs.
                </span>
              }
              header={<SkillBubbles />}
              className="md:col-span-1"
              icon={<IconDatabase className="h-4 w-4 text-blue-500" />}
            />

            {/* UI/UX Design */}
            <BentoGridItem
              title="UI/UX Design"
              description={
                <span className="text-sm">
                  Crafting beautiful and intuitive user experiences.
                </span>
              }
              header={<SkillWave />}
              className="md:col-span-1"
              icon={<IconBrandFigma className="h-4 w-4 text-pink-500" />}
            />

            {/* DevOps & Deployment */}
            <BentoGridItem
              title="DevOps & Deployment"
              description={
                <span className="text-sm">
                  Streamlining development workflows and deploying applications.
                </span>
              }
              header={<DevOpsFlow />}
              className="md:col-span-2"
              icon={<IconCloudComputing className="h-4 w-4 text-cyan-500" />}
            />

            {/* Development Tools */}
            <BentoGridItem
              title="Development Tools"
              description={
                <span className="text-sm">
                  Leveraging the right tools to enhance productivity and code quality.
                </span>
              }
              header={<ToolsGrid />}
              className="md:col-span-2"
              icon={<IconTools className="h-4 w-4 text-emerald-500" />}
            />

            {/* Performance Optimization */}
            <BentoGridItem
              title="Performance Optimization"
              description={
                <span className="text-sm">
                  Ensuring applications run smoothly and efficiently.
                </span>
              }
              header={
                <motion.div
                  className="flex items-center justify-center h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <IconDeviceDesktopAnalytics className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <div className="text-white font-bold">Fast & Efficient</div>
                    <div className="text-zinc-400 text-sm mt-2">Lighthouse • Core Web Vitals • Optimization</div>
                  </div>
                </motion.div>
              }
              className="md:col-span-1"
              icon={<IconDeviceDesktopAnalytics className="h-4 w-4 text-purple-500" />}
            />
          </BentoGrid>
        </div>


      </div>
    </section>
  );
};
