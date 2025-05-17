"use client"

import { Box, Container, Heading, SimpleGrid, Text, VStack, Divider } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

// Product categories
const productCategories = {
  Color: [
    { name: "Black", slug: "color/black" },
    { name: "Blue", slug: "color/blue" },
  ],
  Style: [
    { name: "Slim", slug: "style/slim" },
    { name: "Straight", slug: "style/straight" },
    { name: "Baggy", slug: "style/baggy" },
  ],
}

export default function CategoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
          Shop by Category
        </MotionHeading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {Object.entries(productCategories).map(([category, items]) => (
            <MotionBox
              key={category}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" bg="white">
                <Heading size="lg" mb={4} color="brand.500">
                  {category}
                </Heading>
                <Divider mb={4} />
                <VStack align="stretch" spacing={4}>
                  {items.map((item) => (
                    <Link key={item.slug} href={`/products/${item.slug}`} passHref>
                      <MotionBox
                        as="a"
                        p={4}
                        borderRadius="md"
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        whileHover={{ y: -2, boxShadow: "md" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Text fontSize="lg" fontWeight="medium">
                          {item.name}
                        </Text>
                      </MotionBox>
                    </Link>
                  ))}
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
