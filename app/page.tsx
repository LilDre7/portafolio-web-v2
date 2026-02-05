"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ProfileSection from "@/components/profile-section";
import Workexperince from "@/components/work-experience";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Education from "@/components/education";
import ContactSection from "@/components/contactSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // El useEffect es un hook de React que se usa para ejecutar una función cuando el componente se monta o se desmonta.
  // En este caso, se usa para agregar o remover la clase overflow-hidden del body cuando el modal está abierto o cerrado.
  // Esto es para evitar que el scroll se desplace cuando el modal está abierto.

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="hidden md:block ">
          <SmoothCursor />
        </div>
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
            className="text-sm text-white hover:text-white transition-colors p-2 border-white border-2 rounded-md"
          >
            Connect
          </button>
        </div>

        {isModalOpen && (
          // Aqui va el modal
          <div
            className={`fixed inset-0 z-50 flex items-start justify-center pt-4 sm:pt-[20vh] p-4 transition-opacity duration-300 ${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsModalOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsModalOpen(false);
              }
            }}
            tabIndex={-1}
            style={{
              background: '#000000',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div
              className={`relative w-full max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-hidden transition-all duration-500 ease-out ${isModalOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-8 scale-95 opacity-0"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Card principal */}
              <div className="relative bg-black backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white overflow-y-auto max-h-[90vh] sm:max-h-[80vh]">

                {/* Search bar - sticky en mobile */}
                <div className="sticky top-0 z-10 bg-black flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b-2 border-white/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search contact info..."
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none font-light min-w-0"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsModalOpen(false);
                      }
                    }}
                  />
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="p-1.5 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors hidden sm:block">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </button>
                    {/* Botón X para mobile */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-1.5 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors sm:hidden"
                      aria-label="Close"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    {/* Command F para desktop */}
                    <kbd className="px-2 py-0.5 bg-white/10 text-white/70 text-xs rounded border border-white/20 font-mono hidden sm:inline-block">
                      ⌘F
                    </kbd>
                  </div>
                </div>

                {/* Contenido scrollable */}
                <div className="overflow-y-auto">
                  {/* Filters */}
                  <div className="px-4 sm:px-5 py-3 border-b border-white/10">
                    <p className="text-xs text-white/50 mb-2 font-medium">I'm looking for...</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button className="px-2.5 sm:px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/20 transition-colors flex items-center gap-1.5 sm:gap-2">
                        <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Links
                        <span className="text-white/60">×</span>
                      </button>
                      <button className="px-2.5 sm:px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/20 transition-colors flex items-center gap-1.5 sm:gap-2">
                        <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Contact
                        <span className="text-white/60">×</span>
                      </button>
                      <button className="px-2.5 sm:px-3 py-1.5 hover:bg-white/10 text-white/60 text-xs rounded-lg transition-colors flex items-center gap-1.5">
                        More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Results section */}
                  <div className="px-4 sm:px-5 py-3 border-b border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-white/50 font-medium">Contact methods <span className="text-white/30">4</span></p>
                    </div>

                    <div className="space-y-1">
                      {/* LinkedIn */}
                      <Link
                        href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2.5 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">LinkedIn</p>
                          <p className="text-xs text-white/50 truncate">alvaro-aburto-dev</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <kbd className="px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded border border-white/20 font-mono">↵</kbd>
                        </div>
                        <button className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </Link>

                      {/* Email */}
                      <Link
                        href="mailto:alvaroaburto71@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2.5 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">Email</p>
                          <p className="text-xs text-white/50 truncate">alvaroaburto71@gmail.com</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-1 text-white/60 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[10px]">Verified</span>
                        </div>
                        <button className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </Link>

                      {/* Phone */}
                      <Link
                        href="tel:+50664670470"
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2.5 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">Phone</p>
                          <p className="text-xs text-white/50">+506 6467-0470</p>
                        </div>
                        <button className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </Link>

                      {/* GitHub */}
                      <Link
                        href="https://github.com/LilDre7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2.5 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">GitHub</p>
                          <p className="text-xs text-white/50">@LilDre7</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-1.5 text-white/60 flex-shrink-0">
                          <span className="text-xs">60 repos</span>
                        </div>
                        <button className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white transition-colors flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="px-4 sm:px-5 py-3 border-b border-white/10">
                    <p className="text-xs text-white/50 mb-2 font-medium">Quick actions</p>
                    <div className="space-y-1">
                      <Link
                        href="https://alvaro-aburto.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <span className="text-xs text-white">+</span>
                        </div>
                        <span className="text-sm text-white flex-1">View portfolio</span>
                        <kbd className="ml-auto px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded border border-white/20 font-mono hidden sm:inline-block flex-shrink-0">E</kbd>
                      </Link>
                      <button className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 hover:bg-white/10 rounded-lg transition-all duration-150 group border border-transparent hover:border-white/20">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20 flex-shrink-0">
                          <span className="text-xs text-white">+</span>
                        </div>
                        <span className="text-sm text-white flex-1 text-left">Download vCard</span>
                        <kbd className="ml-auto px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded border border-white/20 font-mono hidden sm:inline-block flex-shrink-0">S</kbd>
                      </button>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-4 sm:px-5 py-2.5 bg-white/5">
                    <div className="flex items-center justify-between text-[10px] text-white/40">
                      <div className="hidden sm:flex items-center gap-3">
                        <span>San José, Costa Rica</span>
                        <span>•</span>
                        <span>Full-Stack Developer</span>
                      </div>
                      <div className="flex sm:hidden items-center gap-2 w-full justify-center">
                        <span>Tap X to close</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 font-mono text-white/60">ESC</kbd>
                        <span>to close</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-xl mx-auto mt-3 px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-20">
          {/* Profile Section */}
          <ProfileSection />

          {/* About Section */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-base font-normal mb-4 md:mb-6">About</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-sm">
              Full-Stack developer with focus on frontend and scalable web
              application architecture. Experience in Java, Spring Boot, Node.js
              and React, applying good development practices, designing REST
              APIs and relational and NoSQL databases.
            </p>
          </section>

          {/* Work Experience Section */}
          <Workexperince />

          {/* Education & Certifications Section */}
          <Education />

          {/* Projects Section */}
          <Projects />

          {/* Skills Section */}
          <Skills />

          {/* Links Section */}
          <ContactSection />
        </main>
      </div>
    </>
  );
}
