"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SparklesCore } from "../ui/sparkles";

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
            Hello, I&apos;m Anuj Dubey
          </span>
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <TextGenerateEffect
            words="A detail-oriented Software Engineering student with over 2 years of experience in full-stack web development, specializing in Next.js, TypeScript, and React."
            className="text-xl md:text-2xl text-zinc-300"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 text-white font-medium relative z-10 hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-white/5 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <p className="text-zinc-400 mb-2">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
