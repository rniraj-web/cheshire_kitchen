"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handlePreferences = () => {
    // You can customize this to open a preferences modal or store "essential_only"
    localStorage.setItem("cookie_consent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10  px-4 py-4 text-ink shadow-2xl backdrop-blur-md sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Banner Text */}
        <p className="text-xs leading-relaxed text-ink md:text-sm">
          We use cookies to give you the best possible experience while you
          browse through our website. By continuing to use our website you agree
          to our use of cookies.{" "}
          <Link
            href="/cookies-policy"
            className="cursor-pointer font-medium text-link underline underline-offset-2 transition-colors"
          >
            Learn more
          </Link>
        </p>

        {/* Action Buttons */}
        <div className="flex w-full shrink-0 items-center justify-end gap-3 sm:w-auto">
          <button
            type="button"
            onClick={handleAccept}
            className="cursor-pointer w-full rounded-md text-ink px-5 py-2 text-sm font-semibold text-ink shadow-sm transition  sm:w-auto"
          >
            Accept All
          </button>

          <button
            type="button"
            onClick={handlePreferences}
            className="cursor-pointer w-full rounded-md border border-white/30 bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
          >
            Preferences
          </button>
        </div>
      </div>
    </aside>
  );
}
