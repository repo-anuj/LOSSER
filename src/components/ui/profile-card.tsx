"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export const ProfileCard = ({
  image,
  alt,
  className,
  children,
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateXFactor = 15;
    const rotateYFactor = 15;

    const newRotateY = ((mouseX - centerX) / (rect.width / 2)) * rotateYFactor;
    const newRotateX = ((centerY - mouseY) / (rect.height / 2)) * rotateXFactor;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative perspective-1000 cursor-pointer", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-zinc-800 shadow-xl">
        <div className="aspect-square overflow-hidden">
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-transparent p-6 pt-16">
          {children}
        </div>

        <div className="absolute inset-0 border border-zinc-700/50 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};
