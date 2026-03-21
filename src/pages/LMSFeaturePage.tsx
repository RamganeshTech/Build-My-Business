import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LMSLeadForm from '../components/LeadForm/LMSLeadform';
import lmsImage from "../assets/lmsimg.png"; // LMS Mobile Image


const LMSFeaturePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
// const lmsImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  return (
    <section className="relative w-full min-h-screen bg-white font-['Poppins'] overflow-hidden flex items-center">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50/50 -z-10 skew-x-[-12deg] origin-top"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="max-w-[1440px] mx-auto px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Content: Clean & Centered Typography */}
          <div className="flex-1 space-y-12 text-left z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg"
            >
              <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                Built for learning institutions
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight"
            >
              Designed For Clear, <br />
              Academic <span className="text-indigo-600 italic">Workflows</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed max-w-xl"
            >
              A unified LMS that brings courses, progress, and insight into 
              one clear, structured experience for students and faculty.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-5 bg-[#1E293B] text-white font-medium rounded-xl shadow-2xl shadow-slate-200 hover:bg-indigo-600 transition-all duration-300 flex items-center gap-4 text-lg"
              >
                Request Access 
                <i className="fas fa-chevron-right text-[10px]"></i>
              </button>
            </motion.div>
          </div>

          {/* Right Content: Mobile UI Mockup (Dribbble Style) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Mobile Phone Frame */}
              <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative">
                   {/* Example Mobile App UI image */}
                   <img 
                    src={lmsImage} 
                    alt="LMS Mobile App" 
                    className="w-full h-full object-cover"
                   />
                   {/* App UI Overlay (Mockup) */}
                   {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div> */}
                </div>
              </div>

              {/* Floating Role Labels (Dribbble Touch) */}
              {/* <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-12 top-1/3 bg-green-500 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold shadow-lg"
              >
                Admins
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -right-8 bottom-1/4 bg-orange-400 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold shadow-lg"
              >
                Students
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL WRAPPER */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-xl"
            >
              <LMSLeadForm onClose={() => setIsModalOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LMSFeaturePage;