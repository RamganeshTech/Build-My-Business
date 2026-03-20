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

 const floatingIcons = [
    { icon: "fa-chart-line", color: "text-orange-500", pos: "top-[-5%] left-[-80px] rotate-12" },
    { icon: "fa-microchip", color: "text-indigo-500", pos: "bottom-[10%] left-[-100px] -rotate-12" },
    { icon: "fa-shield-halved", color: "text-emerald-500", pos: "top-[10%] right-[-100px] -rotate-12" },
    { icon: "fa-coins", color: "text-blue-500", pos: "bottom-[-5%] right-[-80px] rotate-12" },
  ];
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-white overflow-hidden font-poppins">

     {/* 1. LARGE WATERMARK ICONS (Half-Hidden) */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.pos} text-[15rem] md:text-[22rem] opacity-[0.05] pointer-events-none z-0`}
        >
          <i className={`fa-solid ${item.icon} ${item.color}`}></i>
        </div>
      ))}


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
            {/* Added h-[350px] or h-[400px] to control the height specifically */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white h-[350px] md:h-[650px]">
              <img
                src={consultation}
                alt="Professional Business Consultant"
                /* - h-full makes it fill the parent height 
                   - object-top or object-center ensures the faces are visible 
                */
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Background Decoration to fill the empty space below the shorter image */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;