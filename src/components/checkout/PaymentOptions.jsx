import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaymentOptions = ({ paymentOption, setPaymentOption }) => {
    return (
        <div className="p-6 rounded-lg border h-fit mt-8">
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
    );
};

export default PaymentOptions;
