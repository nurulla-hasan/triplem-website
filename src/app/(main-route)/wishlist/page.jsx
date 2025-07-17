"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { products } from "@/data/data";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
    const heroLinks = [
        { name: "Home", href: "/" },
        { name: "Favorite", isCurrent: true }
    ];
    const handleWishlistClick = (e, productId) => {
        e.stopPropagation();
        // Add your wishlist logic here 
        console.log(`Product ${productId} added to wishlist`);
    };

    const favoriteProducts = products.filter((product) => product.isFavorite);

    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Favorite" links={heroLinks} />

            <PageLayout>
                <div className="text-subtitle mb-4">
                    Showing {products.length} results
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favoriteProducts.map((product) => (
                        <div key={product.id} className="p-1">
                            <div className="overflow-hidden relative">
                                {/* Product Image */}
                                <Link href={`/shop/details?id=${product.id}`}>
                                    <div className="relative w-full aspect-[5/6] flex items-center justify-center overflow-hidden">
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
                                    <Heart className={`w-6 h-6 text-primary ${product.isFavorite ? "fill-primary" : ""}`} />
                                </div>

                                <div className="mt-4 px-2">
                                    <h3 className="text-sm font-medium text-title line-clamp-1 mb-1">{product.title}</h3>
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
                                            <Star className="w-4 h-4 text-primary" />
                                            {product.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </PageLayout>
        </div>
    );
};

export default Wishlist;