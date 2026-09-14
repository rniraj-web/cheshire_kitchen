"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/lib/useAdminAuth";
import AdminNav from "./AdminNav";

export default function AdminGuard({ children }) {
  const { token, ready, logout } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !token) router.replace("/admin/login");
  }, [ready, token, router]);

  if (!ready || !token) {
    return <div className="container-wide py-20 text-sm text-ink-muted">Loading…</div>;
  }

  return (
    <div className="container-wide py-10">
      <AdminNav onLogout={logout} />
      <div className="mt-8">{children(token)}</div>
    </div>
  );
}
