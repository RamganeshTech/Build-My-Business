// src/data/contact.ts
// Shared contact details (from the MD's HTML). Footer and contact section can reuse these.

export const CONTACT = {
  phone: '+91 93639 64498',
  whatsapp: '919363964498',
  email: 'ramstechcircle@gmail.com',
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;