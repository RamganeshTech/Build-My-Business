import React from 'react';
import { motion } from 'framer-motion';

type IntegrationItem = {
    name: string;
    note: string;
    gradientClass: string;
    icon: React.ReactNode;
};

const integrations: IntegrationItem[] = [
    {
        name: 'WhatsApp',
        note: 'Alerts & follow-ups',
        gradientClass: 'from-[#4ade80] to-[#16a34a]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.6z" />
            </svg>
        ),
    },
    {
        name: 'UPI & Razorpay',
        note: 'Online payments',
        gradientClass: 'from-[#60a5fa] to-[#1d4ed8]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20M6 15h4" />
            </svg>
        ),
    },
    {
        name: 'Google',
        note: 'Ads, Analytics, Business Profile',
        gradientClass: 'from-[#fbbf24] to-[#ea580c]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
            </svg>
        ),
    },
    {
        name: 'Meta',
        note: 'Facebook & Instagram ads, lead forms',
        gradientClass: 'from-[#818cf8] to-[#2563eb]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M3 15c0-5 2.5-8 4.5-8S11 10 12 12s2.5 5 4.5 5S21 15 21 12s-1.5-5-3.5-5-4 3-5.5 5-3 5-5.5 5S3 17 3 15z" />
            </svg>
        ),
    },
    {
        name: 'Tally',
        note: 'Accounting export',
        gradientClass: 'from-[#f472b6] to-[#be185d]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 7h8M8 11h8M8 15h5" />
            </svg>
        ),
    },
    {
        name: 'Excel & Google Sheets',
        note: 'Import & export data',
        gradientClass: 'from-[#34d399] to-[#047857]',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M3 15h18M9 3v18" />
            </svg>
        ),
    },
];

const Integrations = () => {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        Integrations
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0a1433] sm:text-4xl">
                        Works with the tools
                        <br />
                        you already use.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[#36425f]">
                        No need to throw away what works. BMB apps connect to, or import and export with,
                        the tools Indian businesses use every day. Availability varies by product, so ask us
                        about yours .
                    </p>
                </div>

                {/* Integration Badges */}
                <div className="mt-10 flex flex-wrap gap-4">
                    {integrations.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            whileHover={{ y: -2 }}
                            className="flex items-center gap-3.5 rounded-2xl border border-[#e4e9f3] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(10,20,51,0.05)] transition-shadow duration-200 hover:shadow-md"
                        >
                            {/* Color-matched gradient tile icon */}
                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${item.gradientClass}`}
                            >
                                {item.icon}
                            </div>

                            {/* Label */}
                            <div className="pr-1 text-left">
                                <h3 className="text-[15px] font-bold text-[#0a1433]">
                                    {item.name}
                                </h3>
                                <p className="text-[13px] font-medium text-[#67728f]">
                                    {item.note}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;