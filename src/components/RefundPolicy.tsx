// src/pages/RefundPolicy.tsx
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

const RefundPolicy: React.FC = () => {
    const brandBlue = "#2563eb"; // Blue-600
    const sectionPadding = "w-full px-6 md:px-12";

    return (
        <div className="w-full bg-white pt-24 font-sans text-slate-700">

            {/* --- HEADER --- */}
            <section className={`${sectionPadding} py-10 md:py-20 border-b border-slate-50`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto lg:mx-0"
                >
                    {/* <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandBlue }} className="w-8 h-[2px]"></div>
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Service Terms</span>
          </div> */}
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 uppercase">
                        Refund & <br /> <span style={{ color: brandBlue }}>Cancellation.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                        Transparent financial policies for our consulting and registration services.
                        Please review our terms regarding statutory fees and service termination.
                    </p>
                </motion.div>
            </section>

            <section className="w-full px-6 md:px-12 py-12">
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* Section 1: Statutory & Gov Fees */}
                    <motion.div {...motionProps} className="grid md:grid-cols-4 gap-4 md:gap-12">
                        <div className="md:col-span-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">1. Statutory Costs</p>
                        </div>
                        <div className="md:col-span-3 space-y-3">
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Government & Third-Party Fees</h2>
                            <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                Fees paid toward Government registrations (GST, MCA, MSME, etc.), stamp duties, or digital signatures are **strictly non-refundable**. These payments are processed directly with regulatory bodies and cannot be recovered once initiated.
                            </p>
                        </div>
                    </motion.div>

                    <div className="h-[1px] w-full bg-slate-100"></div>

                    {/* Section 2: Cancellation Rule */}
                    <motion.div {...motionProps} className="grid md:grid-cols-4 gap-4 md:gap-12">
                        <div className="md:col-span-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">2. Service Termination</p>
                        </div>
                        <div className="md:col-span-3 space-y-4">
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Cancellation Policy</h2>
                            <div className="p-5 bg-slate-50 border-l-2 border-blue-600 rounded-r-lg">
                                <p className="text-sm font-bold text-slate-800 leading-tight italic">
                                    "Once the document processing has started, cancellation is not possible."
                                </p>
                            </div>
                            <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                Our consulting and documentation workflows begin immediately upon the submission of your data.
                                We do not accept cancellation requests once our professional team has commenced work on your file.
                            </p>
                        </div>
                    </motion.div>

                    <div className="h-[1px] w-full bg-slate-100"></div>

                    {/* Section 3: Refund Process */}
                    <motion.div {...motionProps} className="grid md:grid-cols-4 gap-4 md:gap-12">
                        <div className="md:col-span-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">3. Refund Process</p>
                        </div>
                        <div className="md:col-span-3 space-y-5">
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight">How to Request</h2>
                            <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                Refunds are only considered for service fees in cases where zero professional work has been initiated. Requests must be submitted via email:
                            </p>
                            <div className="inline-block border border-slate-200 rounded-xl p-5 hover:border-blue-600 transition-colors">
                                <a href="mailto:ramstechcircle@gmail.com" className="text-lg font-bold text-blue-600 hover:text-slate-900 transition-colors">
                                    ramstechcircle@gmail.com
                                </a>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Subject: REFUND_REQUEST_[SERVICE_TYPE]</p>
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                <p className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                                    Processing Timeline: 7 — 10 Business Days
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* --- CORPORATE FOOTER --- */}
            <section className={`${sectionPadding} py-12 bg-slate-900 text-white text-center`}>
                <motion.div {...motionProps}>
                    <p className="text-blue-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-4">Build My Business</p>
                    <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
                    <p className="text-xs opacity-60 italic max-w-xl mx-auto leading-loose font-medium">
                        This policy is designed to ensure operational efficiency. Build My Business reserves the right to make final decisions on all refund claims based on the work progress of the specific service.
                    </p>
                </motion.div>
            </section>

        </div>
    );
};

export default RefundPolicy;