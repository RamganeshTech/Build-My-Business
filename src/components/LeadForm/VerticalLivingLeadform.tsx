
// const VerticalLivingLeadform = ({  onClose, isPage = false }: any) => {
//   const roles = [
//     { id: 'designer', label: 'Designer', icon: 'fa-pencil-ruler' },
//     { id: 'developer', label: 'Developer', icon: 'fa-city' },
//     { id: 'business', label: 'Business Owner', icon: 'fa-briefcase' },
//     { id: 'construction', label: 'Construction Firm', icon: 'fa-hard-hat' },
//   ];

//   // String-based Tailwind class as requested
//   const modernInput = "bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800";

//   const formContent = (
//     <div className={`bg-white border border-gray-100 shadow-2xl p-10 ${isPage ? 'w-full max-w-2xl rounded-3xl' : 'w-full max-w-xl rounded-3xl relative'}`}>
//       {!isPage && (
//         <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-red-500 transition-colors">
//           <i className="fas fa-times fa-lg"></i>
//         </button>
//       )}

//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
//           Vertical Living <span className="text-blue-600">Pro</span>
//         </h2>
//         <p className="text-slate-500 mt-3 text-lg">Transform your firm with our next-gen CRM.</p>
//       </div>

//       <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="relative">
//             <i className="fas fa-user absolute left-4 top-4 text-slate-400"></i>
//             <input type="text" placeholder="Full Name" className={`${modernInput} pl-12 w-full`} required />
//           </div>
//           <div className="relative">
//             <i className="fas fa-envelope absolute left-4 top-4 text-slate-400"></i>
//             <input type="email" placeholder="Email Address" className={`${modernInput} pl-12 w-full`} required />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="relative">
//             <i className="fas fa-phone absolute left-4 top-4 text-slate-400"></i>
//             <input type="tel" placeholder="Phone Number" className={`${modernInput} pl-12 w-full`} required />
//           </div>
//           <div className="relative">
//             <i className="fas fa-map-marker-alt absolute left-4 top-4 text-slate-400"></i>
//             <input type="text" placeholder="Location" className={`${modernInput} pl-12 w-full`} required />
//           </div>
//         </div>

//         <div>
//           <label className="text-sm font-bold text-slate-700 mb-3 block uppercase tracking-wider">I am a...</label>
//           <div className="grid grid-cols-2 gap-3">
//             {roles.map((role) => (
//               <label key={role.id} className="relative flex items-center justify-center p-4 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
//                 <input type="radio" name="role" className="hidden peer" />
//                 <div className="flex flex-col items-center gap-2">
//                    <i className={`fas ${role.icon} text-slate-400 group-hover:text-blue-600`}></i>
//                    <span className="text-xs font-bold text-slate-600 uppercase">{role.label}</span>
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="relative">
//           <i className="fas fa-star absolute left-4 top-4 text-slate-400"></i>
//           <select className={`${modernInput} pl-12 w-full appearance-none`}>
//             <option value="">What is your primary interest?</option>
//             <option value="crm">CRM & Operations</option>
//             <option value="interior">Interior Design Workflow</option>
//             <option value="construction">Construction Tracking</option>
//             <option value="other">General Business Growth</option>
//           </select>
//         </div>

//         <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl">
//           Request Access <i className="fas fa-arrow-right"></i>
//         </button>
//       </form>
//     </div>
//   );

//   // If used as a standalone page (/VL-form)
//   if (isPage) return <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">{formContent}</div>;

//   // If used as a simple component (The Popup logic is now moved to the Parent)
//   return formContent;
// };

// export default VerticalLivingLeadform;


//  SECOND VERSION

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const VerticalLivingLeadform = ({ onClose, isPage = false }: any) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        interest: ''
    });

    const [errors, setErrors] = useState<any>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const roles = [
        { id: 'designer', label: 'Designer', icon: 'fa-pencil-ruler' },
        { id: 'developer', label: 'Developer', icon: 'fa-city' },
        { id: 'business', label: 'Business Owner', icon: 'fa-briefcase' },
        { id: 'construction', label: 'Construction Firm', icon: 'fa-hard-hat' },
    ];

    const interests = [
        "CRM & Operations",
        "Interior Design Workflow",
        "Construction Tracking",
        "General Business Growth"
    ];

    const modernInput = "bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800";
    const errorText = "text-red-500 text-xs font-semibold mt-2 ml-4 flex items-center gap-1";

    const validate = () => {
        let newErrors: any = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits";

        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.role) newErrors.role = "Please select your professional role";
        if (!formData.interest) newErrors.interest = "Please select an interest";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);
            setErrors({}); // Clear previous errors

            try {
                // Replace with your actual Google Apps Script Web App URL
                // const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
                  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAJR4MZQGT3nkq6LaLFEqn7ZhG5Yr41r_6O2VQXbDg2i-7zVMghN4uSPqLKGOVCnTE/exec"
                

                 await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Use 'no-cors' for Google Apps Script to avoid CORS issues
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                // Since 'no-cors' doesn't return a readable body, 
                // we assume success if the fetch doesn't throw an error.
                setIsSubmitted(true);
                console.log("Response saved successfully to Google Sheets");

            } catch (error: any) {
                console.error("Submission Error:", error);
                setErrors({ submit: "Failed to connect to server. Please try again." });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, phone: value });
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white block w-full mx-auto mt-28 my-10 p-12 rounded-[3rem] shadow-2xl text-center max-w-xl border-4 border-blue-50"
            >
                <div className="w-10 h-10 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-green-600 text-lg  md:text-3xl"></i>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4 font-['Poppins']">We got your response!</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-['Poppins']">
                    Thank you for reaching out . Our team is reviewing your details and we will contact you shortly.
                </p>
                {!isPage && <button onClick={onClose} className="mt-8 text-blue-600 font-bold hover:underline">
                    Close Window
                </button>}
            </motion.div>
        );
    }

    const formContent = (
        <div className={`bg-white border border-gray-100 shadow-2xl p-10 font-['Poppins'] ${isPage ? 'w-full max-w-2xl rounded-[3rem]' : 'w-full max-w-xl rounded-[3rem] relative'}`}>
            {!isPage && (
                <button onClick={onClose} className="absolute right-8 top-8 text-gray-400 hover:text-red-500 transition-colors">
                    <i className="fas fa-times fa-lg"></i>
                </button>
            )}

            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                    {/* Tell Us <span className="text-blue-600 font-medium">About You</span> */}
                    Tailor Your <span className="text-blue-600 font-medium">Experience</span>
                </h2>
                <p className="text-slate-400 mt-3 text-base">All fields are mandatory to secure your information.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="relative">
                            <i className="fas fa-user absolute left-5 top-5 text-slate-400 text-sm"></i>
                            <input
                                type="text" placeholder="Full Name"
                                className={`${modernInput} pl-12 w-full ${errors.fullName ? 'border-red-200 bg-red-50/30' : ''}`}
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>
                        {errors.fullName && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.fullName}</p>}
                    </div>
                    <div>
                        <div className="relative">
                            <i className="fas fa-envelope absolute left-5 top-5 text-slate-400 text-sm"></i>
                            <input
                                type="email" placeholder="Email Address"
                                className={`${modernInput} pl-12 w-full ${errors.email ? 'border-red-200 bg-red-50/30' : ''}`}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        {errors.email && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.email}</p>}
                    </div>
                </div>

                {/* Phone & Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="relative">
                            <i className="fas fa-phone absolute left-5 top-5 text-slate-400 text-sm"></i>
                            <input
                                type="tel" placeholder="Phone (10 Digits)"
                                className={`${modernInput} pl-12 w-full ${errors.phone ? 'border-red-200 bg-red-50/30' : ''}`}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                        {errors.phone && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.phone}</p>}
                    </div>
                    <div>
                        <div className="relative">
                            <i className="fas fa-map-marker-alt absolute left-5 top-5 text-slate-400 text-sm"></i>
                            <input
                                type="text" placeholder="Location"
                                className={`${modernInput} pl-12 w-full ${errors.location ? 'border-red-200 bg-red-50/30' : ''}`}
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>
                        {errors.location && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.location}</p>}
                    </div>
                </div>

                {/* Roles Selection */}
                <div>
                    <label className="text-xs font-bold text-slate-400 mb-4 block uppercase tracking-widest ml-2">I am a...</label>
                    <div className="grid grid-cols-2 gap-3">
                        {roles.map((role) => (
                            <label
                                key={role.id}
                                className={`relative flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all group ${formData.role === role.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-50 hover:border-slate-200'}`}
                            >
                                <input
                                    type="radio" name="role" className="hidden"
                                    onChange={() => setFormData({ ...formData, role: role.id })}
                                />
                                <div className="flex flex-col items-center gap-2">
                                    <i className={`fas ${role.icon} ${formData.role === role.id ? 'text-blue-600' : 'text-slate-300'} group-hover:text-blue-400 transition-colors`}></i>
                                    <span className={`text-[10px] font-bold uppercase ${formData.role === role.id ? 'text-blue-700' : 'text-slate-500'}`}>{role.label}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                    {errors.role && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.role}</p>}
                </div>

                {/* Custom Select Dropdown UI */}
                <div className="relative">
                    <label className="text-xs font-bold text-slate-400 mb-4 block uppercase tracking-widest ml-2">Interest</label>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`${modernInput} flex justify-between items-center cursor-pointer ${errors.interest ? 'border-red-200' : ''}`}
                    >
                        <span className={formData.interest ? 'text-slate-800' : 'text-slate-400'}>
                            {formData.interest || "Select Primary Interest"}
                        </span>
                        <i className={`fas fa-chevron-down text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </div>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden"
                            >
                                {interests.map((item) => (
                                    <div
                                        key={item}
                                        onClick={() => {
                                            setFormData({ ...formData, interest: item });
                                            setIsDropdownOpen(false);
                                        }}
                                        className="px-6 py-4 hover:bg-blue-50 text-slate-600 font-medium cursor-pointer transition-colors border-b last:border-none border-slate-50"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {errors.interest && <p className={errorText}><i className="fas fa-exclamation-circle"></i> {errors.interest}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-200/50`}
                >
                    {isSubmitting ? (
                        <>Processing... <i className="fas fa-spinner fa-spin"></i></>
                    ) : (
                        <>Submit Request <i className="fas fa-paper-plane text-xs"></i></>
                    )}
                </button>

                {/* Optional: Show general submission error if catch block triggers */}
                {errors.submit && (
                    <p className="text-red-500 text-center text-xs font-bold mt-4 animate-bounce">
                        <i className="fas fa-exclamation-triangle mr-2"></i> {errors.submit}
                    </p>
                )}
            </form>
        </div>
    );

    if (isPage) return <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">{formContent}</div>;
    return formContent;
};

export default VerticalLivingLeadform;