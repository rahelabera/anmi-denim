"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Input,
  Select,
  Button,
  Image,
  Badge,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiFilter, FiSearch } from "react-icons/fi"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)

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

// Flatten categories for filter dropdown
const allCategories = [
  "All",
  ...Object.values(productCategories)
    .flat()
    .map((item) => item.name),
]

// Sample product data - updated to focus on new categories
const products = [
  {
    id: "1",
    name: "Black Slim Jeans",
    category: "Black",
    style: "Slim",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: true,
    isBestSeller: false,
    description: "Classic black slim fit jeans with a modern cut.",
  },
  {
    id: "2",
    name: "Blue Straight Jeans",
    category: "Blue",
    style: "Straight",
    price: 119.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: false,
    isBestSeller: true,
    description: "Traditional straight fit blue jeans for everyday wear.",
  },
  {
    id: "3",
    name: "Black Baggy Jeans",
    category: "Black",
    style: "Baggy",
    price: 139.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: false,
    isBestSeller: false,
    description: "Relaxed baggy fit black jeans for maximum comfort.",
  },
  {
    id: "4",
    name: "Blue Slim Jeans",
    category: "Blue",
    style: "Slim",
    price: 124.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: true,
    isBestSeller: false,
    description: "Modern slim fit blue jeans with stretch comfort.",
  },
  {
    id: "5",
    name: "Black Straight Jeans",
    category: "Black",
    style: "Straight",
    price: 114.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: false,
    isBestSeller: true,
    description: "Classic straight fit black jeans for a timeless look.",
  },
  {
    id: "6",
    name: "Blue Baggy Jeans",
    category: "Blue",
    style: "Baggy",
    price: 134.99,
    image: "/placeholder.svg?height=600&width=400",
    isNew: false,
    isBestSeller: false,
    description: "Relaxed baggy fit blue jeans for a casual style.",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 200])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const searchParams = useSearchParams()

  useEffect(() => {
    // Get search term from URL if it exists
    const searchFromUrl = searchParams.get("search")
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl)
    }

    // Get category from URL if it exists
    const categoryFromUrl = searchParams.get("category")
    if (categoryFromUrl) {
      const validCategory = allCategories.find((cat) => cat.toLowerCase() === categoryFromUrl.toLowerCase())
      if (validCategory) {
        setSelectedCategory(validCategory)
      }
    }
  }, [searchParams])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory || product.style === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

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
            Our Denim Collection
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore our premium denim jeans crafted with quality and style.
          </MotionText>
        </Container>
      </MotionBox>

      {/* Filters and Search */}
      <Container maxW="container.xl" py={8}>
        <MotionFlex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "stretch", md: "center" }}
          mb={8}
          gap={4}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Flex flex="1" gap={4}>
            <Box position="relative" flex="1">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                pl={10}
              />
              <Box position="absolute" left={3} top="50%" transform="translateY(-50%)">
                <FiSearch />
              </Box>
            </Box>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              maxW={{ base: "full", md: "200px" }}
              display={{ base: "none", md: "block" }}
            >
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </Flex>
          <Button leftIcon={<FiFilter />} onClick={onOpen} display={{ base: "flex", md: "none" }}>
            Filters
          </Button>
        </MotionFlex>

        {/* Desktop Filters */}
        <Flex gap={8} display={{ base: "none", md: "flex" }}>
          <Box w="250px">
            <MotionBox
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Heading size="md" mb={4}>
                Filters
              </Heading>

              {Object.entries(productCategories).map(([categoryType, items]) => (
                <Box key={categoryType} mb={6}>
                  <Text fontWeight="medium" mb={2}>
                    {categoryType}
                  </Text>
                  <VStack align="start" spacing={2}>
                    {items.map((item) => (
                      <Checkbox
                        key={item.name}
                        isChecked={selectedCategory === item.name}
                        onChange={() => setSelectedCategory(item.name === selectedCategory ? "All" : item.name)}
                      >
                        {item.name}
                      </Checkbox>
                    ))}
                  </VStack>
                </Box>
              ))}

              <Divider my={4} />

              <Box>
                <Text fontWeight="medium" mb={4}>
                  Price Range
                </Text>
                <RangeSlider
                  min={0}
                  max={200}
                  step={10}
                  value={priceRange}
                  onChange={(val) => setPriceRange(val)}
                  mb={4}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack bg="brand.500" />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Flex justify="space-between">
                  <Text>${priceRange[0]}</Text>
                  <Text>${priceRange[1]}</Text>
                </Flex>
              </Box>
            </MotionBox>
          </Box>

          {/* Product Grid */}
          <Box flex="1">
            <MotionBox
              as={SimpleGrid}
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={6}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map((product) => (
                <MotionBox key={product.id} variants={itemVariants}>
                  <Link href={`/products/${product.id}`} passHref legacyBehavior>
                    <MotionBox
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      whileHover={{ y: -5, boxShadow: "xl" }}
                      transition={{ duration: 0.3 }}
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
                        <Flex gap={2} mb={2}>
                          <Text color="gray.500">
                            <ChakraLink
                              href={`/products/color/${product.category.toLowerCase()}`}
                              _hover={{ color: "brand.500" }}
                            >
                              {product.category}
                            </ChakraLink>
                          </Text>
                          <Text color="gray.500">•</Text>
                          <Text color="gray.500">
                            <ChakraLink
                              href={`/products/style/${product.style.toLowerCase()}`}
                              _hover={{ color: "brand.500" }}
                            >
                              {product.style}
                            </ChakraLink>
                          </Text>
                        </Flex>
                        <Text noOfLines={2} mb={3} fontSize="sm">
                          {product.description}
                        </Text>
                        <Text fontWeight="bold" color="brand.500">
                          ${product.price.toFixed(2)}
                        </Text>
                      </Box>
                    </MotionBox>
                  </Link>
                </MotionBox>
              ))}
            </MotionBox>

            {filteredProducts.length === 0 && (
              <MotionBox
                textAlign="center"
                py={10}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Heading size="md" mb={4}>
                  No products found
                </Heading>
                <Text>Try adjusting your filters or search term.</Text>
              </MotionBox>
            )}
          </Box>
        </Flex>

        {/* Mobile Product Grid */}
        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, sm: 2 }}
          spacing={6}
          display={{ base: "grid", md: "none" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <MotionBox key={product.id} variants={itemVariants}>
              <Link href={`/products/${product.id}`} passHref>
                <MotionBox
                  as="a"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 }}
                >
                  <Box position="relative" h="200px">
                    <MotionImage
                      src={product.image}
                      alt={product.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
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
                    <Flex gap={2} mb={2}>
                      <Text color="gray.500" fontSize="sm">
                        {product.category}
                      </Text>
                      <Text color="gray.500" fontSize="sm">
                        •
                      </Text>
                      <Text color="gray.500" fontSize="sm">
                        {product.style}
                      </Text>
                    </Flex>
                    <Text fontWeight="bold" color="brand.500">
                      ${product.price.toFixed(2)}
                    </Text>
                  </Box>
                </MotionBox>
              </Link>
            </MotionBox>
          ))}
        </MotionBox>

        {filteredProducts.length === 0 && (
          <MotionBox
            textAlign="center"
            py={10}
            display={{ base: "block", md: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="md" mb={4}>
              No products found
            </Heading>
            <Text>Try adjusting your filters or search term.</Text>
          </MotionBox>
        )}
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>
            {Object.entries(productCategories).map(([categoryType, items]) => (
              <Box key={categoryType} mb={6}>
                <Text fontWeight="medium" mb={2}>
                  {categoryType}
                </Text>
                <VStack align="start" spacing={2}>
                  {items.map((item) => (
                    <Checkbox
                      key={item.name}
                      isChecked={selectedCategory === item.name}
                      onChange={() => {
                        setSelectedCategory(item.name === selectedCategory ? "All" : item.name)
                        onClose()
                      }}
                    >
                      {item.name}
                    </Checkbox>
                  ))}
                </VStack>
              </Box>
            ))}

            <Divider my={4} />

            <Box>
              <Text fontWeight="medium" mb={4}>
                Price Range
              </Text>
              <RangeSlider min={0} max={200} step={10} value={priceRange} onChange={(val) => setPriceRange(val)} mb={4}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg="brand.500" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Flex justify="space-between">
                <Text>${priceRange[0]}</Text>
                <Text>${priceRange[1]}</Text>
              </Flex>
            </Box>

            <Button mt={6} w="full" colorScheme="brand" onClick={onClose}>
              Apply Filters
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
