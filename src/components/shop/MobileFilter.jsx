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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const MobileFilter = ({ priceRange, selectedRating, handleRatingClick, handleSliderChange, handleMaxPriceChange, handleMinPriceChange }) => {
    return (
        <>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Filter size={20} className="text-primary cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-3/4 p-4">
                        <ScrollArea>
                            <SheetTitle className="text-xl font-semibold mb-4 text-title">Filter By</SheetTitle>
                            <SheetDescription className="sr-only">
                                Use these options to filter products by category, availability, price range, and rating.
                            </SheetDescription>
                            {/* Category Filter */}
                            <Accordion type="single" collapsible defaultValue="category">
                                <AccordionItem value="category" className="border-b border-gray-200">
                                    <AccordionTrigger className="text-lg font-medium text-subtitle hover:no-underline">Category</AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-4 space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="pokemon-mobile" />
                                            <label htmlFor="pokemon-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                Pokémon
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="basketball-mobile" />
                                            <label htmlFor="basketball-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                Basketball
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="football-mobile" />
                                            <label htmlFor="football-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                Football
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="baseball-mobile" />
                                            <label htmlFor="baseball-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                Baseball
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="hockey-mobile" />
                                            <label htmlFor="hockey-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                Hockey
                                            </label>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Availability Filter */}
                            <Accordion type="single" collapsible defaultValue="availability">
                                <AccordionItem value="availability" className="border-b border-gray-200">
                                    <AccordionTrigger className="text-lg font-medium text-subtitle hover:no-underline">Availability</AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-4 space-y-3">
                                        <RadioGroup defaultValue="comfortable">
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="default" id="r1" />
                                                <Label htmlFor="r1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">In Stock</Label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="comfortable" id="r2" />
                                                <Label htmlFor="r2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">Out of Stock</Label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="compact" id="r3" />
                                                <Label htmlFor="r3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">Up Coming</Label>
                                            </div>
                                        </RadioGroup>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Price Range Filter */}
                            <Accordion type="single" collapsible defaultValue="price-range">
                                <AccordionItem value="price-range" className="border-b border-gray-200">
                                    <AccordionTrigger className="text-lg font-medium text-subtitle hover:no-underline">Price Range</AccordionTrigger>
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
                                <h4 className="text-lg font-medium text-subtitle mb-3">Rating</h4>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((starNum) => (
                                        <Star
                                            key={starNum}
                                            className={`h-6 w-6 cursor-pointer ${starNum <= selectedRating ? 'text-primary fill-primary' : 'text-subtitle'}`}
                                            onClick={() => handleRatingClick(starNum)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default MobileFilter;