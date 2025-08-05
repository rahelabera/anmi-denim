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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionPopoverContent = motion(PopoverContent)

// Product categories
const productCategories = {
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null) // For desktop popover
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null) // For Color/Style
  const [isProductsOpen, setIsProductsOpen] = useState(false) // For mobile Products toggle
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Check if current path is products or any product category
  const isProductsActive = pathname === "/products" || pathname.startsWith("/products/")

  // Sync underline animation with pathname changes
  useEffect(() => {
    // Force re-render to update MotionBox animations
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
      onSearchClose()
    }
  }

  return (
    <Box
      as="nav"
      bg="white"
      px={4}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      aria-label="Main navigation"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link href="/" passHref legacyBehavior>
            <Box as="a" aria-label="ANMI Denim Home">
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
                  <Popover
                    key="Products"
                    trigger="click"
                    placement="bottom-start"
                    strategy="fixed"
                    isOpen={activeCategory === "Products"}
                    onClose={() => {
                      setActiveCategory(null)
                      setOpenSubDropdown(null)
                    }}
                  >
                    <PopoverTrigger>
                      <Box
                        tabIndex={0}
                        onClick={() =>
                          setActiveCategory(activeCategory === "Products" ? null : "Products")
                        }
                      >
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
                            fontWeight="semibold"
                            fontSize="md"
                            color={isProductsActive ? "#E05038" : "gray.700"}
                            _hover={{
                              textDecoration: "none",
                              color: "#E05038",
                            }}
                            display="flex"
                            alignItems="center"
                          >
                            Products
                            <ChevronDownIcon
                              ml={1}
                              transition="transform 0.2s"
                              transform={activeCategory === "Products" ? "rotate(180deg)" : "rotate(0deg)"}
                            />
                          </ChakraLink>
                          <MotionBox
                            position="absolute"
                            bottom="-2px"
                            left={0}
                            right={0}
                            height="2px"
                            bg="#E05038"
                            animate={{ scaleX: isProductsActive ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </MotionBox>
                      </Box>
                    </PopoverTrigger>
                    <AnimatePresence>
                      {activeCategory === "Products" && (
                        <MotionPopoverContent
                          width="240px"
                          boxShadow="lg"
                          borderRadius="lg"
                          border="none"
                          bg="white"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <PopoverArrow bg="white" />
                          <PopoverBody p={0}>
                            <Stack spacing={0}>
                              {/* Color Dropdown */}
                              <Box>
                                <MotionBox
                                  fontWeight="bold"
                                  px={4}
                                  py={3}
                                  color="gray.800"
                                  bg={openSubDropdown === "Color" ? "gray.50" : "white"}
                                  _hover={{ bg: "gray.50", color: "#E05038" }}
                                  cursor="pointer"
                                  transition="all 0.2s"
                                  onClick={() =>
                                    setOpenSubDropdown(openSubDropdown === "Color" ? null : "Color")
                                  }
                                  whileHover={{ x: 2 }}
                                >
                                  Color <ChevronDownIcon ml={1} />
                                </MotionBox>
                                <AnimatePresence>
                                  {openSubDropdown === "Color" && (
                                    <MotionBox
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Stack spacing={0} pl={4} bg="white">
                                        {productCategories.Color.map((item) => (
                                          <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
                                            <ChakraLink
                                              display="block"
                                              px={4}
                                              py={2}
                                              fontSize="sm"
                                              fontWeight="medium"
                                              color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.700"}
                                              _hover={{
                                                bg: "rgba(224, 80, 56, 0.1)",
                                                color: "#E05038",
                                                textDecoration: "none",
                                              }}
                                            >
                                              {item.name}
                                            </ChakraLink>
                                          </Link>
                                        ))}
                                      </Stack>
                                    </MotionBox>
                                  )}
                                </AnimatePresence>
                              </Box>
                              {/* Style Dropdown */}
                              <Box>
                                <MotionBox
                                  fontWeight="bold"
                                  px={4}
                                  py={3}
                                  color="gray.800"
                                  bg={openSubDropdown === "Style" ? "gray.50" : "white"}
                                  _hover={{ bg: "gray.50", color: "#E05038" }}
                                  cursor="pointer"
                                  transition="all 0.2s"
                                  onClick={() =>
                                    setOpenSubDropdown(openSubDropdown === "Style" ? null : "Style")
                                  }
                                  whileHover={{ x: 2 }}
                                >
                                  Style <ChevronDownIcon ml={1} />
                                </MotionBox>
                                <AnimatePresence>
                                  {openSubDropdown === "Style" && (
                                    <MotionBox
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Stack spacing={0} pl={4} bg="white">
                                        {productCategories.Style.map((item) => (
                                          <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
                                            <ChakraLink
                                              display="block"
                                              px={4}
                                              py={2}
                                              fontSize="sm"
                                              fontWeight="medium"
                                              color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.700"}
                                              _hover={{
                                                bg: "rgba(224, 80, 56, 0.1)",
                                                color: "#E05038",
                                                textDecoration: "none",
                                              }}
                                            >
                                              {item.name}
                                            </ChakraLink>
                                          </Link>
                                        ))}
                                      </Stack>
                                    </MotionBox>
                                  )}
                                </AnimatePresence>
                              </Box>
                            </Stack>
                          </PopoverBody>
                        </MotionPopoverContent>
                      )}
                    </AnimatePresence>
                  </Popover>
                ) : (
                  <Link key={link.name} href={link.href} passHref legacyBehavior>
                    <MotionBox
                      position="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChakraLink
                        px={2}
                        py={1}
                        rounded="md"
                        fontWeight="semibold"
                        fontSize="md"
                        color={pathname === link.href ? "#E05038" : "gray.700"}
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
                        animate={{ scaleX: pathname === link.href ? 1 : 0 }}
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
                    fontWeight="semibold"
                    fontSize="md"
                    color={pathname === "/contact" ? "#E05038" : "gray.700"}
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
                    animate={{ scaleX: pathname === "/contact" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionBox>
              </Link>
              <IconButton
                aria-label="Search ANMI Denim products"
                icon={<SearchIcon />}
                variant="ghost"
                colorScheme="gray"
                onClick={onSearchOpen}
              />
            </HStack>
          </HStack>

          <HStack display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="Search ANMI Denim products"
              icon={<SearchIcon />}
              variant="ghost"
              colorScheme="gray"
              onClick={onSearchOpen}
              mr={2}
            />
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              onClick={isOpen ? onClose : onOpen}
              colorScheme="gray"
              variant="ghost"
            />
          </HStack>
        </Flex>

        {isOpen && (
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent bg="white" maxW="80vw">
              <DrawerHeader borderBottomWidth="1px" py={3}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Image
                      src="/logo.png"
                      alt="ANMI Denim Logo"
                      h="32px"
                      objectFit="contain"
                      fallbackSrc="/placeholder.svg?height=32&width=100"
                    />
                  </Box>
                  <IconButton
                    aria-label="Close Menu"
                    icon={<CloseIcon />}
                    onClick={onClose}
                    variant="ghost"
                    colorScheme="gray"
                    size="sm"
                  />
                </Flex>
              </DrawerHeader>
              <DrawerBody px={4} py={4}>
                <VStack spacing={3} align="stretch">
                  {Links.map((link) =>
                    link.hasDropdown ? (
                      <Box key={link.name}>
                        <MotionBox
                          display="flex"
                          alignItems="center"
                          px={3}
                          py={2}
                          fontWeight="semibold"
                          fontSize="md"
                          color={isProductsActive ? "#E05038" : "gray.700"}
                          _hover={{
                            textDecoration: "none",
                            color: "#E05038",
                            bg: "gray.50",
                          }}
                          rounded="md"
                          cursor="pointer"
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <Text flex="1">{link.name}</Text>
                          <ChevronDownIcon
                            transform={isProductsOpen ? "rotate(180deg)" : "rotate(0deg)"}
                            transition="transform 0.2s"
                          />
                        </MotionBox>
                        {isProductsOpen && (
                          <Box pl={3}>
                            {/* Color Dropdown */}
                            <MotionBox
                              fontWeight="semibold"
                              px={3}
                              py={2}
                              color="gray.600"
                              bg={openSubDropdown === "Color" ? "gray.50" : "transparent"}
                              _hover={{ bg: "gray.50", color: "#E05038" }}
                              cursor="pointer"
                              rounded="md"
                              display="flex"
                              alignItems="center"
                              transition="all 0.2s"
                              onClick={() =>
                                setOpenSubDropdown(openSubDropdown === "Color" ? null : "Color")
                              }
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              Color <ChevronDownIcon ml={1} />
                            </MotionBox>
                            {openSubDropdown === "Color" && (
                              <Stack pl={5} spacing={1} mt={1}>
                                {productCategories.Color.map((item) => (
                                  <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
                                    <ChakraLink
                                      px={3}
                                      py={1}
                                      fontSize="sm"
                                      fontWeight="medium"
                                      color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.600"}
                                      _hover={{
                                        textDecoration: "none",
                                        color: "#E05038",
                                        bg: "gray.50",
                                      }}
                                      rounded="md"
                                      display="block"
                                      onClick={onClose}
                                    >
                                      {item.name}
                                    </ChakraLink>
                                  </Link>
                                ))}
                              </Stack>
                            )}
                            {/* Style Dropdown */}
                            <MotionBox
                              fontWeight="semibold"
                              px={3}
                              py={2}
                              color="gray.600"
                              bg={openSubDropdown === "Style" ? "gray.50" : "transparent"}
                              _hover={{ bg: "gray.50", color: "#E05038" }}
                              cursor="pointer"
                              rounded="md"
                              display="flex"
                              alignItems="center"
                              transition="all 0.2s"
                              onClick={() =>
                                setOpenSubDropdown(openSubDropdown === "Style" ? null : "Style")
                              }
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              Style <ChevronDownIcon ml={1} />
                            </MotionBox>
                            {openSubDropdown === "Style" && (
                              <Stack pl={5} spacing={1} mt={1}>
                                {productCategories.Style.map((item) => (
                                  <Link key={item.slug} href={`/products/${item.slug}`} passHref legacyBehavior>
                                    <ChakraLink
                                      px={3}
                                      py={1}
                                      fontSize="sm"
                                      fontWeight="medium"
                                      color={pathname === `/products/${item.slug}` ? "#E05038" : "gray.600"}
                                      _hover={{
                                        textDecoration: "none",
                                        color: "#E05038",
                                        bg: "gray.50",
                                      }}
                                      rounded="md"
                                      display="block"
                                      onClick={onClose}
                                    >
                                      {item.name}
                                    </ChakraLink>
                                  </Link>
                                ))}
                              </Stack>
                            )}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Link key={link.name} href={link.href} passHref legacyBehavior>
                        <ChakraLink
                          px={3}
                          py={2}
                          fontWeight="semibold"
                          fontSize="md"
                          color={pathname === link.href ? "#E05038" : "gray.700"}
                          _hover={{
                            textDecoration: "none",
                            color: "#E05038",
                            bg: "gray.50",
                          }}
                          rounded="md"
                          display="block"
                          onClick={onClose}
                        >
                          {link.name}
                        </ChakraLink>
                      </Link>
                    )
                  )}
                  <Link href="/contact" passHref legacyBehavior>
                    <ChakraLink
                      px={3}
                      py={2}
                      fontWeight="semibold"
                      fontSize="md"
                      color={pathname === "/contact" ? "#E05038" : "gray.700"}
                      _hover={{
                        textDecoration: "none",
                        color: "#E05038",
                        bg: "gray.50",
                      }}
                      rounded="md"
                      display="block"
                      onClick={onClose}
                    >
                      Contact Us
                    </ChakraLink>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
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
                  placeholder="Search for premium jeans, styles..."
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
                <ChakraLink color="#E05038" onClick={onSearchClose}>
                  All Products
                </ChakraLink>
              </Link>
              <Link href="/products/style/slim" passHref legacyBehavior>
                <ChakraLink color="#E05038" onClick={onSearchClose}>
                  Slim Fit Jeans
                </ChakraLink>
              </Link>
              <Link href="/products/style/straight" passHref legacyBehavior>
                <ChakraLink color="#E05038" onClick={onSearchClose}>
                  Straight Fit Jeans
                </ChakraLink>
              </Link>
              <Link href="/products/color/black" passHref legacyBehavior>
                <ChakraLink color="#E05038" onClick={onSearchClose}>
                  Black Jeans
                </ChakraLink>
              </Link>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}