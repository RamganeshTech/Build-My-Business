import { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

const FAQS: FAQItem[] = [
    {
        question: 'Can I buy just one product?',
        answer:
            "Yes. Every BMB product is sold on its own. Start with the one you need most and add others whenever you are ready.",
    },
    {
        question: 'Do you offer a demo before I pay?',
        answer:
            'Yes. Book a free demo on WhatsApp or through the form below and we will walk you through the product using your own business as the example.',
    },
    {
        question: 'Can you customise a product for my business?',
        answer:
            'Yes. Our in-house team builds custom software, so we can adjust workflows, fields and reports, or build something new when no product fits.',
    },
    {
        question: 'How long does set-up take?',
        answer:
            'It depends on the product and your data. Set-up is a guided process with our team: we configure the app, import your data from Excel or your old system, and train your staff.',
    },
    {
        question: 'Do you work with businesses outside Chennai?',
        answer:
            'Yes. Set-up, training and support can all be done online. For larger rollouts our team can visit on site.',
    },
    {
        question: 'What support do I get?',
        answer:
            'Our team in Anna Nagar West, Chennai, supports you on call, WhatsApp and email from Monday to Friday, 9 AM to 5 PM.',
    },
    {
        question: 'How do I pay?',
        answer:
            'You receive a GST invoice and can pay by UPI, bank transfer or card. Ask us about monthly and yearly options for each product.',
    },
    {
        question: 'Is my data safe, and can I take it out?',
        answer:
            'Your business data stays yours. Ask us about hosting, backups and access controls for the product you choose, and we can export your data on request.',
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        FAQ
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a1433] sm:text-4xl lg:text-5xl">
                        Questions we hear often.
                    </h2>
                </div>

                {/* FAQ list */}
                <div className="space-y-3">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                                    isOpen
                                        ? 'border-transparent shadow-[0_8px_28px_-12px_rgba(10,20,51,0.2)]'
                                        : 'border-[#e4e9f3]'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? -1 : index
                                        )
                                    }
                                    className="flex w-full items-center justify-between gap-5 bg-white px-5 py-5 text-left sm:px-6"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-bold leading-6 text-[#0a1433] sm:text-base">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium text-[#f97506] transition-transform duration-200 ${
                                            isOpen ? 'rotate-45' : ''
                                        }`}
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-200 ${
                                        isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-sm leading-6 text-[#36425f] sm:px-6 sm:pb-6 sm:text-[15px]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;