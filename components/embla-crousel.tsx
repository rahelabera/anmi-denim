"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Product = {
  id: string
  name: string
  image: string
  price: string
  category: string
}

// Sample product data
const newProducts: Product[] = [
  {
    id: "1",
    name: "Premium Denim Jacket",
    image: "/placeholder.svg?height=600&width=400",
    price: "$129.99",
    category: "Jackets",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    image: "/placeholder.svg?height=600&width=400",
    price: "$89.99",
    category: "Pants",
  },
  {
    id: "3",
    name: "Denim Shirt",
    image: "/placeholder.svg?height=600&width=400",
    price: "$69.99",
    category: "Shirts",
  },
  {
    id: "4",
    name: "Distressed Denim Shorts",
    image: "/placeholder.svg?height=600&width=400",
    price: "$59.99",
    category: "Shorts",
  },
  {
    id: "5",
    name: "Denim Overalls",
    image: "/placeholder.svg?height=600&width=400",
    price: "$119.99",
    category: "Overalls",
  },
]

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {newProducts.map((product) => (
              <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl mr-4">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold text-[#E05038]">{product.price}</span>
                      <Link
                        href={`/products/${product.id}`}
                        className="rounded-full bg-[#E05038] px-3 py-1 text-sm text-white transition-colors hover:bg-[#c04530]"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#E05038]" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#E05038]" />
        </button>

        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-[#E05038] w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
