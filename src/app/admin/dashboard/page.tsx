"use client";

import { AuthGate } from "@/components/auth/AuthGate";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function AdminDashboardPage() {
  return (
    <MarketingPage title="לוח ניהול" eyebrow="פורטל מנהל">
      <AuthGate requireRole="admin" redirectTo="/admin/sign-in">
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">בקשות הצעת מחיר</div>
                <p className="mt-2 text-sm text-slate-600">
                  בקשות נכנסות מהאתר — מקושר ל-Firestore.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">פרויקטים</div>
                <p className="mt-2 text-sm text-slate-600">
                  ניהול לקוחות ופרויקטים, העלאת מסמכים ועדכוני התקדמות (בקרוב).
                </p>
              </div>
            </div>
          </div>
        )}
      </AuthGate>
    </MarketingPage>
  );
}
