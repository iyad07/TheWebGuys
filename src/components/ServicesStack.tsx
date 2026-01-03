"use client";
import { useRef } from "react";
import { Monitor, PenTool, BarChart3, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    title: "Digital Strategy",
    description: "We build roadmaps for growth and digital transformation. By aligning technology with your business goals, we ensure every digital touchpoint serves a purpose and drives measurable results.",
    icon: BarChart3,
    color: "bg-[#2e3a2f]", // Primary Deep Green
    text: "text-white"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful digital experiences. We focus on user behavior and aesthetic precision to create interfaces that are not just usable, but delightful and memorable.",
    icon: PenTool,
    color: "bg-[#a3b18a]", // Accent Green
    text: "text-[#2e3a2f]"
  },
  {
    title: "Development",
    description: "Robust engineering using modern web technologies. From Next.js to headless CMS architectures, we build scalable, lightning-fast solutions that stand the test of time.",
    icon: Monitor,
    color: "bg-[#dad7cd]", // Light Stone
    text: "text-[#2e3a2f]"
  }
];

export function ServicesStack() {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto" id="services">
      <SectionHeading 
        label="What We Do" 
        title="Comprehensive solutions for digital growth" 
      />

      <div className="flex flex-col gap-8 relative">
        {SERVICES.map((service, i) => (
          <div 
            key={i}
            className={`sticky group rounded-3xl p-8 md:p-16 ${service.color} ${service.text} transition-all duration-500 border border-black/5 shadow-xl flex flex-col justify-between overflow-hidden origin-top`}
            style={{ 
                top: `calc(10vh + ${i * 40}px)`,
                height: '80vh',
                zIndex: i + 1,
            }}
          >
            <div className="absolute top-8 right-8 md:top-16 md:right-16 opacity-20">
                 <service.icon className="w-64 h-64 md:w-96 md:h-96 -mr-16 -mt-16 rotate-12" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl">
                 <div className="mb-8">
                     <h3 className="text-5xl md:text-7xl font-sans font-medium mb-6 tracking-tight">{service.title}</h3>
                     <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                        {service.description}
                    </p>
                 </div>
                 
                 <div className="w-full h-px bg-current opacity-20 my-8" />
                 
                 <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60">0{i + 1} / 0{SERVICES.length}</span>
                     <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity group-hover:translate-x-2 duration-300">
                        Learn More <ArrowUpRight className="w-4 h-4" />
                    </button>
                 </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
