"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Button,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  HStack,
} from "@chakra-ui/react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiCheckCircle, FiInfo } from "react-icons/fi"
import Link from "next/link"
import { useParams } from "next/navigation"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)

// Define product type to fix TypeScript errors
type Product = {
  id: string
  name: string
  price: string
  image: string
  isNew?: boolean
  isBestSeller?: boolean
}

// Denim type data
const denimTypes = {
  "raw-denim": {
    title: "Raw Denim",
    description:
      "Raw denim, also known as dry denim, is unwashed and untreated after being dyed during production. This results in a rigid fabric with a deep indigo color that fades and ages uniquely based on the wearer's body and lifestyle.",
    characteristics: [
      "Stiff and rigid when new",
      "Deep, rich indigo color",
      "Develops unique fade patterns over time",
      "Typically heavier weight (12-16oz)",
      "Often made with 100% cotton with no stretch",
    ],
    care: [
      "Wash as infrequently as possible (ideally after 6 months of regular wear)",
      "When washing, turn inside out and use cold water",
      "Hang dry only, avoid direct sunlight",
      "Avoid soaking or machine washing initially to achieve high-contrast fades",
    ],
    history:
      "Raw denim gained popularity in the 1950s with workwear and was later embraced by Japanese brands in the 1980s who revived traditional production methods. Today, it's celebrated by denim enthusiasts for its ability to create a personalized garment that tells the story of its wearer.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "1",
        name: "Classic Raw Denim Jeans",
        price: "$129.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
      {
        id: "7",
        name: "Premium Raw Selvedge Jeans",
        price: "$159.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: true,
      },
      {
        id: "13",
        name: "Heavyweight Raw Denim Trousers",
        price: "$139.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "Should I size down with raw denim?",
        answer:
          "Raw denim typically stretches 1-1.5 inches in the waist with wear. Many enthusiasts recommend sizing down 1 size for a perfect fit after break-in.",
      },
      {
        question: "How long until raw denim becomes comfortable?",
        answer:
          "Raw denim usually takes 2-3 weeks of regular wear to begin softening and conforming to your body. Full break-in can take 1-2 months.",
      },
      {
        question: "Will raw denim bleed onto other clothes or furniture?",
        answer:
          "Yes, especially in the beginning. The indigo dye can transfer to light-colored surfaces. This is normal and will diminish over time as the denim releases excess dye.",
      },
    ],
  },
  "selvage-denim": {
    title: "Selvage Denim",
    description:
      "Selvage (or selvedge) denim is characterized by a clean, finished edge that prevents unraveling. It's produced on traditional shuttle looms, creating a self-finished edge with colored ID threads that are often visible when cuffs are rolled up.",
    characteristics: [
      "Tightly woven with a dense, durable construction",
      "Distinctive colored ID threads (typically red, white, or blue)",
      "Often higher quality due to slower production methods",
      "Usually heavier weight and more substantial feel",
      "Limited width due to shuttle loom constraints",
    ],
    care: [
      "Wash inside out in cold water",
      "Avoid harsh detergents that can damage the selvage edge",
      "Hang dry to maintain structure and prevent shrinkage",
      "Iron on low heat if necessary, avoiding the selvage edge",
    ],
    history:
      "Selvage denim was the standard production method until the 1950s-60s when faster, wider projectile looms became popular. Japanese manufacturers revived traditional selvage production in the 1980s, preserving the craft and creating premium denim that's now sought after worldwide.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "2",
        name: "Selvage Straight Fit Jeans",
        price: "$149.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: true,
      },
      {
        id: "12",
        name: "Japanese Selvage Denim Jeans",
        price: "$179.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
      {
        id: "14",
        name: "Vintage Wash Selvage Trousers",
        price: "$159.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "What's the difference between selvage and raw denim?",
        answer:
          "Selvage refers to how the fabric is woven (on shuttle looms with a self-finished edge), while raw refers to the lack of washing/treatment. Denim can be both selvage and raw, or just one of these characteristics.",
      },
      {
        question: "Why is selvage denim more expensive?",
        answer:
          "Selvage denim is produced on traditional shuttle looms that are slower and create less fabric per day than modern looms. The production process is more labor-intensive and often uses higher quality cotton.",
      },
      {
        question: "How can I tell if my denim is selvage?",
        answer:
          "Check the outseam (the outer edge of the pant leg). Selvage denim will have a clean, finished edge often with colored threads running through it, visible when you cuff the jeans.",
      },
    ],
  },
  "stretch-denim": {
    title: "Stretch Denim",
    description:
      "Stretch denim combines traditional cotton denim with elastane (spandex) or similar stretchy fibers. This creates a comfortable, flexible fabric that moves with the body while maintaining the classic denim look.",
    characteristics: [
      "Contains 1-5% elastane or similar stretch fibers",
      "More comfortable and forgiving fit",
      "Excellent recovery (returns to original shape)",
      "Often lighter weight than traditional denim",
      "Available in various stretch levels (comfort stretch to super stretch)",
    ],
    care: [
      "Machine wash in cold water to preserve elasticity",
      "Avoid high heat drying which can damage stretch fibers",
      "Use mild detergents without bleach",
      "Avoid fabric softeners which can break down elastane",
    ],
    history:
      "Stretch denim was first introduced in the late 1970s but gained mainstream popularity in the 1990s and 2000s. The innovation revolutionized the denim industry by combining the authentic look of denim with unprecedented comfort and flexibility.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "3",
        name: "Comfort Stretch Slim Jeans",
        price: "$89.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
      {
        id: "8",
        name: "Ultra Stretch Skinny Jeans",
        price: "$99.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: true,
      },
      {
        id: "15",
        name: "Performance Stretch Denim Trousers",
        price: "$109.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "Does stretch denim last as long as regular denim?",
        answer:
          "With proper care, high-quality stretch denim can last nearly as long as traditional denim. However, the elastane fibers may eventually break down over time, reducing the stretch recovery.",
      },
      {
        question: "Will stretch denim bag out or lose shape?",
        answer:
          "Lower quality stretch denim can bag out, especially at stress points like knees and seat. Premium stretch denim with good recovery will maintain its shape much better.",
      },
      {
        question: "Is stretch denim good for all body types?",
        answer:
          "Yes, stretch denim is particularly versatile across body types. It provides comfort for all shapes while allowing for closer fits that might be uncomfortable in rigid denim.",
      },
    ],
  },
  "acid-wash-denim": {
    title: "Acid Wash Denim",
    description:
      "Acid wash denim features a distinctive mottled or marbled appearance created through a chemical process. Contrary to its name, the technique typically uses chlorine bleach rather than acid to create the characteristic contrasting patterns.",
    characteristics: [
      "Distinctive marbled or spotted appearance",
      "High contrast between dark and light areas",
      "Pre-softened fabric due to the washing process",
      "Vintage 80s-90s aesthetic",
      "Each piece has a unique pattern",
    ],
    care: [
      "Wash separately for the first few washes as some color may still bleed",
      "Use color-safe detergents to preserve the pattern",
      "Avoid additional bleach which can further lighten the fabric",
      "Turn inside out when washing to reduce abrasion on the finish",
    ],
    history:
      "Acid wash denim became wildly popular in the 1980s as part of the punk and rock fashion movements. The technique was discovered accidentally in Italy in the late 1970s and quickly became a fashion phenomenon. After falling out of favor in the 1990s, it has seen periodic revivals as a retro fashion statement.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "4",
        name: "Vintage Acid Wash Jeans",
        price: "$99.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
      {
        id: "9",
        name: "Distressed Acid Wash Trousers",
        price: "$109.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
      {
        id: "16",
        name: "Modern Acid Wash Slim Jeans",
        price: "$119.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "Is acid wash denim actually made with acid?",
        answer:
          "Despite the name, acid wash denim is typically created using chlorine bleach, not acid. The process involves treating denim with pumice stones soaked in bleach to create the distinctive pattern.",
      },
      {
        question: "Is acid wash denim durable?",
        answer:
          "The acid wash process can slightly weaken the fabric compared to untreated denim. However, modern production techniques have improved, and quality acid wash denim can still be quite durable.",
      },
      {
        question: "Can I create acid wash effects at home?",
        answer:
          "While DIY acid wash techniques exist, they're not recommended as they involve harsh chemicals that can be dangerous without proper handling and ventilation. Professional results are difficult to achieve at home.",
      },
    ],
  },
  "chambray-denim": {
    title: "Chambray Denim",
    description:
      "Chambray is a lightweight fabric that resembles denim but features a different weaving technique. It uses a plain weave rather than the twill weave of traditional denim, resulting in a softer, lighter fabric with a similar appearance.",
    characteristics: [
      "Lightweight and breathable",
      "Softer feel than traditional denim",
      "Plain weave construction (rather than twill)",
      "Often has a slight sheen",
      "Typically dyed with indigo for a denim-like appearance",
    ],
    care: [
      "Machine washable in cold water",
      "Can be tumble dried on low heat",
      "Iron on medium heat if needed",
      "Gets softer with each wash",
    ],
    history:
      "Chambray has been produced since the 1500s, originating in the town of Cambrai, France (hence the name). It became popular in workwear and military uniforms before entering mainstream fashion. While not technically denim, it's often grouped with denim products due to its similar appearance and complementary styling.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "5",
        name: "Lightweight Chambray Trousers",
        price: "$79.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: true,
      },
      {
        id: "11",
        name: "Chambray Summer Trousers",
        price: "$84.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
      {
        id: "17",
        name: "Relaxed Fit Chambray Jeans",
        price: "$89.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "What's the difference between chambray and denim?",
        answer:
          "While both are typically made from cotton and often dyed with indigo, chambray uses a plain weave (one-over-one-under) while denim uses a twill weave (diagonal pattern). This makes chambray lighter and softer than denim.",
      },
      {
        question: "Is chambray good for hot weather?",
        answer:
          "Yes, chambray is excellent for warm weather. Its lightweight, breathable construction makes it much more comfortable in heat than traditional denim.",
      },
      {
        question: "Does chambray fade like denim?",
        answer:
          "Chambray can fade over time, especially if dyed with indigo, but typically doesn't develop the same distinctive fade patterns as denim due to its different weave structure and lighter weight.",
      },
    ],
  },
  "printed-denim": {
    title: "Printed Denim",
    description:
      "Printed denim features patterns, designs, or images applied directly to denim fabric. This technique allows for endless creative possibilities, from subtle textures to bold graphics, transforming traditional denim into unique fashion statements.",
    characteristics: [
      "Distinctive patterns or designs printed on denim base",
      "Can feature anything from subtle textures to bold graphics",
      "Often uses specialized printing techniques for durability",
      "Available in various weights and stretch levels",
      "Each design can be limited edition or unique",
    ],
    care: [
      "Wash inside out in cold water to preserve prints",
      "Avoid harsh detergents or bleach",
      "Line dry or tumble dry on low heat",
      "Iron on reverse side if needed, avoiding direct heat on prints",
    ],
    history:
      "While denim decoration has existed for decades through embroidery and patches, modern printed denim emerged in the early 2000s as digital printing technology advanced. The technique gained popularity for its ability to create unique, eye-catching designs that stand out from traditional denim.",
    image: "/placeholder.svg?height=800&width=600",
    products: [
      {
        id: "6",
        name: "Artisan Printed Denim Jeans",
        price: "$119.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
      {
        id: "10",
        name: "Floral Printed Denim Jeans",
        price: "$129.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: true,
        isBestSeller: false,
      },
      {
        id: "18",
        name: "Geometric Print Denim Trousers",
        price: "$124.99",
        image: "/placeholder.svg?height=600&width=400",
        isNew: false,
        isBestSeller: false,
      },
    ],
    faqs: [
      {
        question: "Are printed designs on denim durable?",
        answer:
          "Quality printed denim uses specialized techniques that make the designs quite durable. However, prints may gradually fade with repeated washing, especially with lower quality products.",
      },
      {
        question: "Can printed denim be stretched?",
        answer:
          "Yes, printed denim is available with stretch components. However, some very detailed or rigid prints might limit the stretch capability in certain areas.",
      },
      {
        question: "How should I style printed denim?",
        answer:
          "Printed denim makes a statement on its own, so it's often best paired with simpler pieces. Let the printed denim be the focal point by keeping the rest of your outfit more subdued.",
      },
    ],
  },
}

export default function DenimTypePage() {
  const params = useParams()
  const typeSlug = params.type as string

  // Get the denim type data based on the URL parameter
  const denimType = denimTypes[typeSlug as keyof typeof denimTypes]

  if (!denimType) {
    return (
      <Container maxW="container.xl" py={16}>
        <Heading>Denim Type Not Found</Heading>
        <Text mt={4}>The denim type you're looking for doesn't exist.</Text>
        <Button as={Link} href="/products" colorScheme="brand" mt={8}>
          Back to Products
        </Button>
      </Container>
    )
  }

  const heroRef = useRef(null)
  const characteristicsRef = useRef(null)
  const productsRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const characteristicsInView = useInView(characteristicsRef, { once: true, amount: 0.3 })
  const productsInView = useInView(productsRef, { once: true, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 })

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.500" py={16} color="white" ref={heroRef}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h1" size="2xl" mb={4}>
                {denimType.title}
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                {denimType.description}
              </Text>
              <Button
                as={Link}
                href="#products"
                size="lg"
                mt={6}
                colorScheme="whiteAlpha"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                View Products
              </Button>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={denimType.image || "/placeholder.svg"}
                alt={denimType.title}
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h={{ base: "300px", md: "400px" }}
                shadow="2xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Characteristics Section */}
      <Box py={16} ref={characteristicsRef}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={characteristicsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                Characteristics
              </Heading>
              <List spacing={3}>
                {denimType.characteristics.map((characteristic, index) => (
                  <MotionBox
                    key={index}
                    as={ListItem}
                    display="flex"
                    alignItems="center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={characteristicsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    <ListIcon as={FiCheckCircle} color="brand.500" />
                    {characteristic}
                  </MotionBox>
                ))}
              </List>

              <Heading as="h3" size="lg" mt={10} mb={4}>
                Care Instructions
              </Heading>
              <List spacing={3}>
                {denimType.care.map((instruction, index) => (
                  <MotionBox
                    key={index}
                    as={ListItem}
                    display="flex"
                    alignItems="center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={characteristicsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                  >
                    <ListIcon as={FiInfo} color="brand.500" />
                    {instruction}
                  </MotionBox>
                ))}
              </List>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={characteristicsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                History & Background
              </Heading>
              <Text fontSize="lg" lineHeight="tall">
                {denimType.history}
              </Text>

              <Box mt={8} p={6} bg="gray.50" borderRadius="lg" borderLeft="4px solid" borderColor="brand.500">
                <Heading as="h3" size="md" mb={2}>
                  Did You Know?
                </Heading>
                <Text>
                  {denimType.title === "Raw Denim" &&
                    "Some raw denim enthusiasts go to extreme lengths to create unique fade patterns, including wearing their jeans for months without washing, soaking them in the ocean, or even freezing them to kill bacteria without washing."}
                  {denimType.title === "Selvage Denim" &&
                    "The colored threads in selvage denim (often red) were originally used by mills as a way to identify their fabrics when rolled. Today, these ID threads have become a mark of quality that denim enthusiasts proudly display by cuffing their jeans."}
                  {denimType.title === "Stretch Denim" &&
                    "The first patent for stretch denim was filed in 1962, but it wasn't until the late 1970s that the technology became commercially viable, revolutionizing the comfort and fit of jeans worldwide."}
                  {denimType.title === "Acid Wash Denim" &&
                    "The acid wash technique was discovered accidentally when pumice stones with bleach were added to volcanic rocks during the washing process at a laundry facility in Italy."}
                  {denimType.title === "Chambray Denim" &&
                    "Chambray was a staple in US Navy uniforms from the early 20th century, where it earned the nickname 'blue chambray shirts' as part of the enlisted sailors' working uniform."}
                  {denimType.title === "Printed Denim" &&
                    "Some high-end printed denim uses techniques that actually embed the design into the fabric rather than just printing on the surface, creating patterns that can last as long as the garment itself."}
                </Text>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Products Section */}
      <Box py={16} bg="gray.50" id="products" ref={productsRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {denimType.title} Products
          </MotionHeading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {denimType.products.map((product, index) => (
              <MotionBox
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Link href={`/products/${product.id}`} passHref>
                  <MotionBox
                    as="a"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="white"
                    whileHover={{ y: -5, boxShadow: "xl" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box position="relative" h="300px">
                      <MotionImage
                        src={product.image}
                        alt={product.name}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <HStack position="absolute" top={2} right={2} spacing={2}>
                        {product.isNew && (
                          <Badge colorScheme="green" variant="solid" px={2} py={1} borderRadius="full">
                            New
                          </Badge>
                        )}
                        {product.isBestSeller && (
                          <Badge colorScheme="orange" variant="solid" px={2} py={1} borderRadius="full">
                            Best Seller
                          </Badge>
                        )}
                      </HStack>
                    </Box>
                    <Box p={4}>
                      <Heading size="md" mb={2}>
                        {product.name}
                      </Heading>
                      <Text fontWeight="bold" color="brand.500">
                        {product.price}
                      </Text>
                    </Box>
                  </MotionBox>
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={10}>
            <Button
              as={Link}
              href={`/products?category=${denimType.title.replace(" ", "-")}`}
              colorScheme="brand"
              size="lg"
            >
              View All {denimType.title} Products
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={16} ref={faqRef}>
        <Container maxW="container.xl">
          <MotionHeading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </MotionHeading>

          <MotionBox
            maxW="3xl"
            mx="auto"
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion allowToggle>
              {denimType.faqs.map((faq, index) => (
                <MotionBox
                  key={index}
                  as={AccordionItem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
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
      <Box py={16} bg="black" color="white">
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
              Experience the Quality of {denimType.title}
            </Heading>
            <Text fontSize="lg" maxW="2xl" mb={8}>
              Browse our collection of premium {denimType.title.toLowerCase()} products and find your perfect pair.
            </Text>
            <Button
              as={Link}
              href="/products"
              size="lg"
              colorScheme="brand"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              Shop All Denim Types
            </Button>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  )
}

