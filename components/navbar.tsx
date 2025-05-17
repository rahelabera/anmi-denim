"use client"

import type React from "react"

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
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionPopoverContent = motion(PopoverContent)

// Product categories
const productCategories = {
  "Denim Types": [
    { name: "Raw Denim", slug: "denim-types/raw-denim" },
    { name: "Selvage Denim", slug: "denim-types/selvage-denim" },
    { name: "Stretch Denim", slug: "denim-types/stretch-denim" },
    { name: "Acid Wash Denim", slug: "denim-types/acid-wash-denim" },
    { name: "Chambray Denim", slug: "denim-types/chambray-denim" },
  ],
  Color: [
    { name: "Black", slug: "color/black" },
    { name: "Blue", slug: "color/blue" },
  ],
  Style: [
    { name: "Slim", slug: "style/slim" },
    { name: "Straight", slug: "style/straight" },
    { name: "Baggy", slug: "style/baggy" },
  ],
}

const Links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "About Us", href: "/about" },
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure()
  const pathname = usePathname()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Check if current path is products or any product category
  const isProductsActive = pathname === "/products" || pathname.startsWith("/products/")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
      onSearchClose()
    }
  }

  return (
    <Box as="nav" bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link href="/" passHref legacyBehavior>
            <Box as="a">
              <Image
                src="/logo.png"
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
                  <Popover key={link.name} trigger="hover" placement="bottom-start" strategy="fixed">
                    <PopoverTrigger>
                      <Box>
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
                      </Box>
                    </PopoverTrigger>
                    <MotionPopoverContent
                      width="220px"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      _focus={{ boxShadow: "md" }}
                      boxShadow="md"
                      borderRadius="md"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <PopoverArrow />
                      <PopoverBody p={0}>
                        <Stack spacing={0}>
                          {Object.entries(productCategories).map(([category, items]) => (
                            <Popover
                              key={category}
                              trigger="hover"
                              placement="right-start"
                              strategy="fixed"
                              onOpen={() => setActiveCategory(category)}
                              onClose={() => setActiveCategory(null)}
                              isOpen={activeCategory === category}
                            >
                              <PopoverTrigger>
                                <Box
                                  fontWeight="bold"
                                  px={4}
                                  py={2}
                                  color="gray.700"
                                  bg="gray.50"
                                  _hover={{ bg: "gray.100", color: "brand.500" }}
                                  cursor="pointer"
                                  transition="all 0.2s"
                                >
                                  {category}
                                </Box>
                              </PopoverTrigger>
                              <PopoverContent
                                width="180px"
                                boxShadow="md"
                                borderRadius="md"
                                border="1px solid"
                                borderColor="gray.200"
                              >
                                <PopoverArrow />
                                <PopoverBody p={0}>
                                  <Stack spacing={0}>
                                    {items.map((item) => (
                                      <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
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
                                          color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.700"}
                                        >
                                          <MotionBox position="relative">
                                            {item.name}
                                            <MotionBox
                                              position="absolute"
                                              bottom="-1px"
                                              left={0}
                                              right={0}
                                              height="1px"
                                              bg="#E05038"
                                              initial={{ scaleX: pathname === `/products/${item.slug}` ? 1 : 0 }}
                                              whileHover={{ scaleX: 1 }}
                                              transformOrigin="left"
                                              transition={{ duration: 0.3 }}
                                            />
                                          </MotionBox>
                                        </ChakraLink>
                                      </Link>
                                    ))}
                                  </Stack>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          ))}
                        </Stack>
                      </PopoverBody>
                    </MotionPopoverContent>
                  </Popover>
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
            <HStack spacing={4}>
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
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                colorScheme="gray"
                onClick={onSearchOpen}
              />
            </HStack>
          </HStack>

          <HStack display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              colorScheme="gray"
              onClick={onSearchOpen}
              mr={2}
            />
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              onClick={isOpen ? onClose : onOpen}
            />
          </HStack>
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
                    {Object.entries(productCategories).map(([category, items]) => (
                      <Box key={category} mt={2}>
                        <Text fontWeight="bold" px={2} py={1} color="gray.500">
                          {category}
                        </Text>
                        <Stack pl={4} spacing={1}>
                          {items.map((item) => (
                            <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
                              <ChakraLink
                                px={2}
                                py={1}
                                fontSize="sm"
                                fontWeight="medium"
                                color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.600"}
                                _hover={{
                                  textDecoration: "none",
                                  color: "#E05038",
                                }}
                                onClick={onClose}
                                position="relative"
                                display="inline-block"
                              >
                                {item.name}
                              </ChakraLink>
                            </Link>
                          ))}
                        </Stack>
                      </Box>
                    ))}
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

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={onSearchClose} initialFocusRef={searchInputRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search ANMI Denim</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearch}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  ref={searchInputRef}
                  placeholder="Search for products, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Button mt={4} colorScheme="brand" type="submit" isDisabled={!searchTerm.trim()}>
                Search
              </Button>
            </form>

            <Divider my={4} />

            <Text fontWeight="medium" mb={2}>
              Quick Links
            </Text>
            <VStack align="stretch" spacing={2}>
              <Link href="/products" passHref legacyBehavior>
                <ChakraLink color="brand.500" onClick={onSearchClose}>
                  All Products
                </ChakraLink>
              </Link>
              <Link href="/products/denim-types/raw-denim" passHref legacyBehavior>
                <ChakraLink color="brand.500" onClick={onSearchClose}>
                  Raw Denim
                </ChakraLink>
              </Link>
              <Link href="/products/denim-types/selvage-denim" passHref legacyBehavior>
                <ChakraLink color="brand.500" onClick={onSearchClose}>
                  Selvage Denim
                </ChakraLink>
              </Link>
              <Link href="/products/color/black" passHref legacyBehavior>
                <ChakraLink color="brand.500" onClick={onSearchClose}>
                  Black Jeans
                </ChakraLink>
              </Link>
              <Link href="/products/style/slim" passHref legacyBehavior>
                <ChakraLink color="brand.500" onClick={onSearchClose}>
                  Slim Fit Jeans
                </ChakraLink>
              </Link>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
