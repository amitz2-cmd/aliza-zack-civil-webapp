import { MarketingPage } from "@/components/site/MarketingPage";

export default function CredentialsPage() {
  return (
    <MarketingPage title="הסמכות וניסיון מקצועי" eyebrow="אמון, מקצועיות ושקיפות">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">השכלה והכשרה</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-900">הנדסאית בניין</span> — הסמכה רשמית עם רישיון מקצועי.
            התמחות בתכנון אדריכלי, הנדסי וכתבי כמויות.
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            השילוב בין אדריכלות להנדסה מאפשר לי לראות את הפרויקט בעיניים של כל הגורמים המעורבים —
            מהלקוח, דרך הרשויות, ועד לקבלן בשטח.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">תחומי מומחיות</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> תכנון אדריכלי לבתים פרטיים ותוספות בניה
            </li>
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> תכנון ממ&quot;ד בהתאם לדרישות פיקוד העורף
            </li>
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> תיאום מערכות וסופרפוזיציה במבנים ציבוריים
            </li>
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> הכנת כתבי כמויות ואומדנים למכרזים
            </li>
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> ליווי מול ועדות תכנון ובניה ורשויות
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-2xl">📐</div>
          <div className="mt-3 text-sm font-semibold text-slate-900">תהליך מקצועי</div>
          <p className="mt-2 text-sm text-slate-600">
            אבני דרך ברורות, תיעוד שינויים ומסירת תוצרים מסודרים לכל שלב.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-2xl">🤝</div>
          <div className="mt-3 text-sm font-semibold text-slate-900">ליווי אישי</div>
          <p className="mt-2 text-sm text-slate-600">
            זמינה לשאלות לאורך כל הדרך, עם הסברים פרקטיים בגובה העיניים.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-2xl">💼</div>
          <div className="mt-3 text-sm font-semibold text-slate-900">שיתוף פעולה</div>
          <p className="mt-2 text-sm text-slate-600">
            עבודה צמודה עם אדריכלים, מהנדסים וקבלנים — לתוצאה אחת מדויקת.
          </p>
        </div>
      </div>
    </MarketingPage>
  );
}
