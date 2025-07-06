"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Heart, User, ShoppingBag, Menu, LogOut, UserPlus, ChevronDown, ChevronUp, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Input } from "@/components/ui/input";


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login status
    const [userName, setUserName] = useState("Mr.John Doe"); // Simulate user name
    const [showSearchInput, setShowSearchInput] = useState(false); // State for search input visibility

    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Help", href: "/help" },
    ];

    return (
        <div className="h-[81px]">
            <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
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
                                                priority
                                                width={120}
                                                height={48}
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
                                                className={`font-medium text-gray-700 hover:text-gray-900 transition-colors ${pathname === link.href ? "underline font-bold" : ""
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </nav>
                                    {/* Search Input in Mobile Sidebar */}
                                    <div className="relative mt-6 mb-4 px-8">
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-10 w-full"
                                        />
                                        <Search size={20} className="text-gray-600 absolute left-10 top-1/2 -translate-y-1/2" />
                                    </div>
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
                            {/* Desktop Search */}
                            <div className="hidden md:block">
                                {showSearchInput ? (
                                    <div className="relative flex items-center">
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-48 pl-8 transition-all duration-300 ease-in-out"
                                        />
                                        <Search size={16} className="absolute left-2 text-gray-500" />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0"
                                            onClick={() => setShowSearchInput(false)}
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                ) : (
                                    <Button variant="ghost" size="icon" className="hover:bg-gray-100" onClick={() => setShowSearchInput(true)}>
                                        <Search className="h-5 w-5 text-gray-600" />
                                        <span className="sr-only">Search</span>
                                    </Button>
                                )}
                            </div>



                            {/* Heart/Favorites Icon */}
                            <Link href="/wishlist">
                                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                    <Heart className="h-5 w-5 text-gray-600" />
                                    <span className="sr-only">Favorites</span>
                                </Button>
                            </Link>

                            {/* User Profile Icon */}
                            <DropdownMenu forceMount>
                                <DropdownMenuTrigger asChild>
                                    <div className="flex items-center cursor-pointer">
                                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                            <User className="h-5 w-5 text-gray-600" />
                                            <span className="sr-only">Profile</span>
                                        </Button>
                                        {isLoggedIn && (
                                            <span className="hidden md:block text-subtitle text-sm font-medium">{userName}</span>
                                        )}
                                        {
                                            isLoggedIn && (
                                                <Button variant="ghost" size="icon" className="hidden md:block hover:bg-gray-100">
                                                    <ChevronDown className="h-5 w-5 text-gray-600" />
                                                </Button>
                                            )
                                        }
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="md:w-48 overflow-y-auto z-50 relative">
                                    {isLoggedIn && (
                                        <div>
                                            <DropdownMenuLabel className="md:hidden text-center">{userName}</DropdownMenuLabel>
                                            <DropdownMenuSeparator className={"md:hidden"} />
                                        </div>
                                    )}
                                    {isLoggedIn ? (
                                        <>
                                            <DropdownMenuItem>
                                                <User className="mr-2 h-4 w-4" />
                                                <Link href="/profile">Profile</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <LogOut className="mr-2 h-4 w-4 text-red-500" />
                                                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                                            </DropdownMenuItem>
                                        </>
                                    ) : (
                                        <>
                                            <DropdownMenuItem>
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                <Link href="/auth/sign-up">Sign Up</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <User className="mr-2 h-4 w-4" />
                                                <Link href="/auth/login">Login</Link>
                                            </DropdownMenuItem>
                                        </>
                                    )}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/* {isLoggedIn && (
                            <span className="hidden md:block text-title text-sm font-medium">{userName}</span>
                        )} */}

                            {/* Shopping Cart Icon */}
                            <Link href="/cart">
                                <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
                                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                                    <span className="sr-only">Shopping Cart</span>
                                    {/* Optional cart count badge */}
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                                </Button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;