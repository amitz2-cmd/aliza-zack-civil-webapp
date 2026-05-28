import { AuthGate } from "@/components/auth/AuthGate";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function AdminDashboardPage() {
  return (
    <MarketingPage title="Admin Dashboard" eyebrow="Admin portal">
      <AuthGate requireRole="admin" redirectTo="/admin/sign-in">
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Quotes</div>
                <p className="mt-2 text-sm text-slate-600">
                  View and triage inbound quote requests (wired to Firestore next).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Projects</div>
                <p className="mt-2 text-sm text-slate-600">
                  Create clients/projects, post updates, and upload documents (next milestone).
                </p>
              </div>
            </div>
          </div>
        )}
      </AuthGate>
    </MarketingPage>
  );
}

