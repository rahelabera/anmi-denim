"use client"

import { Box, SimpleGrid, Button, Text, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaTwitter, FaInstagram, FaFacebook, FaTelegram, FaGlobe, FaYoutube, FaLinkedin } from "react-icons/fa"

const MotionBox = motion(Box)
const MotionButton = motion(Button)

const socialLinks = [
  {
    name: "Website",
    url: "https://anmi-denim.vercel.app/",
    icon: FaGlobe,
    color: "#E05038",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/anmidenim",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/anmidenim",
    icon: FaTwitter,
    color: "#000000",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/anmidenim",
    icon: FaFacebook,
    color: "#1877F2",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/anmidenim",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "Telegram",
    url: "https://t.me/anmidenim",
    icon: FaTelegram,
    color: "#0088cc",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/anmidenim",
    icon: FaYoutube,
    color: "#FF0000",
  },
]

export default function LinktreePage() {
  // Separate website from other links
  const websiteLink = socialLinks.find(link => link.name === "Website")
  const otherLinks = socialLinks.filter(link => link.name !== "Website")

  return (
    <Box minH="100vh" py={10} bg="gray.50">
      <Box maxW="container.sm" mx="auto" px={4}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          mb={8}
        >
          <Image
            src="/logo.png"
            alt="ANMI Denim Logo"
            h="80px"
            objectFit="contain"
            fallbackSrc="/placeholder.svg?height=80&width=200"
            mx="auto"
            mb={4}
          />
          <Text as="h1" fontSize="3xl" fontWeight="bold" mb={2}>
            Crafted With Quality
          </Text>
          <Text fontSize="lg" color="gray.600">
            Premium Denim Products Made in Ethiopia
          </Text>
        </MotionBox>

        {/* Website button at the top, centered */}
        {websiteLink && (
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            mb={6}
            display="flex"
            justifyContent="center"
          >
            <MotionButton
              as="a"
              href={websiteLink.url}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<websiteLink.icon />}
              size="lg"
              bg={websiteLink.color}
              color="white"
              _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
              _active={{ transform: "scale(0.98)" }}
              boxShadow="md"
              transition="all 0.2s"
              w={{ base: "full", sm: "auto" }}
            >
              {websiteLink.name}
            </MotionButton>
          </MotionBox>
        )}

        {/* Other social links in a grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} w="full" maxW="md" mx="auto">
          {otherLinks.map((link, index) => (
            <MotionBox
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <MotionButton
                as="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<link.icon />}
                size="lg"
                w="full"
                bg={link.color}
                color="white"
                _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
                _active={{ transform: "scale(0.98)" }}
                boxShadow="md"
                transition="all 0.2s"
              >
                {link.name}
              </MotionButton>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}