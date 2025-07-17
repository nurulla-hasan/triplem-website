"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const DesktopFilter = ({ priceRange, selectedRating, handleRatingClick, handleSliderChange, handleMaxPriceChange, handleMinPriceChange }) => {
    return (
        <>
            <div className="hidden md:block md:col-span-2 sticky top-24 h-fit">
                <h3 className="text-xl font-medium mb-4 text-title">Filter By</h3>

                <div className="bg-content-bg rounded-lg p-4">
                    {/* Category Filter */}
                    <Accordion type="single" collapsible defaultValue="category">
                        <AccordionItem value="category" className="border-b border-gray-200">
                            <AccordionTrigger className="text-lg font-medium text-title hover:no-underline">Category</AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="pokemon" />
                                    <label htmlFor="pokemon" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Pokémon
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="basketball" />
                                    <label htmlFor="basketball" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Basketball
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="football" />
                                    <label htmlFor="football" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Football
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="baseball" />
                                    <label htmlFor="baseball" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Baseball
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="hockey" />
                                    <label htmlFor="hockey" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Hockey
                                    </label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Availability Filter */}
                    <Accordion type="single" collapsible defaultValue="availability">
                        <AccordionItem value="availability" className="border-b border-gray-200">
                            <AccordionTrigger className="text-lg font-medium text-title hover:no-underline">Availability</AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="inStock" />
                                    <label htmlFor="inStock" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        In Stock
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="outOfStock" />
                                    <label htmlFor="outOfStock" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Out of Stock
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="upComing" />
                                    <label htmlFor="upComing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                        Up Coming
                                    </label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Price Range Filter */}
                    <Accordion type="single" collapsible defaultValue="price-range">
                        <AccordionItem value="price-range" className="border-b border-gray-200">
                            <AccordionTrigger className="text-lg font-medium text-title hover:no-underline">Price Range</AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 space-y-4">
                                {/* Price Slider */}
                                <Slider
                                    value={priceRange}
                                    onValueChange={handleSliderChange}
                                    max={5000}
                                    step={10}
                                    minStepsBetweenThumbs={1}
                                    className="w-full [&>span:first-child]:bg-primary/20"
                                />
                                <div className="flex justify-between gap-4">
                                    <Input
                                        type="number"
                                        placeholder="Min Price"
                                        value={priceRange[0]}
                                        onChange={handleMinPriceChange}
                                        className="w-1/2 text-center"
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Max Price"
                                        value={priceRange[1]}
                                        onChange={handleMaxPriceChange}
                                        className="w-1/2 text-center"
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Rating Filter */}
                    <div className="py-4">
                        <h4 className="text-lg font-medium text-title mb-3">Rating</h4>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((starNum) => (
                                <Star
                                    key={starNum}
                                    className={`h-4 w-4 cursor-pointer ${starNum <= selectedRating ? 'text-yellow-400 fill-yellow-400' : 'text-subtitle'}`}
                                    onClick={() => handleRatingClick(starNum)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DesktopFilter;