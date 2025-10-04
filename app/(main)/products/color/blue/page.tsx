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

// Minimal blue-only product data for this page
const products = [
  {
    id: "4",
    name: "Blue Slim Jeans",
    category: "Blue",
    style: "Slim",
    price: 1300,
    image: "/slimbluefront.png",
    isNew: true,
    isBestSeller: false,
    description: "Modern slim fit blue jeans with stretch comfort.",
  },
  {
    id: "2",
    name: "Blue Straight Jeans",
    category: "Blue",
    style: "Straight",
    price: 1300,
    image: "/straightfold.jpg",
    isNew: false,
    isBestSeller: true,
    description: "Traditional straight fit blue jeans for everyday wear.",
  },
  {
    id: "6",
    name: "Blue Baggy Jeans",
    category: "Blue",
    style: "Baggy",
    price: 1300,
    image: "/straightfold.jpg",
    isNew: false,
    isBestSeller: false,
    description: "Relaxed baggy fit blue jeans for a casual style.",
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

export default function BlueProductsPage() {
  return (
    <Box>
        <MotionBox bg="brand.500" color="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} px={{ base: 2, md: 4 }}>
                {/* left-padded wrapper so header is closer to the viewport left edge */}
                <Box maxW="container.md" ml={0} py={{ base: 4, md: 6 }} textAlign="left">
                  <MotionHeading as="h1" size="xl" mb={2} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
                    Blue Jeans
                  </MotionHeading>
                  <Text fontSize="md" maxW="lg">
                    A curated selection of our blue denim — timeless, versatile, and
            made to last.
                  </Text>
                </Box>
              </MotionBox>

      <Container maxW="container.xl" py={10}>
        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <MotionBox
              key={product.id}
              variants={itemVariants}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box position="relative" h={{ base: "220px", md: "300px" }}>
                <MotionImage
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <HStack position="absolute" top={2} right={2} spacing={2}>
                  {product.isNew && (
                    <Badge
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
                      colorScheme="orange"
                      variant="solid"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
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
        </MotionBox>
      </Container>
    </Box>
  );
}
