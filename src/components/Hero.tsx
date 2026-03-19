// src/components/Hero.tsx
import { motion } from 'framer-motion';
import consultation from "../assets/consultation.jpg"
const Hero = () => {

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contactus');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight mb-2 uppercase">
                Solution For
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tighter">
                Business & <br />
                <span className="text-blue-600">Individuals Tax</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Expert consulting services to boost growth and profitability.
              We simplify complex tax structures so you can focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >

              <button
                onClick={scrollToServices}
                className="border-2 cursor-pointer border-slate-200 text-slate-700 px-10 py-5 rounded-md font-bold text-sm tracking-widest hover:bg-slate-50 transition-all uppercase"
              >
                View Services
              </button>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 cursor-pointer text-white px-10 py-5 rounded-md font-bold text-sm tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 uppercase"
              >
                Contact Us
              </button>

            </motion.div>
          </div>

          {/* Right Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                src={consultation}
                alt="Professional Business Consultant"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Info Box */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:left-0 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Get Free Consultation</p>
                  <p className="text-lg font-bold text-slate-900 tracking-tight">+91 93639 64498</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;