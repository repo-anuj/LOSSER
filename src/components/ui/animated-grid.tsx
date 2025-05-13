"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const AnimatedGrid = ({
  items,
  className,
  itemClassName,
}: {
  items: {
    title: string;
    value: string;
    icon?: React.ReactNode;
    color?: string;
  }[];
  className?: string;
  itemClassName?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className={cn(
            "flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800/80 transition-all duration-300",
            itemClassName
          )}
          whileHover={{ scale: 1.03 }}
        >
          {item.icon && (
            <div className="mb-2 text-2xl text-primary-500">{item.icon}</div>
          )}
          <div className={cn("text-2xl font-bold", item.color || "text-primary-500")}>
            {item.value}
          </div>
          <div className="text-xs text-zinc-400 mt-1">{item.title}</div>
        </motion.div>
      ))}
    </div>
  );
};

export const AnimatedFeatures = ({
  features,
  className,
}: {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-all duration-300"
        >
          <div className="text-primary-500 mt-1">{feature.icon}</div>
          <div>
            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
            <p className="text-sm text-zinc-400">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
