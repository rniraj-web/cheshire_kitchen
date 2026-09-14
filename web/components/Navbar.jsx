"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/bedrooms", label: "Bedrooms" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/project-gallery", label: "Project Gallery" },
  { href: "/showroom", label: "Showroom" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Cheshire Kitchens home">
          <Image src="/logo.png" alt="Cheshire Kitchens & Bedrooms" width={170} height={65} priority />
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[15px] no-underline transition-colors ${
                    isActive ? "font-medium text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle tone="navbar" />

          <Link href="/showroom" className="btn-pill hidden bg-white text-navy hover:bg-white/90 lg:inline-flex">
            Enquire today
          </Link>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="block h-px w-6 bg-white"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-6 bg-white"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-px w-6 bg-white"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary"
            className="overflow-hidden bg-navy lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="container-wide flex flex-col py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base no-underline ${pathname === link.href ? "font-medium text-white" : "text-white/70"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/showroom"
                className="btn-pill mt-4 w-full bg-white text-navy hover:bg-white/90"
                onClick={() => setOpen(false)}
              >
                Enquire today
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
