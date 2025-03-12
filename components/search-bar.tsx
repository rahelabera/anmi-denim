"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  List,
  ListItem,
  Text,
  Flex,
  useOutsideClick,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const MotionBox = motion(Box)
const MotionList = motion(List)
const MotionListItem = motion(ListItem)

type Product = {
  id: string
  name: string
  category: string
  description?: string
}

// Updated product data to focus on denim types for jeans/trousers
const allProducts: Product[] = [
  {
    id: "1",
    name: "Classic Raw Denim Jeans",
    category: "Raw Denim",
    description: "Unwashed, untreated denim with a rigid feel and deep indigo color.",
  },
  {
    id: "2",
    name: "Selvage Straight Fit Jeans",
    category: "Selvage Denim",
    description: "Premium selvage denim with distinctive self-edge finish.",
  },
  {
    id: "3",
    name: "Comfort Stretch Slim Jeans",
    category: "Stretch Denim",
    description: "Flexible denim with added elastane for maximum comfort.",
  },
  {
    id: "4",
    name: "Vintage Acid Wash Jeans",
    category: "Acid Wash Denim",
    description: "Distinctive mottled appearance created through acid washing process.",
  },
  {
    id: "5",
    name: "Lightweight Chambray Trousers",
    category: "Chambray Denim",
    description: "Soft, lightweight denim with a distinctive weave pattern.",
  },
  {
    id: "6",
    name: "Artisan Printed Denim Jeans",
    category: "Printed Denim",
    description: "Unique patterns and designs printed directly onto denim fabric.",
  },
  {
    id: "7",
    name: "Premium Raw Selvedge Jeans",
    category: "Raw Denim",
    description: "Unwashed premium denim with authentic selvage edges.",
  },
  {
    id: "8",
    name: "Ultra Stretch Skinny Jeans",
    category: "Stretch Denim",
    description: "High-stretch denim with exceptional recovery and shape retention.",
  },
  {
    id: "9",
    name: "Distressed Acid Wash Trousers",
    category: "Acid Wash Denim",
    description: "Acid-washed denim with strategic distressing for a vintage look.",
  },
  {
    id: "10",
    name: "Floral Printed Denim Jeans",
    category: "Printed Denim",
    description: "Elegant floral patterns printed on premium denim fabric.",
  },
  {
    id: "11",
    name: "Chambray Summer Trousers",
    category: "Chambray Denim",
    description: "Breathable chambray denim perfect for warm weather.",
  },
  {
    id: "12",
    name: "Japanese Selvage Denim Jeans",
    category: "Selvage Denim",
    description: "Crafted from premium Japanese selvage denim with authentic details.",
  },
]

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  })

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      setSuggestions(filteredProducts)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [searchTerm])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`)
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSuggestionClick = (product: Product) => {
    router.push(`/products/${product.id}`)
    setIsOpen(false)
    setSearchTerm("")
  }

  return (
    <Box position="relative" width="100%" ref={ref}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.300" />
        </InputLeftElement>

        <Input
          placeholder="Search denim products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          borderRadius="md"
          focusBorderColor="brand.500"
        />

        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" colorScheme="brand" onClick={handleSearch}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <MotionBox
            position="absolute"
            top="100%"
            left={0}
            right={0}
            zIndex={10}
            mt={2}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            maxH="300px"
            overflowY="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <MotionList spacing={0}>
              {suggestions.map((product, index) => (
                <MotionListItem
                  key={product.id}
                  p={3}
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => handleSuggestionClick(product)}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="medium">{product.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {product.category}
                    </Text>
                  </Flex>
                </MotionListItem>
              ))}
            </MotionList>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  )
}

