"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const OrderCard = ({ order, getStatusColor, onReview }) => {
    return (
        <div className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-title">Order: {order.orderNumber}</span>
                    <span className="text-xs text-subtitle">{order.date}</span>
                </div>
                <span className={`text-sm font-medium ${getStatusColor(order.status)}`}>{order.status}</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden border">
                    <Image
                        src={order.product.image}
                        alt={order.product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <span className="font-medium text-title mb-1">{order.product.name}</span>
                    <span className="text-sm text-subtitle">Qty: {order.product.qty}</span>
                    <span className="text-md font-semibold text-title mt-1">Total: ${order.total.toFixed(2)}</span>
                </div>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className={`w-full text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-subtitle border-gray-400" : ""}`}
                        disabled={order.status !== "Delivered"}
                        onClick={() => onReview(order)}
                    >
                        Write a Review
                    </Button>
                </DialogTrigger>
            </Dialog>
        </div>
    );
};

export default OrderCard;