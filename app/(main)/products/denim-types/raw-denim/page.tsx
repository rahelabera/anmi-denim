"use client"

import { Box, Container, Heading, Text, SimpleGrid, Flex, Badge, Button, Image } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

// Sample product data for raw denim
const rawDenimProducts = [
  {
    id: "1",
    name: "Classic Raw Denim Jeans",
    image: "/placeholder.svg?height=600&width=400",
    price: "$129.99",
    description: "Unwashed, untreated denim with a rigid feel and deep indigo color.",
    isNew: true,
  },
  {
    id: "7",
    name: "Premium Raw Selvedge Jeans",
    image: "/placeholder.svg?height=600&width=400",
    price: "$149.99",
    description: "Unwashed premium denim with authentic selvage edges.",
    isBestSeller: true,
  },
  {
    id: "12",
    name: "Japanese Raw Denim",
    image: "/placeholder.svg?height=600&width=400",
    price: "$189.99",
    description: "Premium Japanese raw denim with exceptional craftsmanship.",
  },
]

export default function RawDenimPage() {
  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        bg="brand.500"
        py={16}
        color="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxW="container.xl">
          <MotionHeading
            as="h1"
            size="2xl"
            mb={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Raw Denim
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Premium unwashed denim that develops unique character and fades over time.
          </MotionText>
        </Container>
      </MotionBox>

      {/* Description Section */}
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h2" size="xl" mb={6}>
              What is Raw Denim?
            </Heading>
            <Text fontSize="lg" mb={4}>
              Raw denim, also known as dry denim, refers to jeans made from denim fabric that hasn't undergone any
              pre-washing, pre-distressing, or chemical treatment processes after being dyed and woven.
            </Text>
            <Text fontSize="lg" mb={4}>
              When you purchase raw denim jeans, they typically feel stiff and have a uniform, deep indigo color. Over
              time, as you wear them, they mold to your body and develop unique fade patterns based on your lifestyle
              and movements.
            </Text>
            <Text fontSize="lg">
              Raw denim enthusiasts appreciate the personalized wear patterns, superior durability, and the way these
              jeans tell a story of their daily lives through their evolution over time.
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Raw Denim Texture"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="100%"
              maxH="400px"
            />
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* Featured Products */}
      <Box py={12} bg="gray.50">
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Featured Raw Denim Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {rawDenimProducts.map((product, index) => (
              <MotionBox
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                      />
                      <Flex position="absolute" top={2} right={2} gap={2}>
                        {product.isNew && (
                          <Badge colorScheme="green" variant="solid" px={2} py={1} borderRadius="full">
                            New
                          </Badge>
                        )}
                        {product.isBestSeller && (
                          <Badge colorScheme="orange" variant="solid" px={2} py={1} borderRadius="full">
                            Best Seller
                          </Badge>
                        )}
                      </Flex>
                    </Box>
                    <Flex direction="column" p={5} flex="1">
                      <Heading as="h3" size="md" mb={2} transition="color 0.3s">
                        {product.name}
                      </Heading>
                      <Text color="gray.600" mb={2} fontSize="sm">
                        {product.description}
                      </Text>
                      <Text fontWeight="bold" color="brand.500" fontSize="xl" mb={4}>
                        {product.price}
                      </Text>
                      <Box mt="auto">
                        <Button colorScheme="brand" rightIcon={<FiArrowRight />} width="full">
                          View Details
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>
          <Flex justify="center" mt={10}>
            <Link href="/products" passHref>
              <Button as="a" colorScheme="brand" size="lg">
                View All Products
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Care Instructions */}
      <Container maxW="container.xl" py={12}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          How to Care for Raw Denim
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="lg" mb={4}>
              <strong>Minimal Washing:</strong> Raw denim enthusiasts recommend washing your jeans as infrequently as
              possible—some even suggest waiting 6 months before the first wash to allow for optimal fading patterns.
            </Text>
            <Text fontSize="lg" mb={4}>
              <strong>Hand Washing:</strong> When you do wash, turn your jeans inside out and hand wash them in cold
              water with a small amount of mild detergent. Avoid harsh chemicals and fabric softeners.
            </Text>
            <Text fontSize="lg">
              <strong>Air Drying:</strong> Never machine dry raw denim. Instead, hang them to air dry, preferably in the
              shade to prevent color fading from direct sunlight.
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>
              <strong>Spot Cleaning:</strong> For small stains, try spot cleaning with a damp cloth rather than washing
              the entire garment.
            </Text>
            <Text fontSize="lg" mb={4}>
              <strong>Odor Control:</strong> To freshen up your jeans between washes, hang them outside in fresh air or
              freeze them overnight to kill odor-causing bacteria.
            </Text>
            <Text fontSize="lg">
              <strong>Storage:</strong> Store your raw denim hanging or folded, away from direct sunlight to prevent
              uneven fading when not being worn.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
