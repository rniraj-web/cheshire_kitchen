import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { BUSINESS, whatsappHref } from "@/lib/config";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of the Cheshire Kitchens & Bedrooms website.",
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      {/* Header */}
      <section className="section-surface py-5 md:py-5">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Legal</p>

            <h1>Terms & Conditions</h1>

            <p className="mt-4 text-ink-muted">
              These terms explain the conditions that apply when using the
              Cheshire Kitchens & Bedrooms website.
            </p>

            <p className="mt-3 text-sm text-ink-muted">
              Last updated: September 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-10">
        <div className="container-wide">
          <Reveal className="space-y-10">
            <section>
              <h2>1. About these terms</h2>

              <p className="mt-4 text-ink-muted">
                These Terms & Conditions apply to your use of the Cheshire
                Kitchens & Bedrooms website.
              </p>

              <p className="mt-4 text-ink-muted">
                By using this website, you agree to comply with these terms. If
                you do not agree with them, please do not use the website.
              </p>
            </section>

            <section>
              <h2>2. About our website</h2>

              <p className="mt-4 text-ink-muted">
                Our website provides information about Cheshire Kitchens &
                Bedrooms, including our kitchens, bedrooms, services, showroom
                and company background.
              </p>

              <p className="mt-4 text-ink-muted">
                The website is intended to provide general information and
                encourage visitors to contact us or visit our showroom to
                discuss their requirements.
              </p>
            </section>

            <section>
              <h2>3. Website information</h2>

              <p className="mt-4 text-ink-muted">
                We aim to ensure that the information on this website is
                accurate and up to date. However, information, images,
                descriptions, colours, product availability and other details
                may change from time to time.
              </p>

              <p className="mt-4 text-ink-muted">
                Images shown on the website are provided for illustrative
                purposes. Actual kitchen and bedroom finishes, colours,
                materials and products may vary.
              </p>

              <p className="mt-4 text-ink-muted">
                Website information should not be treated as a final quotation,
                specification or contractual offer.
              </p>
            </section>

            <section>
              <h2>4. Showroom visits</h2>

              <p className="mt-4 text-ink-muted">
                We encourage visitors to visit our showroom to view our products
                and discuss their requirements with our team.
              </p>

              <p className="mt-4 text-ink-muted">
                Opening hours displayed on the website are provided for guidance
                and may occasionally change. We recommend contacting us before
                travelling if you are making a specific visit.
              </p>
            </section>

            <section>
              <h2>5. Intellectual property</h2>

              <p className="mt-4 text-ink-muted">
                Unless otherwise stated, the content of this website, including
                text, images, graphics, logos and other materials, belongs to
                Cheshire Kitchens & Bedrooms or is used with permission.
              </p>

              <p className="mt-4 text-ink-muted">
                You may view and use the website for your own personal and
                non-commercial purposes. You must not reproduce, distribute,
                modify or commercially exploit website content without
                appropriate permission.
              </p>
            </section>

            <section>
              <h2>6. Links to other websites</h2>

              <p className="mt-4 text-ink-muted">
                Our website may contain links to third-party websites or
                services. These links are provided for convenience and
                information.
              </p>

              <p className="mt-4 text-ink-muted">
                We are not responsible for the content, availability, security
                or privacy practices of third-party websites.
              </p>
            </section>

            <section>
              <h2>7. Website availability</h2>

              <p className="mt-4 text-ink-muted">
                We aim to keep the website available and functioning properly,
                but we cannot guarantee that the website will always be
                available, uninterrupted or free from errors.
              </p>

              <p className="mt-4 text-ink-muted">
                We may update, change, suspend or withdraw parts of the website
                without prior notice where necessary.
              </p>
            </section>

            <section>
              <h2>8. Limitation of liability</h2>

              <p className="mt-4 text-ink-muted">
                To the extent permitted by law, Cheshire Kitchens & Bedrooms
                will not be responsible for losses arising from your use of, or
                reliance on, information provided through this website.
              </p>

              <p className="mt-4 text-ink-muted">
                Nothing in these terms excludes or limits any liability that
                cannot legally be excluded or limited.
              </p>
            </section>

            <section>
              <h2>9. Privacy</h2>

              <p className="mt-4 text-ink-muted">
                Any personal information submitted through the website will be
                handled in accordance with our privacy practices and applicable
                data protection requirements.
              </p>
            </section>

            <section>
              <h2>10. Changes to these terms</h2>

              <p className="mt-4 text-ink-muted">
                We may update these Terms & Conditions from time to time.
                Changes will be published on this page and will apply from the
                date they are posted.
              </p>
            </section>

            <section>
              <h2>11. Governing law</h2>

              <p className="mt-4 text-ink-muted">
                These Terms & Conditions are governed by the laws of England and
                Wales. Any disputes relating to the use of this website will be
                subject to the applicable courts of England and Wales.
              </p>
            </section>

            <section>
              <h2>12. Contact us</h2>

              <p className="mt-4 text-ink-muted">
                If you have any questions about these Terms & Conditions, please
                contact Cheshire Kitchens & Bedrooms.
              </p>

              {/* <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary inline-flex">
                  Contact us
                </Link>

                <Link href="/showroom" className="btn-outline inline-flex">
                  Visit the showroom
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
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Message on WhatsApp
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
