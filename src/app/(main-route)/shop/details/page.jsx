"use client";
import React, { useState } from "react";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import PageLayout from "@/components/layout/PageLayout";
import { productDetailsDataMap } from "@/data/data";
import SimilarProducts from "@/components/shop/details/SimilarProducts";
import { toast } from "sonner"
import ProductImageGallery from "@/components/shop/details/ProductImageGallery";
import ProductInfo from "@/components/shop/details/ProductInfo";
import ProductTabs from "@/components/shop/details/ProductTabs";

const DetailsPage = () => {
    const product = productDetailsDataMap["1"];

    const [mainImage, setMainImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
    const [quantity, setQuantity] = useState(1);


    const breadcrumbLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: product.name, isCurrent: true },
    ];

    const handleQuantityChange = (type) => {
        if (type === "increment") {
            setQuantity((prev) => prev + 1);
        } else if (type === "decrement" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = (product, selectedSize, selectedColor, quantity) => {
        console.log(product, selectedSize, selectedColor, quantity);
        toast("Product added to cart successfully.", {
            icon: "👏",
            style: {
                borderRadius: "10px",
            },
            duration: 3000,
        })
    }

    return (
        <div className='min-h-minus-header'>
            <PageLayout>
                {/* Breadcrumb Section */}
                <div className="pb-4">
                    <CustomBreadcrumb links={breadcrumbLinks} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8 pb-12">
                    <ProductImageGallery product={product} mainImage={mainImage} setMainImage={setMainImage} />
                    <ProductInfo 
                        product={product} 
                        selectedSize={selectedSize} 
                        selectedColor={selectedColor} 
                        quantity={quantity} 
                        handleQuantityChange={handleQuantityChange} 
                        handleAddToCart={handleAddToCart} 
                        setSelectedSize={setSelectedSize} 
                        setSelectedColor={setSelectedColor} 
                        setMainImage={setMainImage} 
                    />
                </div>

                <ProductTabs product={product} />

                {/* Similar Products */}
                <SimilarProducts />

            </PageLayout>
        </div>
    );
};

export default DetailsPage;