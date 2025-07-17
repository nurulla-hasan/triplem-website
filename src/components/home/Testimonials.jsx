"use client";

import ContentHeader from '../common/ContentHeader';
import PageLayout from '../layout/PageLayout';
import { Star } from "lucide-react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const mockTestimonials = [
    {
        id: 1,
        text: "“From rare finds to everyday essentials, this platform delivers! The quality of items is consistently top-notch, and their customer service is truly exceptional. My collection has never looked better!”",
        image: "/images/avatar (1).jpg",
        author: "Alex V., Professional Collector",
        rating: 5,
    },
    {
        id: 2,
        text: "“I’ve bought several items here, and each time the shipping has been incredibly fast and the packaging secure. It’s clear they care about the condition of the items you receive. Highly recommend for any serious collector.”",
        image: "/images/avatar (2).jpg",
        author: "Sophia L., Trading Card Enthusiast",
        rating: 5,
    },
    {
        id: 3,
        text: "“Finding rare collectibles used to be a challenge, but this site makes it so easy. The descriptions are accurate, the photos are clear, and the overall experience is seamless. A must-visit for collectors!”",
        image: "/images/avatar (1).jpg",
        author: "Mark R., Vintage Toy Collector",
        rating: 5,
    },
    {
        id: 4,
        text: "“The selection is amazing, and the prices are fair. I particularly appreciate the detailed condition reports. It gives me confidence in every purchase. This is now my go-to place for all my collecting needs.”",
        image: "/images/avatar (2).jpg",
        author: "Emily C., Action Figure Collector",
        rating: 5,
    },
];

const Testimonials = () => {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    const renderFiveStars = () => (
        <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
    );

    return (
        <div>
            <PageLayout>
                <ContentHeader
                    title="Listening to Our Customers"
                    subtitle="Discover how collectors like you rate our service, quality, and shipping experience."
                />

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {mockTestimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2">
                                <div className='p-6 md:p-8 rounded-3xl relative bg-content-bg space-y-6 h-full'>
                                    <div className='md:grid grid-cols-5'>
                                        <Image
                                            src="/images/quotation.png"
                                            alt="Quote Icon"
                                            width={60}
                                            height={60}
                                        />
                                        <div className='col-span-4'>
                                            <p className="text-subtitle text-sm sm:text-lg leading-relaxed">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='md:flex space-y-3 justify-between items-end'>
                                            <div className='flex md:gap-12 gap-3 items-center'>
                                                <div className='md:w-16 md:h-16 w-10 h-10 relative rounded-full overflow-hidden'>
                                                    <Image
                                                        src={testimonial.image}
                                                        alt="Quote Icon"
                                                        fill
                                                        sizes="(max-width: 768px) 40px, 64px"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-title font-semibold text-base sm:text-lg mb-1">
                                                        {testimonial.author.split(',')[0]}
                                                    </p>
                                                    <p className="text-subtitle text-sm sm:text-base">
                                                        {testimonial.author.split(',')[1]?.trim()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                {renderFiveStars()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="flex justify-center gap-2 mt-6">
                    {mockTestimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`w-6 h-4 rounded-full ${i === current ? 'bg-primary' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </PageLayout>
        </div>
    );
};

export default Testimonials;