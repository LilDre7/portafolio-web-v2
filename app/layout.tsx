import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Alvaro Aburto - Developer",
  description: "Full-Stack Developer focused on creating scalable and efficient web solutions using technologies like JavaScript, Python, React, and Node.js, emphasizing user experience and development best practices.",
  generator: "v0.app",
  icons: {
    icon: "avatar.png",
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
