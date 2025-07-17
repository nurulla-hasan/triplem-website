import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";

const ShopCard = ({ product, handleWishlistClick }) => {
    return (
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
    );
};

export default ShopCard;
