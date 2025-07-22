'use client'
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import StarRating from "@/components/shop/details/StarRating";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ProductTabs = ({ product }) => {
    const [visibleReviews, setVisibleReviews] = useState(3);

    const handleShowMoreReviews = () => {
        setVisibleReviews((prev) => prev + 3);
    };

    return (
        <div>
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
                                    <h4 className="text-subtitle text-sm font-semibold mb-4">Showing {visibleReviews} results</h4>
                                    <ScrollArea className="h-[450px] pr-4">
                                        <div className="space-y-4">
                                            {tab.content && tab.content.slice(0, visibleReviews).map((review) => (
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
                                    {tab.content && tab.content.length > visibleReviews && (
                                        <Button variant="ghost" onClick={handleShowMoreReviews}>
                                            Show More Reviews
                                            <ChevronRight className="size-4 ml-2" />
                                        </Button>
                                    )}
                                </div>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>
            )}
        </div>
    );
};

export default ProductTabs;
