"use client";

import React from "react";

// Tipos para mejor type safety
interface WorkExperience {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

// Datos separados del componente para mejor mantenibilidad
const experiences: WorkExperience[] = [
  {
    id: "agency-design",
    period: "February 2025 - September 2025",
    title: "Full-Stack Developer",
    company: "Agency Design Dreams Studio",
    location: "Costa Rica - REMOTE",
    highlights: [
      "Developed web applications using React, Spring Boot, and WordPress following modern development practices.",
      "Designed and implemented RESTful APIs for web and mobile integrations.",
      "Collaborated with designers and stakeholders to deliver user-friendly and responsive interfaces.",
      "Improved application performance and SEO through optimization techniques.",
    ],
    technologies: ["React", "Spring Boot", "WordPress", "RESTful APIs", "SEO"],
  },
  {
    id: "freelance",
    period: "March 2023 - October 2023",
    title: "Freelance Full Stack Developer",
    company: "Independent",
    location: "Costa Rica - REMOTE",
    highlights: [
      "Built custom websites and applications for small businesses using modern web technologies.",
      "Translated business requirements into technical solutions.",
      "Optimized website performance, usability, and SEO.",
      "Managed full development lifecycle from planning to deployment.",
    ],
    technologies: [
      "Web Development",
      "Technical Solutions",
      "Performance",
      "Usability",
      "SEO",
    ],
  },
  {
    id: "coco-gym",
    period: "November 2023 - January 2024",
    title: "Internal Web Developer",
    company: "COCO GYM FITNESS",
    location: "Costa Rica - Playas del Coco",
    highlights: [
      "Developed an internal dashboard using React, Node.js, and SQL.",
      "Implemented authentication systems and session management.",
      "Built features to improve client management and internal processes.",
      "Debugged and maintained application performance.",
    ],
    technologies: ["React", "Node.js", "SQL", "Authentication", "Dashboards"],
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
        <h3 className="font-normal text-sm sm:text-base mb-1">
          {experience.title} – {experience.company}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm mb-2 md:mb-3">
          {experience.location}
        </p>

        <ul className="text-gray-400 text-sm leading-relaxed mb-3 md:mb-4 list-disc pl-4 space-y-1">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

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
