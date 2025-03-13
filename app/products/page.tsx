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

// Sample product data - updated to focus on denim types for jeans/trousers
const products = [
  {
    id: "1",
    name: "Classic Raw Denim Jeans",
    category: "Raw Denim",
    price: 129.99,
    image: "/raw.png",
    isNew: true,
    isBestSeller: false,
    description: "Unwashed, untreated denim with a rigid feel and deep indigo color.",
  },
  {
    id: "2",
    name: "Selvage Straight Fit Jeans",
    category: "Selvage Denim",
    price: 149.99,
    image: "/selvage.png",
    isNew: false,
    isBestSeller: true,
    description: "Premium selvage denim with distinctive self-edge finish.",
  },
  {
    id: "3",
    name: "Comfort Stretch Slim Jeans",
    category: "Stretch Denim",
    price: 89.99,
    image: "/stretch.png",
    isNew: false,
    isBestSeller: false,
    description: "Flexible denim with added elastane for maximum comfort.",
  },
  {
    id: "4",
    name: "Vintage Acid Wash Jeans",
    category: "Acid Wash Denim",
    price: 99.99,
    image: "/acid.png",
    isNew: true,
    isBestSeller: false,
    description: "Distinctive mottled appearance created through acid washing process.",
  },
  {
    id: "5",
    name: "Lightweight Chambray Trousers",
    category: "Chambray Denim",
    price: 79.99,
    image: "/chambray.png",
    isNew: false,
    isBestSeller: true,
    description: "Soft, lightweight denim with a distinctive weave pattern.",
  },
  {
    id: "6",
    name: "Artisan Printed Denim Jeans",
    category: "Printed Denim",
    price: 119.99,
    image: "/printed.png",
    isNew: false,
    isBestSeller: false,
    description: "Unique patterns and designs printed directly onto denim fabric.",
  },
  {
    id: "7",
    name: "Premium Raw Selvedge Jeans",
    category: "Raw Denim",
    price: 159.99,
    image: "/raw.png",
    isNew: true,
    isBestSeller: false,
    description: "Unwashed premium denim with authentic selvage edges.",
  },
  {
    id: "8",
    name: "Ultra Stretch Skinny Jeans",
    category: "Stretch Denim",
    price: 99.99,
    image: "/stretch.png",
    isNew: false,
    isBestSeller: true,
    description: "High-stretch denim with exceptional recovery and shape retention.",
  },
  {
    id: "9",
    name: "Distressed Acid Wash Trousers",
    category: "Acid Wash Denim",
    price: 109.99,
    image: "/acid.png",
    isNew: false,
    isBestSeller: false,
    description: "Acid-washed denim with strategic distressing for a vintage look.",
  },
  {
    id: "10",
    name: "Floral Printed Denim Jeans",
    category: "Printed Denim",
    price: 129.99,
    image: "/printed.png",
    isNew: true,
    isBestSeller: false,
    description: "Elegant floral patterns printed on premium denim fabric.",
  },
  {
    id: "11",
    name: "Chambray Summer Trousers",
    category: "Chambray Denim",
    price: 84.99,
    image: "/chambray.png",
    isNew: false,
    isBestSeller: false,
    description: "Breathable chambray denim perfect for warm weather.",
  },
  {
    id: "12",
    name: "Japanese Selvage Denim Jeans",
    category: "Selvage Denim",
    price: 179.99,
    image: "/selvage.png",
    isNew: true,
    isBestSeller: true,
    description: "Crafted from premium Japanese selvage denim with authentic details.",
  },
]

// Updated categories to focus on denim types
const categories = [
  "All",
  "Raw Denim",
  "Selvage Denim",
  "Stretch Denim",
  "Acid Wash Denim",
  "Chambray Denim",
  "Printed Denim",
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
      const validCategory = categories.find((cat) => cat.toLowerCase() === categoryFromUrl.toLowerCase())
      if (validCategory) {
        setSelectedCategory(validCategory)
      }
    }
  }, [searchParams])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
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
            Explore our premium denim jeans and trousers crafted with quality and style.
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
                placeholder="Search denim products..."
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
              {categories.map((category) => (
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

              <Box mb={6}>
                <Text fontWeight="medium" mb={2}>
                  Denim Types
                </Text>
                <VStack align="start" spacing={2}>
                  {categories.map((category) => (
                    <Checkbox
                      key={category}
                      isChecked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Checkbox>
                  ))}
                </VStack>
              </Box>

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
                  <Link href={`/products/${product.id}`} passHref>
                    <MotionBox
                      as="a"
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
                        <Text color="gray.500" mb={2}>
                          <Link href={`/denim-types/${product.category.toLowerCase().replace(" ", "-")}`} passHref>
                            <ChakraLink _hover={{ color: "brand.500" }}>{product.category}</ChakraLink>
                          </Link>
                        </Text>
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
                    <Text color="gray.500" mb={2}>
                      <Link href={`/denim-types/${product.category.toLowerCase().replace(" ", "-")}`} passHref>
                        <ChakraLink _hover={{ color: "brand.500" }}>{product.category}</ChakraLink>
                      </Link>
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
            <Box mb={6}>
              <Text fontWeight="medium" mb={2}>
                Denim Types
              </Text>
              <VStack align="start" spacing={2}>
                {categories.map((category) => (
                  <Checkbox
                    key={category}
                    isChecked={selectedCategory === category}
                    onChange={() => {
                      setSelectedCategory(category)
                      onClose()
                    }}
                  >
                    {category}
                  </Checkbox>
                ))}
              </VStack>
            </Box>

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

