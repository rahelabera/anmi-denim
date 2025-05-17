"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { searchProducts } from "@/lib/mock-data"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate search API call
    setIsLoading(true)
    setTimeout(() => {
      if (!query) {
        setResults([])
      } else {
        const filteredProducts = searchProducts(query);
        setResults(filteredProducts)
      }
      setIsLoading(false)
    }, 500) // Simulate network delay
  }, [query])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold">
          {query ? `Search Results for "${query}"` : "Search Results"}
        </h1>
        <p className="text-gray-600 mt-2">
          {isLoading
            ? "Searching..."
            : results.length > 0
              ? `Found ${results.length} result${results.length === 1 ? "" : "s"}`
              : "No results found. Try a different search term."}
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg h-[400px] bg-gray-100 animate-pulse"></div>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block">
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="bg-primary text-white px-3 py-1 rounded text-sm">View Details</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">No products match your search criteria.</p>
          <Link 
            href="/products"
            className="bg-primary text-white px-6 py-2 rounded-lg inline-block hover:bg-primary/90 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      )}
    </div>
  )
}
