"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { JSX } from "react/jsx-runtime" // Added import for JSX
import imageToAdd from "/public/favcon.png";
import { useEffect } from "react"

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
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-typescript" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm-1.139 7.488q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518M7 7.596v1.113h1.3V14.5h1.221V8.709h1.289V7.596z"/>
</svg>

    ),
    JavaScript: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-javascript" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"/>
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
     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-server" viewBox="0 0 16 16">
  <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"/>
  <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z"/>
  <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z"/>
</svg>
    ),
    Git: (
     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-git" viewBox="0 0 16 16">
  <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-wordpress" viewBox="0 0 16 16">
  <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137 6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/>
  <path d="M6.061 14.583 8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
  <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.59 8-8 8-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8"/>
</svg>
    ),
    Microsoft365: (
     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
  <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
</svg>
    ),
    GoogleWorkspace: (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
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

  useEffect(() => {
  if (isModalOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}, [isModalOpen]);


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-10">
        <span className="text-sm font-medium text-white"> <img width={30} height={30} src="/avatar.jpg" className="rounded-full" alt="Image" /> </span>
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
          className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${isModalOpen ? "opacity-100" : "opacity-0"} bg-black`}
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
      <main className="max-w-xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-20">
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
            <p className="text-gray-400 text-sm sm:text-base mb-1">Full-Stack Developer <span className="opacity-75 text-center text-gray-500 text-xs">+2 experience</span> </p>
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
                <ul className="text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
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
                 <ul className="text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
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
              <div className="text-gray-500 text-xs sm:text-sm">Aug 2022 - Nov 2023</div> 
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">
                  Freelance Web Consultant – Digital Tools & Development
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">
                  Advised small businesses on implementing digital tools. Developed customized websites and applications
                  prioritizing user experience. Maintained and optimized web pages for performance and SEO.
                </p>
                      <ul className="text-gray-500 text-xs sm:text-sm flex flex-wrap gap-3">
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
          <h2 className="text-base font-normal mb-8 md:mb-10">Education & Certifications</h2>

          <div className="space-y-10 md:space-y-12">
            {/* Academlo */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">2023 - 2024</div>
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
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">2024 - 2025</div>
              <div>
                <h3 className="font-normal text-sm sm:text-base mb-2 md:mb-3">Academia 4.0</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 md:mb-4">English 4.0 Certification</p>
                <p className="text-gray-500 text-xs sm:text-sm">Costa Rica • Aug 2024 - 2025</p>
              </div>
            </div>

            {/* INA */}
            <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
              <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">2022 - 2023</div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
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
