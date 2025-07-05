// components/TrendingCarousel.jsx
"use client";

import Image from "next/image";
import PageLayout from "../layout/PageLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TrendingCarousel = () => {
  const mockProducts = [
    {
      id: "1",
      title: "Great Ball Mystery Bag",
      image: "/images/product (1).png",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      currency: "$",
    },
    {
      id: "2",
      title: "Toronto Raptors Jersey",
      image: "/images/product (2).png",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      currency: "$",
    },
    {
      id: "3",
      title: "Pokémon TCG Set",
      image: "/images/product (3).png",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      currency: "$",
    },
    {
      id: "4",
      title: "Lakers Basketball Jersey",
      image: "/images/product (4).png",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      currency: "$",
    },
    {
      id: "5",
      title: "Vintage Sports Card",
      image: "/images/product (5).png",
      price: 65,
      oldPrice: 80,
      rating: 4.5,
      currency: "$",
    },
    {
      id: "6",
      title: "Collectible Action Figure",
      image: "/images/product (6).png",
      price: 30,
      oldPrice: 45,
      rating: 4.9,
      currency: "$",
    },
  ];


  return (
    <div>
      <PageLayout>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-medium text-title tracking-tight">
            Trending Products
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {mockProducts.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="overflow-hidden">
                    {/* Product Image */}
                    <div className="relative w-full aspect-[5/6] bg-gray-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="mt-4 px-2">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">{product.title}</h3>
                      <div className="flex justify-between items-center">
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-lg font-semibold text-title">{product.currency}{product.price}</span>
                          {product.oldPrice && (
                            <span className="text-sm text-subtitle line-through">
                              {product.currency}{product.oldPrice}
                            </span>
                          )}
                        </div>
                        <p className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {product.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default TrendingCarousel;