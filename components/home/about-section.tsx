"use client"

import { Box, Container, SimpleGrid, Heading, Text, Stack, Link as ChakraLink, Icon, Image } from "@chakra-ui/react"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <Box bg="gray.50" py={16} ref={ref}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <MotionStack
            spacing={4}
            justifyContent="center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MotionHeading as="h2" size="xl" mb={4}>
              About ANMI Denim
            </MotionHeading>
            <MotionText fontSize="lg" color="gray.700">
              ANMI Denim was founded by Ananya and Mikias in 2024 in Addis Ababa, Ethiopia. We are dedicated to creating
              high-quality denim products that combine traditional craftsmanship with modern design. Our commitment to
              quality and Ethiopian craftsmanship sets us apart.
            </MotionText>
            <Link href="/about" passHref>
              <MotionBox
                as={ChakraLink}
                display="inline-flex"
                alignItems="center"
                color="brand.500"
                fontWeight="bold"
                _hover={{ textDecoration: "underline" }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Learn more about us
                <Icon as={FiArrowRight} ml={2} />
              </MotionBox>
            </Link>
          </MotionStack>
          <MotionBox
            position="relative"
            height={{ base: "300px", md: "auto" }}
            rounded="lg"
            overflow="hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MotionImage
              src="/placeholder.svg?height=600&width=800"
              alt="About ANMI Denim"
              objectFit="cover"
              w="100%"
              h="100%"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
