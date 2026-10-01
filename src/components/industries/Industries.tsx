// src/components/industries/Industries.tsx
import { INDUSTRIES, type Industry } from '../../data/industries';
import { setIndustryFilter } from '../../lib/industryFilter';
import IndustryCard from './IndustryCard';

export default function Industries() {
    const handleSelect = (industry: Industry) => {
        setIndustryFilter(industry.id);
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="industries" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6">
                <div className="mb-10 max-w-3xl lg:mb-12">

                    <span className="inline-flex mb-3 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
                        Industries
                    </span>

                    <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
                        Start from your business, not from a feature list.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Each industry gets a ready combination of apps and services. Click one to filter the product list.
                    </p>
                </div>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {INDUSTRIES.map((industry) => (
                        <li key={industry.id}>
                            <IndustryCard industry={industry} onSelect={handleSelect} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}