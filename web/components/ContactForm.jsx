"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { submitEnquiry } from "@/lib/api";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const pathname = usePathname();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await submitEnquiry({ ...form, sourcePage: pathname });
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="card border border-black/5 bg-white p-6" role="status" aria-live="polite">
        <p className="text-lg font-medium text-ink">Thank you — your enquiry is on its way.</p>
        <p className="mt-2 text-sm text-ink-muted">
          A designer will get back to you within one working day. For anything urgent, call us or
          message on WhatsApp instead.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-ink-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-ink-muted">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-ink-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ink-muted">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
