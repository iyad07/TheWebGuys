"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Box, Layers, Command, Zap, Hexagon, Triangle, Circle, Share2 } from "lucide-react";
import HeroImage from "@/assets/hero_image.png";

// Register Plugin safely
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const BRANDS = [
  { name: "SimpleDocs", icon: Box, font: "font-serif" },
  { name: "Coframe", icon: Layers, font: "font-sans" },
  { name: "Serif", icon: null, font: "font-serif italic" },
  { name: "Reforge", icon: Command, font: "font-mono" },
  { name: "Spherule", icon: Circle, font: "font-sans tracking-tight" },
  { name: "Vertex", icon: Triangle, font: "font-bold tracking-widest" },
  { name: "Bolt", icon: Zap, font: "font-mono font-bold" },
  { name: "Hexa", icon: Hexagon, font: "font-serif" },
  { name: "Nexus", icon: Share2, font: "font-sans font-light" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const rotatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee Animation
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1
        });
      }

      // Word Rotator Animation
      if (rotatorRef.current) {
        const tl = gsap.timeline({ repeat: -1 });
        const totalWords = 4; // Elevate, Scale, Grow, Define
        
        for (let i = 0; i < totalWords; i++) {
            // Wait
            tl.to({}, { duration: 2.0 });
            // Slide up
            tl.to(rotatorRef.current, {
                yPercent: -(100 / (totalWords + 1)) * (i + 1), // +1 because we added a clone
                duration: 0.6,
                ease: "power3.inOut"
            });
        }
        // Reset instantly to 0 (which is the clone of the start)
        tl.set(rotatorRef.current, { yPercent: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%", 
            pin: true,
            scrub: true, 
        }
      });

      // 1. Container Transform (Round corners + Scale Down)
      tl.to(wrapperRef.current, {
        borderRadius: "48px",
        scale: 0.95,
        y: 20,
        ease: "power1.inOut",
      }, 0);

      // 2. Parallax Zoom Effect (Image scales up inside the shrinking container)
      tl.fromTo(imageRef.current, 
        { scale: 2.5 }, // Start slightly zoomed in
        {
            scale: 1, // Zoom out to normal
            ease: "none",
        },
        0
      );
      
      // 3. Content Fade (Faster fade out - by 50% scroll)
      tl.to(textRef.current, {
        opacity: 0,
        y: -40,
        ease: "power1.out",
        duration: 0.5 // Relative to timeline duration (ends at 50%)
      }, 0); 

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Wrapper for the rounded corner effect */}
      <div ref={wrapperRef} className="relative w-full h-full overflow-hidden">
        {/* Background Image Container */}
        <div 
            ref={imageRef} 
            className="absolute inset-0 w-full h-full z-0"
        >
            <Image
            src={HeroImage}
            alt="Misty Landscape"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div ref={textRef} className="relative z-10 h-full flex flex-col items-center pt-24 md:pt-32 text-center text-white px-4">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tighter leading-[0.9] mix-blend-overlay opacity-90">
                We Build Websites That<br />
                <span className="inline-grid h-[0.9em] overflow-hidden align-bottom">
                    <div ref={rotatorRef} className="flex flex-col">
                        <span className="font-sans italic font-light block">Elevate</span>
                        <span className="font-sans italic font-light block">Scale</span>
                        <span className="font-sans italic font-light block">Grow</span>
                        <span className="font-sans italic font-light block">Define</span>
                        <span className="font-sans italic font-light block">Elevate</span>
                    </div>
                </span> <br className="md:hidden" />
                Your Brand.
            </h1>
            
            {/* Trusted By Section */}
            <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-4xl">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    Trusted By
                </span>
                <div className="w-full overflow-hidden relative mask-fade">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black/0 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black/0 to-transparent z-10 pointer-events-none" />
                    
                    <div ref={marqueeRef} className="flex gap-16 w-max opacity-60 hover:opacity-100 transition-opacity duration-300">
                        {[...BRANDS, ...BRANDS].map((brand, i) => (
                            <div key={i} className={`flex items-center gap-2 text-xl text-white ${brand.font}`}>
                                {brand.icon && <brand.icon className="w-5 h-5" />}
                                {brand.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
