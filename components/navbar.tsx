"use client"

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link as ChakraLink,
  Container,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

// Denim types for dropdown
const denimTypes = [
  { name: "Raw Denim", slug: "raw-denim" },
  { name: "Selvage Denim", slug: "selvage-denim" },
  { name: "Stretch Denim", slug: "stretch-denim" },
  { name: "Acid Wash Denim", slug: "acid-wash-denim" },
  { name: "Chambray Denim", slug: "chambray-denim" },
  { name: "Printed Denim", slug: "printed-denim" },
]

const Links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Wholesale", href: "/wholesale" },
  { name: "Custom Orders", href: "/custom" },
  { name: "About Us", href: "/about" },
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const [showDropdown, setShowDropdown] = useState(false)

  // Check if current path is products or any denim type
  const isProductsActive = pathname === "/products" || pathname.startsWith("/denim-types")

  return (
    <Box as="nav" bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link href="/" passHref legacyBehavior>
            <Box>
              <Image
                src="/logo2.png"
                alt="ANMI Denim Logo"
                h="40px"
                objectFit="contain"
                fallbackSrc="/placeholder.svg?height=40&width=120"
              />
            </Box>
          </Link>

          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            flex={1}
          >
            <HStack as="nav" spacing={6} justifyContent="center">
              {Links.map((link) =>
                link.hasDropdown ? (
                  <Box
                    key={link.name}
                    position="relative"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link href={link.href} passHref legacyBehavior>
                      <MotionBox
                        position="relative"
                        display="flex"
                        alignItems="center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChakraLink
                          px={2}
                          py={1}
                          rounded="md"
                          fontWeight="medium"
                          color={isProductsActive ? "#E05038" : "gray.600"}
                          _hover={{
                            textDecoration: "none",
                            color: "#E05038",
                          }}
                          display="flex"
                          alignItems="center"
                        >
                          {link.name}
                          <ChevronDownIcon ml={1} />
                        </ChakraLink>
                        <MotionBox
                          position="absolute"
                          bottom="-2px"
                          left={0}
                          right={0}
                          height="2px"
                          bg="#E05038"
                          initial={{ scaleX: isProductsActive ? 1 : 0 }}
                          whileHover={{ scaleX: 1 }}
                          transformOrigin="left"
                          transition={{ duration: 0.3 }}
                        />
                      </MotionBox>
                    </Link>

                    {/* Hover Dropdown */}
                    {showDropdown && (
                      <MotionBox
                        position="absolute"
                        top="100%"
                        left="-20px"
                        minW="200px"
                        bg="white"
                        boxShadow="md"
                        borderRadius="md"
                        overflow="hidden"
                        zIndex={1001}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        mt={2}
                      >
                        <Stack spacing={0}>
                          {denimTypes.map((type) => (
                            <Link key={type.slug} href={`/denim-types/${type.slug}`} passHref legacyBehavior>
                              <ChakraLink
                                display="block"
                                px={4}
                                py={2}
                                position="relative"
                                _hover={{
                                  bg: "rgba(224, 80, 56, 0.05)",
                                  color: "#E05038",
                                  textDecoration: "none",
                                }}
                                color={pathname === `/denim-types/${type.slug}` ? "#E05038" : "gray.700"}
                              >
                                <MotionBox position="relative">
                                  {type.name}
                                  <MotionBox
                                    position="absolute"
                                    bottom="-1px"
                                    left={0}
                                    right={0}
                                    height="1px"
                                    bg="#E05038"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transformOrigin="left"
                                    transition={{ duration: 0.3 }}
                                  />
                                </MotionBox>
                              </ChakraLink>
                            </Link>
                          ))}
                        </Stack>
                      </MotionBox>
                    )}
                  </Box>
                ) : (
                  <Link key={link.name} href={link.href} passHref legacyBehavior>
                    <MotionBox position="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <ChakraLink
                        px={2}
                        py={1}
                        rounded="md"
                        fontWeight="medium"
                        color={pathname === link.href ? "#E05038" : "gray.600"}
                        _hover={{
                          textDecoration: "none",
                          color: "#E05038",
                        }}
                      >
                        {link.name}
                      </ChakraLink>
                      <MotionBox
                        position="absolute"
                        bottom="-2px"
                        left={0}
                        right={0}
                        height="2px"
                        bg="#E05038"
                        initial={{ scaleX: pathname === link.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transformOrigin="left"
                        transition={{ duration: 0.3 }}
                      />
                    </MotionBox>
                  </Link>
                ),
              )}
            </HStack>
            <Link href="/contact" passHref legacyBehavior>
              <MotionBox position="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <ChakraLink
                  px={2}
                  py={1}
                  rounded="md"
                  fontWeight="medium"
                  color={pathname === "/contact" ? "#E05038" : "gray.600"}
                  _hover={{
                    textDecoration: "none",
                    color: "#E05038",
                  }}
                >
                  Contact Us
                </ChakraLink>
                <MotionBox
                  position="absolute"
                  bottom="-2px"
                  left={0}
                  right={0}
                  height="2px"
                  bg="#E05038"
                  initial={{ scaleX: pathname === "/contact" ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transformOrigin="left"
                  transition={{ duration: 0.3 }}
                />
              </MotionBox>
            </Link>
          </HStack>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen && (
          <MotionFlex
            pb={4}
            display={{ md: "none" }}
            direction="column"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Stack as="nav" spacing={4}>
              {Links.map((link) =>
                link.hasDropdown ? (
                  <Box key={link.name}>
                    <Link href={link.href} passHref legacyBehavior>
                      <ChakraLink
                        px={2}
                        py={1}
                        fontWeight="medium"
                        color={isProductsActive ? "#E05038" : "gray.600"}
                        _hover={{
                          textDecoration: "none",
                          color: "#E05038",
                        }}
                      >
                        {link.name}
                      </ChakraLink>
                    </Link>
                    <Stack pl={4} mt={1} spacing={1}>
                      {denimTypes.map((type) => (
                        <Link key={type.slug} href={`/denim-types/${type.slug}`} passHref legacyBehavior>
                          <ChakraLink
                            px={2}
                            py={1}
                            fontSize="sm"
                            fontWeight="medium"
                            color={pathname === `/denim-types/${type.slug}` ? "#E05038" : "gray.600"}
                            _hover={{
                              textDecoration: "none",
                              color: "#E05038",
                            }}
                            onClick={onClose}
                          >
                            {type.name}
                          </ChakraLink>
                        </Link>
                      ))}
                    </Stack>
                  </Box>
                ) : (
                  <Link key={link.name} href={link.href} passHref legacyBehavior>
                    <ChakraLink
                      px={2}
                      py={1}
                      rounded="md"
                      fontWeight="medium"
                      color={pathname === link.href ? "#E05038" : "gray.600"}
                      _hover={{
                        textDecoration: "none",
                        color: "#E05038",
                      }}
                      onClick={onClose}
                    >
                      {link.name}
                    </ChakraLink>
                  </Link>
                ),
              )}
              <Link href="/contact" passHref legacyBehavior>
                <ChakraLink
                  px={2}
                  py={1}
                  rounded="md"
                  fontWeight="medium"
                  color={pathname === "/contact" ? "#E05038" : "gray.600"}
                  _hover={{
                    textDecoration: "none",
                    color: "#E05038",
                  }}
                  onClick={onClose}
                >
                  Contact Us
                </ChakraLink>
              </Link>
            </Stack>
          </MotionFlex>
        )}
      </Container>
    </Box>
  )
}