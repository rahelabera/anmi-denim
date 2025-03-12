import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Materials</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our extensive range of high-quality materials for various applications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full md:w-1/4">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Search</h2>
                  <div className="flex w-full items-center space-x-2">
                    <Input type="search" placeholder="Search materials..." className="flex-1" />
                    <Button type="submit" size="icon" className="bg-primary text-white hover:bg-primary/90">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Categories</h2>
                  <div className="grid gap-1">
                    <Button variant="ghost" className="justify-start font-normal hover:text-primary">
                      Metals
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal hover:text-primary">
                      Polymers
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal hover:text-primary">
                      Ceramics
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal hover:text-primary">
                      Composites
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal hover:text-primary">
                      Natural Materials
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full justify-start mb-8 overflow-auto">
                  <TabsTrigger value="all">All Materials</TabsTrigger>
                  <TabsTrigger value="metals">Metals</TabsTrigger>
                  <TabsTrigger value="polymers">Polymers</TabsTrigger>
                  <TabsTrigger value="ceramics">Ceramics</TabsTrigger>
                  <TabsTrigger value="composites">Composites</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.map((material) => (
                      <Link key={material.id} href={`/materials/${material.id}`} className="group">
                        <div className="flex flex-col h-full overflow-hidden rounded-lg border bg-background shadow-sm transition-colors hover:border-primary">
                          <div className="aspect-video overflow-hidden">
                            <Image
                              src={material.image || "/placeholder.svg"}
                              alt={material.name}
                              width={600}
                              height={400}
                              className="object-cover transition-transform group-hover:scale-105 h-full w-full"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <h3 className="text-xl font-bold">{material.name}</h3>
                            <p className="mt-2 text-muted-foreground">{material.description}</p>
                            <div className="mt-4">
                              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                                {material.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                {/* Other tab contents would be similar but filtered by category */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const materials = [
  {
    id: "steel",
    name: "Premium Steel",
    description: "High-grade steel for industrial applications with superior durability and strength.",
    category: "Metals",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "aluminum",
    name: "Aluminum Alloy",
    description: "Lightweight aluminum alloys perfect for aerospace and automotive industries.",
    category: "Metals",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "composite",
    name: "Composite Materials",
    description: "Advanced composite materials combining strength with flexibility for modern applications.",
    category: "Composites",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "polymer",
    name: "High-Density Polymers",
    description: "Durable polymers designed for high-stress environments and chemical resistance.",
    category: "Polymers",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "ceramic",
    name: "Industrial Ceramics",
    description: "Heat-resistant ceramics for extreme temperature applications and electrical insulation.",
    category: "Ceramics",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "titanium",
    name: "Titanium Alloys",
    description: "Corrosion-resistant titanium alloys with exceptional strength-to-weight ratio.",
    category: "Metals",
    image: "/placeholder.svg?height=400&width=600",
  },
]

