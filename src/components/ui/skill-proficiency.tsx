"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkillProficiencyProps {
  name: string;
  level: number; // 0-100
  color?: string;
  className?: string;
}

export const SkillProficiency = ({
  name,
  level,
  color = "bg-primary-500",
  className,
}: SkillProficiencyProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-zinc-400">{level}%</span>
      </div>
      <div className="w-full bg-zinc-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={cn("h-2.5 rounded-full", color)}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
};

export const SkillCard = ({
  skills,
  className,
}: {
  skills: { name: string; level: number }[];
  className?: string;
}) => {
  return (
    <div className={cn("bg-zinc-800/50 rounded-xl p-4 shadow-xl", className)}>
      <div className="space-y-2">
        {skills.map((skill) => (
          <SkillProficiency
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color="bg-gradient-to-r from-primary-500 to-purple-500"
          />
        ))}
      </div>
    </div>
  );
};
