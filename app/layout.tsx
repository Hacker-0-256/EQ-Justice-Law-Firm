import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
      title: "EQ-Justice Law Firm - Redefining Legal Excellence in Rwanda",
  description:
    "Premier law firm in Rwanda offering world-class legal services across 14+ practice areas. Cultivating top legal minds since 2023.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
