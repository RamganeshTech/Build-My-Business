


// // src/components/Services.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Firm Registration",
//     icon: "fa-building-circle-check",
//     desc: "Register business legally, obtain necessary permits, licenses, and tax ID, ensuring compliance and legitimacy.",
//     // Soft blue to vibrant indigo
//     gradient: "from-blue-500 to-indigo-600",
//     bgLight: "bg-blue-50"
//   },
//   {
//     title: "Tax Consulting",
//     icon: "fa-file-invoice-dollar",
//     desc: "Professional advice on tax matters, including deductions, credits, and compliance, tailored to your business needs.",
//     // Emerald to Teal
//     gradient: "from-emerald-400 to-teal-600",
//     bgLight: "bg-emerald-50"
//   },
//   {
//     title: "Firm Auditing",
//     icon: "fa-briefcase",
//     desc: "Detailed examination of financial records ensuring accuracy, compliance, and providing assurance to stakeholders.",
//     // Amber to Orange
//     gradient: "from-orange-400 to-amber-600",
//     bgLight: "bg-orange-50"
//   },
//   {
//     title: "IT Services",
//     icon: "fa-microchip",
//     desc: "Technology solutions including network security, software development, cloud computing, and infrastructure management.",
//     // Purple to Pink
//     gradient: "from-purple-500 to-pink-600",
//     bgLight: "bg-purple-50"
//   },
//   {
//     title: "Digital Marketing",
//     icon: "fa-bullhorn",
//     desc: "Promotion and branding using digital channels like social media and SEO to reach target audiences effectively.",
//     // Sky blue to Cyan
//     gradient: "from-sky-400 to-cyan-600",
//     bgLight: "bg-sky-50"
//   },
//   {
//     title: "Legal Services",
//     icon: "fa-scale-balanced",
//     desc: "Comprehensive legal guidance covering contracts, disputes, compliance, and other essential legal matters.",
//     // Slate to Dark Navy
//     gradient: "from-slate-500 to-slate-800",
//     bgLight: "bg-slate-100"
//   }
// ];

// const Services: React.FC = () => {
//   const brandBlue = "#2563eb";

//   return (
//     <section id="services" className="py-24 bg-white font-poppins">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Header Section */}
//         <div className="mb-10 md:mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             {/* <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">Our Expertise</h2> */}
//             <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
//               Core <span style={{ color: brandBlue }}>Services.</span>
//             </h3>
//             <div className="h-1 w-32 bg-blue-600 rounded-full"></div>

//           </motion.div>
//         </div>

//         {/* Mosaic Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative overflow-hidden bg-white p-10 rounded-[3rem] border border-slate-50 shadow-2xl shadow-slate-200/50 hover:shadow-blue-200/40 transition-all duration-500 flex flex-col h-full min-h-[380px]"
//             >

//               {/* Top Right Decorative Corner Design */}
//               <div className={`absolute -top-4 -right-4 w-24 h-24 md:w-24 md:h-24 ${service.bgLight} rounded-full transition-transform duration-700 group-hover:scale-150 opacity-50`}></div>
//               <div className="absolute top-6 right-8 text-[10px] font-black tracking-widest text-slate-300 group-hover:text-blue-600 transition-colors">
//                 {/* 0{index + 1} */}
//               </div>

//               {/* Colorful Icon Container */}
//               <div className={`w-20 h-20 ${service.bgLight} rounded-3xl flex items-center justify-center mb-10 relative overflow-hidden transition-transform duration-500 group-hover:scale-110`}>
//                 {/* Background Decorative SVG Circle */}
//                 <div className={`absolute -right-2 -bottom-2 w-12 h-12 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full`}></div>

//                 {/* The Main Icon with Gradient Text Effect */}
//                 <i className={`fa-solid ${service.icon} text-3xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}></i>
//               </div>

//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
//                   {service.desc}
//                 </p>
//               </div>

//               {/* Bottom "Read More" subtle indicator */}
//               {/* <div className="mt-8 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-[10px] font-bold uppercase tracking-widest">Learn More</span>
//                 <i className="fa-solid fa-arrow-right-long text-xs"></i>
//               </div> */}
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;

//  SECOND VERSION

// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Custom Software Engineering",
//     icon: "fa-code",
//     desc: "Tailored software solutions built to match your exact business workflows and scale efficiently.",
//     gradient: "from-indigo-500 to-blue-600",
//     bgLight: "bg-indigo-50"
//   },
//   {
//     title: "Mobile Application Development",
//     icon: "fa-mobile-screen",
//     desc: "High-performance mobile apps for Android and iOS across niche and enterprise use cases.",
//     gradient: "from-pink-500 to-rose-500",
//     bgLight: "bg-pink-50"
//   },
//   {
//     title: "Web Design & Development",
//     icon: "fa-globe",
//     desc: "Modern, fast, and conversion-focused websites with seamless user experience.",
//     gradient: "from-sky-500 to-cyan-500",
//     bgLight: "bg-sky-50"
//   },
//   {
//     title: "CRM, ERP & Business Systems",
//     icon: "fa-diagram-project",
//     desc: "Custom CRM and ERP systems to streamline operations and improve productivity.",
//     gradient: "from-emerald-500 to-teal-500",
//     bgLight: "bg-emerald-50"
//   },
//   {
//     title: "Business Process Automation",
//     icon: "fa-gears",
//     desc: "Automate repetitive workflows and reduce manual effort with smart systems.",
//     gradient: "from-orange-500 to-amber-500",
//     bgLight: "bg-orange-50"
//   },
//   {
//     title: "IT Infrastructure Services",
//     icon: "fa-server",
//     desc: "Setup and manage IT infrastructure for offices, schools, and SMEs.",
//     gradient: "from-slate-500 to-gray-700",
//     bgLight: "bg-slate-100"
//   },
//   {
//     title: "Cloud & DevOps",
//     icon: "fa-cloud",
//     desc: "Cloud deployment, CI/CD pipelines, and scalable DevOps solutions.",
//     gradient: "from-violet-500 to-purple-600",
//     bgLight: "bg-violet-50"
//   },
//   {
//     title: "Digital Marketing & Growth",
//     icon: "fa-chart-line",
//     desc: "Performance marketing, SEO, and lead generation strategies that drive growth.",
//     gradient: "from-lime-500 to-green-600",
//     bgLight: "bg-lime-50"
//   },
//   {
//     title: "Branding & UI/UX Design",
//     icon: "fa-pen-nib",
//     desc: "Creative branding and intuitive UI/UX design for better user engagement.",
//     gradient: "from-fuchsia-500 to-pink-600",
//     bgLight: "bg-fuchsia-50"
//   },
//   {
//     title: "E-commerce Solutions",
//     icon: "fa-cart-shopping",
//     desc: "Complete e-commerce platforms with payment integration and scalability.",
//     gradient: "from-yellow-500 to-orange-500",
//     bgLight: "bg-yellow-50"
//   },
//   {
//     title: "Data Analytics & MIS",
//     icon: "fa-chart-pie",
//     desc: "Analytics dashboards and MIS systems for data-driven decisions.",
//     gradient: "from-cyan-500 to-blue-500",
//     bgLight: "bg-cyan-50"
//   },
//   {
//     title: "AI-Enabled Solutions",
//     icon: "fa-robot",
//     desc: "AI chatbots and workflow automation solutions for smarter operations.",
//     gradient: "from-purple-500 to-indigo-600",
//     bgLight: "bg-purple-50"
//   },
//   {
//     title: "Cybersecurity & Reliability",
//     icon: "fa-shield-halved",
//     desc: "Secure systems and ensure uptime with strong cybersecurity practices.",
//     gradient: "from-red-500 to-rose-600",
//     bgLight: "bg-red-50"
//   },
//   {
//     title: "AMC & Managed Support",
//     icon: "fa-headset",
//     desc: "Annual maintenance contracts and continuous technical support services.",
//     gradient: "from-teal-500 to-green-500",
//     bgLight: "bg-teal-50"
//   },
//   {
//     title: "Industry-Specific Platforms",
//     icon: "fa-layer-group",
//     desc: "Custom-built platforms tailored for specific industries and workflows.",
//     gradient: "from-indigo-400 to-purple-500",
//     bgLight: "bg-indigo-50"
//   }
// ];

// const Services: React.FC = () => {
//   const brandBlue = "#2563eb";

//   return (
//     <section id="services" className="py-16 md:py-24 bg-white font-poppins">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

//         {/* Header */}
//         <div className="mb-12 md:mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase leading-tight">
//               Core <span style={{ color: brandBlue }}>Services</span>
//             </h3>
//             <div className="h-1 w-24 bg-blue-600 rounded-full mt-2"></div>
//           </motion.div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
//             >
//               {/* Icon */}
//               <div className={`w-14 h-14 ${service.bgLight} rounded-xl flex items-center justify-center mb-5`}>
//                 <i className={`fa-solid ${service.icon} text-xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}></i>
//               </div>

//               {/* Content */}
//               <div className="flex-grow">
//                 <h3 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;



//  THIRD VERSION

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Software Engineering",
    icon: "fa-code",
    desc: "Tailored software solutions built to match your exact business workflows and scale efficiently.",
    gradient: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50"
  },
  {
    title: "SaaS Product Development",
    icon: "fa-cubes",
    desc: "Build scalable SaaS platforms with subscription models and multi-tenant architecture.",
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50"
  },
  {
    title: "Mobile Application Development",
    icon: "fa-mobile-screen",
    desc: "High-performance mobile apps for Android and iOS across niche and enterprise use cases.",
    gradient: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50"
  },
  {
    title: "Web Design & Development",
    icon: "fa-globe",
    desc: "Modern, fast, and conversion-focused websites with seamless user experience.",
    gradient: "from-sky-500 to-cyan-500",
    bgLight: "bg-sky-50"
  },
  {
    title: "Website & Lead Funnel Packages",
    icon: "fa-filter",
    desc: "Complete websites with lead generation funnels designed to convert visitors into customers.",
    gradient: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50"
  },
  {
    title: "CRM, ERP & Business Systems",
    icon: "fa-diagram-project",
    desc: "Custom CRM and ERP systems to streamline operations and improve productivity.",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50"
  },
  {
    title: "Business Process Automation",
    icon: "fa-gears",
    desc: "Automate repetitive workflows and reduce manual effort with smart systems.",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50"
  },
  {
    title: "AI Chatbots & Workflow Automation",
    icon: "fa-robot",
    desc: "Intelligent chatbots and AI-driven workflows to automate business interactions.",
    gradient: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50"
  },
  {
    title: "IT Infrastructure Services",
    icon: "fa-server",
    desc: "Setup and manage IT infrastructure for businesses and organizations.",
    gradient: "from-slate-500 to-gray-700",
    bgLight: "bg-slate-100"
  },
  {
    title: "Infrastructure Setup (Schools, Offices, SMEs)",
    icon: "fa-network-wired",
    desc: "Complete IT setup solutions tailored for schools, offices, and small businesses.",
    gradient: "from-gray-500 to-slate-600",
    bgLight: "bg-gray-100"
  },
  {
    title: "Cloud & DevOps",
    icon: "fa-cloud",
    desc: "Cloud deployment, CI/CD pipelines, and scalable DevOps solutions.",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50"
  },
  {
    title: "Cloud Deployment & AMC Services",
    icon: "fa-cloud-arrow-up",
    desc: "Deploy, maintain, and manage cloud infrastructure with ongoing support.",
    gradient: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50"
  },
  {
    title: "Digital Marketing & Growth",
    icon: "fa-chart-line",
    desc: "Performance marketing, SEO, and lead generation strategies that drive growth.",
    gradient: "from-lime-500 to-green-600",
    bgLight: "bg-lime-50"
  },
  {
    title: "Performance Marketing Retainers",
    icon: "fa-bullseye",
    desc: "Ongoing marketing campaigns focused on ROI, conversions, and measurable growth.",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50"
  },
  {
    title: "Branding & UI/UX Design",
    icon: "fa-pen-nib",
    desc: "Creative branding and intuitive UI/UX design for better user engagement.",
    gradient: "from-fuchsia-500 to-pink-600",
    bgLight: "bg-fuchsia-50"
  },
  {
    title: "E-commerce Solutions",
    icon: "fa-cart-shopping",
    desc: "Complete e-commerce platforms with payment integration and scalability.",
    gradient: "from-yellow-500 to-orange-500",
    bgLight: "bg-yellow-50"
  },
  {
    title: "Data Analytics & MIS",
    icon: "fa-chart-pie",
    desc: "Analytics dashboards and MIS systems for data-driven decisions.",
    gradient: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-50"
  },
  {
    title: "Analytics Dashboards & MIS Systems",
    icon: "fa-chart-simple",
    desc: "Interactive dashboards and MIS tools to track and visualize business performance.",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50"
  },
  {
    title: "AI-Enabled Solutions",
    icon: "fa-brain",
    desc: "Advanced AI solutions to enhance automation, intelligence, and decision-making.",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50"
  },
  {
    title: "Cybersecurity & Reliability",
    icon: "fa-shield-halved",
    desc: "Secure systems and ensure uptime with strong cybersecurity practices.",
    gradient: "from-red-500 to-rose-600",
    bgLight: "bg-red-50"
  },
  {
    title: "AMC & Managed Support",
    icon: "fa-headset",
    desc: "Annual maintenance contracts and continuous technical support services.",
    gradient: "from-teal-500 to-green-500",
    bgLight: "bg-teal-50"
  },
  {
    title: "Industry-Specific Platforms",
    icon: "fa-layer-group",
    desc: "Custom-built platforms tailored for specific industries and workflows.",
    gradient: "from-indigo-400 to-purple-500",
    bgLight: "bg-indigo-50"
  }
];

const Services: React.FC = () => {
  const brandBlue = "#2563eb";

  return (
    <section id="services" className="py-16 md:py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase leading-tight">
              Core <span style={{ color: brandBlue }}>Services</span>
            </h3>
            <div className="h-1 w-24 bg-blue-600 rounded-full mt-2"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 ${service.bgLight} rounded-xl flex items-center justify-center mb-5`}>
                <i className={`fa-solid ${service.icon} text-xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}></i>
              </div>

              <div className="flex-grow">
                <h3 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;