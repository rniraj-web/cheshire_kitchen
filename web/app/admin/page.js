"use client";

import Link from "next/link";
import AdminGuard from "@/components/admin/AdminGuard";

const SECTIONS = [
  { href: "/admin/ranges", label: "Ranges", description: "Kitchen & bedroom brand ranges and photos" },
  { href: "/admin/gallery", label: "Project Gallery", description: "Completed project portfolio" },
  { href: "/admin/blog", label: "Inspiration Blog", description: "Blog posts" },
  { href: "/admin/enquiries", label: "Enquiries", description: "Contact form submissions" },
];

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      {() => (
        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="card block border border-black/5 bg-white p-6 no-underline"
            >
              <h2 className="text-lg">{section.label}</h2>
              <p className="mt-2 text-sm text-ink-muted">{section.description}</p>
            </Link>
          ))}
        </div>
      )}
    </AdminGuard>
  );
}
