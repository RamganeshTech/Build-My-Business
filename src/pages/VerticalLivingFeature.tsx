import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import VerticalLivingLeadform from '../components/LeadForm/VerticalLivingLeadform';
import CRMImage from "../assets/crmimg.png"; // Vertical Living Image

const VerticalLivingFeature = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
// const CRMImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
    return (
        <section className="relative w-full py-12 bg-white font-['Poppins'] overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            >
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="relative bg-[#F8FAFC] rounded-[3rem] border border-slate-100 overflow-hidden shadow-sm">

                    <div className="flex flex-col items-center text-center pt-24 px-6 font-['Poppins']">
                        {/* Modern Badge - Using Regular weight with wide tracking */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2 bg-blue-50/50 border border-blue-100/50 rounded-full mb-8 shadow-sm"
                        >
                            <i className="fas fa-shield-alt text-blue-500 text-xs"></i>
                            <span className="text-blue-600 font-medium tracking-[0.25em] uppercase text-[10px] md:text-xs">
                                Advanced Workspace for Interior Professionals
                            </span>
                        </motion.div>

                        {/* Main Heading - Mixed weights for professional hierarchy */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium text-[#1E293B] leading-[1.1] tracking-tight max-w-5xl"
                        >
                            Scale Your Design Firm <br />
                            <span className="text-slate-400 font-normal italic">Without the Chaos.</span>
                        </motion.h1>

                        {/* Subtext - Using Regular weight and increased line height */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-10 text-slate-500 text-lg md:text-xl max-w-3xl font-normal leading-relaxed opacity-90"
                        >
                            The all-in-one operating system to manage floor plans, client approvals, <br className="hidden lg:block" />
                            and project timelines in one high-performance CRM.
                        </motion.p>

                        {/* Button Group - Clean and balanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mt-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-12 cursor-pointer py-5 bg-blue-600 text-white font-medium rounded-full shadow-xl shadow-blue-200/50 transition-all hover:bg-blue-700 flex items-center gap-3"
                            >
                                Request Access <i className="fas fa-arrow-right text-[10px]"></i>
                            </motion.button>

                            {/* <button className="px-8 py-5 text-slate-400 hover:text-slate-600 font-medium transition-colors flex items-center gap-2">
                                <i className="fas fa-play-circle"></i> Watch how it works
                            </button> */}
                        </motion.div>
                    </div>

                    {/* Large, Modern Image Mockup */}
                    {/* <div className="mt-20 px-4 md:px-12 lg:px-20 pb-12">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative w-full rounded-t-[2.5rem] overflow-hidden shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] border-t border-x border-slate-200 bg-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" 
                alt="Vertical Living Workspace" 
                className="w-full h-auto object-cover display-block"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div> */}


                    {/* Large, Modern Image Mockup */}
                    <div className="mt-20 px-4 md:px-12 lg:px-20 pb-12">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="relative w-full rounded-t-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-t border-x border-slate-200 bg-white"
                        >
                            {/* Browser Top Bar Mockup */}
                            <div className="w-full bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="mx-auto bg-white border border-slate-200 rounded-md px-12 py-1 text-[10px] text-slate-300">
                                    verticalliving.app/dashboard/projects
                                </div>
                            </div>

                            {/* The Dashboard Image */}
                            <img
                                src={CRMImage}
                                alt="Vertical Living Workspace"
                                className="w-full h-auto object-cover block"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>


                </div>
            </div>

            {/* POPUP LOGICAL WRAPPER */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100]  bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full max-w-xl"
                        >
                            <VerticalLivingLeadform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VerticalLivingFeature;