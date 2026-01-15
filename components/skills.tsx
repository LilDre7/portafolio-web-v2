"use client";

import { icons } from "@/components/icons";

const TechIcon = ({ name }: { name: string }) => {
  return (
    icons[name] || (
      <svg
        className="w-3 h-3"
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
      <h2 className="text-base font-normal mb-8 md:mb-10">
        Skills & Technologies
      </h2>

      <div className="space-y-10 md:space-y-12">
        {[
          {
            category: "Languages",
            items: [
              { name: "NextJs" },
              { name: "ReactJs" },
              { name: "TypeScript" },
              { name: "JavaScript" },
              { name: "TailwindCSS" },
              { name: "HTML" },
              { name: "CSS" },
              { name: "Python" },
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
              { name: "Microsoft365" },
              { name: "GoogleWorkspace" },
            ],
          },
        ].map(({ category, items }) => (
          <div
            key={category}
            className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8"
          >
            <div className="text-gray-500 text-sm sm:text-sm pt-1 pb-3 sm:pb-0 animate-fade-cycle">
              {category}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {items.map(({ name }, index) => (
                <span
                  key={name}
                  className="font-mono px-2 py-1 text-xs rounded flex items-center gap-1.5 animate-glitch-cycle"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <TechIcon name={name} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
