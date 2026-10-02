// src/components/products/ProductCard.tsx
import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';
import { badgeFor, type CatalogProduct } from '../../data/productCatalog';
import ProductMark from './ProductMark';

interface ProductCardProps {
  product: CatalogProduct;
  onSelect: (product: CatalogProduct) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { name, category, tagline, flow, modules, advanced, forWho, accent } = product;
  const badge = badgeFor(product);

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      aria-haspopup="dialog"
      // className="group relative flex h-full w-full flex-col gap-5 overflow-hidden rounded-2xl 
      // border border-slate-200 bg-white p-6 text-left transition
      //  hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10 focus-visible:outline
      //    focus-visible:outline-offset-2 focus-visible:outline-sky-600"

      className="group relative flex h-full w-full flex-col gap-4 overflow-hidden 
      rounded-2xl border border-slate-200 bg-white p-4 text-left transition
       hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10 focus-visible:outline 
      focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:gap-5 sm:p-5 lg:p-6"
    >
      {/* Product colour bar */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundImage: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
      />

      {/* <div className="flex items-center gap-4"> */}
      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
        <ProductMark product={product} />
        <div className="min-w-0 flex-1">
          {/* <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900">{name}</h3> */}
          <h3 className="text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-xl">{name}</h3>
          <p className={`mt-1 text-sm font-semibold ${accent.text}`}>{category}</p>
        </div>
        {/* <span className={`self-start whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ${badge.className}`}> */}
        <span className={`shrink-0 self-start whitespace-nowrap rounded-full px-2 py-1 text-[11px] font-bold sm:px-2.5 sm:text-xs ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      <p className="text-[15px] leading-relaxed text-slate-600">{tagline}</p>

      {/* Workflow: this is a sequence, so the chips are chained */}
      <div className="flex flex-wrap items-center gap-1.5" aria-label="How it works">
        {flow.map((step, i) => (
          <Fragment key={step}>
            {i > 0 && <ChevronRight size={12} className="text-slate-300" aria-hidden="true" />}
            {/* <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[13px] font-semibold text-slate-700"> */}
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700 sm:px-2.5 sm:text-[13px]">
              {step}
            </span>
          </Fragment>
        ))}
      </div>

      {/* <div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-slate-200 pt-4"> */}
      <div className="mt-auto flex flex-col items-start gap-2 border-t border-dashed border-slate-200 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-4">
        <span className="min-w-0 truncate text-sm text-slate-500">
          {modules.length + advanced.length} modules · {forWho.split(/,| and /)[0]}
        </span>
        {/* <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-sky-600"> */}
        <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-sky-600 sm:text-sm">
          View details
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}