// src/pages/Careers.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = ["Profile", "Preferences", "Experience", "Academic", "Finalize"];

const Careers = () => {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<any>({});

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        salary: "",
        workType: "",
        workMode: "",
        timings: "",
        location: "",
        roles: "",
        skills: "",
        tasks: "",
        languages: "",
        projects: "",
        academic: "", // 10th, 12th, UG, PG details
        family: "",
        vehicle: "",
        address: ""
    });

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors((prev: any) => ({ ...prev, [key]: "" }));
    };

    const validateStep = () => {
        let e: any = {};
        if (step === 0) {
            if (!form.fullName) e.fullName = "Full name is required";
            if (form.phone.length !== 10) e.phone = "Enter a valid 10-digit number";
            // if (!form.city) e.city = "City is required";
            if (!form.salary) e.salary = "Please enter expected salary";

        }
        if (step === 1) {
            if (!form.workType) e.workType = "Please select work type";
            if (!form.workMode) e.workMode = "Please select work mode";
            if (!form.timings) e.timings = "Enter the Work timings";

            if (!form.location) e.location = "Enter the Prefered locations";
        }
        if (step === 2) {
            if (!form.roles) e.roles = "Please enter roles you have performed";
            if (!form.skills) e.skills = "Please list your skills";
            if (!form.tasks) e.tasks = "Please mention the tasks you can perform";
            if (!form.languages) e.languages = "Languages are required";
        }
        if (step === 3) {
            if (!form.projects) e.projects = "Please mention the projects you have worked on";

            if (!form.academic) e.academic = "Please provide academic details";
            if (!form.family) e.family = "Please tell us about your family";

        }
        if (step === 4) {
            if (!form.vehicle) e.vehicle = "Please select the option";

            if (!form.address) e.address = "Address is required";
        }

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = () => { if (validateStep()) setStep((prev) => prev + 1); };
    const prev = () => setStep((prev) => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsSubmitting(true);
        // const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFvP_1Adsk-LkK0qvNw1PRnbq6gS0qVWIhapnyGyXyIKIXdESbd-bB43WV3rVdWek/exec";
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9dLyvxOaBtehpYhcsO1OJlolf7vPDaIluOhH7RTvKK35DRpZEKICiQo2WxAerCIsC/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setStep(0);
                setForm({
                    fullName: "",
                    phone: "",
                    salary: "",
                    workType: "",
                    workMode: "",
                    timings: "",
                    location: "",
                    roles: "",
                    skills: "",
                    tasks: "",
                    languages: "",
                    projects: "",
                    academic: "", // 10th, 12th, UG, PG details
                    family: "",
                    vehicle: "",
                    address: ""
                });
            }, 5000);
        } catch (err) {
            setErrors({ submit: "Submission failed. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white/10 pt-32 pb-20 px-6">
            <div className="max-w-2xl mx-auto">

                {/* Minimal Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2 uppercase">Careers</h1>
                    <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Join the Build My Business Team</p>
                </div>

                {/* Progress Indicator */}
                <div className="mb-12">
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-xl font-bold text-blue-600 uppercase tracking-tighter">{steps[step]}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {step + 1} of {steps.length}</span>
                    </div>
                    <div className="flex gap-2">
                        {steps.map((_, i) => (
                            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${i <= step ? "bg-blue-600" : "bg-slate-100"}`} />
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                {/* <div className="bg-[#fbfbfb] rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-200/50 p-8 md:p-12"> */}
                <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {step === 0 && (
                                    <>
                                        <Field label="Full Name" error={errors.fullName}>
                                            <input type="text" value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} placeholder="Enter Your Full Name" className={inputClass(errors.fullName)} />
                                        </Field>
                                        <Field label="Phone Number" error={errors.phone}>
                                            <input type="tel" maxLength={10} value={form.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ""))} placeholder="Enter your phone number" className={inputClass(errors.phone)} />
                                        </Field>
                                        {/* <Field label="Current City" error={errors.city}>
                                            <input type="text" value={form.city} onChange={(e) => handleChange("city", e.target.value)} placeholder="Chennai" className={inputClass(errors.city)} />
                                        </Field> */}

                                        <Field label="Expected Monthly Salary (INR)" error={errors.salary}>
                                            <input type="text" value={form.salary} onChange={(e) => handleChange("salary", e.target.value.replace(/\D/g, ""))} placeholder="e.g. 10000" className={inputClass(errors.salary)} />
                                        </Field>
                                    </>
                                )}
                                

                                {step === 1 && (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Selection label="Work Type" options={["Full-Time", "Part-Time"]} active={form.workType} onClick={(v: any) => handleChange("workType", v)} error={errors.workType} />
                                            <Selection label="Work Mode" options={["Onsite", "Remote"]} active={form.workMode} onClick={(v: any) => handleChange("workMode", v)} error={errors.workMode} />
                                        </div>
                                        <Field label="Preferred Work Timings" error={errors.timings}>
                                            <input type="text" value={form.timings} onChange={(e) => handleChange("timings", e.target.value)} placeholder="e.g. 9 AM - 6 PM" className={inputClass(errors.timings)} />
                                        </Field>
                                        <Field label="Preferred Work Locations" error={errors.location}>
                                            <input type="text" value={form.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="e.g. Chennai, Madurai" className={inputClass(errors.location)} />
                                        </Field>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <Field label="Roles Performed (Explain in detail)" error={errors.roles}>
                                            <textarea value={form.roles} onChange={(e) => handleChange("roles", e.target.value)} className={inputClass(errors.roles) + " h-32"} />
                                        </Field>
                                        <Field label="Key Skills & Unique Strengths" error={errors.skills}>
                                            <textarea value={form.skills} onChange={(e) => handleChange("skills", e.target.value)} className={inputClass(errors.skills) + " h-32"} />
                                        </Field>
                                        <Field label="Tasks You Can Perform" error={errors.tasks}>
                                            <textarea value={form.tasks} onChange={(e) => handleChange("tasks", e.target.value)} className={inputClass(errors.tasks) + " h-32"} />
                                        </Field>
                                        <Field label="Languages Known" error={errors.languages}>
                                            <input type="text" value={form.languages} onChange={(e) => handleChange("languages", e.target.value)} placeholder="English, Tamil, etc." className={inputClass(errors.languages)} />
                                        </Field>
                                    </>
                                )}

                                {step === 3 && (
                                    <>
                                        <Field label="Projects Worked On" error={errors.projects}>
                                            <textarea value={form.projects} onChange={(e) => handleChange("projects", e.target.value)} className={inputClass(errors.projects) + " h-32"} />
                                        </Field>
                                        <Field label="About yourselves, your academic performance , marks scored in 10th,12th , UG and PG" error={errors.academic}>
                                            <textarea value={form.academic} onChange={(e) => handleChange("academic", e.target.value)} placeholder="Provide your score/CGPA for all levels..." className={inputClass(errors.academic) + " h-32"} />
                                        </Field>
                                        <Field label="Family Details (Parents, Siblings)" error={errors.family}>
                                            <textarea value={form.family} onChange={(e) => handleChange("family", e.target.value)} className={inputClass(errors.family) + " h-32"} />
                                        </Field>
                                    </>
                                )}

                                {step === 4 && (
                                    <>
                                        <Selection label="Driving License & Vehicle?" options={["Yes, I have both", "No"]} active={form.vehicle} onClick={(v: any) => handleChange("vehicle", v)} error={errors.vehicle} />
                                        <Field label="Residential Address" error={errors.address}>
                                            <textarea value={form.address} onChange={(e) => handleChange("address", e.target.value)} placeholder="Full permanent address" className={inputClass(errors.address) + " h-32"} />
                                        </Field>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                            {step > 0 ? (
                                <button type="button" onClick={prev} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
                                    Go Back
                                </button>
                            ) : <div />}

                            {step < steps.length - 1 ? (
                                <button type="button" onClick={next} className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                                    Next Step
                                </button>
                            ) : (
                                <button type="submit" disabled={isSubmitting || isSuccess} className={`px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${isSuccess ? "bg-green-600 text-white shadow-green-100" : "bg-blue-600 text-white hover:bg-slate-900 shadow-blue-100 disabled:bg-slate-200"}`}>
                                    {isSubmitting ? "Processing..." : isSuccess ? "Success" : "Submit Profile"}
                                </button>
                            )}
                        </div>

                        {isSuccess && <p className="text-center text-[10px] font-bold text-green-600 uppercase tracking-widest mt-6">Application received. We will be in touch.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

const Field = ({ label, error, children }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        {children}
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight ml-1">{error}</p>}
    </div>
);

const Selection = ({ label, options, active, onClick, error }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <div className="flex gap-2">
            {options.map((opt: string) => (
                <button key={opt} type="button" onClick={() => onClick(opt)} className={`flex-1 py-4 text-[10px] font-bold rounded-2xl border transition-all uppercase tracking-tighter ${active === opt ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-50" : "bg-white border-slate-100 text-slate-500 hover:border-blue-200"}`}>{opt}</button>
            ))}
        </div>
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight ml-1">{error}</p>}
    </div>
);

const inputClass = (error: any) => `w-full bg-slate-50 border ${error ? "border-red-200 focus:ring-red-100" : "border-slate-50 focus:border-blue-200 focus:ring-blue-100"} rounded-2xl px-6 py-4 text-sm font-medium transition-all focus:bg-white outline-none focus:ring-4`;

export default Careers;