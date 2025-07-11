"use client";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Search, Star, Filter, Heart } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
}
    from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { products } from "@/data/data";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";



const ShopPage = () => {
    // State for price range inputs and slider
    const [priceRange, setPriceRange] = useState([50, 2500]);
    // State for selected rating
    const [selectedRating, setSelectedRating] = useState(0);

    // Handle input change for min price
    const handleMinPriceChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            setPriceRange([value, priceRange[1]]);
        }
    };

    // Handle input change for max price
    const handleMaxPriceChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            setPriceRange([priceRange[0], value]);
        }
    };

    // Handle slider change
    const handleSliderChange = (newValues) => {
        setPriceRange(newValues);
    };

    // Handle rating click
    const handleRatingClick = (starNum) => {
        setSelectedRating(starNum);
    };

    const handleWishlistClick = (e, productId) => {
        e.stopPropagation();
        // Add your wishlist logic here
        console.log(`Product ${productId} added to wishlist`);
    };

    const breadcrumbLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", isCurrent: true }
    ];

    return (
        <div className="min-h-minus-header">
            <PageLayout>
                <div className="flex justify-between items-center pb-4">
                    <CustomBreadcrumb links={breadcrumbLinks} />

                    <div className="flex items-center gap-4">
                        {/* Mobile Filter Trigger */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Filter size={20} className="text-primary cursor-pointer" />
                                </SheetTrigger>
                                <SheetContent side="left" className="w-3/4 p-4">
                                    <SheetTitle className="text-xl font-semibold mb-4 text-gray-800">Filter By</SheetTitle>
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
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="inStock-mobile" />
                                                    <label htmlFor="inStock-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                        In Stock
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="outOfStock-mobile" />
                                                    <label htmlFor="outOfStock-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                        Out of Stock
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="upComing-mobile" />
                                                    <label htmlFor="upComing-mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-subtitle">
                                                        Up Coming
                                                    </label>
                                                </div>
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
                                                    className={`h-6 w-6 cursor-pointer ${starNum <= selectedRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                    onClick={() => handleRatingClick(starNum)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Desktop Search */}
                        <div className="relative hidden md:block">
                            <Input type="text" placeholder="Search" className="pl-10 w-full md:w-80" />
                            <Search size={20} className="text-primary absolute left-2 top-1/2 -translate-y-1/2" />
                        </div>

                        {/* Mobile Search */}
                        <div className="md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Search size={20} className="text-primary cursor-pointer" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-screen p-2">
                                    <div className="relative">
                                        <Input type="text" placeholder="Search" className="pl-10 w-full" />
                                        <Search size={20} className="text-primary absolute left-2 top-1/2 -translate-y-1/2" />
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-6 min-h-screen mt-4">
                    {/* Desktop Filter Column (md:col-span-2) */}
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
                                            className={`h-4 w-4 cursor-pointer ${starNum <= selectedRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            onClick={() => handleRatingClick(starNum)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Right Content Column (md:col-span-5) */}
                    <div className="md:col-span-5">
                        <div className="text-subtitle mb-4">
                            Showing {products.length} results
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
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
                                            <Heart className="w-6 h-6 text-primary fill-/10" />
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
                                                    <Star className="w-4 h-4 text-yellow-500" />
                                                    {product.rating}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </PageLayout>
        </div>
    );
};

export default ShopPage;