"use client"

import { Box, VStack, Button, Text, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaTwitter, FaInstagram, FaFacebook, FaTelegram, FaGlobe, FaYoutube, FaLinkedin } from "react-icons/fa"

const MotionBox = motion(Box)
const MotionButton = motion(Button)

export default function LinktreePage() {
  const socialLinks = [
    {
      name: "Website",
      url: "https://anmidenim.com",
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

  return (
    <>
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
              ANMI Denim
            </Text>
            <Text fontSize="lg" color="gray.600">
              Crafted with Quality - Premium denim products made in Ethiopia
            </Text>
          </MotionBox>

          <VStack spacing={4} w="full" maxW="md" mx="auto">
            {socialLinks.map((link, index) => (
              <MotionBox
                key={link.name}
                w="full"
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
          </VStack>

          <MotionBox
            mt={12}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            textAlign="center"
          >
            <Text fontSize="sm" color="gray.500">
              © {new Date().getFullYear()} ANMI Denim. All rights reserved.
            </Text>
          </MotionBox>
        </Box>
      </Box>
    </>
  )
}