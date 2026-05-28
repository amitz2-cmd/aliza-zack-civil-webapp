"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MarketingPage } from "@/components/site/MarketingPage";
import { firebaseClient } from "@/lib/firebase/client";

export default function PortalSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { auth } = firebaseClient();
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/portal/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "ההתחברות נכשלה");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MarketingPage title="כניסת לקוחות" eyebrow="פורטל לקוחות">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-lg font-semibold text-slate-900">התחברות</div>
        <p className="mt-2 text-sm text-slate-600">
          השתמשו בפרטי ההתחברות שקיבלתם בעת פתיחת הפרויקט.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-900">אימייל</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
              placeholder="you@example.com"
              type="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-900">סיסמה</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? "מתחבר…" : "התחברות"}
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-600">
          רוצים לפתוח פרויקט?{" "}
          <Link className="font-semibold text-brand-700 hover:text-brand-800" href="/quote">
            בקשו הצעת מחיר ←
          </Link>
        </div>
      </div>
    </MarketingPage>
  );
}
