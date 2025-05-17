"use client"

import { Box, IconButton, VStack, Tooltip } from "@chakra-ui/react"
import { FaTwitter, FaInstagram, FaFacebook, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

const MotionIconButton = motion(IconButton)

export default function SocialSidebar() {
  const socialLinks = [
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
    <Box
      position="fixed"
      right={0}
      top="50%"
      transform="translateY(-50%)"
      zIndex={10}
      boxShadow="md"
      borderLeftRadius="md"
      py={3}
      px={2}
      display={{ base: "none", md: "block" }}
    >
      <VStack spacing={3}>
        {socialLinks.map((link, index) => (
          <Tooltip key={link.name} label={link.name} placement="left" hasArrow>
            <MotionIconButton
              as="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              icon={<link.icon />}
              size="md"
              color="white"
              bg={link.color}
              _hover={{ bg: link.color, opacity: 0.9 }}
              rounded="full"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          </Tooltip>
        ))}
      </VStack>
    </Box>
  )
}