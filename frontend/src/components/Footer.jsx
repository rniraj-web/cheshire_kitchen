import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-stone-100">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-2xl">
            Cheshire <span className="italic text-brass-light">Kitchens</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-100">
            Handcrafted kitchens and bedrooms, designed with you and built by
            us, in our own Cheshire workshop.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-wide2 text-brass-light">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/why-cheshire-kitchens"
                className="hover:text-brass-light"
              >
                Why Cheshire Kitchens
              </Link>
            </li>
            <li>
              <Link to="/kitchens" className="hover:text-brass-light">
                Kitchens
              </Link>
            </li>
            <li>
              <Link to="/bedrooms" className="hover:text-brass-light">
                Bedrooms
              </Link>
            </li>
            <li>
              <Link to="/inspiration" className="hover:text-brass-light">
                Inspiration
              </Link>
            </li>
            <li>
              <Link to="/project-gallery" className="hover:text-brass-light">
                Project Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-wide2 text-brass-light">
            Visit the showroom
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-100">
            <li>14 Hale Road, Hale, Cheshire, WA14 2EX</li>
            <li>
              <a href="tel:+441619290000" className="hover:text-brass-light">
                0161 929 0000
              </a>
            </li>
            <li>Mon–Fri 9:00–17:30, Sat 10:00–16:00</li>
            <li>
              <Link to="/showroom" className="hover:text-brass-light">
                Get directions →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline border-ink-400">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-ink-100 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Cheshire Kitchens. All rights reserved.
          </p>
          <p>Designed &amp; built in Cheshire.</p>
        </div>
      </div>
    </footer>
  );
}
