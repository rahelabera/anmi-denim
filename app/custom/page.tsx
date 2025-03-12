"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Image,
  Flex,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  VStack,
  HStack,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiTrendingUp, FiUsers, FiThumbsUp, FiStar } from "react-icons/fi"
import Link from "next/link"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)
const MotionButton = motion(Button)
const MotionImage = motion(Image)
const MotionCard = motion(Card)

export default function CustomOrdersPage() {
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const testimonialsRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const customServices = [
    {
      title: "Custom Designs",
      description: "Work with our design team to create unique denim products tailored to your specifications.",
      icon: FiStar,
    },
    {
      title: "Private Labeling",
      description: "Add your brand to our premium denim products with custom labels, tags, and packaging.",
      icon: FiTrendingUp,
    },
    {
      title: "Bulk Orders",
      description: "Order large quantities of custom denim products for your business or special events.",
      icon: FiUsers,
    },
    {
      title: "Custom Washes",
      description: "Choose from a variety of washes and finishes to create the perfect look for your denim products.",
      icon: FiThumbsUp,
    },
  ]

  const processSteps = [
    {
      title: "Consultation",
      description: "Schedule a consultation with our design team to discuss your custom order requirements.",
    },
    {
      title: "Design & Sampling",
      description: "Work with our designers to create your custom design and receive samples for approval.",
    },
    {
      title: "Production",
      description: "Once your design is approved, we'll begin production of your custom order.",
    },
    {
      title: "Quality Control",
      description: "Each product undergoes rigorous quality control to ensure it meets our high standards.",
    },
    {
      title: "Delivery",
      description: "Your custom order is carefully packaged and delivered to your specified location.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Boutique Owner",
      quote:
        "Working with ANMI Denim for our custom jean line was a game-changer for our boutique. The quality and attention to detail exceeded our expectations.",
    },
    {
      name: "Michael Rodriguez",
      company: "Event Coordinator",
      quote:
        "We ordered custom denim jackets for our corporate event, and ANMI Denim delivered perfectly branded products on time. Our team loved them!",
    },
    {
      name: "Emily Chen",
      company: "Startup Founder",
      quote:
        "The private labeling service from ANMI Denim helped us launch our brand with high-quality products that our customers love. Highly recommended!",
    },
  ]

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
            Custom Denim Orders
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Create unique denim products tailored to your specific needs and brand identity.
          </MotionText>
          <MotionButton
            as={Link}
            href="/contact"
            size="lg"
            mt={6}
            colorScheme="whiteAlpha"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Custom Order
          </MotionButton>
        </Container>
      </MotionBox>

      {/* Services Section */}
      <Box py={16} ref={servicesRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Custom Services
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {customServices.map((service, index) => (
              <MotionBox
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  align="center"
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  boxShadow="md"
                  h="100%"
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transitionDuration="0.3s"
                >
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="brand.100"
                    color="brand.500"
                    mb={4}
                  >
                    <Icon as={service.icon} boxSize={8} />
                  </Flex>
                  <Heading as="h3" size="md" mb={2} textAlign="center">
                    {service.title}
                  </Heading>
                  <Text textAlign="center">{service.description}</Text>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Custom Services
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { label: "Custom Orders", number: "500+", helpText: "Completed annually" },
              { label: "Client Satisfaction", number: "98%", helpText: "Positive feedback" },
              { label: "Years of Experience", number: "12+", helpText: "In custom denim" },
            ].map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Stat p={6} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md" textAlign="center">
                  <StatLabel fontSize="lg">{stat.label}</StatLabel>
                  <StatNumber fontSize="5xl" color="brand.500" my={2}>
                    {stat.number}
                  </StatNumber>
                  <StatHelpText>{stat.helpText}</StatHelpText>
                </Stat>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={16} ref={processRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Custom Order Process
          </MotionHeading>
          <MotionFlex
            direction="column"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              left: { base: "20px", md: "50%" },
              transform: { md: "translateX(-50%)" },
              width: "2px",
              height: "calc(100% - 40px)",
              bg: "gray.200",
              top: "40px",
            }}
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <MotionFlex
                key={step.title}
                direction={{ base: "column", md: "row" }}
                mb={10}
                position="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Flex
                  direction="column"
                  align={{ base: "flex-start", md: index % 2 === 0 ? "flex-end" : "flex-start" }}
                  textAlign={{ base: "left", md: index % 2 === 0 ? "right" : "left" }}
                  pr={{ base: 0, md: index % 2 === 0 ? 10 : 0 }}
                  pl={{ base: 10, md: index % 2 === 0 ? 0 : 10 }}
                  width={{ base: "full", md: "50%" }}
                >
                  <Box
                    position="absolute"
                    left={{ base: "20px", md: "50%" }}
                    transform={{ md: "translateX(-50%)" }}
                    width="40px"
                    height="40px"
                    borderRadius="full"
                    bg="brand.500"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="lg"
                    zIndex={1}
                  >
                    {index + 1}
                  </Box>
                  <Heading as="h3" size="md" mb={2}>
                    {step.title}
                  </Heading>
                  <Text>{step.description}</Text>
                </Flex>
                {index % 2 === 1 && <Box display={{ base: "none", md: "block" }} width="50%" />}
              </MotionFlex>
            ))}
          </MotionFlex>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={16} bg="gray.50" ref={testimonialsRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {testimonials.map((testimonial, index) => (
              <MotionCard
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5, boxShadow: "xl" }}
              >
                <CardHeader>
                  <Flex>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Box>
                        <Heading size="md">{testimonial.name}</Heading>
                        <Text color="brand.500">{testimonial.company}</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>"{testimonial.quote}"</Text>
                </CardBody>
                <CardFooter
                  justify="space-between"
                  flexWrap="wrap"
                  sx={{
                    "& > button": {
                      minW: "136px",
                    },
                  }}
                >
                  <HStack>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} as={FiStar} color="orange.400" />
                    ))}
                  </HStack>
                </CardFooter>
              </MotionCard>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={16}>
        <Container maxW="container.xl">
          <MotionFlex
            direction="column"
            align="center"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="xl" mb={4}>
              Ready to Create Your Custom Denim Products?
            </Heading>
            <Text fontSize="lg" maxW="2xl" mb={8}>
              Contact our design team today to discuss your custom order requirements and bring your vision to life.
            </Text>
            <MotionButton
              as={Link}
              href="/contact"
              size="lg"
              colorScheme="brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Custom Order
            </MotionButton>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  )
}

