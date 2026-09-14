"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "./api";

const TOKEN_KEY = "ck_admin_token";

export function useAdminAuth() {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading a browser-only API, can't run during SSR
    setToken(localStorage.getItem(TOKEN_KEY));
    setReady(true);
  }, []);

  const login = useCallback(async (email, password) => {
    const { token: newToken } = await adminLogin(email, password);
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    router.push("/admin/login");
  }, [router]);

  return { token, ready, login, logout };
}
