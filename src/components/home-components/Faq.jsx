"use client"

import ContentHeader from "../common/ContentHeader";
import PageLayout from "../layout/PageLayout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react"; // আইকনের জন্য ChevronDown আমদানি করা হয়েছে

// FAQ আইটেমগুলোর জন্য আপডেট করা ডেটা
const faqItems = [
    {
        id: "faq-1",
        question: "How do I place an order?",
        answer: "Placing an order is easy! Browse our collections, select your favorite piece, customize it, and proceed to checkout. Follow the steps to enter your details and complete the payment. We accept major credit and debit cards, PayPal, Apple, Google Pay, and other secure payment options." // স্ক্রিনশট থেকে সম্পূর্ণ উত্তর
    },
    {
        id: "faq-2",
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, Amex), PayPal, and other secure payment gateways. You can see the full list during checkout."
    },
    {
        id: "faq-3",
        question: "Can I customize my jewelry?",
        answer: "Yes, many of our jewelry pieces can be customized. Look for the 'Customize' option on the product page or contact us for bespoke designs."
    },
    {
        id: "faq-4",
        question: "Can I submit my own design for a custom order?",
        answer: "Absolutely! We welcome custom design requests. Please contact our design team with your ideas and we'll guide you through the process."
    },
    {
        id: "faq-5",
        question: "Can I exchange my item for a different size or style?",
        answer: "Exchanges are possible within our return period, subject to availability and condition of the item. Please review our Exchange Policy for more details."
    },
    {
        id: "faq-6",
        question: "Are there any items that cannot be returned?",
        answer: "Certain personalized or custom-made items may not be eligible for return unless there is a defect or error on our part. Please check the product description or our Return Policy for specifics."
    },
];

const Faq = () => {
    return (
        <div className="bg-content-bg">
            <PageLayout>
                <ContentHeader title="FAQs" subtitle="Got questions? We’ve got answers — here to help you shop with confidence." />

                {/* Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="bg-white rounded-sm border border-gray-200 data-[state=open]:border-primary mb-4 py-4"
                            >
                                <AccordionTrigger
                                    className="px-6 py-4 text-lg font-medium text-gray-800 hover:no-underline flex justify-between items-center w-full rounded-sm transition-colors duration-200
                                    data-[state=open]:rounded-b-none"
                                >
                                    <span className="text-left flex-grow">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </PageLayout>
        </div>
    );
};

export default Faq;