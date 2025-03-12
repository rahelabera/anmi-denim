"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"

// Product actions
export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { success: false, error: "Failed to fetch products" }
  }
}

export async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
      },
      take: 6,
    })
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return { success: false, error: "Failed to fetch featured products" }
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      return { success: false, error: "Product not found" }
    }

    return { success: true, data: product }
  } catch (error) {
    console.error("Error fetching product:", error)
    return { success: false, error: "Failed to fetch product" }
  }
}

// Contact form action
export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const message = formData.get("message") as string

    await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    })

    revalidatePath("/contact")
    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit contact form" }
  }
}

// Custom order action
export async function submitCustomOrder(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const description = formData.get("description") as string
    const quantity = Number.parseInt(formData.get("quantity") as string)
    const deadlineStr = formData.get("deadline") as string

    // Parse deadline if provided
    let deadline = null
    if (deadlineStr) {
      deadline = new Date(deadlineStr)
    }

    await prisma.customOrder.create({
      data: {
        name,
        email,
        phone,
        description,
        quantity,
        deadline,
      },
    })

    revalidatePath("/custom")
    return { success: true }
  } catch (error) {
    console.error("Error submitting custom order:", error)
    return { success: false, error: "Failed to submit custom order" }
  }
}

// Wholesale inquiry action
export async function submitWholesaleInquiry(formData: FormData) {
  try {
    const companyName = formData.get("companyName") as string
    const contactName = formData.get("contactName") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const businessType = formData.get("businessType") as string
    const message = formData.get("message") as string

    await prisma.wholesaleInquiry.create({
      data: {
        companyName,
        contactName,
        email,
        phone,
        businessType,
        message,
      },
    })

    revalidatePath("/wholesale")
    return { success: true }
  } catch (error) {
    console.error("Error submitting wholesale inquiry:", error)
    return { success: false, error: "Failed to submit wholesale inquiry" }
  }
}

// Search products action
export async function searchProducts(query: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    })

    return { success: true, data: products }
  } catch (error) {
    console.error("Error searching products:", error)
    return { success: false, error: "Failed to search products" }
  }
}

