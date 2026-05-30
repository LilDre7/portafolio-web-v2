"use client";

import Link from "next/link";

interface ContactLink {
  id: string;
  href: string;
  label: string;
  value: string;
  labelSide: "left" | "right";
  isExternal?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/alvaro-aburto-dev/",
    label: "LinkedIn",
    value: "alvaro-aburto-dev",
    labelSide: "right",
    isExternal: true,
  },
  {
    id: "email",
    href: "mailto:alvaroaburto71@gmail.com",
    label: "Email",
    value: "alvaroaburto71@gmail.com",
    labelSide: "left",
  },
  {
    id: "phone",
    href: "tel:+50664670470",
    label: "Phone",
    value: "6467-0470",
    labelSide: "right",
  },
  {
    id: "github",
    href: "https://github.com/LilDre7",
    label: "Github",
    value: "@LilDre7",
    labelSide: "left",
    isExternal: true,
  },
];

function Connector({ side }: { side: "left" | "right" }) {
  return (
    <span className="relative h-8 sm:h-10" aria-hidden="true">
      <span
        className={`absolute top-1/2 h-px w-4 sm:w-6 -translate-y-1/2 bg-gray-300 ${
          side === "left" ? "right-1/2" : "left-1/2"
        }`}
      />
    </span>
  );
}

export default function ContactSection() {
  return (
    <section className="ml-2 pb-10 sm:ml-0">
      <h2 className="mb-8 text-base font-normal md:mb-10">Links</h2>

      <div className="relative max-w-[520px] font-mono text-[10px] font-semibold tracking-wide text-gray-100 sm:text-sm">
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300"
          aria-hidden="true"
        />

        <div className="space-y-1">
          {contactLinks.map((contact) => {
            const label = `( ${contact.label} )`;
            const leftText =
              contact.labelSide === "left" ? label : contact.value;
            const rightText =
              contact.labelSide === "right" ? label : contact.value;

            return (
              <Link
                key={contact.id}
                href={contact.href}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-[minmax(0,1fr)_34px_minmax(0,1fr)] items-center sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)]"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <span className="truncate pr-3 text-right transition-colors group-hover:text-white sm:pr-5">
                  {leftText}
                </span>

                <Connector side={contact.labelSide} />

                <span className="truncate pl-3 transition-colors group-hover:text-white sm:pl-5">
                  {rightText}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
