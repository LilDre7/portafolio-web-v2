"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Skills from "@/components/skills";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo */}
      <div className="fixed top-3 left-2 md:top-4 md:left-6 z-10">
        <span className="text-sm font-medium text-white">
          <img
            src="/logo.png"
            className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
            alt="Image"
          />
        </span>
      </div>


      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-gray-400 hover:text-white transition-colors p-2 border-black border-2 border-white rounded-md"
        >
          Connect
        </button>
      </div>

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          } bg-black`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`w-full h-full flex flex-col items-center justify-center p-8 relative delay-150 transition-all duration-700 ease-in-out animate-click ${
              isModalOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-full scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 md:top-8 right-6 md:right-8 text-white border-2 border-white px-4 py-2 text-sm md:text-base font-bold hover:bg-white hover:text-black transition-all duration-300 rounded"
            >
              ESC
            </button>
            {/* Decorative year markers - small text scattered around */}
            <div className="absolute top-24 left-16 text-xs font-medium text-white/30">
              2022
            </div>
            <div className="absolute top-1/3 right-24 text-xs font-medium text-white/30">
              2024
            </div>
            <div className="absolute bottom-32 left-32 text-xs font-medium text-white/30">
              2025
            </div>

            {/* Diagonal lines */}
            <div className="absolute top-28 left-20 w-0.5 h-24 bg-white/20 -rotate-45"></div>
            <div className="absolute top-1/3 right-28 w-0.5 h-32 bg-white/20 rotate-45"></div>
            <div className="absolute bottom-36 left-36 w-0.5 h-20 bg-white/20 -rotate-45"></div>

            {/* Main content - huge brutalist typography */}
            <div className="relative z-10 w-full max-w-6xl space-y-0 leading-none">
              <Link
                href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                target="_blank"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[8rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors"
              >
                LINKED
              </Link>

              <Link
                href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                target="_blank"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[8rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors"
              >
                IN
              </Link>

              <Link
                href="mailto:alvaroaburto71@gmail.com"
                target="_black"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[8rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors mt-4"
              >
                EMAIL
              </Link>

              <Link
                href="tel:+50664670470"
                target="_black"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[10rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors mt-4"
              >
                PHONE
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-xl mx-auto mt-3 px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-20">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-12 md:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 bg-blue-500">
            <Image
              src="/avatar.jpg"
              alt="Alvaro Aburto Ocampo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0 sm:pt-2">
            <h1 className="text-2xl sm:text-3xl font-normal mb-1">
              Alvaro Aburto Ocampo
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-1">
              Full-Stack Developer
              <span className="opacity-75 text-center text-gray-500 text-xs">
                +2 experience
              </span>
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Guanacaste, Playas del Coco · Costa Rica
            </p>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-4 md:mb-6">About</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-sm">
            Full-Stack Developer focused on creating scalable and efficient web
            solutions using technologies like JavaScript, Python, React, and
            Node.js, emphasizing user experience and development best practices.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-8 md:mb-10">
            Work Experience
          </h2>

          <div className="space-y-10 md:space-y-12">
            {/* Job 1 - Agency Design Dreams Studio */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">
                Jan 2024 - Dec 2024
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  Full-Stack Developer – Agency Design Dreams Studio
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  Developed custom web solutions for clients using React.js,
                  Python, and WordPress. Implemented SEO strategies and
                  development best practices to optimize performance and
                  usability. Designed RESTful APIs, database structures, and
                  scalable components for web and mobile projects.
                </p>
                <ul className="pt-2 text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
                  <li>React.js</li>
                  <li>Python</li>
                  <li>WordPress</li>
                  <li>RESTful APIs</li>
                  <li>SEO</li>
                </ul>
              </div>
            </div>

            {/* Job 3 - COCO GYM FITNESS */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">
                Aug 2023 - Nov 2024
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  In-House Web Developer – COCO GYM FITNESS
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  Developed the official gym website as a personal initiative to
                  improve its digital presence. Used React, TailwindCSS,
                  Material UI, Node.js, and SQL to create a modern and
                  responsive interface. Implemented contact forms and
                  informative sections for client interaction.
                </p>
                <ul className="pt-2 text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
                  <li>ReactJS</li>
                  <li>TailwindCSS</li>
                  <li>Material UI</li>
                  <li>NodeJS</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            {/* Job 2 - Freelance Web Consultant */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">
                Aug 2022 - Nov 2023
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  Freelance Web Consultant – Digital Tools & Development
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  Advised small businesses on implementing digital tools.
                  Developed customized websites and applications prioritizing
                  user experience. Maintained and optimized web pages for
                  performance and SEO.
                </p>
                <ul className="pt-2 text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
                  <li>Web Development</li>
                  <li>SEO</li>
                  <li>User Experience</li>
                  <li>Digital Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-8 md:mb-10">
            Education & Certifications
          </h2>

          <div className="space-y-10 md:space-y-12">
            {/* Academlo */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                2023 - 2024
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  Academlo
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  Full-Stack Web Development & Computer Science
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Ciudad de México • Feb 2023 - 2024
                </p>
              </div>
            </div>

            {/* Academia 4.0 */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                2024 - 2025
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  Academia 4.0
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  English 4.0 Certification
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Costa Rica • Aug 2024 - 2025
                </p>
              </div>
            </div>

            {/* INA */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                2022 - 2023
              </div>
              <div>
                <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                  Instituto Nacional de Aprendizaje (INA)
                </h3>
                <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                  Customer Service Executive
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Costa Rica • Sep 2022 - 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Links Section */}
        <section className="ml-2 pb-10 sm:ml-0">
          <h2 className="text-base font-normal mb-8 md:mb-10">Links</h2>

          <div className="space-y-6">
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">LinkedIn</div>
              <Link
                href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group font-mono"
              >
                alvaro-aburto-dev
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Email</div>
              <Link
                href="mailto:alvaroaburto71@gmail.com"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group break-all font-mono"
              >
                alvaroaburto71@gmail.com
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Phone</div>
              <Link
                href="tel:+50664670470"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group font-mono"
              >
                6467-0470
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">GitHub</div>
              <Link
                href="https://github.com/LilDre7"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group font-mono"
              >
                @LilDre7
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
