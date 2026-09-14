import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import ContactForm from "../components/ContactForm.jsx";

// Update the address, phone number and WhatsApp number below to the real details.
const ADDRESS_LINE1 = "83-91 London Road";
const ADDRESS_LINE2 = "Hazel Grove, Stockport, Cheshire, SK7 4AX";
const PHONE_DISPLAY = "0161 929 0000";
const PHONE_HREF = "tel:+441619290000";
const WHATSAPP_NUMBER = "447700900000";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_LINE2}`);

const HOURS = [
  ["Monday – Friday", "9:00 – 17:30"],
  ["Saturday", "10:00 – 16:00"],
  ["Sunday", "Closed"],
];

export default function Showroom() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Cheshire Kitchens, I'd like to talk about my project.",
  )}`;

  return (
    <>
      <section className="container-wide grid gap-10 pt-14 pb-16 md:grid-cols-2 md:items-center md:pt-20">
        <div>
          <p className="eyebrow mb-5">Showroom</p>
          <h1 className="text-4xl leading-[1.1] md:text-5xl">
            Come and see the finishes in person.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-400">
            Our Hale showroom has full display kitchens and bedrooms, along with
            worktop, door and paint samples you can hold up against your own
            space.
          </p>
        </div>
        <ImagePlaceholder
          label="Showroom shopfront, Hale"
          ratio="aspect-[4/3]"
        />
      </section>

      <section className="hairline border-ink-100 py-16">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl text-ink">Address</h2>
              <p className="mt-2 text-ink-400">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Call us</h2>
              <p className="mt-2">
                <a href={PHONE_HREF} className="text-ink-400 hover:text-brass">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <h2 className="font-display text-xl text-ink">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-[#128C7E] hover:text-[#0e6b5f]"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.02 3C9.4 3 4 8.36 4 14.96c0 2.36.67 4.56 1.83 6.44L4 29l7.8-1.78a12.9 12.9 0 0 0 4.22.7C22.64 27.92 28 22.56 28 15.96 28 9.36 22.64 3 16.02 3Z" />
                  </svg>
                  Message us on WhatsApp
                </a>
              </h2>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Opening hours</h2>
              <dl className="mt-2 space-y-1">
                {HOURS.map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between gap-6 text-sm text-ink-400"
                  >
                    <dt>{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-xl text-ink">
              Send us an enquiry
            </h2>
            <p className="mt-2 text-sm text-ink-400">
              Tell us a little about your project and a designer will get back
              to you within one working day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden  p-10">
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
      </section>
    </>
  );
}
