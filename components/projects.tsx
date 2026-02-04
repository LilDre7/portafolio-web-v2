"use client";

import { useState } from "react";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "Just DrawOk",
      title: "Just DrawOk",
      description:
        "Just DrawOk is a lightweight digital whiteboard web application where you can draw freely.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Canvas",
      ],
      image: "/draw.png",
      link: "https://just-drawok.vercel.app/",
      github: null,
      year: "2025",
      role: "Full-Stack Developer",
    },
    {
      id: "Password Manager",
      title: "Password Manager",
      description:
        "A modern, secure, and user-friendly password management application built with cutting-edge web technologies. It allows you to securely store, generate, and manage your passwords with ease.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Canvas",
        "Encryption",
        "Local Storage",
        "Node.js",
        "Express",
        "Supabase",
        "JWT",
      ],
      image: "/fav.png",
      link: "https://v0-passyourpassword-manager.vercel.app/",
      github: null,
      year: "2025",
      role: "Full-Stack Developer",
    },
    {
      id: "Streetwear Store",
      title: "Streetwear Store",
      description:
        "Premium streetwear e-commerce platform featuring urban fashion with a modern, minimalist design. Built for performance and user experience.",
      technologies: [
        "NextJs",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Shadcn/UI",
      ],
      image: "/shop.png",
      link: "https://v0-wstreetwear.vercel.app/",
      github: "https://github.com/LilDre7/wstreetwear",
      year: "2025",
      role: "Full-Stack Developer",
    },
    {
      id: "shortener-url",
      title: "URL Shortener",
      description:
        "This project allows you to generate short links, manage them from an interactive table and review metrics such as clicks, views and creation date.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Jest", "Prisma"],
      image: "/http.png",
      link: "https://getyourlink.vercel.app/",
      github: null,
      year: "2025",
      role: "Full-Stack Developer",
    },
    // {
    //   id: "portfolio-v2",
    //   title: "Personal Portfolio v2",
    //   description:
    //     "Modern minimalist portfolio website with brutalist design elements and responsive layout.",
    //   technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    //   image: "/projects/portfolio.jpg",
    //   link: null,
    //   github: "https://github.com/LilDre7/portfolio-web-v2",
    //   year: "2024",
    //   role: "Full-Stack Developer",
    // },
  ];

  return (
    <div className="mb-12 md:mb-20 max-w-xl bg-black text-white font-sans">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <h1 className="text-base mb-8 md:mb-16">Side Projects</h1>

        {/* Projects List */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:grid md:grid-cols-12 md:gap-[60px] md:items-start gap-4"
            >
              {/* Year Label - aligned with title */}
              <div className="md:col-span-3 order-2 md:order-1 hidden md:block">
                <p className="text-xs sm:text-sm text-gray-500">
                  {project.year}
                </p>
              </div>

              {/* Project Content */}
              <div className="md:col-span-9 space-y-4 md:space-y-6 order-1 md:order-2">
                {/* Project Image */}
                <div className="">
                  {project.image && (
                    <Image
                      src={project.image}
                      width={40}
                      height={50}
                      alt={project.title}
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Mobile Layout - date and title inline */}
                <div className="flex items-center gap-2 md:hidden">
                  <p className="text-xs text-gray-500">{project.year} -</p>
                  <div className="flex items-center gap-1">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-gray-300 transition-colors relative group"
                      >
                        {project.title}
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
                      </a>
                    ) : project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-gray-300 transition-colors relative group"
                      >
                        {project.title}
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
                      </a>
                    ) : (
                      <p className="text-sm">{project.title}</p>
                    )}
                    {(project.link || project.github) && (
                      <a
                        href={project.link || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Desktop Layout - title with link only */}
                <div className="hidden md:flex sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-1">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-sm hover:border hover:border-white hover:text-gray-300 transition-colors relative group"
                      >
                        {project.title}
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
                      </a>
                    ) : project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-sm hover:text-gray-300 transition-colors relative group"
                      >
                        {project.title}
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
                      </a>
                    ) : (
                      <p className="text-sm sm:text-sm hover:border hover:border-white">
                        {project.title}
                      </p>
                    )}
                    {(project.link || project.github) && (
                      <a
                        href={project.link || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-sm leading-relaxed w-full sm:w-[530px] md:w-[380px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs sm:text-sm">
                  {project.technologies.map((tech, index) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {index < project.technologies.length - 1 && (
                        <span>•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
