import { Box, Container, Skeleton, Stack, SimpleGrid, Flex } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Box>
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Product Images Loading */}
          <Box>
            <Skeleton height="500px" borderRadius="lg" mb={4} />
            <Flex gap={4}>
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} height="80px" width="80px" borderRadius="md" />
              ))}
            </Flex>
          </Box>

          {/* Product Details Loading */}
          <Stack spacing={4}>
            <Skeleton height="40px" width="70%" />
            <Skeleton height="20px" width="30%" />
            <Skeleton height="30px" width="25%" />
            <Skeleton height="100px" />

            <Box mb={6} mt={2}>
              <Skeleton height="20px" width="100px" mb={2} />
              <Skeleton height="40px" width="200px" />
            </Box>

            <Flex gap={4} mb={8}>
              <Skeleton height="50px" flex={2} />
              <Skeleton height="50px" flex={1} />
              <Skeleton height="50px" flex={1} />
            </Flex>

            <Skeleton height="1px" my={6} />

            <Skeleton height="40px" width="300px" />
            <Stack spacing={2} mt={2}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} height="20px" />
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Related Products Loading */}
        <Box mt={16}>
          <Skeleton height="40px" width="300px" mx="auto" mb={8} />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {[1, 2, 3, 4].map((i) => (
              <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Skeleton height="200px" />
                <Box p={4}>
                  <Skeleton height="24px" width="80%" mb={2} />
                  <Skeleton height="20px" width="40%" mb={2} />
                  <Skeleton height="20px" width="30%" />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
