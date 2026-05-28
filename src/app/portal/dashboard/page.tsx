import Link from "next/link";
import { AuthGate } from "@/components/auth/AuthGate";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function ClientDashboardPage() {
  return (
    <MarketingPage title="Your Projects" eyebrow="Client portal">
      <AuthGate requireRole="client" redirectTo="/portal/sign-in">
        {({ user, role }) => (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">Signed in</div>
              <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Email</div>
                  <div className="mt-1">{user.email ?? "—"}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Role</div>
                  <div className="mt-1">{role ?? "unknown"}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Documents</div>
                <p className="mt-2 text-sm text-slate-600">
                  PDFs, plans, and revision files for your projects (enabled in the next milestone).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Updates</div>
                <p className="mt-2 text-sm text-slate-600">
                  Project timeline posts with attachments (enabled in the next milestone).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Payments</div>
                <p className="mt-2 text-sm text-slate-600">
                  Pay by card/Apple Pay/Google Pay (Stripe) or PayPal (enabled in the payments milestone).
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
              <div className="text-sm font-semibold text-slate-900">Admin?</div>
              <p className="mt-2 text-sm text-slate-600">
                If you’re an admin user, use the admin portal.
              </p>
              <div className="mt-5">
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Go to admin portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </AuthGate>
    </MarketingPage>
  );
}

