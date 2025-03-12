"use client"

import { Box, Container, Heading, Text, SimpleGrid, Image, Flex, Icon, Avatar, VStack } from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiAward, FiUsers, FiThumbsUp, FiGlobe } from "react-icons/fi"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)

export default function AboutPage() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const values = [
    {
      title: "Quality",
      description: "We use only the finest materials and craftsmanship in our products.",
      icon: FiAward,
    },
    {
      title: "Sustainability",
      description: "Our commitment to eco-friendly practices guides everything we do.",
      icon: FiGlobe,
    },
    {
      title: "Community",
      description: "We believe in building strong relationships with our customers and partners.",
      icon: FiUsers,
    },
    {
      title: "Innovation",
      description: "We continuously strive to improve and innovate in our designs and processes.",
      icon: FiThumbsUp,
    },
  ]

  const team = [
    {
      name: "Jane Doe",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jane founded ANMI Denim with a vision to create sustainable, high-quality denim products.",
    },
    {
      name: "John Smith",
      position: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John brings over 15 years of experience in fashion design to create our unique styles.",
    },
    {
      name: "Emily Johnson",
      position: "Production Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily ensures that all our products meet our high standards of quality and sustainability.",
    },
    {
      name: "Michael Brown",
      position: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael leads our marketing efforts to share our story and products with the world.",
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
            About ANMI Denim
          </MotionHeading>
          <MotionText
            fontSize="xl"
            maxW="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Crafting premium denim products with quality and style since 2010.
          </MotionText>
        </Container>
      </MotionBox>

      {/* Our Story Section */}
      <Box py={16} ref={storyRef}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                Our Story
              </Heading>
              <Text fontSize="lg" mb={4}>
                ANMI Denim was founded in 2010 with a simple mission: to create high-quality denim products that combine
                traditional craftsmanship with modern design.
              </Text>
              <Text fontSize="lg" mb={4}>
                What started as a small workshop has grown into a recognized brand, but our commitment to quality and
                sustainability remains unchanged.
              </Text>
              <Text fontSize="lg">
                We source our materials from responsible suppliers and work with skilled artisans to ensure that every
                product meets our high standards.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MotionImage
                src="/placeholder.svg?height=600&width=800"
                alt="ANMI Denim Workshop"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="100%"
                maxH="400px"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: { base: 0.3 } }}
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box py={16} bg="gray.50" ref={valuesRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {values.map((value, index) => (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  align="start"
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  boxShadow="md"
                  h="100%"
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 } as any}
                >
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="brand.500"
                    color="white"
                    mb={4}
                  >
                    <Icon as={value.icon} boxSize={6} />
                  </Flex>
                  <Heading as="h3" size="md" mb={2}>
                    {value.title}
                  </Heading>
                  <Text>{value.description}</Text>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Timeline Section */}
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
            Our Journey
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
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { year: "2010", title: "Founded", description: "ANMI Denim was established with a small workshop." },
              {
                year: "2013",
                title: "First Store",
                description: "Opened our first retail store in the downtown area.",
              },
              {
                year: "2016",
                title: "Expansion",
                description: "Expanded our product line to include a wider range of denim products.",
              },
              {
                year: "2019",
                title: "Sustainability Initiative",
                description: "Launched our sustainability initiative to reduce environmental impact.",
              },
              {
                year: "2022",
                title: "Global Presence",
                description: "Expanded to international markets with online sales.",
              },
            ].map((item, index) => (
              <MotionFlex
                key={item.year}
                direction={{ base: "column", md: "row" }}
                mb={10}
                position="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                    width="20px"
                    height="20px"
                    borderRadius="full"
                    bg="brand.500"
                    zIndex={1}
                  />
                  <Heading as="h3" size="md" mb={2}>
                    {item.title} ({item.year})
                  </Heading>
                  <Text>{item.description}</Text>
                </Flex>
                {index % 2 === 1 && <Box display={{ base: "none", md: "block" }} width="50%" />}
              </MotionFlex>
            ))}
          </MotionFlex>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={16} bg="gray.50" ref={teamRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {team.map((member, index) => (
              <MotionBox
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 } as any}
                >
                  <VStack
                    align="center"
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    bg="white"
                    boxShadow="md"
                  >
                  <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Avatar size="2xl" src={member.image} name={member.name} mb={4} />
                  </MotionBox>
                  <Heading as="h3" size="md" mb={1}>
                    {member.name}
                  </Heading>
                  <Text fontWeight="medium" color="brand.500" mb={2}>
                    {member.position}
                  </Text>
                  </VStack>
                </MotionBox>
                <Text textAlign="center">{member.bio}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

