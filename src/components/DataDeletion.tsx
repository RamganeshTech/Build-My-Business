// src/pages/DataDeletion.tsx
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

export default function DataDeletion() {
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
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandBlue }} className="w-8 h-[2px]"></div>
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Privacy Control</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
            Data Deletion <span style={{ color: brandBlue }}>Request.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-medium">
            We value your digital security. This page outlines the formal process to request the permanent removal of your account and personal data from the Build My Business platform.
          </p>
        </motion.div>
      </section>

      {/* --- DELETION PROCESS --- */}
      <section className={`${sectionPadding} py-24`}>
        <div className="max-w-5xl mx-auto">
          <motion.div {...motionProps} className="space-y-16">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="text-4xl md:text-6xl font-bold text-slate-100 leading-none">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 uppercase tracking-tight">Initiation</h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                  To request the deletion of your account and associated data from our consulting systems, please send an official request from your registered email address to:
                </p>
                <a href="mailto:ramstechcircle@gmail.com" style={{ color: brandBlue }} className="text-xl md:text-2xl font-bold hover:underline tracking-tight">
                  ramstechcircle@gmail.com
                </a>
                <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                  Subject: Account Deletion — [Your Registered Name]
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-16 border-t border-slate-50">
              <div className="text-4xl md:text-6xl font-bold text-slate-100 leading-none">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 uppercase tracking-tight">Verification</h3>
                <div className="space-y-4 text-slate-600 font-medium">
                  <p>Our security team will perform a manual identity check to protect your account from fraudulent deletion attempts.</p>
                  <div className="p-8 bg-slate-50 border-l-4 rounded-r-2xl text-slate-900" style={{ borderColor: brandBlue }}>
                    <p className="font-bold uppercase text-xs tracking-widest mb-2 text-blue-600">Timeline</p>
                    <p className="font-bold">Once verified, all non-regulatory data will be purged from our servers within 7 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-16 border-t border-slate-50">
              <div className="text-4xl md:text-6xl font-bold text-slate-100 leading-none">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 uppercase tracking-tight">Compliance</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Note that certain financial data (such as tax service invoices, legal audit trails, or company registration records) must be retained as per Indian Corporate Law and IT regulations for statutory periods.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- CORPORATE FOOTNOTE --- */}
      <section className={`${sectionPadding} py-32 bg-slate-900 text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-blue-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Build My Business</p>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
          <p className="text-sm opacity-60 italic max-w-xl mx-auto leading-loose font-medium px-4">
            This policy covers all digital touchpoints managed by Build My Business, ensuring your right to be forgotten is respected within legal frameworks.
          </p>
        </motion.div>
      </section>
    </div>
  );
}