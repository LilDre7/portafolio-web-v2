"use client";

import { icons } from "@/components/icons";

interface SkillItem {
  name: string;
  iconName?: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & Languages",
    items: [
      { name: "Next.js", iconName: "NextJs" },
      { name: "React", iconName: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "TailwindCSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "WordPress" },
      { name: "Microsoft 365", iconName: "Microsoft365" },
      { name: "Google Workspace", iconName: "GoogleWorkspace" },
    ],
  },
];

const TechIcon = ({ name }: { name: string }) => {
  return (
    icons[name] || (
      <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  );
};

export default function Skills() {
  return (
    <section className="mb-16 md:mb-20">
      <h2 className="mb-16 text-2xl font-normal tracking-tight text-white sm:text-3xl md:mb-20">
        Skills & Technologies
      </h2>

      <div className="border-y border-white/5">
        {skillCategories.map(({ category, items }) => (
          <div
            key={category}
            className="grid gap-5 border-b border-white/5 py-8 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-12"
          >
            <h3 className="pt-1 font-mono text-[10px] font-normal uppercase tracking-[0.28em] text-gray-600">
              {category}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {items.map(({ name, iconName }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-[11px] leading-none text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <TechIcon name={iconName || name} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-gray-700">
        Continuously learning & evolving
      </p>
    </section>
  );
}
