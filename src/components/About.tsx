// src/components/About.tsx
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT SIDE: ILLUSTRATION GRID (Replacing the Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
                    >
                        {/* Box 1: Growth Icon */}
                        <div className="bg-blue-600 rounded-3xl p-8 flex flex-col items-center justify-center text-white shadow-xl shadow-blue-100 h-60">
                            <i className="fa-solid fa-chart-line text-5xl mb-4"></i>
                            <span className="font-black text-xs uppercase tracking-widest">Business Growth</span>
                        </div>

                        {/* Box 2: Tech/IT Icon */}
                        <div className="bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-white h-60 mt-8">
                            <i className="fa-solid fa-microchip text-5xl mb-4 text-blue-400"></i>
                            <span className="font-black text-xs uppercase tracking-widest text-blue-400">IT Solutions</span>
                        </div>

                        {/* Box 3: Trust/Legal Icon */}
                        <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center text-slate-900 h-60 -mt-8 border border-slate-100">
                            <i className="fa-solid fa-shield-check text-5xl mb-4 text-blue-600"></i>
                            <span className="font-black text-xs uppercase tracking-widest">Trusted Legal</span>
                        </div>

                        {/* Box 4: Tax/Finance Icon */}
                        <div className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center justify-center text-blue-600 h-60">
                            <i className="fa-solid fa-coins text-5xl mb-4"></i>
                            <span className="font-black text-xs uppercase tracking-widest">Tax Expertise</span>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">
                                Our Vision & Mission
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Build My Business</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                At Build My Business, we aim to lead the future of business consulting by offering innovative, data-driven solutions and unmatched client service.
                            </p>

                            <p className="text-slate-500 leading-relaxed">
                                Committed to absolute excellence, we empower our clients to succeed in an ever-evolving market. By merging deep industry expertise with creative strategy, we drive meaningful innovation and set new standards of quality.
                            </p>

                            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <i className="fa-solid fa-check-circle text-blue-600"></i> Expert Partners
                                    </h4>
                                    <p className="text-sm text-slate-500">Built on trust and mutual long-term success.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <i className="fa-solid fa-lightbulb text-blue-600"></i> Creative Strategy
                                    </h4>
                                    <p className="text-sm text-slate-500">Driving innovation through modern techniques.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-6"
                        >
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200">
                                LEARN MORE ABOUT US
                            </button>
                        </motion.div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;