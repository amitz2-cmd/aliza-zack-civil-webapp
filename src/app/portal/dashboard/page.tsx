"use client";

import Link from "next/link";
import { AuthGate } from "@/components/auth/AuthGate";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function ClientDashboardPage() {
  return (
    <MarketingPage title="הפרויקטים שלכם" eyebrow="פורטל לקוחות">
      <AuthGate requireRole="client" redirectTo="/portal/sign-in">
        {({ user, role }) => (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">מחובר/ת</div>
              <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">אימייל</div>
                  <div className="mt-1" dir="ltr">{user.email ?? "—"}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">תפקיד</div>
                  <div className="mt-1">{role ?? "לא ידוע"}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">מסמכים</div>
                <p className="mt-2 text-sm text-slate-600">
                  קבצי PDF, תוכניות והיתרים לפרויקטים שלכם (יופעל בקרוב).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">עדכונים</div>
                <p className="mt-2 text-sm text-slate-600">
                  עדכוני התקדמות לפרויקטים שלכם עם קבצים מצורפים (יופעל בקרוב).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">תשלומים</div>
                <p className="mt-2 text-sm text-slate-600">
                  תשלום באשראי, Apple Pay, Google Pay או PayPal (יופעל בקרוב).
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
              <div className="text-sm font-semibold text-slate-900">מנהל?</div>
              <p className="mt-2 text-sm text-slate-600">
                למשתמשים בעלי תפקיד admin — היכנסו לפורטל הניהול.
              </p>
              <div className="mt-5">
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  לפורטל הניהול
                </Link>
              </div>
            </div>
          </div>
        )}
      </AuthGate>
    </MarketingPage>
  );
}
