import Link from "next/link";
import { MarketingPage } from "@/components/site/MarketingPage";

const services = [
  {
    icon: "🏠",
    title: "תכנון בתים פרטיים",
    body: "ליווי מלא — מהרעיון הראשוני, דרך היתר בניה ועד תוכניות ביצוע. תכנון אדריכלי שמשלב יופי, פרקטיות וחיסכון."
  },
  {
    icon: "➕",
    title: "תוספות בניה",
    body: "התאמת הבית לצרכים משתנים — הרחבות, קומות נוספות ושדרוגים. תכנון שמשתלב בקיים ועומד בכל הדרישות."
  },
  {
    icon: "🛡️",
    title: 'תכנון ממ"ד',
    body: 'תכנון ממ"ד בהתאם לדרישות פיקוד העורף, כולל הגשה להיתר. שילוב הממ"ד בתוך התכנון הכולל מבלי לפגוע באיכות המגורים.'
  },
  {
    icon: "🏥",
    title: "תיאום מערכות (סופרפוזיציה)",
    body: "תכנון ותיאום מערכות למבנים ציבוריים — מניעת התנגשויות בשטח, חיסכון בזמן ובעלויות ביצוע."
  },
  {
    icon: "📊",
    title: "כתבי כמויות ואומדנים",
    body: "הכנת כתבי כמויות מדויקים למכרזים והשוואת הצעות קבלנים. הבסיס לבניה חכמה וללא הפתעות תקציביות."
  },
  {
    icon: "📋",
    title: "ליווי מול הרשויות",
    body: "טיפול מקיף בהגשות, היתרים ואישורים — עד לקבלת היתר בניה. אני דואגת לכל המסמכים והתיאומים."
  }
] as const;

export default function ServicesPage() {
  return (
    <MarketingPage title="השירותים שלי" eyebrow="תכנון אדריכלי והנדסי מקצה לקצה">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">{s.icon}</div>
            <div className="mt-4 text-lg font-semibold text-slate-900">{s.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
        <div className="text-lg font-semibold text-slate-900">לא בטוחים מה מתאים לכם?</div>
        <p className="mt-2 text-sm text-slate-600">
          ספרו לי על הפרויקט — אני אבנה לכם חבילת שירות מותאמת, עם תוצרים ברורים ולוחות זמנים מסודרים.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            <span>📞</span> לייעוץ ראשוני
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            שאלה? כתבו לי
          </Link>
        </div>
      </div>
    </MarketingPage>
  );
}
