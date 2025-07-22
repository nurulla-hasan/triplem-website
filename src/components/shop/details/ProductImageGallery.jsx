'use client'
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImageGallery = ({ product, mainImage, setMainImage }) => {
    return (
        <div className="flex flex-col gap-4">
            {product.images && product.images.length > 0 && (
                <div
                    className={cn(
                        "relative overflow-hidden rounded-lg shadow-sm bg-gray-100",
                        "h-[500px]"
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

            <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images && product.images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative overflow-hidden rounded-lg shadow-sm bg-gray-100 cursor-pointer",
                            "w-24 h-24 flex-shrink-0",
                            mainImage === image ? "border-2 border-primary" : ""
                        )}
                        onClick={() => setMainImage(image)}
                    >
                        <Image
                            src={image}
                            alt={`${product.name} - thumbnail ${index + 1}`}
                            fill
                            sizes="96px"
                            className="rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;
