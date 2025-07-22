'use client'
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/shop/details/StarRating";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";

const ProductInfo = ({ product, selectedSize, selectedColor, quantity, handleQuantityChange, handleAddToCart, setSelectedSize, setSelectedColor, setMainImage }) => {
    return (
        <div className="space-y-4">
            {/* Price and Title */}
            <div className="flex flex-col gap-2">
                {product.discount && (
                    <Badge variant="outline" className="rounded-full text-sm font-medium text-green-600 border-green-600 px-2 py-1">
                        {product.discount}
                    </Badge>
                )}
                <h1 className="text-2xl md:text-3xl font-bold text-title">{product.name}</h1>
                <div className="flex items-center gap-3 mt-1">
                    <span className={`px-2 py-1 text-sm ${product.inStock ? "text-primary bg-primary/8" : "text-red-500 bg-red-50"} rounded`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                    <StarRating rating={product.rating} starClassName="size-4" />
                    <span className="text-sm text-subtitle">({product.numberOfReviews} Reviews)</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-bold text-title">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                        <span className="text-base text-subtitle line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>

            <Separator />

            {/* Short Description */}
            <p className="text-subtitle leading-relaxed text-base">{product.shortDescription}</p>

            <Separator />

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-subtitle">Color</h3>
                    <div className="flex items-center gap-2">
                        {product.colors.map((color) => (
                            <div
                                key={color.name}
                                className={cn(
                                    "size-6 rounded-full border-2 cursor-pointer transition-all duration-200",
                                    selectedColor === color.hex ? "border-gray-400 scale-110" : "border-gray-200 hover:scale-105"
                                )}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => {
                                    setSelectedColor(color.hex);
                                }}
                                title={color.name}
                            ></div>
                        ))}
                    </div>
                </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-subtitle">Size</h3>
                    <div className="flex items-center gap-2">
                        {product.sizes.map((size) => (
                            <Button
                                key={size}
                                variant={selectedSize === size ? "default" : "outline"}
                                size="sm"
                                className={cn(
                                    "rounded-md px-4 py-2 text-sm",
                                    selectedSize === size ? "bg-primary/20 hover:bg-primary/20 text-primary" : "text-subtitle hover:bg-gray-100"
                                )}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                    <Button variant="outline" className={cn("border-0 border-r rounded-none")} size="icon" onClick={() => handleQuantityChange("decrement")}>
                        <Minus className="size-4" />
                    </Button>
                    <span className="px-4 text-lg font-medium">{quantity}</span>
                    <Button variant="outline" className={cn("border-0 border-l rounded-none")} size="icon" onClick={() => handleQuantityChange("increment")}>
                        <Plus className="size-4" />
                    </Button>
                </div>
                <Button onClick={() => handleAddToCart(product, selectedSize, selectedColor, quantity)} className="flex-1 font-medium rounded-md shadow-md">
                    <ShoppingCart className="size-5 mr-2" />
                    Add To Cart
                </Button>
                <Button variant="outline" size="icon" className="rounded-md hover:bg-gray-100">
                    <Heart className="size-5 text-primary" />
                </Button>
            </div>
        </div>
    );
};

export default ProductInfo;