// // src/components/Services.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Firm Registration",
//     icon: "fa-building-circle-check",
//     desc: "Register business legally, obtain necessary permits, licenses, tax ID, and adhere to regulations, ensuring compliance and legitimacy.",
//     color: "bg-blue-600",
//     textColor: "text-white"
//   },
//   {
//     title: "Tax Consulting",
//     icon: "fa-file-invoice-dollar",
//     desc: "Professional advice on tax matters, including deductions, credits, and compliance, tailored to individual or business needs.",
//     color: "bg-slate-50",
//     textColor: "text-slate-900"
//   },
//   {
//     title: "Firm Auditing",
//     icon: "fa-briefcase",
//     desc: "Detailed examination of financial records ensuring accuracy, compliance, integrity, and providing assurance to stakeholders.",
//     color: "bg-white border border-slate-100",
//     textColor: "text-slate-900"
//   },
//   {
//     title: "IT Services",
//     icon: "fa-microchip",
//     desc: "Technology solutions including network security, software development, cloud computing, and IT infrastructure management.",
//     color: "bg-slate-900",
//     textColor: "text-white"
//   },
//   {
//     title: "Digital Marketing",
//     icon: "fa-bullhorn",
//     desc: "Promotion, advertising, and branding using digital channels like social media, email, and websites to reach target audiences.",
//     color: "bg-blue-50",
//     textColor: "text-blue-600"
//   },
//   {
//     title: "Legal Services",
//     icon: "fa-scale-balanced",
//     desc: "Comprehensive legal guidance and representation covering contracts, disputes, compliance, and other legal matters.",
//     color: "bg-white border border-slate-100",
//     textColor: "text-slate-900"
//   }
// ];

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Simple Header */}
//         <div className="mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-4">
//               Core <span className="text-blue-600">Services.</span>
//             </h2>
//             <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
//           </motion.div>
//         </div>

//         {/* Mosaic Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`${service.color} ${service.textColor} p-10 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[320px] shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500`}
//             >
//               <div>
//                 <div className="mb-8 opacity-80">
//                   <i className={`fa-solid ${service.icon} text-3xl`}></i>
//                 </div>

//                 <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 leading-none">
//                   {service.title}
//                 </h3>
//               </div>

//               <p className="text-sm font-medium leading-relaxed opacity-80">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;




// src/components/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Firm Registration",
    icon: "fa-building-circle-check",
    desc: "Register business legally, obtain necessary permits, licenses, and tax ID, ensuring compliance and legitimacy.",
    // Soft blue to vibrant indigo
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50"
  },
  {
    title: "Tax Consulting",
    icon: "fa-file-invoice-dollar",
    desc: "Professional advice on tax matters, including deductions, credits, and compliance, tailored to your business needs.",
    // Emerald to Teal
    gradient: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50"
  },
  {
    title: "Firm Auditing",
    icon: "fa-briefcase",
    desc: "Detailed examination of financial records ensuring accuracy, compliance, and providing assurance to stakeholders.",
    // Amber to Orange
    gradient: "from-orange-400 to-amber-600",
    bgLight: "bg-orange-50"
  },
  {
    title: "IT Services",
    icon: "fa-microchip",
    desc: "Technology solutions including network security, software development, cloud computing, and infrastructure management.",
    // Purple to Pink
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50"
  },
  {
    title: "Digital Marketing",
    icon: "fa-bullhorn",
    desc: "Promotion and branding using digital channels like social media and SEO to reach target audiences effectively.",
    // Sky blue to Cyan
    gradient: "from-sky-400 to-cyan-600",
    bgLight: "bg-sky-50"
  },
  {
    title: "Legal Services",
    icon: "fa-scale-balanced",
    desc: "Comprehensive legal guidance covering contracts, disputes, compliance, and other essential legal matters.",
    // Slate to Dark Navy
    gradient: "from-slate-500 to-slate-800",
    bgLight: "bg-slate-100"
  }
];

const Services: React.FC = () => {
  const brandBlue = "#2563eb";

  return (
    <section id="services" className="py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">Our Expertise</h2> */}
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
              Core <span style={{ color: brandBlue }}>Services.</span>
            </h3>
            <div className="h-1 w-32 bg-blue-600 rounded-full"></div>

          </motion.div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white p-10 rounded-[3rem] border border-slate-50 shadow-2xl shadow-slate-200/50 hover:shadow-blue-200/40 transition-all duration-500 flex flex-col h-full min-h-[380px]"
            >

              {/* Top Right Decorative Corner Design */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 md:w-24 md:h-24 ${service.bgLight} rounded-full transition-transform duration-700 group-hover:scale-150 opacity-50`}></div>
              <div className="absolute top-6 right-8 text-[10px] font-black tracking-widest text-slate-300 group-hover:text-blue-600 transition-colors">
                {/* 0{index + 1} */}
              </div>

              {/* Colorful Icon Container */}
              <div className={`w-20 h-20 ${service.bgLight} rounded-3xl flex items-center justify-center mb-10 relative overflow-hidden transition-transform duration-500 group-hover:scale-110`}>
                {/* Background Decorative SVG Circle */}
                <div className={`absolute -right-2 -bottom-2 w-12 h-12 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full`}></div>

                {/* The Main Icon with Gradient Text Effect */}
                <i className={`fa-solid ${service.icon} text-3xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}></i>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </div>

              {/* Bottom "Read More" subtle indicator */}
              {/* <div className="mt-8 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest">Learn More</span>
                <i className="fa-solid fa-arrow-right-long text-xs"></i>
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;