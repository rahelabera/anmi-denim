"use client"

import { Box, Container, Stack, SimpleGrid, Text, Link as ChakraLink, Image, IconButton } from "@chakra-ui/react"
import Link from "next/link"
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

const MotionIconButton = motion(IconButton)

export default function Footer() {
  return (
    <Box bg="#000000" color="gray.200" mt="auto">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
          textAlign={{ base: "center", md: "left" }} // Center on mobile
          justifyItems={{ base: "center", md: "start" }} // Center items on mobile
        >
          {/* Logo & Social */}
          <Stack spacing={6} align={{ base: "center", md: "flex-start" }}>
            <Box mx={{ base: "auto", md: "0" }}>
              <Image
                src="/logo.png"
                alt="ANMI Denim Logo"
                h="40px"
                objectFit="contain"
                fallbackSrc="/placeholder.svg?height=40&width=120"
              />
            </Box>
            <Text fontSize="sm">
              Premium denim products made in Ethiopia. Crafted with quality since 2024.
            </Text>
            <Stack direction="row" spacing={4} justify={{ base: "center", sm: "flex-start" }}>
              <MotionIconButton
                as="a"
                href="https://x.com/anmidenim"
                target="_blank"
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <MotionIconButton
                as="a"
                href="https://facebook.com/anmidenim"
                target="_blank"
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <MotionIconButton
                as="a"
                href="https://instagram.com/anmidenim"
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <MotionIconButton
                as="a"
                href="https://linkedin.com/company/anmidenim"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <MotionIconButton
                as="a"
                href="https://t.me/anmidenim"
                target="_blank"
                aria-label="Telegram"
                icon={<FaTelegram />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <MotionIconButton
                as="a"
                href="https://youtube.com/anmidenim"
                target="_blank"
                aria-label="YouTube"
                icon={<FaYoutube />}
                size="md"
                color="white"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                rounded="full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </Stack>
          </Stack>
          {/* Company Links */}
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2} color="white">
              Company
            </Text>
            <Link href="/about" passHref legacyBehavior>
              <ChakraLink _hover={{ color: "brand.500" }}>About Us</ChakraLink>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <ChakraLink _hover={{ color: "brand.500" }}>Contact Us</ChakraLink>
            </Link>
            <ChakraLink href="#" _hover={{ color: "brand.500" }}>
              Careers
            </ChakraLink>
            <ChakraLink href="#" _hover={{ color: "brand.500" }}>
              Press
            </ChakraLink>
          </Stack>
          {/* Contact Info */}
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2} color="white">
              Contact
            </Text>
            <Text>Phone: +251950040844</Text>
            <Text>Email: info@anmidenim.com</Text>
            <Text>Addis Ababa, Ethiopia</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={4} borderTopWidth={1} borderColor="gray.800">
        <Text pt={2} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} ANMI Denim. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}
