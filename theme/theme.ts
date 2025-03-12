import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffeae5",
      100: "#ffcdc0",
      200: "#ffaf9a",
      300: "#ff9174",
      400: "#ff734e",
      500: "#e05038", // Primary color
      600: "#c04530",
      700: "#a03a28",
      800: "#802e20",
      900: "#602318",
    },
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
})

export default theme

