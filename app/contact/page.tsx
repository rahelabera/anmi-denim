"use client"

import type React from "react"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Icon,
  useToast,
  Flex,
} from "@chakra-ui/react"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)
const MotionFlex = motion(Flex)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const formInView = useInView(formRef, { once: true, amount: 0.3 })
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Our Location",
      content: "123 Denim Street, Fashion District, NY 10001",
    },
    {
      icon: FiPhone,
      title: "Phone Number",
      content: "+1 (555) 123-4567",
    },
    {
      icon: FiMail,
      title: "Email Address",
      content: "info@anmidenim.com",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      content: "Monday - Friday: 9AM - 5PM",
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
            Contact Us
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We'd love to hear from you. Get in touch with our team.
          </MotionText>
        </Container>
      </MotionBox>

      {/* Contact Form and Info Section */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Contact Form */}
          <MotionBox
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h2" size="xl" mb={6}>
              Send Us a Message
            </Heading>
            <Box as="form" onSubmit={handleSubmit} p={8} borderWidth="1px" borderRadius="lg" boxShadow="md">
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    focusBorderColor="brand.500"
                    rows={5}
                  />
                </FormControl>
                <MotionButton
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  width="full"
                  mt={4}
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </MotionButton>
              </VStack>
            </Box>
          </MotionBox>

          {/* Contact Info */}
          <MotionBox
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading as="h2" size="xl" mb={6}>
              Contact Information
            </Heading>
            <VStack spacing={6} align="stretch">
              {contactInfo.map((info, index) => (
                <MotionFlex
                  key={info.title}
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  boxShadow="md"
                  align="center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5, boxShadow: "xl" }}
                >
                  <Box bg="brand.500" p={3} borderRadius="full" color="white" mr={4}>
                    <Icon as={info.icon} boxSize={6} />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      {info.title}
                    </Heading>
                    <Text>{info.content}</Text>
                  </Box>
                </MotionFlex>
              ))}
            </VStack>

            {/* Map */}
            <MotionBox
              mt={8}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              height="300px"
              position="relative"
              initial={{ opacity: 0 }}
              animate={infoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ boxShadow: "xl" }}
            >
              <Box
                as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0059418!3d40.7127847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680322790428!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MotionBox>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

