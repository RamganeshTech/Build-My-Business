import { waLink } from "../../data/contact";

type WorkStep = {
    number: string;
    title: string;
    description: string;
};

const WORK_STEPS: WorkStep[] = [
    {
        number: '01',
        title: 'Discover',
        description:
            'We understand your business, team size and current tools in a short call.',
    },
    {
        number: '02',
        title: 'Map',
        description:
            "We recommend the exact apps and services you need, and nothing you don't.",
    },
    {
        number: '03',
        title: 'Set up',
        description:
            'We configure, import your data and train your team on site or online.',
    },
    {
        number: '04',
        title: 'Grow',
        description:
            'Ongoing support, product updates and new modules as your business scales.',
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

const HowWeWork = () => {
    const whatsappMessage =
        'Hi BMB team, I would like to know more about your products and services.';

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
                    {/* LEFT — Heading */}
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                            <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                            How we work
                        </span>

                        <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0a1433] sm:text-5xl lg:text-[52px]">
                            From first call to{' '}
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                running smoothly.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-7 text-[#36425f] sm:text-lg">
                            We keep the process simple. First we understand how
                            your business works, then we put the right
                            technology in place and stay with you as you grow.
                        </p>

                        {/* WhatsApp CTA */}
                        <a
                            href={waLink(whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0a1433] px-6 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#172654]"
                        >
                            Talk to us on WhatsApp
                            <ArrowIcon />
                        </a>

                        <p className="mt-3 text-xs text-[#67728f]">
                            No complicated process. Just tell us what you need.
                        </p>
                    </div>

                    {/* RIGHT — Process */}
                    <div className="relative">
                        {/* Connecting line */}
                        <div
                            className="absolute left-[23px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-orange-200 via-[#e4e9f3] to-sky-200 sm:block"
                            aria-hidden="true"
                        />

                        <div className="space-y-4">
                            {WORK_STEPS.map((step) => (
                                <div
                                    key={step.number}
                                    className="group relative flex gap-5 rounded-2xl border border-[#e4e9f3] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_14px_36px_-18px_rgba(10,20,51,0.24)] sm:gap-6 sm:p-6"
                                >
                                    {/* Number */}
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e4e9f3] bg-[#f5f8fd] text-xs font-bold tracking-wide text-[#f97506] transition duration-200 group-hover:border-orange-200 group-hover:bg-orange-50">
                                        {step.number}
                                    </div>

                                    <div className="min-w-0 pt-0.5">
                                        <h3 className="text-lg font-bold text-[#0a1433] sm:text-xl">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#67728f] sm:text-[15px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom note */}
                        <div className="mt-5 rounded-2xl bg-[#f5f8fd] px-5 py-4 sm:px-6">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-orange-500">
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
                                        <path d="M12 3v18" />
                                        <path d="M3 12h18" />
                                    </svg>
                                </div>

                                <p className="text-sm leading-6 text-[#36425f]">
                                    Start with one product and add more later
                                    as your business needs change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;