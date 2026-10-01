import { Check, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { CATALOG } from '../../data/productCatalog';
import type { ServiceItem } from './Service';


function Block({
    title,
    count,
    badgeClass,
    children,
}: {
    title: string;
    count?: number;
    badgeClass?: string;
    children: ReactNode;
}) {
    return (
        <section>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900">
                {title}

                {count !== undefined && (
                    <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            badgeClass ?? 'bg-slate-100 text-slate-700'
                        }`}
                    >
                        {count}
                    </span>
                )}
            </h3>

            {children}
        </section>
    );
}

const SERVICE_IDS = [
    'digital-marketing',
    'content-creation',
    'custom-software',
    'ai-automation',
    'cloud-it',
] as const;

export default function ServiceDetails({
    service,
}: {
    service: ServiceItem;
}) {
    const serviceDetails = CATALOG.find(
        (product) =>
            SERVICE_IDS.includes(product.id as (typeof SERVICE_IDS)[number]) &&
            product.id === service.id,
    );

    if (!serviceDetails) {
        return null;
    }

    const {
        tagline,
        forWho,
        flow,
        modules,
        advanced,
    } = serviceDetails;

    return (
        <div className="space-y-8">
            {/* Intro */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                    {service.icon}
                </div>

                <p className="mt-4 text-base leading-relaxed text-white">
                    {tagline}
                </p>
            </div>

            {/* Built for */}
            <Block title="Built for">
                <p className="text-base font-semibold text-slate-800">
                    {forWho}
                </p>
            </Block>

            {/* How it works */}
            <Block title="How it works">
                <ol>
                    {flow.map((step, i) => (
                        <li
                            key={step}
                            className={`relative flex items-center gap-3 py-2 ${
                                i < flow.length - 1
                                    ? 'after:absolute after:left-3.5 after:top-9 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-slate-200'
                                    : ''
                            }`}
                        >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-orange-500 bg-white text-xs font-bold text-orange-500">
                                {i + 1}
                            </span>

                            <span className="text-[15px] font-semibold text-slate-800">
                                {step}
                            </span>
                        </li>
                    ))}
                </ol>
            </Block>

            {/* Key modules */}
            <Block title="Key modules" count={modules.length}>
                <ul className="flex flex-wrap gap-2">
                    {modules.map((module) => (
                        <li
                            key={module}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700"
                        >
                            <Check
                                size={14}
                                className="text-orange-500"
                                aria-hidden="true"
                            />

                            {module}
                        </li>
                    ))}
                </ul>
            </Block>

            {/* Advanced modules */}
            {advanced.length > 0 && (
                <Block
                    title="Advanced modules"
                    count={advanced.length}
                    badgeClass="bg-orange-50 text-orange-700"
                >
                    <ul className="flex flex-wrap gap-2">
                        {advanced.map((module) => (
                            <li
                                key={module}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-800"
                            >
                                <Sparkles
                                    size={13}
                                    aria-hidden="true"
                                />

                                {module}
                            </li>
                        ))}
                    </ul>
                </Block>
            )}
        </div>
    );
}