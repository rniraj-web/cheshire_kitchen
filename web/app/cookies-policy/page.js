import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { BUSINESS, whatsappHref } from "@/lib/config";

export const metadata = {
  title: "Cookies Policy",
  description:
    "Find out how Cheshire Kitchens & Bedrooms uses cookies and similar technologies on our website.",
};

export default function CookiesPolicyPage() {
  return (
    <main>
      {/* Header */}
      <section className="section-surface py-5 md:py-5">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Legal</p>

            <h1>Cookies Policy</h1>

            <p className="mt-4 text-ink-muted">
              This Cookies Policy explains how Cheshire Kitchens & Bedrooms uses
              cookies and similar technologies when you visit our website.
            </p>

            <p className="mt-3 text-sm text-ink-muted">
              Last updated: September 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-10">
        <div className="container-wide ">
          <Reveal className="space-y-10">
            <section>
              <h2>1. What are cookies?</h2>

              <p className="mt-4 text-ink-muted">
                Cookies are small text files that are placed on your device when
                you visit a website. They help websites remember information
                about your visit and can help improve how the website works.
              </p>
            </section>

            <section>
              <h2>2. How we use cookies</h2>

              <p className="mt-4 text-ink-muted">
                Cheshire Kitchens & Bedrooms uses cookies and similar
                technologies where necessary to help our website function
                correctly and to understand how visitors use the website.
              </p>

              <p className="mt-4 text-ink-muted">
                Our website is primarily designed to showcase our kitchens,
                bedrooms and services and to provide information about our
                showroom. We do not use the website to process online payments
                or provide customer account functionality.
              </p>
            </section>

            <section>
              <h2>3. Types of cookies</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3>Essential cookies</h3>

                  <p className="mt-2 text-ink-muted">
                    These cookies may be required for certain parts of the
                    website to function properly. They are generally used to
                    provide basic website functionality and security.
                  </p>
                </div>

                <div>
                  <h3>Analytics cookies</h3>

                  <p className="mt-2 text-ink-muted">
                    Where analytics services are used, cookies may help us
                    understand how visitors interact with our website, such as
                    which pages are visited and how visitors navigate the
                    website. This information helps us improve the website and
                    the experience we provide.
                  </p>
                </div>

                <div>
                  <h3>Third-party cookies</h3>

                  <p className="mt-2 text-ink-muted">
                    Some features or services provided by third parties may
                    place their own cookies on your device. These may include
                    services used for maps, embedded content, analytics or other
                    website functionality.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>4. Managing cookies</h2>

              <p className="mt-4 text-ink-muted">
                Most web browsers allow you to control or delete cookies through
                their settings. You can usually choose to block cookies, receive
                a warning before cookies are stored, or delete cookies that have
                already been placed on your device.
              </p>

              <p className="mt-4 text-ink-muted">
                Please be aware that disabling certain cookies may affect the
                way some parts of the website function.
              </p>
            </section>

            <section>
              <h2>5. Changes to this policy</h2>

              <p className="mt-4 text-ink-muted">
                We may update this Cookies Policy from time to time to reflect
                changes to our website, the services we use or applicable
                requirements. Any changes will be published on this page.
              </p>
            </section>

            <section>
              <h2>6. Contact us</h2>

              <p className="mt-4 text-ink-muted">
                If you have any questions about this Cookies Policy or how
                cookies are used on our website, please contact us.
              </p>

              {/* <div className="mt-6">
                <Link href="/contact" className="btn-primary inline-flex">
                  Contact us
                </Link>
              </div> */}
            </section>
          </Reveal>

          <Reveal className="container-wide mt-10" direction="up">
            <div
              className="
      relative overflow-hidden rounded-2xl
      border border-hairline
      bg-surface-raised
      p-6
      shadow-[0_12px_40px_rgba(37,99,235,0.08)]
      md:p-10
      dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
    "
            >
              {/* Subtle blue glow */}
              <div
                className="
        pointer-events-none absolute
        -right-24 -top-24
        h-64 w-64
        rounded-full
        bg-blue-500/10
        blur-3xl
        dark:bg-blue-500/15
      "
              />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                {/* Left content */}
                <div className="max-w-xl">
                  <p className="eyebrow mb-3 text-blue-600 dark:text-blue-400">
                    Visit us
                  </p>

                  <h2 className="text-ink">Come and see our showroom</h2>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                    See our kitchens and bedrooms in person, explore the
                    finishes and speak to our team about your project.
                  </p>

                  {/* Opening hours */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        Opening hours
                      </p>

                      <p className="mt-1 text-sm font-medium text-ink">
                        9:30am – 5pm, Monday to Saturday
                      </p>

                      <p className="text-sm text-ink-muted">
                        Closed all day Sunday
                      </p>
                    </div>
                  </div>

                  {/* Contact actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={BUSINESS.phoneHref} className="btn-primary">
                      Call {BUSINESS.phoneDisplay}
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cheshirekitchens.co.uk&su=Kitchen%20Enquiry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Email us
                    </a>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="shrink-0 md:pl-8">
                  <Link
                    href="/showroom"
                    className="group btn-primary inline-flex items-center gap-2"
                  >
                    Visit the showroom
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
