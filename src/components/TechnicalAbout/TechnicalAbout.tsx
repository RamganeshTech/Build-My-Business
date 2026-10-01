import { motion } from 'framer-motion';
// import { heroLogo } from '../../constants/constants';
import { CATALOG } from '../../data/productCatalog';
// const appItems = [
//     'DailyGrades',
//     'Vertical Living CRM',
//     'CivilMind Pro',
//     'BMB Warehouse',
//     'BMB Leads',
//     'PresenceScore',
//     'BMB Kitchen',
//     'BMB Logistics',
// ];

// const serviceItems = [
//     'BMB Exports',
//     'BMB Digital Marketing',
//     'BMB Content Creation',
//     'Custom Software & SaaS',
//     'AI & Automation',
//     'Cloud, IT & AMC',
// ];


const appItems = CATALOG
    .filter((product) => product.kind === 'app')
    .map((product) => ({
        name: product.name,
        icon: product.icon,
    }));

const serviceItems = CATALOG
    .filter((product) => product.kind === 'service')
    .map((product) => ({
        name: product.name,
        icon: product.icon,
    }));

const bmbLayerPills = [
    'One account manager',
    'WhatsApp-first updates',
    'Indian billing & GST invoices',
    'Reports & MIS',
    'Web + mobile',
];

const pillars = [
    {
        title: 'Built in-house',
        description:
            "Our own developers build and maintain every product, so fixes don't wait on a third party.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-orange-400"
                aria-hidden="true"
            >
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Made for India',
        description:
            'Rupee pricing, regional workflows and support in working hours you can actually reach.',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-orange-400"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
        ),
    },
    {
        title: 'Start small, add later',
        description:
            "Begin with one app. Add the next when you're ready, with no migration project.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-orange-400"
                aria-hidden="true"
            >
                <path d="M4 7h16M4 12h10M4 17h7" />
                <path d="M17 15l2 2 3-4" />
            </svg>
        ),
    },
    {
        title: 'Real people',
        description:
            'One team in Anna Nagar West, Chennai, for software, marketing and content.',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-orange-400"
                aria-hidden="true"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
];

const TechnicalAbout = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1433] to-[#0f2257] py-20 text-white sm:py-24 lg:py-28">
            {/* Background ambient glow */}
            <div
                className="pointer-events-none absolute -right-48 -top-48 h-[640px] w-[640px] rounded-full bg-orange-500/15 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        Why One Suite
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
                        Separate apps. One
                        <br />
                        company behind all of them.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#c4cfeb] sm:text-lg">
                        Buying five tools from five vendors means five logins, five support desks and data that
                        never talks. BMB puts every app under one roof, and we build new ones when our
                        customers need them .
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                    {/* LEFT COLUMN: Layers Container */}
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                        {/* Layer 1: Apps */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9fb4e6]">
                                Apps
                            </h4>

                            <div className="mt-3 flex flex-wrap gap-2.5">
                                {appItems.map((app) => {
                                    const Icon = app.icon;

                                    return (
                                        <div
                                            key={app.name}
                                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                                        >
                                            <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded bg-white/20">
                                                <Icon size={14} aria-hidden="true" />
                                            </div>

                                            <span>{app.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Layer 2: Services */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9fb4e6]">
                                Services
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2.5">
                                {serviceItems.map((service) => {
                                    const Icon = service.icon;

                                    return (
                                        <div
                                            key={service.name}
                                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                                        >
                                            <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded bg-white/20">
                                                <Icon size={14} aria-hidden="true" />
                                            </div>

                                            <span>{service.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Layer 3: The BMB Shared Core Layer */}
                        <div className="rounded-xl border border-white/20 bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-purple-500/20 p-4 sm:p-5">
                            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                                The BMB layer, shared by everything
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2.5">
                                {bmbLayerPills.map((pill) => (
                                    <span
                                        key={pill}
                                        className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white"
                                    >
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 2x2 Pillars Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="flex flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                                    {pillar.icon}
                                </div>
                                <h3 className="mt-4 text-base font-bold text-white">
                                    {pillar.title}
                                </h3>
                                <p className="mt-2 text-xs leading-6 text-[#b9c6e6]">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalAbout;