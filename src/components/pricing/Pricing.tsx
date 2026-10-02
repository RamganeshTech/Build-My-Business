import { motion } from 'framer-motion';
import {
    Check,
} from 'lucide-react';
import { CATALOG } from '../../data/productCatalog';



// const categoryLabels: Record<string, string> = {
//     edu: 'Education',
//     build: 'Interiors & Construction',
//     ops: 'Operations & Supply Chain',
//     sales: 'Sales & Marketing',
//     food: 'Food & Hospitality',
//     trade: 'Trade & Exports',
//     grow: 'Growth Services',
//     tech: 'Technology Services',
// };

// const categoryGradients: Record<string, string> = {
//     edu: 'from-[#ff2a3d] to-[#d90a1e]',
//     build: 'from-[#ff9a3d] to-[#f97506]',
//     ops: 'from-[#38bdf8] to-[#1f7fc9]',
//     sales: 'from-[#ff4f8b] to-[#e11d74]',
//     food: 'from-[#34d399] to-[#059669]',
//     trade: 'from-[#2dd4bf] to-[#0d9488]',
//     grow: 'from-[#fb7185] to-[#f97506]',
//     tech: 'from-[#60a5fa] to-[#2563eb]',
// };

const pricingPrinciples = [
    'Pay per product, add more any time',
    'Rupee pricing with GST invoices',
    'Free demo before you buy',
    'Set-up and training by our team',
];

const Pricing = () => {
    return (
        <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        Pricing
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0a1433] sm:text-4xl">
                        Pay only for what you use.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[#36425f]">
                        Every product is priced on its own, so you can start with one and add more later. Ask
                        us for a quote based on your team size and needs.
                    </p>
                </div>

                {/* Main Pricing Layout */}
                <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_1fr]">
                    {/* LEFT: How BMB pricing works card */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#0a1433] via-[#0e214d] to-[#173a7a] p-6 text-white shadow-xl sm:p-7">
                        <h3 className="text-xl font-bold text-white">
                            How BMB pricing works
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {pricingPrinciples.map((principle) => (
                                <li
                                    key={principle}
                                    className="flex items-start gap-3 text-[14px] text-[#d5def5]"
                                >
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                                    <span>{principle}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/919363964498?text=Hi%20BMB%20team%2C%20please%20share%20pricing%20for%20your%20products."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center justify-center rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00]"
                            >
                                Get pricing on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: 2-Column Product Pricing Table */}
                    <div className="overflow-hidden rounded-3xl border border-[#e4e9f3] bg-white shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* {CATALOG.map((product, idx) => {
                                const IconComponent = product.icon;
                                const isOdd = idx % 2 !== 0;

                                return (
                                    <motion.a
                                        key={product.id}
                                        href={`#${product.id}`}
                                        whileHover={{ backgroundColor: '#f8fafc' }}
                                        className={`flex items-center justify-between border-b border-[#eef2f8] p-4 transition-colors duration-150 sm:p-5 ${
                                            !isOdd ? 'sm:border-r sm:border-[#eef2f8]' : ''
                                        }`}
                                    >
                                        <div className="flex items-center gap-3.5 pr-2">
                                            <div
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br p-1.5 shadow-sm ${
                                                    categoryGradients[product.cat] || 'from-sky-500 to-blue-600'
                                                }`}
                                            >
                                                {product.logo ? (
                                                    <img
                                                        src={product.logo}
                                                        alt={`${product.name} logo`}
                                                        className="h-full w-full object-contain"
                                                    />
                                                ) : (
                                                    <IconComponent className="h-5 w-5 text-white" />
                                                )}
                                            </div>

                                            <div className="text-left">
                                                <h4 className="text-[14.5px] font-bold text-[#0a1433]">
                                                    {product.name}
                                                </h4>
                                                <p className="text-[12px] font-medium text-[#67728f]">
                                                    {categoryLabels[product.cat] || product.cat}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="shrink-0 text-right">
                                            {product.price ? (
                                                <div>
                                                    <span className="block text-[11px] font-medium text-[#67728f]">
                                                        From
                                                    </span>
                                                    <span className="block text-[15px] font-bold text-[#0a1433]">
                                                        {product.price}
                                                    </span>
                                                    {product.priceNote && (
                                                        <span className="block text-[11px] text-[#67728f]">
                                                            {product.priceNote}
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-[12.5px] font-bold text-sky-700 transition hover:text-sky-800">
                                                    Ask for pricing →
                                                </span>
                                            )}
                                        </div>
                                    </motion.a>
                                );
                            })} */}


                            {CATALOG.map((product, idx) => {
                                const Icon = product.icon;
                                const isOdd = idx % 2 !== 0;

                                return (
                                    <motion.a
                                        key={product.id}
                                        href={`#${product.id}`}
                                        whileHover={{ backgroundColor: '#f8fafc' }}
                                        className={`flex items-center justify-between border-b border-[#eef2f8] p-4 transition-colors duration-150 sm:p-5 ${!isOdd ? 'sm:border-r sm:border-[#eef2f8]' : ''
                                            }`}
                                    >
                                        {/* Left info: Icon / Logo + Name + Category */}
                                        <div className="flex items-center gap-3.5 pr-2">
                                            {/* Logo / Icon Tile */}
                                            {product.logo ? (
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
                                                    <img
                                                        src={product.logo}
                                                        alt=""
                                                        className="h-full w-full object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl p-1.5 text-white shadow-sm"
                                                    style={{
                                                        backgroundImage: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`,
                                                    }}
                                                >
                                                    <Icon
                                                        size={20}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            )}

                                            {/* Text block */}
                                            <div className="text-left">
                                                <h4 className="text-[14.5px] font-bold text-[#0a1433]">
                                                    {product.name}
                                                </h4>

                                                <p className="text-[12px] font-medium text-[#67728f]">
                                                    {product.category}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right: Pricing or CTA */}
                                        <div className="shrink-0 text-right">
                                            {product.price ? (
                                                <div>
                                                    <span className="block text-[11px] font-medium text-[#67728f]">
                                                        From
                                                    </span>

                                                    <span className="block text-[15px] font-bold text-[#0a1433]">
                                                        {product.price}
                                                    </span>

                                                    {product.priceNote && (
                                                        <span className="block text-[11px] text-[#67728f]">
                                                            {product.priceNote}
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-[12.5px] font-bold text-sky-700 transition hover:text-sky-800">
                                                    Ask for pricing →
                                                </span>
                                            )}
                                        </div>
                                    </motion.a>
                                );
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;