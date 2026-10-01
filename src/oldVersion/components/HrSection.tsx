import { motion } from 'framer-motion';

const HRSection = () => {
    // Build My Business primary blue
    const brandBlue = "#2563eb"; 

    const policies = [
        {
            title: "Hiring Policy Summary",
            desc: "Our selection is based on a blend of professional expertise and entrepreneurial mindset. We maintain a transparent process where every applicant receives constructive feedback.",
            icon: "fa-briefcase"
        },
        {
            title: "Selection Process",
            desc: "We conduct role-specific technical assessments followed by interactive strategy sessions to evaluate problem-solving capabilities and consulting potential.",
            icon: "fa-magnifying-glass-chart"
        },
        {
            title: "Workplace Standards",
            desc: "We value autonomy, collaboration, and client-first thinking. Our environment is designed to empower consultants to take full ownership of their projects.",
            icon: "fa-lightbulb"
        },
        {
            title: "Code of Conduct",
            desc: "Professional integrity and ethical consulting are our foundations. We foster a supportive culture where continuous learning and mutual respect are expected.",
            icon: "fa-handshake"
        }
    ];

    return (
        // Changed to pure white background to match your 'About' page screenshot
        <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20 font-poppins">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section - Matches 'About Build My Business' styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-left"
                >
                    {/* <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">Official HR Guidelines</h2> */}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 uppercase leading-tight">
                        HR <span style={{ color: brandBlue }}>Section.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-md md:text-lg leading-relaxed">
                        Official guidelines for recruitment, professional standards, and organizational integrity for Build My Business.
                    </p>
                </motion.div>

                {/* Policy Grid - Pure White Cards with subtle shadows like your screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {policies.map((item, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-200/40 hover:shadow-blue-100/50 transition-all duration-500 group">
                            <div style={{ backgroundColor: `${brandBlue}10`, color: brandBlue }} className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-slate-800">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Advisory Cards - Standardized on White */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Security Advisory */}
                    <div className="p-8 bg-white border border-slate-50 rounded-[2rem] shadow-xl shadow-slate-200/30">
                        <div className="flex items-center gap-3 mb-6 text-blue-600">
                            <i className="fa-solid fa-shield-check"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Security Advisory</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                            "Build My Business never requests processing fees for job offers. Official 
                            recruitment emails only originate from our verified @buildmybusiness.com domain."
                        </p>
                    </div>

                    {/* Verification Notice */}
                    <div className="p-8 bg-white border border-slate-50 rounded-[2rem] shadow-xl shadow-slate-200/30">
                        <div className="flex items-center gap-3 mb-6 text-slate-400">
                            <i className="fa-solid fa-file-signature"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Credential Check</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Authorized background screening partners may request employment verification through 
                            our official HR compliance portal.
                        </p>
                    </div>

                    {/* Culture Note */}
                    <div className="p-8 bg-white border border-slate-50 rounded-[2rem] shadow-xl shadow-slate-200/30">
                        <div className="flex items-center gap-3 mb-6 text-slate-400">
                            <i className="fa-solid fa-seedling"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Culture of Growth</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            We foster an environment of continuous learning. We value results, 
                            clear communication, and a passion for helping businesses succeed.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HRSection;