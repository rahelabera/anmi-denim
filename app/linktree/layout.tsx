import type { Metadata } from "next"
import ChakraClientProvider from "./ChakraClientProvider"

export const metadata: Metadata = {
  title: "ANMI Denim | Social Links",
  description: "Connect with ANMI Denim on social media",
}

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Only wrap with ChakraClientProvider, no navbar/sidebar/footer here!
  return <ChakraClientProvider>{children}</ChakraClientProvider>
}