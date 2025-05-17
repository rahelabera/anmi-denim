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

export const metadata = {
  title: "ANMI Denim",
  icons: {
    icon: "/favicon.ico", 
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
