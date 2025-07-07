"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { Award, Zap, Handshake, Package, Users } from "lucide-react";

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "About", isCurrent: true }
];

const Aboutpage = () => {
    return (
        <div className='min-h-minus-header'>
            <SimpleHero title="About Us" links={heroLinks} />

            <PageLayout>
                <div>
                    {/* About Us Introductory Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-title/80 mb-2">About Us</h2> 
                        <p className="text-lg text-subtitle mb-8">
                            Welcome to [Your Store Name] – Your Trusted Destination for Authentic Collectibles.
                        </p>
                        <p className="text-base text-subtitle">
                            At [Your Store Name], we’re more than just an online store — we’re a community built around passion, nostalgia, and the thrill of collecting. Whether you’re chasing a rare Pokémon booster, a legendary basketball card, or the latest football jersey, we’re here to deliver the real deal.
                        </p>
                    </div>

                    {/* Our Mission Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Award className="w-6 h-6 mr-3 text-primary" /> 
                            Our Mission
                        </h3>
                        <p className="text-base text-subtitle">
                            To make collecting simple, secure, and exciting – by offering 100% authentic products, fast shipping, and a shopping experience made for fans, by fans.
                        </p>
                    </div>

                    {/* How We Started Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Zap className="w-6 h-6 mr-3 text-primary" />
                            How We Started
                        </h3>
                        <p className="text-base text-subtitle">
                            What began as a personal hobby quickly evolved into a full-fledged online store. As longtime collectors ourselves, we know the value of quality, condition, and trust. That’s why every item we list is carefully sourced, checked, and packed with care — whether it’s a sealed box or a single card.
                        </p>
                    </div>

                    {/* What We Offer Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Handshake className="w-6 h-6 mr-3 text-primary" /> 
                            What We Offer
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>Authentic Pokémon Sealed Products</li>
                            <li>Basketball & Football Singles</li>
                            <li>Official Sports Jerseys & Fanwear</li>
                            <li>Fast and Reliable Shipping</li>
                            <li>Responsive Collector-Focused Support</li>
                        </ul>
                    </div>

                    {/* Why Shop With Us Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Package className="w-6 h-6 mr-3 text-primary" /> 
                            Why Shop With Us
                        </h3>
                        <p className="text-base text-subtitle">
                            Because we’re collectors too — we get it. We know the excitement of opening a new pack or completing a set. That’s why we’re committed to offering transparent listings, fair pricing, and real support – no gimmicks, just genuine value.
                        </p>
                    </div>

                    {/* Delivered With Care Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Users className="w-6 h-6 mr-3 text-primary" />
                            Delivered With Care
                        </h3>
                        <p className="text-base text-subtitle">
                            Every order is securely packaged, handled with respect, and sent with tracking. Whether you’re a seasoned collector or just starting out, we make sure your experience is easy and worry-free.
                        </p>
                    </div>

                    {/* Join the Community Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-title/80 flex items-center mb-4">
                            <Users className="w-6 h-6 mr-3 text-primary" />
                            Join the Community
                        </h3>
                        <p className="text-base text-subtitle">
                            We’re proud to serve a growing community of collectors across the country and beyond. Follow us on social media, share your pulls, and stay updated on restocks and exclusive drops.
                        </p>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Aboutpage;