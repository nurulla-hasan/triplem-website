"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "Terms", isCurrent: true }
];

const TermsPage = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Terms & Conditions" links={heroLinks} />

            <PageLayout>
                <div>
                    {/* Introductory Paragraph */}
                    <p className="text-base text-subtitle mb-8">
                        Welcome to [Your Store Name]! By accessing or using our website (the "Site"), you agree to be bound by the following Terms and Conditions. Please read them carefully.
                    </p>

                    {/* 1. General Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">1. General</h3>
                        <p className="text-base text-subtitle">
                            This website is operated by [Your Business Name]. Throughout the site, the terms "we", "us", and "our" refer to the store. By visiting or purchasing from our store, you agree to accept these terms, including any additional policies referenced herein.
                        </p>
                    </div>

                    {/* 2. Products Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">2. Products</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>We specialize in authentic collectible items, including Pokémon sealed products, sports card singles, and licensed sportswear. Product availability and descriptions are subject to change without notice.</li>
                            <li>We strive to provide accurate product images and details.</li>
                            <li>All product sales are subject to stock availability.</li>
                            <li>We reserve the right to limit quantities or cancel orders at our discretion.</li>
                        </ul>
                    </div>

                    {/* 3. Pricing & Payments Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">3. Pricing & Payments</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>All prices are listed in [Your Currency] and are inclusive/exclusive of applicable taxes as specified.</li>
                            <li>We accept payment through [e.g., Visa, Mastercard, PayPal, bKash, etc.].</li>
                            <li>Pricing may change at any time without notice.</li>
                            <li>Promotional codes or discounts cannot be applied retroactively.</li>
                        </ul>
                    </div>

                    {/* 4. Shipping Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">4. Shipping</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>We offer national and international shipping depending on the item.</li>
                            <li>Orders are usually processed within 1–2 business days.</li>
                            <li>Delivery times may vary based on location and carrier.</li>
                            <li>We are not responsible for delays caused by customs or third-party carriers.</li>
                            <li>More details are available on our <Link href="/shipping-policy" className="text-primary hover:underline">[Shipping Policy]</Link> page.</li>
                        </ul>
                    </div>

                    {/* 5. Returns & Refunds Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">5. Returns & Refunds</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>You may return eligible items within 14 days of delivery.</li>
                            <li>Items must be unopened, unused, and in their original packaging.</li>
                            <li>Certain products (e.g., opened sealed packs) are non-returnable.</li>
                            <li>Return shipping costs are the responsibility of the customer unless the item was incorrect or defective.</li>
                            <li>Please review our <Link href="/return-policy" className="text-primary hover:underline">[Return Policy]</Link> for more information.</li>
                        </ul>
                    </div>

                    {/* 6. Intellectual Property Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">6. Intellectual Property</h3>
                        <p className="text-base text-subtitle">
                            All content on this website, including images, text, logos, and graphics, is the property of [Your Store Name] and may not be copied, modified, or used without written permission.
                        </p>
                    </div>

                    {/* 7. User Accounts Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">7. User Accounts</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>You may be required to create an account to access certain features.</li>
                            <li>You are responsible for maintaining the confidentiality of your login details.</li>
                            <li>You agree to provide accurate and up-to-date information.</li>
                            <li>We reserve the right to suspend or terminate accounts found in violation of our terms.</li>
                        </ul>
                    </div>

                    {/* 8. Limitation of Liability Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">8. Limitation of Liability</h3>
                        <p className="text-base text-subtitle">
                            We are not liable for any damages or losses arising from your use of our site or products, except as required by law. All purchases are made at your own discretion and risk.
                        </p>
                    </div>

                    {/* 9. Privacy Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">9. Privacy</h3>
                        <p className="text-base text-subtitle">
                            Your privacy is important to us. Please review our <Link href="/privacy" className="text-primary hover:underline">[Privacy Policy]</Link> to understand how we collect, use, and protect your information.
                        </p>
                    </div>

                    {/* 10. Changes to Terms Section */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-title/90 mb-4">10. Changes to Terms</h3>
                        <p className="text-base text-subtitle">
                            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Effective Date."
                        </p>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default TermsPage;