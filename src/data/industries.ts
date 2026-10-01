// src/data/industries.ts
import { Boxes, Gauge, GraduationCap, HardHat, Home, Ship, Sparkles, UtensilsCrossed, type LucideIcon } from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  /** Product ids from productCatalog.ts */
  productIds: string[];
}

export const INDUSTRIES: Industry[] = [
  { id: 'schools', name: 'Schools & coaching', icon: GraduationCap, desc: 'Run classes, keep parents informed and fill admissions.', productIds: ['dailygrades', 'bmb-leads', 'presencescore', 'digital-marketing', 'content-creation', 'cloud-it'] },
  { id: 'interiors', name: 'Interiors', icon: Home, desc: 'From enquiry to handover, with marketing that brings the enquiries.', productIds: ['vertical-living-crm', 'bmb-leads', 'digital-marketing', 'content-creation'] },
  { id: 'construction', name: 'Construction', icon: HardHat, desc: 'Plan, execute and bill civil projects with control over materials.', productIds: ['civilmind-pro', 'bmb-warehouse', 'bmb-leads', 'custom-software'] },
  { id: 'restaurants', name: 'Restaurants & cafés', icon: UtensilsCrossed, desc: 'Faster billing, tighter stock and a busier dining room.', productIds: ['bmb-kitchen', 'presencescore', 'digital-marketing', 'content-creation'] },
  { id: 'warehousing', name: 'Warehousing & logistics', icon: Boxes, desc: 'Know your stock and track every shipment out the door.', productIds: ['bmb-warehouse', 'bmb-logistics', 'ai-automation', 'cloud-it'] },
  { id: 'exporters', name: 'Exporters & traders', icon: Ship, desc: 'Source, store and move goods across borders.', productIds: ['bmb-exports', 'bmb-warehouse', 'bmb-logistics'] },
  { id: 'local', name: 'Local businesses', icon: Gauge, desc: 'Show up on Google, capture every lead and follow up on time.', productIds: ['presencescore', 'bmb-leads', 'digital-marketing', 'content-creation'] },
  { id: 'custom', name: 'Something else?', icon: Sparkles, desc: 'We build custom software when no product fits your workflow.', productIds: ['custom-software', 'ai-automation', 'cloud-it'] },
];