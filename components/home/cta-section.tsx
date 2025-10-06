"use client"

import { Box, Container, Heading, Text, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <Box bg="black" py={16} color="white" ref={ref}>
      <Container maxW="container.xl" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Stack spacing={4} as={Box} textAlign="center">
            <MotionHeading
              fontSize="3xl"
              fontWeight="bold"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Ready to Experience Quality?
            </MotionHeading>
            <MotionText
              fontSize="lg"
              maxW="2xl"
              mx="auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of satisfied customers who have chosen ANMI Denim for their premium denim needs.
            </MotionText>
            <Box pt={4}>
              <MotionButton as={Link} href="/contact"
                  variant="outline"
                  rounded="md"
                  size="lg"
                  fontWeight="bold"
                  px={6}
                  borderColor="white"
                  _hover={{ bg: "white", color: "brand.500" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Today
                </MotionButton>
            </Box>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  )
}
