// src/data/productCatalog.ts
import {
  Boxes, Cloud, Code, Gauge, GraduationCap, HardHat, Home, Megaphone, Ship, Sparkles,
  Truck, UtensilsCrossed, Users, Video, type LucideIcon,
} from 'lucide-react';
import heroLogo from '../assets/lmsimg.png';

// TODO: replace the shared logo with a per-product logo (set `logo` on each item below).
const SHARED_LOGO: string = heroLogo;

export type Kind = 'app' | 'service' | 'venture';
export type Status = 'live' | 'beta' | 'soon';
export type CategoryId = 'edu' | 'build' | 'sales' | 'ops' | 'food' | 'trade' | 'grow' | 'tech';

/** Tailwind default-palette classes, written in full so Tailwind can see them. */
export interface Accent {
  from: string;
  to: string;
  text: string;
  chip: string;
  step: string;
  badge: string;
}

const RED: Accent = { from: '#f43f5e', to: '#dc2626', text: 'text-red-600', chip: 'bg-red-50 text-red-900 ring-1 ring-inset ring-red-200', step: 'border-red-500 text-red-600', badge: 'bg-red-600 text-white' };
const ORANGE: Accent = { from: '#fb923c', to: '#ea580c', text: 'text-orange-600', chip: 'bg-orange-50 text-orange-900 ring-1 ring-inset ring-orange-200', step: 'border-orange-500 text-orange-600', badge: 'bg-orange-600 text-white' };
const PINK: Accent = { from: '#f472b6', to: '#be185d', text: 'text-pink-700', chip: 'bg-pink-50 text-pink-900 ring-1 ring-inset ring-pink-200', step: 'border-pink-500 text-pink-700', badge: 'bg-pink-600 text-white' };
const SKY: Accent = { from: '#38bdf8', to: '#0284c7', text: 'text-sky-700', chip: 'bg-sky-50 text-sky-900 ring-1 ring-inset ring-sky-200', step: 'border-sky-500 text-sky-700', badge: 'bg-sky-600 text-white' };
const EMERALD: Accent = { from: '#34d399', to: '#059669', text: 'text-emerald-700', chip: 'bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200', step: 'border-emerald-500 text-emerald-700', badge: 'bg-emerald-600 text-white' };
const TEAL: Accent = { from: '#2dd4bf', to: '#0f766e', text: 'text-teal-700', chip: 'bg-teal-50 text-teal-900 ring-1 ring-inset ring-teal-200', step: 'border-teal-500 text-teal-700', badge: 'bg-teal-600 text-white' };
const ROSE: Accent = { from: '#fb7185', to: '#e11d48', text: 'text-rose-600', chip: 'bg-rose-50 text-rose-900 ring-1 ring-inset ring-rose-200', step: 'border-rose-500 text-rose-600', badge: 'bg-rose-600 text-white' };
const INDIGO: Accent = { from: '#818cf8', to: '#4338ca', text: 'text-indigo-700', chip: 'bg-indigo-50 text-indigo-900 ring-1 ring-inset ring-indigo-200', step: 'border-indigo-500 text-indigo-700', badge: 'bg-indigo-600 text-white' };

export const CATEGORIES: Record<CategoryId, { name: string; accent: Accent }> = {
  edu: { name: 'Education', accent: RED },
  build: { name: 'Interiors & Construction', accent: ORANGE },
  sales: { name: 'Sales & Marketing', accent: PINK },
  ops: { name: 'Operations & Supply Chain', accent: SKY },
  food: { name: 'Food & Hospitality', accent: EMERALD },
  trade: { name: 'Trade & Exports', accent: TEAL },
  grow: { name: 'Growth Services', accent: ROSE },
  tech: { name: 'Technology Services', accent: INDIGO },
};

export const KIND_TABS: { id: Kind | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'app', label: 'Apps' },
  { id: 'service', label: 'Services' },
  { id: 'venture', label: 'Ventures' },
];

export interface CatalogProduct {
  id: string;
  name: string;
  kind: Kind;
  status?: Status;
  cat: CategoryId;
  category: string;
  tagline: string;
  forWho: string;
  icon: LucideIcon;
  accent: Accent;
  logo?: string;
  price?: string;
  priceNote?: string;
  flow: string[];
  modules: string[];
  advanced: string[];
}

export function badgeFor(p: CatalogProduct): { label: string; className: string } {
  if (p.kind === 'service') return { label: 'Service', className: 'bg-violet-100 text-violet-700' };
  if (p.kind === 'venture') return { label: 'Venture', className: 'bg-teal-100 text-teal-700' };
  if (p.status === 'soon') return { label: 'Early access', className: 'bg-amber-100 text-amber-700' };
  if (p.status === 'beta') return { label: 'Beta', className: 'bg-sky-100 text-sky-700' };
  return { label: 'Live', className: 'bg-green-100 text-green-700' };
}

type Input = Omit<CatalogProduct, 'category' | 'accent' | 'logo'>;
const item = (p: Input): CatalogProduct => ({
  ...p,
  category: CATEGORIES[p.cat].name,
  accent: CATEGORIES[p.cat].accent,
  logo: SHARED_LOGO, // TODO: per-product logo
});

// export const CATALOG: CatalogProduct[] = [
//   item({
//     id: 'dailygrades', name: 'DailyGrades', kind: 'app', status: 'live', cat: 'edu', icon: GraduationCap,
//     tagline: 'Classes, assignments and materials for teachers, students and parents in one school app.',
//     forWho: 'Schools, coaching centres and study circles',
//     flow: ['Classes', 'Assignments', 'Materials', 'Progress', 'Parent updates'],
//     modules: ['Teacher app', 'Student app', 'Parent app', 'Live classes', 'Recorded lessons', 'Assignments & homework', 'Classrooms & sections', 'Study materials library', 'Attendance', 'Timetable', 'Exams & online tests', 'Gradebook & report cards', 'Announcements & circulars', 'Parent–teacher messaging', 'School-branded app'],
//     advanced: ['Fee collection & reminders', 'Admissions & enquiry CRM', 'AI question-paper generator', 'Student performance analytics', 'School bus tracking', 'Multi-branch management', 'Role-based access control', 'Bulk WhatsApp & SMS alerts', 'Certificates & ID cards', 'Library management', 'Hostel management', 'Payment gateway integration'],
//   }),
//   item({
//     id: 'vertical-living-crm', name: 'Vertical Living CRM', kind: 'app', status: 'live', cat: 'build', icon: Home,
//     tagline: 'Run an interior or construction firm from first enquiry to final payment.',
//     forWho: 'Interior designers, modular kitchen firms and contractors',
//     flow: ['Leads', 'Quotation', 'Projects', 'Site execution', 'Payments'],
//     modules: ['Lead pipeline', 'Site-visit scheduling', 'Requirement capture', 'Quotation & BOQ builder', 'Design approvals', 'Project tracker', 'Task & milestone board', 'Site updates with photos', 'Workforce management', 'Vendor management', 'Material requests', 'Design budget', 'Payment milestones', 'Invoices & receipts', 'Client portal'],
//     advanced: ['Design file versioning (2D/3D)', 'Modular kitchen & wardrobe configurator', 'Cut-list export for the factory', 'Purchase orders', 'Snag list & handover checklist', 'Warranty & AMC tracking', 'Profit per project', 'Architect commission tracking', 'Multi-studio dashboard', 'WhatsApp updates to clients', 'E-signature on quotations'],
//   }),
//   item({
//     id: 'civilmind-pro', name: 'CivilMind Pro', kind: 'app', status: 'live', cat: 'build', icon: HardHat,
//     tagline: 'Civil project management and site execution, built for Indian construction.',
//     forWho: 'Builders, civil contractors and project managers',
//     flow: ['Plan', 'Schedule', 'SiteOps', 'Materials', 'Billing'],
//     modules: ['Project planning', 'BOQ & estimation', 'Gantt schedule', 'SiteOps daily progress reports', 'Labour attendance', 'Material indents', 'Site stock register', 'Subcontractor management', 'Equipment log', 'Drawings & documents', 'Quality checklists', 'Safety checklists', 'RA billing', 'Client approvals'],
//     advanced: ['Budget vs actual cost control', 'Work-order management', 'Cash-flow forecasting', 'Geo-tagged photo updates', 'Multi-project portfolio dashboard', 'Vendor rate comparison', 'Change-order management', 'Retention & advance tracking', 'Offline mobile mode for sites', 'Delay analysis', 'Purchase approval workflows'],
//   }),
//   item({
//     id: 'bmb-warehouse', name: 'BMB Warehouse', kind: 'app', status: 'live', cat: 'ops', icon: Boxes,
//     tagline: 'Inventory, warehouse and material operations with real-time stock visibility.',
//     forWho: 'Warehouses, distributors, 3PLs and material stores',
//     flow: ['Inward', 'Put-away', 'Stock', 'Pick & pack', 'Dispatch'],
//     modules: ['Goods inward (GRN)', 'Barcode & QR labels', 'Bin & rack locations', 'Put-away', 'Stock ledger', 'Batch & expiry tracking', 'Pick lists', 'Pack & dispatch', 'Stock transfers', 'Cycle counts', 'Low-stock alerts', 'Returns management', 'Stock reports'],
//     advanced: ['Multi-warehouse control', 'Serial-number tracking', 'FIFO / FEFO rules', 'Wave & zone picking', 'Handheld scanner app', '3PL client storage billing', 'Space utilisation', 'Dock scheduling', 'E-way bill & GST invoicing', 'E-commerce & ERP integration', 'Kitting & assembly', 'Full audit trail'],
//   }),
//   item({
//     id: 'bmb-leads', name: 'BMB Leads', kind: 'app', status: 'live', cat: 'sales', icon: Users,
//     tagline: 'Capture every enquiry, assign it fast and follow up until it converts.',
//     forWho: 'Sales teams and any business that runs on enquiries',
//     flow: ['Capture', 'Assign', 'Follow up', 'Convert'],
//     modules: ['Meta & Google ad lead capture', 'Website & landing-page forms', 'WhatsApp & call leads', 'Duplicate detection', 'Auto-assignment rules', 'Follow-up reminders', 'Kanban pipeline', 'Call & note logging', 'WhatsApp templates', 'Quotations', 'Lead source reports', 'Team performance reports'],
//     advanced: ['Lead scoring', 'Round-robin & territory routing', 'Automated WhatsApp & email sequences', 'Click-to-call with call recording', 'Alerts for uncontacted leads', 'Missed-call lead capture', 'Ad ROI by campaign', 'Custom fields & stages', 'Field-sales mobile app', 'Bulk import', 'API & webhooks', 'Conversion sync back to Meta & Google'],
//   }),
//   item({
//     id: 'presencescore', name: 'PresenceScore', kind: 'app', status: 'live', cat: 'sales', icon: Gauge,
//     tagline: 'See how strong your business looks online, and exactly what to fix first.',
//     forWho: 'Local businesses, clinics, schools and retailers',
//     flow: ['Scan', 'Score', 'Fix list', 'Track'],
//     modules: ['Google Business Profile audit', 'Website speed & SEO check', 'Social profile check', 'Reviews & ratings analysis', 'Name, address & phone consistency', 'Competitor comparison', 'Overall presence score', 'Priority fix list', 'Monthly tracking', 'Shareable PDF report'],
//     advanced: ['Keyword ranking tracker', 'Local map-pack position grid', 'Review request campaigns', 'AI review-reply suggestions', 'Multi-location scoring', 'White-label agency reports', 'Schema & technical SEO checks', 'Local citation builder', 'Alerts when the score drops', 'Industry benchmarks'],
//   }),
//   item({
//     id: 'bmb-kitchen', name: 'BMB Kitchen', kind: 'app', status: 'live', cat: 'food', icon: UtensilsCrossed,
//     tagline: 'Restaurant billing, kitchen orders and stock in one point-of-sale system.',
//     forWho: 'Restaurants, cafés, cloud kitchens and QSRs',
//     flow: ['Order', 'KOT', 'Billing', 'Inventory', 'Reports'],
//     modules: ['POS billing', 'Table management', 'Kitchen order tickets (KOT)', 'Menu & modifiers', 'Dine-in, takeaway & delivery', 'Split & merge bills', 'Discounts & coupons', 'GST billing', 'Cash, UPI & card payments', 'Inventory & recipes', 'Daily sales reports', 'Staff logins'],
//     advanced: ['Kitchen display system', 'QR table ordering', 'Food-aggregator order sync', 'Captain / waiter app', 'Recipe costing & wastage', 'Purchase & vendor management', 'Multi-outlet & central kitchen', 'Loyalty & customer CRM', 'Shift & cash reconciliation', 'Table reservations', 'Customer feedback', 'Owner dashboard app'],
//   }),
//   item({
//     id: 'bmb-logistics', name: 'BMB Logistics', kind: 'app', status: 'soon', cat: 'ops', icon: Truck,
//     tagline: 'Bookings, dispatch and delivery tracking for goods on the move.',
//     forWho: 'Transporters, distributors and delivery operators',
//     flow: ['Booking', 'Dispatch', 'Tracking', 'Proof of delivery'],
//     modules: ['Booking desk', 'Rate cards & quotes', 'Consignment notes (LR)', 'Vehicle & driver allocation', 'Trip planning', 'Live trip tracking', 'Proof of delivery (photo & OTP)', 'Freight billing', 'Trip expenses (fuel, tolls)', 'Customer notifications', 'Delivery reports'],
//     advanced: ['Route optimisation', 'GPS device integration', 'Driver mobile app', 'E-way bill generation', 'Vehicle maintenance & documents', 'Fleet utilisation', 'Multi-branch hubs', 'Hired / partner vehicle management', 'Cash-on-delivery reconciliation', 'Customer tracking portal', 'Delay & exception alerts'],
//   }),
//   item({
//     id: 'bmb-exports', name: 'BMB Exports', kind: 'venture', status: 'live', cat: 'trade', icon: Ship,
//     tagline: 'Agricultural exports from India to Dubai and beyond, sourced and shipped by BMB.',
//     forWho: 'Importers, wholesalers and retail buyers',
//     flow: ['Enquiry', 'Sourcing', 'Quality check', 'Shipping', 'Delivery'],
//     modules: ['Agri product sourcing', 'Supplier & farm network', 'Quality checks & grading', 'Export packaging', 'Export documentation', 'Freight & shipping', 'India & Dubai operations', 'Buyer support'],
//     advanced: ['Private-label packing', 'Certification support', 'Cold-chain coordination', 'Sample shipments', 'Trade-finance assistance', 'Shipment tracking updates'],
//   }),
//   item({
//     id: 'digital-marketing', name: 'BMB Digital Marketing', kind: 'service', cat: 'grow', icon: Megaphone,
//     tagline: 'Meta ads, Google ads and SEO packages priced for Indian businesses.',
//     forWho: 'Businesses that want more leads, walk-ins or online sales',
//     flow: ['Audit', 'Set-up', 'Campaigns', 'Optimise', 'Report'],
//     modules: ['Meta ads', 'Google Search ads', 'Performance Max', 'YouTube ads', 'Local SEO', 'On-page SEO', 'Google Business Profile optimisation', 'Pixel / GTM / GA4 tracking', 'Landing pages', 'Creatives & ad copy', 'Monthly reports'],
//     advanced: ['Conversions API (server-side tracking)', 'Enhanced conversions', 'Remarketing audiences', 'A/B testing', 'Lead-quality feedback from your CRM', 'WhatsApp click-to-chat ads', 'Shopping & Merchant Center', 'Competitor ad research', 'Live reporting dashboards', 'Conversion-rate audits'],
//   }),
//   item({
//     id: 'content-creation', name: 'BMB Content Creation', kind: 'service', cat: 'grow', icon: Video,
//     tagline: 'Ad shoots, reels, product videos and posters that make your ads work.',
//     forWho: 'Brands, real estate, interiors, restaurants and schools',
//     flow: ['Brief', 'Script', 'Shoot', 'Edit', 'Deliver'],
//     modules: ['Ad film shoots', 'Reels & shorts', 'Product videos', 'Testimonial videos', 'Posters & creatives', 'Scriptwriting', 'Voice-over', 'Editing & motion graphics', 'Brand identity', 'Social media calendars'],
//     advanced: ['Drone shoots', 'Product photography', 'Studio & model coordination', '3D product renders', 'Animated explainers', 'Podcast production', 'UGC-style ads', 'Multi-language versions', 'Brand guidelines'],
//   }),
//   item({
//     id: 'custom-software', name: 'Custom Software & SaaS', kind: 'service', cat: 'tech', icon: Code,
//     tagline: 'Custom software, SaaS products, mobile apps and websites built by our in-house team.',
//     forWho: 'Businesses with workflows no off-the-shelf tool fits',
//     flow: ['Discover', 'Design', 'Build', 'Launch', 'Support'],
//     modules: ['Custom software', 'SaaS product development', 'Android & iOS apps', 'Web design & development', 'CRM / ERP systems', 'Industry-specific platforms', 'Admin dashboards', 'Payment integrations', 'API development', 'UI/UX design'],
//     advanced: ['Multi-tenant SaaS architecture', 'Subscription billing', 'Offline-first mobile apps', 'Legacy system migration', 'Third-party integrations', 'QA & automated testing', 'Performance & security audits', 'Maintenance & AMC'],
//   }),
//   item({
//     id: 'ai-automation', name: 'AI & Automation', kind: 'service', cat: 'tech', icon: Sparkles,
//     tagline: 'AI chatbots, workflow automation and dashboards that cut manual work.',
//     forWho: 'Teams buried in repetitive work and spreadsheets',
//     flow: ['Map process', 'Automate', 'Measure'],
//     modules: ['Website & WhatsApp AI chatbots', 'Business process automation', 'Analytics dashboards & MIS', 'Document data extraction', 'Automated reports', 'Approval workflows'],
//     advanced: ['AI agents for sales follow-up', 'Voice bots', 'Q&A on your own documents', 'Forecasting models', 'Invoice & receipt reading (OCR)', 'Review & feedback sentiment analysis', 'Google Sheets & ERP integrations', 'Private AI deployments'],
//   }),
//   item({
//     id: 'cloud-it', name: 'Cloud, IT & AMC', kind: 'service', cat: 'tech', icon: Cloud,
//     tagline: 'IT infrastructure, cloud and DevOps, security, and ongoing managed support.',
//     forWho: 'Schools, offices and SMEs',
//     flow: ['Assess', 'Set up', 'Secure', 'Maintain'],
//     modules: ['IT infrastructure set-up', 'Networking & Wi-Fi', 'Cloud deployment & DevOps', 'Email & domain set-up', 'Backups', 'Cybersecurity', 'AMC & managed support', 'Hardware procurement'],
//     advanced: ['CCTV & access control', 'Firewall & VPN', 'CI/CD pipelines', 'Server monitoring & uptime alerts', 'Disaster recovery', 'Smart classrooms for schools', 'Google Workspace & Microsoft 365 admin', 'Security audits'],
//   }),
// ];



export const CATALOG: CatalogProduct[] = [
    item({
        id: 'dailygrades',
        name: 'DailyGrades',
        kind: 'app',
        status: 'live',
        cat: 'edu',
        icon: GraduationCap,
        tagline: 'Classes, assignments and materials for teachers, students and parents in one school app.',
        forWho: 'Schools, coaching centres and study circles',
        flow: ['Classes', 'Assignments', 'Materials', 'Progress', 'Parent updates'],
        modules: ['Teacher app', 'Student app', 'Parent app', 'Live classes', 'Recorded lessons', 'Assignments & homework', 'Classrooms & sections', 'Study materials library', 'Attendance', 'Timetable', 'Exams & online tests', 'Gradebook & report cards', 'Announcements & circulars', 'Parent–teacher messaging', 'School-branded app'],
        advanced: ['Fee collection & reminders', 'Admissions & enquiry CRM', 'AI question-paper generator', 'Student performance analytics', 'School bus tracking', 'Multi-branch management', 'Role-based access control', 'Bulk WhatsApp & SMS alerts', 'Certificates & ID cards', 'Library management', 'Hostel management', 'Payment gateway integration'],
    }),
    item({
        id: 'vertical-living-crm',
        name: 'Vertical Living CRM',
        kind: 'app',
        status: 'live',
        cat: 'build',
        icon: Home,
        tagline: 'Run an interior or construction firm from first enquiry to final payment.',
        forWho: 'Interior designers, modular kitchen firms and contractors',
        flow: ['Leads', 'Quotation', 'Projects', 'Site execution', 'Payments'],
        modules: ['Lead pipeline', 'Site-visit scheduling', 'Requirement capture', 'Quotation & BOQ builder', 'Design approvals', 'Project tracker', 'Task & milestone board', 'Site updates with photos', 'Workforce management', 'Vendor management', 'Material requests', 'Design budget', 'Payment milestones', 'Invoices & receipts', 'Client portal'],
        advanced: ['Design file versioning (2D/3D)', 'Modular kitchen & wardrobe configurator', 'Cut-list export for the factory', 'Purchase orders', 'Snag list & handover checklist', 'Warranty & AMC tracking', 'Profit per project', 'Architect commission tracking', 'Multi-studio dashboard', 'WhatsApp updates to clients', 'E-signature on quotations'],
    }),
    item({
        id: 'civilmind-pro',
        name: 'CivilMind Pro',
        kind: 'app',
        status: 'live',
        cat: 'build',
        icon: HardHat,
        tagline: 'Civil project management and site execution, built for Indian construction.',
        forWho: 'Builders, civil contractors and project managers',
        flow: ['Plan', 'Schedule', 'SiteOps', 'Materials', 'Billing'],
        modules: ['Project planning', 'BOQ & estimation', 'Gantt schedule', 'SiteOps daily progress reports', 'Labour attendance', 'Material indents', 'Site stock register', 'Subcontractor management', 'Equipment log', 'Drawings & documents', 'Quality checklists', 'Safety checklists', 'RA billing', 'Client approvals'],
        advanced: ['Budget vs actual cost control', 'Work-order management', 'Cash-flow forecasting', 'Geo-tagged photo updates', 'Multi-project portfolio dashboard', 'Vendor rate comparison', 'Change-order management', 'Retention & advance tracking', 'Offline mobile mode for sites', 'Delay analysis', 'Purchase approval workflows'],
    }),
    item({
        id: 'bmb-warehouse',
        name: 'BMB Warehouse',
        kind: 'app',
        status: 'live',
        cat: 'ops',
        icon: Boxes,
        tagline: 'Inventory, warehouse and material operations with real-time stock visibility.',
        forWho: 'Warehouses, distributors, 3PLs and material stores',
        flow: ['Inward', 'Put-away', 'Stock', 'Pick & pack', 'Dispatch'],
        modules: ['Goods inward (GRN)', 'Barcode & QR labels', 'Bin & rack locations', 'Put-away', 'Stock ledger', 'Batch & expiry tracking', 'Pick lists', 'Pack & dispatch', 'Stock transfers', 'Cycle counts', 'Low-stock alerts', 'Returns management', 'Stock reports'],
        advanced: ['Multi-warehouse control', 'Serial-number tracking', 'FIFO / FEFO rules', 'Wave & zone picking', 'Handheld scanner app', '3PL client storage billing', 'Space utilisation', 'Dock scheduling', 'E-way bill & GST invoicing', 'E-commerce & ERP integration', 'Kitting & assembly', 'Full audit trail'],
    }),
    item({
        id: 'bmb-leads',
        name: 'BMB Leads',
        kind: 'app',
        status: 'live',
        cat: 'sales',
        icon: Users,
        tagline: 'Capture every enquiry, assign it fast and follow up until it converts.',
        forWho: 'Sales teams and any business that runs on enquiries',
        flow: ['Capture', 'Assign', 'Follow up', 'Convert'],
        modules: ['Meta & Google ad lead capture', 'Website & landing-page forms', 'WhatsApp & call leads', 'Duplicate detection', 'Auto-assignment rules', 'Follow-up reminders', 'Kanban pipeline', 'Call & note logging', 'WhatsApp templates', 'Quotations', 'Lead source reports', 'Team performance reports'],
        advanced: ['Lead scoring', 'Round-robin & territory routing', 'Automated WhatsApp & email sequences', 'Click-to-call with call recording', 'Alerts for uncontacted leads', 'Missed-call lead capture', 'Ad ROI by campaign', 'Custom fields & stages', 'Field-sales mobile app', 'Bulk import', 'API & webhooks', 'Conversion sync back to Meta & Google'],
    }),
    item({
        id: 'presencescore',
        name: 'PresenceScore',
        kind: 'app',
        status: 'live',
        cat: 'sales',
        icon: Gauge,
        tagline: 'See how strong your business looks online, and exactly what to fix first.',
        forWho: 'Local businesses, clinics, schools and retailers',
        flow: ['Scan', 'Score', 'Fix list', 'Track'],
        modules: ['Google Business Profile audit', 'Website speed & SEO check', 'Social profile check', 'Reviews & ratings analysis', 'Name, address & phone consistency', 'Competitor comparison', 'Overall presence score', 'Priority fix list', 'Monthly tracking', 'Shareable PDF report'],
        advanced: ['Keyword ranking tracker', 'Local map-pack position grid', 'Review request campaigns', 'AI review-reply suggestions', 'Multi-location scoring', 'White-label agency reports', 'Schema & technical SEO checks', 'Local citation builder', 'Alerts when the score drops', 'Industry benchmarks'],
    }),
    item({
        id: 'bmb-kitchen',
        name: 'BMB Kitchen',
        kind: 'app',
        status: 'live',
        cat: 'food',
        icon: UtensilsCrossed,
        tagline: 'Restaurant billing, kitchen orders and stock in one point-of-sale system.',
        forWho: 'Restaurants, cafés, cloud kitchens and QSRs',
        flow: ['Order', 'KOT', 'Billing', 'Inventory', 'Reports'],
        modules: ['POS billing', 'Table management', 'Kitchen order tickets (KOT)', 'Menu & modifiers', 'Dine-in, takeaway & delivery', 'Split & merge bills', 'Discounts & coupons', 'GST billing', 'Cash, UPI & card payments', 'Inventory & recipes', 'Daily sales reports', 'Staff logins'],
        advanced: ['Kitchen display system', 'QR table ordering', 'Food-aggregator order sync', 'Captain / waiter app', 'Recipe costing & wastage', 'Purchase & vendor management', 'Multi-outlet & central kitchen', 'Loyalty & customer CRM', 'Shift & cash reconciliation', 'Table reservations', 'Customer feedback', 'Owner dashboard app'],
    }),
    item({
        id: 'bmb-logistics',
        name: 'BMB Logistics',
        kind: 'app',
        status: 'soon',
        cat: 'ops',
        icon: Truck,
        tagline: 'Bookings, dispatch and delivery tracking for goods on the move.',
        forWho: 'Transporters, distributors and delivery operators',
        flow: ['Booking', 'Dispatch', 'Tracking', 'Proof of delivery'],
        modules: ['Booking desk', 'Rate cards & quotes', 'Consignment notes (LR)', 'Vehicle & driver allocation', 'Trip planning', 'Live trip tracking', 'Proof of delivery (photo & OTP)', 'Freight billing', 'Trip expenses (fuel, tolls)', 'Customer notifications', 'Delivery reports'],
        advanced: ['Route optimisation', 'GPS device integration', 'Driver mobile app', 'E-way bill generation', 'Vehicle maintenance & documents', 'Fleet utilisation', 'Multi-branch hubs', 'Hired / partner vehicle management', 'Cash-on-delivery reconciliation', 'Customer tracking portal', 'Delay & exception alerts'],
    }),
    item({
        id: 'bmb-exports',
        name: 'BMB Exports',
        kind: 'venture',
        status: 'live',
        cat: 'trade',
        icon: Ship,
        tagline: 'Agricultural exports from India to Dubai and beyond, sourced and shipped by BMB.',
        forWho: 'Importers, wholesalers and retail buyers',
        flow: ['Enquiry', 'Sourcing', 'Quality check', 'Shipping', 'Delivery'],
        modules: ['Agri product sourcing', 'Supplier & farm network', 'Quality checks & grading', 'Export packaging', 'Export documentation', 'Freight & shipping', 'India & Dubai operations', 'Buyer support'],
        advanced: ['Private-label packing', 'Certification support', 'Cold-chain coordination', 'Sample shipments', 'Trade-finance assistance', 'Shipment tracking updates'],
    }),
    item({
        id: 'digital-marketing',
        name: 'BMB Digital Marketing',
        kind: 'service',
        status: 'live',
        cat: 'grow',
        icon: Megaphone,
        tagline: 'Meta ads, Google ads and SEO packages priced for Indian businesses.',
        forWho: 'Businesses that want more leads, walk-ins or online sales',
        flow: ['Audit', 'Set-up', 'Campaigns', 'Optimise', 'Report'],
        modules: ['Meta ads', 'Google Search ads', 'Performance Max', 'YouTube ads', 'Local SEO', 'On-page SEO', 'Google Business Profile optimisation', 'Pixel / GTM / GA4 tracking', 'Landing pages', 'Creatives & ad copy', 'Monthly reports'],
        advanced: ['Conversions API (server-side tracking)', 'Enhanced conversions', 'Remarketing audiences', 'A/B testing', 'Lead-quality feedback from your CRM', 'WhatsApp click-to-chat ads', 'Shopping & Merchant Center', 'Competitor ad research', 'Live reporting dashboards', 'Conversion-rate audits'],
        price: '₹2,999',
        priceNote: 'Meta Basic set-up kit',
    }),
    item({
        id: 'content-creation',
        name: 'BMB Content Creation',
        kind: 'service',
        status: 'live',
        cat: 'grow',
        icon: Video,
        tagline: 'Ad shoots, reels, product videos and posters that make your ads work.',
        forWho: 'Brands, real estate, interiors, restaurants and schools',
        flow: ['Brief', 'Script', 'Shoot', 'Edit', 'Deliver'],
        modules: ['Ad film shoots', 'Reels & shorts', 'Product videos', 'Testimonial videos', 'Posters & creatives', 'Scriptwriting', 'Voice-over', 'Editing & motion graphics', 'Brand identity', 'Social media calendars'],
        advanced: ['Drone shoots', 'Product photography', 'Studio & model coordination', '3D product renders', 'Animated explainers', 'Podcast production', 'UGC-style ads', 'Multi-language versions', 'Brand guidelines'],
        price: '₹17,999',
        priceNote: 'per content pack',
    }),
    item({
        id: 'custom-software',
        name: 'Custom Software & SaaS',
        kind: 'service',
        status: 'live',
        cat: 'tech',
        icon: Code,
        tagline: 'Custom software, SaaS products, mobile apps and websites built by our in-house team.',
        forWho: 'Businesses with workflows no off-the-shelf tool fits',
        flow: ['Discover', 'Design', 'Build', 'Launch', 'Support'],
        modules: ['Custom software', 'SaaS product development', 'Android & iOS apps', 'Web design & development', 'CRM / ERP systems', 'Industry-specific platforms', 'Admin dashboards', 'Payment integrations', 'API development', 'UI/UX design'],
        advanced: ['Multi-tenant SaaS architecture', 'Subscription billing', 'Offline-first mobile apps', 'Legacy system migration', 'Third-party integrations', 'QA & automated testing', 'Performance & security audits', 'Maintenance & AMC'],
    }),
    item({
        id: 'ai-automation',
        name: 'AI & Automation',
        kind: 'service',
        status: 'live',
        cat: 'tech',
        icon: Sparkles,
        tagline: 'AI chatbots, workflow automation and dashboards that cut manual work.',
        forWho: 'Teams buried in repetitive work and spreadsheets',
        flow: ['Map process', 'Automate', 'Measure'],
        modules: ['Website & WhatsApp AI chatbots', 'Business process automation', 'Analytics dashboards & MIS', 'Document data extraction', 'Automated reports', 'Approval workflows'],
        advanced: ['AI agents for sales follow-up', 'Voice bots', 'Q&A on your own documents', 'Forecasting models', 'Invoice & receipt reading (OCR)', 'Review & feedback sentiment analysis', 'Google Sheets & ERP integrations', 'Private AI deployments'],
    }),
    item({
        id: 'cloud-it',
        name: 'Cloud, IT & AMC',
        kind: 'service',
        status: 'live',
        cat: 'tech',
        icon: Cloud,
        tagline: 'IT infrastructure, cloud and DevOps, security, and ongoing managed support.',
        forWho: 'Schools, offices and SMEs',
        flow: ['Assess', 'Set up', 'Secure', 'Maintain'],
        modules: ['IT infrastructure set-up', 'Networking & Wi-Fi', 'Cloud deployment & DevOps', 'Email & domain set-up', 'Backups', 'Cybersecurity', 'AMC & managed support', 'Hardware procurement'],
        advanced: ['CCTV & access control', 'Firewall & VPN', 'CI/CD pipelines', 'Server monitoring & uptime alerts', 'Disaster recovery', 'Smart classrooms for schools', 'Google Workspace & Microsoft 365 admin', 'Security audits'],
    }),
];


export function matchesQuery(p: CatalogProduct, q: string): boolean {
  if (!q) return true;
  return [p.name, p.tagline, p.forWho, p.category, ...p.flow, ...p.modules, ...p.advanced]
    .join(' ')
    .toLowerCase()
    .includes(q);
}