
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { orders } from "@/data/data";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";



const MyOrdersPage = () => {
    const heroLinks = [
        { name: "Home", href: "/" },
        { name: "My Orders", isCurrent: true }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "In-progress":
                return "text-blue-600";
            case "Shipped":
                return "text-purple-600";
            case "Delivered":
                return "text-green-600";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className="min-h-minus-header">
            <SimpleHero title="My Orders" links={heroLinks} />

            <PageLayout>
                <div className="overflow-x-auto">
                    <div className="md:min-w-[800px]">
                        {/* Desktop Table */}
                        <Table className="hidden md:table">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order Number</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Product</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.orderNumber}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border">
                                                    <Image
                                                        src={order.product.image}
                                                        alt={order.product.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-800">{order.product.name}</span>
                                                    <span className="text-sm text-gray-500">Qty: {order.product.qty}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-semibold">${order.total.toFixed(2)}</TableCell>
                                        <TableCell className={`text-center font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button
                                                variant="outline"
                                                className={`text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-gray-400 border-gray-400" : ""}`}
                                                disabled={order.status !== "Delivered"}
                                            >
                                                Review
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Mobile View */}
                        <div className="md:hidden flex flex-col gap-4">
                            {orders.map((order) => (
                                <div key={order.id} className="border rounded-lg p-4 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-800">Order: {order.orderNumber}</span>
                                            <span className="text-xs text-gray-500">{order.date}</span>
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
                                            <span className="font-medium text-gray-800 mb-1">{order.product.name}</span>
                                            <span className="text-sm text-gray-500">Qty: {order.product.qty}</span>
                                            <span className="text-md font-semibold text-gray-800 mt-1">Total: ${order.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className={`w-full text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-gray-400 border-gray-400" : ""}`}
                                        disabled={order.status !== "Delivered"}
                                    >
                                        Write a Review
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default MyOrdersPage;