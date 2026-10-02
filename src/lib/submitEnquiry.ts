// src/lib/submitEnquiry.ts
export type Enquiry = {
  name: string;
  phone: string; // normalised, e.g. +919363964498
  businessName: string;
  interestedIn: string;
  message: string;
};

// Filled in later when the Google Sheet endpoint is ready (.env: VITE_ENQUIRY_ENDPOINT=...)
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined;

export async function submitEnquiry(enquiry: Enquiry): Promise<void> {
  if (!ENDPOINT) {
    // Local development: just log it so the whole UI flow can be tested.
    if (import.meta.env.DEV) {
      console.info('[BMB enquiry]', enquiry);
      return;
    }
    // Production without an endpoint: fail honestly instead of pretending it was sent.
    throw new Error('Enquiry endpoint is not configured');
  }

  await fetch(ENDPOINT, {
    method: 'POST',
    mode: 'no-cors', // Apps Script web apps don't send CORS headers
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      ...enquiry,
      submittedAt: new Date().toISOString(),
      page: window.location.href,
    }),
  });
}