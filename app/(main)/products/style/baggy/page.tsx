"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Local sample data (baggy-only products)
const products = [
  {
    id: "3",
    name: "Black Baggy Jeans",
    category: "Black",
    style: "Baggy",
    price: 1300,
    image: "/slimblackfold.jpg",
    description: "Relaxed baggy fit black jeans for maximum comfort.",
  },
  {
    id: "6",
    name: "Blue Baggy Jeans",
    category: "Blue",
    style: "Baggy",
    price: 1300,
    image: "/straightfold.jpg",
    description: "Relaxed baggy fit blue jeans for a casual style.",
  },
];

export default function ProductsPage() {
  const baggyProducts = products;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <Box>
      
      <MotionBox bg="brand.500" color="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} px={{ base: 2, md: 4 }}>
                      {/* left-padded wrapper so header is closer to the viewport left edge */}
                      <Box maxW="container.md" ml={0} py={{ base: 4, md: 6 }} textAlign="left">
                        <MotionHeading as="h1" size="xl" mb={2} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
                          Baggy Jeans
                        </MotionHeading>
                        <Text fontSize="md" maxW="lg">
                          Our baggy collection emphasizes comfort with a relaxed silhouette
              ideal for casual wear.
                        </Text>
                      </Box>
                    </MotionBox>

      <Container maxW="container.xl" py={10}>
        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {baggyProducts.map((product) => (
            <MotionBox
              key={product.id}
              variants={itemVariants}
              whileHover={{ translateY: -6 }}
            >
              <Link href={`/products/${product.id}`} passHref>
                <Box
                  as="a"
                  display="block"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Box position="relative" h={{ base: "220px", md: "320px" }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box p={4}>
                    <Heading as="h3" size="md" mb={2}>
                      {product.name}
                    </Heading>
                    <Flex gap={2} mb={3} color="gray.600" fontSize="sm">
                      <Text>{product.category}</Text>
                      <Text>•</Text>
                      <Text>{product.style}</Text>
                    </Flex>
                    <Text noOfLines={2} mb={3} fontSize="sm">
                      {product.description}
                    </Text>
                    <Text fontWeight="bold" color="brand.500">
                      {product.price.toFixed(2)} ETB
                    </Text>
                  </Box>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
