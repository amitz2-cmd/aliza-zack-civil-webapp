import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const services = [
  {
    icon: "🏠",
    title: "תכנון בתים פרטיים",
    body: "ליווי מלא — מהרעיון הראשוני, דרך היתר בניה ועד תוכניות ביצוע."
  },
  {
    icon: "➕",
    title: "תוספות בניה",
    body: "התאמת הבית לצרכים משתנים — הרחבות, קומות נוספות ושדרוגים."
  },
  {
    icon: "🛡️",
    title: 'תכנון ממ"ד',
    body: 'תכנון ממ"ד בהתאם לדרישות פיקוד העורף, כולל הגשה להיתר.'
  },
  {
    icon: "🏥",
    title: "תיאום מערכות (סופרפוזיציה)",
    body: "תכנון ותיאום מערכות למבנים ציבוריים — מניעת התנגשויות בשטח."
  },
  {
    icon: "📊",
    title: "כתבי כמויות ואומדנים",
    body: "הכנת כתבי כמויות מדויקים למכרזים והשוואת הצעות קבלנים."
  }
] as const;

const advantages = [
  "ניסיון של שנים בתחום הבניה והתכנון",
  "שילוב בין אדריכלות להנדסה — פחות טעויות בשטח",
  "חיסכון בעלויות דרך תכנון נכון וכתב כמויות מדויק",
  "ליווי אישי וזמינות לאורך כל הדרך",
  "עבודה מול כל הרשויות עד לקבלת היתר"
] as const;

const gallery = [
  {
    src: "/projects/yavne-2.jpg",
    alt: "בית פרטי דו-משפחתי ביבנה",
    href: "/projects/yavne-narrow-duplex"
  },
  {
    src: "/projects/yaniv-2.jpg",
    alt: "וילה מודרנית — מודל יניב",
    href: "/projects/yaniv-luxury-villa"
  },
  {
    src: "/projects/talalim-1.jpg",
    alt: "בית פרטי בקיבוץ טללים",
    href: "/projects/talalim-kibbutz-house"
  }
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  אדריכלות
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  הנדסה
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  כתבי כמויות
                </div>
                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                  מתכננים נכון מהיום הראשון —
                  <br />
                  חוסכים טעויות, זמן וכסף
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  תכנון אדריכלי והנדסי מדויק — מבתים פרטיים ועד פרויקטים ציבוריים.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+972548060673"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                  >
                    <span>📞</span> לייעוץ ראשוני
                  </a>
                  <a
                    href="https://wa.me/972548060673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    <span>💬</span> שלחי לי הודעה ב-WhatsApp
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-200/60 via-sky-100/30 to-white blur-2xl transition duration-700 group-hover:from-brand-300/70" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
                    alt="בית פרטי מודרני בתכנון אדריכלי"
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* About */}
        <section className="border-t border-slate-200 bg-white py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                  <Image
                    src="/aliza.jpg"
                    alt="עליזה זק — הנדסאית בניין ואדריכלית"
                    fill
                    quality={90}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover saturate-[1.05] brightness-[1.03] transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.08]"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  ✨ מי אני
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  נעים להכיר — עליזה זק
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-700">
                  אני הנדסאית בניין עם ניסיון רב בתכנון אדריכלי והנדסי,
                  מלווה לקוחות משלב הרעיון ועד קבלת מפתח.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  השילוב בין חשיבה אדריכלית להבנה הנדסית מאפשר לי לתכנן נכון —
                  לא רק יפה, אלא גם פרקטי, מדויק וחסכוני.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                🧱 השירותים שלי
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                כל מה שצריך לתכנון מקצועי, במקום אחד
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="text-3xl">{s.icon}</div>
                  <div className="mt-4 text-lg font-semibold text-slate-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why work with me */}
        <section className="border-t border-slate-200 bg-white py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  💡 למה לעבוד איתי?
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  היתרונות שיעשו לך את ההבדל
                </h2>
                <ul className="mt-8 space-y-4">
                  {advantages.map((a) => (
                    <li key={a} className="flex gap-3 text-slate-700">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        ✓
                      </span>
                      <span className="text-base leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                    alt="שרטוטים ותכניות אדריכליות"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Bold message */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-10 text-center text-white shadow-xl md:p-14">
              <div className="text-3xl">📐</div>
              <p className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                בלי תכנון נכון — משלמים ביוקר בשטח
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                תכנון מדויק וכתב כמויות מסודר הם הבסיס לבניה חכמה
              </p>
            </div>
          </Container>
        </section>

        {/* Projects gallery */}
        <section className="border-t border-slate-200 bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                📸 פרויקטים והשראה
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                מבט על העבודות שלי
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {gallery.map((g) => (
                <Link
                  key={g.src}
                  href={g.href}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition duration-500 hover:shadow-xl"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="text-sm font-semibold text-white">{g.alt}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                לכל הפרויקטים ←
              </Link>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 text-center shadow-sm md:p-14">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                מתחילים לתכנן?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                אם יש לך מגרש, רעיון או פרויקט — אני כאן כדי לעזור לך לעשות את זה נכון מהשלב הראשון.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="tel:+972548060673"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  <span>📞</span> צרי קשר עכשיו
                </a>
                <a
                  href="https://wa.me/972548060673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
