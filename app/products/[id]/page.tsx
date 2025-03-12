import Link from "next/link"
import Image from "next/image"
import { getProductById } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/products" className="text-primary hover:underline flex items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Premium quality denim material</li>
                <li>Durable construction</li>
                <li>Comfortable fit</li>
                <li>Versatile styling options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Care Instructions</h3>
              <p className="text-gray-600">
                Machine wash cold with similar colors. Tumble dry low. Do not bleach.
              </p>
            </div>
          </div>
          
          <div className="mt-8 space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
