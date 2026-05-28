"use client";

import { useState } from "react";
import { MarketingPage } from "@/components/site/MarketingPage";

const PHONE_E164 = "972548060673";
const EMAIL = "azack1962@gmail.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function buildMessageBody() {
    return [
      `שם: ${name.trim()}`,
      `אימייל: ${email.trim()}`,
      `טלפון: ${phone.trim()}`,
      "",
      message.trim()
    ]
      .filter(Boolean)
      .join("\n");
  }

  function validate(): boolean {
    if (!name.trim() || !message.trim()) {
      setError("נא למלא שם והודעה");
      return false;
    }
    setError(null);
    return true;
  }

  function sendViaWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(buildMessageBody())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function sendViaEmail() {
    if (!validate()) return;
    const subject = `פנייה מהאתר — ${name.trim()}`;
    const body = buildMessageBody();
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

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
            מלאו את הפרטים ובחרו איך לשלוח — WhatsApp או אימייל.
          </p>
          <form onSubmit={sendViaWhatsApp} className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-900">שם מלא</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="השם שלך"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
              />
            </div>

            {error ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
              >
                <span>💬</span> שליחה ב-WhatsApp
              </button>
              <button
                type="button"
                onClick={sendViaEmail}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>✉️</span> שליחה באימייל
              </button>
            </div>
          </form>
        </div>
      </div>
    </MarketingPage>
  );
}
