// src/components/industries/IndustryCard.tsx
import type { Industry } from '../../data/industries';
import { CATALOG } from '../../data/productCatalog';
import ProductMark from '../products/ProductMark';

interface IndustryCardProps {
  industry: Industry;
  onSelect: (industry: Industry) => void;
}

export default function IndustryCard({ industry, onSelect }: IndustryCardProps) {
  const { name, desc, icon: Icon, productIds } = industry;
  const products = productIds.map((id) => CATALOG.find((p) => p.id === id)).filter((p) => !!p);

  return (
    <button
      type="button"
      onClick={() => onSelect(industry)}
      className="group flex h-full w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:border-sky-300 hover:shadow-lg hover:shadow-slate-900/10  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
        <Icon size={22} aria-hidden="true" />
      </span>

      <div>
        <h3 className="text-lg font-bold leading-tight text-slate-900">{name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{desc}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-2" aria-hidden="true">
        {products.map((p) => (
          <span key={p.id} title={p.name}>
            <ProductMark product={p} size="md" fromIndustries={true} />
          </span>
        ))}
      </div>
      <span className="sr-only">Recommended: {products.map((p) => p.name).join(', ')}</span>
    </button>
  );
}