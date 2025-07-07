"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Us", isCurrent: true }
];

const ContactPage = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Contact Us" links={heroLinks} />

            <PageLayout>
                <div>
                    {/* Top Contact Info Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-title mb-4">Contact Info</h2>
                        <p className="text-base text-subtitle mb-8">
                            Get in touch with our team for legal support, inquiries, or consultation appointments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Location */}
                            <div className="flex items-start p-4 rounded-lg shadow-sm">
                                <MapPin className="w-6 h-6 mr-3 text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-title">Location:</p>
                                    <p className="text-sm text-subtitle">6391 Elgin St. Celina, Delaware 10299</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start p-4 rounded-lg shadow-sm">
                                <Mail className="w-6 h-6 mr-3 text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-title">Email:</p>
                                    <p className="text-sm text-subtitle">info@alansarilaw.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start p-4 rounded-lg shadow-sm">
                                <Phone className="w-6 h-6 mr-3 text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-title">Phone:</p>
                                    <p className="text-sm text-subtitle">+974 4491 3355</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us Section with Form and Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="h-full">
                            <h2 className="text-2xl font-bold text-title mb-6">Contact Us</h2>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="email" className="text-subtitle">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="mt-1 rounded-xs"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="text-subtitle">Phone Number</Label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="mt-1 rounded-xs"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message" className="text-subtitle">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={10}
                                        placeholder="Write here"
                                        className="mt-1 rounded-xs"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="rounded-xs text-white" 
                                >
                                    Send Message <span className="ml-2">&#9656;</span>
                                </Button>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="mt-8 md:mt-0 min-h-full">
                            <Image
                                src="/images/contact.jpg"
                                alt="Contact Us"
                                width={600}
                                height={400}
                                className="rounded-sm w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default ContactPage;