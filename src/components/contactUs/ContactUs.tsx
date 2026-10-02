// import { useState } from 'react';
// import { CONTACT, waLink } from '../../data/contact';

// type ProductOption = {
//     label: string;
//     value: string;
// };

// const PRODUCT_OPTIONS: ProductOption[] = [
//     {
//         label: 'Vertical Living CRM',
//         value: 'Vertical Living CRM',
//     },
//     {
//         label: 'DailyGrades',
//         value: 'DailyGrades',
//     },
//     {
//         label: 'CivilMind Pro',
//         value: 'CivilMind Pro',
//     },
//     {
//         label: 'BMB Kitchen',
//         value: 'BMB Kitchen',
//     },
//     {
//         label: 'Other BMB product',
//         value: 'Other BMB product',
//     },
// ];


// const ArrowIcon = () => (
//     <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         className="h-4 w-4"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//     >
//         <path d="M5 12h14" />
//         <path d="m13 6 6 6-6 6" />
//     </svg>
// );

// const ContactIcon = ({
//     type,
// }: {
//     type: 'location' | 'email' | 'phone';
// }) => {
//     if (type === 'location') {
//         return (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="h-5 w-5"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//             >
//                 <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//                 <circle cx="12" cy="10" r="2.5" />
//             </svg>
//         );
//     }

//     if (type === 'email') {
//         return (
//             <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="h-5 w-5"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//             >
//                 <rect x="3" y="5" width="18" height="14" rx="2" />
//                 <path d="m3 7 9 6 9-6" />
//             </svg>
//         );
//     }

//     return (
//         <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             className="h-5 w-5"
//             stroke="currentColor"
//             strokeWidth="1.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden="true"
//         >
//             <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
//         </svg>
//     );
// };

// const ContactUs = () => {
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         const formData = new FormData(event.currentTarget);

//         const enquiry = {
//             name: String(formData.get('name') ?? ''),
//             phone: String(formData.get('phone') ?? ''),
//             businessName: String(formData.get('businessName') ?? ''),
//             interestedIn: String(formData.get('interestedIn') ?? ''),
//             message: String(formData.get('message') ?? ''),
//         };

//         /*
//          * TODO: Connect this form to Google Sheets.
//          *
//          * Google Sheets URL / endpoint will be added later.
//          *
//          * The data to save:
//          * - name
//          * - phone
//          * - businessName
//          * - interestedIn
//          * - message
//          *
//          * For now, the form only handles the UI state.
//          */

//         console.log('BMB enquiry form:', enquiry);

//         setSubmitted(true);
//         event.currentTarget.reset();
//     };

//     return (
//         <section
//             id="contact"
//             className="bg-white py-16 sm:py-20 lg:py-24"
//         >
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
//                     {/* LEFT — Contact information */}
//                     <div>
//                         <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
//                             <span className="h-0.5 w-5 rounded-full bg-orange-500" />
//                             Contact
//                         </span>

//                         <h2 className="mt-5 max-w-xl text-2xl font-bold leading-[1.08] tracking-tight text-[#0a1433] sm:text-3xl lg:text-5xl">
//                             Talk to the{' '}
//                             {/* <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"> */}
//                             <span className="">
//                                 BMB team.
//                             </span>
//                         </h2>

//                         <p className="mt-6 max-w-lg text-base leading-7 text-[#36425f] sm:text-md">
//                             Tell us what you are trying to solve. We will help
//                             you understand which BMB product or service fits
//                             your business.
//                         </p>

//                         {/* Contact cards */}
//                         <div className="mt-5 space-y-3">
//                             <div className="rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]">
//                                 <div className="flex items-start gap-4">
//                                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
//                                         <ContactIcon type="location" />
//                                     </div>

//                                     <div>
//                                         <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
//                                             Headquarters
//                                         </p>

//                                         <p className="mt-1 text-sm font-bold leading-6 text-[#0a1433]">
//                                             13th Main Road, Anna Nagar West,
//                                             Chennai, Tamil Nadu 600040
//                                         </p>

//                                         <p className="mt-1 text-xs leading-5 text-[#67728f]">
//                                             Visit for in-person consultations
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <a
//                                 href={`mailto:${CONTACT.email}`}
//                                 className="block rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]"
//                             >
//                                 <div className="flex items-start gap-4">
//                                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
//                                         <ContactIcon type="email" />
//                                     </div>

//                                     <div className="min-w-0">
//                                         <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
//                                             Email
//                                         </p>

//                                         <p className="mt-1 break-all text-sm font-bold text-[#0a1433]">
//                                             {CONTACT.email}
//                                         </p>

//                                         <p className="mt-1 text-xs leading-5 text-[#67728f]">
//                                             General enquiries and partnerships
//                                         </p>
//                                     </div>
//                                 </div>
//                             </a>

//                             <a
//                                 href={waLink(
//                                     'Hi BMB team, I would like to know more about your products and services.'
//                                 )}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]"
//                             >
//                                 <div className="flex items-start gap-4">
//                                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                                         <ContactIcon type="phone" />
//                                     </div>

//                                     <div>
//                                         <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
//                                             Phone / WhatsApp
//                                         </p>

//                                         <p className="mt-1 text-sm font-bold text-[#0a1433]">
//                                             {CONTACT.phone}
//                                         </p>

//                                         <p className="mt-1 text-xs leading-5 text-[#67728f]">
//                                             Monday to Friday, 9:00 AM – 5:00 PM
//                                         </p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>

//                     {/* RIGHT — Form */}
//                     <div className="rounded-[24px] border border-[#e4e9f3] bg-white p-5 shadow-[0_20px_55px_-24px_rgba(10,20,51,0.22)] sm:p-7 lg:p-8">
//                         <div>
//                             <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#67728f]">
//                                 Get in touch
//                             </p>

//                             <h3 className="mt-1 text-2xl font-bold text-[#0a1433] sm:text-3xl">
//                                 Request a demo
//                             </h3>

//                             <p className="mt-1 text-sm leading-6 text-[#67728f]">
//                                 Share a few details and our team can understand
//                                 what you are looking for.
//                             </p>
//                         </div>

//                         <form
//                             onSubmit={handleSubmit}
//                             className="mt-5 space-y-5"
//                         >
//                             {/* Name + Phone */}
//                             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                                 <div>
//                                     <label
//                                         htmlFor="name"
//                                         className="mb-2 block text-sm font-semibold text-[#36425f]"
//                                     >
//                                         Your name
//                                     </label>

//                                     <input
//                                         id="name"
//                                         name="name"
//                                         type="text"
//                                         required
//                                         autoComplete="name"
//                                         placeholder="Enter your name"
//                                         className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label
//                                         htmlFor="phone"
//                                         className="mb-2 block text-sm font-semibold text-[#36425f]"
//                                     >
//                                         Phone
//                                     </label>

//                                     <input
//                                         id="phone"
//                                         name="phone"
//                                         type="tel"
//                                         required
//                                         inputMode="tel"
//                                         autoComplete="tel"
//                                         placeholder="Enter phone number"
//                                         className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Business + Product */}
//                             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                                 <div>
//                                     <label
//                                         htmlFor="businessName"
//                                         className="mb-2 block text-sm font-semibold text-[#36425f]"
//                                     >
//                                         Business name
//                                     </label>

//                                     <input
//                                         id="businessName"
//                                         name="businessName"
//                                         type="text"
//                                         autoComplete="organization"
//                                         placeholder="Your business name"
//                                         className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label
//                                         htmlFor="interestedIn"
//                                         className="mb-2 block text-sm font-semibold text-[#36425f]"
//                                     >
//                                         Interested in
//                                     </label>

//                                     <select
//                                         id="interestedIn"
//                                         name="interestedIn"
//                                         defaultValue=""
//                                         className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
//                                     >
//                                         <option value="">
//                                             Not sure yet
//                                         </option>

//                                         {PRODUCT_OPTIONS.map((product) => (
//                                             <option
//                                                 key={product.value}
//                                                 value={product.value}
//                                             >
//                                                 {product.label}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                             </div>

//                             {/* Message */}
//                             <div>
//                                 <label
//                                     htmlFor="message"
//                                     className="mb-2 block text-sm font-semibold text-[#36425f]"
//                                 >
//                                     What would you like to solve?
//                                 </label>

//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     rows={5}
//                                     placeholder="e.g. We run 2 interior studios and currently track leads on Excel."
//                                     className="w-full resize-y rounded-xl border border-[#e4e9f3] bg-white px-4 py-3 text-sm leading-6 text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
//                                 />
//                             </div>

//                             {/* Submit */}
//                             <button
//                                 type="submit"
//                                 className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00] sm:w-auto"
//                             >
//                                 Send enquiry
//                                 <ArrowIcon />
//                             </button>

//                             {submitted && (
//                                 <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium leading-6 text-green-800">
//                                     Thank you. Your enquiry has been captured
//                                     in the current UI flow. Google Sheets
//                                     connection will be added here later.
//                                 </div>
//                                 // <></>
//                             )}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


// src/components/ContactUs.tsx
import {
    useEffect, useId, useRef, useState,
    type ChangeEvent, type FocusEvent, type FormEvent,
} from 'react';
// import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CATALOG } from '../../data/productCatalog';
import { CONTACT, waLink } from '../../data/contact';
import { submitEnquiry } from '../../lib/submitEnquiry';

/* ---------- product options: single source of truth = the catalogue ---------- */


const PRODUCT_OPTIONS = CATALOG.map((p) => ({
  id: p.id,
  name: p.name,
  soon: p.status === 'soon',
}));

// const PRODUCT_GROUPS = (Object.keys(CATEGORIES) as CategoryId[])
//     .map((id) => ({ id, label: CATEGORIES[id].name, items: CATALOG.filter((p) => p.cat === id) }))
//     .filter((g) => g.items.length > 0);

/* ---------- phone validation (India: mobile + landline) ---------- */

// const PHONE_HELP = 'Enter a 10-digit mobile number, or a landline with STD code, e.g. 044 2345 6789.';

const PHONE_REGEX = /^[6-9]\d{9}$/;

/**
 * Accepts:
 *  - mobile:   9363964498, 09363964498, +91 93639 64498, 91-9363964498
 *  - landline: 044 2345 6789, 044-23456789, +91 44 2345 6789 (STD code + number = 10 digits)
 * Returns the normalised number (+91XXXXXXXXXX) or null if invalid.
 */
export function parseIndianPhone(raw: string): string | null {
    let n = raw.trim().replace(/[\s\-().]/g, '');
    if (!/^\+?\d+$/.test(n)) return null;

    if (n.startsWith('+')) {
        if (!n.startsWith('+91')) return null; // only Indian numbers for now
        n = n.slice(3);
    } else if (n.startsWith('0091')) {
        n = n.slice(4);
    } else if (n.startsWith('91') && (n.length === 12 || n.length === 13)) {
        n = n.slice(2);
    }
    if (n.startsWith('0')) n = n.slice(1); // trunk prefix (STD / mobile)

    if (!/^[1-9]\d{9}$/.test(n)) return null; // 10 digits: mobile 6-9xxxxxxxxx, landline STD+number
    if (/^(\d)\1{9}$/.test(n)) return null; // 9999999999 etc.
    return `+91${n}`;
}

/* ---------- form model ---------- */

type FieldName = 'name' | 'phone' | 'businessName' | 'interestedIn' | 'message';
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY: Values = { name: '', phone: '', businessName: '', interestedIn: '', message: '' };
const FIELD_ORDER: FieldName[] = ['name', 'phone', 'businessName', 'interestedIn', 'message'];


function validate(v: Values): Errors {
    const e: Errors = {};
    const name = v.name.trim();
    if (!name) e.name = 'Enter your name.';
    else if (name.length < 2 || !/\p{L}/u.test(name)) e.name = 'Enter your name (at least 2 characters).';

    if (!v.phone) e.phone = 'Enter your phone number.';
    else if (!PHONE_REGEX.test(v.phone)) e.phone = 'Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.';

    if (!v.businessName.trim()) e.businessName = 'Enter your business name.';
    if (!v.interestedIn) e.interestedIn = 'Select what you are interested in.';
    return e;
}

/* ---------- styles ---------- */

// text-base on mobile stops iOS Safari from zooming into the field on focus
const inputBase =
    'w-full rounded-xl border bg-white px-4 text-base text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:ring-4 sm:text-sm';
const inputOk = 'border-[#e4e9f3] focus:border-sky-500 focus:ring-sky-500/10';
const inputBad = 'border-red-400 focus:border-red-500 focus:ring-red-500/10';
const labelCls = 'mb-2 block text-sm font-semibold text-[#36425f]';
const cardCls =
    'rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]';
const eyebrowCls = 'text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]';
const focusRing =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600';

/* ---------- SEO: structured data (render this once on the page; remove if you already have it elsewhere) ---------- */

const ORG_JSON_LD = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Build My Business',
    legalName: 'RAMS TECH CIRCLE OPC PVT. LTD.',
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '13th Main Road, Anna Nagar West',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600040',
        addressCountry: 'IN',
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: CONTACT.phone,
            email: CONTACT.email,
            areaServed: 'IN',
            hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        },
    ],
}).replace(/</g, '\\u003c');

/* ---------- small pieces ---------- */

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <p id={id} role="alert" className="mt-1.5 flex items-start gap-1.5 text-[13px] font-medium leading-5 text-red-600">
            <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            {message}
        </p>
    );
}

const Required = () => (
    <span aria-hidden="true" className="text-red-500">
        {' '}*
    </span>
);
// const Optional = () => <span className="font-normal text-[#67728f]"> (optional)</span>;

/* ---------- component ---------- */

const ContactUs = () => {
    const uid = useId();
    const fid = (f: string) => `${uid}-${f}`;

    const [values, setValues] = useState<Values>(EMPTY);
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
    const [attempted, setAttempted] = useState(false);
    const [status, setStatus] = useState<Status>('idle');

    const fieldRefs = useRef<Partial<Record<FieldName, HTMLElement | null>>>({});
    const successRef = useRef<HTMLHeadingElement>(null);

    const errors = validate(values);
    const shown = (f: FieldName) => (touched[f] || attempted ? errors[f] : undefined);

    useEffect(() => {
        if (status === 'success') successRef.current?.focus();
    }, [status]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        let { value } = e.target;

        if (name === 'phone') {
            value = value.replace(/\D/g, '');
            if (value.length > 10 && value.startsWith('91')) value = value.slice(2);
            value = value.slice(0, 10);
        }

        setValues((v) => ({ ...v, [name]: value }));
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name as FieldName;
        setTouched((t) => ({ ...t, [name]: true }));
    };

    // everything an input needs: value, handlers, aria links to hint + error, error styling
    const fieldProps = (name: FieldName, hasHint = false) => {
        const err = shown(name);
        const describedBy = [hasHint ? `${fid(name)}-hint` : '', err ? `${fid(name)}-error` : ''].filter(Boolean).join(' ');
        return {
            id: fid(name),
            name,
            value: values[name],
            onChange: handleChange,
            onBlur: handleBlur,
            'aria-invalid': err ? (true as const) : undefined,
            'aria-describedby': describedBy || undefined,
            className: `${inputBase} ${err ? inputBad : inputOk}`,
            ref: (el: HTMLElement | null) => {
                fieldRefs.current[name] = el;
            },
        };
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === 'submitting') return;

        setAttempted(true);
        const firstInvalid = FIELD_ORDER.find((f) => errors[f]);
        if (firstInvalid) {
            fieldRefs.current[firstInvalid]?.focus();
            return;
        }

        // honeypot: real people never see or fill this field
        const trap = String(new FormData(event.currentTarget).get('website') ?? '');
        if (trap) {
            setStatus('success');
            return;
        }

        setStatus('submitting');
        try {
            await submitEnquiry({
                name: values.name.trim(),
                // phone: parseIndianPhone(values.phone) ?? values.phone.trim(),
                phone: values.phone,
                businessName: values.businessName.trim(),
                interestedIn: values.interestedIn,
                message: values.message.trim(),
            });
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const resetForm = () => {
        setValues(EMPTY);
        setTouched({});
        setAttempted(false);
        setStatus('idle');
    };

    const submitting = status === 'submitting';

    return (
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }} />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* LEFT: contact information */}
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                            <span className="h-0.5 w-5 rounded-full bg-orange-500" aria-hidden="true" />
                            Contact
                        </span>

                        <h2
                            id="contact-heading"
                            className="mt-5 max-w-xl text-2xl font-bold leading-[1.08] tracking-tight text-[#0a1433] sm:text-3xl lg:text-5xl"
                        >
                            Talk to the BMB team.
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-7 text-[#36425f]">
                            Tell us what you are trying to solve. We will help you understand which BMB product or service fits
                            your business.
                        </p>

                        <div className="mt-5 space-y-3">
                            {/* Address */}
                            <div className={cardCls}>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                        <MapPin size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className={eyebrowCls}>Headquarters</p>
                                        <address className="mt-1 text-sm font-bold not-italic leading-6 text-[#0a1433]">
                                            13th Main Road, Anna Nagar West, Chennai, Tamil Nadu 600040
                                        </address>
                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">Visit for in-person consultations</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <a href={`mailto:${CONTACT.email}`} className={`block ${cardCls} ${focusRing}`}>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                                        <Mail size={20} aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className={eyebrowCls}>Email</p>
                                        <p className="mt-1 break-all text-sm font-bold text-[#0a1433]">{CONTACT.email}</p>
                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">General enquiries and partnerships</p>
                                    </div>
                                </div>
                            </a>

                            {/* Phone + WhatsApp (two separate links, never nested) */}
                            <div className={cardCls}>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                        <Phone size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className={eyebrowCls}>Phone / WhatsApp</p>
                                        <p className="mt-1 text-sm font-bold text-[#0a1433]">
                                            <a
                                                href={`tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`}
                                                className={`rounded hover:text-sky-700 ${focusRing}`}
                                            >
                                                {CONTACT.phone}
                                            </a>
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">Monday to Friday, 9:00 AM – 5:00 PM</p>
                                        <a
                                            href={waLink('Hi BMB team, I would like to know more about your products and services.')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-2 inline-flex items-center gap-1.5 rounded text-xs font-bold text-green-700 hover:text-green-800 ${focusRing}`}
                                        >
                                            <MessageCircle size={14} aria-hidden="true" />
                                            Chat on WhatsApp
                                            <span className="sr-only"> (opens in a new tab)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: form */}
                    <div className="rounded-[24px] border border-[#e4e9f3] bg-white p-5 shadow-[0_20px_55px_-24px_rgba(10,20,51,0.22)] sm:p-7 lg:p-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#67728f]">Get in touch</p>
                            <h3 className="mt-1 text-2xl font-bold text-[#0a1433] sm:text-3xl">Request a demo</h3>
                            <p className="mt-1 text-sm leading-6 text-[#67728f]">
                                Share a few details and our team can understand what you are looking for.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div role="status" className="mt-6 rounded-2xl bg-green-50 p-6">
                                <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
                                <h4
                                    ref={successRef}
                                    tabIndex={-1}
                                    className="mt-3 text-xl font-bold text-green-900 outline-none"
                                >
                                    Thank you, we&apos;ve received your enquiry.
                                </h4>
                                <p className="mt-2 text-sm leading-6 text-green-800">
                                    Our team will get back to you on the number you shared. We work Monday to Friday, 9:00 AM – 5:00 PM.
                                </p>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className={`mt-5 inline-flex h-11 items-center rounded-full border border-green-700 px-5 text-sm font-bold text-green-800 transition hover:bg-green-100 ${focusRing}`}
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                aria-busy={submitting}
                                className="mt-5 space-y-5"
                            >
                                {/* Name + Phone */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor={fid('name')}
                                            className={labelCls}
                                        >
                                            Your name
                                            <Required />
                                        </label>

                                        <input
                                            {...fieldProps('name')}
                                            type="text"
                                            required
                                            maxLength={80}
                                            autoComplete="name"
                                            placeholder="Enter your name"
                                            className={`h-12 ${fieldProps('name').className}`}
                                        />

                                        <FieldError
                                            id={`${fid('name')}-error`}
                                            message={shown('name')}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor={fid('phone')}
                                            className={labelCls}
                                        >
                                            Phone
                                            <Required />
                                        </label>

                                        <input
                                            {...fieldProps('phone', true)}
                                            type="tel"
                                            required
                                            inputMode="numeric"
                                            autoComplete="tel-national"
                                            placeholder="10-digit mobile number"
                                            className={`h-12 ${fieldProps('phone', true).className}`}
                                        />

                                        <p
                                            id={`${fid('phone')}-hint`}
                                            className="mt-1.5 text-xs leading-5 text-[#67728f]"
                                        >
                                            10-digit mobile number, without +91 or 0.
                                        </p>

                                        <FieldError
                                            id={`${fid('phone')}-error`}
                                            message={shown('phone')}
                                        />
                                    </div>
                                </div>

                                {/* Business + Product */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor={fid('businessName')}
                                            className={labelCls}
                                        >
                                            Business name
                                            {/* <Optional /> */}
                                        </label>

                                        <input
                                            {...fieldProps('businessName')}
                                            type="text"
                                            maxLength={100}
                                            autoComplete="organization"
                                            placeholder="Your business name"
                                            className={`h-12 ${fieldProps('businessName').className}`}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor={fid('interestedIn')}
                                            className={labelCls}
                                        >
                                            Interested in
                                            {/* <Optional /> */}
                                        </label>

                                        <select
                                            {...fieldProps('interestedIn')}
                                            required
                                            className={`h-12 ${fieldProps('interestedIn').className}`}
                                        >
                                            <option value="" disabled>
                                                Select a product or service
                                            </option>

                                            {PRODUCT_OPTIONS.map((p) => (
                                                <option key={p.id} value={p.name}>
                                                    {p.name}
                                                    {p.soon ? ' (early access)' : ''}
                                                </option>
                                            ))}

                                            <option value="Something else">Something else / custom requirement</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor={fid('message')}
                                        className={labelCls}
                                    >
                                        What would you like to solve?
                                        {/* <Optional /> */}
                                    </label>

                                    <textarea
                                        {...fieldProps('message')}
                                        rows={5}
                                        maxLength={1000}
                                        placeholder="e.g. We run 2 interior studios and currently track leads on Excel."
                                        className={`resize-y py-3 leading-6 ${fieldProps('message').className}`}
                                    />
                                </div>

                                {/* Honeypot: hidden from people and screen readers */}
                                <div
                                    aria-hidden="true"
                                    className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                                >
                                    <label>
                                        Website

                                        <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </label>
                                </div>

                                {/* Error */}
                                {status === 'error' && (
                                    <div
                                        role="alert"
                                        className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
                                    >
                                        <AlertCircle
                                            size={18}
                                            className="mt-0.5 shrink-0"
                                            aria-hidden="true"
                                        />

                                        <p>
                                            We couldn&apos;t send your enquiry. Please try again,
                                            or message us on{' '}
                                            <a
                                                href={waLink(
                                                    'Hi BMB team, I would like to know more about your products and services.'
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold underline"
                                            >
                                                WhatsApp
                                            </a>
                                            .
                                        </p>
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto ${focusRing}`}
                                    >
                                        {submitting ? (
                                            <>
                                                <Loader2
                                                    size={18}
                                                    className="animate-spin"
                                                    aria-hidden="true"
                                                />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send enquiry
                                                <ArrowRight
                                                    size={18}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs leading-5 text-[#67728f]">
                                        By sending, you agree to be contacted about your enquiry.
                                        {/* See our{' '} */}
                                        {/* <Link to="/privacy" className="font-semibold text-sky-700 underline">
                Privacy policy
            </Link> */}
                                        .
                                    </p>
                                </div>
                            </form>

                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactUs;