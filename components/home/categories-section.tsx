"use client"

import { Box, Container, Heading, SimpleGrid, Text, Image, Flex, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiArrowRight } from "react-icons/fi"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionFlex = motion(Flex)
const MotionText = motion(Text)
const MotionImage = motion(Image)

// Product categories
const productCategories = [
  {
    title: "Color",
    items: [
      { name: "Black", slug: "color/black", image: "/placeholder.svg?height=400&width=300" },
      { name: "Blue", slug: "color/blue", image: "/placeholder.svg?height=400&width=300" },
    ],
  },
  {
    title: "Style",
    items: [
      { name: "Slim", slug: "style/slim", image: "/placeholder.svg?height=400&width=300" },
      { name: "Straight", slug: "style/straight", image: "/placeholder.svg?height=400&width=300" },
      { name: "Baggy", slug: "style/baggy", image: "/placeholder.svg?height=400&width=300" },
    ],
  },
]

export default function CategoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Box py={16} bg="white" ref={ref}>
      <Container maxW="container.xl">
        <MotionHeading
          textAlign="center"
          mb={4}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          bgGradient="linear(to-r, brand.400, brand.600)"
          bgClip="text"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          Shop by Category
        </MotionHeading>
        <MotionText
          textAlign="center"
          mb={12}
          maxW="2xl"
          mx="auto"
          color="gray.600"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our premium denim collection by color or style to find your perfect fit
        </MotionText>

        {productCategories.map((category, categoryIndex) => (
          <Box key={category.title} mb={categoryIndex < productCategories.length - 1 ? 16 : 0}>
            <MotionHeading
              size="lg"
              mb={6}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              {category.title}
            </MotionHeading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: category.items.length }} spacing={8}>
              {category.items.map((item, itemIndex) => (
                <MotionBox
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + itemIndex * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/products/${item.slug}`} passHref>
                    <Box
                      position="relative"
                      h="300px"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="lg"
                      transition="all 0.3s"
                      _hover={{ boxShadow: "2xl" }}
                    >
                      <MotionImage
                        src={item.image}
                        alt={item.name}
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
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        p={6}
                      >
                        <MotionHeading
                          color="white"
                          size="lg"
                          mb={2}
                          textShadow="0px 2px 4px rgba(0, 0, 0, 0.3)"
                          whileHover={{ color: "#E05038" }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.name}
                        </MotionHeading>
                        <MotionFlex
                          align="center"
                          color="white"
                          fontWeight="medium"
                          whileHover={{ x: 5, color: "#E05038" }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text>Shop Now</Text>
                          <Icon as={FiArrowRight} ml={2} />
                        </MotionFlex>
                      </Box>
                    </Box>
                  </Link>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Container>
    </Box>
  )
}
