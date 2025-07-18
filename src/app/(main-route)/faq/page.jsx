"use client";

import SimpleHero from "@/components/common/SimpleHero";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";
import { faqItems } from "@/data/data";
import Link from "next/link";

const heroLinks = [
    { name: "Home", href: "/" },
    { name: "FAQs", isCurrent: true }
];
const FAQ = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero title="FAQs" links={heroLinks} />

            <PageLayout>
                <div className="mb-8">
                    <h2 className="text-xl text-title font-medium mb-2">Welcome to our FAQ section!</h2>
                    <p className="text-subtitle text-sm">Here, you'll find answers to common questions about orders, shipping and returns. If you need further assistance, feel free to <Link className="underline text-blue-600" href="/contact">contact us</Link>   .</p>
                </div>
                {/* Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="rounded-sm border border-gray-200 data-[state=open]:border-primary mb-4 py-4"
                            >
                                <AccordionTrigger
                                    className="px-6 py-4 text-lg font-medium text-title hover:no-underline flex justify-between items-center w-full rounded-sm transition-colors duration-200
                                    data-[state=open]:rounded-b-none"
                                >
                                    <span className="text-left flex-grow">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-0 text-subtitle">
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

export default FAQ;