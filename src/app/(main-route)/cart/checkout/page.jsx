"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import SimpleHero from '@/components/common/SimpleHero';
import PageLayout from '@/components/layout/PageLayout';

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
            {/* Order Details */}
            <div className="p-6 rounded-lg border h-fit">
              <h2 className="text-2xl font-medium text-title mb-6">Order Details</h2>

              {/* Order Items Header */}
              <div className="grid grid-cols-2 text-sm font-medium text-subtitle pb-4 border-b">
                <span>Product</span>
                <span className="text-right">Total</span>
              </div>

              {/* Order Items List */}
              {orderItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-title">
                          {item.name}
                        </span>
                        <span className="text-sm text-subtitle">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="text-base font-semibold text-title">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  {index < orderItems.length - 1 && <Separator />}
                </React.Fragment>
              ))}

              <Separator className="my-6" />

              {/* Totals */}
              <div className="space-y-3 text-subtitle">
                <div className="flex justify-between items-center">
                  <span>Sub Total:</span>
                  <span className="font-semibold">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping Fee:</span>
                  <span className="font-semibold">${shippingFee.toFixed(2)}</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex justify-between items-center text-lg font-bold text-title">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping Address & Payment Options */}
            <div className="p-6 rounded-lg border h-fit">
              <h2 className="text-2xl font-medium text-title mb-6">Shipping Address</h2>
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="streetAddress">Street Address</Label>
                  <Input
                    id="streetAddress"
                    placeholder="123 Main St"
                    value={shippingAddress.street}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, street: e.target.value })
                    }
                    className="h-12 text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={shippingAddress.city}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, city: e.target.value })
                      }
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      value={shippingAddress.state}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, state: e.target.value })
                      }
                      className="h-12 text-base"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="10001"
                    value={shippingAddress.zipCode}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, zipCode: e.target.value })
                    }
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-medium text-title mb-6">Payment Options</h2>
              <RadioGroup
                defaultValue="stripe"
                value={paymentOption}
                onValueChange={setPaymentOption}
                className="flex items-center"
              >
                <Label
                  htmlFor="stripe"
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentOption === "stripe" ? "border-primary shadow-sm" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="stripe" id="stripe" />
                    {/* <span className="text-lg font-medium">Stripe</span> */}
                  </div>
                  <Image src="/images/stripe.png" alt="Stripe" width={80} height={80} className="object-contain px-3 rounded" />
                </Label>

                <Label
                  htmlFor="paypal"
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentOption === "paypal" ? "border-primary shadow-sm" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="paypal" id="paypal" />
                    {/* <span className="text-lg font-medium">PayPal</span> */}
                  </div>
                  <Image src="/images/paypal.png" alt="PayPal" width={80} height={80} className="object-contain px-3 rounded" />
                </Label>
              </RadioGroup>

              <Button className="w-full font-medium mt-8">
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CheckOutPage;