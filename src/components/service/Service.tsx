import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { SideModal } from '../ui/SideModal';
import { waLink } from '../../data/contact';
import { MessageCircle } from 'lucide-react';
import ServiceDetails from './ServiceDetails';
import { CATALOG, type CatalogProduct } from '../../data/productCatalog';

// type ServiceItem = {
export type ServiceItem = {
    id: string;
    name: string;
    description: string;
    points: string[];
    gradientClass: string;
    icon: React.ReactNode;
};


export const SERVICE_IDS = [
    'digital-marketing',
    'content-creation',
    'custom-software',
    'ai-automation',
    'cloud-it',
] as const;

// const services: ServiceItem[] = [
//     {
//         id: 'digital-marketing',
//         name: 'BMB Digital Marketing',
//         description: 'Meta ads, Google ads and SEO packages priced for Indian businesses.',
//         points: [
//             'Meta ads',
//             'Google Search ads',
//             'Performance Max',
//             'YouTube ads',
//             'Local SEO',
//         ],
//         gradientClass: 'from-[#ff8a4c] to-[#e11d48]',
//         icon: (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//                 aria-hidden="true"
//             >
//                 <path d="M3 11v2a1 1 0 0 0 1 1h3l7 5V5L7 10H4a1 1 0 0 0-1 1z" />
//                 <path d="M18 8a5 5 0 0 1 0 8" />
//             </svg>
//         ),
//     },
//     {
//         id: 'content-creation',
//         name: 'BMB Content Creation',
//         description: 'Ad shoots, reels, product videos and posters that make your ads work.',
//         points: [
//             'Ad film shoots',
//             'Reels & shorts',
//             'Product videos',
//             'Testimonial videos',
//             'Posters & creatives',
//         ],
//         gradientClass: 'from-[#f0abfc] to-[#a21caf]',
//         icon: (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//                 aria-hidden="true"
//             >
//                 <rect x="2" y="6" width="14" height="12" rx="2" />
//                 <path d="M16 10l6-3v10l-6-3" />
//             </svg>
//         ),
//     },
//     {
//         id: 'custom-software',
//         name: 'Custom Software & SaaS',
//         description: 'Custom software, SaaS products, mobile apps and websites built by our in-house team.',
//         points: [
//             'Custom software',
//             'SaaS product development',
//             'Android & iOS apps',
//             'Web design & development',
//             'CRM / ERP systems',
//         ],
//         gradientClass: 'from-[#818cf8] to-[#3730a3]',
//         icon: (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//                 aria-hidden="true"
//             >
//                 <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
//             </svg>
//         ),
//     },
//     {
//         id: 'ai-automation',
//         name: 'AI & Automation',
//         description: 'AI chatbots, workflow automation and dashboards that cut manual work.',
//         points: [
//             'Website & WhatsApp AI chatbots',
//             'Business process automation',
//             'Analytics dashboards & MIS',
//             'Document data extraction',
//             'Automated reports',
//         ],
//         gradientClass: 'from-[#22d3ee] to-[#7c3aed]',
//         icon: (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//                 aria-hidden="true"
//             >
//                 <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
//                 <path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z" />
//             </svg>
//         ),
//     },
//     {
//         id: 'cloud-it',
//         name: 'Cloud, IT & AMC',
//         description: 'IT infrastructure, cloud and DevOps, security, and ongoing managed support.',
//         points: [
//             'IT infrastructure set-up',
//             'Networking & Wi-Fi',
//             'Cloud deployment & DevOps',
//             'Email & domain set-up',
//             'Backups',
//         ],
//         gradientClass: 'from-[#38bdf8] to-[#4f46e5]',
//         icon: (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//                 aria-hidden="true"
//             >
//                 <path d="M17.5 19H7a5 5 0 1 1 1.3-9.8A6 6 0 0 1 19.6 11a4 4 0 0 1-2.1 8z" />
//             </svg>
//         ),
//     },
// ];


const services = CATALOG.filter(
    (product) =>
        product.kind === 'service' &&
        SERVICE_IDS.includes(product.id as any),
);

const ctaForService = (service: CatalogProduct) => {
    return {
        label: 'Get a quote',
        msg: `Hi BMB team, I would like a quote for ${service.name}.`,
    };
};

const Service = () => {

    const [active, setActive] = useState<CatalogProduct | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // const cta = active ? ctaFor(active) : null;
    const cta = active ? ctaForService(active) : null;

    const handleSelect = (service: CatalogProduct) => {
        setActive(service);
        setIsOpen(true);
    };

    const handleClose = useCallback(() => setIsOpen(false), []);

    return (
        <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        Services
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0a1433] sm:text-4xl">
                        The Team behind the software.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[#36425f]">
                        When you need more than an app: we market, create, build and run the technology for you .
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (

                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.06 }}
                                className="flex flex-col justify-between rounded-2xl border border-[#e4e9f3] bg-[#f8fafc] p-6 transition duration-200 hover:border-[#cbd5e1] hover:bg-white hover:shadow-lg"
                            >
                                <div>
                                    {/* Gradient Icon Container */}
                                    {/* <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${service.gradientClass}`}
                                > */}

                                    {/* <div
                                        className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                                        }}
                                    >
                                        {service.logo ? (
                                            <img
                                                src={service.logo}
                                                alt=""
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <Icon
                                                size={22}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div> */}


                                    {service.logo ? (
                                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
                                            <img
                                                src={service.logo}
                                                alt=""
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                                            }}
                                        >
                                            <Icon
                                                size={22}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )}

                                    <h3 className="mt-5 text-[17px] font-bold text-[#0a1433]">
                                        {service.name}
                                    </h3>

                                    <p className="mt-2 text-[13px] leading-6 text-[#67728f]">
                                        {service.tagline}
                                    </p>

                                    {/* Bullet Points */}
                                    <ul className="mt-5 space-y-2">
                                        {service.modules.map((modules) => (
                                            <li
                                                key={modules}
                                                className="flex items-center gap-2.5 text-[13px] font-medium text-[#36425f]"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-sm bg-orange-500" />
                                                {modules}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card Link */}
                                <div className="mt-6 pt-2">
                                    <button
                                        // href={`#${service.id}`}
                                        onClick={() => handleSelect(service)}
                                        className="inline-flex cursor-pointer items-center text-[13px] font-bold text-sky-700 transition hover:text-sky-800"
                                    >
                                        Learn more →
                                    </button>
                                </div>
                            </motion.div>
                        )
                    })}

                    {/* Dark CTA Audit Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.32 }}
                        className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0a1433] via-[#0f204b] to-[#173a7a] p-6 text-white shadow-md sm:p-7"
                    >
                        <div>
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9fb4e6]">
                                Not sure what you need?
                            </span>

                            <h3 className="mt-3 text-xl font-bold leading-snug text-white">
                                Get a free growth &amp; tech audit
                            </h3>

                            <p className="mt-3 text-[13px] leading-6 text-[#c9d4f0]">
                                We review your current tools, website and marketing, then recommend the 2–3
                                changes that matter most .
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-flex h-11 items-center justify-center rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00]"
                            >
                                Book a free audit
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>


            <SideModal
                isOpen={isOpen}
                onClose={handleClose}
                title={active?.name ?? ''}
                width="w-full sm:w-[520px]"
                footer={
                    active && cta && (
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={waLink(cta.msg)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-5 text-sm font-bold text-white transition hover:bg-orange-600 sm:flex-none"
                            >
                                <MessageCircle size={18} aria-hidden="true" />
                                {cta.label}
                            </a>

                            <a
                                href="#contact"
                                onClick={handleClose}
                                className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-900 transition hover:border-slate-900 sm:flex-none"
                            >
                                Contact form
                            </a>
                        </div>
                    )
                }
            >
                {active && <ServiceDetails service={active} />}
            </SideModal>

        </section>
    );
};

export default Service;