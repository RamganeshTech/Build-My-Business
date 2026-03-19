// src/pages/Disclaimer.tsx
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

const Disclaimer: React.FC = () => {
    const brandBlue = "#2563eb"; // Blue-600
    const sectionPadding = "w-full px-6 md:px-12";

    const legalPoints = [
        {
            title: "Consulting Limitation",
            content: "All information provided by Build My Business is for general consulting purposes. We provide strategic guidance, but final business decisions remain the responsibility of the client. Our services do not replace independent legal or financial audits."
        },
        {
            title: "Registration Timelines",
            content: "While we expedite firm registrations and permit applications, actual approval timelines are governed by government authorities and regulatory bodies. Build My Business is not liable for delays caused by third-party government processing."
        },
        {
            title: "Digital Accuracy",
            content: "We make every effort to ensure our IT and tax consulting data is precise. However, tax laws and digital security standards evolve rapidly; therefore, we do not warrant that all content is entirely error-free at all times."
        },
        {
            title: "No Guarantees",
            content: "Success in business depends on various market factors. Build My Business provides the tools and framework for growth, but we do not guarantee specific financial outcomes or market performance."
        }
    ];

    return (
        <div className="w-full bg-white pt-16 md:pt-24 font-sans text-slate-700">

            {/* --- HEADER --- */}
            <section className={`${sectionPadding} py-10 border-b border-slate-50`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto lg:mx-0"
                >
                    {/* <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandBlue }} className="w-8 h-[2px]"></div>
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Legal Framework</span>
          </div> */}
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
                        <span style={{ color: brandBlue }}>Disclaimer.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                        Please review the following legal disclosures regarding the consulting and registration services provided by Build My Business.
                    </p>
                </motion.div>
            </section>

            {/* --- STRUCTURED CONTENT --- */}
            <section className={`${sectionPadding} py-12`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {legalPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                {...motionProps}
                                className="relative p-5 md:p-10 border border-slate-50 hover:border-blue-100 hover:bg-slate-50/30 transition-all duration-500 rounded-[2rem]"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-xs font-bold">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                    {point.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- REGULATORY NOTE --- */}
            {/* <section className={`${sectionPadding} py-20 bg-slate-900 text-white`}>
                <motion.div {...motionProps} className="max-w-3xl mx-auto text-center">
                    <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Compliance Standards</p>
                    <h4 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight uppercase leading-tight">
                        Governed by Indian <br /> Regulatory Frameworks.
                    </h4>
                    <p className="text-sm text-slate-400 font-medium leading-loose opacity-80">
                        Any disputes arising from the use of our services are subject to the exclusive jurisdiction
                        of the courts in **Chennai, Tamil Nadu**. This disclaimer was last updated in March 2026.
                    </p>
                </motion.div>
            </section> */}

            {/* --- MINIMALIST FOOTER --- */}
            <section className={`${sectionPadding} py-5 border-t border-slate-50`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                        Build My Business © {new Date().getFullYear()}
                    </p>
                    <div className="flex gap-4">
                        <span className="h-1 w-12 bg-slate-100 rounded-full"></span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Disclaimer;