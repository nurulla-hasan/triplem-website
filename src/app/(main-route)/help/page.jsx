"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "Help & Supports", isCurrent: true }
];

const HelpPage = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Help & Supports" links={heroLinks} />

            <PageLayout>
                <div>
                    <h2 className="text-2xl font-bold text-title mb-4">Help & Support</h2>
                    <p className="text- text-subtitle mb-12">
                        We’re here to make your shopping experience easy and worry-free. Find quick answers, helpful tips, and ways to reach us if you need more help.
                    </p>

                    {/* Frequently Asked Questions (FAQs) Section */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-title flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M18.364 18.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M3 12H4m1.636-6.364l.707.707M6 10v4a2 2 0 002 2h3.586a1 1 0 00.707-.293l4.414-4.414a1 1 0 000-1.414L13.293 8.293a1 1 0 00-.707-.293H8a2 2 0 00-2 2z" />
                            </svg>
                            Frequently Asked Questions (FAQs)
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg font-medium text-title mb-2">How long does shipping take?</p>
                                <p className="text-sm text-subtitle">
                                    Orders are usually processed within 1–2 business days. Delivery times vary by location — you’ll get tracking as soon as your order ships.
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-title mb-2">Do you ship internationally?</p>
                                <p className="text-sm text-subtitle">
                                    Yes! We ship many of our products worldwide. Shipping rates and delivery times depend on your country.
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-title mb-2">Can I change or cancel my order?</p>
                                <p className="text-sm text-subtitle">
                                    If you need to update your order, please contact us as soon as possible. We’ll do our best to help if the order hasn’t shipped yet.
                                    Check our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> for more details.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Payments & Security Section */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-title flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z" />
                            </svg>
                            Payments & Security
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg font-medium text-title mb-2">What payment methods do you accept?</p>
                                <p className="text-sm text-subtitle">
                                    We accept major credit/debit cards, PayPal, and [any local payment option, e.g., bKash].
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-title mb-2">Is my payment secure?</p>
                                <p className="text-sm text-subtitle">
                                    Absolutely. Payments are processed through trusted, encrypted gateways – we never store your card details.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Product Authenticity Section */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-title flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.686.887 5.25 2.5 7.25C6.113 21.25 8.7 22 12 22s5.887-.75 7.5-2.75C21.113 17.25 22 14.686 22 12a12.001 12.001 0 00-3.382-8.016z" />
                            </svg>
                            Product Authenticity
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg font-medium text-title mb-2">Are your products genuine?</p>
                                <p className="text-sm text-subtitle">
                                    Yes! All our Pokémon products, sports singles, and jerseys are 100% authentic, sourced directly from trusted distributors and suppliers.
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-title mb-2">What condition are your cards/products in?</p>
                                <p className="text-sm text-subtitle">
                                    Each listing clearly states product condition – from sealed packs to near-mint singles. If you have any questions, reach out before you buy!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Need More Help? Section */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-title flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.228a3.75 3.75 0 100 5.304 3.75 3.75 0 000-5.304zm0 0l-1.558 1.558c-.457.457-.52 1.18-.088 1.636l.36.36-1.558 1.558a3.75 3.75 0 11-5.304-5.304z" />
                            </svg>
                            Need More Help?
                        </h3>
                        <p className="text-sm text-subtitle mb-6">
                            Need further assistance? Our friendly support team is available via:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-subtitle">
                                <Mail className="w-5 h-5 mr-3 text-primary" />
                                <span>sample@gmail.com</span>
                            </div>
                            <div className="flex items-center text-sm text-subtitle">
                                <Phone className="w-5 h-5 mr-3 text-primary" />
                                <span>+880344343432</span>
                            </div>
                            <div className="flex items-center text-sm text-subtitle">
                                <MapPin className="w-5 h-5 mr-3 text-primary" />
                                <span>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default HelpPage;