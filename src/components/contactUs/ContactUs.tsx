import {  useState } from 'react';
import { CONTACT, waLink } from '../../data/contact';

type ProductOption = {
    label: string;
    value: string;
};

const PRODUCT_OPTIONS: ProductOption[] = [
    {
        label: 'Vertical Living CRM',
        value: 'Vertical Living CRM',
    },
    {
        label: 'DailyGrades',
        value: 'DailyGrades',
    },
    {
        label: 'CivilMind Pro',
        value: 'CivilMind Pro',
    },
    {
        label: 'BMB Kitchen',
        value: 'BMB Kitchen',
    },
    {
        label: 'Other BMB product',
        value: 'Other BMB product',
    },
];

const ArrowIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    </svg>
);

const ContactIcon = ({
    type,
}: {
    type: 'location' | 'email' | 'phone';
}) => {
    if (type === 'location') {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </svg>
        );
    }

    if (type === 'email') {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
    );
};

const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const enquiry = {
            name: String(formData.get('name') ?? ''),
            phone: String(formData.get('phone') ?? ''),
            businessName: String(formData.get('businessName') ?? ''),
            interestedIn: String(formData.get('interestedIn') ?? ''),
            message: String(formData.get('message') ?? ''),
        };

        /*
         * TODO: Connect this form to Google Sheets.
         *
         * Google Sheets URL / endpoint will be added later.
         *
         * The data to save:
         * - name
         * - phone
         * - businessName
         * - interestedIn
         * - message
         *
         * For now, the form only handles the UI state.
         */

        console.log('BMB enquiry form:', enquiry);

        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <section
            id="contact"
            className="bg-white py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* LEFT — Contact information */}
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                            <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                            Contact
                        </span>

                        <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0a1433] sm:text-5xl lg:text-[52px]">
                            Talk to the{' '}
                            {/* <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"> */}
                            <span className="">
                                BMB team.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-7 text-[#36425f] sm:text-lg">
                            Tell us what you are trying to solve. We will help
                            you understand which BMB product or service fits
                            your business.
                        </p>

                        {/* Contact cards */}
                        <div className="mt-8 space-y-3">
                            <div className="rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                        <ContactIcon type="location" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
                                            Headquarters
                                        </p>

                                        <p className="mt-1 text-sm font-bold leading-6 text-[#0a1433]">
                                            13th Main Road, Anna Nagar West,
                                            Chennai, Tamil Nadu 600040
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">
                                            Visit for in-person consultations
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="block rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                                        <ContactIcon type="email" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
                                            Email
                                        </p>

                                        <p className="mt-1 break-all text-sm font-bold text-[#0a1433]">
                                            {CONTACT.email}
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">
                                            General enquiries and partnerships
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href={waLink(
                                    'Hi BMB team, I would like to know more about your products and services.'
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:border-transparent hover:shadow-[0_12px_30px_-16px_rgba(10,20,51,0.2)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                        <ContactIcon type="phone" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#67728f]">
                                            Phone / WhatsApp
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#0a1433]">
                                            {CONTACT.phone}
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[#67728f]">
                                            Monday to Friday, 9:00 AM – 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Form */}
                    <div className="rounded-[24px] border border-[#e4e9f3] bg-white p-5 shadow-[0_20px_55px_-24px_rgba(10,20,51,0.22)] sm:p-7 lg:p-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#67728f]">
                                Get in touch
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-[#0a1433] sm:text-3xl">
                                Request a demo
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#67728f]">
                                Share a few details and our team can understand
                                what you are looking for.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >
                            {/* Name + Phone */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-[#36425f]"
                                    >
                                        Your name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="Enter your name"
                                        className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold text-[#36425f]"
                                    >
                                        Phone
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        inputMode="tel"
                                        autoComplete="tel"
                                        placeholder="Enter phone number"
                                        className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                                    />
                                </div>
                            </div>

                            {/* Business + Product */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="businessName"
                                        className="mb-2 block text-sm font-semibold text-[#36425f]"
                                    >
                                        Business name
                                    </label>

                                    <input
                                        id="businessName"
                                        name="businessName"
                                        type="text"
                                        autoComplete="organization"
                                        placeholder="Your business name"
                                        className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="interestedIn"
                                        className="mb-2 block text-sm font-semibold text-[#36425f]"
                                    >
                                        Interested in
                                    </label>

                                    <select
                                        id="interestedIn"
                                        name="interestedIn"
                                        defaultValue=""
                                        className="h-12 w-full rounded-xl border border-[#e4e9f3] bg-white px-4 text-sm text-[#0a1433] outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                                    >
                                        <option value="">
                                            Not sure yet
                                        </option>

                                        {PRODUCT_OPTIONS.map((product) => (
                                            <option
                                                key={product.value}
                                                value={product.value}
                                            >
                                                {product.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-[#36425f]"
                                >
                                    What would you like to solve?
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="e.g. We run 2 interior studios and currently track leads on Excel."
                                    className="w-full resize-y rounded-xl border border-[#e4e9f3] bg-white px-4 py-3 text-sm leading-6 text-[#0a1433] outline-none transition placeholder:text-[#9aa3b6] focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f97506] px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6a00] sm:w-auto"
                            >
                                Send enquiry
                                <ArrowIcon />
                            </button>

                            {submitted && (
                                <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium leading-6 text-green-800">
                                    Thank you. Your enquiry has been captured
                                    in the current UI flow. Google Sheets
                                    connection will be added here later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;