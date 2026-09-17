// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import JSZip from "jszip";

// const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

// const initialState = { name: "", email: "", phone: "", message: "" };

// export default function ContactForm() {
//   const [form, setForm] = useState(initialState);
//   const [files, setFiles] = useState(null);
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const [errorMsg, setErrorMsg] = useState("");
//   const pathname = usePathname();

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleFileChange = (e) => {
//     setFiles(e.target.files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     setErrorMsg("");

//     try {
//       // ── Build FormData ──────────────────────────────────
//       const formData = new FormData();
//       formData.append("access_key", ACCESS_KEY);
//       formData.append("subject", "New Showroom Enquiry");
//       formData.append("from_name", form.name);
//       formData.append("redirect", "false");

//       // Standard fields
//       formData.append("name", form.name);
//       formData.append("email", form.email);
//       formData.append("phone", form.phone);
//       formData.append("message", form.message);
//       formData.append("source_page", pathname);

//       // ── ZIP the files (if any) ──────────────────────────
//       if (files && files.length > 0) {
//         const zip = new JSZip();
//         Array.from(files).forEach((file) => {
//           zip.file(file.name, file);
//         });
//         const zipBlob = await zip.generateAsync({ type: "blob" });
//         formData.append("attachment", zipBlob, "attachments.zip");
//       }

//       // ── Submit to Web3Forms ─────────────────────────────
//       // Do NOT set Content-Type — the browser adds the
//       // correct multipart boundary automatically.
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (data.success) {
//         setStatus("success");
//         setForm(initialState);
//         setFiles(null);
//       } else {
//         throw new Error(data.message || "Submission failed");
//       }
//     } catch (err) {
//       setStatus("error");
//       setErrorMsg(err.message);
//     }
//   };

//   // ── Success state ───────────────────────────────────────
//   if (status === "success") {
//     return (
//       <div
//         className="card border border-hairline bg-surface-raised p-6"
//         role="status"
//         aria-live="polite"
//       >
//         <p className="text-lg font-medium text-ink">
//           Thank you - your enquiry is on its way.
//         </p>
//         <p className="mt-2 text-sm text-ink-muted">
//           A designer will get back to you within one working day. For anything
//           urgent, call us or message on WhatsApp instead.
//         </p>
//         <button
//           type="button"
//           onClick={() => setStatus("idle")}
//           className="mt-4 text-sm"
//         >
//           Send another enquiry
//         </button>
//       </div>
//     );
//   }

//   // ── Form ────────────────────────────────────────────────
//   return (
//     <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//       {/* Honeypot field — hidden from real users, catches bots */}
//       <input type="checkbox" name="botcheck" className="hidden" />

//       <div className="grid gap-5 sm:grid-cols-2">
//         <div>
//           <label htmlFor="name" className="text-sm text-ink-muted">
//             Full Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             autoComplete="name"
//             value={form.name}
//             onChange={handleChange}
//             className="mt-1 w-full rounded-2xl border border-hairline bg-surface-raised px-4 py-2.5 text-sm text-ink focus:border-link"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="text-sm text-ink-muted">
//             Phone
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             required
//             autoComplete="tel"
//             value={form.phone}
//             onChange={handleChange}
//             className="mt-1 w-full rounded-2xl border border-hairline bg-surface-raised px-4 py-2.5 text-sm text-ink focus:border-link"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="email" className="text-sm text-ink-muted">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           required
//           autoComplete="email"
//           value={form.email}
//           onChange={handleChange}
//           className="mt-1 w-full rounded-2xl border border-hairline bg-surface-raised px-4 py-2.5 text-sm text-ink focus:border-link"
//         />
//       </div>

//       <div>
//         <label htmlFor="message" className="text-sm text-ink-muted">
//           Tell us about your project
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows={4}
//           required
//           value={form.message}
//           onChange={handleChange}
//           className="mt-1 w-full rounded-2xl border border-hairline bg-surface-raised px-4 py-2.5 text-sm text-ink focus:border-link"
//         />
//       </div>

//       {/* ── File upload ─────────────────────────────────── */}
//       <div>
//         <label htmlFor="files" className="text-sm text-ink-muted">
//           Attach files (optional - photos, plans, measurements)
//         </label>
//         <input
//           id="files"
//           name="files"
//           type="file"
//           multiple
//           accept="image/*,.pdf,.doc,.docx,.zip"
//           onChange={handleFileChange}
//           className="mt-1 block w-full text-sm text-ink-muted
//                      file:mr-4 file:rounded-full file:border-0
//                      file:bg-surface-raised file:px-4 file:py-2
//                      file:text-sm file:font-medium file:text-ink
//                      hover:file:bg-surface-raised/80"
//         />
//         {files && files.length > 0 && (
//           <p className="mt-1 text-xs text-ink-muted">
//             {files.length} file{files.length !== 1 ? "s" : ""} selected — will
//             be sent as a single .zip
//           </p>
//         )}
//       </div>

//       {status === "error" && (
//         <p className="text-sm text-red-700 dark:text-red-400" role="alert">
//           {errorMsg}
//         </p>
//       )}

//       <button
//         type="submit"
//         disabled={status === "sending"}
//         className="btn-primary disabled:opacity-60"
//       >
//         {status === "sending" ? "Sending…" : "Send enquiry"}
//       </button>
//     </form>
//   );
// }
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import JSZip from "jszip";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const initialState = { name: "", email: "", phone: "+44", message: "" };
const initialErrors = { name: "", email: "", phone: "", message: "" };

// ── Validation helpers ────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+44\d{10}$/;

function validate(form) {
  const errors = { ...initialErrors };
  let isValid = true;

  if (!form.name.trim()) {
    errors.name = "Name is required.";
    isValid = false;
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
    isValid = false;
  }

  if (form.phone.replace(/\s/g, "").length <= 3) {
    errors.phone = "Phone number is required.";
    isValid = false;
  } else if (!PHONE_REGEX.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter 10 digits after +44.";
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
    isValid = false;
  }

  return { isValid, errors };
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [files, setFiles] = useState(null);
  const [fieldErrors, setFieldErrors] = useState(initialErrors);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const pathname = usePathname();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Only allow phone-friendly characters as the user types
  const handlePhoneChange = (e) => {
    let raw = e.target.value;
    // Prevent deleting the +44 prefix
    if (!raw.startsWith("+44")) {
      raw = "+44";
    }
    // Strip everything except digits after the prefix
    const afterPrefix = raw.slice(3).replace(/\D/g, "");
    // Limit to 10 digits after +44
    const capped = afterPrefix.slice(0, 10);
    const newValue = "+44" + capped;
    setForm((f) => ({ ...f, phone: newValue }));
    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Validate ────────────────────────────────────────
    const { isValid, errors } = validate(form);
    setFieldErrors(errors);
    if (!isValid) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("access_key", ACCESS_KEY);
      formData.append("subject", "New Showroom Enquiry");
      formData.append("from_name", form.name);
      formData.append("redirect", "false");

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("source_page", pathname);

      // ── ZIP the files (if any) ────────────────────────
      if (files && files.length > 0) {
        const zip = new JSZip();
        Array.from(files).forEach((file) => {
          zip.file(file.name, file);
        });
        const zipBlob = await zip.generateAsync({ type: "blob" });
        formData.append("attachment", zipBlob, "attachments.zip");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(initialState);
        setFiles(null);
        setFieldErrors(initialErrors);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  // ── Success state ─────────────────────────────────────
  if (status === "success") {
    return (
      <div
        className="card border border-hairline bg-surface-raised p-6"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium text-ink">
          Thank you - your enquiry is on its way.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          A designer will get back to you within one working day. For anything
          urgent, call us or message on WhatsApp instead.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* ── Name ──────────────────────────────────────── */}
        <div>
          <label htmlFor="name" className="text-sm text-ink-muted">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`mt-1 w-full rounded-2xl border px-4 py-2.5 text-sm text-ink focus:border-link bg-surface-raised ${
              fieldErrors.name ? "border-red-500" : "border-hairline"
            }`}
          />
          {fieldErrors.name && (
            <p
              id="name-error"
              className="mt-1 text-xs text-red-600 dark:text-red-400"
              role="alert"
            >
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* ── Phone ─────────────────────────────────────── */}
        <div>
          <label htmlFor="phone" className="text-sm text-ink-muted">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={13}
            value={form.phone}
            onChange={handlePhoneChange}
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={`mt-1 w-full rounded-2xl border px-4 py-2.5 text-sm text-ink focus:border-link bg-surface-raised ${
              fieldErrors.phone ? "border-red-500" : "border-hairline"
            }`}
          />
          {fieldErrors.phone && (
            <p
              id="phone-error"
              className="mt-1 text-xs text-red-600 dark:text-red-400"
              role="alert"
            >
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      {/* ── Email ───────────────────────────────────────── */}
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
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className={`mt-1 w-full rounded-2xl border px-4 py-2.5 text-sm text-ink focus:border-link bg-surface-raised ${
            fieldErrors.email ? "border-red-500" : "border-hairline"
          }`}
        />
        {fieldErrors.email && (
          <p
            id="email-error"
            className="mt-1 text-xs text-red-600 dark:text-red-400"
            role="alert"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* ── Message ─────────────────────────────────────── */}
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
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`mt-1 w-full rounded-2xl border px-4 py-2.5 text-sm text-ink focus:border-link bg-surface-raised ${
            fieldErrors.message ? "border-red-500" : "border-hairline"
          }`}
        />
        {fieldErrors.message && (
          <p
            id="message-error"
            className="mt-1 text-xs text-red-600 dark:text-red-400"
            role="alert"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* ── File upload ─────────────────────────────────── */}
      <div>
        <label htmlFor="files" className="text-sm text-ink-muted">
          Attach files (optional — photos, plans, measurements)
        </label>
        <input
          id="files"
          name="files"
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx,.zip"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-ink-muted
                     file:mr-4 file:rounded-full file:border-0
                     file:bg-surface-raised file:px-4 file:py-2
                     file:text-sm file:font-medium file:text-ink
                     hover:file:bg-surface-raised/80"
        />
        {files && files.length > 0 && (
          <p className="mt-1 text-xs text-ink-muted">
            {files.length} file{files.length !== 1 ? "s" : ""} selected — will
            be sent as a single .zip
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 dark:text-red-400" role="alert">
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
