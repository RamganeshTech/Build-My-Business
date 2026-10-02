// // src/components/Header.tsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const navLinks = [
//     { name: 'HOME', path: '/' },
//     { name: 'PRICING', path: '#pricing' },
//     { name: 'SERVICES', path: '#services' },
//     { name: 'CAREER', path: '/career' },
//     { name: 'CONTACT', path: '#contact' },
//     { name: 'PRODUCTS', path: '#products' },
//     // { name: 'LMS Form', path: '/VL-form' },
//     // { name: 'CRM Form', path: '/LMS-form' },
//   ];

//   // const formLinks = [
//   //   { name: 'CRM FORM', path: '/VL-form', icon: 'fa-city' },
//   //   { name: 'LMS FORM', path: '/LMS-form', icon: 'fa-graduation-cap' },
//   // ];

//   const handleNavClick = (path: string) => {
//     if (path.startsWith('#')) {
//         const element = document.querySelector(path);

//         if (element) {
//             element.scrollIntoView({
//                 behavior: 'smooth',
//             });
//         }
//     }
// };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-[100]">
//       <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-10">
//         <div className="flex justify-between items-center h-20">

//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center ">
//             <Link to="/" className='outline-none'>
//               <img
//                 src="/logo.png"
//                 alt="Build My Business Logo"
//                 className="h-10 md:h-12  w-auto object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                     onClick={() => handleNavClick(link.path)}

//                 className="text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors tracking-wider"
//               >
//                 {link.name}
//               </Link>
//             ))}


//             {/* DROPDOWN FOR FORMS */}
//             {/* <div
//               className="relative group"
//               onMouseEnter={() => setIsDropdownOpen(true)}
//               onMouseLeave={() => setIsDropdownOpen(false)}
//             >
//               <button className="flex items-center gap-2 text-[13px] font-bold text-gray-600 group-hover:text-blue-600 transition-colors tracking-wider">
//                 FORMS <i className={`fas fa-chevron-down text-[10px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
//               </button>

//               <AnimatePresence>
//                 {isDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="absolute top-full -left-25 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-4 mt-2 overflow-hidden"
//                   >
//                     {formLinks.map((form) => (
//                       <Link
//                         key={form.name}
//                         to={form.path}
//                         className="flex items-center gap-3 px-6 py-3 text-[12px] font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
//                       >
//                         <i className={`fas ${form.icon} w-4`}></i>
//                         {form.name}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div> */}


//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-blue-600 p-2 focus:outline-none transition-colors"
//             >
//               <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-xl"
//           >
//             <div className="px-4 py-6 flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-all"
//                 >
//                   {link.name}
//                 </Link>
//               ))}


//               {/* <div className="pt-4 border-t border-gray-50">
//                 <p className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-4">INQUIRY FORMS</p>
//                 <div className="grid grid-cols-1 gap-4">
//                   {formLinks.map((form) => (
//                     <Link
//                       key={form.name}
//                       to={form.path}
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center gap-3 text-sm font-bold text-gray-700 hover:text-blue-600"
//                     >
//                       <i className={`fas ${form.icon} text-blue-500`}></i>
//                       {form.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div> */}


//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;



//  SECOND VERSION


// src/components/Header.tsx
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Boxes, ChevronDown, Cloud, Code, Gauge, GraduationCap, HardHat, Home,
  Megaphone, Menu, MessageCircle, Ship, Sparkles, Store, Truck, User, Users, Video, X,
  type LucideIcon,
} from 'lucide-react';
// import ProductDetails from './products/ProductDetails';
// import { ctaFor } from './products/Products';
import { CATALOG, CATEGORIES, type CatalogProduct, type CategoryId } from '../../data/productCatalog';
import { ctaFor } from '../../components/products/Products';
import { waLink } from '../../data/contact';
import { SideModal } from '../../components/ui/SideModal';
import ProductDetails from '../../components/products/ProductDetails';

/* ---------- types & data ---------- */

// logo / icon / forWho / login are optional extras on a catalog product
type NavProduct = CatalogProduct & { logo?: string; icon?: string; forWho?: string; login?: string };

// icon keys used in the HTML -> lucide icons
const ICON_MAP: Record<string, LucideIcon> = {
  cap: GraduationCap, home: Home, crane: HardHat, boxes: Boxes, users: Users, gauge: Gauge,
  pos: Store, truck: Truck, ship: Ship, mega: Megaphone, video: Video, code: Code,
  cloud: Cloud, spark: Sparkles,
};

const PRODUCTS = CATALOG as NavProduct[];

const GROUPS = (Object.keys(CATEGORIES) as CategoryId[])
  .map((id) => ({ id, name: CATEGORIES[id].name, items: PRODUCTS.filter((p) => p.cat === id) }))
  .filter((g) => g.items.length > 0);

const SIGN_IN_APPS = PRODUCTS.filter((p) => p.kind === 'app' && p.status !== 'soon');

const NAV_LINKS = [
  { label: 'Industries', hash: '#industries' },
  { label: 'Services', hash: '#services' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Contact', hash: '#contact' },
];

const MOBILE_LINKS = [
  { label: 'Industries', hash: '#industries' },
  { label: 'Services', hash: '#services' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Why BMB', hash: '#platform' },
  { label: 'Contact', hash: '#contact' },
];

/* ---------- styles ---------- */

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600';
const mlink = `flex h-11 items-center gap-1.5 whitespace-nowrap rounded-[10px] px-3 text-[15px] font-semibold text-[#36425f] transition hover:bg-slate-100 hover:text-[#0a1433] ${focusRing}`;
const catLabel = 'px-2.5 pb-1 pt-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500';
const rowCls = `flex cursor-pointer w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition hover:bg-slate-50 ${focusRing}`;

/* ---------- product tile: logo image if there is one, else lucide icon on category colour ---------- */

function Tile({ p, size = 36 }: { p: NavProduct; size?: number }) {
  if (p.logo) {
    return (
      <span
        className="grid shrink-0 place-items-center overflow-hidden rounded-[10px] bg-white ring-1 ring-slate-200"
        style={{ width: size, height: size }}
      >
        <img src={p.logo} alt="" className="h-full w-full object-contain p-1" />
      </span>
    );
  }
  const accent = CATEGORIES[p.cat].accent as { from?: string; to: string };
  const Icon = (p.icon && ICON_MAP[p.icon]) || Sparkles;
  return (
    <span
      className="grid shrink-0 place-items-center rounded-[10px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
      style={{ width: size, height: size, background: `linear-gradient(140deg, ${accent.from ?? accent.to}, ${accent.to})` }}
    >
      <Icon size={Math.round(size * 0.5)} aria-hidden="true" />
    </span>
  );
}

function SoonPill() {
  return (
    <span className="ml-auto shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
      Early access
    </span>
  );
}

/* ---------- header ---------- */

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [megaOpen, setMegaOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<NavProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const megaRef = useRef<HTMLLIElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);
  const cta = active ? ctaFor(active) : null;

  /* outside click + Escape */
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (megaRef.current && !megaRef.current.contains(t)) setMegaOpen(false);
      if (signInRef.current && !signInRef.current.contains(t)) setSignInOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setSignInOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  /* lock page scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const canHover = () => window.matchMedia('(hover: hover)').matches;

  const openMegaHover = () => {
    if (!canHover()) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSignInOpen(false);
    setMegaOpen(true);
  };
  const closeMegaHover = () => {
    if (!canHover()) return;
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  /* smooth scroll that also works from /career, /privacy etc. */
  const scrollToHash = (hash: string) => {
    setMegaOpen(false);
    setSignInOpen(false);
    setMobileOpen(false);
    const go = () => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    if (pathname === '/') setTimeout(go, 60);
    else {
      navigate('/');
      setTimeout(go, 200);
    }
  };

  const openProduct = (p: NavProduct) => {
    setMegaOpen(false);
    setMobileOpen(false);
    setActive(p);
    setIsModalOpen(true);
  };

  const signInRows = (
    <>
      {SIGN_IN_APPS.map((p) => (
        <a
          key={p.id}
          href={p.login || waLink(`Hi BMB team, I need sign-in access to ${p.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={rowCls}
        >
          <Tile p={p} size={32} />
          <b className="flex-1 text-[14.5px] font-bold text-[#0a1433]">{p.name}</b>
          <small className={`whitespace-nowrap text-xs font-bold ${p.login ? 'text-[#1f7fc9]' : 'text-slate-500'}`}>
            {p.login ? 'Sign in →' : 'Request access'}
          </small>
        </a>
      ))}
    </>
  );

  return (
    <>
      <header className="fixed left-0 top-0 z-[100] w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 w-full max-w-[1220px] items-center gap-7 px-4 sm:px-6">
          {/* Logo image + text */}
          <Link to="/" aria-label="Build My Business home" className={`flex shrink-0 items-center gap-2.5 rounded-lg ${focusRing}`}>
            <img src="/bmbLogo.webp" alt="" className="h-11 w-auto object-contain" />
            <b className="text-[17px] font-bold leading-none tracking-tight text-[#0a1433]">
              Build My<br />
              <span className="text-[#f97506]">Business</span>
            </b>
          </Link>

          {/* Desktop menu */}
          <nav aria-label="Primary" className="hidden h-full flex-1 lg:block">
            <ul className="m-0 flex h-full list-none items-center gap-1 p-0">
              {/* Products mega menu */}
              <li
                ref={megaRef}
                className="flex h-full items-center"
                onMouseEnter={openMegaHover}
                onMouseLeave={closeMegaHover}
              >
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="mega-menu"
                  onClick={() => {
                    setSignInOpen(false);
                    setMegaOpen((o) => (canHover() ? true : !o));
                  }}
                  className={`${mlink} ${megaOpen ? 'bg-slate-100 text-[#0a1433]' : ''}`}
                >
                  Products
                  <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                </button>

                {megaOpen && (
                  <div id="mega-menu" className="absolute inset-x-6 top-full pt-1">
                    <div className="grid max-h-[calc(100vh-140px)] grid-cols-[1fr_250px] gap-[18px] overflow-auto rounded-[22px] border border-slate-200 bg-white p-[18px] shadow-[0_2px_4px_rgba(10,20,51,0.06),0_24px_60px_-18px_rgba(10,20,51,0.28)]">
                      <div className="grid grid-cols-4 content-start gap-x-3.5 gap-y-1">
                        {GROUPS.map((g) => (
                          <div key={g.id}>
                            <div className={catLabel}>{g.name}</div>
                            {g.items.map((p) => (
                              <button key={p.id} type="button" onClick={() => openProduct(p)} className={rowCls}>
                                <Tile p={p} />
                                <span className="min-w-0">
                                  <b className="block text-[14.5px] font-bold text-[#0a1433]">{p.name}</b>
                                  {p.forWho && (
                                    <small className="line-clamp-1 text-[12.5px] leading-snug text-slate-500">
                                      {p.forWho.split(/,| and /)[0]}
                                    </small>
                                  )}
                                </span>
                                {p.status === 'soon' && <SoonPill />}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>

                      <aside className="grid content-start gap-3 self-start rounded-2xl bg-gradient-to-br from-[#0a1433] to-[#14306b] p-[22px] text-white">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#9fb4e6]">Not sure where to start?</span>
                        <h4 className="text-[19px] font-bold leading-tight">Tell us what you run. We&apos;ll map the right apps.</h4>
                        <p className="text-sm text-[#c9d4f0]">A 20-minute call with our team in Chennai. No obligation.</p>
                        <button
                          type="button"
                          onClick={() => scrollToHash('#contact')}
                          className="inline-flex h-[42px] items-center justify-self-start whitespace-nowrap rounded-full bg-[#f97506] px-5 text-sm font-bold text-white transition hover:bg-[#ea6a00]"
                        >
                          Book a call
                        </button>
                      </aside>
                    </div>
                  </div>
                )}
              </li>

              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <button type="button" onClick={() => scrollToHash(l.hash)} className={mlink}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2.5">
            {/* Sign in switcher */}
            <div ref={signInRef} className="relative hidden lg:block">
              <button
                type="button"
                aria-expanded={signInOpen}
                aria-controls="signin-menu"
                onClick={() => {
                  setMegaOpen(false);
                  setSignInOpen((o) => !o);
                }}
                className={`${mlink} ${signInOpen ? 'bg-slate-100 text-[#0a1433]' : ''}`}
              >
                <User size={18} aria-hidden="true" />
                Sign in
                <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${signInOpen ? 'rotate-180' : ''}`} />
              </button>
              {signInOpen && (
                <div
                  id="signin-menu"
                  className="absolute right-0 top-full z-[60] mt-2 w-[340px] rounded-[18px] border border-slate-200 bg-white p-2.5 shadow-[0_2px_4px_rgba(10,20,51,0.06),0_24px_60px_-18px_rgba(10,20,51,0.28)]"
                >
                  <div className={catLabel}>Sign in to your BMB app</div>
                  {signInRows}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => scrollToHash('#contact')}
              className={`hidden h-11 items-center whitespace-nowrap rounded-full border-[1.5px] border-slate-200 bg-white px-[18px] text-sm font-bold text-[#0a1433] transition hover:border-[#0a1433] min-[1380px]:inline-flex ${focusRing}`}
            >
              Talk to sales
            </button>

            <button
              type="button"
              onClick={() => scrollToHash('#products')}
              className={`hidden h-11 items-center whitespace-nowrap rounded-full bg-[#f97506] px-[18px] text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(249,117,6,0.8)] transition hover:bg-[#ea6a00] sm:inline-flex ${focusRing}`}
            >
              Explore products
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-xl border-[1.5px] border-slate-200 bg-white text-[#0a1433] lg:hidden ${focusRing}`}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu (outside <header> so the blur doesn't trap its fixed positioning) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] overflow-y-auto bg-white px-5 pb-10 pt-5 lg:hidden"
          >
            <div className="mb-5 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <img src="/bmbLogo.webp" alt="" className="h-11 w-auto object-contain" />
                <b className="text-[17px] font-extrabold leading-none tracking-tight text-[#0a1433]">
                  Build My<br />
                  <span className="text-[#f97506]">Business</span>
                </b>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className={`grid h-11 w-11 place-items-center rounded-xl border-[1.5px] border-slate-200 bg-white text-[#0a1433] ${focusRing}`}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {/* Products by category */}
            <div className={`${catLabel} pl-1`}>Products</div>
            {GROUPS.map((g) => (
              <div key={g.id}>
                <div className={`${catLabel} mt-3.5 pl-1`}>{g.name}</div>
                {g.items.map((p) => (
                  <button key={p.id} type="button" onClick={() => openProduct(p)} className={`${rowCls} px-1 py-2.5`}>
                    <Tile p={p} />
                    <span className="min-w-0">
                      <b className="block text-[14.5px] font-bold text-[#0a1433]">{p.name}</b>
                      {p.forWho && (
                        <small className="line-clamp-2 text-[12.5px] leading-snug text-slate-500">{p.forWho.split(/,| and /)[0]}</small>
                      )}
                    </span>
                    {p.status === 'soon' && <SoonPill />}
                  </button>
                ))}
              </div>
            ))}

            {/* Sign in */}
            <div className={`${catLabel} mt-3.5 pl-1`}>Sign in to your app</div>
            {signInRows}

            {/* Page links */}
            <div className="mt-2">
              {MOBILE_LINKS.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => scrollToHash(l.hash)}
                  className="block w-full border-b border-slate-100 px-1 py-3.5 text-left text-lg font-bold text-[#0a1433]"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToHash('#contact')}
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#f97506] text-[15px] font-bold text-white transition hover:bg-[#ea6a00]"
            >
              Talk to sales
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Same SideModal logic as Products / Footer */}
      <SideModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
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
              <button
                type="button"
                onClick={() => {
                  handleCloseModal();
                  scrollToHash('#contact');
                }}
                className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-900 transition hover:border-slate-900 sm:flex-none"
              >
                Contact form
              </button>
            </div>
          )
        }
      >
        {active && <ProductDetails product={active} />}
      </SideModal>
    </>
  );
};

export default Header;