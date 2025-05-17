import { Box, Container, Skeleton, Stack } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Box>
      <Skeleton height="300px" width="100%" />
      <Container maxW="container.xl" py={12}>
        <Stack spacing={6}>
          <Skeleton height="40px" width="300px" />
          <Skeleton height="20px" width="80%" />
          <Skeleton height="20px" width="70%" />
          <Skeleton height="20px" width="60%" />
        </Stack>
      </Container>
    </Box>
  )
}
