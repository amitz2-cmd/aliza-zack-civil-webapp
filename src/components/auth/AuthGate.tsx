"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { firebaseClient } from "@/lib/firebase/client";
import { getUserRole, type UserRole } from "@/lib/auth/roles";

type AuthGateProps = {
  requireRole?: UserRole;
  redirectTo?: string;
  children: (args: { user: User; role: UserRole | null }) => React.ReactNode;
};

export function AuthGate({ requireRole, redirectTo, children }: AuthGateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { auth } = useMemo(() => firebaseClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoading(true);
      if (!u) {
        setRole(null);
        setLoading(false);
        return;
      }
      try {
        const r = await getUserRole(u.uid);
        setRole(r);
      } finally {
        setLoading(false);
      }
    });
    return () => unsub();
  }, [auth]);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace(redirectTo ?? "/portal/sign-in");
      return;
    }
    if (requireRole && role && role !== requireRole) {
      router.replace(requireRole === "admin" ? "/portal" : "/admin");
      return;
    }
  }, [loading, user, role, requireRole, router, redirectTo]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        Loading…
        <div className="mt-1 text-xs text-slate-500">{pathname}</div>
      </div>
    );
  }

  if (!user) return null;
  if (requireRole && role && role !== requireRole) return null;

  return <>{children({ user, role })}</>;
}

