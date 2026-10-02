
// // src/components/Footer.tsx
// import { Link } from 'react-router-dom';
// import logo from "../../../public/bmbLogo.webp"; // Ensure this path is correct relative to the component

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const usefulLinks = [
//     // { name: 'Home', path: '/' },
//     // { name: 'About Us', path: '/about' },
//     // { name: 'Services', path: '/services' },
//     // { name: 'Careers', path: '/career' },
//     // { name: 'Contact', path: '/contact' },
//     // { name: 'Products', path: '/products' },

//      { name: 'HOME', path: '/' },
//     { name: 'PRICING', path: '#pricing' },
//     { name: 'SERVICES', path: '#services' },
//     { name: 'CAREER', path: '/career' },
//     { name: 'CONTACT', path: '#contact' },
//     { name: 'PRODUCTS', path: '#products' },

//     // { name: 'Vertical Living', path: '/VL-feature' },
//     // { name: 'Vertical form', path: '/VL-form' },
//     // { name: 'LMs Form', path: '/LMS-form' },
//     // { name: 'LMS', path: '/LMS' },
//   ];

//   const legalLinks = [
//     { name: 'Privacy Policy', path: '/privacy' },
//     { name: 'Terms of Use', path: '/terms' },
//     { name: 'Cookie Policy', path: '/cookies' },
//     { name: 'Disclaimer', path: '/disclaimer' },
//     { name: 'App Privacy', path: '/app-privacy' },
//     { name: 'Refund Policy', path: '/refund-cancellation-policy' },
//     { name: 'Hr Section', path: '/hr-section' },
//   ];

//   const socialLinks = [
//     { 
//       icon: 'fa-instagram', 
//       href: 'https://www.instagram.com/build_my_busines?igsh=NTN4M2VobTlpbWw5' 
//     },
//     { 
//       icon: 'fa-linkedin-in', 
//       href: 'https://www.linkedin.com/company/buildmybusines/posts/?feedView=all' 
//     },
//     { 
//       icon: 'fa-whatsapp', 
//       href: 'https://wa.me/919363964498' 
//     },
//   ];

//   const workingHours = [
//     { day: 'MON', hours: '09:00 AM – 05:00 PM' },
//     { day: 'TUE', hours: '09:00 AM – 05:00 PM' },
//     { day: 'WED', hours: '09:00 AM – 05:00 PM' },
//     { day: 'THU', hours: '09:00 AM – 05:00 PM' },
//     { day: 'FRI', hours: '09:00 AM – 05:00 PM' },
//     { day: 'SAT/SUN', hours: 'CLOSED' },
//   ];


  
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
//     // <footer className="bg-[#0f172a] text-white pt-20 pb-10">
//     <footer className="bg-white text-slate-900 pt-20 pb-10 border-t border-slate-800/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

//           {/* Brand & Mission */}
//           <div className="space-y-8">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Build My Business"
//                 className="h-12 w-auto mb-5 object-contain" // Removed brightness filters for better visibility
//               />
//             </Link>
//             <p className="text-slate-400 text-sm leading-relaxed font-medium">
//                 Building powerful digital products for business operations, academic workflows, and interior project management. Designed to scale with your vision.

//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-slate-800 rounded-xl text-white border-2 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
//                 >
//                   <i className={`fa-brands ${social.icon} text-sm`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Navigation */}
//           <div>
//             <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Navigation</h3>
//             <ul className="space-y-4">
//               {usefulLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     onClick={() => handleNavClick(link.path)}

//                     className="text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-sm font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal & Compliance */}
//           <div>
//             <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Legal & Compliance</h3>
//             <ul className="space-y-4">
//               {legalLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-sm font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Working Hours */}
//           <div>
//             <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Working Hours</h3>
//             <ul className="space-y-3">
//               {workingHours.map((item) => (
//                 <li key={item.day} className="flex justify-between text-xs py-1">
//                   <span className="font-bold text-slate-600 tracking-widest">{item.day}</span>
//                   <span className={`${item.hours === 'CLOSED' ? 'text-red-400' : 'text-slate-700'} font-medium`}>
//                     {item.hours}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest gap-6">
//           <p>© {currentYear} Build My Business Group. All Rights Reserved.</p>
//           <div className="flex items-center gap-2">
//             <span className="h-1 w-1 bg-green-500 rounded-full animate-pulse"></span>
//             <p>System Status: Fully Operational</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



//  SECOND VERSION


// src/components/Footer.tsx
import { useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import logo from '../../../public/bmbLogo.webp'; // keep your existing path
import { CATALOG, type CatalogProduct } from '../../data/productCatalog';
import { ctaFor } from '../../components/products/Products';
import { SideModal } from '../../components/ui/SideModal';
import { waLink } from '../../data/contact';
import ProductDetails from '../../components/products/ProductDetails';
// import ProductDetails from './products/ProductDetails';
// import { ctaFor } from './products/Products';
// import { CATALOG, type CatalogProduct } from '../data/productCatalog';
// import { waLink } from '../data/contact';

// `match` is matched against the catalog product id/name (case-insensitive)
const appLinks = [
  { label: 'DailyGrades', match: 'dailygrades' },
  { label: 'Vertical Living CRM', match: 'vertical' },
  { label: 'CivilMind Pro', match: 'civilmind' },
  { label: 'BMB Warehouse', match: 'warehouse' },
  { label: 'BMB Leads', match: 'leads' },
  { label: 'PresenceScore', match: 'presence' },
  { label: 'BMB Kitchen', match: 'kitchen' },
  { label: 'BMB Logistics', match: 'logistics' },
];

const serviceLinks = [
  { label: 'BMB Exports', hash: '#services' },
  { label: 'BMB Digital Marketing', hash: '#services' },
  { label: 'BMB Content Creation', hash: '#services' },
  { label: 'Custom Software & SaaS', hash: '#services' },
  { label: 'AI & Automation', hash: '#services' },
  { label: 'Cloud, IT & AMC', hash: '#services' },
];

const companyHashLinks = [
  { label: 'About us', hash: '#about' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'FAQ', hash: '#faq' },
];

const companyRouteLinks = [
  { label: 'Careers', path: '/career' },
];

const companyContact = { label: 'Contact', hash: '#contact' };

const legalLinks = [
  { label: 'Privacy policy', path: '/privacy' },
  { label: 'Terms of use', path: '/terms' },
  { label: 'Cookie policy', path: '/cookies' },
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'App privacy', path: '/app-privacy' },
  { label: 'Refund policy', path: '/refund-cancellation-policy' },
  { label: 'HR section', path: '/hr-section' },
];

const socialLinks = [
  { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/build_my_busines?igsh=NTN4M2VobTlpbWw5' },
  { icon: 'fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/company/buildmybusines/posts/?feedView=all' },
  { icon: 'fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/919363964498' },
];

const headingCls = 'mb-7 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white';
const linkCls =
  'inline-block cursor-pointer text-left text-[15px] text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500';

const findProduct = (match: string): CatalogProduct | undefined =>
  CATALOG.find((p) => p.id.toLowerCase().includes(match) || p.name.toLowerCase().includes(match));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [active, setActive] = useState<CatalogProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const cta = active ? ctaFor(active) : null;

  const scrollToHash = (hash: string) => {
    const go = () => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    if (pathname === '/') go();
    else {
      navigate('/');
      setTimeout(go, 150); // wait for home page to mount
    }
  };

  const openApp = (match: string) => {
    const product = findProduct(match);
    if (!product) return scrollToHash('#products'); // fallback if not in catalog
    setActive(product);
    setIsOpen(true);
  };

  return (
    <footer className="bg-[#0a1433] pb-8 pt-16 text-white">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Build My Business logo" className="h-14 w-auto object-contain" />
              <b className="text-xl font-bold leading-[1.05] text-white">
                Build My<br />
                <span className="text-orange-500">Business</span>
              </b>
            </Link>
            <p className="mt-6 max-w-xs text-[17px] leading-relaxed text-slate-300">
              A suite of business apps and growth services from RAMS TECH CIRCLE OPC PVT. LTD., Chennai.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-orange-500"
                >
                  <i className={`fa-brands ${s.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Apps -> opens SideModal */}
          <div>
            <h3 className={headingCls}>Apps</h3>
            <ul className="space-y-4">
              {appLinks.map((a) => (
                <li key={a.label}>
                  <button type="button" onClick={() => openApp(a.match)} className={linkCls}>
                    {a.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Ventures */}
          <div>
            <h3 className={headingCls}>Services &amp; Ventures</h3>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <button type="button" onClick={() => scrollToHash(s.hash)} className={linkCls}>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={headingCls}>Company</h3>
            <ul className="space-y-4">
              {companyHashLinks.map((c) => (
                <li key={c.label}>
                  <button type="button" onClick={() => scrollToHash(c.hash)} className={linkCls}>
                    {c.label}
                  </button>
                </li>
              ))}
              {companyRouteLinks.map((c) => (
                <li key={c.label}>
                  <Link to={c.path} className={linkCls}>{c.label}</Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => scrollToHash(companyContact.hash)} className={linkCls}>
                  {companyContact.label}
                </button>
              </li>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className={headingCls}>Working Hours</h3>
            <ul className="space-y-3 text-[15px]">
              <li className="flex justify-between gap-4 text-slate-300">
                <span>Mon – Fri</span>
                <span>9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4 text-slate-300">
                <span>Sat – Sun</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[15px] text-slate-300 md:flex-row">
          <p>© {currentYear} Build My Business · RAMS TECH CIRCLE OPC PVT. LTD. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <p>All systems operational</p>
          </div>
        </div>
      </div>

      {/* Same SideModal logic as Products */}
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
              <button
                type="button"
                onClick={() => {
                  handleClose();
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
    </footer>
  );
};

export default Footer;