import { motion } from 'framer-motion';
import { useState } from 'react';
// import { heroLogo } from '../constants/constants';
import { CATALOG, type CatalogProduct } from '../data/productCatalog';
import { ctaFor } from './products/Products';
import { SideModal } from './ui/SideModal';
import { waLink } from '../data/contact';
import { MessageCircle } from 'lucide-react';
import ProductDetails from './products/ProductDetails';
// type Product = {


//     
// name: string;
//     label: string;
//     description: string;
//     href: string;
//     accentClass: string;
//     logo?: string;
// };

type Product = {
    id: string;
    label: string;
    categories: string[];
    accentClass: string;
};


const products: Product[] = [
    {
        id: 'dailygrades',
        // name: 'DailyGrades',
        label: 'Education',
        categories: ['schools'],
        accentClass: 'from-[#ff2a3d] to-[#d90a1e]'
    },
    {
        id: 'vertical-living-crm',
        // name: 'Vertical Living CRM', 
        label: 'Interiors', categories: ['interiors'], accentClass: 'from-[#ff9a3d] to-[#f97506]'
    },
    {
        id: 'civilmind-pro',
        // name: 'CivilMind Pro', 
        label: 'Construction', categories: ['construction'], accentClass: 'from-[#d97706] to-[#fcc63d]'
    },
    {
        id: 'bmb-warehouse',
        // name: 'Warehouse', 
        label: 'Operations', categories: ['warehousing', 'exporters', 'construction'], accentClass: 'from-[#0284c7] to-[#67e8f9]'
    },
    {
        id: 'bmb-leads',
        // name: 'Leads CRM', 
        label: 'Sales', categories: ['schools', 'interiors', 'construction', 'local'],
        accentClass: 'from-[#be185d] to-[#ff6aa9]'
    },
    {
        id: 'presencescore',
        // name: 'PresenceScore', 
        label: 'Growth', categories: ['schools', 'restaurants', 'local'], accentClass: 'from-[#7e22ce] to-[#c084fc]'
    },
    {
        id: 'bmb-kitchen',
        // name: 'Kitchen POS', 
        label: 'Food & Dining', categories: ['restaurants'], accentClass: 'from-[#047857] to-[#4ade80]'
    },
    {
        id: 'bmb-logistics',
        // name: 'Logistics', 
        label: 'Supply Chain', categories: ['warehousing', 'exporters'], accentClass: 'from-[#1d4ed8] to-[#60a5fa]'
    },
    {
        id: 'bmb-exports',
        // name: 'Exports', 
        label: 'Trade', categories: ['exporters'], accentClass: 'from-[#0f766e] to-[#2dd4bf]'
    },
    {
        id: 'digital-marketing',
        // name: 'Marketing', 
        label: 'Services', categories: ['schools', 'interiors', 'restaurants', 'local'], accentClass: 'from-[#e11d48] to-[#ff8a4c]'
    },
    {
        id: 'content-creation',
        // name: 'Content Lab', 
        label: 'Media', categories: ['schools', 'interiors', 'restaurants', 'local'], accentClass: 'from-[#a21caf] to-[#f0abfc]'
    },
    {
        id: 'custom-software',
        // name: 'Custom SaaS', 
        label: 'Tech', categories: ['construction', 'custom'], accentClass: 'from-[#3730a3] to-[#818cf8]'
    },
    {
        id: 'ai-automation',
        // name: 'AI Automations', 
        label: 'Intelligence', categories: ['warehousing', 'custom'], accentClass: 'from-[#7c3aed] to-[#22d3ee]'
    },
    {
        id: 'cloud-it',
        // name: 'Cloud & IT', 
        label: 'Infrastructure', categories: ['schools', 'warehousing', 'custom'], accentClass: 'from-[#4f46e5] to-[#38bdf8]'
    },
];

const filterChips = [
    { id: 'schools', label: 'Schools' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'construction', label: 'Construction' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'warehousing', label: 'Warehouses' },
    { id: 'local', label: 'Local Biz' },
];

const ArrowIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    </svg>
);

const Hero = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const toggleFilter = (catId: string) => {
        setSelectedCategory((prev) => (prev === catId ? null : catId));
    };

    const [active, setActive] = useState<CatalogProduct | null>(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleSelect = (id: string) => {
        const product = CATALOG.find((item) => item.id === id);

        if (!product) return;

        setActive(product);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const cta = active ? ctaFor(active) : null;

    const activeFilterCount = selectedCategory
        ? products.filter((p) => p.categories.includes(selectedCategory)).length
        : products.length;

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-100/70 blur-3xl" />
                <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-3xl" />
            </div>

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8 lg:py-24">
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700"
                    >
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        The Build My Business suite
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#0a1433] sm:text-5xl lg:text-[58px]"
                    >
                        One brand.
                        <br />
                        Every app your
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            business runs on.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.12 }}
                        className="mt-6 max-w-2xl text-base leading-7 text-[#36425f] sm:text-lg"
                    >
                        Software built for how Indian businesses actually
                        work, from school classrooms and interior sites to
                        construction teams and growing businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.18 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="#products"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00]"
                        >
                            Explore products
                            <ArrowIcon />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-[#e4e9f3] bg-white px-6 text-sm font-bold text-[#0a1433] transition duration-200 hover:-translate-y-0.5 hover:border-[#0a1433]"
                        >
                            Book a demo
                        </a>
                    </motion.div>

                    {/* Brand statement */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex items-center gap-3 text-sm font-medium text-[#67728f]"
                    >
                        <span className="h-px w-8 bg-[#e4e9f3]" />
                        One company. Multiple products. Built to work together.
                    </motion.div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {filterChips.map((chip) => {
                            const isSelected = selectedCategory === chip.id;

                            return (
                                <button
                                    key={chip.id}
                                    type="button"
                                    onClick={() => toggleFilter(chip.id)}
                                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${isSelected
                                        ? 'border-orange-500 bg-orange-500 text-white'
                                        : 'border-[#e4e9f3] bg-white text-[#36425f] hover:border-orange-300 hover:text-orange-600'
                                        }`}
                                >
                                    {chip.label}
                                </button>
                            );
                        })}
                    </div>
                </div>



                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative overflow-hidden rounded-[28px] border border-[#e4e9f3] bg-white shadow-[0_24px_70px_-24px_rgba(10,20,51,0.28)]"
                    >
                        {/* macOS Window Title Bar */}
                        <div className="flex items-center justify-between border-b border-[#eef2f8] bg-[#f5f8fd] px-4 py-3 sm:px-5">
                            {/* Window dots */}
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-[#ff5f57] transition hover:opacity-80" />
                                <span className="h-3 w-3 rounded-full bg-[#febc2e] transition hover:opacity-80" />
                                <span className="h-3 w-3 rounded-full bg-[#28c840] transition hover:opacity-80" />
                            </div>

                            {/* Search bar simulation */}
                            <div className="flex h-8 max-w-[210px] flex-1 items-center gap-2 rounded-lg border border-[#e4e9f3] bg-white px-3 text-xs text-[#67728f] sm:max-w-[240px]">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5 text-[#67728f]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="M20 20l-4-4" />
                                </svg>
                                <span className="truncate font-medium">
                                    {selectedCategory
                                        ? `Filtered: ${filterChips.find((c) => c.id === selectedCategory)?.label}`
                                        : 'Search 14 BMB apps'}
                                </span>
                            </div>

                            <span className="hidden text-xs font-semibold text-[#0a1433] sm:inline">
                                macOS
                            </span>
                        </div>

                        {/* Screen Content */}
                        <div className="p-4 sm:p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-[#67728f]">
                                        Product Ecosystem
                                    </p>
                                    <h3 className="text-lg font-bold text-[#0a1433]">
                                        All Systems Launcher
                                    </h3>
                                </div>
                                <span className="rounded-full border border-[#e4e9f3] bg-[#f5f8fd] px-2.5 py-1 text-xs font-semibold text-[#36425f]">
                                    {activeFilterCount} / 14 Apps
                                </span>
                            </div>

                            {/* App Icon Grid (3 cols on small mobile, 4 cols on mobile, 5 cols on sm/desktop) */}
                            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
                                {products.map((p) => {
                                    const catalogProduct = CATALOG.find(
                                        (product) => product.id === p.id,
                                    );

                                    if (!catalogProduct) return null;

                                    const Icon = catalogProduct.icon;

                                    const isSelected =
                                        selectedCategory !== null &&
                                        p.categories.includes(selectedCategory);

                                    const isDimmed =
                                        selectedCategory !== null &&
                                        !p.categories.includes(selectedCategory);


                                    return (
                                        <button
                                            key={p.id}
                                            type="button"
                                            onClick={() => handleSelect(p.id)}
                                            className={`group flex flex-col items-center rounded-2xl border p-2 text-center transition-all duration-200 ${isSelected
                                                ? 'border-orange-300 bg-orange-50/60 shadow-md'
                                                : isDimmed
                                                    ? 'border-transparent opacity-35'
                                                    : 'border-transparent hover:border-[#e4e9f3] hover:bg-[#f5f8fd] hover:shadow-sm'
                                                }`}
                                        >
                                            <div
                                                className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.accentClass} p-2 shadow-sm transition-all duration-200 sm:h-14 sm:w-14 ${isSelected
                                                    ? 'scale-105 shadow-lg ring-2 ring-orange-300 ring-offset-2'
                                                    : 'group-hover:-translate-y-1 group-hover:shadow-md'
                                                    }`}
                                            >
                                                <Icon
                                                    size={28}
                                                    className="text-white"
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <span className="mt-2 line-clamp-1 w-full text-[11px] font-semibold text-[#0a1433] sm:text-xs">
                                                {catalogProduct.name}
                                            </span>
                                            <span className="line-clamp-1 text-[9px] text-[#67728f]">
                                                {p.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Bottom macOS Dock bar */}
                            <div className="mt-5 flex items-center justify-between rounded-xl bg-[#0a1433] px-4 py-2.5 text-xs text-white">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span className="font-semibold text-slate-100">
                                        One unified suite
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] text-orange-300">
                                    Instant Sync
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating proof points */}
                    <div className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-xl border border-[#e4e9f3] bg-white px-3.5 py-2 text-xs font-semibold text-[#36425f] shadow-lg md:flex">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Built in India
                    </div>

                    <div className="absolute -right-3 -top-3 hidden rounded-xl border border-[#e4e9f3] bg-white px-3.5 py-2 text-xs font-semibold text-[#36425f] shadow-lg md:block">
                        14 Products · Single Login
                    </div>
                </div>
                {/* </div> */}

            </div>


            <SideModal
                isOpen={isOpen}
                onClose={handleClose}
                title={active?.name ?? ''}
                width="w-full sm:w-[520px]"
                footer={
                    active &&
                    cta && (
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
                {active && <ProductDetails product={active} />}
            </SideModal>
        </section>
    );
};

export default Hero;