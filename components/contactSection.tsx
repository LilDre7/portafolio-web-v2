"use client";
import Link from "next/link";

export default function ContactSection() {
  return (
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
  );
}
