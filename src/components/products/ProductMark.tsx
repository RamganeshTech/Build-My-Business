// src/components/products/ProductMark.tsx
// Product logo when one is imported, otherwise a gradient icon tile.
// Reusable in the card, the side panel, and later in the header menu and footer.

import type { CatalogProduct } from "../../data/productCatalog";


type Size = 'md' | 'lg';

const BOX: Record<Size, string> = { md: 'h-12 w-12 rounded-[14px]', lg: 'h-14 w-14 rounded-2xl' };
const ICON: Record<Size, number> = { md: 24, lg: 28 };
const INDUSTRYICON: Record<Size, number> = { md: 20, lg:18 };

interface ProductMarkProps {
  product: CatalogProduct;
  size?: Size;
  /** Set when the mark sits on the product's gradient (side panel header). */
  onGradient?: boolean;
  fromIndustries?: boolean;
}

export default function ProductMark({ product, size = 'md', onGradient = false , fromIndustries= false}: ProductMarkProps) {
  // const { icon: Icon, accent } = product;
  const { logo , icon: Icon, accent } = product;

  if (logo) {
    return (
      <span className={`grid shrink-0 place-items-center border border-slate-200 bg-white p-1.5 ${BOX[size]}`}>
        <img src={logo} alt="" className="h-full w-full object-contain" />
      </span>
    );
  }

  return (
    <span
      className={`grid ${fromIndustries ? "w-5 h-5" : ""} shrink-0 place-items-center text-white ${BOX[size]} ${onGradient ? 'bg-white/20' : 'shadow-sm'}`}
      style={onGradient ? undefined : { backgroundImage: `linear-gradient(140deg, ${accent.from}, ${accent.to})` }}
    >
      <Icon size={fromIndustries ? INDUSTRYICON[size] : ICON[size]} aria-hidden="true" />
    </span>
  );
}