// // src/components/About.tsx
// import { motion } from 'framer-motion';

//     // 1. Define the Mosaic Data
//     const mosaicItems = [
//         {
//             title: "Business Growth",
//             icon: "fa-chart-line",
//             colorClass: "orange", // used for tailwind dynamic classes
//             accentBg: "bg-orange-50",
//             iconColor: "text-orange-500",
//             textColor: "text-orange-600",
//             offset: "" // No offset for the first card
//         },
//         {
//             title: "IT Solutions",
//             icon: "fa-microchip",
//             colorClass: "indigo",
//             accentBg: "bg-indigo-50",
//             iconColor: "text-indigo-600",
//             textColor: "text-indigo-600",
//             offset: "mt-12" // Stagger down
//         },
//         {
//             title: "Trusted Legal",
//             icon: "fa-shield-halved",
//             colorClass: "emerald",
//             accentBg: "bg-emerald-50",
//             iconColor: "text-emerald-600",
//             textColor: "text-emerald-600",
//             offset: "-mt-12" // Stagger up
//         },
//         {
//             title: "Tax Expertise",
//             icon: "fa-coins",
//             colorClass: "blue",
//             accentBg: "bg-blue-50",
//             iconColor: "text-blue-600",
//             textColor: "text-blue-600",
//             offset: "" // No offset
//         }
//     ];


// const About = () => {
//     return (
//         <section id="about" className="py-12 md:py-24 bg-white overflow-hidden font-poppins">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row items-center gap-16 pt-12">

//                    {/* LEFT SIDE: DYNAMIC MAPPED MOSAIC */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                         className="w-full lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8 relative"
//                     >
//                         {mosaicItems.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 whileHover={{ y: -10 }}
//                                 className={`relative overflow-hidden h-42 md:h-64 bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center shadow-2xl shadow-slate-200/60 border border-slate-50  transition-all duration-300 group ${item.offset}`}
//                             >
//                                 {/* Sharp Design Corner */}
//                                 <div 
//                                     className={`absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 ${item.accentBg}`} 
//                                     style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
//                                 ></div>

//                                 {/* Icon Container */}
//                                 <div className={`w-15 h-15 md:w-20 md:h-20 ${item.accentBg} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
//                                     <i className={`fa-solid ${item.icon} text-2xl md:text-4xl ${item.iconColor}`}></i>
//                                 </div>

//                                 {/* Text Label */}
//                                 <span className={`font-bold text-[10px] uppercase tracking-[0.2em] text-center ${item.textColor}`}>
//                                     {item.title}
//                                 </span>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                     {/* Content Side */}
//                     <div className="w-full lg:w-1/2 space-y-8">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <span className="inline-block text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">
//                                 Our Vision & Mission
//                             </span>
//                             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//                                 About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Us</span>
//                             </h2>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             viewport={{ once: true }}
//                             className="space-y-6"
//                         >
//                             <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
//                                 At Build My Business, we aim to lead the future of business consulting by offering innovative, data-driven solutions and unmatched client service.
//                             </p>

//                             <p className="text-md md:text-lg text-slate-500 leading-relaxed">
//                                 Committed to absolute excellence, we empower our clients to succeed in an ever-evolving market. By merging deep industry expertise with creative strategy, we drive meaningful innovation and set new standards of quality.
//                             </p>

//                             <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-8">
//                                 <div>
//                                     <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
//                                         <i className="fa-solid fa-check-circle text-blue-600"></i> Expert Partners
//                                     </h4>
//                                     <p className="text-sm text-slate-500">Built on trust and mutual long-term success.</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
//                                         <i className="fa-solid fa-lightbulb text-blue-600"></i> Creative Strategy
//                                     </h4>
//                                     <p className="text-sm text-slate-500">Driving innovation through modern techniques.</p>
//                                 </div>
//                             </div>
//                         </motion.div>


//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;


//  SECOND VERSION


import { motion } from 'framer-motion';

// Updated Mosaic (aligned with your services)
const mosaicItems = [
  {
    title: "Software Solutions",
    icon: "fa-code",
    accentBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    textColor: "text-indigo-600",
    offset: ""
  },
  {
    title: "Cloud & DevOps",
    icon: "fa-cloud",
    accentBg: "bg-violet-50",
    iconColor: "text-violet-600",
    textColor: "text-violet-600",
    offset: "mt-12"
  },
  {
    title: "AI & Automation",
    icon: "fa-robot",
    accentBg: "bg-purple-50",
    iconColor: "text-purple-600",
    textColor: "text-purple-600",
    offset: "-mt-12"
  },
  {
    title: "Digital Growth",
    icon: "fa-chart-line",
    accentBg: "bg-green-50",
    iconColor: "text-green-600",
    textColor: "text-green-600",
    offset: ""
  }
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 pt-12">

          {/* LEFT SIDE: MOSAIC */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8 relative"
          >
            {mosaicItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden h-42 md:h-64 bg-white rounded-[2rem] p-6 flex flex-col items-center justify-center shadow-lg border border-slate-100 transition-all duration-300 group ${item.offset}`}
              >
                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 ${item.accentBg}`}
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                ></div>

                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 ${item.accentBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${item.icon} text-xl md:text-2xl ${item.iconColor}`}></i>
                </div>

                {/* Title */}
                <span className={`font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-center ${item.textColor}`}>
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">
                Our Vision & Mission
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Us</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                At Build My Business, we empower organizations with cutting-edge technology solutions including software development, cloud infrastructure, and AI-driven automation.
              </p>

              <p className="text-md md:text-lg text-slate-500 leading-relaxed">
                Our mission is to help businesses scale faster, operate smarter, and achieve sustainable growth through innovation, digital transformation, and performance-driven strategies.
              </p>

              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-rocket text-blue-600"></i> Scalable Solutions
                  </h4>
                  <p className="text-sm text-slate-500">Built for growth, performance, and future expansion.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-brain text-blue-600"></i> Smart Innovation
                  </h4>
                  <p className="text-sm text-slate-500">Leveraging AI and automation for efficiency.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;