"use client";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { products } from "@/data/data";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import MobileFilter from "@/components/shop/MobileFilter";
import DesktopFilter from "@/components/shop/DesktopFilter";
import ShopCard from "@/components/shop/ShopCard";



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
                        <MobileFilter {...{ priceRange, selectedRating, handleRatingClick, handleSliderChange, handleMaxPriceChange, handleMinPriceChange }} />

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
                    <DesktopFilter {...{ priceRange, selectedRating, handleRatingClick, handleSliderChange, handleMaxPriceChange, handleMinPriceChange }}/>

                    {/* Right Content Column (md:col-span-5) */}
                    <div className="md:col-span-5">
                        <div className="text-subtitle mb-4">
                            Showing {products.length} results
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ShopCard key={product.id} product={product} handleWishlistClick={handleWishlistClick} />
                            ))}
                        </div>
                    </div>
                </div>

            </PageLayout>
        </div>
    );
};

export default ShopPage;