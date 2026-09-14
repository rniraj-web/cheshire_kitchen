"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/lib/useAdminAuth";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(form.email, form.password);
      router.push("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="container-wide flex min-h-[70vh] items-center justify-center py-20">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5" noValidate>
        <h1 className="text-2xl">Admin sign in</h1>
        <div>
          <label htmlFor="email" className="text-sm text-ink-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="username"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm focus:border-link"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm text-ink-muted">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm focus:border-link"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}
        <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
