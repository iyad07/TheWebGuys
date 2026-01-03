import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ label, title, className, light = false }: SectionHeadingProps) {
  // Split title into first word (gray) and rest (white/black)
  const words = title.split(" ");
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(" ");

  return (
    <div className={cn("mb-24", className)}>
      <div className="inline-block px-4 py-2 rounded-full border border-current opacity-60 mb-8">
        <span className={cn("text-xs font-bold uppercase tracking-widest", light ? "text-white" : "text-primary")}>
            {label}
        </span>
      </div>
      
      <h2 className={cn("text-5xl md:text-7xl font-serif font-medium leading-[0.9] tracking-tight", light ? "text-white" : "text-primary")}>
        <span className="opacity-40 block mb-2">{firstWord}</span>
        <span className="block">{restOfTitle}</span>
      </h2>
    </div>
  );
}
