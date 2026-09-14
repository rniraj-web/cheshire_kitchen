import ProductImage from "@/components/ProductImage";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, whatsappHref } from "@/lib/config";

export const metadata = {
  title: "Showroom",
  description: `Visit our showroom at ${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}. Call, WhatsApp, or send an enquiry.`,
};

const MAP_QUERY = encodeURIComponent(`${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}`);

export default function ShowroomPage() {
  return (
    <>
      <section className="section-surface pt-14 pb-16 md:pt-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-5">Showroom</p>
            <h1 className="text-left">Come and see the finishes in person.</h1>
            <p className="mt-6 max-w-md text-left text-base leading-relaxed text-ink-muted">
              Our Hazel Grove showroom has full display kitchens and bedrooms, along with
              worktop, door and paint samples you can hold up against your own space.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                Call {BUSINESS.phoneDisplay}
              </a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <ProductImage ratio="4/3" fallbackLabel="Showroom shopfront, Hazel Grove" />
        </div>
      </section>

      <section className="section-surface-alt py-16 md:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl">Address</h2>
              <p className="mt-2 text-left text-ink-muted">
                {BUSINESS.addressLine1}
                <br />
                {BUSINESS.addressLine2}
              </p>
            </div>

            <div>
              <h2 className="text-xl">Opening hours</h2>
              <dl className="mt-2 space-y-1">
                {BUSINESS.hours.map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-6 text-sm text-ink-muted tabular-nums">
                    <dt>{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <h2 className="text-xl">Send us an enquiry</h2>
            <p className="mt-2 text-left text-sm text-ink-muted">
              Tell us a little about your project and a designer will get back to you within one
              working day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="container-wide mt-12">
          <div className="card aspect-[16/9] w-full">
            <iframe
              title="Cheshire Kitchens showroom location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
            />
          </div>
          <a
            href={`https://maps.google.com/?q=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
