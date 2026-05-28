"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MarketingPage } from "@/components/site/MarketingPage";
import { firebaseClient } from "@/lib/firebase/client";

export default function AdminSignInPage() {
  const router = useRouter();
  const { auth } = useMemo(() => firebaseClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MarketingPage title=\"Admin Sign In\" eyebrow=\"Admin portal\">
      <div className=\"mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm\">
        <div className=\"text-sm font-semibold text-slate-900\">Sign in</div>
        <p className=\"mt-2 text-sm text-slate-600\">
          Admin access is role-based. You must have <span className=\"font-semibold text-slate-900\">admin</span> role in Firestore.
        </p>

        <form onSubmit={onSubmit} className=\"mt-6 space-y-4\">
          <div>
            <label className=\"text-sm font-medium text-slate-900\">Email</label>
            <input
              className=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4\"
              placeholder=\"admin@example.com\"
              type=\"email\"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className=\"text-sm font-medium text-slate-900\">Password</label>
            <input
              className=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4\"
              placeholder=\"••••••••\"
              type=\"password\"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error ? (
            <div className=\"rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700\">
              {error}
            </div>
          ) : null}

          <button
            type=\"submit\"
            disabled={loading}
            className=\"inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60\"
          >
            {loading ? \"Signing in…\" : \"Sign in\"}
          </button>
        </form>

        <div className=\"mt-6 text-sm text-slate-600\">
          Client?{\" \"}
          <Link className=\"font-semibold text-brand-700 hover:text-brand-800\" href=\"/portal/sign-in\">
            Go to client sign-in →
          </Link>
        </div>
      </div>
    </MarketingPage>
  );
}

