import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/site/MarketingPage";

const exampleProjects = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: "בית פרטי דו-קומתי",
    summary: "תכנון אדריכלי מלא, החל מסקיצות ראשוניות ועד תוכניות ביצוע. שילוב חכם של מרחבי מגורים ופונקציונליות.",
    tags: ["בית פרטי", "2 קומות", "תכנון מלא"]
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    title: "תוספת קומה ושיפוץ מקיף",
    summary: "הרחבה אנכית לבית קיים — תכנון הנדסי שמשלב בין הקיים לחדש, כולל ליווי מול הרשויות.",
    tags: ["תוספת בניה", "שיפוץ", "ליווי היתר"]
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    title: "מבנה ציבורי — תיאום מערכות",
    summary: "סופרפוזיציה ותיאום בין מערכות חשמל, מיזוג, אינסטלציה וקונסטרוקציה. מניעת התנגשויות בשטח.",
    tags: ["מבנה ציבורי", "סופרפוזיציה", "תיאום מערכות"]
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    title: 'תכנון ממ"ד בבית פרטי',
    summary: 'ממ"ד בתכנון אדריכלי מלא, בהתאם לדרישות פיקוד העורף, משולב בצורה טבעית בתוכנית הבית.',
    tags: ['ממ"ד', "פיקוד העורף", "היתר"]
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    title: "כתב כמויות לפרויקט מכרז",
    summary: "כתב כמויות מפורט ומדויק לפרויקט בניה, ששימש בסיס להשוואה אמיתית בין הצעות קבלנים.",
    tags: ["כתב כמויות", "מכרז", "אומדן"]
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    title: "בית מודרני בשכונת יוקרה",
    summary: "תכנון בית בעל קווים מודרניים, שילוב חומרים והקפדה על פרטים — מהרעיון ועד קבלת מפתח.",
    tags: ["בית פרטי", "תכנון יוקרתי", "ליווי מלא"]
  }
] as const;

export default function ProjectsPage() {
  return (
    <MarketingPage title="פרויקטים" eyebrow="מבט על העבודות שלי">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exampleProjects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-lg font-semibold text-slate-900">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
        <div className="text-lg font-semibold text-slate-900">רוצים פרויקט דומה?</div>
        <p className="mt-2 text-sm text-slate-600">
          שתפו אותי בפרטי הפרויקט — אני אעזור לכם להפוך את הרעיון לתוכנית עבודה ברורה ומדויקת.
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
