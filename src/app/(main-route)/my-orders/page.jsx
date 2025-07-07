"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviewSchema = z.object({
    rating: z.number().min(1, "Please select a rating."),
    comment: z.string().min(6, "Comment must be at least 6 characters."),
});

const MyOrdersPage = () => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            rating: 0,
            comment: "",
        },
    });

    const rating = watch("rating");
    const comment = watch("comment");

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

    const handleReviewSubmit = (data) => {
        console.log("Review Data:", data);
        setIsReviewModalOpen(false);
        reset();
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
                                                        className={`text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-subtitle/70 border-gray-400" : ""}`}
                                                        disabled={order.status !== "Delivered"}
                                                        onClick={() => {
                                                            setIsReviewModalOpen(true);
                                                            reset();
                                                        }}
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

                        {/* Mobile View */}
                        <div className="md:hidden flex flex-col gap-4">
                            {orders.map((order) => (
                                <div key={order.id} className="border rounded-lg p-4 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-800">Order: {order.orderNumber}</span>
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
                                            <span className="font-medium text-gray-800 mb-1">{order.product.name}</span>
                                            <span className="text-sm text-subtitle">Qty: {order.product.qty}</span>
                                            <span className="text-md font-semibold text-gray-800 mt-1">Total: ${order.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={`w-full text-primary hover:bg-primary/5 border-primary/20 ${order.status !== "Delivered" ? "text-subtitle/70 border-gray-400" : ""}`}
                                                disabled={order.status !== "Delivered"}
                                                onClick={() => {
                                                    setIsReviewModalOpen(true);
                                                    reset();
                                                }}
                                            >
                                                Write a Review
                                            </Button>
                                        </DialogTrigger>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Single Dialog for the Review Modal, outside the mapping */}
                <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Review</DialogTitle>
                            <DialogDescription>
                                Share your experience with this product.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(handleReviewSubmit)}>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-medium">Rating:</span>
                                    <div className="space-x-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => setValue("rating", star)}
                                                className={`${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                                            >
                                                <Star size={20} />
                                            </button>
                                        ))}
                                        {errors.rating && (
                                            <p className="text-red-500 text-xs ml-1">{errors.rating.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="comment" className="text-sm font-medium">
                                        Comment:
                                    </label>
                                    <Textarea
                                        id="comment"
                                        placeholder="Write your review here..."
                                        {...register("comment")}
                                    />
                                    {errors.comment && (
                                        <p className="text-red-500 text-xs ml-1">{errors.comment.message}</p>
                                    )}
                                </div>
                            </div>
                            <Button type="submit">
                                Continue
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </PageLayout>
        </div>
    );
};

export default MyOrdersPage;