// filepath: c:\Projects\ANMI\anmi-denim\lib\mock-data.ts
// Mock product data
export const products = [
  {
    id: "black-slim-1",
    name: "Black Slim Jeans",
    category: "Black",
    style: "Slim",
    price: 1300,
    image: "/slimblackfold.jpg",
    images: [
      "/slimblackfold.jpg",
      "/slimblackfold.jpg",
      "/slimblackfold.jpg",
    ],
    description: "Slim tapered black jeans with slight stretch for comfort.",
    features: [
      "Slim tapered leg",
      "Stretch-infused denim for comfort",
      "Five-pocket styling",
    ],
    sizing: "Fits true to size. Model wears 31.",
    care: "Wash inside out in cold water. Hang dry.",
    featured: true,
    available: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "blue-straight-1",
    name: "Blue Straight Jeans",
    category: "Blue",
    style: "Straight",
    price: 1300,
    image: "/straightfold.jpg",
    images: [
      "/straightfold.jpg",
      "/slimbluefront.png",
      "/slimbluefold.png",
    ],
    description: "Classic blue straight-cut jeans that sit comfortably on the waist and fall straight from the knee.",
    features: [
      "Classic straight leg",
      "Durable mid-weight denim",
      "Clean finished hems",
    ],
    sizing: "True to size with room in the thigh for ease of movement.",
    care: "Machine wash cold inside out. Tumble low or hang dry.",
    featured: true,
    available: true,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "black-baggy-1",
    name: "Black Baggy Jeans",
    category: "Black",
    style: "Baggy",
    price: 1300,
    image: "/slimblackfold.jpg",
    images: [
      "/slimblackfold.jpg",
      "/slimblackfold.jpg",
    ],
    description: "Relaxed baggy jeans in black with an easy, casual silhouette.",
    features: ["Relaxed fit", "Soft hand-feel", "Roomy pockets"],
    sizing: "If between sizes, consider sizing down for a neater fit.",
    care: "Wash inside out and hang to dry to avoid shrinkage.",
    featured: false,
    available: false,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "blue-slim-1",
    name: "Blue Slim Jeans",
    category: "Blue",
    style: "Slim",
    price: 1300,
    image: "/slimbluefront.png",
    images: [
      "/slimbluefront.png",
      "/slimbluefold.png",
      "/slimblueback.png",
    ],
    description: "Contemporary blue slim jeans with a flattering silhouette and slight stretch.",
    features: ["Slim leg", "Comfort stretch", "Timeless wash"],
    sizing: "Fits true to size. Model wears 30.",
    care: "Wash with like colors. Line dry.",
    featured: false,
    available: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "black-straight-1",
    name: "Black Straight Jeans",
    category: "Black",
    style: "Straight",
    price: 1300,
    image: "/slimblackfold.jpg",
    images: ["/slimblackfold.jpg"],
    description: "Versatile black straight jeans with a classic cut.",
    features: ["Straight leg", "Durable denim"],
    sizing: "Runs true to size.",
    care: "Machine wash cold.",
    featured: false,
    available: true,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "blue-baggy-1",
    name: "Blue Baggy Jeans",
    category: "Blue",
    style: "Baggy",
    price: 1300,
    image: "/straightfold.jpg",
    images: ["/straightfold.jpg"],
    description: "Casual baggy jeans in a classic blue denim wash.",
    features: ["Baggy silhouette", "Easy movement"],
    sizing: "Loose fit; size as usual or size down for a slimmer look.",
    care: "Wash inside out and hang dry.",
    featured: false,
    available: false,
    isNew: false,
    isBestSeller: false,
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