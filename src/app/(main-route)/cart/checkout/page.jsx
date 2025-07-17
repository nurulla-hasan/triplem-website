"use client";

import React, { useState } from "react";
import SimpleHero from '@/components/common/SimpleHero';
import PageLayout from '@/components/layout/PageLayout';
import OrderDetails from "@/components/checkout/OrderDetails";
import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";
import PaymentOptions from "@/components/checkout/PaymentOptions";

const initialOrderItems = [
    {
        id: "1",
        image: "/images/product (5).png",
        name: "Great Ball Mystery Bag",
        quantity: 2,
        price: 40.00,
    },
    {
        id: "2",
        image: "/images/product (2).png",
        name: "Pokemon TCG Trading Card- 8 Cards",
        quantity: 2,
        price: 40.00,
    },
];

const CheckOutPage = () => {
    const [orderItems, setOrderItems] = useState(initialOrderItems);
    const [shippingAddress, setShippingAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const [paymentOption, setPaymentOption] = useState("stripe");

    const subTotal = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shippingFee = 0.00;
    const total = subTotal + shippingFee;

    const heroLinks = [
        { name: "Home", href: "/" },
        { name: "Cart", href: "/cart" },
        { name: "Checkout", isCurrent: true },
    ];

    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Checkout" links={heroLinks} />
            <PageLayout>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <OrderDetails
                            orderItems={orderItems}
                            subTotal={subTotal}
                            shippingFee={shippingFee}
                            total={total}
                        />
                        <div>
                            <ShippingAddressForm
                                shippingAddress={shippingAddress}
                                setShippingAddress={setShippingAddress}
                            />
                            <PaymentOptions
                                paymentOption={paymentOption}
                                setPaymentOption={setPaymentOption}
                            />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default CheckOutPage;
