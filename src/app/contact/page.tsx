"use client";

import { useState } from "react";
import { MarketingPage } from "@/components/site/MarketingPage";

const PHONE_E164 = "972548060673";
const EMAIL = "azack1962@gmail.com";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("נא למלא שם והודעה");
      return;
    }
    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, message })
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(data?.error ?? "השליחה נכשלה");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("שגיאת רשת. נסו שוב.");
    }
  }

  const sending = status === "sending";

  return (
    <MarketingPage title="צרי קשר" eyebrow="נשמח לשמוע ממך">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">פרטי התקשרות</div>
          <p className="mt-2 text-sm text-slate-600">
            זמינה לייעוץ ראשוני ללא התחייבות. נשמח לעזור לכם להתחיל את הפרויקט נכון.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-300 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">אימייל</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">{EMAIL}</div>
            </a>
            <a
              href="tel:+972548060673"
              className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-300 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">טלפון</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">054-806-0673</div>
            </a>
            <a
              href={`https://wa.me/${PHONE_E164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-300 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">WhatsApp</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">054-806-0673</div>
            </a>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-500">שעות פעילות</div>
              <div className="mt-1 font-semibold text-slate-900">א׳-ה׳, 09:00 – 18:00</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">שליחת הודעה</div>
          <p className="mt-2 text-sm text-slate-600">
            מלאו את הפרטים ואחזור אליכם בהקדם.
          </p>
          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-900">שם מלא</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="השם שלך"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={sending}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">אימייל</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="you@example.com"
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">טלפון</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="050-0000000"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={sending}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">הודעה</label>
              <textarea
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="ספרו לי על הפרויקט שלכם"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={sending}
              />
            </div>

            {status === "success" ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                ✓ ההודעה נשלחה בהצלחה. אחזור אליכם בהקדם.
              </div>
            ) : null}
            {error ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {sending ? "שולח…" : "שליחת הודעה"}
            </button>
          </form>
        </div>
      </div>
    </MarketingPage>
  );
}
