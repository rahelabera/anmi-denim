"use client"

import { Box, Container, Heading, Text, SimpleGrid, Image, Flex, Icon, Avatar, VStack } from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiAward, FiUsers, FiThumbsUp, FiGlobe, FiHeart } from "react-icons/fi"

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
      description:
        "Upholding the highest standards in materials and craftsmanship to ensure every pair of jeans meets our strict criteria.",
      icon: FiAward,
    },
    {
      title: "Integrity",
      description: "Conducting business with honesty and transparency, building trust with customers and partners.",
      icon: FiHeart,
    },
    {
      title: "Innovation",
      description:
        "Continuously seeking new designs and sustainable production techniques to stay ahead in fashion trends.",
      icon: FiThumbsUp,
    },
    {
      title: "Customer Focus",
      description: "Listening to customer needs and tailoring our products for ultimate satisfaction.",
      icon: FiUsers,
    },
    {
      title: "Community",
      description:
        "Supporting local artisans and contributing to Ethiopian community growth, promoting cultural pride.",
      icon: FiGlobe,
    },
  ]

  const founders = [
    {
      name: "Ananya",
      position: "Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ananya co-founded ANMI Denim with a vision to create high-quality jeans made in Ethiopia for Ethiopians.",
    },
    {
      name: "Mikias",
      position: "Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mikias brings his passion for quality and authentic products to ANMI Denim, ensuring every pair meets the highest standards.",
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
            Crafted with Quality - Premium denim products made in Ethiopia since 2024.
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
                When you talk about ANMI stories, we need to discuss Ananya and Mikias. Ananya and Mikias were friends
                and colleagues who worked at a financial institution and developed a friendship that transcended work.
              </Text>
              <Text fontSize="lg" mb={4}>
                One day, while Ananya wanted to buy new jeans for himself, Mikias accompanied him on his search through
                the Hayahulte markets to find jeans of good quality that they could trust for the brand's originality.
                However, what they found instead was a platter of cheap, low-quality knockoffs all over the city.
              </Text>
              <Text fontSize="lg" mb={4}>
                In that moment, it clicked: "Why don't we have a brand that was made in Ethiopia for Ethiopians that had
                a feel of quality and that would last long?" And ANMI Denim (Ananya and Mikias) was born.
              </Text>
              <Text fontSize="lg">
                ANMI Denim was established in late 2024 in Addis Ababa, Ethiopia, with the goal of fusing premium
                textiles with innovative style. Our goal is to provide each and every customer with outstanding, premium
                jeans that are comfortable, stylish, and long-lasting. The company's goal is to establish itself as a
                top apparel brand in Africa and beyond, showcasing African workmanship and inventiveness to a worldwide
                audience.
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
                transition={{ duration: 0.3 }}
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {values.map((value, index) => (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 }}
                  h="100%"
                >
                  <VStack
                    align="start"
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    bg="white"
                    boxShadow="md"
                    h="100%"
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
                  </VStack>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Products Section */}
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
            Our Products
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h3" size="lg" mb={4}>
                Premium Jeans Collection
              </Heading>
              <Text fontSize="lg" mb={4}>
                ANMI Denim offers a range of premium jeans designed for both comfort and style. Our product lineup
                includes various fits (slim, straight, relaxed) and finishes (dark wash, stonewash, etc.), each crafted
                with meticulous attention to detail – from precise stitching to reinforced seams.
              </Text>
              <Text fontSize="lg">
                We plan to expand our collection with complementary apparel and accessories that align with our emphasis
                on craftsmanship and quality. Every pair of ANMI jeans is crafted with meticulous care and high-quality
                materials. From the fabric we source to the finishing touches, quality is at the heart of our brand.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MotionImage
                src="/placeholder.svg?height=600&width=800"
                alt="ANMI Denim Products"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="100%"
                maxH="400px"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Founders Section */}
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
            Meet Our Founders
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="800px" mx="auto">
            {founders.map((founder, index) => (
              <MotionBox
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <MotionBox
                  whileHover={{ y: -5, boxShadow: "xl" }}
                  transition={{ duration: 0.3 }}
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
                      <Avatar size="2xl" src={founder.image} name={founder.name} mb={4} />
                    </MotionBox>
                    <Heading as="h3" size="md" mb={1}>
                      {founder.name}
                    </Heading>
                    <Text fontWeight="medium" color="brand.500" mb={2}>
                      {founder.position}
                    </Text>
                    <Text textAlign="center">{founder.bio}</Text>
                  </VStack>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Brand Promise Section */}
      <Box py={16} bg="brand.500" color="white">
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
              Our Brand Promise
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              "Crafted with Quality"
            </Text>
            <Text fontSize="lg" maxW="2xl" mb={4}>
              At ANMI Denim, this tagline is more than words – it is a commitment. Every pair of ANMI jeans is crafted
              with meticulous care and high-quality materials.
            </Text>
            <Text fontSize="lg" maxW="2xl">
              From the fabric we source to the finishing touches, quality is at the heart of our brand. This promise
              ensures customers receive durable, stylish jeans that embody ANMI Denim's dedication to excellence and
              reliability.
            </Text>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  )
}
