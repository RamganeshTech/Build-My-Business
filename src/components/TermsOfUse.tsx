// src/pages/TermsOfUse.tsx
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  const currentYear = new Date().getFullYear();

  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using buildmybusines.com, you accept and agree to be bound by the terms and provision of this agreement. Our services are intended for professional business use only."
    },
    {
      title: "2. Professional Services Disclaimer",
      content: "The information provided by Build My Business is for general informational purposes. While we strive for accuracy in tax consulting and firm registration, this information does not constitute binding legal or financial advice until a formal engagement is signed."
    },
    {
      title: "3. Intellectual Property",
      content: "All content, logos, graphics, and services listed on this site are the exclusive property of Build My Business. Unauthorized use, reproduction, or distribution of our proprietary materials is strictly prohibited."
    },
    {
      title: "4. User Conduct",
      content: "Users agree not to use the website for any unlawful purpose. You are prohibited from attempting to breach the website's security or using the career portal to submit fraudulent information."
    },
    {
      title: "5. Limitation of Liability",
      content: "Build My Business shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital services or information provided on the site."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase">
            Legal Framework
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-4">
            Terms of <span className="text-blue-600">Use</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="space-y-12">
            <p className="text-slate-500 leading-relaxed text-sm md:text-base border-l-4 border-blue-600 pl-6 py-2">
              Please read these terms carefully before using our services. These terms govern your access to the Build My Business digital platform and its associated consulting information.
            </p>

            {terms.map((term, index) => (
              <div key={index} className="group">
                <h2 className="text-lg font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {term.title}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {term.content}
                </p>
              </div>
            ))}

            <div className="pt-10 border-t border-slate-100 mt-12">
              <div className="bg-blue-50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xs font-bold text-blue-800 uppercase tracking-widest text-center md:text-left">
                  Questions regarding our terms?
                </p>
                <a 
                  href="mailto:ramstechcircle@gmail.com" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl text-xs font-black hover:bg-slate-900 transition-all shadow-lg shadow-blue-200"
                >
                  CONTACT LEGAL TEAM
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-slate-400 text-[10px] font-bold mt-10 uppercase tracking-widest">
          © {currentYear} Build My Business • All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;