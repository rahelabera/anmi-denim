import type React from "react"
import { Inter } from "next/font/google"
import { Providers } from "@/app/providers"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ANMI Denim | Crafted with Quality",
  description: "Premium denim products made in Ethiopia since 2024",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <Navbar />
          <SocialSidebar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
