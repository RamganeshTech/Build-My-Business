// src/components/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Firm Registration",
    icon: "fa-building-circle-check",
    desc: "Register business legally, obtain necessary permits, licenses, tax ID, and adhere to regulations, ensuring compliance and legitimacy.",
    color: "bg-blue-600",
    textColor: "text-white"
  },
  {
    title: "Tax Consulting",
    icon: "fa-file-invoice-dollar",
    desc: "Professional advice on tax matters, including deductions, credits, and compliance, tailored to individual or business needs.",
    color: "bg-slate-50",
    textColor: "text-slate-900"
  },
  {
    title: "Firm Auditing",
    icon: "fa-briefcase",
    desc: "Detailed examination of financial records ensuring accuracy, compliance, integrity, and providing assurance to stakeholders.",
    color: "bg-white border border-slate-100",
    textColor: "text-slate-900"
  },
  {
    title: "IT Services",
    icon: "fa-microchip",
    desc: "Technology solutions including network security, software development, cloud computing, and IT infrastructure management.",
    color: "bg-slate-900",
    textColor: "text-white"
  },
  {
    title: "Digital Marketing",
    icon: "fa-bullhorn",
    desc: "Promotion, advertising, and branding using digital channels like social media, email, and websites to reach target audiences.",
    color: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Legal Services",
    icon: "fa-scale-balanced",
    desc: "Comprehensive legal guidance and representation covering contracts, disputes, compliance, and other legal matters.",
    color: "bg-white border border-slate-100",
    textColor: "text-slate-900"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-4">
              Core <span className="text-blue-600">Services.</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </motion.div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.color} ${service.textColor} p-10 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[320px] shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500`}
            >
              <div>
                <div className="mb-8 opacity-80">
                  <i className={`fa-solid ${service.icon} text-3xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 leading-none">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm font-medium leading-relaxed opacity-80">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Detail */}
        {/* <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            Build My Business © 2026
          </p>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
            <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Always Active</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Services;