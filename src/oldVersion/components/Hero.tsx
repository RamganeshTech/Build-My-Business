// // src/components/Hero.tsx
// import { motion } from 'framer-motion';
// import consultation from "../assets/consultation.jpg"
// import { useNavigate } from 'react-router-dom';
// import CRMImage from  "../assets/crmimg.png"
// import lmsImage from "../assets/lmsimg.png"
// const Hero = () => {


//   const navigate = useNavigate()
//   const scrollToServices = () => {
//     const element = document.getElementById('services');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToContact = () => {
//     const element = document.getElementById('contactus');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const floatingIcons = [
//     { icon: "fa-chart-line", color: "text-orange-500", pos: "top-[-5%] left-[-80px] rotate-12" },
//     { icon: "fa-microchip", color: "text-indigo-500", pos: "bottom-[10%] left-[-100px] -rotate-12" },
//     { icon: "fa-shield-halved", color: "text-emerald-500", pos: "top-[10%] right-[-100px] -rotate-12" },
//     { icon: "fa-coins", color: "text-blue-500", pos: "bottom-[-5%] right-[-80px] rotate-12" },
//   ];
//   return (
//     <section className="relative min-h-screen pt-20 flex items-center bg-white overflow-hidden font-poppins">

//       {/* 1. LARGE WATERMARK ICONS (Half-Hidden) */}
//       {floatingIcons.map((item, idx) => (
//         <div
//           key={idx}
//           className={`absolute ${item.pos} text-[15rem] md:text-[22rem] opacity-[0.05] pointer-events-none z-0`}
//         >
//           <i className={`fa-solid ${item.icon} ${item.color}`}></i>
//         </div>
//       ))}


//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//         <div className="flex flex-col lg:flex-row items-center gap-12">

//           {/* Left Content Side */}
//           <div className="w-full lg:w-1/2 space-y-8 z-10 text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight mb-2 uppercase">
//                 Solution For
//               </h2>
//               <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tighter">
//                 Business & <br />
//                 <span className="text-blue-600">Individuals Tax</span>
//               </h1>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
//             >
//               Expert consulting services to boost growth and profitability.
//               We simplify complex tax structures so you can focus on what matters.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
//             >

//               <button
//                 onClick={scrollToServices}
//                 className="border-2 cursor-pointer border-slate-200 text-slate-700 px-10 py-5 rounded-md font-bold text-sm tracking-widest hover:bg-slate-50 transition-all uppercase"
//               >
//                 View Services
//               </button>
//               <button
//                 onClick={scrollToContact}
//                 className="bg-blue-600 cursor-pointer text-white px-10 py-5 rounded-md font-bold text-sm tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 uppercase"
//               >
//                 Contact Us
//               </button>

//               <button
//                 onClick={() => navigate("/products")}
//                 className="px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#ffc000] hover:text-black transition-all"
//               >
//                 Explore Our Products
//               </button>

//             </motion.div>
//           </div>

//           {/* Right Image Side */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 relative"
//           >
//             {/* Added h-[350px] or h-[400px] to control the height specifically */}
//             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white h-[350px] md:h-[650px]">
//               <img
//                 src={consultation}
//                 alt="Professional Business Consultant"
//                 /* - h-full makes it fill the parent height 
//                    - object-top or object-center ensures the faces are visible 
//                 */
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>

//             {/* Background Decoration to fill the empty space below the shorter image */}
//             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Using your imported assets
import CRMImage from "../assets/crmimg.png"; // Vertical Living Image
import lmsImage from "../assets/lmsimg.png"; // LMS Mobile Image

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { icon: "fa-rocket", color: "text-blue-500", pos: "top-[10%] left-[5%] rotate-12" },
    { icon: "fa-graduation-cap", color: "text-indigo-500", pos: "bottom-[15%] left-[2%] -rotate-12" },
    { icon: "fa-laptop-code", color: "text-slate-400", pos: "top-[5%] right-[5%] -rotate-12" },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center bg-white overflow-hidden font-poppins">

      {/* Background Subtle Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50/50 -z-10 skew-x-[-10deg] origin-top"></div>

      {/* 1. Watermark Icons */}
      {floatingIcons.map((item, idx) => (
        <div key={idx} className={`absolute ${item.pos} text-9xl opacity-[0.03] pointer-events-none z-0`}>
          <i className={`fa-solid ${item.icon} ${item.color}`}></i>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 space-y-10 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-700 text-[10px] font-bold uppercase tracking-widest">Next-Gen Solutions</span>
              </div> */}

              <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] text-slate-900 tracking-tight">
                Solution For <br />
                <span className="text-blue-600 font-normal">Your Business.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              From structured academic workflows to high-performance interior design management.
              We build the tools that scale your vision.
            </motion.p>

            {/* Redesigned Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={() => navigate("/products")}
                className="px-10 py-5 cursor-pointer bg-blue-600 text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group"
              >
                Explore Products <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
              </button>

              <button
                onClick={scrollToServices}
                className="px-10 py-5 cursor-pointer border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-sm tracking-wide hover:bg-slate-50 transition-all"
              >
                Our Services
              </button>
            </motion.div>
          </div>

          {/* Right Content: Layered Product Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end mt-20 lg:mt-0"
          >
            {/* Main CRM Tablet/Web Mockup - Moved to the right to be fully visible */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative z-10 w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white lg:rotate-[-4deg] transition-all duration-500 ease-in-out"
            >
              <img
                src={CRMImage}
                alt="Vertical Living CRM"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Secondary LMS Mobile Mockup - Positioned to the side so it doesn't hide the CRM */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="absolute -bottom-6 left-0 lg:-left-12 z-20 w-[160px] md:w-[210px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-slate-800 overflow-hidden transform lg:rotate-[6deg]"
            >
              <img
                src={lmsImage}
                alt="LMS Mobile App"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </motion.div>

            {/* Refined Decor - Using a softer glow that sits behind both */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;