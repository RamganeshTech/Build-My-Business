// src/components/products/ProductDetails.tsx
// Body of the side panel: everything a visitor needs to judge one product.

import { Check, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import type { CatalogProduct } from '../../data/productCatalog';
import ProductMark from './ProductMark';
// import type { CatalogProduct } from '../../data/productCatalog';
// import ProductMark from './ProductMark';

function Block({ title, count, badgeClass, children }: { title: string; count?: number; badgeClass?: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900">
        {title}
        {count !== undefined && (
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass ?? 'bg-slate-100 text-slate-700'}`}>
            {count}
          </span>
        )}
      </h3>
      {children}
    </section>
  );
}

export default function ProductDetails({ product }: { product: CatalogProduct }) {
  const { tagline, forWho, flow, modules, advanced, accent } = product;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div
        className="rounded-2xl p-5 text-white"
        style={{ backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
      >
        <ProductMark product={product} size="lg" onGradient />  
        <p className="mt-4 text-base leading-relaxed text-white">{tagline}</p>
      </div>

      <Block title="Built for">
        <p className="text-base font-semibold text-slate-800">{forWho}</p>
      </Block>

      <Block title="How it works">
        <ol>
          {flow.map((step, i) => (
            <li
              key={step}
              className={`relative flex items-center gap-3 py-2 ${
                i < flow.length - 1 ? 'after:absolute after:left-3.5 after:top-9 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-slate-200' : ''
              }`}
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 bg-white text-xs font-bold ${accent.step}`}
              >
                {i + 1}
              </span>
              <span className="text-[15px] font-semibold text-slate-800">{step}</span>
            </li>
          ))}
        </ol>
      </Block>

      <Block title="Key modules" count={modules.length}>
        <ul className="flex flex-wrap gap-2">
          {modules.map((m) => (
            <li
              key={m}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700"
            >
              <Check size={14} className={accent.text} aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      </Block>

      {advanced.length > 0 && (
        <Block title="Advanced modules" count={advanced.length} badgeClass={accent.badge}>
          <ul className="flex flex-wrap gap-2">
            {advanced.map((m) => (
              <li
                key={m}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium ${accent.chip}`}
              >
                <Sparkles size={13} aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </Block>
      )}
    </div>
  );
}