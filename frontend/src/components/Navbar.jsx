import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Cheshire Kitchens Logo Transparent Background.png";

const LINKS = [
  { to: "/AboutUs", label: "AboutUs" },
  { to: "/kitchens", label: "Kitchens" },
  { to: "/bedrooms", label: "Bedrooms" },
  { to: "/inspiration", label: "Inspiration" },
  { to: "/project-gallery", label: "Project Gallery" },
  { to: "/showroom", label: "Showroom" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide2 transition-colors duration-150 ${
      isActive ? "text-brass" : "text-ink hover:text-brass"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-stone-500 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(31,46,35,0.12)]" : ""
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        {/* Links: left */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle sits on the left, same side as the nav it controls */}
        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        {/* Logo: right */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          {/* <span className="font-display text-2xl leading-none text-ink">
            Cheshire
          </span>
          <span className="font-display text-2xl leading-none text-brass italic">
            Kitchens
          </span> */}
          <img src={logo} className="w-40" alt="Cheshire Kitchen Logo" />
        </NavLink>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-ink-100 bg-stone-50 lg:hidden">
          <div className="container-wide flex flex-col py-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-3 text-base ${isActive ? "text-brass" : "text-ink"}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
