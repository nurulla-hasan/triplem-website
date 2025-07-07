"use client";

import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", isCurrent: true }
];

const PrivacyPage = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Privacy Policy" links={heroLinks} />

            <PageLayout>
                <div>
                    {/* Introductory Paragraph */}
                    <p className="text-base text-subtitle mb-8">
                        Tripplemcollectibles is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from our website Tripplemcollectibles.
                    </p>

                    {/* 1. Information We Collect Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">1. Information We Collect</h3>
                        <p className="text-base text-subtitle mb-3">
                            When you visit our site or place an order, we may collect the following information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>Personal Information: Name, email address, phone number, billing and shipping address.</li>
                            <li>Payment Information: Payment method details (handled securely via third-party processors).</li>
                            <li>Order History: Products purchased, quantities, and shipping details.</li>
                            <li>Device Information: IP address, browser type, time zone, pages viewed, and other analytics data.</li>
                            <li>Marketing Data: Preferences, reviews, or feedback you voluntarily provide.</li>
                        </ul>
                    </div>

                    {/* 2. How We Use Your Information Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">2. How We Use Your Information</h3>
                        <p className="text-base text-subtitle mb-3">
                            We use your information to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>Process and fulfill your order</li>
                            <li>Communicate with you about orders, returns, or account updates</li>
                            <li>Provide customer support</li>
                            <li>Improve our website and user experience</li>
                            <li>Send marketing emails (only if you opt in)</li>
                            <li>Prevent fraud and secure the website</li>
                        </ul>
                    </div>

                    {/* 3. Sharing Your Information Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">3. Sharing Your Information</h3>
                        <p className="text-base text-subtitle mb-3">
                            We do not sell your personal information. However, we may share data with trusted third parties to fulfill your orders or operate our services, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>Payment gateways (e.g., Stripe, PayPal, bKash)</li>
                            <li>Shipping and logistics providers</li>
                            <li>Email marketing platforms (e.g., Mailchimp)</li>
                            <li>Website analytics providers (e.g., Google Analytics)</li>
                            <li>All partners are required to protect your data under applicable laws.</li>
                        </ul>
                    </div>

                    {/* 4. Cookies & Tracking Technologies Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">4. Cookies & Tracking Technologies</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>We use cookies and similar tracking tools to improve your Browse experience, remember your preferences, and analyze site traffic.</li>
                            <li>You can manage or disable cookies through your browser settings.</li>
                        </ul>
                    </div>

                    {/* 5. Your Rights Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">5. Your Rights</h3>
                        <p className="text-base text-subtitle mb-3">
                            Depending on your country, you may have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base text-subtitle">
                            <li>Access, update, or delete your personal data</li>
                            <li>Object to or restrict our use of your data</li>
                            <li>Withdraw your consent for marketing</li>
                            <li>File a complaint with a data protection authority</li>
                            <li>To exercise any of these rights, please contact us at <Link href="mailto:privacy@[yourstore].com" className="text-primary hover:underline">privacy@[yourstore].com</Link>.</li>
                        </ul>
                    </div>

                    {/* 6. Data Security Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">6. Data Security</h3>
                        <p className="text-base text-subtitle">
                            We take reasonable technical and organizational measures to protect your data. All payment data is encrypted and handled by secure payment processors.
                        </p>
                    </div>

                    {/* 7. Data Retention Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">7. Data Retention</h3>
                        <p className="text-base text-subtitle">
                            We keep your personal data only as long as necessary for the purposes described above or to comply with legal requirements.
                        </p>
                    </div>

                    {/* 8. Children's Privacy Section */}
                    <div className="mb-10">
                        <h3 className=" font-semibold text-title/90 mb-4">8. Children's Privacy</h3>
                        <p className="text-base text-subtitle">
                            Our website is not intended for children under the age of 13. We do not knowingly collect data from minors.
                        </p>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default PrivacyPage;