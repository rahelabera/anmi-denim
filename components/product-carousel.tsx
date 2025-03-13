"use client"

import { useState, useEffect, useRef } from "react"
import { Box, Flex, Heading, Text, Button, IconButton, Image, useBreakpointValue } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { motion } from "framer-motion"
import type { EmblaCarouselType } from "embla-carousel"
import emblaCarousel from "embla-carousel"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionImage = motion(Image)

type Product = {
  id: string
  name: string
  image: string
  price: string
  category: string
  description?: string
}

// Updated product data to focus on denim types for jeans/trousers
const newProducts: Product[] = [
  {
    id: "1",
    name: "Classic Raw Denim Jeans",
    image: "/classic.png",
    price: "$129.99",
    category: "Raw Denim",
    description: "Unwashed, untreated denim with a rigid feel and deep indigo color.",
  },
  {
    id: "2",
    name: "Selvage Straight Fit Jeans",
    image: "/shirt.png",
    price: "$149.99",
    category: "Selvage Denim",
    description: "Premium selvage denim with distinctive self-edge finish.",
  },
  {
    id: "3",
    name: "Comfort Stretch Slim Jeans",
    image: "/slim.png",
    price: "$89.99",
    category: "Stretch Denim",
    description: "Flexible denim with added elastane for maximum comfort.",
  },
  {
    id: "4",
    name: "Vintage Acid Wash Jeans",
    image: "/skirt.png",
    price: "$99.99",
    category: "Acid Wash Denim",
    description: "Distinctive mottled appearance created through acid washing process.",
  },
  {
    id: "5",
    name: "Lightweight Chambray Trousers",
    image: "/overall.png",
    price: "$79.99",
    category: "Chambray Denim",
    description: "Soft, lightweight denim with a distinctive weave pattern.",
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null)

  // Add this configuration to ensure the carousel loops infinitely
  const carouselConfig = {
    loop: true,
    align: "start" as const,
    containScroll: "trimSnaps" as const,
  }

  // Initialize embla carousel
  useEffect(() => {
    if (carouselRef.current) {
      const api = emblaCarousel(carouselRef.current, carouselConfig)
      setEmblaApi(api)

      return () => {
        api.destroy()
      }
    }
  }, [])

  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1
  const maxIndex = newProducts.length - slidesToShow

  const nextSlide = () => {
    if (emblaApi && !isAnimating) {
      setIsAnimating(true)
      emblaApi.scrollNext()
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (emblaApi && !isAnimating) {
      setIsAnimating(true)
      emblaApi.scrollPrev()
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  // Update current index when slide changes
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect() // Initialize with current index

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <Box py={10} position="relative">
      <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Heading textAlign="center" mb={8}>
          New Arrivals
        </Heading>
      </MotionBox>

      <Box maxW="7xl" mx="auto" px={4} position="relative">
        <Box overflow="hidden" ref={carouselRef}>
          <MotionFlex style={{ display: "flex" }}>
            {newProducts.map((product) => (
              <Box key={product.id} flexShrink={0} width={{ base: "100%", md: "50%", lg: "33.333%" }} px={2}>
                <MotionBox
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  bg="white"
                  m={2}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Box position="relative" h="300px" overflow="hidden">
                    <MotionImage
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Box
                      position="absolute"
                      inset="0"
                      bg="blackAlpha.200"
                      opacity="0"
                      transition="opacity 0.3s"
                      _groupHover={{ opacity: "1" }}
                    />
                  </Box>
                  <Box p={4}>
                    <Heading size="md" mb={1}>
                      {product.name}
                    </Heading>
                    <Text color="gray.500" fontSize="sm" mb={2}>
                      {product.category}
                    </Text>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontWeight="bold" color="brand.500">
                        {product.price}
                      </Text>
                      <Link href={`/products/${product.id}`} passHref legacyBehavior>
                        <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button as="a" size="sm" colorScheme="brand" borderRadius="full">
                            View
                          </Button>
                        </MotionBox>
                      </Link>
                    </Flex>
                  </Box>
                </MotionBox>
              </Box>
            ))}
          </MotionFlex>
        </Box>

        <MotionBox
          as={IconButton}
          aria-label="Previous slide"
          icon={<ChevronLeftIcon />}
          onClick={prevSlide}
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="#E05038"
          color="white"
          rounded="full"
          shadow="md"
          _hover={{ bg: "#c04530" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />

        <MotionBox
          as={IconButton}
          aria-label="Next slide"
          icon={<ChevronRightIcon />}
          onClick={nextSlide}
          position="absolute"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="#E05038"
          color="white"
          rounded="full"
          shadow="md"
          _hover={{ bg: "#c04530" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />

        <Flex mt={4} justifyContent="center" gap={2}>
          {Array.from({ length: newProducts.length }).map((_, index) => (
            <MotionBox
              key={index}
              h="2"
              w={index === currentIndex ? "4" : "2"}
              borderRadius="full"
              bg={index === currentIndex ? "brand.500" : "gray.300"}
              cursor="pointer"
              onClick={() => {
                if (emblaApi) {
                  setIsAnimating(true)
                  emblaApi.scrollTo(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

