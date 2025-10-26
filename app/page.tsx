"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { JSX } from "react/jsx-runtime" // Added import for JSX

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    React: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    Vue: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h5l7 12 7-12h5L12 21z" />
        <path d="M7 3l5 8.5L17 3h3L12 17 4 3z" opacity="0.5" />
      </svg>
    ),
    TypeScript: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8M8 12h8M14 12h8" />
      </svg>
    ),
    JavaScript: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 16c0 1 1 2 2 2s2-1 2-2V8M14 16c0 1 1 2 2 2s2-1 2-2" />
      </svg>
    ),
    TailwindCSS: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2 0-3.3.7-4 2 1-.7 2.2-1 3.5-.8.8.2 1.3.7 2 1.3 1 1 2.2 2.2 4.5 2.2 2 0 3.3-.7 4-2-1 .7-2.2 1-3.5.8-.8-.2-1.3-.7-2-1.3-1-1-2.2-2.2-4.5-2.2zm-4 6c-2 0-3.3.7-4 2 1-.7 2.2-1 3.5-.8.8.2 1.3.7 2 1.3 1 1 2.2 2.2 4.5 2.2 2 0 3.3-.7 4-2-1 .7-2.2 1-3.5.8-.8-.2-1.3-.7-2-1.3-1-1-2.2-2.2-4.5-2.2z" />
      </svg>
    ),
    HTML: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l2 16 6 2 6-2 2-16z" />
        <path d="M8 8h8M8 12h8M8 16h8" />
      </svg>
    ),
    CSS: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l2 16 6 2 6-2 2-16z" />
        <path d="M9 9h6l-.5 5-2.5 1-2.5-1" />
      </svg>
    ),
    "Node.js": (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7z" />
      </svg>
    ),
    Express: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    Python: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-1.5 0-3 .5-3 2v3h6V8H9c-2 0-3 1-3 3v2c0 2 1 3 3 3h6c2 0 3-1 3-3V5c0-1.5-1.5-2-3-2h-3zm0 2a1 1 0 110 2 1 1 0 010-2z" />
        <path
          d="M12 22c1.5 0 3-.5 3-2v-3H9v1h6c2 0 3-1 3-3v-2c0-2-1-3-3-3H9c-2 0-3 1-3 3v6c0 1.5 1.5 2 3 2h3zm0-2a1 1 0 110-2 1 1 0 010 2z"
          opacity="0.5"
        />
      </svg>
    ),
    ".NET": (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 8l8 8M16 8l-8 8" />
      </svg>
    ),
    MongoDB: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3l-1 9h2l-1-9zM11 13v8h2v-8z" />
        <ellipse cx="12" cy="13" rx="4" ry="2" />
      </svg>
    ),
    PostgreSQL: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="10" r="7" />
        <path d="M12 17v4M9 19h6" />
      </svg>
    ),
    Git: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 6h8M6 8v8l10 2" />
      </svg>
    ),
    Docker: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="10" width="3" height="3" />
        <rect x="8" y="10" width="3" height="3" />
        <rect x="12" y="10" width="3" height="3" />
        <rect x="8" y="6" width="3" height="3" />
        <path d="M3 13h18c0 3-2 5-5 5H8c-3 0-5-2-5-5z" />
      </svg>
    ),
    WordPress: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
    Microsoft365: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h5l7 12 7-12h5L12 21z" />
      </svg>
    ),
    GoogleWorkspace: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 3l5 8.5L17 3h3L12 17 4 3z" opacity="0.5" />
      </svg>
    ),
  }

  return (
    icons[name] || (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  )
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-10">
        <span className="text-sm font-medium text-white">JS</span>
      </div>

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Connect
        </button>
      </div>

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-500 ${isModalOpen ? "opacity-100" : "opacity-0"} bg-black`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`w-full h-full flex flex-col items-center justify-center p-8 relative transition-all duration-700 ease-out ${
              isModalOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-full scale-95 opacity-0"
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
            <div className="absolute top-24 left-16 text-xs font-medium text-white/30">2022</div>
            <div className="absolute top-1/3 right-24 text-xs font-medium text-white/30">2024</div>
            <div className="absolute bottom-32 left-32 text-xs font-medium text-white/30">2025</div>

            {/* Diagonal lines */}
            <div className="absolute top-28 left-20 w-0.5 h-24 bg-white/20 -rotate-45"></div>
            <div className="absolute top-1/3 right-28 w-0.5 h-32 bg-white/20 rotate-45"></div>
            <div className="absolute bottom-36 left-36 w-0.5 h-20 bg-white/20 -rotate-45"></div>

            {/* Main content - huge brutalist typography */}
            <div className="relative z-10 w-full max-w-6xl space-y-0 leading-none">
              <Link
                href="https://www.linkedin.com/in/alvaro-aburto"
                target="_blank"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors"
              >
                LINKED
              </Link>

              <Link
                href="https://www.linkedin.com/in/alvaro-aburto"
                target="_blank"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors"
              >
                IN
              </Link>

              <Link
                href="mailto:alvaroaburto71@gmail.com"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors mt-4"
              >
                EMAIL
              </Link>

              <Link
                href="tel:+50664670470"
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black uppercase leading-[0.85] text-white hover:text-gray-400 transition-colors mt-4"
              >
                PHONE
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-20">
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
            <h1 className="text-2xl sm:text-3xl font-normal mb-1">Alvaro Aburto Ocampo</h1>
            <p className="text-gray-400 text-sm sm:text-base mb-1">Full-Stack Developer</p>
            <p className="text-gray-500 text-sm sm:text-base">Guanacaste, Playas del Coco · Costa Rica</p>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-4 md:mb-6">About</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Full-Stack Developer focused on creating scalable and efficient web solutions using technologies like
            JavaScript, Python, React, and Node.js, emphasizing user experience and development best practices.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-8 md:mb-10">Work Experience</h2>

          <div className="space-y-10 md:space-y-12">
            {/* Job 1 - Agency Design Dreams Studio */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Jan 2024 - Dec 2024</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
                  Full-Stack Developer – Agency Design Dreams Studio
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">
                  Developed custom web solutions for clients using React.js, Python, and WordPress. Implemented SEO
                  strategies and development best practices to optimize performance and usability. Designed RESTful
                  APIs, database structures, and scalable components for web and mobile projects.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">React.js • Python • WordPress • RESTful APIs • SEO</p>
              </div>
            </div>

            {/* Job 2 - Freelance Web Consultant */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Aug 2022 - Nov 2023</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
                  Freelance Web Consultant – Digital Tools & Development
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">
                  Advised small businesses on implementing digital tools. Developed customized websites and applications
                  prioritizing user experience. Maintained and optimized web pages for performance and SEO.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Web Development • SEO • User Experience • Digital Consulting
                </p>
              </div>
            </div>

            {/* Job 3 - COCO GYM FITNESS */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Aug 2023 - Nov 2024</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
                  In-House Web Developer – COCO GYM FITNESS
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">
                  Developed the official gym website as a personal initiative to improve its digital presence. Used
                  React, TailwindCSS, Material UI, Node.js, and SQL to create a modern and responsive interface.
                  Implemented contact forms and informative sections for client interaction.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">React • TailwindCSS • Material UI • Node.js • SQL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-8 md:mb-10">Education & Certifications</h2>

          <div className="space-y-10 md:space-y-12">
            {/* Academlo */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">2023 - 2024</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">Academlo</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">
                  Full-Stack Web Development & Computer Science
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Ciudad de México • Feb 2023 - 2024</p>
              </div>
            </div>

            {/* Academia 4.0 */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">2024 - 2025</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">Academia 4.0</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">English 4.0 Certification</p>
                <p className="text-gray-500 text-xs sm:text-sm">Costa Rica • Aug 2024 - 2025</p>
              </div>
            </div>

            {/* INA */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">2022 - 2023</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
                  Instituto Nacional de Aprendizaje (INA)
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">Customer Service Executive</p>
                <p className="text-gray-500 text-xs sm:text-sm">Costa Rica • Sep 2022 - 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-base font-normal mb-8 md:mb-10">Skills & Technologies</h2>

          <div className="space-y-10 md:space-y-12">
            {/* Languages */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm pt-1">Languages</div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="React" />
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Vue" />
                  Vue
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="TypeScript" />
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="JavaScript" />
                  JavaScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="TailwindCSS" />
                  TailwindCSS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="HTML" />
                  HTML
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="CSS" />
                  CSS
                </span>
              </div>
            </div>

            {/* Backend - Added icons to each technology tag */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm pt-1">Backend</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Node.js" />
                  Node.js
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Express" />
                  Express
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Python" />
                  Python
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name=".NET" />
                  .NET
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="MongoDB" />
                  MongoDB
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="PostgreSQL" />
                  PostgreSQL
                </span>
              </div>
            </div>

            {/* Tools - Added icons to each technology tag */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm pt-1">Tools</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Git" />
                  Git
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Docker" />
                  Docker
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="WordPress" />
                  WordPress
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="Microsoft365" />
                  Microsoft 365
                </span>
                <span className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded flex items-center gap-1.5">
                  <TechIcon name="GoogleWorkspace" />
                  Google Workspace
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section>
          <h2 className="text-base font-normal mb-8 md:mb-10">Links</h2>

          <div className="space-y-6">
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">LinkedIn</div>
              <Link
                href="https://www.linkedin.com/in/alvaro-aburto"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group"
              >
                LinkedIn Profile
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Email</div>
              <Link
                href="mailto:alvaroaburto71@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group break-all"
              >
                alvaroaburto71@gmail.com
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm">Phone</div>
              <Link
                href="tel:+50664670470"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base hover:text-gray-300 group"
              >
                6467-0470
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
