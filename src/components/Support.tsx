// src/pages/Support.tsx
import { Link } from 'react-router-dom';
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

export default function Support() {
  const brandBlue = "#2563eb"; // Professional Blue
  const sectionPadding = "w-full px-6 md:px-12";

  const supportCategories = [
    { title: "Tax Consulting", icon: "fa-calculator" },
    { title: "Firm Registration", icon: "fa-building-columns" },
    { title: "IT & Digital Help", icon: "fa-laptop-code" },
    { title: "Billing & Audit", icon: "fa-file-invoice-dollar" }
  ];

  return (
    <div className="w-full bg-white pt-20 font-sans text-[#444]">

      {/* --- HEADER --- */}
      <section className={`${sectionPadding} py-20 border-b border-gray-50`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandBlue }} className="w-8 h-[2px]"></div>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight mb-6">
            Customer <span style={{ color: brandBlue }}>Support.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed font-medium">
            Need assistance with your business firm or our consulting platforms?
            The <span className="text-black font-bold">Build My Business</span> team is here to provide high-performance solutions.
          </p>
        </motion.div>
      </section>

      {/* --- SUPPORT CHANNELS --- */}
      <section className={`${sectionPadding} py-24`}>
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Email Support */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-envelope text-3xl mb-8" style={{ color: brandBlue }}></i>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Official Support</h3>
            <a href="mailto:ramstechcircle@gmail.com" className="text-lg font-bold hover:text-blue-600 break-all transition-colors">
              ramstechcircle@gmail.com
            </a>
            <p className="text-xs text-gray-400 mt-4 font-bold tracking-widest uppercase italic">Response: 24-48 Hours</p>
          </motion.div>

          {/* Phone / WhatsApp */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-phone-volume text-3xl mb-8" style={{ color: brandBlue }}></i>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Call / WhatsApp</h3>
            <a href="tel:+919363964498" className="text-lg font-bold hover:text-blue-600 block mb-2 transition-colors">
              +91 93639 64498
            </a>
            <p className="text-xs text-gray-400 mt-4 font-bold tracking-widest uppercase">Available during work hours.</p>
          </motion.div>

          {/* Timing & SLA */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-clock text-3xl mb-8" style={{ color: brandBlue }}></i>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Support Hours</h3>
            <p className="text-lg font-bold text-gray-800 uppercase tracking-tight leading-snug">
              Mon — Fri <br />
              09:00 AM — 06:00 PM
            </p>
            <p className="text-[10px] text-gray-400 mt-4 font-black tracking-widest uppercase">Timezone: IST (UTC +5:30)</p>
          </motion.div>
        </div>
      </section>

      {/* --- ISSUE CATEGORIES --- */}
      <section className={`${sectionPadding} py-24 bg-[#0f172a] text-white`}>
        <motion.div {...motionProps} className="max-w-4xl mb-16">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Issue Categories</h2>
          <p className="text-gray-400 font-medium">Please mention your category in the subject line for faster processing.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {supportCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-white/10 group-hover:border-blue-600 transition-all rounded-sm">
                <i className={`fa-solid ${cat.icon} text-xl opacity-40 group-hover:opacity-100 group-hover:text-blue-600`}></i>
              </div>
              <p className="font-bold text-[10px] uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">{cat.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER REDIRECT --- */}
      <section className={`${sectionPadding} py-32 text-center`}>
        <motion.div {...motionProps}>
          <p className="text-gray-300 text-[10px] font-bold tracking-[0.6em] uppercase mb-8 leading-relaxed">
            Build My Business Digital Ecosystem
          </p>
          <div className="h-[1px] w-20 bg-gray-100 mx-auto mb-8"></div>
          <Link to="/contact" className="text-xs font-black text-gray-400 hover:text-blue-600 tracking-widest uppercase transition-colors">
            <i className="fa-solid fa-arrow-left mr-2"></i> Back to Contact
          </Link>
        </motion.div>
      </section>
    </div>
  );
}