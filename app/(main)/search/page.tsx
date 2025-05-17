"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Box, Container, Heading, Text, SimpleGrid, Skeleton, SkeletonText, Button, Badge, Flex, Image, Stack } from "@chakra-ui/react"
import { searchProducts } from "@/lib/mock-data"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      if (!query) {
        setResults([])
      } else {
        const filteredProducts = searchProducts(query)
        setResults(filteredProducts)
      }
      setIsLoading(false)
    }, 500)
  }, [query])

  return (
    <Container maxW="7xl" py={10}>
      <Stack spacing={6} mb={8}>
        <Button
          as={Link}
          href="/"
          variant="ghost"
          colorScheme="brand"
          leftIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          }
          alignSelf="flex-start"
        >
          Back to Home
        </Button>
        <Heading as="h1" size="xl">
          {query ? `Search Results for "${query}"` : "Search Results"}
        </Heading>
        <Text color="gray.500" fontSize="lg">
          {isLoading
            ? "Searching..."
            : results.length > 0
              ? `Found ${results.length} result${results.length === 1 ? "" : "s"}`
              : "No results found. Try a different search term."}
        </Text>
      </Stack>

      {isLoading ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {[1, 2, 3].map((i) => (
            <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="gray.50">
              <Skeleton height="200px" mb={4} />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          ))}
        </SimpleGrid>
      ) : results.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {results.map((product) => (
            <Box
              as={Link}
              href={`/products/${product.id}`}
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ boxShadow: "lg", textDecoration: "none" }}
              transition="box-shadow 0.2s"
              bg="white"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                w="100%"
                h="220px"
                objectFit="cover"
                fallbackSrc="/placeholder.svg"
              />
              <Box p={4}>
                <Flex justify="space-between" align="flex-start" mb={2}>
                  <Heading as="h2" size="md" noOfLines={1}>
                    {product.name}
                  </Heading>
                  <Badge colorScheme="brand" fontSize="0.8em">
                    {product.category}
                  </Badge>
                </Flex>
                <Text color="gray.600" mb={4} noOfLines={2}>
                  {product.description}
                </Text>
                <Flex justify="space-between" align="center">
                  <Text fontWeight="bold" fontSize="lg">
                    ${product.price.toFixed(2)}
                  </Text>
                  <Button colorScheme="brand" size="sm" as="span">
                    View Details
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box textAlign="center" py={12}>
          <Text color="gray.600" mb={6}>
            No products match your search criteria.
          </Text>
          <Button
            as={Link}
            href="/products"
            colorScheme="brand"
            size="lg"
            px={8}
          >
            Browse All Products
          </Button>
        </Box>
      )}
    </Container>
  )
}
