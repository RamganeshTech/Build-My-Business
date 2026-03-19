// src/pages/AppPrivacy.tsx
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

const AppPrivacy: React.FC = () => {
  const brandBlue = "#2563eb"; // Blue-600
  const sectionPadding = "w-full px-6 md:px-12";

  return (
    <div className="w-full bg-white pt-12 md:pt-24 font-sans text-slate-700">
      
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
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Web Application Safety</span>
          </div> */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 uppercase">
            App Privacy & <br /> <span style={{ color: brandBlue }}>Data Security.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            This page outlines the privacy standards for the **Build My Business** web application. We prioritize a clean, secure experience for all our professional users.
          </p>
        </motion.div>
      </section>

      {/* --- DATA DECLARATION GRID --- */}
      <section className={`${sectionPadding} py-12 md:py-24`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Zero Data Collection Policy */}
         <motion.div {...motionProps} className="space-y-8">
  <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40">
    Data Collection Policy
  </h2>
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
      Selective Data Processing
    </h3>
    <p className="text-slate-500 font-medium leading-relaxed">
      The Build My Business web application is built on a "Privacy-First" architecture. 
      We **do not collect or store** any personal information from users who are simply 
      browsing our consulting services or reading our corporate content.
    </p>
    
    <div className="p-8 bg-slate-50 border-l-4 rounded-r-2xl border-blue-600">
      <p className="text-sm font-bold text-slate-900 leading-relaxed ">
        "The only exception is our Careers portal, where information is strictly collected 
        via voluntary submission for recruitment purposes. Outside of this specific 
        application process, no user data is harvested, tracked, or stored."
      </p>
    </div>
    
    <p className="text-slate-500 font-medium leading-relaxed text-sm">
      We do not use background tracking cookies or automated harvesting tools to monitor 
      your individual identity while you navigate our platform.
    </p>
  </div>
</motion.div>

          {/* Third Party Statement */}
          <motion.div {...motionProps} className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40">Information Integrity</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">No Third-Party Access</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Since we do not collect personal information, there is no data shared with third-party advertisers, trackers, or marketing agencies. Your browsing experience remains completely private and secure.
              </p>
              <div className="flex items-center gap-4 text-blue-600">
                <i className="fa-solid fa-shield-halved text-xl"></i>
                <span className="text-xs font-bold uppercase tracking-widest">SSL Secure Connection Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ENCRYPTION NOTE --- */}
      <section className={`${sectionPadding} py-16 bg-slate-50 text-center`}>
        <motion.div {...motionProps} className="max-w-4xl mx-auto">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">Encryption & Protection</h4>
          <p className="text-sm text-slate-500 font-medium leading-loose">
            Although we do not collect data, our web application is served over a **256-bit SSL encrypted connection** to ensure that your interaction with our consulting content is shielded from unauthorized interception.
          </p>
        </motion.div>
      </section>

      {/* --- CORPORATE FOOTER --- */}
      <section className={`${sectionPadding} py-32 bg-slate-900 text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-blue-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Build My Business</p>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
          <p className="text-sm opacity-60 italic max-w-xl mx-auto leading-loose font-medium">
            For any questions regarding web application security or privacy standards, 
            please reach out to us directly: <br />
            <a href="mailto:ramstechcircle@gmail.com" className="not-italic font-bold text-white hover:text-blue-600 transition-colors">ramstechcircle@gmail.com</a>
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default AppPrivacy;