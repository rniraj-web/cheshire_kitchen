// Centralized business details. Swap the placeholders below for the real
// phone/WhatsApp numbers and brand colour once confirmed — nothing else in
// the codebase needs to change.

export const SITE_NAME = "Cheshire Kitchens";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const BUSINESS = {
  name: "Cheshire Kitchens & Bedrooms",
  foundedYear: 1976,
  addressLine1: "83-91 London Road",
  addressLine2: "Hazel Grove, Stockport, Cheshire, SK7 4AX",
  // TODO: replace with the real showroom phone number.
  phoneDisplay: "0161 929 0000",
  phoneHref: "tel:+441619290000",
  // TODO: replace with the real WhatsApp number (international format, digits only).
  whatsappNumber: "447700900000",
  whatsappMessage: "Hello Cheshire Kitchens, I'd like to talk about my project.",
  hours: [
    ["Monday – Friday", "9:00 – 17:30"],
    ["Saturday", "10:00 – 16:00"],
    ["Sunday", "Closed"],
  ],
};

export function whatsappHref(message = BUSINESS.whatsappMessage) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CURRENT_YEAR_FOR_ANNIVERSARY = 2026;
export const YEARS_TRADING = CURRENT_YEAR_FOR_ANNIVERSARY - BUSINESS.foundedYear;
