"use client";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectColumn } from "@/components/ProjectColumn";
import AzumahHomes from "@/assets/projects/azumahhomes.png";
import XLabs from "@/assets/projects/xlabsgh.png";

// Sample Data
const PROJECTS = [
  {
    id: 1,
    title: "Azumah Homes",
    category: "Real Estate",
    image: AzumahHomes,
    link: "https://www.azumahhomes.com",
  },
  {
    id: 2,
    title: "XLabs GH",
    category: "Tech / Branding",
    image: XLabs,
    link: "https://www.xlabsgh.com",
  },
];

const HEIGHTS = ["h-[400px]", "h-[450px]", "h-[350px]", "h-[500px]", "h-[550px]"];

export function SelectedWork() {
  // Helper to generate column data dynamically
  const generateColumn = (offset: number) => {
    if (PROJECTS.length === 0) return [];

    // Ensure we have enough items to scroll nicely even if projects array is small
    // We'll repeat the projects array until we have at least a few items to apply varied heights
    let items = [...PROJECTS];
    while (items.length < 4) {
        items = [...items, ...PROJECTS];
    }

    // Rotate the array based on offset so columns don't start with the same project
    const rotateIndex = offset % items.length;
    const rotatedItems = [...items.slice(rotateIndex), ...items.slice(0, rotateIndex)];

    // Map to add height classes
    return rotatedItems.map((project, i) => ({
      ...project,
      // Cycle through heights, adding offset so columns don't match heights at the same row
      heightClass: HEIGHTS[(i + offset) % HEIGHTS.length]
    }));
  };

  const col1 = generateColumn(0);
  const col2 = generateColumn(2); // Offset by 2 to vary content
  const col3 = generateColumn(4); // Offset by 4

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionHeading label="Selected Work" title="Our recent projects" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px] overflow-hidden">
          {/* Column 1 - Slow */}
          <ProjectColumn projects={col1} speed={25} />
          
          {/* Column 2 - Medium (Hidden on mobile if needed) */}
          <ProjectColumn projects={col2} speed={30} className="hidden md:block" />
          
          {/* Column 3 - Fast (Hidden on tablet) */}
          <ProjectColumn projects={col3} speed={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
