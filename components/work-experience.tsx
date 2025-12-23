"use client";

import React from "react";

// Tipos para mejor type safety
interface WorkExperience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

// Datos separados del componente para mejor mantenibilidad
const experiences: WorkExperience[] = [
  {
    id: "agency-design",
    period: "Feb 2025 - Sep 2025",
    title: "Full-Stack Developer",
    company: "Agency Design Dreams Studio",
    description:
      "Developed custom web solutions for clients using React.js, Python, and WordPress. Implemented SEO strategies and development best practices to optimize performance and usability. Designed RESTful APIs, database structures, and scalable components for web and mobile projects.",
    technologies: ["React.js", "Python", "WordPress", "RESTful APIs", "SEO"],
  },
  {
    id: "coco-gym",
    period: "Nov 2023 - Jan 2024",
    title: "In-House Web Developer",
    company: "COCO GYM FITNESS",
    description:
      "Developed the official gym website as a personal initiative to improve its digital presence. Used React, TailwindCSS, Material UI, Node.js, and SQL to create a modern and responsive interface. Implemented contact forms and informative sections for client interaction.",
    technologies: ["ReactJS", "TailwindCSS", "Material UI", "NodeJS", "SQL"],
  },
  {
    id: "freelance",
    period: "Mar 2023 - Oct 2023",
    title: "Freelance Web Consultant",
    company: "Digital Tools & Development",
    description:
      "Advised small businesses on implementing digital tools. Developed customized websites and applications prioritizing user experience. Maintained and optimized web pages for performance and SEO.",
    technologies: [
      "Web Development",
      "SEO",
      "User Experience",
      "Digital Consulting",
    ],
  },
];

// Componente para cada experiencia laboral
function ExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <article className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
      <time
        className="text-gray-500 text-xs sm:text-sm"
        dateTime={experience.period}
      >
        {experience.period}
      </time>

      <div>
        <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
          {experience.title} – {experience.company}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-3 md:mb-4">
          {experience.description}
        </p>

        <ul
          className="pt-2 text-gray-500 text-xs sm:text-sm flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {experience.technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {index < experience.technologies.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Componente principal
export default function WorkExperience() {
  return (
    <section className="mb-16 md:mb-20" aria-labelledby="work-experience-title">
      <h2
        id="work-experience-title"
        className="text-base font-normal mb-8 md:mb-10"
      >
        Work Experience
      </h2>

      <div className="space-y-10 md:space-y-12">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
