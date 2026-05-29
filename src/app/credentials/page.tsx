import Image from "next/image";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function CredentialsPage() {
  return (
    <MarketingPage title="הסמכות וניסיון מקצועי" eyebrow="אמון, מקצועיות ושקיפות">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">השכלה והכשרה</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-900">הנדסאית בניין רשומה</span> ברשות
            ההסמכה להנדסאים וטכנאים מוסמכים, מדור{" "}
            <span className="font-semibold text-slate-900">הנדסה אזרחית</span>, מגמת משנה:{" "}
            <span className="font-semibold text-slate-900">תכנון מבנים</span>.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-500">תאריך הסמכה</div>
              <div className="mt-1 font-semibold text-slate-900" dir="ltr">14.11.2008</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-500">רישום</div>
              <div className="mt-1 font-semibold text-slate-900">פנקס ההנדסאים</div>
            </div>
          </div>
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
            <li className="flex gap-2">
              <span className="text-brand-700">✓</span> תכנון פתרונות יצירתיים למגרשים מאתגרים
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-lg font-semibold text-slate-900">תעודת הסמכה</div>
        <p className="mt-2 text-sm text-slate-600">
          תעודת רישום בפנקס ההנדסאים, רשות ההסמכה להנדסאים וטכנאים מוסמכים, משרד התעשייה
          המסחר והתעסוקה.
        </p>
        <div className="mt-5 mx-auto max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <Image
              src="/certificate.jpg"
              alt="תעודת הנדסאית בניין — עליזה זק"
              fill
              sizes="(min-width: 768px) 32rem, 100vw"
              className="object-contain"
            />
          </div>
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
