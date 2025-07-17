'use client'
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImageGallery = ({ product, mainImage }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {product.images && product.images.length > 0 && (
                <div
                    className={cn(
                        "relative overflow-hidden rounded-lg shadow-sm bg-gray-100",
                        {
                            "col-span-2 h-[500px]": true,
                        }
                    )}
                >
                    <Image
                        src={mainImage}
                        alt={`${product.name} - main image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-lg object-cover"
                    />
                </div>
            )}

            {product.images && product.images.slice(0, 5).map((image, index) => (
                index > 0 && (
                    <div
                        key={index}
                        className={cn(
                            "relative overflow-hidden rounded-lg shadow-sm bg-gray-100",
                            "md:h-[400px] h-[200px]"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`${product.name} - image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 17vw"
                            className="rounded-lg object-cover"
                        />
                    </div>
                )
            ))}
        </div>
    );
};

export default ProductImageGallery;
