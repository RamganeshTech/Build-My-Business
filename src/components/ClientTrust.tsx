const trustPoints = [
    {
        title: 'In-house product team',
        description:
            'Every app is built and maintained by our own developers.',
        icon: (
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'Support from Chennai',
        description:
            'Real people, Monday to Friday, 9 AM – 5 PM.',
        icon: (
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
                <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
            </svg>
        ),
    },
    {
        title: 'One brand, many apps',
        description:
            'Add products without changing vendors.',
        icon: (
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
                <rect x="3" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="3" width="7" height="7" rx="2" />
                <rect x="3" y="14" width="7" height="7" rx="2" />
                <rect x="14" y="14" width="7" height="7" rx="2" />
            </svg>
        ),
    },
];

const ClientTrust = () => {
    return (
        <section className="border-y border-[#e4e9f3] bg-[#f5f8fd]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-9">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-12">
                    {/* Client count */}
                    <div className="flex items-center gap-4 lg:border-r lg:border-[#e4e9f3] lg:pr-10">
                        <div>
                            <div className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent sm:text-6xl">
                                1,000+
                            </div>

                            <p className="mt-2 text-sm font-semibold leading-5 text-[#0a1433]">
                                clients
                                <br />
                                served
                            </p>
                        </div>
                    </div>

                    {/* Trust points */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
                        {trustPoints.map((point) => (
                            <div
                                key={point.title}
                                className="flex items-start gap-3"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e4e9f3] bg-white text-[#f97506]">
                                    {point.icon}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#0a1433]">
                                        {point.title}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-[#67728f]">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTrust;