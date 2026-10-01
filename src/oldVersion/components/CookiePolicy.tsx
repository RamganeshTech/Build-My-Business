// src/pages/CookiePolicy.tsx
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 border border-green-100">
            <i className="fa-solid fa-cookie-bite text-sm"></i>
            100% Cookie-Free Website
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Cookie <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            Build My Business Digital Privacy Standard
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100"
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                1. What are cookies?
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                Cookies are small text files that are placed on your computer by websites that you visit. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                2. Our Zero-Cookie Stand
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                Build My Business does not use any cookies. We do not use "First-party" cookies for session management, nor do we use "Third-party" cookies for advertising, analytics, or tracking. 
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm text-sm text-slate-600 italic">
                "When you browse buildmybusines.com, no data is written to your browser's cookie storage. Your visit is entirely anonymous."
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                3. Browser Local Storage
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                We do not utilize Local Storage or Session Storage to track your personal identity. Our React SPA (Single Page Application) runs purely in the browser's temporary memory for the duration of your visit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                4. Third-Party Links & WhatsApp
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                Our site contains links to external platforms like WhatsApp and Social Media. Once you click these links and leave our domain, the destination site may use its own cookies. We recommend reviewing the cookie policies of those specific platforms.
              </p>
            </div>

            <div className="pt-10 border-t border-slate-200 flex flex-col items-center gap-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Verified Secure Environment</p>
              <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
                <i className="fa-solid fa-user-secret text-2xl" title="Privacy Protected"></i>
                <i className="fa-solid fa-lock text-2xl" title="SSL Encrypted"></i>
                <i className="fa-solid fa-ban text-2xl" title="No Tracking"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;