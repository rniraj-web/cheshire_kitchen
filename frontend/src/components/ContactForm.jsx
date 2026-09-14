import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || "Something went wrong sending your enquiry.",
        );
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="border border-brass bg-stone-100 p-6">
        <p className="font-display text-xl text-ink">
          Thank you — your enquiry is on its way.
        </p>
        <p className="mt-2 text-sm text-ink-400">
          A designer will get back to you within one working day. For anything
          urgent, call us or message on WhatsApp instead.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-brass hover:text-brass-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-ink-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full border border-ink-100 bg-stone-50 px-3 py-2.5 text-sm text-charcoal focus:border-brass"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-ink-400">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-ink-100 bg-stone-50 px-3 py-2.5 text-sm text-charcoal focus:border-brass"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-ink-400">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full border border-ink-100 bg-stone-50 px-3 py-2.5 text-sm text-charcoal focus:border-brass"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ink-400">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full border border-ink-100 bg-stone-50 px-3 py-2.5 text-sm text-charcoal focus:border-brass"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
