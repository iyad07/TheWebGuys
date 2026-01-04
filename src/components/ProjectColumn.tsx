"use client";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData | string;
  link: string;
  heightClass: string; // Tailwind class for height/aspect ratio
}

interface ProjectColumnProps {
  projects: Project[];
  className?: string;
  speed?: number; // Duration in seconds
}

export function ProjectColumn({ projects, className, speed = 20 }: ProjectColumnProps) {
  // Triple the projects to ensure smooth looping even with few items
  const loopProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className={cn("relative h-[800px] overflow-hidden hover-pause", className)}>
      {/* The scrolling container */}
      <div 
        className="animate-scroll-up flex flex-col gap-6 pb-6"
        style={{ animationDuration: `${speed}s` }}
      >
        {loopProjects.map((project, i) => (
          <ProjectCard key={`${project.id}-${i}`} project={project} />
        ))}
      </div>
      
      {/* Gradient Masks for smooth fade edges top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={cn("relative group rounded-2xl overflow-hidden w-full flex-shrink-0 bg-gray-100", project.heightClass)}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        // Only use placeholder="blur" if it's a static import (object), not a string URL
        placeholder={typeof project.image === 'object' ? "blur" : undefined}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block opacity-80">
            {project.category}
          </span>
          <h3 className="text-2xl font-serif">{project.title}</h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
