import { Box, Container, Skeleton, Stack, SimpleGrid } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Box>
      {/* Hero Section Loading */}
      <Box bg="brand.500" py={16} color="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            <Stack spacing={6}>
              <Skeleton height="60px" width="80%" />
              <Skeleton height="24px" width="90%" />
              <Skeleton height="24px" width="70%" />
              <Skeleton height="40px" width="150px" />
            </Stack>
            <Skeleton height="400px" borderRadius="lg" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Characteristics Section Loading */}
      <Box py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Skeleton height="40px" width="200px" />
              <Stack spacing={3}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} height="24px" />
                ))}
              </Stack>
              <Skeleton height="40px" width="200px" mt={6} />
              <Stack spacing={3}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} height="24px" />
                ))}
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Skeleton height="40px" width="250px" />
              <Skeleton height="24px" />
              <Skeleton height="24px" />
              <Skeleton height="24px" />
              <Skeleton height="24px" />
              <Skeleton height="150px" mt={4} />
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Products Section Loading */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <Skeleton height="40px" width="300px" mx="auto" mb={10} />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[1, 2, 3].map((i) => (
              <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
                <Skeleton height="300px" />
                <Box p={4}>
                  <Skeleton height="24px" width="80%" mb={2} />
                  <Skeleton height="20px" width="40%" />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Box display="flex" justifyContent="center" mt={10}>
            <Skeleton height="48px" width="200px" />
          </Box>
        </Container>
      </Box>

      {/* FAQ Section Loading */}
      <Box py={16}>
        <Container maxW="container.xl">
          <Skeleton height="40px" width="300px" mx="auto" mb={10} />
          <Stack maxW="3xl" mx="auto" spacing={4}>
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height="60px" />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

