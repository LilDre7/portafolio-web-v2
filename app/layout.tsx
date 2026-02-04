import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Alvaro Aburto - Developer",
  description: "Full-Stack Developer focused on creating scalable and efficient web solutions using technologies like JavaScript, Python, React, and Node.js, emphasizing user experience and development best practices.",
  generator: "v0.app",
  icons: {
    icon: "logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">

        {children}
        <Analytics />
      </body>
    </html>
  )
}
