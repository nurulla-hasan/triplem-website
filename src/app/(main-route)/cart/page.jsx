"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import SimpleHero from '@/components/common/SimpleHero';
import PageLayout from '@/components/layout/PageLayout';
import { initialCartItems } from "@/data/data";
import CartTableHeader from "@/components/cart/CartTableHeader";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";

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
                            <CartTableHeader />

                            {/* Product Items */}
                            {cartItems.length === 0 ? (
                                <div className="text-center py-10 text-subtitle">Your cart is empty.</div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <CartItem
                                            item={item}
                                            handleQuantityChange={handleQuantityChange}
                                            handleRemoveItem={handleRemoveItem}
                                            handleCheckboxChange={handleCheckboxChange}
                                        />
                                        {index < cartItems.length - 1 && <Separator />}
                                    </React.Fragment>
                                ))
                            )}
                        </div>

                        {/* Order Overview */}
                        <OrderSummary totalItems={totalItems} subTotal={subTotal} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default CartPage;
