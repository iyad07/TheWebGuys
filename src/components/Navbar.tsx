"use client";
import Link from "next/link";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
        // Sticky Navbar Logic
        // It stays fixed at top. 
        // We only want to change its style when we scroll past the hero.
        
        ScrollTrigger.create({
            trigger: "body",
            start: "100px top", // Just a bit of scroll to trigger the effect
            end: "max",
            onEnter: () => {
                // Scrolled state
                gsap.to(nav, { 
                    backgroundColor: "rgba(255, 255, 255, 0.9)", 
                    backdropFilter: "blur(10px)",
                    duration: 0.3 
                });
                nav.classList.add("nav-scrolled");
            },
            onLeaveBack: () => {
                // Top state (Hero)
                gsap.to(nav, { 
                    backgroundColor: "transparent", 
                    backdropFilter: "none", 
                    duration: 0.3 
                });
                nav.classList.remove("nav-scrolled");
            }
        });

    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-colors duration-300 sm:mt-30">
      <style jsx global>{`
        .nav-scrolled {
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .nav-scrolled .nav-text {
            color: #2e3a2f !important;
        }
        .nav-scrolled .nav-border {
            border-color: #2e3a2f !important;
        }
        .nav-scrolled .nav-bg-contrast {
            background-color: #2e3a2f !important;
            color: white !important;
        }
      `}</style>

      {/* Left: Navigation */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-white/80 nav-text">
            <Link href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Pricing</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Blog</Link>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="text-3xl font-serif italic text-white flex items-center gap-2 nav-text">
            <span className="inline-block w-4 h-8 bg-white -skew-x-12 rounded-sm nav-bg-contrast"></span>
            TWG
        </Link>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity nav-bg-contrast">
            Watch Demo
            <Play className="w-3 h-3 fill-current" />
        </button>
        <button className=" hidden px-6 py-2.5 border border-white text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors nav-text nav-border">
            Start for Free
        </button>
      </div>
    </nav>
  );
}
