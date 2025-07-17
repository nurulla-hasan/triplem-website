import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const OrderDetails = ({ orderItems, subTotal, shippingFee, total }) => {
    return (
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
    );
};

export default OrderDetails;
