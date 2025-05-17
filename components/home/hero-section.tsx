"use client"

import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionStack = motion(Stack)
const MotionButton = motion(Button)

export default function HeroSection() {
  return (
    <Box
      position="relative"
      height="70vh"
      bgImage="url('/placeholder.svg?height=1080&width=1920')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box position="absolute" inset={0} bg="blackAlpha.600" />
      <Container maxW="container.xl" height="100%">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 36 }}
          position="relative"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <MotionHeading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight="110%"
            color="white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Premium Denim Products
          </MotionHeading>
          <MotionText
            color="white"
            maxW="2xl"
            fontSize={{ base: "lg", md: "xl" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafted with quality and style for the modern lifestyle
          </MotionText>
          <MotionStack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/products" passHref>
              <MotionButton
                as="a"
                colorScheme="brand"
                rounded="md"
                size="lg"
                fontWeight="bold"
                px={6}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </MotionButton>
            </Link>
            <Link href="/contact" passHref>
              <MotionButton
                as="a"
                variant="outline"
                rounded="md"
                size="lg"
                fontWeight="bold"
                px={6}
                color="white"
                borderColor="white"
                _hover={{ bg: "whiteAlpha.200" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </MotionButton>
            </Link>
          </MotionStack>
        </Stack>
      </Container>
    </Box>
  )
}
