// // src/pages/ContactUs.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const ContactUs: React.FC = () => {
//   const contactInfo = [
//     {
//       label: "Our Headquarters",
//       iconLabel: "Address",
//       value: "13th, Main Road, Anna Nagar West, Chennai, Tamil Nadu 600040",
//       subText: "Visit our main office for in-person consultations.",
//       icon: "fa-location-dot"
//     },
//     {
//       label: "Digital Correspondence",
//       iconLabel: "Email",

//       value: "ramstechcircle@gmail.com",
//       subText: "For general inquiries and partnership requests.",
//       icon: "fa-envelope",
//       isLink: true,
//       href: "mailto:ramstechcircle@gmail.com"
//     },
//     {
//       label: "Direct Communication",
//       iconLabel: "Phone",

//       value: "+91 93639 64498",
//       subText: "Available Monday to Friday, 9:00 AM — 6:00 PM.",
//       icon: "fa-phone-volume",
//       isLink: true,
//       href: "tel:+919363964498"
//     }
//   ];

//   return (
//     <div id='contactus' className="min-h-screen bg-white pt-20 pb-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Top Branding Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-300 pb-12 mb-10 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="max-w-2xl"
//           >
//             <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
//               Contact Infrastructure
//             </span>
//             <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[0.1]  uppercase">
//               Contact {" "}
//               <span className="text-blue-600">Us</span>
//             </h1>
//           </motion.div>
//         </div>

//         {/* Info Grid - Professional & Structured */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
//           {contactInfo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className={`lg:px-12 ${index !== 0 ? 'lg:border-l border-slate-100' : 'lg:pl-0'}`}
//             >
//               <div className="mb-10 flex items-center gap-4">
//                 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
//                   <i className={`fa-solid ${item.icon} text-base`}></i>
//                 </div>
//                 <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">
//                   {item.iconLabel}
//                 </span>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
//                     {item.label}
//                   </h3>

//                   {item.isLink ? (
//                     <a
//                       href={item.href}
//                       className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors block leading-tight tracking-tight"
//                     >
//                       {item.value}
//                     </a>
//                   ) : (
//                     <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight tracking-tight">
//                       {item.value}
//                     </p>
//                   )}
//                 </div>

//                 <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-[280px]">
//                   {item.subText}
//                 </p>

//                 <div className="pt-4">
//                   <div className="h-0.5 w-8 bg-slate-100 group-hover:w-12 transition-all duration-500"></div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>



//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      label: "Our Headquarters",
      iconLabel: "Address",
      value: "13th, Main Road, Anna Nagar West, Chennai, Tamil Nadu 600040",
      subText: "Visit our main office for in-person consultations.",
      icon: "fa-location-dot"
    },
    {
      label: "Digital Correspondence",
      iconLabel: "Email",
      value: "ramstechcircle@gmail.com",
      subText: "For general inquiries and partnership requests.",
      icon: "fa-envelope",
      isLink: true,
      href: "mailto:ramstechcircle@gmail.com"
    },
    {
      label: "Direct Communication",
      iconLabel: "Phone",
      value: "+91 93639 64498",
      subText: "Available Monday to Friday, 9:00 AM — 6:00 PM.",
      icon: "fa-phone-volume",
      isLink: true,
      href: "tel:+919363964498"
    }
  ];

  return (
    <div id="contactus" className="min-h-[60vh] px-5 bg-white py-12 md:py-0">
      <div className="max-w-6xl mx-auto ">

        {/* Header */}
        <div className="mb-8 md:mb-10 border-b border-slate-200 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
              Contact Infrastructure
            </span> */}

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase leading-tight">
              Contact <span className="text-blue-600">Us</span>
            </h1>
          </motion.div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 md:p-5 border border-slate-100 rounded-xl hover:shadow-md transition-all"
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <i className={`fa-solid ${item.icon} text-sm`}></i>
                </div>
                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em]">
                  {item.iconLabel}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                  {item.label}
                </h3>

                {item.isLink ? (
                  <a
                    href={item.href}
                    className="text-base md:text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors leading-snug"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
                    {item.value}
                  </p>
                )}

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {item.subText}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ContactUs;