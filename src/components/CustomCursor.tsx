"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on client and non-touch devices ideally, but CSS handles hidden md:block
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center the cursor initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    // Initial binding
    const bindHover = () => {
        const links = document.querySelectorAll("a, button, .hover-trigger");
        links.forEach((link) => {
            link.addEventListener("mouseenter", handleHoverStart);
            link.addEventListener("mouseleave", handleHoverEnd);
        });
    };
    bindHover();

    // Re-bind on mutation (simplified)
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-3 h-3 rounded-full bg-black pointer-events-none z-[9999] transition-all duration-300 ease-out hidden md:block",
        isHovering ? "w-12 h-12 bg-transparent border border-black/50" : "bg-black"
      )}
    />
  );
}
