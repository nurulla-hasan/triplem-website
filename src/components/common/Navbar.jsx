"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Heart, User, ShoppingBag, Menu } from "lucide-react";


const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Help", href: "/help" },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-2">
                <div className="flex items-center justify-between h-16"> 
                    <div className="lg:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                    <Menu className="h-6 w-6 text-gray-600" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[250px] sm:w-[320px]">
                                <SheetHeader>
                                    <Link href="/" className="flex items-center">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Company Logo"
                                            width={120}
                                            height={48}
                                            priority
                                            className="md:h-12 h-10 w-auto"
                                        />
                                    </Link>
                                    <SheetTitle className="sr-only">Main Menu</SheetTitle>
                                    <SheetDescription className="sr-only">Navigation links for the website.</SheetDescription> 
                                </SheetHeader>
                                <nav className="mt-6 flex flex-col space-y-4 pl-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`font-medium text-gray-700 hover:text-gray-900 transition-colors ${
                                                pathname === link.href ? "underline font-bold" : ""
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Center Logo - Visible on all screen sizes */}
                    <div className="flex-1 flex justify-center lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="TripleM Collectibles"
                                width={120}
                                height={48}
                                priority
                                className="md:h-12 h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Hidden on small screens */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-gray-600 hover:text-gray-900 transition-colors font-medium duration-200 text-sm ${pathname === link.href ? "text-gray-900 underline font-bold" : ""}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Action Icons */}
                    <div className="flex items-center space-x-2 lg:ml-auto">
                        {/* Search Icon */}
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                            <Search className="h-5 w-5 text-gray-600" />
                            <span className="sr-only">Search</span>
                        </Button>

                        {/* Heart/Favorites Icon */}
                        <Link href="/wishlist">
                            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                <Heart className="h-5 w-5 text-gray-600" />
                                <span className="sr-only">Favorites</span>
                            </Button>
                        </Link>

                        {/* User Profile Icon */}
                        <Link href="/profile">
                            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                <User className="h-5 w-5 text-gray-600" />
                                <span className="sr-only">Profile</span>
                            </Button>
                        </Link>

                        {/* Shopping Cart Icon */}
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
                            <ShoppingBag className="h-5 w-5 text-gray-600" />
                            <span className="sr-only">Shopping Cart</span>
                            {/* Optional cart count badge */}
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;