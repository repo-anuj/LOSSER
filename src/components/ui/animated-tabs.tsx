"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

export const AnimatedTabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  inactiveTabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className="flex flex-row items-center justify-start space-x-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === tab.value
                ? cn("text-white", activeTabClassName)
                : cn("text-zinc-400 hover:text-zinc-100", inactiveTabClassName)
            )}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="active-tab-bg"
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full border border-primary-500/30"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className={cn("mt-6", contentClassName)}>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={cn(activeTab === tab.value ? "block" : "hidden")}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tab.content}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
