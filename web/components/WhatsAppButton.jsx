import { whatsappHref } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cheshire Kitchens on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.36 4 14.96c0 2.36.67 4.56 1.83 6.44L4 29l7.8-1.78a12.9 12.9 0 0 0 4.22.7C22.64 27.92 28 22.56 28 15.96 28 9.36 22.64 3 16.02 3Zm0 23.13c-1.5 0-2.92-.4-4.15-1.1l-.3-.17-4.63 1.06 1.07-4.5-.2-.3a10.15 10.15 0 0 1-1.6-5.16c0-5.6 4.6-10.15 10.24-10.15 5.63 0 10.22 4.55 10.22 10.15 0 5.6-4.6 10.17-10.65 10.17Zm5.6-7.6c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.96 1.2-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.47.13-.62.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.94-2.26-.25-.6-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.44-.07-.14-.27-.22-.57-.37Z" />
      </svg>
    </a>
  );
}
