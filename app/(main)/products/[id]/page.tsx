"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Flex,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Divider,
  useNumberInput,
  HStack,
  Input,
  IconButton,
} from "@chakra-ui/react"
import { FiMinus, FiPlus, FiCheck, FiHeart, FiShare2 } from "react-icons/fi"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { use } from "react"

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)

// Define the type for the page props
interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

// Sample product data
const products = [
  {
    id: "1",
    name: "Classic Raw Denim Jeans",
    category: "Raw Denim",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=400",
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    description:
      "Our classic raw denim jeans are crafted from premium unwashed, untreated denim. These jeans start off rigid and develop unique fade patterns based on your body and lifestyle. Made with 100% cotton 14oz Japanese selvedge denim.",
    features: [
      "100% cotton 14oz Japanese selvedge denim",
      "Button fly closure",
      "Five-pocket styling",
      "Leather patch at back waist",
      "Signature stitching on back pockets",
    ],
    sizing: "Fits true to size. Model is 6'1\" and wears size 32.",
    care: "Wash as infrequently as possible to preserve color and character. When necessary, wash inside out in cold water and hang dry.",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "2",
    name: "Selvage Straight Fit Jeans",
    category: "Selvage Denim",
    price: 149.99,
    image: "/placeholder.svg?height=600&width=400",
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    description:
      "Our selvage straight fit jeans feature premium selvage denim with a distinctive self-edge finish. These jeans offer a classic straight leg silhouette with a medium rise. Made with 13oz Japanese selvage denim with red ID.",
    features: [
      "13oz Japanese selvage denim with red ID",
      "Button fly closure",
      "Five-pocket styling",
      "Straight leg silhouette",
      "Medium rise",
    ],
    sizing: "Fits true to size. Model is 6'0\" and wears size 31.",
    care: "Wash inside out in cold water. Hang dry to maintain structure and prevent shrinkage.",
    isNew: false,
    isBestSeller: true,
  },
  // Add more products as needed
]

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 10,
    onChange: (valueAsString, valueAsNumber) => setQuantity(valueAsNumber),
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  if (!product) {
  return (
      <Container maxW="container.xl" py={16}>
        <Heading>Product Not Found</Heading>
        <Text mt={4}>The product you're looking for doesn't exist.</Text>
        <Button as={Link} href="/products" colorScheme="brand" mt={8}>
          Back to Products
        </Button>
      </Container>
    )
  }

  const MotionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Box>
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Product Images */}
          <MotionBox initial="hidden" animate="visible" variants={MotionVariants} transition={{ duration: 0.5 }}>
            <Box position="relative" h={{ base: "300px", md: "500px" }} mb={4}>
              <MotionImage
                src={product.images[selectedImage]}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
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
            <Flex mt={4} gap={4}>
              {product.images.map((image, index) => (
                <MotionBox
                  key={index}
                  borderWidth={selectedImage === index ? "2px" : "1px"}
                  borderColor={selectedImage === index ? "brand.500" : "gray.200"}
                  borderRadius="md"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  h="80px"
                  w="80px"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    objectFit="cover"
                    h="100%"
                    w="100%"
                  />
                </MotionBox>
              ))}
            </Flex>
          </MotionBox>

          {/* Product Details */}
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={MotionVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h1" size="xl" mb={2}>
              {product.name}
            </Heading>
            <Link href={`/denim-types/${product.category.toLowerCase().replace(" ", "-")}`}>
              <Text
                color="brand.500"
                fontWeight="medium"
                mb={4}
                display="inline-block"
                _hover={{ textDecoration: "underline" }}
              >
                {product.category}
              </Text>
            </Link>
            <Text fontSize="2xl" fontWeight="bold" color="brand.500" mb={6}>
              ${product.price.toFixed(2)}
            </Text>
            <Text fontSize="lg" mb={6}>
              {product.description}
            </Text>

            {/* Quantity Selector */}
            <Box mb={6}>
              <Text fontWeight="medium" mb={2}>
                Quantity
              </Text>
              <HStack maxW="200px">
                <IconButton
                  {...dec}
                  aria-label="Decrease quantity"
                  icon={<FiMinus />}
                  colorScheme="gray"
                  variant="outline"
                />
                <Input {...input} textAlign="center" />
                <IconButton
                  {...inc}
                  aria-label="Increase quantity"
                  icon={<FiPlus />}
                  colorScheme="gray"
                  variant="outline"
                />
              </HStack>
            </Box>

            {/* Action Buttons */}
            <Flex gap={4} mb={8} flexWrap={{ base: "wrap", md: "nowrap" }}>
              <Button
                colorScheme="brand"
                size="lg"
                leftIcon={<FiCheck />}
                flex={{ base: "1 0 100%", md: 2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={MotionBox}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                colorScheme="brand"
                size="lg"
                leftIcon={<FiHeart />}
                flex={1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={MotionBox}
              >
                Wishlist
              </Button>
              <Button
                variant="outline"
                colorScheme="brand"
                size="lg"
                leftIcon={<FiShare2 />}
                flex={1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={MotionBox}
              >
                Share
              </Button>
            </Flex>

            <Divider my={6} />

            {/* Product Tabs */}
            <Tabs colorScheme="brand" mt={6}>
              <TabList>
                <Tab>Features</Tab>
                <Tab>Sizing</Tab>
                <Tab>Care</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <List spacing={2}>
                    {product.features.map((feature, index) => (
                      <ListItem key={index} display="flex" alignItems="center">
                        <ListIcon as={FiCheck} color="brand.500" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel>
                  <Text>{product.sizing}</Text>
                </TabPanel>
                <TabPanel>
                  <Text>{product.care}</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </MotionBox>
        </SimpleGrid>

        {/* Related Products Section */}
        <Box mt={16}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            You May Also Like
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {products
              .filter((p) => p.id !== id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <MotionBox
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "xl" }}
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
                      <Box position="relative" h="200px">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                        />
                      </Box>
                      <Box p={4}>
                        <Heading size="md" mb={1}>
                          {relatedProduct.name}
                        </Heading>
                        <Text color="gray.500" fontSize="sm" mb={2}>
                          {relatedProduct.category}
                        </Text>
                        <Text fontWeight="bold" color="brand.500">
                          ${relatedProduct.price.toFixed(2)}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                </MotionBox>
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
