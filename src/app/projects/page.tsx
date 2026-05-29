import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/site/MarketingPage";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <MarketingPage title="פרויקטים" eyebrow="מבט על העבודות שלי">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                {p.title}
              </div>
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
              <div className="mt-4 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                לפרטים נוספים ←
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
        <div className="text-lg font-semibold text-slate-900">רוצים פרויקט דומה?</div>
        <p className="mt-2 text-sm text-slate-600">
          שתפו אותי בפרטי הפרויקט — אני אעזור לכם להפוך את הרעיון לתוכנית עבודה ברורה ומדויקת.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+972548060673"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            <span>📞</span> לייעוץ ראשוני
          </a>
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
