// components/TrendingCarousel.jsx
"use client";

import Image from "next/image";
import PageLayout from "../layout/PageLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Star } from "lucide-react";
import { products } from "@/data/data";
import Link from "next/link";

const TrendingCarousel = () => {

  const handleWishlistClick = (e, productId) => {
    e.stopPropagation();
    // Add your wishlist logic here
    console.log(`Product ${productId} added to wishlist`);
  };

  return (
    <div>
      <PageLayout>
        {/* Section Header */}
        <div className="mb-8 md:pt-10">
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
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="overflow-hidden relative">
                    {/* Product Image */}
                    <Link href={`/shop/details?id=${product.id}`}>
                      <div className="relative w-full aspect-[5/6] bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </Link>
                    <div
                      className="absolute top-2 right-2 z-10 bg-primary/10 backdrop-blur-xs rounded-full p-2 cursor-pointer"
                      onClick={(e) => handleWishlistClick(e, product.id)}
                    >
                      <Heart className="w-6 h-6 text-primary fill-/10" />
                    </div>
                    
                    <div className="mt-4 px-2">
                      <Link href={`/shop/details?id=${product.id}`}>
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1 mb-1 hover:underline">{product.title}</h3>
                      </Link>
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