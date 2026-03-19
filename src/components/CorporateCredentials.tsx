// src/pages/CorporateCredentials.tsx
import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

const smoothFadeUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
    }
};

const motionProps: HTMLMotionProps<"div"> = {
    variants: smoothFadeUp,
    initial: "initial",
    whileInView: "whileInView",
    viewport: { once: true }
};

const CorporateCredentials: React.FC = () => {
    const brandBlue = "#2563eb"; // Blue-600
    const sectionPadding = "w-full px-6 md:px-12";

    return (
        <div className="w-full bg-white pt-24 font-sans text-slate-700">

            {/* --- HEADER --- */}
            <section className={`${sectionPadding} py-20 border-b border-slate-50`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto lg:mx-0"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div style={{ backgroundColor: brandBlue }} className="w-8 h-[2px]"></div>
                        <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Corporate Identity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
                        Corporate <span style={{ color: brandBlue }}>Credentials.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                        Verified registration data and organizational details for Build My Business.
                        This document serves as the official source for corporate transparency and regulatory compliance.
                    </p>
                </motion.div>
            </section>

            {/* --- CREDENTIALS GRID --- */}
            <section className={`${sectionPadding} py-24`}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Left Side: Legal Identity */}
                    <motion.div {...motionProps} className="space-y-12">
                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-6">Legal Entity Name</h2>
                            <p className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight uppercase">Build My Business</p>
                        </div>

                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-6">Nature of Business</h2>
                            <p className="text-slate-600 leading-relaxed font-medium italic border-l-2 border-slate-100 pl-6">
                                A premier business consulting firm providing comprehensive end-to-end solutions including
                                firm registration, tax strategy, legal auditing, and digital infrastructure management.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-6">Operational Status</h2>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Active & Verified</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Registered Verification */}
                    <motion.div {...motionProps} className="space-y-12 bg-slate-50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-6">Registered Office</h2>
                            <p className="text-xl font-bold text-slate-800 leading-relaxed tracking-tight">
                                13th, Main Road, Anna Nagar West,<br />
                                Anna Nagar (Chennai), Chennai,<br />
                                Egmore Nungambakkam, Tamil Nadu,<br />
                                India, 600040.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-10 pt-10 border-t border-slate-200">
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-3">Official Communications</h3>
                                <a href="mailto:ramstechcircle@gmail.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors block tracking-tighter">
                                    ramstechcircle@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-3">Verified Contact</h3>
                                <a href="tel:+919363964498" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors block tracking-tighter">
                                    +91 93639 64498
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* --- FOOTER NOTE --- */}
            <section className={`${sectionPadding} py-32 border-t border-slate-50 text-center`}>
                <motion.div {...motionProps} className="max-w-3xl mx-auto">
                    <p className="text-xs text-slate-400 font-medium leading-loose">
                        Build My Business operates under the regulatory frameworks of the Ministry of Corporate Affairs, India.
                        All corporate credentials presented here are verified through official government registries.
                        For compliance-related inquiries, please use the official channels provided above.
                    </p>
                </motion.div>
            </section>

        </div>
    );
};

export default CorporateCredentials;