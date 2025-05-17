"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
})

export default function ChakraClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <div className={inter.variable}>{children}</div>
    </ChakraProvider>
  )
}