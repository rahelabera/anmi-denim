import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MaterialPageProps {
  params: {
    id: string
  }
}

export default function MaterialPage({ params }: MaterialPageProps) {
  // In a real application, you would fetch the material data based on the ID
  // For this example, we'll use a mock material
  const material = materials.find((m) => m.id === params.id) || materials[0]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Link href="/materials" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Materials
          </Link>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="flex flex-col gap-4">
              <Image
                src={material.image || "/placeholder.svg"}
                alt={material.name}
                width={600}
                height={400}
                className="aspect-video object-cover rounded-lg overflow-hidden"
              />
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <button key={i} className="border hover:border-primary rounded-lg overflow-hidden">
                    <Image
                      src={material.image || "/placeholder.svg"}
                      alt={`${material.name} view ${i}`}
                      width={150}
                      height={100}
                      className="aspect-video object-cover"
                    />
                    <span className="sr-only">View Image {i}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{material.name}</h1>
                <div className="mt-2">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                    {material.category}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground">{material.description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Properties</h3>
                <ul className="space-y-2">
                  {material.properties.map((property, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{property}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Applications</h3>
                <p className="text-muted-foreground">
                  This material is commonly used in the following industries and applications:
                </p>
                <div className="flex flex-wrap gap-2">
                  {material.applications.map((application, index) => (
                    <span
                      key={index}
                      className="inline-block bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {material.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{spec.name}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="products" className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Products Made with {material.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {material.products.map((product, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="aspect-video object-cover w-full"
                      />
                      <div className="p-4">
                        <h4 className="font-bold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Resources & Documentation</h3>
                <ul className="space-y-4">
                  {material.resources.map((resource, index) => (
                    <li key={index}>
                      <Link href={resource.url} className="flex items-center text-primary hover:underline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        {resource.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

// Mock data for materials
const materials = [
  {
    id: "steel",
    name: "Premium Steel",
    description:
      "High-grade steel for industrial applications with superior durability and strength. Our premium steel is manufactured using the latest technologies to ensure consistent quality and performance in demanding environments.",
    category: "Metals",
    image: "/placeholder.svg?height=400&width=600",
    properties: [
      "High tensile strength",
      "Excellent corrosion resistance",
      "Good weldability",
      "Temperature resistant up to 800°C",
      "Uniform microstructure",
    ],
    applications: ["Construction", "Automotive", "Machinery", "Energy", "Infrastructure", "Manufacturing"],
    specifications: [
      { name: "Density", value: "7.85 g/cm³" },
      { name: "Tensile Strength", value: "560-1600 MPa" },
      { name: "Yield Strength", value: "350-1100 MPa" },
      { name: "Elongation", value: "10-25%" },
      { name: "Hardness", value: "170-350 HB" },
      { name: "Thermal Conductivity", value: "45-55 W/m·K" },
      { name: "Melting Point", value: "1450-1520°C" },
      { name: "Carbon Content", value: "0.1-1.5%" },
    ],
    products: [
      {
        name: "Structural Beams",
        description: "High-strength beams for construction and infrastructure projects.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Automotive Components",
        description: "Precision-engineered parts for the automotive industry.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Industrial Equipment",
        description: "Durable machinery components for manufacturing applications.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    resources: [
      { name: "Technical Data Sheet", url: "#" },
      { name: "Safety Data Sheet", url: "#" },
      { name: "Application Guide", url: "#" },
      { name: "Quality Certification", url: "#" },
    ],
  },
  // Other materials would be defined similarly
]

