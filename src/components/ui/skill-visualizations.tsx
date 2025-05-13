"use client";

import React from "react";
import { motion } from "motion/react";

export const SkillBars = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TailwindCSS", level: 95 },
    { name: "Node.js", level: 85 },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2"
    >
      {skills.map((skill, i) => (
        <motion.div
          key={`skill-bar-${i}`}
          className="flex flex-col space-y-1"
        >
          <div className="flex justify-between">
            <span className="text-xs font-medium text-white">{skill.name}</span>
            <span className="text-xs font-medium text-zinc-400">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-zinc-700/50 rounded-full overflow-hidden">
            <motion.div
              variants={variants}
              style={{
                maxWidth: `${skill.level}%`,
              }}
              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const SkillBubbles = () => {
  const backendSkills = [
    { name: "Node.js", color: "bg-green-500/80", size: "text-sm" },
    { name: "Express", color: "bg-blue-500/80", size: "text-base" },
    { name: "MongoDB", color: "bg-emerald-500/80", size: "text-lg" },
    { name: "PostgreSQL", color: "bg-amber-500/80", size: "text-base" },
    { name: "GraphQL", color: "bg-purple-500/80", size: "text-sm" },
    { name: "REST API", color: "bg-indigo-500/80", size: "text-base" },
    { name: "Firebase", color: "bg-orange-500/80", size: "text-lg" },
    { name: "Prisma", color: "bg-cyan-500/80", size: "text-sm" },
    { name: "JWT", color: "bg-red-500/80", size: "text-xs" },
    { name: "Socket.io", color: "bg-violet-500/80", size: "text-sm" },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center p-4 overflow-hidden"
    >
      <div className="flex flex-wrap justify-center items-center gap-2 w-full h-full">
        {backendSkills.map((skill, i) => (
          <motion.div
            key={`skill-tag-${i}`}
            className={`${skill.color} ${skill.size} px-3 py-1 rounded-full text-white font-medium shadow-md`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              y: -5
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: i * 0.05
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillWave = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 items-center justify-center"
      style={{
        background: "linear-gradient(-45deg, #FF7000, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="text-white font-bold text-xl">UI/UX Design</div>
      <div className="text-white/80 text-sm">Figma • Adobe XD • Sketch</div>
    </motion.div>
  );
};

export const ToolsGrid = () => {
  const tools = [
    { name: "Git", color: "from-green-500 to-emerald-500" },
    { name: "Docker", color: "from-blue-500 to-cyan-500" },
    { name: "CI/CD", color: "from-orange-500 to-amber-500" },
    { name: "Jest", color: "from-red-500 to-pink-500" },
    { name: "Cypress", color: "from-indigo-500 to-violet-500" },
    { name: "GitHub", color: "from-purple-500 to-fuchsia-500" },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="grid grid-cols-2 gap-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-2"
    >
      {tools.map((tool, i) => (
        <motion.div
          key={`tool-${i}`}
          className={`rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-sm font-medium text-white">{tool.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const DevOpsFlow = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 p-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-xl bg-zinc-800 p-2 flex flex-col items-center justify-center"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-2" />
        <p className="text-xs text-center font-semibold text-white">Code</p>
        <p className="text-[10px] text-center text-zinc-400">Git • GitHub</p>
      </motion.div>
      <motion.div className="h-full w-1/3 rounded-xl bg-zinc-800 p-2 flex flex-col items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-2" />
        <p className="text-xs text-center font-semibold text-white">Build</p>
        <p className="text-[10px] text-center text-zinc-400">CI • Testing</p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-xl bg-zinc-800 p-2 flex flex-col items-center justify-center"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mb-2" />
        <p className="text-xs text-center font-semibold text-white">Deploy</p>
        <p className="text-[10px] text-center text-zinc-400">AWS • Vercel</p>
      </motion.div>
    </motion.div>
  );
};
