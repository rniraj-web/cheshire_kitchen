// Centralized business details. Swap the placeholders below for the real
// phone/WhatsApp numbers and brand colour once confirmed - nothing else in
// the codebase needs to change.

export const SITE_NAME = "Cheshire Kitchens";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const BUSINESS = {
  name: "Cheshire Kitchens & Bedrooms",
  foundedYear: 1976,
  addressLine1: "83-91 London Rd",
  addressLine2: "Hazel Grove, Stockport",
  addressLine3: "Cheshire, SK7 4AX",
  // TODO: replace with the real showroom phone number.s
  phoneDisplay: "0161 456 4188",
  phoneHref: "tel:+440161 456 4188",
  // TODO: replace with the real WhatsApp number (international format, digits only).
  // whatsappNumber: "447700900000",
  // whatsappMessage:
  //   "Hello Cheshire Kitchens, I'd like to talk about my project.",
  email: "info@cheshirekitchens.co.uk",
  emailHref: "mailto:info@cheshirekitchens.co.uk",
  hours: [
    ["Monday - Saturday", "9:00 – 17:30"],
    ["Sunday", "Closed"],
  ],
};

export function whatsappHref(message = BUSINESS.whatsappMessage) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CURRENT_YEAR_FOR_ANNIVERSARY = 2026;
export const YEARS_TRADING =
  CURRENT_YEAR_FOR_ANNIVERSARY - BUSINESS.foundedYear;
