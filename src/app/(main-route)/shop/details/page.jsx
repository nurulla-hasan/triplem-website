
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import PageLayout from "@/components/layout/PageLayout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import StarRating from "@/components/shop/details/StarRating";
import { productDetailsDataMap } from "@/data/data";
import { Separator } from "@/components/ui/separator";
import SimilarProducts from "@/components/shop/details/SimilarProducts";
import Link from "next/link";
import { toast } from "sonner"

const DetailsPage = () => {
    const product = productDetailsDataMap["1"];

    const [mainImage, setMainImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
    const [quantity, setQuantity] = useState(1);


    const breadcrumbLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: product.name, isCurrent: true },
    ];

    const handleQuantityChange = (type) => {
        if (type === "increment") {
            setQuantity((prev) => prev + 1);
        } else if (type === "decrement" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = (product, selectedSize, selectedColor, quantity) => {
        console.log(product, selectedSize, selectedColor, quantity);
        toast("Product added to cart successfully.", {
            icon: "👏",
            style: {
                borderRadius: "10px",
            },
            duration: 3000,
        })
    }

    return (
        <div className='min-h-minus-header'>
            <PageLayout>
                {/* Breadcrumb Section */}
                <div className="pb-4">
                    <CustomBreadcrumb links={breadcrumbLinks} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8 pb-12">
                    {/* Product Image Gallery */}
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

                    {/* Product Details */}
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
                                                setMainImage(color.image || product.images[0]);
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

                        {/* Description and Reviews Tabs */}
                        <div className="mt-8">
                            {product.descriptionTabs && product.descriptionTabs.length > 0 && (
                                <Tabs defaultValue={product.descriptionTabs[0].title.toLowerCase()} className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-8 h-auto p-2 bg-content">
                                        {product.descriptionTabs.map((tab, index) => (
                                            <TabsTrigger
                                                key={index}
                                                value={tab.title ? tab.title.toLowerCase() : `reviews-${tab.reviews ? tab.reviews : ''}`}
                                                className="border-0 data-[state=active]:border-b-2 data-[state=active]:border-b-primary dark:data-[state=active]:border-b-primary rounded-none"
                                            >
                                                {tab.title === "Description" ? "Description" : `Reviews (${tab.reviews || 0})`}
                                            </TabsTrigger>
                                        ))}

                                    </TabsList>
                                    {product.descriptionTabs.map((tab, index) => (
                                        <TabsContent
                                            key={index}
                                            value={tab.title ? tab.title.toLowerCase() : `reviews-${tab.reviews ? tab.reviews : ''}`}
                                            className="mt-4 rounded-lg"
                                        >
                                            {tab.title === "Description" && (
                                                <div className="space-y-4">
                                                    <p className="text-subtitle leading-relaxed text-base">{tab.content}</p>
                                                    {product.productHighlights && product.productHighlights.length > 0 && (
                                                        <div className="mt-6">
                                                            <h4 className="text-lg font-semibold text-title mb-3">Product Highlights:</h4>
                                                            <ul className="list-disc list-inside text-subtitle space-y-2">
                                                                {product.productHighlights.map((highlight, hIndex) => (
                                                                    <li key={hIndex}>{highlight}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {product.sizingAndFit && product.sizingAndFit.length > 0 && (
                                                        <div className="mt-6">
                                                            <h4 className="text-lg font-semibold text-title mb-3">Sizing & Fit:</h4>
                                                            <ul className="list-disc list-inside text-subtitle space-y-2">
                                                                {product.sizingAndFit.map((item, sIndex) => (
                                                                    <li key={sIndex}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}


                                            {tab.reviews && (
                                                <div>
                                                    <div className="bg-content-bg flex flex-col justify-center items-center p-4 mb-6 rounded-lg mr-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold text-3xl md:text-5xl">{product.rating.toFixed(1)}</span>
                                                            <StarRating rating={product.rating} totalStars={5} starClassName="size-5" />
                                                        </div>
                                                        <h3 className="text-lg font-medium text-subtitle">Overall Rating</h3>
                                                    </div>

                                                    <h4 className="text-subtitle text-sm font-semibold mb-4">Showing {Math.min(tab.reviews, 4)} results</h4>
                                                    <ScrollArea className="h-[510px] pr-4">
                                                        <div className="space-y-4">
                                                            {/* Only show the first 4 reviews */}
                                                            {tab.content && tab.content.slice(0, 4).map((review) => (
                                                                <div key={review.id} className="flex flex-col gap-3 p-4 border rounded-lg">
                                                                    <div className="flex justify-between items-center">
                                                                        <div className="flex items-center gap-3">
                                                                            <Avatar className="size-10">
                                                                                <AvatarImage src={review.authorImage} alt={review.author} />
                                                                                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                                                            </Avatar>
                                                                            <div>
                                                                                <p className="font-semibold text-title">{review.author}</p>
                                                                                <p className="text-sm text-subtitle">
                                                                                    {review.date} {review.location && ` | ${review.location}`}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <StarRating rating={review.rating} starClassName="size-4" />
                                                                    </div>
                                                                    <p className="text-subtitle leading-relaxed">{review.comment}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                    {/* Show "Show More Reviews" button only if there are more than 4 reviews */}
                                                    {tab.content && tab.content.length > 4 && (
                                                        <Link href={`/shop/reviews`}>
                                                            <Button variant="ghost">
                                                                Show More Reviews
                                                                <ChevronRight className="size-4 ml-2" />
                                                            </Button>
                                                        </Link>
                                                    )}
                                                </div>
                                            )}
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            )}
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                <SimilarProducts />

            </PageLayout>
        </div>
    );
};

export default DetailsPage;