"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionSimpleGrid = motion(SimpleGrid);

// Minimal black-only product data for this page
const products = [
  {
    id: "1",
    name: "Black Slim Jeans",
    category: "Black",
    style: "Slim",
    price: 1300,
    image: "/slimblackfold.jpg",
    isNew: true,
    isBestSeller: false,
    description: "Classic black slim fit jeans with a modern cut.",
  },
  {
    id: "3",
    name: "Black Baggy Jeans",
    category: "Black",
    style: "Baggy",
    price: 1300,
    image: "/slimblackfold.jpg",
    isNew: false,
    isBestSeller: false,
    description: "Relaxed baggy fit black jeans for maximum comfort.",
  },
  {
    id: "5",
    name: "Black Straight Jeans",
    category: "Black",
    style: "Straight",
    price: 1300,
    image: "/slimblackfold.jpg",
    isNew: false,
    isBestSeller: true,
    description: "Classic straight fit black jeans for a timeless look.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function BlackProductsPage() {
  return (
    <Box>
      <MotionBox bg="brand.500" color="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} px={{ base: 2, md: 4 }}>
        {/* left-padded wrapper so header is closer to the viewport left edge */}
        <Box maxW="container.md" ml={0} py={{ base: 4, md: 6 }} textAlign="left">
          <MotionHeading as="h1" size="xl" mb={2} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            Black Jeans
          </MotionHeading>
          <Text fontSize="md" maxW="lg">
            Our black denim selection—versatile, edgy, and built for everyday wear.
          </Text>
        </Box>
      </MotionBox>

      <Container maxW="container.xl" py={10}>
        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <MotionBox key={product.id} variants={itemVariants} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box position="relative" h={{ base: "220px", md: "300px" }}>
                <MotionImage src={product.image} alt={product.name} objectFit="cover" w="100%" h="100%" />
                <HStack position="absolute" top={2} right={2} spacing={2}>
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
                </HStack>
              </Box>
              <Box p={4}>
                <Heading size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text noOfLines={2} mb={3} fontSize="sm">
                  {product.description}
                </Text>
                <Text fontWeight="bold" color="brand.500">
                  {product.price.toFixed(2)} ETB
                </Text>
              </Box>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}
