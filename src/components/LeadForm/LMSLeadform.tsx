import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LMSLeadForm = ({ onClose, isPage = false }: any) => {
    const [formData, setFormData] = useState({
        schoolName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        studentCount: ''
    });

    const [errors, setErrors] = useState<any>({});
    const [isDone, setIsDone] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const studentRanges = ["Under 200", "200 - 500", "500 - 1000", "1000+ Students"];

    // String-based Tailwind classes for consistency
    const modernInput = "w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium text-slate-800 placeholder:text-slate-400";
    const errorMessage = "text-red-500 text-[11px] font-bold mt-2 ml-4 flex items-center gap-1 animate-pulse";

    const validate = () => {
        let newErrors: any = {};

        if (!formData.schoolName.trim()) newErrors.schoolName = "School Name is required";
        if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact Person name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid school email";

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits";

        if (!formData.address.trim()) newErrors.address = "Full school address is required";
        if (!formData.studentCount) newErrors.studentCount = "Please select an estimated student count";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, phone: val });
    };


    const LMS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDZgWBKHA4re2OBuGqEnawH2eg_KNVMB3_tFEuhgXbadYM0I6-73gfz1zVbTVU-7xT/exec"

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);
            setErrors({}); // Reset any previous submission errors

            try {
                // Use your deployed LMS Script URL here

                await fetch(LMS_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Essential for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                // Show success state
                setIsDone(true);
                console.log("School inquiry saved to Google Sheets");

            } catch (error: any) {
                console.error("LMS Submission Error:", error);
                // Set a general error if the network call fails
                setErrors({ submit: "Connection failed. Please check your internet." });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    if (isDone) return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full mx-auto mt-28 my-10  p-12 rounded-[3rem] shadow-2xl text-center border border-indigo-50 max-w-xl"
        >
            <div className="w-10 h-10 md:w-20 md:h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-paper-plane text-indigo-600 text-lg  md:text-3xl"></i>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4 font-['Poppins']">Request Received!</h2>
            <p className="text-slate-500 text-sm  leading-relaxed font-['Poppins']">
                Thank you for choosing our LMS. We have received your details and we will contact you shortly.
            </p>
            {!isPage && <button onClick={onClose} className="mt-8 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100">
                Got it
            </button>}
        </motion.div>
    );

    const formContent = (
        <div className={`bg-white border border-slate-100 shadow-2xl p-10 font-['Poppins'] ${isPage ? 'w-full max-w-2xl rounded-[3rem]' : 'w-full max-w-xl rounded-[3rem] relative'}`}>
            {!isPage && (
                <button onClick={onClose} className="absolute right-8 top-8 text-slate-300 hover:text-red-500 transition-colors">
                    <i className="fas fa-times fa-lg"></i>
                </button>
            )}

            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                    LMS <span className="text-indigo-600">Inquiry</span>
                </h2>
                <p className="text-slate-400 mt-2 text-sm font-medium">Empower your school with digital excellence.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* School Name */}
                <div>
                    <div className="relative">
                        <i className="fas fa-school absolute left-5 top-5 text-indigo-300"></i>
                        <input
                            type="text" placeholder="Official School Name"
                            className={`${modernInput} pl-14 ${errors.schoolName ? 'border-red-100 bg-red-50/20' : ''}`}
                            value={formData.schoolName} onChange={e => setFormData({ ...formData, schoolName: e.target.value })}
                        />
                    </div>
                    {errors.schoolName && <p className={errorMessage}>{errors.schoolName}</p>}
                </div>

                {/* Contact Person & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text" placeholder="Contact Person"
                            className={modernInput}
                            value={formData.contactPerson} onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        />
                        {errors.contactPerson && <p className={errorMessage}>{errors.contactPerson}</p>}
                    </div>
                    <div>
                        <input
                            type="email" placeholder="Work Email"
                            className={modernInput}
                            value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className={errorMessage}>{errors.email}</p>}
                    </div>
                </div>

                {/* Phone & Student Count (Custom Select) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="tel" placeholder="Phone (10 Digits)"
                            className={modernInput}
                            value={formData.phone} onChange={handlePhoneInput}
                        />
                        {errors.phone && <p className={errorMessage}>{errors.phone}</p>}
                    </div>
                    <div className="relative">
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`${modernInput} flex justify-between items-center cursor-pointer`}
                        >
                            <span className={formData.studentCount ? 'text-slate-800' : 'text-slate-400'}>
                                {formData.studentCount || "Student Count"}
                            </span>
                            <i className={`fas fa-chevron-down text-[10px] text-indigo-300 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                    className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden"
                                >
                                    {studentRanges.map(range => (
                                        <div
                                            key={range} onClick={() => { setFormData({ ...formData, studentCount: range }); setIsDropdownOpen(false); }}
                                            className="px-6 py-3 hover:bg-indigo-50 text-sm text-slate-600 font-medium cursor-pointer border-b last:border-none border-slate-50"
                                        >
                                            {range}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {errors.studentCount && <p className={errorMessage}>{errors.studentCount}</p>}
                    </div>
                </div>

                {/* School Address */}
                <div>
                    <div className="relative">
                        <i className="fas fa-map-marked-alt absolute left-5 top-5 text-indigo-300"></i>
                        <textarea
                            placeholder="Complete School Address" rows={3}
                            className={`${modernInput} pl-14 resize-none`}
                            value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })}
                        ></textarea>
                    </div>
                    {errors.address && <p className={errorMessage}>{errors.address}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-indigo-100/50`}
                >
                    {isSubmitting ? (
                        <>Submitting... <i className="fas fa-circle-notch fa-spin"></i></>
                    ) : (
                        <>Submit Inquiry <i className="fas fa-chevron-right text-xs"></i></>
                    )}
                </button>

                {/* General Error Message */}
                {errors.submit && (
                    <p className="text-red-500 text-center text-xs font-bold mt-4">
                        <i className="fas fa-exclamation-triangle mr-1"></i> {errors.submit}
                    </p>
                )}
            </form>
        </div>
    );

    if (isPage) return <div className="min-h-screen bg-indigo-50/30 flex items-center justify-center p-6">{formContent}</div>;
    return formContent;
};

export default LMSLeadForm;