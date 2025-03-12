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
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiCheckCircle, FiTruck, FiPackage, FiDollarSign, FiUsers } from "react-icons/fi"
import Link from "next/link"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)
const MotionButton = motion(Button)
const MotionImage = motion(Image)

export default function WholesalePage() {
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const testimonialsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const benefits = [
    "Competitive wholesale pricing with volume discounts",
    "High-quality denim products crafted with premium materials",
    "Flexible minimum order quantities",
    "Custom branding and labeling options",
    "Dedicated account manager for personalized service",
    "Fast and reliable shipping worldwide",
  ]

  const process = [
    {
      title: "Inquiry",
      description: "Contact us with your wholesale requirements and product interests.",
      icon: FiUsers,
    },
    {
      title: "Quotation",
      description: "Receive a detailed quotation based on your order volume and specifications.",
      icon: FiDollarSign,
    },
    {
      title: "Order Placement",
      description: "Confirm your order and make the initial payment to begin production.",
      icon: FiPackage,
    },
    {
      title: "Delivery",
      description: "Receive your order with tracking information and delivery confirmation.",
      icon: FiTruck,
    },
  ]

  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer:
        "Our standard minimum order quantity is 50 pieces per style. However, we can be flexible depending on the specific products and your business needs.",
    },
    {
      question: "Do you offer custom branding?",
      answer:
        "Yes, we offer custom branding services including custom labels, tags, and packaging. Additional fees may apply depending on the complexity of customization.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require a 50% deposit to begin production, with the remaining balance due before shipping. For established partners, we offer net-30 payment terms.",
    },
    {
      question: "How long does production take?",
      answer:
        "Production time varies depending on the order volume and product complexity. Typically, it takes 3-4 weeks for standard orders and 5-6 weeks for custom orders.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination.",
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
            Wholesale Opportunities
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Partner with ANMI Denim to bring premium quality denim products to your customers.
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
            Become a Wholesale Partner
          </MotionButton>
        </Container>
      </MotionBox>

      {/* Benefits Section */}
      <Box py={16} ref={benefitsRef}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                Wholesale Benefits
              </Heading>
              <Text fontSize="lg" mb={6}>
                Partner with ANMI Denim and gain access to our premium quality denim products at competitive wholesale
                prices. Our wholesale program is designed to help retailers and businesses grow with our trusted brand.
              </Text>
              <List spacing={3}>
                {benefits.map((benefit, index) => (
                  <MotionBox
                    key={index}
                    as={ListItem}
                    display="flex"
                    alignItems="center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    <ListIcon as={FiCheckCircle} color="brand.500" />
                    {benefit}
                  </MotionBox>
                ))}
              </List>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MotionImage
                src="/placeholder.svg?height=600&width=800"
                alt="ANMI Denim Wholesale"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="100%"
                maxH="400px"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 } as any}
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={16} bg="gray.50" ref={processRef}>
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
            How It Works
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {process.map((step, index) => (
              <MotionBox
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionFlex
                  as={VStack}
                  align="center"
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  boxShadow="md"
                  h="100%"
                  position="relative"
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 } as any}
                >
                  <Flex
                    position="absolute"
                    top="-15px"
                    bg="brand.500"
                    color="white"
                    w="30px"
                    h="30px"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontWeight="bold"
                  >
                    {index + 1}
                  </Flex>
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="brand.100"
                    color="brand.500"
                    mb={4}
                  >
                    <Icon as={step.icon} boxSize={6} />
                  </Flex>
                  <Heading as="h3" size="md" mb={2} textAlign="center">
                    {step.title}
                  </Heading>
                  <Text textAlign="center">{step.description}</Text>
                </MotionFlex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Product Categories */}
      <Box py={16}>
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
            Wholesale Product Categories
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {["Denim Jackets", "Jeans", "Shirts", "Shorts", "Skirts", "Accessories"].map((category, index) => (
              <MotionBox
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  position="relative"
                  height="250px"
                  borderRadius="lg"
                  overflow="hidden"
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 }}
                >
                  <MotionImage
                    src="/placeholder.svg?height=400&width=600"
                    alt={category}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.600"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Heading as="h3" size="lg" color="white">
                      {category}
                    </Heading>
                  </Box>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQs Section */}
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
            Frequently Asked Questions
          </MotionHeading>
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <MotionBox
                  key={index}
                  as={AccordionItem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ backgroundColor: "gray.100" }}
                >
                  <h2>
                    <AccordionButton py={4}>
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                </MotionBox>
              ))}
            </Accordion>
          </MotionBox>
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
              Ready to Partner with ANMI Denim?
            </Heading>
            <Text fontSize="lg" maxW="2xl" mb={8}>
              Contact our wholesale team today to discuss your business needs and how we can help you grow with our
              premium denim products.
            </Text>
            <MotionButton
              as={Link}
              href="/contact"
              size="lg"
              colorScheme="brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Wholesale Team
            </MotionButton>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  )
}

