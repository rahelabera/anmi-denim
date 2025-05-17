"use client"

import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Flex, Badge } from "@chakra-ui/react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiArrowRight } from "react-icons/fi"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)
const MotionButton = motion(Button)

// Sample featured products
const featuredProducts = [
  {
    id: "1",
    name: "Black Slim Jeans",
    category: "Black",
    style: "Slim",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Blue Straight Jeans",
    category: "Blue",
    style: "Straight",
    price: 119.99,
    image: "/placeholder.svg?height=600&width=400",
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Black Baggy Jeans",
    category: "Black",
    style: "Baggy",
    price: 139.99,
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Box py={16} bg="gray.50" ref={ref}>
      <Container maxW="container.xl">
        <MotionFlex
          direction="column"
          align="center"
          mb={12}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <MotionHeading
            as="h2"
            size="xl"
            mb={4}
            textAlign="center"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
          >
            Our Premium Collection
          </MotionHeading>
          <MotionText fontSize="lg" textAlign="center" maxW="2xl" color="gray.600">
            Every pair of ANMI jeans is crafted with meticulous care and high-quality materials. Explore our featured
            products below.
          </MotionText>
        </MotionFlex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {featuredProducts.map((product, index) => (
            <MotionBox
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/products/${product.id}`} passHref>
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  bg="white"
                  boxShadow="md"
                  transition="all 0.3s"
                  _hover={{ boxShadow: "xl" }}
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Box position="relative" h="300px">
                    <MotionImage
                      src={product.image}
                      alt={product.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    {product.isNew && (
                      <Badge
                        position="absolute"
                        top={4}
                        left={4}
                        colorScheme="green"
                        variant="solid"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        New
                      </Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge
                        position="absolute"
                        top={4}
                        left={product.isNew ? 16 : 4}
                        colorScheme="orange"
                        variant="solid"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        Best Seller
                      </Badge>
                    )}
                  </Box>
                  <Flex direction="column" p={5} flex="1">
                    <Heading as="h3" size="md" mb={2} _groupHover={{ color: "brand.500" }} transition="color 0.3s">
                      {product.name}
                    </Heading>
                    <Text color="gray.600" mb={2}>
                      {product.category} • {product.style}
                    </Text>
                    <Text fontWeight="bold" color="brand.500" fontSize="xl" mb={4}>
                      ${product.price.toFixed(2)}
                    </Text>
                    <MotionButton
                      mt="auto"
                      colorScheme="brand"
                      rightIcon={<FiArrowRight />}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                    </MotionButton>
                  </Flex>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </SimpleGrid>

        <MotionFlex
          justify="center"
          mt={12}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/products" passHref legacyBehavior>
            <MotionButton
              size="lg"
              colorScheme="brand"
              rightIcon={<FiArrowRight />}
              tabIndex={0}
              fontWeight="bold"
              px={6}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </MotionButton>
          </Link>
        </MotionFlex>
      </Container>
    </Box>
  )
}
