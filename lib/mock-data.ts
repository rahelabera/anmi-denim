// filepath: c:\Projects\ANMI\anmi-denim\lib\mock-data.ts
// Mock product data
export const products = [
  {
    id: "classic-jeans",
    name: "Classic Denim Jeans",
    description: "Premium quality classic denim jeans with perfect fit and exceptional durability.",
    price: 89.99,
    image: "/classic.png",
    category: "Jeans",
    featured: true
  },
  {
    id: "denim-jacket",
    name: "Denim Jacket",
    description: "Stylish denim jacket with modern design, perfect for casual and semi-formal occasions.",
    price: 129.99,
    image: "/jacket.png",
    category: "Jackets",
    featured: true
  },
  {
    id: "denim-skirt",
    name: "Denim Skirt",
    description: "Versatile denim skirt that combines comfort with contemporary fashion trends.",
    price: 69.99,
    image: "/skirt.png",
    category: "Skirts",
    featured: true
  },
  {
    id: "slim-fit-jeans",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with stretch fabric for maximum comfort and style.",
    price: 94.99,
    image: "/slim.png",
    category: "Jeans",
    featured: false
  },
  {
    id: "denim-shirt",
    name: "Denim Shirt",
    description: "Classic denim shirt that works great for casual and smart casual outfits.",
    price: 79.99,
    image: "/shirt.png",
    category: "Shirts",
    featured: false
  },
  {
    id: "denim-overalls",
    name: "Denim Overalls",
    description: "Comfortable and stylish denim overalls for a casual, relaxed look.",
    price: 109.99,
    image: "/overall.png",
    category: "Overalls",
    featured: false
  },
];

// Get all products
export function getAllProducts() {
  return products;
}

// Get featured products
export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

// Get product by ID
export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

// Search products
export function searchProducts(query: string) {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
}