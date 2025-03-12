"use client"

import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

// Updated categories to focus on denim types with links to detailed pages
const categories = [
  { name: "Raw Denim", slug: "raw-denim" },
  { name: "Selvage Denim", slug: "selvage-denim" },
  { name: "Stretch Denim", slug: "stretch-denim" },
  { name: "Acid Wash Denim", slug: "acid-wash-denim" },
]

export default function CategoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Box py={16} ref={ref}>
      <Container maxW="container.xl">
        <MotionHeading
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Shop by Denim Type
        </MotionHeading>
        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <MotionBox key={category.name} variants={itemVariants}>
              <Link href={`/denim-types/${category.slug}`} passHref>
                <MotionBox
                  as="a"
                  position="relative"
                  height="250px"
                  rounded="lg"
                  overflow="hidden"
                  role="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box position="relative" w="100%" h="100%">
                    <MotionBox
                      as="img"
                      src="/placeholder.svg?height=400&width=300"
                      alt={category.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Box
                      position="absolute"
                      inset={0}
                      bg="blackAlpha.600"
                      transition="background 0.3s"
                      _hover={{ bg: "blackAlpha.500" }}
                    />
                    <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center">
                      <MotionText
                        fontSize="2xl"
                        fontWeight="bold"
                        color="white"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.name}
                      </MotionText>
                    </Box>
                  </Box>
                </MotionBox>
              </Link>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  )
}

