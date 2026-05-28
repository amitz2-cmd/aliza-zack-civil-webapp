"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { firebaseClient } from "@/lib/firebase/client";

type QuoteFormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  stories: string;
  scope: string;
  attachmentsNote: string;
};

const PROJECT_TYPES = [
  "תכנון בית פרטי",
  "תוספת בניה / שיפוץ",
  'תכנון ממ"ד',
  "תיאום מערכות / סופרפוזיציה",
  "כתב כמויות ואומדן",
  "אחר"
] as const;

const STORIES = ["1", "2", "3", "4"] as const;

export default function QuoteForm() {
  const [state, setState] = useState<QuoteFormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectType: PROJECT_TYPES[0],
    stories: STORIES[0],
    scope: "",
    attachmentsNote: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  function set<K extends keyof QuoteFormState>(key: K, value: QuoteFormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccessId(null);
    setSubmitting(true);
    try {
      const { db } = firebaseClient();
      const docRef = await addDoc(collection(db, "quotes"), {
        requester: {
          name: state.name.trim(),
          email: state.email.trim(),
          phone: state.phone.trim() || null
        },
        project: {
          location: state.location.trim(),
          projectType: state.projectType,
          stories: state.stories,
          scope: state.scope.trim(),
          attachmentsNote: state.attachmentsNote.trim() || null
        },
        status: "new",
        createdAt: serverTimestamp()
      });
      setSuccessId(docRef.id);
      setState((s) => ({ ...s, scope: "", attachmentsNote: "" }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "השליחה נכשלה");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5">
      <p className="text-sm text-slate-600">
        מלאו את הפרטים ואחזור אליכם בהקדם עם הצעה מסודרת.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-900">שם מלא</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
            placeholder="השם שלך"
            value={state.name}
            onChange={(e) => set("name", e.target.value)}
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
            value={state.email}
            onChange={(e) => set("email", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-900">טלפון (אופציונלי)</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
            placeholder="050-0000000"
            dir="ltr"
            value={state.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-900">מיקום הפרויקט</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
            placeholder="עיר / שכונה"
            value={state.location}
            onChange={(e) => set("location", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-900">סוג הפרויקט</label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
            value={state.projectType}
            onChange={(e) => set("projectType", e.target.value)}
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-900">מספר קומות</label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
            value={state.stories}
            onChange={(e) => set("stories", e.target.value)}
          >
            {STORIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-900">תיאור הפרויקט</label>
        <textarea
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-600/20 focus:ring-4"
          placeholder="ספרו לי מה תרצו לבנות, אילוצים מיוחדים והמטרות שלכם"
          rows={6}
          value={state.scope}
          onChange={(e) => set("scope", e.target.value)}
          required
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-sm font-semibold text-slate-900">מסמכים קיימים (הערה)</div>
        <p className="mt-1 text-sm text-slate-600">
          העלאת קבצים תתאפשר בקרוב. בינתיים, ציינו אילו מסמכים זמינים לכם.
        </p>
        <div className="mt-3">
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-brand-600/20 focus:ring-4"
            placeholder='לדוגמה: תוכניות אדריכל (PDF), תמונות מהשטח, מפת מדידה'
            value={state.attachmentsNote}
            onChange={(e) => set("attachmentsNote", e.target.value)}
          />
        </div>
      </div>

      {successId ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          הבקשה נשלחה. מספר אסמכתא: <span className="font-semibold">{successId}</span>
        </div>
      ) : null}
      {error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60"
      >
        {submitting ? "שולח…" : "שליחת בקשה"}
      </button>
    </form>
  );
}
