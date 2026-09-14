import Link from "next/link";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/ranges", label: "Ranges" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/enquiries", label: "Enquiries" },
];

export default function AdminNav({ onLogout }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
      <nav aria-label="Admin" className="flex flex-wrap gap-6 text-sm">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="no-underline">
            {link.label}
          </Link>
        ))}
      </nav>
      <button type="button" onClick={onLogout} className="text-sm text-ink-muted">
        Log out
      </button>
    </div>
  );
}
