"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[calc(100vh-81px)] flex items-center justify-center text-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-black/0"></div>

      {/* Content above the overlay */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-custom text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            Level Up Your Collection With Trusted Sealed Products
          </h1>

          {/* Subtitle */}
          <p className="sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg font-medium">
            Premium Pokémon packs and sports card singles — shipped fast, packed with care.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/shop" passHref>
              <Button>
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
