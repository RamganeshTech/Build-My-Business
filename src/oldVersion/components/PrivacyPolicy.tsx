// src/pages/PrivacyPolicy.tsx
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const sections = [
    {
      title: "1. No Cookie Policy",
      content: "At Build My Business, we believe in your right to privacy. Our website does not use cookies, tracking pixels, or any other invisible tracking technologies to monitor your browsing behavior or collect personal data automatically."
    },
    {
      title: "2. Data Collection (Career Page Only)",
      content: "The only personal information we collect is what you voluntarily submit through our Career Page. This includes your name, contact information, and resume. This data is used solely for recruitment purposes and is never collected without your direct action."
    },
    {
      title: "3. No Third-Party Sharing",
      content: "We do not sell, trade, or share your personal information with any third-party marketing firms or external organizations. Your data stays strictly within Build My Business for the intended professional purpose only."
    },
    {
      title: "4. Information Security",
      content: "We implement rigorous security protocols to ensure that any resumes or contact details submitted through our career portal are protected against unauthorized access, alteration, or disclosure."
    },
    {
      title: "5. Your Consent",
      content: "By using our site, you consent to our 'no-tracking' environment. If you choose to apply for a position via our Career Page, you are providing specific consent for us to process that information for hiring purposes."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            Privacy First Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Decorative side line */}
          <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 rounded-full hidden md:block"></div>

          <div className="space-y-12 md:pl-12">
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Your privacy is our priority. Build My Business operates a transparent, non-intrusive digital environment. We do not track you, and we do not store your browsing history.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  {section.title}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Career specific note */}
            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2 uppercase text-sm">Career Page Security</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Applications submitted through our career portal are encrypted. We retain this data only as long as necessary for the recruitment process or as required by Indian labor regulations.
              </p>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-sm font-black text-slate-900 mb-1 uppercase">Contact Our Office</h2>
                <p className="text-xs text-slate-400">For privacy concerns or data removal requests:</p>
              </div>
              <div className="flex gap-4">
                <a href="mailto:ramstechcircle@gmail.com" className="bg-slate-900 text-white px-6 py-3 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors">
                  EMAIL US
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;