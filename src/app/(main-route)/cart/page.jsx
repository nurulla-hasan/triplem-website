"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SimpleHero from '@/components/common/SimpleHero';
import PageLayout from '@/components/layout/PageLayout';
import { initialCartItems } from "@/data/data";



const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, type) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    if (type === "increment") {
                        return { ...item, quantity: item.quantity + 1 };
                    } else if (type === "decrement" && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            })
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleCheckboxChange = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const selectedItems = cartItems.filter((item) => item.selected);
    const totalItems = selectedItems.length;
    const subTotal = selectedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const heroLinks = [
        { name: "Home", href: "/" },
        { name: "Cart", isCurrent: true }
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero title="Cart" links={heroLinks} />

            <PageLayout>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Product List */}
                        <div className="lg:col-span-2 p-4 md:p-6">
                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-12 text-sm font-medium text-subtitle pb-4 border-b">
                                <span className="col-span-1"></span>
                                <span className="col-span-5">Product</span>
                                <span className="col-span-2 text-center">Quantity</span>
                                <span className="col-span-3 text-right">Total</span>
                                <span className="col-span-1"></span>
                            </div>

                            {/* Product Items */}
                            {cartItems.length === 0 ? (
                                <div className="text-center py-10 text-subtitle">Your cart is empty.</div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        {/* Desktop View */}
                                        <div className="hidden md:grid grid-cols-12 items-center py-4">
                                            <div className="col-span-1 flex justify-center">
                                                <Checkbox
                                                    checked={item.selected}
                                                    onCheckedChange={() => handleCheckboxChange(item.id)}
                                                    className="w-5 h-5 rounded-sm data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white data-[state=checked]:border-yellow-500 border-gray-300"
                                                />
                                            </div>
                                            <div className="col-span-5 flex items-center gap-4">
                                                <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden border">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Link href={`/product/${item.id}`} className="font-medium text-title hover:text-primary transition-colors">
                                                        {item.name}
                                                    </Link>
                                                    <span className="text-sm text-subtitle">${item.price.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <div className="col-span-2 flex justify-center">
                                                <div className="flex items-center border rounded-md overflow-hidden">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="w-8 h-8 rounded-none border-0 border-r"
                                                        onClick={() => handleQuantityChange(item.id, "decrement")}
                                                    >
                                                        <Minus className="size-4 text-subtitle" />
                                                    </Button>
                                                    <span className="px-4 text-base font-medium">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="w-8 h-8 rounded-none border-0 border-l"
                                                        onClick={() => handleQuantityChange(item.id, "increment")}
                                                    >
                                                        <Plus className="size-4 text-subtitle" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-span-3 text-right">
                                                <span className="text-lg font-semibold text-title">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="col-span-1 flex justify-center">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-subtitle hover:text-red-500 transition-colors"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    <Trash2 className="size-5" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Mobile View */}
                                        <div className="md:hidden flex flex-col gap-4 py-4">
                                            <div className="flex items-start gap-4">
                                                <Checkbox
                                                    checked={item.selected}
                                                    onCheckedChange={() => handleCheckboxChange(item.id)}
                                                    className="w-5 h-5 mt-1 rounded-sm data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white data-[state=checked]:border-yellow-500 border-gray-300"
                                                />
                                                <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden border">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div className="flex flex-col flex-grow">
                                                    <Link href={`/product/${item.id}`} className="font-medium text-title hover:text-primary transition-colors mb-1">
                                                        {item.name}
                                                    </Link>
                                                    <span className="text-sm text-subtitle">Price: ${item.price.toFixed(2)}</span>
                                                    <span className="text-md font-semibold text-title mt-1">
                                                        Total: ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center pl-8">
                                                <div className="flex items-center border rounded-md overflow-hidden">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="w-8 h-8 rounded-none border-0 border-r"
                                                        onClick={() => handleQuantityChange(item.id, "decrement")}
                                                    >
                                                        <Minus className="size-4 text-subtitle" />
                                                    </Button>
                                                    <span className="px-4 text-base font-medium">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="w-8 h-8 rounded-none border-0 border-l"
                                                        onClick={() => handleQuantityChange(item.id, "increment")}
                                                    >
                                                        <Plus className="size-4 text-subtitle" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-subtitle hover:text-red-500 transition-colors"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    <Trash2 className="size-5" />
                                                </Button>
                                            </div>
                                        </div>

                                        {index < cartItems.length - 1 && <Separator />}
                                    </React.Fragment>
                                ))
                            )}
                        </div>

                        {/* Order Overview */}
                        <div className="lg:col-span-1 p-6 rounded-lg border bg-content-bg">
                            <h2 className="text-xl font-medium text-title mb-4">Order Overview</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-subtitle">
                                    <span>Total Items:</span>
                                    <span className="font-semibold">{totalItems}</span>
                                </div>
                                <div className="flex justify-between items-center text-subtitle">
                                    <span>Sub Total:</span>
                                    <span className="font-semibold">${subTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <Separator className="my-6" />
                            <Link href="/cart/checkout" className="w-full">
                                <Button className="w-full font-medium py-3">
                                    Check out
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default CartPage;