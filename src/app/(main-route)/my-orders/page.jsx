"use client";

import React from "react";
import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { orders } from "@/data/data";
import OrderTable from "@/components/my-orders/OrderTable";
import OrderCard from "@/components/my-orders/OrderCard";
import ReviewModal from "@/components/my-orders/ReviewModal";

const MyOrdersPage = () => {
    const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

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
                return "text-subtitle";
        }
    };

    const handleReviewSubmit = (data) => {
        console.log("Review Data for Order:", selectedOrder.orderNumber, data);
        setIsReviewModalOpen(false);
        setSelectedOrder(null);
    };

    const handleOpenReviewModal = (order) => {
        setSelectedOrder(order);
        setIsReviewModalOpen(true);
    };

    return (
        <div className="min-h-minus-header">
            <SimpleHero title="My Orders" links={heroLinks} />

            <PageLayout>
                <div className="overflow-x-auto">
                    <div className="md:min-w-[800px]">
                        {/* Desktop View */}
                        <OrderTable orders={orders} getStatusColor={getStatusColor} onReview={handleOpenReviewModal} />

                        {/* Mobile View */}
                        <div className="md:hidden flex flex-col gap-4">
                            {orders.map((order) => (
                                <OrderCard key={order.id} order={order} getStatusColor={getStatusColor} onReview={handleOpenReviewModal} />
                            ))}
                        </div>
                    </div>
                </div>

                <ReviewModal
                    isOpen={isReviewModalOpen}
                    onOpenChange={setIsReviewModalOpen}
                    onSubmit={handleReviewSubmit}
                    initialData={selectedOrder ? { rating: 0, comment: "" } : null}
                />
            </PageLayout>
        </div>
    );
};

export default MyOrdersPage;