import { MarketingPage } from "@/components/site/MarketingPage";

export default function ContactPage() {
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
              href="mailto:azack1962@gmail.com"
              className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-300 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">אימייל</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">azack1962@gmail.com</div>
            </a>
            <a
              href="tel:+972548060673"
              className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-300 hover:bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">טלפון</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">054-806-0673</div>
            </a>
            <a
              href="https://wa.me/972548060673"
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
          <form className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-900">שם מלא</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="השם שלך"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">אימייל</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="you@example.com"
                type="email"
                dir="ltr"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">טלפון</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="050-0000000"
                dir="ltr"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">הודעה</label>
              <textarea
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
                placeholder="ספרו לי על הפרויקט שלכם"
                rows={5}
              />
            </div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              שליחת הודעה
            </button>
          </form>
        </div>
      </div>
    </MarketingPage>
  );
}
