"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
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

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    try {
      const { auth } = firebaseClient();
      unsub = onAuthStateChanged(auth, async (u) => {
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
    } catch (err) {
      setInitError(err instanceof Error ? err.message : "אתחול Firebase נכשל");
      setLoading(false);
    }
    return () => {
      if (unsub) unsub();
    };
  }, []);

  useEffect(() => {
    if (loading || initError) return;
    if (!user) {
      router.replace(redirectTo ?? "/portal/sign-in");
      return;
    }
    if (requireRole && role && role !== requireRole) {
      router.replace(requireRole === "admin" ? "/portal" : "/admin");
      return;
    }
  }, [loading, user, role, requireRole, router, redirectTo, initError]);

  if (initError) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-800 shadow-sm">
        <div className="font-semibold">לא ניתן לאתחל Firebase</div>
        <p className="mt-2 text-rose-700">{initError}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        טוען…
        <div className="mt-1 text-xs text-slate-500" dir="ltr">{pathname}</div>
      </div>
    );
  }

  if (!user) return null;
  if (requireRole && role && role !== requireRole) return null;

  return <>{children({ user, role })}</>;
}
