// src/components/products/Products.tsx
import { useCallback, useMemo, useState } from 'react';
import { MessageCircle, Plus, Search } from 'lucide-react';
import { SideModal } from '../ui/SideModal';
import {
  CATALOG, CATEGORIES, KIND_TABS, matchesQuery,
  type CatalogProduct, type CategoryId, type Kind,
} from '../../data/productCatalog';
import { waLink } from '../../data/contact';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600';

export function ctaFor(p: CatalogProduct) {
  if (p.status === 'soon') return { label: 'Request early access', msg: `Hi BMB team, I would like early access to ${p.name}.` };
  if (p.kind === 'app') return { label: 'Book a demo', msg: `Hi BMB team, I would like a demo of ${p.name}.` };
  return { label: 'Get a quote', msg: `Hi BMB team, I would like a quote for ${p.name}.` };
}

export default function Products() {
  const [active, setActive] = useState<CatalogProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [kind, setKind] = useState<Kind | 'all'>('all');
  const [cat, setCat] = useState<CategoryId | null>(null);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () => CATALOG.filter((p) => (kind === 'all' || p.kind === kind) && (!cat || p.cat === cat) && matchesQuery(p, q)),
    [kind, cat, q],
  );
  const tabs = KIND_TABS.map((t) => ({ ...t, count: t.id === 'all' ? CATALOG.length : CATALOG.filter((p) => p.kind === t.id).length })).filter((t) => t.count > 0);
  const categoryIds = (Object.keys(CATEGORIES) as CategoryId[]).filter((id) => CATALOG.some((p) => p.cat === id));
  const unfiltered = kind === 'all' && !cat && !q;

  const handleSelect = (product: CatalogProduct) => {
    setActive(product);
    setIsOpen(true);
  };
  const handleClose = useCallback(() => setIsOpen(false), []);
  const cta = active ? ctaFor(active) : null;

  return (
    <section id="products" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
            Pick one app, or run your whole business on BMB.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every product is built for a specific job, and they&apos;re designed to work side by side under one
            brand, one support team and one billing relationship.
          </p>
        </div>

        {/* Toolbar: kind tabs left, search right */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Product type" className="inline-flex max-w-full self-start overflow-x-auto rounded-full border border-slate-200 bg-slate-50 p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={kind === t.id}
                onClick={() => setKind(t.id)}
                className={`inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-bold transition ${focusRing} ${
                  kind === t.id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
                <span className={`rounded-full px-1.5 text-[11px] font-semibold ${kind === t.id ? 'bg-white/15 text-white' : 'border border-slate-200 bg-white text-slate-500'}`}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>

          <label className="flex h-11 w-full items-center gap-2.5 rounded-full border-[1.5px] border-slate-200 bg-white px-4 focus-within:border-sky-600 sm:w-80">
            <Search size={18} className="shrink-0 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: inventory, POS, school, leads…"
              aria-label="Search products"
              className="min-w-0 flex-1 bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        {/* Category tags */}
        <div role="group" aria-label="Filter by category" className="mb-8 flex flex-wrap gap-2">
          {categoryIds.map((id) => {
            const on = cat === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={on}
                onClick={() => setCat(on ? null : id)}
                className={`inline-flex h-10 items-center gap-2 rounded-full border-[1.5px] px-4 text-sm font-semibold transition ${focusRing} ${
                  on ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900'
                }`}
              >
                <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORIES[id].accent.to }} />
                {CATEGORIES[id].name}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">{filtered.length} products shown</p>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onSelect={handleSelect} />
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="col-span-full rounded-2xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
              No product matches &ldquo;{query}&rdquo; yet.{' '}
              <a href="#contact" className="font-bold text-sky-600 hover:text-sky-700">Tell us what you need</a> and we may build it.
            </li>
          )}

          {unfiltered && (
            <li>
              <a
                href="#contact"
                className={`flex h-full min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center transition hover:border-slate-300 ${focusRing}`}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500 text-white">
                  <Plus size={26} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-slate-900">Need a custom module?</h3>
                <p className="max-w-xs text-[15px] leading-relaxed text-slate-600">
                  Our engineering team extends any BMB product or builds a new one around your workflow.
                </p>
                <span className="text-sm font-bold text-sky-600">Talk to our product team</span>
              </a>
            </li>
          )}
        </ul>
      </div>

      <SideModal
        isOpen={isOpen}
        onClose={handleClose}
        title={active?.name ?? ''}
        width="w-full sm:w-[520px]"
        footer={
          active && cta && (
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(cta.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-5 text-sm font-bold text-white transition hover:bg-orange-600 sm:flex-none"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {cta.label}
              </a>
              <a
                href="#contact"
                onClick={handleClose}
                className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-900 transition hover:border-slate-900 sm:flex-none"
              >
                Contact form
              </a>
            </div>
          )
        }
      >
        {active && <ProductDetails product={active} />}
      </SideModal>
    </section>
  );
}