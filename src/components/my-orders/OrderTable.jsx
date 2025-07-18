
"use client";

import React from "react";
import Image from "next/image";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const OrderTable = ({ orders, getStatusColor, onReview }) => {
    return (
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
                                    <span className="font-medium text-title">{order.product.name}</span>
                                    <span className="text-sm text-subtitle">Qty: {order.product.qty}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">${order.total.toFixed(2)}</TableCell>
                        <TableCell className={`text-center font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                        </TableCell>
                        <TableCell className="text-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={`text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-subtitle border-gray-400" : ""}`}
                                        disabled={order.status !== "Delivered"}
                                        onClick={() => onReview(order)}
                                    >
                                        Review
                                    </Button>
                                </DialogTrigger>
                            </Dialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrderTable;
