import Head from "next/head";
import HeroSection from "@/components/home/hero-section";
// import { ProductCarousel } from "@/components/home/product-carousel";
import AboutSection from "@/components/home/about-section";
import CategoriesSection from "@/components/home/categories-section";
import CtaSection from "@/components/home/cta-section";
import ProductsSection from "@/components/home/products-section";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>ANMI Denim - Premium Jeans Crafted in Ethiopia</title>
        <meta
          name="description"
          content="Discover ANMI Denim, a premium denim brand from Addis Ababa, Ethiopia. Our high-quality jeans blend comfort, style, and African craftsmanship for lasting durability."
        />
        <meta
          name="keywords"
          content="ANMI Denim, premium jeans, Ethiopian fashion, high-quality denim, African craftsmanship, stylish jeans, Addis Ababa clothing"
        />
        <meta name="author" content="ANMI Denim" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anmidenim.com" />
        <meta
          property="og:title"
          content="ANMI Denim - Premium Jeans Crafted in Ethiopia"
        />
        <meta
          property="og:description"
          content="Explore ANMI Denim's collection of stylish, durable jeans made in Ethiopia. Crafted with quality, inspired by African innovation."
        />
        <meta
          property="og:image"
          content="https://anmidenim.com/images/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ANMI Denim - Premium Jeans Crafted in Ethiopia"
        />
        <meta
          name="twitter:description"
          content="Shop ANMI Denim for high-quality jeans from Addis Ababa, Ethiopia. Combining comfort, style, and African craftsmanship."
        />
        <meta
          name="twitter:image"
          content="https://anmidenim.com/images/og-image.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ANMI Denim",
            url: "https://anmidenim.com",
            logo: "https://anmidenim.com/images/logo.png",
            description:
              "ANMI Denim is a premium denim brand founded in Addis Ababa, Ethiopia, in 2024. We craft high-quality, stylish, and durable jeans inspired by African craftsmanship.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Addis Ababa",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+251950404844",
              contactType: "customer service",
              email: "email@example.com",
            },
            foundingDate: "2024-11-18",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ANMI Denim Jeans",
            brand: {
              "@type": "Brand",
              name: "ANMI Denim",
            },
            description:
              "Premium jeans from ANMI Denim, crafted with high-quality materials in Addis Ababa, Ethiopia. Available in slim, straight, and relaxed fits with various finishes.",
            category: "Clothing",
            image: "https://anmidenim.com/images/jeans-product.jpg",
            offers: {
              "@type": "Offer",
              priceCurrency: "ETB",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Head>

      {/* Main Content */}
      <main>
        <HeroSection />
        {/* <ProductCarousel /> */}
        <AboutSection />
        <ProductsSection />
        {/* <CategoriesSection /> */}
        <CtaSection />
      </main>
    </>
  );
}