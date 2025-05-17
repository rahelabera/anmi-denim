import HeroSection from "@/components/home/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import AboutSection from "@/components/home/about-section"
import CategoriesSection from "@/components/home/categories-section"
import CtaSection from "@/components/home/cta-section"
import ProductsSection from "@/components/home/products-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <AboutSection />
      <ProductsSection />
      <CategoriesSection />
      <CtaSection />
    </>
  )
}
