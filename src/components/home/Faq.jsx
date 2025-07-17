"use client"

import { faqItems2 } from "@/data/data";
import ContentHeader from "../common/ContentHeader";
import PageLayout from "../layout/PageLayout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Faq = () => {
    return (
        <div className="bg-content-bg">
            <PageLayout>
                <ContentHeader title="FAQs" subtitle="Got questions? We’ve got answers — here to help you shop with confidence." />

                {/* Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems2.map((item) => (
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

export default Faq;